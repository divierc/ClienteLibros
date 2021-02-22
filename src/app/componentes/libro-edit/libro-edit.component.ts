import { LibroService } from './../../services/libro.service';
import { Libro } from './../../models/libro';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-libro-edit',
  templateUrl: './libro-edit.component.html',
  styleUrls: ['./libro-edit.component.css']
})
export class LibroEditComponent implements OnInit {



  id: number;
  libro: Libro;
  form: FormGroup;

  constructor(public libroService: LibroService, private route: ActivatedRoute,private router: Router) {}

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

    this.id = this.route.snapshot.params['libroId'];

    this.libroService.get(this.id).subscribe((data: Libro) => {

      this.libro = data;
      console.log('GetLibro:' + JSON.stringify(this.libro));
    });


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
    console.log('Libro-edit: ' + JSON.stringify(this.form.value));
    console.log('Submit-Libro:' + JSON.stringify(this.libro));

    this.libroService.update(this.id, this.libro).subscribe((res) => {
      console.log('Libro actualizado!');
      this.router.navigateByUrl('libro');
    });
  }
}
