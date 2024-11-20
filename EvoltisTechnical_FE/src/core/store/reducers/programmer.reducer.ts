import {createReducer, on} from '@ngrx/store';
import { ProgrammerState } from '../models/programmer.model';
import * as ProgrammerActions from '../actions/programmer.action';

const initialState : ProgrammerState= {
    programmers: [],
    skills: [],
    loading: false,
    error: null,
    createSuccess: false
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
    })),
    on(ProgrammerActions.createProgrammerSuccess, (state, {programmer}) =>({
      ...state,
      loading: false,
      programmers: [...state.programmers, programmer],
      createSuccess: true
    })),
    on(ProgrammerActions.createProgrammerFailure, (state, {error})=> ({
      ...state,
      loading: false,
      error,
      createSuccess: false
    })),

    on(ProgrammerActions.loadSkills, (state)=> ({
      ...state,
      loading: true,
      error: null
    })),
    on(ProgrammerActions.loadSkillsSuccess, (state, {skills}) => ({
      ...state,
      skills,
      loading: false
    })),
    on(ProgrammerActions.loadSkillsFailure, (state, {error}) => ({
      ...state,
      loading: false,
      error
    }))

  );


/*
  export function reducer(state: ProgrammerState | undefined, action: any) {
    return programmerReducer(state, action);
  }
*/

export const reducer = programmerReducer;
