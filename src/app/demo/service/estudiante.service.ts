import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  recursoBase =environment.URL_BASE+"estudiante/";

  constructor(private http: HttpClient) { }

  obtener(){
    return this.http.get(this.recursoBase);
  }
  
  paginado(params:any){
    return this.http.post(this.recursoBase+"pages",params);
  }
  agregar(params:any){
    return this.http.post(this.recursoBase,params);
  }
  modificar(params:any,id:any){
    return this.http.put(this.recursoBase+id,params);
  }
  eliminar(id:any){
    return this.http.delete(this.recursoBase+id);
  }
}