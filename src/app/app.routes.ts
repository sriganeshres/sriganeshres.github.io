import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Sri Ganesh\'s Home Page'
    },
    {
        path: 'education',
        component: EducationComponent,
        title: 'Sri Ganesh\'s Education'
    },
    {
        path: 'skills',
        component: SkillsComponent,
        title: 'Sri Ganesh\'s Skills'
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        title: 'Sri Ganesh\'s Projects'
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: 'Sri Ganesh\'s Contact'
    }
];
