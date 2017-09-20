import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.html',
})
export class ConfirmDialogComponent {
    title: string;
    message: string;
    cancelButton: string;
    yesButton: string;

    constructor(@Inject(MD_DIALOG_DATA) data) {
        const { title, message, cancelButton = 'cancel', yesButton = 'yes' } = data;

        this.title = title;
        this.message = message;
        this.cancelButton = cancelButton;
        this.yesButton = yesButton
    }
}
