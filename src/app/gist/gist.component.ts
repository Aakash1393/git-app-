// JavaScript source code
import { Component, OnInit, OnDestroy } from '@angular/core';
import {BlogHttpService} from "../blog-http.service";
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';

import 'rxjs/add/observable/of';

@Component({
  selector: 'app-gist',
  templateUrl: './gist.component.html',
  styleUrls: ['./gist.component.css']
})
export class GistComponent implements OnInit,OnDestroy {

    public allDetails = {};
    public newArr=[];
    public userDetails;
    public gistsDetails=[];
  
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
         console.log(data);
         this.userDetails.push(data);
         console.log(this.userDetails[0].login);
        },
        error =>{
          console.log("some error occurred");
          console.log(error.errorMessage);
        }
      )



       this.blogHttpService.getGist(userName).subscribe(
        
        data =>{
         let html = "<table>";
         if(data.length==0)
         {
            console.log(data);
            html+="<tr>"
          
            html+="<td>"+"<b>"+"<br>"+"<br>"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"You don’t have any gists yet."+"</b>"+"</td>";
            
            html+= "</tr>";
            html+= "</table>"; 
            document.getElementById("box").innerHTML = html;
            
         }

         else{

            
             let gistDetail;
             let gistArray=[];
             let url;
             let newArr=[];
              gistDetail=data;
              console.log(gistDetail);
              let little=[];
              let html="<div>"
          
            for (let i = 0; i < gistDetail.length; i++)
            {
                let keyName = "fileName";
                let keyValue = "url";
                let obj = {};
                obj[keyName] = Object.keys(gistDetail[i].files);
                obj[keyValue]=(gistDetail[i].html_url);
                little.push(obj);
            }

            
            console.log(little);
             
             for (let j = 0; j < little.length; j++)
            {
               html+='<a href="'+little[j].url+'">'+little[j].fileName+"</a>";
               html+="<hr>";
               
            }

            document.getElementById("box").innerHTML = html;

       

             
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
