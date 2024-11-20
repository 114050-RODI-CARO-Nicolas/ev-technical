import { ProgrammerResponseDTO } from "../../../app/features/programmer/models/programmer-response-dto";
import { Skill } from "../../../app/features/programmer/models/skill";
export interface ProgrammerState{
    programmers: ProgrammerResponseDTO[];
    skills: Skill[];
    loading: boolean;
    error: string | null;
    createSuccess: boolean
}

