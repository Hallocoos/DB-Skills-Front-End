import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-skill-input',
  templateUrl: './skill-input.component.html',
  styleUrls: ['./skill-input.component.sass']
})
export class SkillInputComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() skill: string;
  constructor() { }

  ngOnInit(): void {
  }

}
