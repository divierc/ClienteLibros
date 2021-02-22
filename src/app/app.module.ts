import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LibroComponent } from './componentes/libro/libro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutorComponent } from './componentes/autor/autor.component';
import { EditorialComponent } from './componentes/editorial/editorial.component';
import { AutorCreateComponent } from './componentes/autor-create/autor-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutorEditComponent } from './componentes/autor-edit/autor-edit.component';
import { AutorViewComponent } from './componentes/autor-view/autor-view.component';
import { EditorialCreateComponent } from './componentes/editorial-create/editorial-create.component';
import { EditorialEditComponent } from './componentes/editorial-edit/editorial-edit.component';
import { EditorialViewComponent } from './componentes/editorial-view/editorial-view.component';
import { LibroCreateComponent } from './componentes/libro-create/libro-create.component';
import { LibroEditComponent } from './componentes/libro-edit/libro-edit.component';
import { LibroViewComponent } from './componentes/libro-view/libro-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LibroComponent,
    AutorComponent,
    EditorialComponent,
    AutorCreateComponent,
    AutorEditComponent,
    AutorViewComponent,
    EditorialCreateComponent,
    EditorialEditComponent,
    EditorialViewComponent,
    LibroCreateComponent,
    LibroEditComponent,
    LibroViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
