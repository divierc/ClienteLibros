import { Autor } from './../../models/autor';
import { Component, OnInit } from '@angular/core';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css'],
})
export class AutorComponent implements OnInit {

  autores: Autor[] = [];

  constructor(public autorService: AutorService) {}

  ngOnInit(): void {
    this.autorService.getAll().subscribe((data: Autor[]) => {
      this.autores = data;

      console.log(this.autores);
    });
  }

  delete(id) {
    this.autorService.delete(id).subscribe((res) => {
      this.autores = this.autores.filter((item) => item.id !== id);

      console.log('Autor borrado con exito!');
    });
  }
}
