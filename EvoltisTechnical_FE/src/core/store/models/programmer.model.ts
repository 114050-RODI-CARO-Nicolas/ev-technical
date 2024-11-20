import { ProgrammerResponseDTO } from "../../../app/features/programmer/models/programmer-response-dto";
export interface ProgrammerState{
    programmers: ProgrammerResponseDTO[];
    loading: boolean;
    error: string | null;
}