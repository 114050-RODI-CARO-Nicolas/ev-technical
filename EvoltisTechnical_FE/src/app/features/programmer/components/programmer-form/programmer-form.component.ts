import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {MultiSelectModule} from 'primeng/multiselect';
import { AsyncPipe } from '@angular/common';
import { loadSkills, createProgrammer, updateProgrammer } from '../../../../../core/store/actions/programmer.action';
import { selectSkills, selectProgrammersLoading, selectProgrammerById, selectCreateSuccess } from '../../../../../core/store/selectors/programmer.selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../../../../../core/store/app.state';


type FormMode = 'create' | 'edit' | 'view';

@Component({
  selector: 'app-programmer-form',
  standalone: true,
  imports: [ReactiveFormsModule, CardModule, InputTextModule, ButtonModule, MultiSelectModule, AsyncPipe],
  templateUrl: './programmer-form.component.html',
  styleUrl: './programmer-form.component.css'
})


export class ProgrammerFormComponent implements OnInit {

  @Input() mode : FormMode = 'create';

 
  candidateForm!: FormGroup;
  skills$;
  loading$;
  currentProgrammer$;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private route: ActivatedRoute, private router: Router){
    const routeMode = this.route.snapshot.data['mode'];
    if(routeMode){
      this.mode = routeMode as FormMode;
    }
    this.skills$=this.store.select(selectSkills);
    this.loading$=this.store.select(selectProgrammersLoading);
    this.currentProgrammer$=this.store.select(selectProgrammerById(this.route.snapshot.params['id']));
    this.initForm();
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
    this.store.dispatch(loadSkills());
    if(this.mode !== 'create'){
      this.currentProgrammer$.subscribe(programmer => {
        if(programmer){
          this.candidateForm.patchValue(programmer);
        }
      });
    }
  };


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
