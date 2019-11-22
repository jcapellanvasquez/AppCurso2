import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClienteComponent} from './cliente/cliente.component';
import {EjmploComponent} from './ejmplo/ejmplo.component';
import {RegistroComponent} from './cliente/registro/registro.component';


const routes: Routes = [
    {
        path:'cliente',
        component:ClienteComponent,
        children: [
            {
                path:'registro',
                component: RegistroComponent
            }
        ]
    },
    {
        path:'ejemplo',
        component:EjmploComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
