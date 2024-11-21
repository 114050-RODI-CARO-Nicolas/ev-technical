import {createReducer, on} from '@ngrx/store';
import { ProgrammerState } from '../models/programmer.model';
import * as ProgrammerActions from '../actions/programmer.action';

const initialState : ProgrammerState= {
    programmers: [],
    skills: [],
    loading: {
      skills: false,
      create: false,
      update: false,
      delete: false,
      list: false
    },
    error: null,
    createSuccess: false
};

export const programmerReducer = createReducer(
    initialState,
    on(ProgrammerActions.loadProgrammers, (state) => ({
      ...state,
      loading: {...state.loading, list: true},
      error: null,
    })),
    on(ProgrammerActions.loadProgrammersSuccess, (state, { programmers }) => ({
      ...state,
      loading: {...state.loading, list: false},
      programmers,
    })),
    on(ProgrammerActions.loadProgrammersFailure, (state, { error }) => ({
      ...state,
      loading: {...state.loading, list:false},
      error,
    })),
    on(ProgrammerActions.loadSkills, (state)=> ({
      ...state,
      loading: {...state.loading, skills: true},
      error: null
    })),
    on(ProgrammerActions.loadSkillsSuccess, (state, {skills}) => ({
      ...state,
      loading: {...state.loading, skills: false},
      skills
    
    })),
    on(ProgrammerActions.loadSkillsFailure, (state, {error}) => ({
      ...state,
      loading: {...state.loading, skills: false},
      error
    })),
    on(ProgrammerActions.createProgrammer, (state)=> ({
      ...state,
      loading: {...state.loading, create: true},
      error: null,
      createSuccess: false
    })),
    on(ProgrammerActions.createProgrammerSuccess, (state, {programmer})=> ({
      ...state,
      loading: {...state.loading, create: false},
      programmers: [...state.programmers, programmer],
      createSuccess: true
    })),
    on(ProgrammerActions.createProgrammerFailure, (state, {error})=> ({
      ...state,
      loading: {...state.loading, create: false},
      error,
      createSuccess: false
    })),
    on(ProgrammerActions.updateProgrammer, (state)=> ({
      ...state,
      loading: {...state.loading, update: true},
      error: null
    })),
    on(ProgrammerActions.updateProgrammerSuccess, (state, {programmer}) => ({
      ...state,
      loading: {...state.loading, update: false},
      programmers: state.programmers.map(p=>
        p.id === programmer.id ? programmer : p
      )
    })),
    on(ProgrammerActions.updateProgrammerFailure, (state, {error}) => ({
      ...state,
      loading: {...state.loading, update: false},
      error
    })),
    on(ProgrammerActions.deleteProgrammer, (state)=> ({
      ...state,
      loading: {...state.loading, delete:true},
      error: null
    })),
    on(ProgrammerActions.deleteProgrammerSuccess, (state, {programmer})=> ({
      ...state,
      loading: {...state.loading, delete: false},
      programmers: state.programmers.map(p=>
        p.id === programmer.id ? programmer : p
      )
    })),
    on(ProgrammerActions.deleteProgrammerFailure, (state, {error})=> ({
      ...state,
      loading: {...state.loading, delete:false},
      error
    }))

  );

  export const reducer = programmerReducer;


/*
  export function reducer(state: ProgrammerState | undefined, action: any) {
    return programmerReducer(state, action);
  }
*/



