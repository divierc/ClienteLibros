import { Libro } from './../../models/libro';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libro-create',
  templateUrl: './libro-create.component.html',
  styleUrls: ['./libro-create.component.css'],
})
export class LibroCreateComponent implements OnInit {

  libro= new Libro();
  form: FormGroup;

  constructor(public libroService: LibroService, private router: Router) {}


  /**
     "id": 13,
    "titulo": "ejemplo10 ",
    "agno": 1980,
    "genero": "cronica",
    "numeroPaginas": 2,
    "editorialId": 4,
    "editorial": null,
    "autorId": 15,
    "autor": null
  */

  ngOnInit(): void {
    this.form = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      agno: new FormControl('', [
        Validators.required,
        Validators.minLength(4),

      ]),
      genero: new FormControl('', Validators.required),
      numeroPaginas: new FormControl('', Validators.required),
      editorialId: new FormControl('', Validators.required),
      autorId: new FormControl('', Validators.required),

    });
  }

  get nombreGenero() {
    return this.form.get('genero');
  }

  changeGenero(e) {
    this.nombreGenero.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log('create: ' + JSON.stringify(this.form.value));

    if (this.form.status === 'VALID') {
      this.libroService.create(this.form.value).subscribe((res) => {
        console.log('Libro creado!');

        this.router.navigateByUrl('/libro');
      });
    }
  }
}
