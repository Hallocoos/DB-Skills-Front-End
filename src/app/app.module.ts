import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueryBarComponent } from './query-bar/query-bar.component';
import { EmployeeInputComponent } from './query-bar/query-inputs/employee-input/employee-input.component';
import { TableInputComponent } from './query-bar/query-inputs/table-input/table-input.component';
import { StackInputComponent } from './query-bar/query-inputs/stack-input/stack-input.component';
import { SkillInputComponent } from './query-bar/query-inputs/skill-input/skill-input.component';
import { RatingInputComponent } from './query-bar/query-inputs/rating-input/rating-input.component';
import { TeamInputComponent } from './query-bar/query-inputs/team-input/team-input.component';
import { OfficeInputComponent } from './query-bar/query-inputs/office-input/office-input.component';
import { FileUploadComponent } from './query-bar/file-upload/file-upload.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    QueryBarComponent,
    EmployeeInputComponent,
    TableInputComponent,
    StackInputComponent,
    SkillInputComponent,
    RatingInputComponent,
    TeamInputComponent,
    OfficeInputComponent,
    FileUploadComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
