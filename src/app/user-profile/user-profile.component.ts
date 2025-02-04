import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  @Input() name:string = "";
  @Input() email:string = "";
  @Input() photoUrl:string = ""
}
