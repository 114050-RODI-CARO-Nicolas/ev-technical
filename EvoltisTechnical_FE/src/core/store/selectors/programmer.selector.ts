import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProgrammerState } from "../models/programmer.model";
import { AppState } from "../app.state";

export const selectProgrammerState = createFeatureSelector<ProgrammerState>('programmers');

export const selectAllProgrammers = createSelector(
    selectProgrammerState,
    (state: ProgrammerState) => state.programmers
);

export const selectProgrammersLoading = createSelector(
    selectProgrammerState,
    (state: ProgrammerState) => state.loading

);

export const selectProgrammersError = createSelector(
    selectProgrammerState,
    (state: ProgrammerState) => state.error
);


