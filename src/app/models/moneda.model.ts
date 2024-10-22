export interface Moneda {
    id: string;
    codigo: number;
    identificador: string;
    nombre: string;
    descripcion: string;
    activoDesde: Date;
    activoHasta: Date;
    estado: boolean;
  }