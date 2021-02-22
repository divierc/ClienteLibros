import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from './../../models/libro';
import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/app/services/libro.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-libro-view',
  templateUrl: './libro-view.component.html',
  styleUrls: ['./libro-view.component.css']
})
export class LibroViewComponent implements OnInit {

  id: number;
  libro: Libro;

  constructor(
    public libroService: LibroService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['libroId'];

    this.libroService.get(this.id).subscribe((data: Libro)=>{
      this.libro = data;
      console.log('GetLibro:' + JSON.stringify(this.libro));
    });
  }

}
