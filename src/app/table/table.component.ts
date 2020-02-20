import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

import { EmployeeDetails } from '../models/Employee';
import { EmployeeSkills } from '../models/EmployeeSkills';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {
  employees: EmployeeDetails[];
  skills: EmployeeSkills[];
  title: string;
  columns = [];
  employeeColumns = ['ID', 'Name', 'Surname', 'Job Title',
  'Team/Office', 'Line Manager'];
  skillsColumns = ['ID', 'Name', 'Surname', 'Stack', 'Skills', 'Rating'];

  constructor(private getData: GetDataService) { }

  ngOnInit(): void {
    this.onChange('Employees');
  }

  onChange(table) {
    if (table === 'Employees') {
      this.getData.getAllEmployees().subscribe(allEmployees => {
        this.employees = allEmployees;
        console.log('getAllEmployees: ', this.employees);
      });
      this.columns = this.employeeColumns;
    } else if (table === 'Front End Skills') {
      this.getData.getAllFrontEndSkills().subscribe(allSkills => {
        this.skills = allSkills;
        console.log('getAllFrontEndSkills: ', this.skills);
      });
      this.employees = [];
      this.columns = this.skillsColumns;
    } else if (table === 'Back End Skills') {
      this.getData.getAllBackEndSkills().subscribe(allSkills => {
        this.skills = allSkills;
        console.log('getAllBackEndSkills: ', this.skills);
      });
      this.employees = [];
      this.columns = this.skillsColumns;
    } else if (table === 'NTT System Skills') {
      this.getData.getAllNTTSystemSkills().subscribe(allSkills => {
        this.skills = allSkills;
        console.log('getAllNTTSystemSkills: ', this.skills);
      });
      this.employees = [];
      this.columns = this.skillsColumns;
    }
    this.title = table;
  }
}
