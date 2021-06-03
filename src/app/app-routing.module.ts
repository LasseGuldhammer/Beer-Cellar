import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageViewComponent } from './frontpage/frontpage-view/frontpage-view.component';

const routes: Routes = [
  {
    path: '', component: FrontpageViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
