import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import {MatTooltipModule} from '@angular/material/tooltip'
import { MatPaginatorModule } from '@angular/material/paginator'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';
import { ButtonsContainerComponent } from './components/buttons-container/buttons-container.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CardsContainerComponent,
    ButtonsContainerComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTooltipModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
