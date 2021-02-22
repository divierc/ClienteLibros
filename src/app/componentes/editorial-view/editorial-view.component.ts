import { ActivatedRoute, Router } from '@angular/router';
import { EditorialService } from './../../services/editorial.service';
import { Editorial } from './../../models/editorial';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editorial-view',
  templateUrl: './editorial-view.component.html',
  styleUrls: ['./editorial-view.component.css']
})
export class EditorialViewComponent implements OnInit {

  id: number;
  editorial: Editorial;

  constructor(
    public editorialService: EditorialService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['editorialId'];

    this.editorialService.get(this.id).subscribe((data: Editorial)=>{
      this.editorial = data;
      console.log('GetEditorial:' + JSON.stringify(this.editorial));
    });
  }

}
