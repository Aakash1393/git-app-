// JavaScript source code
import { Component, OnInit, OnDestroy } from '@angular/core';
import {BlogHttpService} from "../blog-http.service";
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit,OnDestroy {

    public allDetails = {};
    public newArr=[];
    public userDetails=[];
    public value=false; 
    public userValue;
    public userRepo;
    public starShow;
    public totalStar;
    constructor(public blogHttpService:BlogHttpService,private _route:ActivatedRoute,private router:Router,private toastr: ToastrService) { 
    console.log("Home component constructor called");
    
  }


  

  ngOnInit() {
    console.log("Home component oninit called");
    let userRepos=[];
    let user=[];
    let userValue={};
    
    let myArray=[];
    let userName;
    
    this.starShow=true;
    this.userDetails=[];
    let stars={};
    let key="starcount";
    
    let html="<table>";
    let addBio;
    
    //this.userName = this.blogHttpService.getUserNameFromLocalStorage();
      
       

      
    
  }
      // (function () {
        
      // ('#info').click(function () {
   		//     title is optional
      //     toastr.info("Info Message", "Title");
      //  });
      //  ('#warning').click(function () {
      //      toastr.warning("Warning");
      //  });
      // ('#success').click(function () {
      //      toastr.success("YYEESSSSSSS");
      // });
    //});
     search(userName) {
       if(userName=="")
       {
         this.toastr.error("Enter userName");
       }

       else
       {

       this.userRepo=[];
       this.userDetails=[];
       this.blogHttpService.getStars(userName).subscribe(
        data =>{
         
         this.totalStar=data.length;
         this.blogHttpService.getUserDetails(userName).subscribe(
          data =>{
            console.log(data);
            data.star=this.totalStar;     
            
            this.userDetails.push(data);
            
           
         
          },
          error =>{
            this.toastr.error("Enter valid user");
            console.log("some error occurred");
            
          }
        )
         
        },
        error =>{
          console.log("some error occurred");
          console.log(error.errorMessage);
        }
      )


       this.blogHttpService.getRepos(userName).subscribe(
        data =>{
         console.log(data);
         
         this.userRepo=(data.slice(Math.max(data.length - 6, 0)));
         console.log(this.userRepo);
         let html = "<div>";
         for(var i=0;i<this.userRepo.length;i++)
        {
	        this.newArr.push(this.userRepo[i].name);
            html+='<a href="'+this.userRepo[i].html_url+'">'+this.userRepo[i].name+"</a>";
            html+="<br>";
            html+=this.userRepo[i].language;
            html+="<br>";
            html+=this.userRepo[i].description;
            html+="<hr>";
            html+= "</div>";
        }
        console.log(this.newArr);
        document.getElementById("repo").innerHTML=html;
        
        },
        error =>{
          this.toastr.error("Enter valid user");
        }
      )

        
      }
       
     }
      


  ngOnDestroy() {
    console.log("Home component ondestroy called");
  }
}
