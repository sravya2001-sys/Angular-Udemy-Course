import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { Users } from './users';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, CommonModule, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-course';
  users = DUMMY_USERS;
  selectedUserid = "u1";

  get selectedUser()
  {
      //alert(this.selectedUserid);
      return this.users.find((user)=>user.id === this.selectedUserid)!;
  }
  onRecieveChildData(id:string)
  {
      this.selectedUserid = id;
      //alert(this.selectedUserid);
  }
}
