import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

import { AlertDialogData } from './alert-dialog-data';

@Component({
  selector: 'alert-dialog',
  template: `<h2 md-dialog-title>
                {{ title }}
             </h2>
             <md-dialog-content>
               <span>{{ message }}</span>
             </md-dialog-content>
             <md-dialog-actions class="actions-container">
               <button md-raised-button md-dialog-close color="primary">{{ okButton }}</button>
             </md-dialog-actions>`,
  styles: [`.actions-container {
               display: flex;
               flex-direction: row;
               justify-content: flex-end;
               align-items: center;
             }`]
})
export class AlertDialogComponent {
    title: string;
    message: string;
    okButton: string;

    constructor(@Inject(MD_DIALOG_DATA) data: AlertDialogData) {
        const { title, message, okButton = 'Ok' } = data;

        this.title = title;
        this.message = message;
        this.okButton = okButton;
    }
}
