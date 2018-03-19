import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from './user';
import { USERS } from './mock-users';
import { MessageService } from './message.service';

@Injectable()
export class UserService {

  constructor(private messageService: MessageService) { }

  getUsers(): Observable<User[]> {
    // Todo: send the message _after_ fetching the users
    this.messageService.add('UserService: fetched users');
    return of(USERS);
  }

}
