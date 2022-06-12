import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      password: [null, [Validators.required]],
      email: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.authService.login(this.validateForm.value).subscribe((data)=>{
        localStorage.setItem('user', JSON.stringify(data));
      }, error =>{
        console.log("Error",error.error);
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
