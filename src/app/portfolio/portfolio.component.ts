import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'URL Shortener',
      summary: "Scalable Distributed URL Management System",
      description: "A production-grade URL shortening service built with Go, engineered for high performance and real-world deployment. The system integrates PostgreSQL, Redis, and Kafka to support fast redirects, caching, and real-time event streaming.",
      projectLink: 'https://github.com/sriganeshres/url-shortener',
      pictures: [],
      tags: [Tag.GOLANG, Tag.POSTGRESQL, Tag.REDIS, Tag.KAFKA, Tag.DOCKER, Tag.DOCKERCOMPOSE]
    },
    {
      id: 2,
      name: 'Lfortran',
      summary: "A Fortran compiler built using modern compiler technologies like LLVM and MLIR.",
      description: "LFortran is an open-source Fortran compiler that leverages modern compiler technologies such as LLVM and MLIR to provide a robust and efficient compilation process for Fortran code. The project aims to bring the power of contemporary compiler infrastructure to the Fortran programming language, enabling developers to write high-performance applications while benefiting from advanced optimization techniques and code generation capabilities. LFortran supports a wide range of Fortran features and standards, making it suitable for both legacy codebases and new projects. The compiler is designed to be extensible and modular, allowing for easy integration of additional features and optimizations in the future. With its focus on performance, reliability, and modern development practices, LFortran represents a significant advancement in the Fortran ecosystem.",
      projectLink: 'https://github.com/sriganeshres/lfortran',
      pictures: [],
      tags: [Tag.CPP, Tag.DOCKER, Tag.DOCKERCOMPOSE, Tag.PYTHON]
    },
    {
      id: 3,
      name: 'Aaftab / Kaathayan',
      summary: 'This is a complete fullstack website for Kaathayan, a website for IIT Jodhpur Fest Kaathayan 2025.',
      description: 'This is a complete fullstack website for Kaathayan, a website for IIT Jodhpur Fest Kaathayan 2025. The backend is built using Spring Boot and the frontend is built using React with Material UI. The website is deployed on Google Cloud Platform. The website has features like user authentication, event management, and payment gateway integration.',
      projectLink: 'https://https://github.com/devlup-labs/Aaftaab-24',
      pictures: [],
      tags: [Tag.TYPESCRIPT, Tag.SPRINGBOOT, Tag.OAuth, Tag.SQLITE, Tag.REACT, Tag.MATERIALUI, Tag.HTML5, Tag.CSS3, Tag.TAILWINDCSS]
    },
    {
      id: 4,
      name: 'WorkHub Pro',
      summary: 'The WorkHub project is a App designed to facilitate project management and team collaboration.',
      description: "WorkHub Pro is a comprehensive project management application designed to streamline team collaboration and enhance productivity. Developed using Kotlin and Golang, this application offers a robust backend infrastructure that ensures efficient handling of tasks, projects, and user interactions. The integration of PostgreSQL as the database system provides a reliable and scalable solution for data storage and retrieval. Additionally, the application is containerized using Docker, facilitating easy deployment and management across various environments. WorkHub Pro aims to provide teams with a seamless experience in managing their projects, tracking progress, and fostering effective communication among team members.",
      projectLink: 'https://github.com/sriganeshres/workhub-pro',
      pictures: [],
      tags: [Tag.KOTLIN, Tag.GOLANG, Tag.POSTGRESQL, Tag.DOCKER]
    },
    {
      id: 5,
      name: 'SGVCS',
      summary: 'SGVCS is a basic version control system that allows users to track changes to their files.',
      description: 'SGVCS (Simple Git Version Control System) is a basic version control system that allows users to track changes to their files. It is implemented in Rust and provides a command-line interface for users to interact with the system. SGVCS supports basic version control operations such as initializing a repository, adding files, committing changes, viewing the commit history, and checking out previous versions of files. The system uses a simple file-based storage mechanism to store the version history and metadata. SGVCS is designed to be lightweight and easy to use, making it suitable for small projects and individual developers who need basic version control functionality without the complexity of more advanced systems like Git.',
      projectLink: 'https://github.com/sriganeshres/SGVCS',
      pictures: [],
      tags: [Tag.RUST]
    },
    {
      id: 6,
      name: 'Angular Portfolio App',
      summary: 'A responsive and dynamic portfolio website designed and developed by Barbara Calderon.',
      description: 'This portfolio is a dynamic and responsive web application built using Angular, showcasing my skills and projects as a software developer. The design and development of this portfolio aimed to provide a seamless user experience across different devices while highlighting various aspects of my professional journey. The potfolio has sections of home, about, education, portfolio projects and contact information. Key features are its dynamic content, the responsive design and modern aesthetics.',
      projectLink: 'https://github.com/sriganeshres/sriganeshres.github.io',
      pictures: [],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML5, Tag.CSS3, Tag.BOOTSTRAP]
    },
    {
      id: 7,
      name: 'Hacktoberfest LeaderBoard',
      summary: "This is a webiste to track Hacktoberfest contributions of users.",
      description: "This project is a web application that tracks and displays the Hacktoberfest contributions of users. Built using Nodejs and Firebase for the backend as service, the application fetches data from the GitHub API to monitor pull requests made by participants during the Hacktoberfest event. The frontend is developed using React to provide a user-friendly interface for viewing contribution statistics. The application also utilizes Firebase as the database to store user information and contribution records. Updates are made using a cron job on a internal server.",
      projectLink: 'https://github.com/devlup-labs/Hacktoberfest-Leaderboard',
      pictures: [],
      tags: [Tag.HTML5, Tag.CSS3, Tag.JAVASCRIPT, Tag.REACT, Tag.FIREBASE]
    },

  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('TSG | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
