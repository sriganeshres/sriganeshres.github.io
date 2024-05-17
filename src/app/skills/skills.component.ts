import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatGridListModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  Images = [
    {
      src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
      alt: 'c',
    },
    {
      src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
      alt: 'cplusplus',
    },
    {
      src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
      alt: 'csharp',
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png',
      alt: 'Python',
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png',
      alt: 'Javascript',
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png',
      alt: 'Typescript',
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/go/go.png',
      alt: 'Go',

      style: 'vertical-align:top; margin:4px; background-color:white',
    },
    {
      src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
      alt: 'Java',
    },
    {
      src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg',
      alt: 'Kotlin',
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/rust/rust.png',
      alt: 'Rust',
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/lua/lua.png',
      alt: 'Lua',
    },
    {
      src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
      alt: 'React',
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png',
      alt: 'Angular',
    },
    {
      src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
      alt: 'NextJs',
    },
    {
      src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
      alt: 'NodeJs',
    },
    {
      src: '../../assets/express.png',
      alt: 'ExpressJs',
    },
    {
      src: '../../assets/asp.png',
      alt: 'ASPDotnet',
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/django/django.png',
      alt: 'django',
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png',
      alt: 'HTML',
      height: '44',
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png',
      alt: 'CSS',
      height: '44',
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png',
      alt: 'firebase',
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png',
      alt: 'git',
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png',
      alt: 'VS Code',
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vim/vim.png',
      alt: 'VIM',
    },
    {
      src: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png',
      alt: 'Docker',
    },
  ];
}
