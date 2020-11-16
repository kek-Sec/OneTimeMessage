import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export interface Message {
  message_title: string;
  message_body: string;
  message_burn_on_read: boolean;
  expireAt: Date;
}
