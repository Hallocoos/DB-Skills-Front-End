import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { EmployeeDetails } from '../models/Employee';
import { EmployeeSkills } from '../models/EmployeeSkills';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  getUrl = 'http://localhost:5000/getAllEmployees';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<EmployeeDetails[]> {
    return this.http.get<EmployeeDetails[]>('http://localhost:5000/getAllEmployees');
  }

  getAllFrontEndSkills(): Observable<EmployeeSkills[]> {
    return this.http.get<EmployeeSkills[]>('http://localhost:5000/getAllFrontEndSkills');
  }

  getAllBackEndSkills(): Observable<EmployeeSkills[]> {
    return this.http.get<EmployeeSkills[]>('http://localhost:5000/getAllBackEndSkills');
  }

  getAllNTTSystemSkills(): Observable<EmployeeSkills[]> {
    return this.http.get<EmployeeSkills[]>('http://localhost:5000/getAllNTTSystemSkills');
  }

  getAllSkills(): Observable<EmployeeSkills[]> {
    return this.http.get<EmployeeSkills[]>('http://localhost:5000/getAllSkills');
  }
}
