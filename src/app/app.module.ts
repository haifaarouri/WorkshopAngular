import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListProductComponent } from './list-product/list-product.component';
import { FooterComponent } from './footer/footer.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AppRouringModule } from './app-rouring.module';
import { NotFoundComponent } from './not-found/not-found.component';
//tableau de routes statiques
/*const ROUTES: Routes = [
  {path:'home', component: HomeComponent},
  {path: 'product', component: ListProductComponent},
  {path: 'user', component: UserListComponent},
  {path: 'contact', component: ContactComponent}
]*/
/*.In our AppModule, we then need to specify the component that will serve as the entry point component for our application.
In our app.module.ts file where we import the entry component (conventionally AppComponent) and supply it as the only item
in our bootstrap array inside the NgModule configuration object. eg. bootstrap[AppComponent]*/
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListProductComponent,
    FooterComponent,
    UserListComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouringModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
