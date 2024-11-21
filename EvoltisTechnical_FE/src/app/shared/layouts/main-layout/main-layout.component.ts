import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenubarModule} from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, MenubarModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

  items: MenuItem[] = [
    {
      label: 'Programadores',
      items: [
        {
          label: 'Nuevo Programador',
          icon: 'pi pi-plus',
          routerLink: '/programmers/new'
        },
        {
          label: 'Lista de Programadores',
          icon: 'pi pi-list',
          routerLink: '/programmers/list'
        }
      ]
    }
  ];
}
