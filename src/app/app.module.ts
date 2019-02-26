import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { MainTableViewComponent } from './main-table-view/main-table-view.component';
import { HeaderComponent } from './header/header.component';
import { IssueComponent } from './issue/issue.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
//import { MatIconModule } from "@angular/material/icon";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
//import { DndModule } from 'ngx-drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewProjectComponent,
    CreateProjectComponent,
    EditProjectComponent,
    AddTeamComponent,
    EditTeamComponent,
    MainTableViewComponent,
    HeaderComponent,
    IssueComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    MatCardModule
    // DndModule,
    // MatListModule,
    // FlexLayoutModule,
    // MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
