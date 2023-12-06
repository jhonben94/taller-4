import { CursosService } from './../../../../service/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-estudiante-edit',
    templateUrl: './estudiante-edit.component.html',
    styleUrls: ['./estudiante-edit.component.scss'],
})
export class EstudianteEditComponent implements OnInit {
    listaCursos: any[] = [];
    listaSecciones: any[] = [];
    cursoSeleccionado: any;
    seccionSeleccionada: any = null;
    estudianteData:any ={ }
    generoList = [
        { name: 'Masculino', code: 'M' },
        { name: 'Femenino', code: 'F' },
    ];

    constructor(public service: CursosService) {}

    ngOnInit(): void {
        this.service.obtenerPorDocente(1, 2).subscribe({
            next: (data: any[]) => {
                this.listaCursos = data;
            },
        });
    }
    obtenerSecciones() {
        console.log('Seccionado');
        console.log(this.cursoSeleccionado);
        this.listaSecciones = this.cursoSeleccionado.seccionList;
    }
    onChange(event) {
       
        const listaSecciones = event.value.seccionList;
        this.listaSecciones = listaSecciones;
    }
    guardar(){
     
       const {
        nombre,
        apellido,
        edad,
        sexo
      } = this.estudianteData;

      const {code} = sexo;
      const {idCurso} =this.cursoSeleccionado;
      const {idSeccion} =this.seccionSeleccionada;
      
      const data={
        nombre,
        apellido,
        edad,
        sexo:code,
        idCurso,
        idSeccion
      }
      console.log(data)

    }
}
