// JavaScript source code
import { Component, OnInit, OnDestroy } from '@angular/core';
import {BlogHttpService} from "../blog-http.service";
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {

  
    public allDetails = {};
    public newArr=[];
    public userDetails;
    public star;
    public userName;
    public totalStar;
  constructor(public blogHttpService:BlogHttpService,private _route:ActivatedRoute,public router:Router) { 
    console.log("Home component constructor called");  
    
  }

  
 
  

  ngOnInit() {
    console.log("Home component oninit called");
    let userRepos=[];
    let user=[];
    let userValue={};
    let userRepo;
    let myArray=[];
    let newArr=[];
    this.userDetails=[];
    let stars={};
    let key="starcount";
    let starValue=[];
    let html="<table>";
    let addBio;
    
    this.userName = this.blogHttpService.getUserNameFromLocalStorage();
       this.blogHttpService.getStars(this.userName).subscribe(
        data =>{
         
         this.totalStar=data.length;
         this.blogHttpService.getUserDetails(this.userName).subscribe(
          data =>{
            console.log(data);
            data.star=this.totalStar;     
            
            this.userDetails.push(data);
            
           
         
          },
          error =>{
            console.log("some error occurred");
            console.log(error.errorMessage);
          }
        )
         
        },
        error =>{
          console.log("some error occurred");
          console.log(error.errorMessage);
        }
      )


       this.blogHttpService.getRepos(this.userName).subscribe(
        data =>{
         console.log(data);
         
         userRepo=(data.slice(Math.max(data.length - 6, 0)));
         console.log(userRepo);
         let html = "<div>";
         for(var i=0;i<userRepo.length;i++)
        {
	        newArr.push(userRepo[i].name);
            html+='<a href="'+userRepo[i].html_url+'">'+userRepo[i].name+"</a>";
            html+="<br>";
            html+=userRepo[i].language;
            html+="<br>";
            html+=userRepo[i].description;
            html+="<hr>";
            html+= "</div>";
        }
        console.log(newArr);
        document.getElementById("repo").innerHTML=html;
        
        },
        error =>{
          console.log("some error occurred");
          console.log(error.errorMessage);
        }
      )

       

      
    
  }

  

  ngOnDestroy() {
    console.log("Home component ondestroy called");
  }
}
