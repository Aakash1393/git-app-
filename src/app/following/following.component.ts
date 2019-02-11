// JavaScript source code
import { Component, OnInit, OnDestroy } from '@angular/core';
import {BlogHttpService} from "../blog-http.service";
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';

import 'rxjs/add/observable/of';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit,OnDestroy {

    public allDetails = {};
    public newArr=[];
    public userDetails;
    public userName; 
    public followLabel=true;
    public followingDetails=[];
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
    this.userDetails=[];
    this.userName = this.blogHttpService.getUserNameFromLocalStorage();
    this.blogHttpService.getUserDetails(this.userName).subscribe(
        data =>{
         console.log(data);
         this.userDetails.push(data);
        },
        error =>{
          console.log("some error occurred");
          console.log(error.errorMessage);
        }
      )

      this.blogHttpService.getFollowing(this.userName).subscribe(
        data =>{
         console.log(data);
         let followerDetail=[];
         this.followLabel=false;
         let html = "<table>";
         if(data.length==0)
         {
            
            html+="<tr>"
          
            html+="<td>"+"<b>"+"<br>"+"<br>"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"You don’t have any following yet."+"</b>"+"</td>";
            
            html+= "</tr>";
            html+= "</table>"; 
            document.getElementById("demo").innerHTML = html;
            
         }

          else{

            followerDetail=data;

            

            for (let i = 0; i < followerDetail.length; i++)
            {
              
              let followingName=followerDetail[i].login;
              this.blogHttpService.getUserDetails(followingName).subscribe(
                data =>{
                 // this.allDetails["books"]=data;
                 // this.allDetails["books"].sort();

                 console.log(data);
                 this.followingDetails.push(data);
                 console.log(this.followingDetails);
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
