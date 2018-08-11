import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  /* 
    We initialize an array messages where we will store our string
    messages
  */
  messages: string[] = [];

  constructor() { };

  // We add a method to add a message
  addMessage(message: string) {
    this.messages.push(message);
  }

  // We add a method to clear our messages.
  clearMessage() {
    this.messages = [];
  }
}
