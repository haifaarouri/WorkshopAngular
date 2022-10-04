import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const ROUTES: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'index', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path: 'product', component: ListProductComponent},
  {path: 'user', component: UserListComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: NotFoundComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES) //cette méthode forRoot pour faire le parcour du tableau ROUTES, à chaque fois l'user change l'url tsir appel a cette méthode
  ],
  exports:[RouterModule]
})
export class AppRouringModule { }
