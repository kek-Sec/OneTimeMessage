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
 
  captcha$:string;
  captcha_res:string;
  Expires:string;

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
    this.aFormGroup = this.formBuilder.group({
      title: ['',Validators.required],
      message:['',Validators.required],
      recaptcha: ['', Validators.required]
    });
  }
  // reset(): void {
  //   this.captchaElem.resetCaptcha();
  // }
  handleSuccess(data) {
    console.log(data);
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
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
