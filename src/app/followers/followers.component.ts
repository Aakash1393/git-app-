// JavaScript source code
import { Component, OnInit, OnDestroy } from '@angular/core';
import {BlogHttpService} from "../blog-http.service";
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';

import 'rxjs/add/observable/of';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit,OnDestroy {
    public allDetails = {};
    public newArr=[];
    public userDetails;
    public followerData;
    public followerValue;
    public followLabel=true;
    public followerDetails=[];
 
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
    let newArr=[];
    let userName;
    let html = "<table>";
    this.userDetails=[];
     userName = this.blogHttpService.getUserNameFromLocalStorage();
    this.blogHttpService.getUserDetails(userName).subscribe(
        data =>{
         // this.allDetails["books"]=data;
         // this.allDetails["books"].sort();

         console.log(data);
         this.userDetails.push(data);
         //console.log(this.userDetails[0].login);
        },
        error =>{
          console.log("some error occurred");
          console.log(error.errorMessage);
        }
      )


      this.blogHttpService.getFollowers(userName).subscribe(
        data =>{
         console.log(data);

         this.followLabel=false;
         let followerDetail;
         html = "<div>";
         if(data.length==0)
         {
            
            
          
            html+="<b>"+"<br>"+"<br>"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"You don’t have any followers yet."+"</b>";
            
            html+= "</div>"; 
            document.getElementById("box").innerHTML = html;
            
         }

         
         

         else{

            
            
            //this.followLabel=true;   
            followerDetail=data;

            

            for (let i = 0; i < followerDetail.length; i++)
            {
              
              let followerName=followerDetail[i].login;
              this.blogHttpService.getUserDetails(followerName).subscribe(
                data =>{
                 // this.allDetails["books"]=data;
                 // this.allDetails["books"].sort();

                 console.log(data);
                 this.followerDetails.push(data);
                 console.log(this.followerDetails);
                },
                error =>{
                  console.log("some error occurred");
                  console.log(error.errorMessage);
                }
              )
              
              
              
             
            }

             
            
         }

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
