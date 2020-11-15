import { Component, OnInit } from '@angular/core';
import { Toast } from '../toast';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {

  constructor(public toastService: Toast) { }

  ngOnInit(): void {
  }
  copyToClipBoard() {
    
    this.toastService.show('Text copied to clipboard!', { classname: 'bg-success text-light', delay: 10000 });
  }
}
