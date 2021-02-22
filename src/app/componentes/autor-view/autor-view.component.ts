import { ActivatedRoute, Router } from '@angular/router';
import { AutorService } from 'src/app/services/autor.service';
import { Autor } from 'src/app/models/autor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor-view',
  templateUrl: './autor-view.component.html',
  styleUrls: ['./autor-view.component.css']
})
export class AutorViewComponent implements OnInit {

  id: number;
  autor: Autor;

  constructor(
    public autorService: AutorService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['autorId'];

    this.autorService.get(this.id).subscribe((data: Autor)=>{
      this.autor = data;
      console.log('GetAutor:' + JSON.stringify(this.autor));
    });
  }

}
