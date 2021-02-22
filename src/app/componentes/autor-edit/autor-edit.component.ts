import { AutorService } from 'src/app/services/autor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { Autor } from 'src/app/models/autor';
import { JsonpClientBackend } from '@angular/common/http';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD',
  },

  display: {
    dateInput: 'YYYY/MM/DD',

    monthYearLabel: 'YYYY MMMM',

    dateA11yLabel: 'LL',

    monthYearA11yLabel: 'YYYY MMMM',
  },
};

@Component({
  selector: 'app-autor-edit',
  templateUrl: './autor-edit.component.html',
  styleUrls: ['./autor-edit.component.css'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }],
})
export class AutorEditComponent implements OnInit {

  id: number;
  autor: Autor;
  form: FormGroup;

  constructor(public autorService: AutorService, private route: ActivatedRoute,private router: Router) {}

  /**
   * Campos de autor
  "id": 3,
  "nombre": "Maria Antonieta",
  "apellido": "jaramillo",
  "nombreCompleto": "Maria Antonieta jaramillo",
  "fechaNacimiento": "1980-06-05T00:00:00",
  "ciudadProcedencia": "Cali",
  "correoElectronico": "dsfadsf@a.com"
  */

  ngOnInit(): void {

    this.id = this.route.snapshot.params['autorId'];

    this.autorService.get(this.id).subscribe((data: Autor) => {

      this.autor = data;
      console.log('GetAutor:' + JSON.stringify(this.autor));
    });



    this.form = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      apellido: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      nombreCompleto: new FormControl(''),
      fechaNacimiento: new FormControl('', Validators.required),
      ciudadProcedencia: new FormControl('', Validators.required),
      correoElectronico: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log('Autor-edit: ' + JSON.stringify(this.form.value));
    console.log('SubmitAutor:' + JSON.stringify(this.autor));

    this.autorService.update(this.id, this.autor).subscribe((res) => {
      console.log('Autor actualizado!');
      this.router.navigateByUrl('autor');
    });
  }
}
