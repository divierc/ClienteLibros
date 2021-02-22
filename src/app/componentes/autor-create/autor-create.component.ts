import { AutorService } from 'src/app/services/autor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { Autor } from 'src/app/models/autor';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },

  display: {
    dateInput: 'DD/MM/YYYY',

    monthYearLabel: 'MMMM YYYY',

    dateA11yLabel: 'LL',

    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-autor-create',
  templateUrl: './autor-create.component.html',
  styleUrls: ['./autor-create.component.css'],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }],
})
export class AutorCreateComponent implements OnInit {

  form: FormGroup;


  constructor(public autorService: AutorService, private router: Router) {}

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
    this.form = new FormGroup({
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

    console.log('create: ' + JSON.stringify(this.form.value));

    if (this.form.status === 'VALID') {

      this.autorService.create(this.form.value).subscribe((res) => {
        console.log('Autor creado!');

        this.router.navigateByUrl('/autor');
      });
    }
  }
}
