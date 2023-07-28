import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule} from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddEditDepComponent } from './components/home/add-edit-dep/add-edit-dep.component';
import { ShowDepComponent } from './components/home/show-dep/show-dep.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailComponent } from './components/detail/detail.component';
import { AddEditDetailComponent } from './components/detail/add-edit-detail/add-edit-detail.component';
import { ShowDetailComponent } from './components/detail/show-detail/show-detail.component';

import { TodoService } from './services/todo.service';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from'@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    DetailComponent,
    AddEditDepComponent,
    ShowDepComponent,
    AddEditDetailComponent,
    ShowDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatCardModule,
    CdkAccordionModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
