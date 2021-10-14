import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
})
export class ErrorPageComponent implements OnInit {
  @Input()
  messageId: string = '000';
  @Input()
  messageTitle: string = 'ERROR';
  @Input()
  messageDetail: string = 'An unexpected error has occurred';
  private readonly errors = [
     {id: '400',
     title: 'Bad Request',
     detail: 'An unexpected error has occurred'},
     {id: '401',
     title: 'Authorization Required',
     detail: 'An unexpected error has occurred'},
     {id: '403',
     title: 'Forbidden',
     detail: 'An unexpected error has occurred'},
     {id: '404',
     title: 'Not Found',
     detail: 'An unexpected error has occurred'},
     {id: '408',
     title: 'Request Time-Out',
     detail: 'An unexpected error has occurred'},
     {id: '410',
     title: 'Gone',
     detail: 'An unexpected error has occurred'},
     {id: '500',
     title: 'Internal Server Error',
     detail: 'An unexpected error has occurred'},
     {id: '502',
     title: 'Bad Gateway',
     detail: 'An unexpected error has occurred'},
     {id: '503',
     title: 'Service Temporarily Unavailable',
     detail: 'An unexpected error has occurred'},
     {id: '504',
     title: 'Gateway Time-Out',
     detail: 'An unexpected error has occurred'},
    ];
  constructor(private route: ActivatedRoute) {
    if(this.route.snapshot.params.messageKey != undefined) {
      this.messageId = this.route.snapshot.params.messageKey;
    }
    let error = this.errors.find((data) => {
      return data.id == this.messageId;
    });
    if(error != undefined) {
      this.messageTitle = error.title;
      this.messageDetail = error.detail;
    }
  }

  ngOnInit(): void {}

  getMessageId(): string {
    return this.messageId;
  }

  getMessageTitle(): string {
    return this.messageTitle;
  }

  getMessageDetail(): string {
    return this.messageDetail;
  }
}
