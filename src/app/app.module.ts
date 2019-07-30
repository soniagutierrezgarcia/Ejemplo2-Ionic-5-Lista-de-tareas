import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddTaskModalPage } from './add-task-modal/add-task-modal.page';
import { FormsModule } from '@angular/forms';
import { TodoServiceService } from './services/todo-service.service';


@NgModule({
  declarations: [AppComponent, AddTaskModalPage],
  entryComponents: [AddTaskModalPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    TodoServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
