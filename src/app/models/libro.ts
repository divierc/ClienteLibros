import { Editorial } from './editorial';
import { Autor } from './autor';
export class Libro {
  public id: number;
  public titulo: string;
  public agno: number;
  public genero: string
  public numeroPaginas: number;
  public editorialId: number;
  public editorial: Editorial;
  public autorId: number;
  public autor: Autor;
  public generos: any =['Terror','Comedia','Romance','Crónica','Suspenso'];

  /**
   *
   */
  constructor() {

  }


}
