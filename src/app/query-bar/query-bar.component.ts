import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-query-bar',
  templateUrl: './query-bar.component.html',
  styleUrls: ['./query-bar.component.sass']
})

export class QueryBarComponent implements OnInit {
  parentForm: FormGroup;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.parentForm = this.formbuilder.group({
      name: new FormControl(null),
      table: new FormControl(null),
      stack: new FormControl(null),
      skill: new FormControl(null),
      rating: new FormControl(null),
      team: new FormControl(null),
      office: new FormControl(null),
      file: new FormControl(null)
    });
  }

  get name(): any { return this.parentForm.get('name'); }
  get table(): any { return this.parentForm.get('table'); }
  get stack(): any { return this.parentForm.get('stack'); }
  get skill(): any { return this.parentForm.get('skill'); }
  get rating(): any { return this.parentForm.get('rating'); }
  get team(): any { return this.parentForm.get('team'); }
  get office(): any { return this.parentForm.get('office'); }

  onSubmit() {
    console.log('submit reached');
    // if (this.parentForm.get('file.value') !== null) {
    //   console.log(this.parentForm.get('file.value'));
    // }
  }
}
