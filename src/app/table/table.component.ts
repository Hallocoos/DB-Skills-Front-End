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

//   employees = [{
//     id: 'number',
//     name: 'string',
//     surname: 'string',
//     jobTitle: 'string',
//     teamOffice: 'string',
//     lineManager: 'string'
//   },
//   {
//     id: 'number',
//     name: 'string',
//     surname: 'string',
//     jobTitle: 'string',
//     teamOffice: 'string',
//     lineManager: 'string'
//   }
// ];

  constructor(private getData: GetDataService) { }

  ngOnInit(): void {
    this.getData.getAllEmployees().subscribe(allEmployees => {
      this.employees = allEmployees;
      console.log('allEmployees: ', this.employees);
    });
  }

}
