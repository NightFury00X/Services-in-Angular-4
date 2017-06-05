/**
 * Created by cynoteck on 6/5/2017.
 */

export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
