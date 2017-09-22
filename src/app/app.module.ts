import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDialogModule, MdButtonModule, MdInputModule, MdProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { ExampleComponent } from './example';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog';
import { AlertDialogComponent } from './dialogs/alert-dialog';
import { PromptDialogComponent } from './dialogs/prompt-dialog';
import { LoadingDialogComponent } from './dialogs/loading-dialog';
import { CommonDialogService } from './services/common-dialog.service';
import { ComponentsExampleComponent } from './example/components-example';
import { ServiceExampleComponent } from './example/service-example/index';

@NgModule({
  declarations: [
    ExampleComponent,
    ConfirmDialogComponent,
    AlertDialogComponent,
    PromptDialogComponent,
    LoadingDialogComponent,
    ComponentsExampleComponent,
    ServiceExampleComponent
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
    FlexLayoutModule,
    FormsModule
  ],
  providers: [
    CommonDialogService
  ],
  bootstrap: [ExampleComponent],
  exports:[
    ConfirmDialogComponent,
    AlertDialogComponent,
    PromptDialogComponent,
    LoadingDialogComponent,
    CommonDialogService
  ]
})
export class Ng2CommonDialogsModule { }
