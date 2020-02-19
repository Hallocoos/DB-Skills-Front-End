import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-stack-input',
  templateUrl: './stack-input.component.html',
  styleUrls: ['./stack-input.component.sass']
})
export class StackInputComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() stack: string;
  constructor() { }

  ngOnInit(): void {
  }

}
