import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import * as ProgrammerActions from '../actions/programmer.action';
import { ProgrammerService } from "../../services/programmer/programmer.service";


@Injectable()
export class ProgrammerEffects {

    //TODO: Formatear con prettier o similar

    constructor(
        private actions$: Actions,
        private programmerService: ProgrammerService
    ) {

    }

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


createProgrammer$ = createEffect(()=>
    this.actions$.pipe(
        ofType(ProgrammerActions.createProgrammer),
        mergeMap(({programmer}) =>
            this.programmerService.createProgrammer(programmer).pipe(
                map(createdProgrammer =>
                    ProgrammerActions.createProgrammerSuccess({programmer: createdProgrammer})),
                catchError(error =>
                    of(ProgrammerActions.createProgrammerFailure({error: error.message})))
            )
        )
    )
);

updateProgrammer$ = createEffect(()=>
    this.actions$.pipe(
        ofType(ProgrammerActions.updateProgrammer),
        mergeMap(({id, programmer})=>
        this.programmerService.updateProgrammer(id, programmer).pipe(
            map(updatedProgrammer =>
                ProgrammerActions.updateProgrammerSuccess({programmer: updatedProgrammer})),
            catchError(error => 
                of(ProgrammerActions.updateProgrammerFailure({error: error.message }))
            )
        )
        )
    )
)








}
