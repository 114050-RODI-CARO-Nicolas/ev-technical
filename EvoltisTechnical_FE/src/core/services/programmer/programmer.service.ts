import { Injectable, inject } from '@angular/core';
import { CreateProgrammerDTO } from '../../../app/features/programmer/models/create-programmer-dto';
import { ProgrammerResponseDTO } from '../../../app/features/programmer/models/programmer-response-dto';
import { ProgrammerDetailDTO } from '../../../app/features/programmer/models/programmer-detail-dto';
import { Skill } from '../../../app/features/programmer/models/skill';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgrammerService {

  private baseUrl = environment.apiUrlRecruiting;
  private http: HttpClient = inject(HttpClient);


  


    getAllProgrammers(): Observable<ProgrammerResponseDTO[]> {
      return this.http.get<ProgrammerResponseDTO[]>(`${this.baseUrl}/programmers`);
    }
  

    getProgrammerById(id: number): Observable<ProgrammerDetailDTO> {
      return this.http.get<ProgrammerDetailDTO>(`${this.baseUrl}/programmers/${id}`);
    }
  

    getProgrammerByEmail(email: string): Observable<ProgrammerDetailDTO> {
      return this.http.get<ProgrammerDetailDTO>(`${this.baseUrl}/programmers/by-email/${email}`);
    }
  

    createProgrammer(programmer: CreateProgrammerDTO): Observable<ProgrammerDetailDTO> {
      return this.http.post<ProgrammerDetailDTO>(`${this.baseUrl}/programmers`, programmer);
    }
  

    updateProgrammer(id: number, programmer: Partial<CreateProgrammerDTO>): Observable<ProgrammerDetailDTO> {
      return this.http.put<ProgrammerDetailDTO>(`${this.baseUrl}/programmers/${id}`, programmer);
    }
  

    deleteProgrammer(id: number): Observable<ProgrammerDetailDTO> {
      return this.http.delete<ProgrammerDetailDTO>(`${this.baseUrl}/programmers/${id}`);
    }

  

  
}
