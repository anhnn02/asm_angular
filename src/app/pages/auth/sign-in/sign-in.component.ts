import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  validateForm!: FormGroup;
  error!: string;
  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router
    ) { 

     }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      password: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.authService.login(this.validateForm.value).subscribe((data)=>{
        localStorage.setItem('user', JSON.stringify(data));
        setTimeout(()=>{
          this.router.navigateByUrl("/admin")
        },1000)
      }, error =>{
        this.error = error.error
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
