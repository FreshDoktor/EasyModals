import { Observable, Subject } from 'rxjs';

export class ConfirmationmodalRef {
  constructor() {}

  private readonly _afterClosed = new Subject<boolean>();
  $afterClosed: Observable<any> = this._afterClosed.asObservable();

  close(result?: boolean) {
    this._afterClosed.next(result);
  }
}
