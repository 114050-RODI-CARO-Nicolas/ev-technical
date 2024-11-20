import {createAction, props} from '@ngrx/store';
import { ProgrammerResponseDTO } from '../../../app/features/programmer/models/programmer-response-dto';
import { CreateProgrammerDTO } from '../../../app/features/programmer/models/create-programmer-dto';
import { ProgrammerDetailDTO } from '../../../app/features/programmer/models/programmer-detail-dto';
import { Skill } from '../../../app/features/programmer/models/skill';

export const loadProgrammers = createAction('[Programmers] Load Programmers');

export const loadProgrammersSuccess = createAction(
    '[Programmers] Load Programmers Success',
    props<{programmers : ProgrammerResponseDTO[]}>()
);

export const loadProgrammersFailure = createAction(
    '[Programmers] Load Programmers Failure',
    props<{error: string}>()
);


export const createProgrammer = createAction(
    '[Programmer] Create Programmer',
    props<{programmer: CreateProgrammerDTO}>()
);

export const createProgrammerSuccess = createAction(
    '[Programmer] Create Programmer Success',
    props<{programmer: ProgrammerDetailDTO }>()
);

export const createProgrammerFailure = createAction(
    '[Programmer] Create Programmer Failure',
    props<{error: string}>()
);

export const loadSkills = createAction(
    '[Programmer] Load Skills'
);

export const loadSkillsSuccess = createAction(
    '[Programmer] Load Skills Success',
    props<{skills: Skill[]}>()
)

export const loadSkillsFailure = createAction(
    '[Programmer] Load Skills Failure',
    props<{error: string}>()
)



