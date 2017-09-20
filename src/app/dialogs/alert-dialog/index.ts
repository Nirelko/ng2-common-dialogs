import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'alert-dialog',
  templateUrl: './alert-dialog.html',
})
export class AlertDialogComponent {
    title: string;
    message: string;
    okButton: string;

    constructor(@Inject(MD_DIALOG_DATA) data) {
        const { title, message, okButton = 'ok' } = data;

        this.title = title;
        this.message = message;
        this.okButton = okButton;
    }
}
