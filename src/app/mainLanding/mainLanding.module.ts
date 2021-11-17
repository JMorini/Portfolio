import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { CoolAnimationsComponent } from './components/cool-animations/cool-animations.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecentProjectsComponent } from './components/recent-projects/recent-projects.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HeroSectionComponent,
  },
];

@NgModule({
  declarations: [
    HeroSectionComponent,
    CoolAnimationsComponent,
    AboutComponent,
    RecentProjectsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [
    HeroSectionComponent,
    CoolAnimationsComponent,
    AboutComponent,
    RecentProjectsComponent
  ],
  providers: [],
})
export class MainLandingModule {}
