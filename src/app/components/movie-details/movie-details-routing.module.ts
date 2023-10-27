import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details.component';
import { CommonModule } from '@angular/common'; 

const routes: Routes = [{ path: '', component: MovieDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule, CommonModule]
})
export class MovieDetailsRoutingModule { }
