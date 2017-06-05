import {Component, EventEmitter, Output} from '@angular/core';
import {LoggingService} from "../logging.service";
import {logger} from "codelyzer/util/logger";
import {AccountComponent} from "../account/account.component";
import {AccountsService} from "../accounts.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  loggingService = new LoggingService();
  accountService = new AccountsService();

  onCreateAccount(accountName: string, accountStatus: string) {
    /* this.accountAdded.emit({
     name: accountName,
     status: accountStatus
     }); */
    // console.log('A server status changed, new status: ' + accountStatus);

    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
