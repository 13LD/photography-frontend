import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  constructor(public apiService: ApiService , public acRoute: ActivatedRoute) { }
  public user: User  = new User();
  ngOnInit() {

    this.acRoute.params.subscribe((data: any) => {
      console.log(data.id);
      if (data && data.id) {
        this.apiService.get('users/' + data.id).subscribe((data: User) => {
          this.user = data;
        });
      } else {
        this.user = new User();
      }
    });
  }
  public onSubmit() {
    console.log('Adding a user: ' + this.user);
    if (this.user.id) {
      this.apiService.update('users/' + this.user.id, this.user).subscribe((r) => {
        console.log(r);
        alert('User updated !');
      });
    } else {
      this.apiService.post('users', {user: this.user}).subscribe((r) => {
        console.log(r);
        this.user = new User();
        alert('User added !');

      });
    }
  }

}
