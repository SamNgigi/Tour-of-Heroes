import { Component, OnInit } from '@angular/core';
// Adding the MessageService
import { MessageService } from '../message-service/message.service';

@Component({
  selector: 'toh-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  // Injecting the service
  constructor(public messageService: MessageService) { }

  ngOnInit() {

  }

}
