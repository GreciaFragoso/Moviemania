import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', 
    //redirectTo: '' }, // sería bueno tener una vista home para redireccionar por default
  { path: 'movie-details/:id', // para recuperar el id de la película 
    loadChildren: () => import('./components/movie-details/movie-details.module').then(m => m.MovieDetailsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
