import { EditorialService } from './../../services/editorial.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Editorial } from './../../models/editorial';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editorial-edit',
  templateUrl: './editorial-edit.component.html',
  styleUrls: ['./editorial-edit.component.css']
})
export class EditorialEditComponent implements OnInit {

  id: number;
  editorial: Editorial;
  form: FormGroup;

  constructor(public editorialService: EditorialService, private route: ActivatedRoute,private router: Router) {}

  /**
  <!-- "id": 2,
  "nombre": "planeta tierra",
  "direccion": "desc2 actualizado test",
  "telefono": 6874564,
  "correoElectronico": "planeta@gmail.com",
  "maxLibros": 5 -->
  */

  ngOnInit(): void {

    this.id = this.route.snapshot.params['editorialId'];

    this.editorialService.get(this.id).subscribe((data: Editorial) => {
      this.editorial = data;
      console.log('GetEditorial:' + JSON.stringify(this.editorial));
    });

    this.form = new FormGroup({
      id: new FormControl(),
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
    console.log('editorial-Edit: ' + JSON.stringify(this.form.value));
    console.log('Submit:' + JSON.stringify(this.editorial));

    this.editorialService.update(this.id, this.editorial).subscribe((res) => {
      console.log('Editorial actualizada!');
      this.router.navigateByUrl('editorial');
    });
  }
}
