import { Routes } from "@angular/router";

export const PROGRAMMER_ROUTES : Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                loadComponent: () => import('./components/programmer-list/programmer-list.component')
                    .then(m=> m.ProgrammerListComponent),
                title: 'Lista de Candidatos'
            },
            {
                path: 'new',
                loadComponent: () => import('./components/programmer-form/programmer-form.component')
                    .then(m=> m.ProgrammerFormComponent),
                title: 'Nuevo candidato'
            },
            {
                path: ':id/edit',
                loadComponent: () => import('./components/programmer-form/programmer-form.component')
                    .then(m=> m.ProgrammerFormComponent),
                    data: {mode: 'edit'},
                    title: 'Editar datos de candidato'
            },
            {
                path: ':/id/view',
                loadComponent: ()=> import('./components/programmer-form/programmer-form.component')
                    .then(m=>m.ProgrammerFormComponent),
                    data: {mode: 'view'},
                    title: 'Ver detalles de candidato'
            }
        ]
    }
]