import { Component } from '@angular/core';

import { ConfirmDialogComponent } from '../../dialogs/confirm-dialog';
import { AlertDialogComponent } from '../../dialogs/alert-dialog';
import { PromptDialogComponent } from '../../dialogs/prompt-dialog';
import { LoadingDialogComponent } from '../../dialogs/loading-dialog';
import { CommonDialogService } from '../../services/common-dialog.service';

@Component({
  selector: 'service-example',
  templateUrl: './service-example.html',
  styleUrls: ['./service-example.scss']
})
export class ServiceExampleComponent {
  alertText: string;
  confirmText: string;
  promptText: string;
  loadingText: string;
  shouldReject = false;
  
  constructor(private commonDialogService: CommonDialogService) { }
  
  showAlertDialog () {
    return this.commonDialogService.showAlert({
      title: 'Nice One',
      message: 'You just opened an alert dialog',
      okButton: 'Yay!',
    }).then(() => this.alertText = 'Wow');
  }
  
  showConfirmDialog () {
    return this.commonDialogService.showConfirm({
      title: 'Caution',
      message: 'Are you sure you want to do this?',
      cancelButton: 'No Way!',
      yesButton: 'Absolutely',
    })
    .then(() => this.confirmText = 'Lets go!')
    .catch(() => this.confirmText = 'Maybe next time');
  }
  
  showPromptDialog () {
    return this.commonDialogService.showPrompt({
      title: 'Personality Test',
      message: 'What is your favorite dish?',
      inputLabel: 'Dish Name',
      cancelButton: 'No',
      okButton: 'Choose',
    })
    .then(dishName => this.promptText = dishName);
  }
  
  showLoadingDialog() {
    return this.commonDialogService.showLoading({
      title: 'Be patient...',
      promise: new Promise((resolve, reject) => {
        setTimeout(() => {
          if(this.shouldReject) {
            reject();
          }
          else {
            resolve();
          }
          this.shouldReject = !this.shouldReject;
        }, 2000)
      })
    })
    .then(() => this.loadingText = 'It Worked!')
    .catch(() => this.loadingText = 'It Failed!');
  }
}
