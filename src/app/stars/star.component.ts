// JavaScript source code
import { Component, OnInit, OnDestroy } from '@angular/core';
import {BlogHttpService} from "../blog-http.service";
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';

import 'rxjs/add/observable/of';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnDestroy {

  // ngOnDestroy(): void{
  //   throw new Error("Method not implemented");
  // }
  // public allBlogs={};
  // public characters;
  // public allBlogs=[
    public allDetails = {};
    public newArr=[];
    public userDetails;
   
  
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
    let userName = this.blogHttpService.getUserNameFromLocalStorage();
    this.blogHttpService.getUserDetails(userName).subscribe(
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

        this.blogHttpService.getStars(userName).subscribe(
        data =>{
         let starDetail;
        
         let html = "<table>";
         console.log(data);
         if(data.length==0)
         {
            html+="<tr>"
          
            html+="<td>"+"<b>"+"<br>"+"<br>"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"You don’t have any starred repository yet."+"</b>"+"</td>";
            
            html+= "</tr>";
            html+= "</table>"; 
            document.getElementById("copy").innerHTML = html;
         }

         else{

            
            
           
            starDetail=data;

            let value = "<div>";

            for (let i = 0; i < starDetail.length; i++)
            {
              
              
              
              value+='<a href="'+starDetail[i].html_url+'">'+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+starDetail[i].full_name+"</a>"+"<br>"+"<br>"+"<br>";
              
              value+="&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+starDetail[i].description+"<br>"+"<br>";
              value+="&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"Language:"+"&nbsp;"+"&nbsp;"+starDetail[i].language+"<br>"+"<br>";
              value+="&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"StarCount:"+"&nbsp;"+"&nbsp;"+starDetail[i].stargazers_count;
              value+="<hr>";
              value+= "</div>";
              document.getElementById("box").innerHTML = value;
              
              
             
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
