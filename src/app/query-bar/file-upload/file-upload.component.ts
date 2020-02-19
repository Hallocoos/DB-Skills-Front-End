import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.sass']
})
export class FileUploadComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() uploadFile: File;
  @Output() fileEmitter = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  fileChange(file) {
    if (file.length > 0) {
      this.uploadFile = file[0];
      console.log('uploadFile reached', file);
      const formData: FormData = new FormData();
      formData.append('fileField', this.uploadFile, this.uploadFile.name);
      console.log(formData.getAll('fileField'));
      this.http.post('http://localhost:5000/uploadFile', formData).subscribe(data => {
        console.log(data);
      });
    }
  }
}
