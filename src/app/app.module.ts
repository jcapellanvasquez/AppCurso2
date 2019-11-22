import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import { CardUserComponent } from './card-user/card-user.component';
import { CapitalizePipe } from './capitalize.pipe';
import { ClienteComponent } from './cliente/cliente.component';
import { EjmploComponent } from './ejmplo/ejmplo.component';
import { RegistroComponent } from './cliente/registro/registro.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        CardUserComponent,
        CapitalizePipe,
        ClienteComponent,
        EjmploComponent,
        RegistroComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
