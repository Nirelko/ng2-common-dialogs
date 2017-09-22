import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';
import 'rxjs/add/operator/toPromise';

import { AlertDialogComponent } from '../dialogs/alert-dialog';
import { AlertDialogData } from '../dialogs/alert-dialog/alert-dialog-data';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog';
import { ConfirmDialogData } from '../dialogs/confirm-dialog/confirm.dialog.data';
import { PromptDialogComponent } from '../dialogs/prompt-dialog';
import { PromptDialogData } from '../dialogs/prompt-dialog/prompt-dialog-data';
import { LoadingDialogComponent } from '../dialogs/loading-dialog';
import { LoadingDialogData } from '../dialogs/loading-dialog/loading-dialog-data';

@Injectable()
export class CommonDialogService {
  constructor(private dialogService: MdDialog) { }
  
  showAlert({ title , message, okButton = 'ok'}: AlertDialogData) {
    return this.dialogService.open(AlertDialogComponent, {
      data: {
        title,
        message,
        okButton,
      }
    }).afterClosed().toPromise();
  }
  
  showConfirm ({ title , message, cancelButton = 'cancel', yesButton = 'yes' }: ConfirmDialogData) {
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
  
  showPrompt ({ title, message, inputLabel, cancelButton = 'cancel', okButton = 'ok' }: PromptDialogData) {
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
  
  showLoading({ title, promise }: LoadingDialogData) {
    return this.dialogService.open(LoadingDialogComponent, {
      data: {
        title,
        promise
      }
    }).afterClosed().toPromise();
  }
}
