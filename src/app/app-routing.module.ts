import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentContainerComponent } from "./layout/content-container/content-container.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/user/login',
        pathMatch: 'full'
    },
    {
        path: '',
        component: ContentContainerComponent,
        loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
    },
    {
        path: '**',
        redirectTo: '/user/login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
