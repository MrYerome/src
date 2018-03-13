import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BordureDirective } from './bordure.directive';
import { DisqueCategoryPipe } from './disque-category.pipe';
import { UppercaPipe } from './upperca.pipe';
import { DetailsDisqueComponent } from './details-disque/details-disque.component';
import { ListDisquesComponent } from './list-disques/list-disques.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    BordureDirective,
    DisqueCategoryPipe,
    UppercaPipe,
    DetailsDisqueComponent,
    ListDisquesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
