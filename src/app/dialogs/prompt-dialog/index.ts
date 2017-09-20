import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'prompt-dialog',
  templateUrl: './prompt-dialog.html',
})
export class PromptDialogComponent {
    title: string;
    message: string;
    inputLabel: string;
    cancelButton: string;
    okButton: string;
    inputValue: string;

    constructor(@Inject(MD_DIALOG_DATA) data) {
        const { title, message, inputLabel, cancelButton = 'cancel', okButton = 'ok' } = data;

        this.title = title;
        this.message = message;
        this.inputLabel = inputLabel;
        this.cancelButton = cancelButton;
        this.okButton = okButton
    }
}
