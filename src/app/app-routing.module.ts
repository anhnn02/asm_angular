import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/category/add-category/add-category.component';
import { CategoryComponent } from './pages/admin/category/category/category.component';
import { AddConceptComponent } from './pages/admin/concept/add-concept/add-concept.component';
import { ListConceptComponent } from './pages/admin/concept/list-concept/list-concept.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AddProductComponent } from './pages/admin/product/add-product/add-product.component';
import { ListProductComponent } from './pages/admin/product/list-product/list-product.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { ConceptDetailComponent } from './pages/client/concept-detail/concept-detail.component';
import { HomePageComponent } from './pages/client/home-page/home-page.component';
import { ProjectDetailComponent } from './pages/client/project-detail/project-detail.component';
import { AdminLayoutComponent } from './pages/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './pages/layouts/auth-layout/auth-layout.component';
import { WebsiteLayoutComponent } from './pages/layouts/website-layout/website-layout.component';
import { Page404Component } from './pages/page404/page404.component';
import { AuthGuard } from './services/auth.guard';
import { BlogDetailComponent } from './pages/client/blog-detail/blog-detail.component';
import { ListBlogComponent } from './pages/admin/blog/list-blog/list-blog.component';
import { AddBlogComponent } from './pages/admin/blog/add-blog/add-blog.component';
import { ListCateBlogComponent } from './pages/admin/cateBlog/list-cate-blog/list-cate-blog.component';
import { AddCateBlogComponent } from './pages/admin/cateBlog/add-cate-blog/add-cate-blog.component';
import { IntroComponent } from './pages/admin/intro/intro.component';

const routes: Routes = [
  {
    path: '', component: WebsiteLayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'project/:id', component: ProjectDetailComponent },
      { path: 'concept/:id', component: ConceptDetailComponent },
      { path: 'blog/:id', component: BlogDetailComponent },
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'project', component: ListProductComponent },
      { path: 'project/add', component: AddProductComponent },
      { path: 'project/:id/edit', component: AddProductComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'category/add', component: AddCategoryComponent },
      { path: 'category/:id/edit', component: AddCategoryComponent },
      { path: 'category-blog', component: ListCateBlogComponent },
      { path: 'category-blog/add', component: AddCateBlogComponent },
      { path: 'category-blog/:id/edit', component: AddCateBlogComponent },
      { path: 'concept', component: ListConceptComponent },
      { path: 'concept/add', component: AddConceptComponent },
      { path: 'concept/:id/edit', component: AddConceptComponent },
      { path: 'blog', component: ListBlogComponent },
      { path: 'blog/add', component: AddBlogComponent },
      { path: 'blog/:id/edit', component: AddBlogComponent },
      { path: 'introduce/:id', component: IntroComponent },

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
