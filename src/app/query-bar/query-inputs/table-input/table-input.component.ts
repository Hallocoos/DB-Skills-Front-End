// TODO: populate hidden input?
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-table-input',
  templateUrl: './table-input.component.html',
  styleUrls: ['./table-input.component.sass']
})
export class TableInputComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() table: string;
  constructor() { }

  ngOnInit(): void {
  }

}
