// JavaScript source code
import { Component, OnInit,OnChanges,Input,EventEmitter,Output,OnDestroy } from '@angular/core';
import {BlogHttpService} from "../blog-http.service";
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
    @Input() userName:any;
    @Input() userPassword:any;
    
    public allDetails = {};
    public newArr=[];
    public login={};
   
  
  constructor(public blogHttpService:BlogHttpService,private _route:ActivatedRoute,private router:Router) { 
    console.log("Home component constructor called");  
  
  }

    
   
    getUser(userDetail,password){

      this.blogHttpService.setUserNameInLocalStorage(userDetail);
      //this.router.navigate(['/user']);

        this.blogHttpService.signIn(userDetail,password).subscribe(
          data =>{
          

           console.log(data);
           
          },
          error =>{
            console.log("some error occurred");
            console.log(error.errorMessage);
          }
        )
      }  
 
   

    ngOnInit() {
    console.log("Home component oninit called");
    
  }


  ngOnDestroy() {
    console.log("Home component ondestroy called");
  }
}
