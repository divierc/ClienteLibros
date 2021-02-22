import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EditorialService } from './../../services/editorial.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editorial-create',
  templateUrl: './editorial-create.component.html',
  styleUrls: ['./editorial-create.component.css']
})
export class EditorialCreateComponent implements OnInit {

  form: FormGroup;


  constructor(public editorialService: EditorialService, private router: Router) {}

  /**
    "id": 2,
    "nombre": "planeta Marte",
    "direccion": "desc2 actualizado test",
    "telefono": 6874564,
    "correoElectronico": "planeta@gmail.com",
    "maxLibros": 5
  */


  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z ]*$')
      ]),
      direccion: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      telefono: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(7),
      ]),
      correoElectronico: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]),
      maxLibros: new FormControl(0,[
        Validators.min(-1)
      ]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {

    console.log('create: ' + JSON.stringify(this.form.value));

    if (this.form.status === 'VALID') {

      this.editorialService.create(this.form.value).subscribe((res) => {
        console.log('Editorial creada!');

        this.router.navigateByUrl('/editorial');
      });
    }
  }
}
