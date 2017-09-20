import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

import { ConfirmDialogComponent } from '../dialogs/confirm-dialog';
import { AlertDialogComponent } from '../dialogs/alert-dialog';

@Component({
  selector: 'example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  constructor(private dialogService: MdDialog) { }

  showConfirmDialog() : void {
    this.dialogService.open(ConfirmDialogComponent, {
      data: {
        title: 'Caution',
        message: 'Are you sure you want to do this?',
        cancelButton: 'No Way!',
        yesButton: 'Absolutely',
      }
    })
  }
  showAlertDialog() : void {
    this.dialogService.open(AlertDialogComponent, {
      data: {
        title: 'Nice One',
        message: 'You just opened an alert dialog',
        okButton: 'Yay!',
      }
    })
  }
}
