import { Component, Inject, OnInit } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

@Component({
  selector: 'loading-dialog',
  templateUrl: './loading-dialog.html',
})
export class LoadingDialogComponent implements OnInit {
  title: string;
  promise;
  
  constructor(@Inject(MD_DIALOG_DATA) data, private dialogRef: MdDialogRef<LoadingDialogComponent>) {
    const { promise, title = 'Loading...' } = data;
    
    this.title = title;
    this.promise = promise;
  }
  
  ngOnInit(): void {
    this.promise
    .then(result => {
      this.dialogRef.close(Promise.resolve(result));
    })
    .catch(err => {
      this.dialogRef.close(Promise.reject(err));
    });
  }
}
