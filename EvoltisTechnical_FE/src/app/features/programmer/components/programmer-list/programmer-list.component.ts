import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { deleteProgrammer, loadProgrammers } from '../../../../../core/store/actions/programmer.action';
import { selectAllProgrammers, selectListLoading, selectProgrammersLoading } from '../../../../../core/store/selectors/programmer.selectors';

import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { AppState } from '../../../../../core/store/app.state';

@Component({
  selector: 'app-programmer-list',
  standalone: true,
  imports: [AsyncPipe, TableModule, CardModule, ButtonModule, ConfirmDialogModule],
  providers: [ConfirmationService],
  templateUrl: './programmer-list.component.html',
  styleUrl: './programmer-list.component.css'
})
export class ProgrammerListComponent implements OnInit {

  programmers$;
  loading$;


  constructor(private store: Store<AppState>, private router: Router, private confirmationService: ConfirmationService) {
    this.programmers$ = this.store.select(selectAllProgrammers);
    this.loading$ = this.store.select(selectListLoading);
  }
  
  ngOnInit(): void {
    this.store.dispatch(loadProgrammers());
  
  }

  
  onView(id: number) {
    this.router.navigate([`/programmers/${id}/view`]);
  }

  onEdit(id: number){
    this.router.navigate([`/programmers/${id}/edit`]);
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
