import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

import { ConfirmDialogComponent } from '../dialogs/confirm-dialog';
import { AlertDialogComponent } from '../dialogs/alert-dialog';
import { PromptDialogComponent } from '../dialogs/prompt-dialog';
import { LoadingDialogComponent } from '../dialogs/loading-dialog';

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

  showPromptDialog() : void {
    this.dialogService.open(PromptDialogComponent, {
      data: {
        title: 'Personality Test',
        message: 'What is your favorite dish?',
        inputLabel: 'Dish Name',
        cancelButton: 'No',
        okButton: 'Choose',
      }
    })
  }

  showLoadingDialog() : void {
    this.dialogService.open(LoadingDialogComponent, {
      data: {
        title: 'Be patient...',
        promise: new Promise(resolve => {
          setTimeout(() => {
            resolve();
          }, 2000)
        })
      }
    })
  }
}
