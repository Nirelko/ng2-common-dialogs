import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

@Component({
  selector: 'loading-dialog',
  templateUrl: './loading-dialog.html',
})
export class LoadingDialogComponent {
    title: string;

    constructor(@Inject(MD_DIALOG_DATA) data, dialogRef: MdDialogRef<LoadingDialogComponent>) {
        const { promise, title = 'Loading...' } = data;

        this.title = title;
        promise
          .then(result => {
            dialogRef.close(Promise.resolve(result));
          })
          .catch(err => {
            dialogRef.close(Promise.reject(err));
          });
    }
}
