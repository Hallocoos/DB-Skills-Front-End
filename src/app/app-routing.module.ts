import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueryBarComponent } from './query-bar/query-bar.component';
import { TableComponent } from './table/table.component';
import { FileUploadComponent } from './query-bar/file-upload/file-upload.component';

const routes: Routes = [
  { path: 'query', component: QueryBarComponent },
  { path: 'tables', component: TableComponent },
  { path: 'upload', component: FileUploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
