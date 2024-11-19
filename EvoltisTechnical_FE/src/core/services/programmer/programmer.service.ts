import { Injectable, inject } from '@angular/core';
import { CreateProgrammerDTO } from '../../../app/features/programmer/models/create-programmer-dto';
import { ProgrammerResponseDTO } from '../../../app/features/programmer/models/programmer-response-dto';
import { ProgrammerDetailDTO } from '../../../app/features/programmer/models/programmer-detail-dto';
import { Skill } from '../../../app/features/programmer/models/skill';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProgrammerService {

  private httpClient: HttpClient = inject(HttpClient)

  
}
