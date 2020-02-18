import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { IndexComponent } from './components/table/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
