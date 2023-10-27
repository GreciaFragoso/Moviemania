import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  //{ path:'', pathMatch: 'full', },
  // sería bueno tener una vista home para redireccionar por default
  { path: 'movie-details', component: MovieDetailsComponent }]; // para recuperar el id de la película quité id:
    // loadChildren: () => import('./components/movie-details/movie-details.module').then(m => m.MovieDetailsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
