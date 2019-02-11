// JavaScript source code
import { Component, OnInit, OnDestroy } from '@angular/core';
import {BlogHttpService} from "../blog-http.service";
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import 'rxjs/add/observable/of';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit,OnDestroy {

  // ngOnDestroy(): void{
  //   throw new Error("Method not implemented");
  // }
  // public allBlogs={};
  // public characters;
  // public allBlogs=[
    public allDetails = {};
    public newArr=[];
    public userDetails;
    public userName;
   
  
  constructor(public blogHttpService:BlogHttpService,private _route:ActivatedRoute,private router:Router) { 
    console.log("Home component constructor called");  
    
  }

   
 
     

  ngOnInit() {
    console.log("Home component oninit called");
    let userRepos=[];
    let user=[];
    let userValue={};
    let userRepo;
    let myArray=[];
    this.userDetails=[];

    this.userName = this.blogHttpService.getUserNameFromLocalStorage();
        
    //this.userName = this.blogHttpService.getUserInfoFromLocalStorage();

      


    this.blogHttpService.getUserDetails(this.userName).subscribe(
        data =>{
         // this.allDetails["books"]=data;
         // this.allDetails["books"].sort();

         console.log(data);
         this.userDetails.push(data);
         console.log(this.userDetails[0].login);
        },
        error =>{
          console.log("some error occurred");
          console.log(error.errorMessage);
        }
      )


       

        this.blogHttpService.getStarCount(this.userName).subscribe(
        
        data =>{
         console.log(data.length);
         let key = "starCount";
         let obj = {};
         obj[key] = data.length;
         myArray.push(obj);
         console.log(data);
         
        
    
        },
        error =>{
          console.log("some error occurred");
          console.log(error.errorMessage);
        }
      )

      
        let newArr=[];
        let value={};
        this.blogHttpService.getRepos(this.userName).subscribe(
        data =>{
         console.log(data);
      
        let html = "<div>";
        for (let i = 0; i < data.length; i++) {
            let dateString = data[i].updated_at;
            dateString = new Date(dateString).toUTCString();
            dateString = dateString.split(' ').slice(0, 4).join(' ');
            html+="<div>";
            html+='<a href="'+data[i].html_url+'">'+data[i].name+"</a>";
            html+="<br>";
            html+=data[i].language;
            html+="<br>";
            html+=dateString;
            html+="<hr>";
            html+= "</div>";
        

        }
    
        document.getElementById("box").innerHTML = html;
        
        },
        error =>{
          console.log("some error occurred");
          console.log(error.errorMessage);
        }
      )

      this._route.queryParams.subscribe(params => {
      console.log(params);
      this.userName = params['this.userName'];
    })
      
  }

  

  ngOnDestroy() {
    console.log("Home component ondestroy called");
  }
}
