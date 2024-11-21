import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import * as ProgrammerActions from '../actions/programmer.action';
import { ProgrammerService } from "../../services/programmer/programmer.service";


@Injectable()
export class ProgrammerEffects {

    loadSkills$;
    loadProgrammers$;
    loadProgrammerById$;
    createProgrammer$;
    updateProgrammer$;
    deleteProgrammer$;

    constructor(
        private actions$: Actions,
        private programmerService: ProgrammerService
    ) {
        this.loadSkills$ = createEffect(() =>
            this.actions$.pipe(
                ofType(ProgrammerActions.loadSkills),
                mergeMap(() =>
                    this.programmerService.getAvailableSkills().pipe(
                        map(skills => ProgrammerActions.loadSkillsSuccess({ skills })),
                        catchError(error => of(ProgrammerActions.loadSkillsFailure({
                            error: error.message
                        })))
                    )
                )
            )
        );

        this.loadProgrammers$ = createEffect(() =>
            this.actions$.pipe(
                ofType(ProgrammerActions.loadProgrammers),
                mergeMap(() =>
                    this.programmerService.getAllProgrammers().pipe(
                        map(programmers =>
                            ProgrammerActions.loadProgrammersSuccess({ programmers })),
                        catchError(error =>
                            of(ProgrammerActions.loadProgrammersFailure({ error: error.message }))
                        )
                    )
                )
            )
        );

        this.loadProgrammerById$ = createEffect(() =>
            this.actions$.pipe(
                ofType(ProgrammerActions.loadProgrammerById),
                mergeMap(({ id }) =>
                    this.programmerService.getProgrammerById(id).pipe(
                        map(programmer => ProgrammerActions.loadProgrammerByIdSuccess({ programmer })),
                        catchError(error => of(ProgrammerActions.loadProgrammerByIdFailure({ error: error.message })))
                    )
                )
            )
        );

        this.createProgrammer$ = createEffect(() =>
            this.actions$.pipe(
                ofType(ProgrammerActions.createProgrammer),
                mergeMap(({ programmer }) =>
                    this.programmerService.createProgrammer(programmer).pipe(
                        map(createdProgrammer =>
                            ProgrammerActions.createProgrammerSuccess({ programmer: createdProgrammer })),
                        catchError(error =>
                            of(ProgrammerActions.createProgrammerFailure({ error: error.message })))
                    )
                )
            )
        );

        this.updateProgrammer$ = createEffect(() =>
            this.actions$.pipe(
                ofType(ProgrammerActions.updateProgrammer),
                mergeMap(({ id, programmer }) =>
                    this.programmerService.updateProgrammer(id, programmer).pipe(
                        map(updatedProgrammer =>
                            ProgrammerActions.updateProgrammerSuccess({ programmer: updatedProgrammer })),
                        catchError(error =>
                            of(ProgrammerActions.updateProgrammerFailure({ error: error.message }))
                        )
                    )
                )
            )
        );

        this.deleteProgrammer$ = createEffect(() =>
            this.actions$.pipe(
                ofType(ProgrammerActions.deleteProgrammer),
                mergeMap(({ id }) =>
                    this.programmerService.deleteProgrammer(id).pipe(
                        map(programmer =>
                            ProgrammerActions.deleteProgrammerSuccess({ programmer })),
                        catchError(error =>
                            of(ProgrammerActions.deleteProgrammerFailure({
                                error: error.message
                            })))
                    )
                )
            )
        );

    }


}
