import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { TasksModule } from './tasks/tasks.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, TasksModule, SharedModule],
})
export class AppModule {}
