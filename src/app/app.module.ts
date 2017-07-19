import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { CommunicateService } from './communicate.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    EditComponent,
    NewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpModule,
	AppRoutingModule
  ],
  providers: [CommunicateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
