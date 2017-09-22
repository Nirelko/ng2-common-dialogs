import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';
import 'rxjs/add/operator/toPromise';

import { AlertDialogComponent } from '../dialogs/alert-dialog/index';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/index';
import { PromptDialogComponent } from '../dialogs/prompt-dialog/index';
import { LoadingDialogComponent } from '../dialogs/loading-dialog/index';

@Injectable()
export class CommonDialogService {
  constructor(private dialogService: MdDialog) { }
  
  showAlert({ title , message, okButton = 'ok'}) {
    return this.dialogService.open(AlertDialogComponent, {
      data: {
        title,
        message,
        okButton,
      }
    }).afterClosed().toPromise();
  }
  
  showConfirm ({ title , message, cancelButton = 'cancel', yesButton = 'yes' }) {
    return this.dialogService.open(ConfirmDialogComponent, {
      data: {
        title,
        message,
        cancelButton,
        yesButton,
      }
    }).afterClosed().toPromise()
    .then(result => result ? Promise.resolve() : Promise.reject(false));
  }
  
  showPrompt ({ title, message, inputLabel, cancelButton = 'cancel', okButton = 'ok' }) {
    return this.dialogService.open(PromptDialogComponent, {
      data: {
        title,
        message,
        inputLabel,
        cancelButton,
        okButton,
      }
    }).afterClosed().toPromise();
  }
  
  showLoading({ title, promise }) {
    return this.dialogService.open(LoadingDialogComponent, {
      data: {
        title,
        promise
      }
    }).afterClosed().toPromise();
  }
}
