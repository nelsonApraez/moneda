import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonedaService } from '../../services/moneda.service';
import { Moneda } from '../../models/moneda.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-editar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-editar.component.html',
  styleUrl: './crear-editar.component.css'
})
export class CrearEditarComponent {

  constructor(private monedaService: MonedaService, private route: ActivatedRoute, private router : Router) {}
  newMoneda: Moneda = {id:'', codigo: 0, identificador: '', nombre: '', descripcion: '', activoDesde: new Date(), activoHasta: new Date(), estado: true };
  monedas: Moneda[] = [];
  editingMoneda: Moneda | null = null;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['moneda']) {
        const monedaParam = params['moneda'];
        console.log(monedaParam);
        this.newMoneda = {
          ...monedaParam,
          activoDesde: this.formatDate(monedaParam.activoDesde),
          activoHasta: this.formatDate(monedaParam.activoHasta)
        };
        this.editingMoneda = JSON.parse(monedaParam);
        console.log(this.newMoneda);
      } 
    });
  } 

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Formato de fecha ISO (YYYY-MM-DD)
  }

  addMoneda(): void {
    this.monedaService.addMoneda(this.newMoneda).subscribe((data) => {
      this.monedas.push(data);
      this.resetForm();
      this.router.navigate(['/moneda'])
    });
  }

  resetForm(): void {
    this.newMoneda = {id: '', codigo: 0, identificador: '', nombre: '', descripcion: '', activoDesde: new Date(), activoHasta: new Date(), estado: true };
  }

  updateMoneda(): void {
    if (this.editingMoneda) {
      this.monedaService.updateMoneda(this.newMoneda).subscribe(() => {
        this.resetForm(); // Limpiar el formulario
        this.editingMoneda = null; // Restablecer la moneda en edición
        this.router.navigate(['/moneda'])
      });
    }
  }

}
