import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import * as ProgrammerActions from '../actions/programmer.action';
import { ProgrammerService } from "../../services/programmer/programmer.service";


export class ProgrammerEffects {

    constructor(
        private actions$: Actions,
        private programmerService: ProgrammerService
    ) {

    }

    loadProgrammers$ = createEffect(()=>
    this.actions$.pipe(
        ofType(ProgrammerActions.loadProgrammers),
        mergeMap(()=> 
        this.programmerService.getAllProgrammers().pipe(
            map(programmers =>
                ProgrammerActions.loadProgrammersSuccess({programmers})),
            catchError(error => 
                of(ProgrammerActions.loadProgrammersFailure({error: error.message}))
                )
            )
        )
    )
);



loadSkills$ = createEffect(()=> 
    this.actions$.pipe(
        ofType(ProgrammerActions.loadSkills),
        mergeMap(()=>
            this.programmerService.getAvailableSkills().pipe(
                map(skills => ProgrammerActions.loadSkillsSuccess({ skills})),
                catchError( error => of(ProgrammerActions.loadSkillsFailure({
                    error: error.message
                })))
            )
        )
    )
) 


}
