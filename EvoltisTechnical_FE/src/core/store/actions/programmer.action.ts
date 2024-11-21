import {createAction, props} from '@ngrx/store';
import { ProgrammerResponseDTO } from '../../../app/features/programmer/models/programmer-response-dto';
import { CreateProgrammerDTO } from '../../../app/features/programmer/models/create-programmer-dto';
import { ProgrammerDetailDTO } from '../../../app/features/programmer/models/programmer-detail-dto';
import { Skill } from '../../../app/features/programmer/models/skill';




//Action fetch skills for populating skills multiselect
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



//Action fetch programmers to populate programmers/candidates table
export const loadProgrammers = createAction('[Programmers] Load Programmers');

export const loadProgrammersSuccess = createAction(
    '[Programmers] Load Programmers Success',
    props<{programmers : ProgrammerResponseDTO[]}>()
);

export const loadProgrammersFailure = createAction(
    '[Programmers] Load Programmers Failure',
    props<{error: string}>()
);



//Create a new programmer/candidate actions
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


//Update a new programmer/candidate actions
export const updateProgrammer = createAction(
    '[Programmer] Update Programmer',
    props<{id: number, programmer: Partial<CreateProgrammerDTO>}>()
);

export const updateProgrammerSuccess = createAction(
    '[Programmer] Update Programmer Success',
    props<{ programmer: ProgrammerDetailDTO }>()
);

export const updateProgrammerFailure = createAction(
    '[Programmer] Update Programmer Failure',
    props<{ error: string}>()
)

//Deactivate (actually logically delete) a programmer/candidate
export const deleteProgrammer = createAction(
    '[Programmer] Delete Programmer',
    props<{id: number}>()
);

export const deleteProgrammerSuccess = createAction(
    '[Programmer] Delete Programmer Success',
    props<{programmer: ProgrammerDetailDTO}>()
);

export const deleteProgrammerFailure = createAction(
    '[Programmer] Delete Programmer Failure',
    props<{error: string}>()
);








