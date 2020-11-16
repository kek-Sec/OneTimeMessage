import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap} from 'rxjs/operators';
import { Message } from './Message';
import { test } from './test';

@Injectable()
export class getMessage {

    constructor(private http: HttpClient, private tester: test) {

    }
    getMessage(id: string): Observable<Message> {
        const url = `${this.tester.IP}/${id}`;
        return this.http.get<Message>(url).pipe(
            tap(_ => console.log(`fetched message id=${id}`))
        );
    }
}