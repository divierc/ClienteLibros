import { EditorialService } from './../../services/editorial.service';
import { Editorial } from './../../models/editorial';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditorialComponent implements OnInit {

  editoriales: Editorial[] = [];

  constructor(public editorialService: EditorialService) {}

  ngOnInit(): void {
    this.editorialService.getAll().subscribe((data: Editorial[]) => {
      this.editoriales = data;

      console.log(this.editoriales);
    });
  }

  delete(id) {
    this.editorialService.delete(id).subscribe((res) => {
      this.editoriales = this.editoriales.filter((item) => item.id !== id);

      console.log('Autor borrado con exito!');
    });
  }

}
