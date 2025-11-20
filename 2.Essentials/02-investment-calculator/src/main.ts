import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));

// // Using NgModule bootstrap on previous Angular versions
// platformBrowserDynamic()
//   .bootstrapModule(AppModule);

// Using NgModule bootstrap on Angular 20
platformBrowser()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
