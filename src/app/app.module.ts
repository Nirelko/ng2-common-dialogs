import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDialogModule, MdButtonModule, MdInputModule, MdProgressSpinnerModule } from '@angular/material';

import { AlertDialogComponent } from './dialogs/alert-dialog';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog';
import { PromptDialogComponent } from './dialogs/prompt-dialog';
import { LoadingDialogComponent } from './dialogs/loading-dialog';
import { CommonDialogService } from './services/common-dialog.service';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    AlertDialogComponent,
    PromptDialogComponent,
    LoadingDialogComponent
  ],
  entryComponents: [
    ConfirmDialogComponent,
    AlertDialogComponent,
    PromptDialogComponent,
    LoadingDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdDialogModule,
    MdButtonModule,
    MdInputModule,
    MdProgressSpinnerModule,
    FormsModule,
  ],
  providers: [
    CommonDialogService
  ],
  exports:[
    ConfirmDialogComponent,
    AlertDialogComponent,
    PromptDialogComponent,
    LoadingDialogComponent
  ]
})
export class NgmCommonDialogsModule { }
