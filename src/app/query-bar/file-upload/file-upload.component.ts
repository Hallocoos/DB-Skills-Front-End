import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.sass']
})
export class FileUploadComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() file: File;
  @Output() fileEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fileChange(file) {
    if (file.length > 0) {
      this.file = file[0];
      this.fileEmitter.emit(this.file);
    }
  }
}
