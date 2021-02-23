import { AutorService } from './../../services/autor.service';
import { EditorialService } from './../../services/editorial.service';
import { Editorial } from './../../models/editorial';
import { Autor } from './../../models/autor';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from './../../models/libro';
import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/app/services/libro.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-libro-view',
  templateUrl: './libro-view.component.html',
  styleUrls: ['./libro-view.component.css'],
})
export class LibroViewComponent implements OnInit {
  libro: Libro = new Libro();

  constructor(
    public libroService: LibroService,
    public editorialService: EditorialService,
    public autorService: AutorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.libro.id = this.route.snapshot.params['libroId'];
    this.libro.autor = new Autor();
    this.libro.editorial = new Editorial();
    // Se hace el llamado del libro
    this.libroService.get(this.libro.id).subscribe((data: Libro) => {
      this.libro = data;
      console.log('GetLibro:' + JSON.stringify(this.libro));

      // Se hace el llamado del autor
      this.autorService
        .get(this.libro.autorId)
        .subscribe((data: Autor) => {
          this.libro.autor = data;
          console.log('GetAutor:' + JSON.stringify(this.libro.autor));
        });

      // Se hace el llamado de la editorial
      this.editorialService
        .get(this.libro.editorialId)
        .subscribe((data: Editorial) => {
          this.libro.editorial = data;
          console.log('GetEditorial:' + JSON.stringify(this.libro.editorial));
        });
    });
  }
}
