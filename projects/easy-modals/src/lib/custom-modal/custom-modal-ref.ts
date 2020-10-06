import { Observable, Subject } from 'rxjs';

export class CustomModalRef {
  constructor() {}

  private readonly afterClosed = new Subject<boolean>();
  $afterClosed: Observable<any> = this.afterClosed.asObservable();

  close(result?: boolean) {
    this.afterClosed.next(result);
  }
}
