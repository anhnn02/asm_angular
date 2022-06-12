import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AddProductComponent } from './pages/admin/product/add-product/add-product.component';
import { ListProductComponent } from './pages/admin/product/list-product/list-product.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { HomePageComponent } from './pages/client/home-page/home-page.component';
import { AdminLayoutComponent } from './pages/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './pages/layouts/auth-layout/auth-layout.component';
import { WebsiteLayoutComponent } from './pages/layouts/website-layout/website-layout.component';
import { Page404Component } from './pages/page404/page404.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '', component: WebsiteLayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'project/:id', component: AddProductComponent },
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'project', component: ListProductComponent },
      { path: 'project/add', component: AddProductComponent },
      { path: 'project/:id/edit', component: AddProductComponent },
      { path: 'category', component: AddProductComponent },
      { path: 'category/add', component: AddProductComponent },
      { path: 'category/:id/edit', component: AddProductComponent },
      { path: 'skill', component: AddProductComponent },
      { path: 'skill/add', component: AddProductComponent },
      { path: 'skill/:id/edit', component: AddProductComponent },
    ]
  },
  {
    path: '', component: AuthLayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'login', component: SignInComponent },
    ]
  },
  // { path: 'signin', component: SignInComponent },

  { path: 'page-not-found', component: Page404Component },
  { path: '**', redirectTo: '/page-not-found' }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
