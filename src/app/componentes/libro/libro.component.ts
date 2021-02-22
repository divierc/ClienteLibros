import { LibroService } from './../../services/libro.service';
import { Libro } from './../../models/libro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  libros: Libro[] = [];

  constructor(public libroService: LibroService) {}

  ngOnInit(): void {
    this.libroService.getAll().subscribe((data: Libro[]) => {
      this.libros = data;

      console.log(this.libros);
    });
  }

  delete(id) {
    this.libroService.delete(id).subscribe((res) => {
      this.libros = this.libros.filter((item) => item.id !== id);

      console.log('Libro borrado con exito!');
    });
  }
}
