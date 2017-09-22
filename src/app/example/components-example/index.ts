import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

import { ConfirmDialogComponent } from '../../dialogs/confirm-dialog';
import { AlertDialogComponent } from '../../dialogs/alert-dialog';
import { PromptDialogComponent } from '../../dialogs/prompt-dialog';
import { LoadingDialogComponent } from '../../dialogs/loading-dialog';

@Component({
  selector: 'components-example',
  templateUrl: './components-example.html',
  styleUrls: ['./components-example.scss']
})
export class ComponentsExampleComponent {
  constructor(private dialogService: MdDialog) { }

  showAlertDialog() : void {
    this.dialogService.open(AlertDialogComponent, {
      data: {
        title: 'Nice One',
        message: 'You just opened an alert dialog',
        okButton: 'Yay!',
      }
    })
  }

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
