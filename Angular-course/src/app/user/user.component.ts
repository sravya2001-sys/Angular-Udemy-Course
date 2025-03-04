import { Component , signal,computed} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
current_user = signal(DUMMY_USERS[randomIndex]);
//defining a getter-->this behaves like a property in template
// get imagePath(){
//   return 'assets/users/'+this.current_user.avatar;
// }
imagePath = computed(()=>'assets/users/'+this.current_user().avatar);
/* 
why not use like this ? imagePath = 'assets/users/'+this.current_user().avatar;
as current_user is a signal here , computed() method will revaluate imagePath whenever this signal value changes and returns signal in return, in short is subscribes to signal and recomputes when ever signal is updated
*/

onUserSelected(){
  const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length);
  this.current_user.set(DUMMY_USERS[randomIndex]);
}
}
