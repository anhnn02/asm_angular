import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListProductComponent } from './pages/admin/product/list-product/list-product.component';
import { AddProductComponent } from './pages/admin/product/add-product/add-product.component';
import { ListUserComponent } from './pages/admin/user/list-user/list-user.component';
import { AdminLayoutComponent } from './pages/layouts/admin-layout/admin-layout.component';
import { WebsiteLayoutComponent } from './pages/layouts/website-layout/website-layout.component';
import { AuthLayoutComponent } from './pages/layouts/auth-layout/auth-layout.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Page404Component } from './pages/page404/page404.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { SearchFormComponent } from './components/admin/nav/search-form/search-form.component';
import { NavAdminComponent } from './components/admin/nav/nav-admin/nav-admin.component';
import { ActionAccountComponent } from './components/admin/nav/action-account/action-account.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { HeaderComponent } from './components/client/header/header.component';
import { FooterComponent } from './components/client/footer/footer.component';
import { LogoComponent } from './components/client/logo/logo.component';
import { HomePageComponent } from './pages/client/home-page/home-page.component';
import { BannerComponent } from './components/client/banner/banner.component';
import { IntroduceComponent } from './components/client/introduce/introduce.component';
import { SkillsComponent } from './components/client/skills/skills.component';
import { ServicesComponent } from './components/client/services/services.component';
import { ProjectsComponent } from './components/client/projects/projects.component';
import { ConceptsComponent } from './components/client/concepts/concepts.component';
import { ContactComponent } from './components/client/contact/contact.component';
import { FormContactComponent } from './components/client/form-contact/form-contact.component';
import { ProjectDetailComponent } from './pages/client/project-detail/project-detail.component';
import { ConceptDetailComponent } from './pages/client/concept-detail/concept-detail.component';
import { CategoryComponent } from './pages/admin/category/category/category.component';

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    AddProductComponent,
    ListUserComponent,
    AdminLayoutComponent,
    WebsiteLayoutComponent,
    AuthLayoutComponent,
    SidebarComponent,
    Page404Component,
    DashboardComponent,
    SearchFormComponent,
    NavAdminComponent,
    ActionAccountComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    HomePageComponent,
    BannerComponent,
    IntroduceComponent,
    SkillsComponent,
    ServicesComponent,
    ProjectsComponent,
    ConceptsComponent,
    ContactComponent,
    FormContactComponent,
    ProjectDetailComponent,
    ConceptDetailComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzInputModule,
    NzFormModule,
    ReactiveFormsModule,
    NzTableModule,
    NzDividerModule
    // NzTableFilterFn,
    // NzTableFilterList,
    // NzTableSortFn,
    // NzTableSortOrder
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
