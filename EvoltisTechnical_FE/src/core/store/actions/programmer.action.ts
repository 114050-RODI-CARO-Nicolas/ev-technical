import {createAction, props} from '@ngrx/store';
import { ProgrammerResponseDTO } from '../../../app/features/programmer/models/programmer-response-dto';

export const loadProgrammers = createAction('[Programmers] Load Programmers');

export const loadProgrammersSuccess = createAction(
    '[Programmers] Load Programmers Success',
    props<{programmers : ProgrammerResponseDTO[]}>()
);

export const loadProgrammersFailure = createAction(
    '[Programmers] Load Programmers Failure',
    props<{error: string}>()
);

