import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
    },
    {
        path: 'upload',
        loadChildren: () => import('./upload/upload.module').then( m => m.UploadModule )
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
