import { Component, EventEmitter, Input, Output} from '@angular/core';

import { type User } from './user.model'
import { CardComponent } from "../shared/card/card.component";

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imgPath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
