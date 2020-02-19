import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-input',
  templateUrl: './employee-input.component.html',
  styleUrls: ['./employee-input.component.sass']
})
export class EmployeeInputComponent implements OnInit {

  // Must be name, surname or both
  @Input() parentForm: FormGroup;
  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

  
}
