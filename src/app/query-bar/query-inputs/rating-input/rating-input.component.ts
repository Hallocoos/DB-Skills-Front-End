import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-rating-input',
  templateUrl: './rating-input.component.html',
  styleUrls: ['./rating-input.component.sass']
})
export class RatingInputComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() rating: number;
  constructor() { }

  ngOnInit(): void {
  }

}
