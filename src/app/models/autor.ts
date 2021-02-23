export class Autor {
  public id: number=0;
  public nombre: string='';
  public apellido: string='';
  public fechaNacimiento: Date;
  public ciudadProcedencia: string='';
  public correoElectronico: string='';
  private _nombreCompleto: string;

  public get nombreCompleto() : string {
    return  this.nombre + ' ' + this.apellido ;
  }
  public set nombreCompleto(v : string) {
    this._nombreCompleto = v;
  }

    constructor() { }

}

