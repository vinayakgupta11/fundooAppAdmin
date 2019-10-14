import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import{AuthService} from './../../services/auth.service'
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  adminData: any

  constructor(  private router:Router,private auth: AuthService) {
    
   }

  ngOnInit() {
   

    // $("#adminLogin").click(function (e) {
    //   e.preventDefault();
    // });
  }
  
  onlogin() {

    
    // $(document).ready(function () {
    //   this.adminData = {
    //     email: $("#email").val(),
    //     password: $("#pwd").val()
    //   };
    // });
    this.adminData = {
      email: $("#email").val(),
      password: $("#pwd").val()
    };
    console.log(this.adminData);
    

      $.ajax({
        url: "http://fundoonotes.incubation.bridgelabz.com/api/user/adminLogin",
        data: this.adminData,
        type: 'POST',
        dataType: "json",
        success: (response)=> {
          localStorage.setItem('id',response.id);
          this.auth.sendToken(response.id);
          this.router.navigate(['dashboard'])
          console.log(response);
        }
      });
      
     


  


  }
  



}
