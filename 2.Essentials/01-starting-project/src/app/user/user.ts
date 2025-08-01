import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  avatar = input.required<string>();
  name = input.required<string>();

  // get userImage() {
  //   return 'assets/users/' + this.avatar;
  // }
  userImage = computed(() => {
    return 'assets/users/' + this.avatar();
  }); 

  onSelectUser() { }
}

