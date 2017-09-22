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
}
