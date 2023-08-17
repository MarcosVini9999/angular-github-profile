import { Component, Input } from '@angular/core';
import { iUser } from 'src/app/services/github-user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() user: iUser = {} as iUser;
}
