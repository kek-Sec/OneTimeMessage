import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast } from '../toast';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss'],
})
export class DoneComponent implements OnInit {
  constructor(public toastService: Toast, private router: Router) {}

  id: String;

  ngOnInit(): void {
    if (localStorage.getItem('id$') === null) {
      console.log('ee');
      this.router.navigate(['/welcome']);
    } else {
      this.id = localStorage.getItem('id$');
    }
  }
  copyToClipBoard() {
    this.toastService.show('Text copied to clipboard!', {
      classname: 'bg-success text-light',
      delay: 10000,
    });
  }
}
