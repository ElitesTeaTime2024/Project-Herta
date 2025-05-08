import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- IMPORT CommonModule สำหรับ *ngFor, *ngIf

// Interfaces (เหมือนเดิม)
interface TechStackItem {
  name: string;
  iconClass?: string;
  officialUrl?: string;
  // imageUrl?: string;
  // level?: 'Proficient' | 'Experienced' | 'Familiar';
}

interface TechCategory {
  name: string;
  stacks: TechStackItem[];
}

@Component({
  selector: 'app-tech-stack', // <--- Selector ใหม่
  standalone: true,          // <--- ตั้งเป็น Standalone
  imports: [CommonModule],   // <--- Import CommonModule เพราะเราใช้ *ngFor
  templateUrl: './tech-stack.component.html', // <--- Path ใหม่
  styleUrls: ['./tech-stack.component.css']   // <--- Path ใหม่ (หรือ styleUrl ถ้ามีไฟล์เดียว)
})

export class TechStackComponent implements OnInit {

  techCategories: TechCategory[] = [
    {
      name: 'Programming Languages',
      stacks: [
        { name: 'C#', iconClass: 'fas fa-code-branch', officialUrl: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
        { name: '.NET Core / .NET Framework', iconClass: 'fas fa-code-branch', officialUrl: 'https://dotnet.microsoft.com/' },
        { name: 'Kotlin', iconClass: 'fab fa-android', officialUrl: 'https://kotlinlang.org/' },
        { name: 'Java', iconClass: 'fab fa-java', officialUrl: 'https://www.oracle.com/java/' },
        { name: 'TypeScript', iconClass: 'fas fa-code-branch', officialUrl: 'https://www.typescriptlang.org/' }
      ]
    },
    {
      name: 'Frontend Frameworks',
      stacks: [
        { name: 'Angular', iconClass: 'fab fa-angular', officialUrl: 'https://angular.io/' },
        { name: 'Blazor', iconClass: 'fas fa-desktop', officialUrl: 'https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor' },
        { name: 'Razor', iconClass: 'fas fa-file-code', officialUrl: 'https://docs.microsoft.com/en-us/aspnet/core/mvc/views/razor' }
      ]
    },
    {
      name: 'Backend Frameworks',
      stacks: [
        { name: 'ASP.NET Core', iconClass: 'fas fa-server', officialUrl: 'https://dotnet.microsoft.com/apps/aspnet' },
        { name: 'ElysiaJS', iconClass: 'fab fa-node-js', officialUrl: 'https://elysiajs.com/' },
        { name: 'NestJS', iconClass: 'fab fa-node-js', officialUrl: 'https://nestjs.com/' }
      ]
    },
    {
      name: 'Databases',
      stacks: [
        { name: 'SQL Server', iconClass: 'fas fa-database', officialUrl: 'https://www.microsoft.com/en-us/sql-server' },
        { name: 'Oracle', iconClass: 'fas fa-database', officialUrl: 'https://www.oracle.com/database/' },
        { name: 'SQLite', iconClass: 'fas fa-database', officialUrl: 'https://www.sqlite.org/index.html' }
      ]
    },
    {
      name: 'Tools & DevOps',
      stacks: [
        { name: 'Git', iconClass: 'fab fa-git-alt', officialUrl: 'https://git-scm.com/' },
        { name: 'Docker', iconClass: 'fab fa-docker', officialUrl: 'https://www.docker.com/' },
        { name: 'Azure DevOps', iconClass: 'fab fa-microsoft', officialUrl: 'https://azure.microsoft.com/en-us/services/devops/' },
        { name: 'SonarCloud', iconClass: 'fas fa-cloud-upload-alt', officialUrl: 'https://sonarcloud.io/' },
        { name: 'Exceptionless', iconClass: 'fas fa-bug', officialUrl: 'https://exceptionless.com/' },
        { name: 'Postman', iconClass: 'fas fa-rocket', officialUrl: 'https://www.postman.com/' },
      ]
    },
    // ... (Software Architecture และ Project Management ก็เพิ่ม URL ได้ถ้ามี)
    {
      name: 'Software Architecture',
      stacks: [
        { name: 'Micro-Frontend', iconClass: 'fas fa-sitemap' /* อาจจะไม่มี official URL เดียว */ },
        { name: 'REST API Design', iconClass: 'fas fa-project-diagram' /* อาจจะลิงก์ไปบทความดีๆ */ }
      ]
    },
    {
      name: 'Project Management',
      stacks: [
        { name: 'Trello', iconClass: 'fab fa-trello', officialUrl: 'https://trello.com/' },
        { name: 'Jira', iconClass: 'fab fa-jira', officialUrl: 'https://www.atlassian.com/software/jira' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}