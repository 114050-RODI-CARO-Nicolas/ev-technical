import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {MultiSelectModule} from 'primeng/multiselect';
import { AsyncPipe } from '@angular/common';
import { loadSkills, createProgrammer, updateProgrammer, loadProgrammers, loadProgrammerById } from '../../../../../core/store/actions/programmer.action';
import { selectSkills, selectProgrammerById, selectCreateSuccess, selectCreateLoading, selectSkillsLoading, selectCurrentProgrammer, selectUpdateSuccess, selectError } from '../../../../../core/store/selectors/programmer.selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../../../../../core/store/app.state';
import { combineLatest, filter, take, timer } from 'rxjs';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast' 
type FormMode = 'create' | 'edit' | 'view';

@Component({
  selector: 'app-programmer-form',
  standalone: true,
  imports: [ReactiveFormsModule, CardModule, InputTextModule, ButtonModule, MultiSelectModule, ToastModule, AsyncPipe],
  providers: [MessageService],
  templateUrl: './programmer-form.component.html',
  styleUrl: './programmer-form.component.css'
})


export class ProgrammerFormComponent implements OnInit {

  @Input() mode : FormMode = 'create';

 
  candidateForm!: FormGroup;
  skills$;
  skillsLoading$;
  createLoading$;
  currentProgrammer$;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private route: ActivatedRoute, private router: Router, private messageService: MessageService){
    const routeMode = this.route.snapshot.data['mode'];
    if(routeMode){
      this.mode = routeMode as FormMode;
    }
    this.skills$=this.store.select(selectSkills);
    this.skillsLoading$=this.store.select(selectSkillsLoading)
    this.createLoading$=this.store.select(selectCreateLoading);
    this.currentProgrammer$=this.store.select(selectCurrentProgrammer);
    this.initForm();

      combineLatest([
        this.store.select(selectCreateSuccess),
        this.store.select(selectUpdateSuccess)
    ]).subscribe(([createSuccess, updateSuccess]) => {
        if (createSuccess || updateSuccess) {
            this.messageService.add({
                severity: 'success',
                summary: 'Éxito',
                detail: createSuccess 
                    ? 'Candidato creado correctamente' 
                    : 'Candidato actualizado correctamente'
            });
            
            timer(5000).pipe(take(1)).subscribe(() => {
                this.router.navigate(['/candidates/list']);
            });
        }
    });

      this.store.select(selectError).subscribe(error => {
          if (error) {
              this.messageService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: error
              });
          }
      });

    

    


  }

  private initForm(){
    this.candidateForm = this.fb.group({
      id: [null],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      skillIds: [[], [Validators.required]]
    });
    if(this.mode === 'view'){
      this.candidateForm.disable();
    }
  
  };

  ngOnInit(): void {
    if(this.mode !== 'create') {
        const id = Number(this.route.snapshot.params['id']);

        this.store.dispatch(loadSkills());
        this.store.dispatch(loadProgrammerById({id}));

        combineLatest([
            this.skills$.pipe(
                filter(skills => skills.length > 0),
                take(1)
            ),
            this.currentProgrammer$.pipe(
                filter(programmer => !!programmer),
                take(1)
            )
        ]).subscribe(([skills, programmer]) => {
            this.candidateForm.patchValue({
                ...programmer,
                skillIds: programmer.skills?.map(s => s.id) || []
            });
        });
    } else {
        this.store.dispatch(loadSkills());
    }
}




  onSubmit(){
    if(this.candidateForm.valid){
      const formValue = this.candidateForm.value;
      const action = this.mode === 'create'
      ? createProgrammer({programmer: this.candidateForm.value})
      : updateProgrammer({id: formValue.id,  programmer: this.candidateForm.value });
      this.store.dispatch(action);
    } else {
      this.candidateForm.markAllAsTouched();
    }
  }

  onCancel() {
    this.router.navigate(['/candidates/list']);
  }

}
