import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoneComponent } from './done/done.component';
import { LandingComponent } from './landing/landing.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'welcome', component: LandingComponent },
  { path: 'done', component: DoneComponent },
  { path: 'view/undefined', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'view/:id', component: ViewComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
