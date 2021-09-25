import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
})
export class ErrorPageComponent implements OnInit {

  @Input()
  messageTitle : string = "404 Not Found";
  @Input()
  messageDetail : string = "An unexpected error has occurred";

  constructor() {}

  ngOnInit(): void {}

  getMessageTitle(): string {
    return this.messageTitle;
  }

  getMessageDetail(): string {
    return this.messageDetail;
  }
}

