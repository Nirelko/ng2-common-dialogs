import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDialogModule, MdButtonModule, MdInputModule, MdProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { ExampleComponent } from './example';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog';
import { AlertDialogComponent } from './dialogs/alert-dialog';
import { PromptDialogComponent } from './dialogs/prompt-dialog';
import { LoadingDialogComponent } from './dialogs/loading-dialog';

@NgModule({
  declarations: [
    ExampleComponent,
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
    BrowserModule,
    BrowserAnimationsModule,
    MdDialogModule,
    MdButtonModule,
    MdInputModule,
    MdProgressSpinnerModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ExampleComponent]
})
export class Ng2CommonDialogsModule { }
