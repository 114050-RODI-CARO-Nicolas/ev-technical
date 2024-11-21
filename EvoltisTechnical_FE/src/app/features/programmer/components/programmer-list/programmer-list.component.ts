import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { loadProgrammers } from '../../../../../core/store/actions/programmer.action';
import { selectAllProgrammers, selectProgrammersLoading } from '../../../../../core/store/selectors/programmer.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-programmer-list',
  standalone: true,
  imports: [AsyncPipe, TableModule, CardModule, ButtonModule],
  templateUrl: './programmer-list.component.html',
  styleUrl: './programmer-list.component.css'
})
export class ProgrammerListComponent implements OnInit {

  programmers$;
  loading$;


  constructor(private store: Store) {
    this.programmers$ = this.store.select(selectAllProgrammers);
    this.loading$ = this.store.select(selectProgrammersLoading);
  }
  
  ngOnInit(): void {
    this.store.dispatch(loadProgrammers());
  
  }

}
