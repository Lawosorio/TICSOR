import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { LessonsPage } from '../pages/lessons/lessons';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/** Componentes */
import { TICSOR } from './app.component';
/*import { NotDataComponent } from '../components/not-data/not-data';*/

@NgModule({
  declarations: [
    TICSOR,
    HomePage,
    ListPage,
    LoginPage,
    LessonsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(TICSOR),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TICSOR,
    HomePage,
    ListPage,
    LoginPage,
    LessonsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
