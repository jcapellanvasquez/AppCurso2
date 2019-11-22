import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-card-user',
    templateUrl: './card-user.component.html',
    styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {

    @Input()
    nombre: string = '';


    @Input()
    apellido: string = '';


    @Input()
    email: string = '';

    @Output()
    miEvento: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }

    public click() {
        this.miEvento.emit(`nombre: ${this.nombre} apellido: ${this.apellido} email: ${this.email}`);
    }


}
