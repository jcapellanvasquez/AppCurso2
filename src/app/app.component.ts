import {Component, ViewChild} from '@angular/core';
import {CardUserComponent} from './card-user/card-user.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Blog de la nasa';
    nombre: string = "";
    apellido: string = "";
    email: string = "";
    isEmpty: boolean = true;

    @ViewChild('userCard', {static: true})
    form: CardUserComponent;


    items: Array<any> = []

    public getTituloPrefijo(): string {
        return `Hola ${this.title} app de ejemplo`;
    }

    public complete() {
        this.items = [
            {nombre: "Pedro", codigo: 1},
            {nombre: "Iswar", codigo: 2},
            {nombre: "Noni", codigo: 3},
        ]
        this.isEmpty = !this.isEmpty;
    }

    public add() {
        this.items.push({
            nombre: `item ${this.items.length}`,
            codigo: this.items.length + 1
        })
    }

    public evento(e:string) {
        console.log(this.form)
    }

}
