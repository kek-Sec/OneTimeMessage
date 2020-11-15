import { Component, OnInit } from '@angular/core';
import { Toast } from '../toast';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  Expires:string;

  constructor(public toastService:Toast) { }

  ngOnInit(): void {
  }

  changeExpiresOn(val)
  {
    this.Expires = val;
  }
  showStandard() {
    console.log("e");
    this.toastService.show('I am a standard toast');
  }

  showSuccess() {
    this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
  }

  showDanger(dangerTpl) {
    console.log(this.Expires);
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
  }

}
