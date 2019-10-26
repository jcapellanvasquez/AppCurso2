import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-card-user',
    templateUrl: './card-user.component.html',
    styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {

    @Input()
    nombre:string = "";


    @Input()
    apellido:string = "";


    @Input()
    email:string = "";

    constructor() {
    }

    ngOnInit() {
    }

}
