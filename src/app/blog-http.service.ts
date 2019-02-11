import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import { HttpHeaders  } from '@angular/common/http';
//let headers = new HttpHeaders();
//headers = headers.append("Authorization", "Basic " + btoa("username:password"));
//headers = headers.append("Content-Type", "application/x-www-form-urlencoded");

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  //public allBlogs;
  //public currentBlog;
  public myResponse;
  public baseUrl='https://api.github.com/users/';
 // public clientID: 'Iv1.de38ff467f20cea2';
  //public clientSecret: '197ef6e536258f85d7da2b054bb2f2ae780d97ab';
  constructor(private _http:HttpClient) { 

   console.log("blog http service was called"); 

  }


  public setUserName(userName):any{
   const userDetail=userName;
  }
  
  public getUserName():any{
    let userDetail;
    return userDetail;
  }

  public getUserDetails(userDetail): any{

 
    let myResponse = this._http.get(this.baseUrl+userDetail)
    
      return myResponse;

   
  }

   public getRepos(userDetail): any{

    
    let myResponse = this._http.get(this.baseUrl+userDetail+'/'+"repos")
    
      return myResponse;
   
  }

   public getStarCount(userDetail): any{

    
    let myResponse = this._http.get(this.baseUrl+userDetail+'/'+"starred")
    
      return myResponse;
   
  }



      public getUserInfoFromLocalStorage = () =>{

    return JSON.parse(localStorage.getItem('userInfo'));


    }




   public setUserInfoInLocalStorage = (data) =>{

      localStorage.setItem('userInfo', JSON.stringify(data))


    }


      public getUserNameFromLocalStorage = () =>{

        return JSON.parse(localStorage.getItem('user'));
      }

      public getUserRepoNameFromLocalStorage = () =>{

        return JSON.parse(localStorage.getItem('repo'));
      }


      public setUserRepoNameInLocalStorage = (userName) =>{

        localStorage.setItem('repo', JSON.stringify(userName))


      }

     public setUserNameInLocalStorage = (userName) =>{

      localStorage.setItem('user', JSON.stringify(userName))


    } 


     public getFollowers(userName): any{

    
      let myResponse = this._http.get(this.baseUrl+userName+'/'+"followers");
    
      return myResponse;
   
    }

    public getFollowing(userName): any{

    
      let myResponse = this._http.get(this.baseUrl+userName+'/'+"following");
    
      return myResponse;
   
    }

     public getStars(userName): any{

    
      let myResponse = this._http.get(this.baseUrl+userName+'/'+"starred");
    
      return myResponse;
   
    }

     public getGist(userName): any{

    
      let myResponse = this._http.get(this.baseUrl+userName+'/'+"gists");
    
      return myResponse;
   
    }

    public signIn(username,password): any{

    //this._http.get('https://api.github.com/users/'+username, {headers: headers})(response => {
    //     console.log(response);
   //}, err => {
   //   console.log("User authentication failed!");
   //});
   let clientId=Iv1.de38ff467f20cea2;
   let clientSecret=197ef6e536258f85d7da2b054bb2f2ae780d97ab;
    return this._http.get('https://api.github.com/users/'+username+'?client_id='+clientId+'&client_secret='+clientSecret+,{headers:{Autorization: "Basic " + btoa(username+":"+password)}})

    }
}
