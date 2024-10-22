import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'issue/:number',
        loadComponent: () => import('./modules/issues/pages/issue-page/issue-page.component')
    },
    {
        path: 'issues',
        loadComponent: () => import('./modules/issues/pages/issues-list-page/issues-list-page.component')
    }
];
