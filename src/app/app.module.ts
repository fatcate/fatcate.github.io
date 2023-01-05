import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { ProjectsRoutingModule } from './routes/projects-routing.module';

import { AboutComponent } from './screens/about/about.component';
import { ContactComponent } from './screens/contact/contact.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ProjectDetailComponent,
    ProjectListComponent,
  ],
  imports: [BrowserModule, ProjectsRoutingModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
