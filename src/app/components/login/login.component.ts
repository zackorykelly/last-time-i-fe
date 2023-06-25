import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private modalService: NgbModal) {
    this.username = '';
    this.password = '';
  }

  login(): void {
    // Here you can add your login logic, for example, sending a request to a server
    console.log(`Logging in with username: ${this.username} and password: ${this.password}`);
  }

  openModal(): void {
    const modalRef = this.modalService.open(LoginModalComponent);
    modalRef.result.then((result) => {
      console.log(`Modal result: ${result}`);
      // Here you can add your logic to handle the modal result
    }).catch((error) => {
      console.log(`Modal error: ${error}`);
    });
  }
}