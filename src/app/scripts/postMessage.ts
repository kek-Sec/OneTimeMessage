import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from './Message';
import { test } from './test';

@Injectable()
export class postMessage {
  constructor(private http: HttpClient, private tester: test) {}

  addMessage(message: Message): Observable<JSON> {
    return this.http.post<JSON>(this.tester.POST_IP, message, {
      responseType: 'json',
    });
  }
}
