import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProgrammerState } from "../models/programmer.model";
import { AppState } from "../app.state";


export const selectProgrammerFeature = (state : AppState) => state.programmer;

export const selectAllProgrammers = createSelector(
    selectProgrammerFeature,
    (state: ProgrammerState) => state.programmers
);

export const selectProgrammersLoading = createSelector(
    selectProgrammerFeature,
   (state: ProgrammerState) => state.loading

);

export const selectProgrammersError = createSelector(
    selectProgrammerFeature,
    (state: ProgrammerState) => state.error
);

export const selectProgrammerById = (id: number) => createSelector(
    selectAllProgrammers,
    (programmers) => programmers.find(p=> p.id === id)
);

export const selectSkills = createSelector(
    selectProgrammerFeature,
    (state: ProgrammerState) => state.skills
);

export const selectCreateSuccess = createSelector(
    selectProgrammerFeature,
    (state: ProgrammerState) => state.createSuccess
);




