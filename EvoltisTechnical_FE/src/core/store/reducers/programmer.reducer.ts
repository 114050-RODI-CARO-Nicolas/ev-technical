import {createReducer, on} from '@ngrx/store';
import { ProgrammerState } from '../models/programmer.model';
import * as ProgrammerActions from '../actions/programmer.action';

const initialState : ProgrammerState= {
    programmers: [],
    loading: false,
    error: null
};

export const programmerReducer = createReducer(
    initialState,
    on(ProgrammerActions.loadProgrammers, (state) => ({
      ...state,
      loading: true,
      error: null,
    })),
    on(ProgrammerActions.loadProgrammersSuccess, (state, { programmers }) => ({
      ...state,
      loading: false,
      programmers,
    })),
    on(ProgrammerActions.loadProgrammersFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    }))
  );

  export function reducer(state: ProgrammerState | undefined, action: any) {
    return programmerReducer(state, action);
  }


