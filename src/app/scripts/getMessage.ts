import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from './Message';
import { test } from './test';

@Injectable()
export class getMessage
{
    m:Message;

    constructor(private http:HttpClient,private tester:test)
    {

    }

    getMessage(id:string)
    {

        this.http.get<Message>(this.tester.IP + '/otm/' + id,{responseType: 'json'}).subscribe({
            next: data => {
                this.m = data;
                console.log(data);
            },
            error: error => {
                console.error('There was an error!', error);
            }
        })
    }
}