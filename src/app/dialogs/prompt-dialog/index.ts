import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

import { PromptDialogData } from './prompt-dialog-data';

@Component({
  selector: 'prompt-dialog',
  template: `<h2 md-dialog-title>
                {{ title }}
            </h2>
            <md-dialog-content>
                <div class="content-container">
                <span>{{ message }}</span>
                <md-form-field>
                    <input mdInput [placeholder]="inputLabel" required [(ngModel)]="inputValue" />
                </md-form-field>
                </div>
            </md-dialog-content>
            <md-dialog-actions class="actions-container">
                <button md-raised-button md-dialog-close>{{ cancelButton }}</button>
                <button md-raised-button [md-dialog-close]="inputValue" color="primary">{{ okButton }}</button>
            </md-dialog-actions>`,
  styles: [`.content-container {
              display: flex;
              flex-direction: column;
            }
            
            .actions-container {
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              align-items: center;
            }`],
})
export class PromptDialogComponent {
    title: string;
    message: string;
    inputLabel: string;
    cancelButton: string;
    okButton: string;
    inputValue: string;

    constructor(@Inject(MD_DIALOG_DATA) data: PromptDialogData) {
        const { title, message, inputLabel, cancelButton = 'cancel', okButton = 'ok' } = data;

        this.title = title;
        this.message = message;
        this.inputLabel = inputLabel;
        this.cancelButton = cancelButton;
        this.okButton = okButton
    }
}
