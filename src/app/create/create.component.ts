import { Component, OnInit,ElementRef, ViewChild} from '@angular/core';
import { Toast } from '../toast';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ReCaptcha2Component } from 'ngx-captcha';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  protected aFormGroup: FormGroup;
  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;
   @ViewChild('langInput') langInput: ElementRef;
   @ViewChild('title', { static: true }) title: ElementRef;
   @ViewChild('message', { static: true }) message: ElementRef;

 
  Expires:string;
  onRead: boolean = false;
  OneDay: boolean = false;
  OneWeek: boolean = false;
  OneMonth: boolean = false;
  Never:boolean = false;


  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public type: 'image' | 'audio';
 
  constructor(public toastService:Toast,private modalService: NgbModal,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
   

  }
  // reset(): void {
  //   this.captchaElem.resetCaptcha();
  // }
  handleSuccess(data) {
    console.log(data);
  }
  open(content) {
    this.aFormGroup = this.formBuilder.group({
      title: [this.title.nativeElement.value,Validators.required],
      message:[this.message.nativeElement.value,Validators.required],
      expires:[this.Expires,Validators.required],
      recaptcha: ['', Validators.required]
    });
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }
  changeExpiresOn(val)
  {
    this.Expires = val;
    this.prepareCheckBoxes();
    if(val === "onRead")
    {
      this.onRead = true;
    }
    else if(val === "1 Day")
    {
      this.OneDay = true;
    }
    else if(val === "1 Week")
    {
      this.OneWeek = true;
    }
    else if(val === "1 Month")
    {
      this.OneMonth = true;
    }
    else if(val === "Never")
    {
      this.Never = true;
    }
  }

  prepareCheckBoxes()
  {
    this.onRead = false;this.OneDay = false;this.OneWeek = false;this.OneMonth = false;this.Never=false;
  }

  showStandard() {
    this.toastService.show('I am a standard toast');
  }

  showSuccess() {
    this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
  }

  showDanger(dangerTpl) {
    console.log(this.Expires);
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light' });
  }
}
