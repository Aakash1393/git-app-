import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BlogHttpService} from "./blog-http.service";
import{RouterModule} from '@angular/router';
import{ FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {ToastrService } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RepositoryComponent } from './repositories/repository.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';
import { GistComponent } from './gist/gist.component';
import { SearchComponent } from './search/search.component';
import {SharedModule} from './shared/shared.module';
import { StarComponent } from './stars/star.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RepositoryComponent,
    StarComponent,
    SearchComponent,
    GistComponent,
    FollowersComponent,
    FollowingComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
    {path:'login',component:LoginComponent},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'user',component:UserComponent},
    {path:'repository',component:RepositoryComponent},
    {path:'followers',component:FollowersComponent},
    {path:'following',component:FollowingComponent},
    {path:'gist',component:GistComponent},
    {path:'search',component:SearchComponent},
    {path:'stars',component:StarComponent},
  ]),
  SharedModule
  ],

  providers: [BlogHttpService,ToastrService,ToastrModule,HttpClientModule,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
