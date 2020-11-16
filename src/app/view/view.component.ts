import { Message } from '../scripts/Message';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getMessage } from '../scripts/getMessage';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public Expires:string;
  public msg_title:string;
  public msg_body:string;

  id: string;
  private sub: any;

  msg: Message;
  mx: Observable<Message>;

  show_notFound: Boolean = false;

  constructor(private spinner: NgxSpinnerService, private route: ActivatedRoute, private message: getMessage) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.mx = this.message.getMessage(this.id);
      this.subscribe();
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 1500);
    });

  }

  subscribe() {

    this.mx.subscribe({
      next: data => {
        console.log(data);
        this.msg = data;
        this.show_notFound = this.msg.message_body == undefined;
        if (!this.show_notFound) { this.populateTextboxes(); }
      }
    })
  }
  populateTextboxes() {
    
    this.msg_body = this.msg.message_body;
    this.msg_title = this.msg.message_title;
    this.setExpires();
  }
  setExpires()
  {
    if(this.msg.message_burn_on_read != undefined)
    {
      if(this.msg.message_burn_on_read)
      {
        this.Expires == "On read!"
        return;
      }
    }
    this.Expires = this.msg.expireAt.toString();
  }
}
