import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { InputNameComponent } from './input-name/input-name.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { InputTelComponent } from './input-tel/input-tel.component';
import { InputEstadoComponent } from './input-estado/input-estado.component';
import { BtnComponent } from './btn/btn.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InputNameComponent,
    InputEmailComponent,
    InputTelComponent,
    InputEstadoComponent,
    BtnComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
