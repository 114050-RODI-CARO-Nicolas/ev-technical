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
    (programmers) => programmers.find(p=> p.id === Number(id))
);

export const selectSkills = createSelector(
    selectProgrammerFeature,
    (state: ProgrammerState) => state.skills
);

export const selectCreateSuccess = createSelector(
    selectProgrammerFeature,
    (state: ProgrammerState) => state.createSuccess
);

export const selectCurrentProgrammer = createSelector(
    selectProgrammerFeature,
    (state: ProgrammerState) => state.currentProgrammer
);

export const selectUpdateSuccess = createSelector(
    selectProgrammerFeature,
    (state: ProgrammerState) => state.updateSuccess // Necesitaremos añadir esto al state
);



export const selectError = createSelector(
    selectProgrammerFeature,
    (state: ProgrammerState) => state.error
);






export const selectLoadingState = (state: AppState) => state.programmer.loading;

export const selectCreateLoading = createSelector(
    selectLoadingState,
    loading => loading.create
);

export const selectUpdateLoading = createSelector(
    selectLoadingState,
    loading => loading.update
);

export const selectListLoading = createSelector(
    selectLoadingState,
    loading => loading.list
);

export const selectSkillsLoading = createSelector(
    selectLoadingState,
    loading => loading.skills
);