import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'candidates',
                loadChildren: ()=> import('./features/programmer/programmer.routes')
                    .then(m=> m.PROGRAMMER_ROUTES)
            },
            {
                path: '',
                redirectTo: 'candidates',
                pathMatch: 'full'
            },
            {
                path: '*',
                redirectTo: 'candidates',
            },

        ]
        
    }
];
