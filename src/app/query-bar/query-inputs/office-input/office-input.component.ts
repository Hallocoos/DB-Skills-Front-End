import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-office-input',
  templateUrl: './office-input.component.html',
  styleUrls: ['./office-input.component.sass']
})
export class OfficeInputComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() office: string;

  constructor() { }

  ngOnInit(): void {
  }

}
