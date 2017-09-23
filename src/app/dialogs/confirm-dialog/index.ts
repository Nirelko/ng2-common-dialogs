import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

import { ConfirmDialogData } from './confirm-dialog.data';

@Component({
  selector: 'confirm-dialog',
  template: `<h2 md-dialog-title>
                {{ title }}
             </h2>
             <md-dialog-content>
                <span>{{ message }}</span>
             </md-dialog-content>
             <md-dialog-actions class="actions-container">
                <button md-raised-button md-dialog-close>{{ cancelButton }}</button>
                <button md-raised-button [md-dialog-close]="true" color="primary">{{ yesButton }}</button>
             </md-dialog-actions>`,
  styles: [`.actions-container {
                 display: flex;
                 flex-direction: row;
                 justify-content: flex-end;
                 align-items: center;
             }`]
})
export class ConfirmDialogComponent {
    title: string;
    message: string;
    cancelButton: string;
    yesButton: string;

    constructor(@Inject(MD_DIALOG_DATA) data : ConfirmDialogData) {
        const { title, message, cancelButton = 'cancel', yesButton = 'yes' } = data;

        this.title = title;
        this.message = message;
        this.cancelButton = cancelButton;
        this.yesButton = yesButton
    }
}
