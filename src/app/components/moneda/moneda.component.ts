import { Component, OnInit } from '@angular/core';
import { MonedaService } from '../../services/moneda.service';
import { Moneda } from '../../models/moneda.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moneda',
  standalone: true,
  imports: [FormsModule, CommonModule, ],
  templateUrl: './moneda.component.html',
  styleUrl: './moneda.component.css'
})

export class MonedaComponent implements OnInit {
  
  monedas: Moneda[] = [];
  newMoneda: Moneda = {id:'', codigo: 0, identificador: '', nombre: '', descripcion: '', activoDesde: new Date(), activoHasta: new Date(), estado: true };
  editingMoneda: Moneda | null = null;

  constructor(private monedaService: MonedaService, private router : Router) {}

  ngOnInit(): void {
    this.loadMonedas();
  }

  loadMonedas(): void {
    this.monedaService.getMonedas().subscribe((data) => {
      this.monedas = data;
    });
    console.log(this.monedas.values)
  }

  selectMoneda(moneda: Moneda): void {
    this.router.navigate(['/crearEditar', { moneda: JSON.stringify(moneda) }])
  }
  
  updateMoneda(): void {
    if (this.editingMoneda) {
      this.monedaService.updateMoneda(this.newMoneda).subscribe(() => {
        this.loadMonedas(); // Recargar la lista después de la actualización
        //this.resetForm(); // Limpiar el formulario
        this.editingMoneda = null; // Restablecer la moneda en edición
      });
    }
  }

  deleteMoneda(codigo: string): void {
    this.monedaService.deleteMoneda(codigo).subscribe(() => {
      this.loadMonedas(); // Recargar la lista después de la eliminación
    });
  }

}
