import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteEditComponent } from './estudiante-edit/estudiante-edit.component';

const routes: Routes = [
  { path: '', component: EstudianteEditComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesRoutingModule { }
