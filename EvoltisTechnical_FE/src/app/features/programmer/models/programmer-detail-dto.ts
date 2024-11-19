import { Skill } from "./skill";
import { ProgrammerResponseDTO } from "./programmer-response-dto";
export interface ProgrammerDetailDTO extends ProgrammerResponseDTO {
    skills: Skill[];
}