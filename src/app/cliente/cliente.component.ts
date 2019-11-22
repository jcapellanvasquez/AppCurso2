import {Component, OnInit} from '@angular/core';
import {DataSourceService} from '../data-source.service';
import {Observable} from 'rxjs/internal/Observable';

@Component({
    selector: 'app-cliente',
    templateUrl: './cliente.component.html',
    styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
    public data: any[];
    public data$: Observable<any[]>;

    constructor(
        public dataSourceService: DataSourceService
    ) {
    }

    ngOnInit() {
        // this.dataSourceService.getPosts()
        //     .subscribe((data) => {
        //         this.data = data;
        //     });

        this.data$=this.dataSourceService.getPosts()



    }



    observar() {
        const observable = new Observable(subscriber => {
            subscriber.next(1);
            subscriber.next(2);
            subscriber.next(3);

            setTimeout(() => {
                subscriber.next(4);
                subscriber.complete();
            }, 1000);
        });

        observable.subscribe((data) => {
            console.log(data);
        });


    }
}
