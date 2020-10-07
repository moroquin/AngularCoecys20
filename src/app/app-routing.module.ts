import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionComponent } from './components/region/region.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  { path: 'region', component: RegionComponent },
  { path: 'info', component: InfoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'region' },
  { path: '**', pathMatch: 'full', redirectTo: 'region' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
