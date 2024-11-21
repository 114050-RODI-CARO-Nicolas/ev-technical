import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {TableModule} from 'primeng/table';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextModule } from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { deleteProgrammer, loadProgrammers } from '../../../../../core/store/actions/programmer.action';
import { selectAllProgrammers, selectListLoading, selectProgrammersLoading } from '../../../../../core/store/selectors/programmer.selectors';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { AppState } from '../../../../../core/store/app.state';
import { FormsModule } from '@angular/forms';
import { ProgrammerResponseDTO } from '../../models/programmer-response-dto';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
@Component({
  selector: 'app-programmer-list',
  standalone: true,
  imports: [FormsModule, AsyncPipe, TableModule, SelectButtonModule, InputTextModule, CardModule, ButtonModule, ConfirmDialogModule],
  providers: [ConfirmationService],
  templateUrl: './programmer-list.component.html',
  styleUrl: './programmer-list.component.css'
})
export class ProgrammerListComponent implements OnInit {

  programmers$;
  loading$;

  filteredProgrammers$;
  statusFilter: boolean | null = null;
  globalFilter: string = '';

  private filterSubject = new BehaviorSubject<string>('');
  private statusSubject = new BehaviorSubject<boolean | null>(null);


  constructor(private store: Store<AppState>, private router: Router, private confirmationService: ConfirmationService) {
    this.programmers$ = this.store.select(selectAllProgrammers);
    this.loading$ = this.store.select(selectListLoading);

    this.filteredProgrammers$ = combineLatest([
      this.programmers$,
      this.filterSubject,
      this.statusSubject
    ]).pipe(
      map(([programmers, filter, status])=>{
        return programmers.filter(programmer => {
          const matchesSearch = !filter.trim() ||
          programmer.firstName.toLowerCase().includes(filter.toLowerCase()) ||
          programmer.lastName.toLowerCase().includes(filter.toLowerCase());
          const matchesStatus = status === null || programmer.isActive === status;
          return matchesSearch && matchesStatus;
        });
      })
    )
  }
  
  ngOnInit(): void {
    this.store.dispatch(loadProgrammers());
  
  }

  private updateFilters(){
    this.filterSubject.next(this.globalFilter);
    this.statusSubject.next(this.statusFilter);
  }


  onGlobalFilterChange(value: string){
    this.globalFilter = value;
    this.updateFilters();
  }

  onStatusChange(status: boolean | null){
    this.statusFilter = status;
    this.updateFilters();
  }

  
  onView(id: number) {
    this.router.navigate([`/candidates/${id}/view`]);
  }

  onEdit(id: number){
    this.router.navigate([`/candidates/${id}/edit`]);
  }

  onDeactivate(id: number) {
    this.confirmationService.confirm({
      message: '¿Está seguro de que desea deshabilitar este candidato?',
      header: 'Confirmar deshabilitar',
      icon: 'pi pi-exclamation-triangle',
      accept: ()=> {
        this.store.dispatch(deleteProgrammer({id}));
      }
    })
  }
}
