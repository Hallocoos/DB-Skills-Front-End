import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-team-input',
  templateUrl: './team-input.component.html',
  styleUrls: ['./team-input.component.sass']
})
export class TeamInputComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() team: string;
  constructor() { }

  ngOnInit(): void {
  }

}
