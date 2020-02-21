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
  tables = [ 'Employees', 'Front End Skills', 'Back End Skills', 'NTT System Skills'];
  employeeColumns = ['ID', 'Name', 'Surname', 'Job Title',
  'Team/Office', 'Line Manager'];
  skillsColumns = ['ID', 'Name', 'Surname', 'Stack', 'Skills', 'Rating'];

  constructor(private getData: GetDataService) { }

  ngOnInit(): void {
    this.changeTable('Employees');
  }

  changeTable(table) {
    if (table === 'Employees') {
      this.getData.getAllEmployees().subscribe(allEmployees => {
        this.employees = allEmployees;
        console.log('getAllEmployees: ', this.employees);
      });
      this.columns = this.employeeColumns;
    } else {
      if (table === 'Front End Skills') {
        this.getData.getAllFrontEndSkills().subscribe(allSkills => {
          this.skills = allSkills;
          console.log('getAllFrontEndSkills: ', this.skills);
        });
      } else if (table === 'Back End Skills') {
        this.getData.getAllBackEndSkills().subscribe(allSkills => {
          this.skills = allSkills;
          console.log('getAllBackEndSkills: ', this.skills);
        });
      } else if (table === 'NTT System Skills') {
        this.getData.getAllNTTSystemSkills().subscribe(allSkills => {
          this.skills = allSkills;
          console.log('getAllNTTSystemSkills: ', this.skills);
        });
      }
      this.employees = [];
      this.columns = this.skillsColumns;
    }
    this.title = table;
  }

  changeSearch(column, value) {
    if (this.table === 'Employees') {
      this.getData.getAllEmployees(column, value).subscribe(allEmployees => {
        this.employees = allEmployees;
        console.log('getAllEmployees: ', this.employees);
      });
      this.columns = this.employeeColumns;
    } else {
      if (this.table === 'Front End Skills') {
        this.getData.getAllFrontEndSkills(column, value).subscribe(allSkills => {
          this.skills = allSkills;
          console.log('getAllFrontEndSkills: ', this.skills);
        });
      } else if (this.table === 'Back End Skills') {
        this.getData.getAllBackEndSkills(column, value).subscribe(allSkills => {
          this.skills = allSkills;
          console.log('getAllBackEndSkills: ', this.skills);
        });
      } else if (this.table === 'NTT System Skills') {
        this.getData.getAllNTTSystemSkills(column, value).subscribe(allSkills => {
          this.skills = allSkills;
          console.log('getAllNTTSystemSkills: ', this.skills);
        });
      }
      this.employees = [];
      this.columns = this.skillsColumns;
    }
    this.title = table;
  }
}
