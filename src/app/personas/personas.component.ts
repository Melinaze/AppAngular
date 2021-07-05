import { Component } from "@angular/core";

@Component({
    selector : 'app-personas',
    templateUrl:  './personas.component.html',
    styleUrls: ['./personas.component.css'] 
})
export class PersonasComponent{
    deshabilitar = false;
    mensaje = '';
    titulo = "Licenciado";
    mostrar = false;
    
    agregarPersona() {
        this.mostrar = true;
        this.mensaje = 'Persona agregada';
    }

    modificarTitulo(event: Event){
        this.titulo = (<HTMLInputElement>event.target).value;
    }

}