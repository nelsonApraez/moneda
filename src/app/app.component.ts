import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonedaComponent } from './components/moneda/moneda.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CrearEditarComponent } from './components/crear-editar/crear-editar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MonedaComponent, NavbarComponent, CrearEditarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BaseLine';
}
