export class Autor {
  public id: number;
  public nombre: string;
  public apellido: string;
  public fechaNacimiento: Date;
  public ciudadProcedencia: string;
  public correoElectronico: string;
  private _nombreCompleto: string;

  public get nombreCompleto() : string {
    return '${this.nombre} {this.apellido}'  ;
  }
  private set value(v : string) {
    this._nombreCompleto = v;
  }

  /**
   *
   */
  constructor() {

  }
}

