import { Observable, Subject } from 'rxjs';

export class CustomModalRef {
  constructor() {}

  private readonly afterClosed = new Subject<any>();
  $afterClosed: Observable<any> = this.afterClosed.asObservable();

  close(result?: any) {
    this.afterClosed.next(result);
  }
}
