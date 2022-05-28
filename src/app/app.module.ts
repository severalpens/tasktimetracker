import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ListComponent } from './list/list.component';
import { FilterListComponent } from './filter-list/filter-list.component';
import { FormComponent } from './form/form.component';
import { SelectParentComponent } from './select-parent/select-parent.component';
import { SelectParentStrictComponent } from './select-parent-strict/select-parent-strict.component';
import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';
import { TasksComponent } from './tasks/tasks.component';
import { RecordsComponent } from './records/records.component';
import { PageComponent } from './page/page.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ListComponent,
    FilterListComponent,
    FormComponent,
    SelectParentComponent,
    SelectParentStrictComponent,
    TableComponent,
    FooterComponent,
    TasksComponent,
    RecordsComponent,
    PageComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
