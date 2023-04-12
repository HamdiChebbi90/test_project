import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './default/default.component';
import { DashbordComponent } from './module/dashbord/dashbord.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { SidebarComponent } from './shared/component/sidebar/sidebar.component';
import { PostsComponent } from './module/posts/posts.component';
import { AreaComponent } from './shared/widgets/area/area.component';
import { CardComponent } from './shared/widgets/card/card.component';
import { TableComponent } from './shared/widgets/table/table.component';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatCardModule } from '@angular/material/card';
import { PieComponent } from './shared/widgets/pie/pie.component';
import { DashbordService } from './module/dashbord.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { AcceuilComponent } from './portfolio/acceuil/acceuil.component';
import { LoginComponent } from './portfolio/login/login.component';
import { RegisterComponent } from './portfolio/register/register.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { HomeComponent } from './portfolio/home/home.component';
import { BannerComponent } from './portfolio/banner/banner.component';
import { InfoComponent } from './portfolio/info/info.component';
import { EducationComponent } from './portfolio/education/education.component';
import { ExperienceComponent } from './portfolio/experience/experience.component';
import { SkillsComponent } from './portfolio/skills/skills.component';
import { ProjectsComponent } from './portfolio/projects/projects.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { ResponsiveDirective } from './directives/responsive.directive';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    DashbordComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PostsComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    TableComponent,
    AcceuilComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BannerComponent,
    InfoComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ResponsiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    BrowserAnimationsModule,
    HighchartsChartModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule

  ],
  providers: [DashbordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
