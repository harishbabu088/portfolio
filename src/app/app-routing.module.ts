import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { Tab1Component } from './tabs/tab1/tab1.component';
import { Tab2Component } from './tabs/tab2/tab2.component';
import { Tab3Component } from './tabs/tab3/tab3.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // {path:'/tab1', component:'Tab1Component'}
  { path: '', redirectTo: '/tabs/tab1', pathMatch: 'full' },
  {
    path: 'tabs',

    component: TabsComponent,
    children: [
      {
        path: 'tab1',
        component: Tab1Component,
      },
      {
        path: 'tab2',
        component: Tab2Component,
      },
      {
        path: 'tab3',
        component: Tab3Component,
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
