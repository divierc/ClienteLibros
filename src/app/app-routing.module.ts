import { LibroViewComponent } from './componentes/libro-view/libro-view.component';
import { LibroEditComponent } from './componentes/libro-edit/libro-edit.component';
import { LibroCreateComponent } from './componentes/libro-create/libro-create.component';
import { EditorialViewComponent } from './componentes/editorial-view/editorial-view.component';
import { EditorialEditComponent } from './componentes/editorial-edit/editorial-edit.component';
import { AutorViewComponent } from './componentes/autor-view/autor-view.component';
import { AutorEditComponent } from './componentes/autor-edit/autor-edit.component';
import { AutorCreateComponent } from './componentes/autor-create/autor-create.component';
import { EditorialComponent } from './componentes/editorial/editorial.component';
import { AutorComponent } from './componentes/autor/autor.component';
import { LibroComponent } from './componentes/libro/libro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorialCreateComponent } from './componentes/editorial-create/editorial-create.component';

const routes: Routes = [
  { path: 'libro', component: LibroComponent  },
  { path: 'libro/create', component: LibroCreateComponent  },
  { path: 'libro/:libroId/edit', component: LibroEditComponent  },
  { path: 'libro/:libroId/view', component: LibroViewComponent  },
  { path: 'autor', component: AutorComponent  },
  { path: 'autor/create', component: AutorCreateComponent  },
  { path: 'autor/:autorId/edit', component: AutorEditComponent  },
  { path: 'autor/:autorId/view', component: AutorViewComponent  },
  { path: 'editorial', component: EditorialComponent  },
  { path: 'editorial/create', component: EditorialCreateComponent  },
  { path: 'editorial/:editorialId/edit', component: EditorialEditComponent  },
  { path: 'editorial/:editorialId/view', component: EditorialViewComponent  },
  { path: '', redirectTo: 'libro', pathMatch: 'full' },
  { path: '**', component: LibroComponent }
]

  @NgModule({
    imports: [
      RouterModule.forRoot( routes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AppRoutingModule { }
