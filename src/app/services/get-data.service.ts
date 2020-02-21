import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { EmployeeDetails } from '../models/Employee';
import { EmployeeSkills } from '../models/EmployeeSkills';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private http: HttpClient) { }

  getAllEmployees(column, value): Observable<EmployeeDetails[]> {
    return this.http.get<EmployeeDetails[]>('http://localhost:5000/getAllEmployees/' + column + '/' + value);
  }

  getAllFrontEndSkills(column, value): Observable<EmployeeSkills[]> {
    return this.http.get<EmployeeSkills[]>('http://localhost:5000/getAllFrontEndSkills/' + column + '/' + value);
  }

  getAllBackEndSkills(column, value): Observable<EmployeeSkills[]> {
    return this.http.get<EmployeeSkills[]>('http://localhost:5000/getAllBackEndSkills/' + column + '/' + value);
  }

  getAllNTTSystemSkills(column, value): Observable<EmployeeSkills[]> {
    return this.http.get<EmployeeSkills[]>('http://localhost:5000/getAllNTTSystemSkills/' + column + '/' + value);
  }

  getAllSkills(column, value): Observable<EmployeeSkills[]> {
    return this.http.get<EmployeeSkills[]>('http://localhost:5000/getAllSkill/s' + column + '/' + value);
  }
}
