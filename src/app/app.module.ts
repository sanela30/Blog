import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { PostsComponent } from './posts/posts.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostsService } from './service/posts.service';
import { SinglePostComponent } from './single-post/single-post.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'posts', component: PostsComponent, pathMatch: 'full'},
  { path: 'post/:id',component: SinglePostComponent },
  {path:'add',component:FormComponentComponent}
];


@NgModule({
  declarations: [
    AppComponent, 
    LayoutComponent,
    PostsComponent,
    NavBarComponent,
    SinglePostComponent,
    FormComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
