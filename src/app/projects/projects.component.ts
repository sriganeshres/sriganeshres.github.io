import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule, MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Varchas Website',
      date: 'Sep. 2023 - Oct. 2023',
      description:
        'Contributed to the creation of the frontend of the website for the sports fest of IIT Jodhpur, "Varchas"',
      liveUrl: 'Live Url',
      tools: ['ReactJS', 'Firebase', 'Tailwind/CSS'],
    },
    {
      title: 'Hacktoberfest Leaderboard',
      date: 'Sep. 2023 - Oct. 2023',
      description:
        'Developed a website for Devlup Labs to track the contributions made to the Hacktoberfest.',
      liveUrl: 'Live Url',
      tools: ['ReactJS', 'Firebase', 'Tailwind/CSS'],
    },
    {
      title: 'G - Engine',
      date: 'Aug. 2023',
      description:
        'A Frontend to replicate a Google search and uses API from Rapid APIs fetches links and deployed on Netlify.',
      liveUrl: 'Live Url',
      githubUrl: 'Github',
      tools: ['ReactJS(Vite) with Typescript', 'Tailwind/CSS'],
    },
    {
      title: 'TO DO',
      date: 'Aug. 2023',
      description:
        'A todo app created using NextJS and PostgreSQL deployed on Vercel',
      liveUrl: 'Live Url',
      githubUrl: 'Github',
      tools: ['NextJS', 'PostgreSQL'],
    },
    {
      title: 'OTP System',
      date: 'Dec. 2023',
      description:
        'A One Time Password system using Golang and APIs from Twilio',
      githubUrl: 'Github',
      tools: ['Golang'],
    },
    {
      title: 'Workhub-Pro',
      date: 'Jan. 2024 - Ex. Dec. 2024',
      description:
        'A Android app created using Kotlin Jetpack Compose and Go for backend and PostgreSQL',
      githubUrl: 'Github',
      tools: ['Kotlin Jetpack Compose', 'Go'],
    },
  ];
}
