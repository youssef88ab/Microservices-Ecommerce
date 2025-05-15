import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '/shop', component: ShopComponent },
    { path: '/login', component: LoginComponent},
    { path: '**', redirectTo: '' }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}