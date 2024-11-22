import { ProgrammerDetailDTO } from "../../../app/features/programmer/models/programmer-detail-dto";
import { ProgrammerResponseDTO } from "../../../app/features/programmer/models/programmer-response-dto";
import { Skill } from "../../../app/features/programmer/models/skill";
export interface ProgrammerState{
    programmers: ProgrammerResponseDTO[];
    skills: Skill[];
    loading: {
        skills: boolean;
        create: boolean;
        update: boolean;
        delete: boolean;
        list: boolean
    }
    error: string | null;
    createSuccess: boolean;
    updateSuccess: boolean;
    currentProgrammer: ProgrammerDetailDTO | null
}

