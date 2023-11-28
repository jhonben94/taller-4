import { CursosService } from './../../../../service/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiante-edit',
  templateUrl: './estudiante-edit.component.html',
  styleUrls: ['./estudiante-edit.component.scss']
})
export class EstudianteEditComponent implements OnInit{

  listaCursos: any[] = []
  listaSecciones: any[] = []
  cursoSeleccionado : any ;
  selectedState: any = null;

  states: any[] = [
      {name: 'Arizona', code: 'Arizona'},
      {name: 'California', value: 'California'},
      {name: 'Florida', code: 'Florida'},
      {name: 'Ohio', code: 'Ohio'},
      {name: 'Washington', code: 'Washington'}
  ];

  dropdownItems = [
      { name: 'Option 1', code: 'Option 1' },
      { name: 'Option 2', code: 'Option 2' },
      { name: 'Option 3', code: 'Option 3' }
  ];
  generoList = [
      { name: 'Masculino', code: 'M' },
      { name: 'Femenino', code: 'F' },
  ];

  cities1: any[] = [];

  cities2: any[] = [];

  city1: any = null;

  city2: any = null;

  constructor(public service: CursosService) { }

  ngOnInit(): void {
     this.service.obtenerPorDocente(1,2).subscribe({
      next:(data: any[])=>{

        /* 
        [
          {
              "idCurso": 2,
              "codigo": "T1",
              "anio": 2023,
              "descripcion": "TALLER 1",
              "seccionList": [
                  {
                      "idSeccion": 4,
                      "codigo": "A",
                      "descripcion": "PRIMERA SECCION"
                  }
              ]
          }
      ]
              
        */
        console.log(data)
        this.listaCursos = data;
      }
     }) 
  }
  obtenerSecciones(){
    console.log(this.cursoSeleccionado);
    
    this.listaSecciones = this.cursoSeleccionado.seccionList
  }
}
