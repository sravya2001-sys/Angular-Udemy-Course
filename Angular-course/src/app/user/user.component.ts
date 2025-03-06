import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
// @Input({required:true}) avatar!:string;
// @Input({required:true}) name!:string;
// @Input({required:true}) id!:string;
@Input({required:true}) user!:Users;
@Output() select = new EventEmitter<string>();

onUserSelected(){
  this.select.emit(this.user.id);
}
}
