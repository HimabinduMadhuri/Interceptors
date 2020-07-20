import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }  from './app.component';



//For InMemory testing
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './test-data';

import { BookService } from './book/book.service';
import { BookComponent } from './book/book.component';
import { LoggingInterceptor } from './logging-interceptor';
import { httpInterceptorProviders } from '.';

@NgModule({
  imports: [     
      BrowserModule,
      HttpClientModule,
      InMemoryWebApiModule.forRoot(TestData)		
  ],
  declarations: [
      AppComponent,
      BookComponent
  ],
  providers: [
      BookService,
      httpInterceptorProviders
      
      
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { } 