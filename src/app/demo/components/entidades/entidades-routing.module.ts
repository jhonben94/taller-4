import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'estudiantes', data: { breadcrumb: 'Estudiantes' }, loadChildren: () => import('./estudiantes/estudiantes.module').then(m => m.EstudiantesModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EntidadesRoutingModule {}
