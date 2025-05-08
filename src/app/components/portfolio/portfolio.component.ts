import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ถ้าใช้ *ngFor, *ngIf

// (Optional) Interface สำหรับ Past Work Item
interface PastWorkItem {
  id: string;
  title: string;
  clientOrCompany?: string; // ชื่อลูกค้า หรือ บริษัทที่ทำโปรเจกต์นี้ให้/ด้วย
  technologies: string[];  // Array ของเทคโนโลยีที่ใช้
  description: string;
  thumbnailUrl?: string;    // Path ไปยังรูป Thumbnail (ถ้ามี หรือใช้รูป Generic)
  projectUrl?: string;   // URL ของโปรเจกต์ (ถ้า Public หรือมี Demo)
  // role?: string;        // บทบาทของคุณในโปรเจกต์
}

@Component({
  selector: 'app-portfolio', // หรือ 'app-past-work'
  standalone: true,          // ถ้า Component นี้เป็น Standalone
  imports: [CommonModule],   // ถ้าใช้ *ngFor
  templateUrl: './portfolio.component.html', // หรือ './past-work.component.html'
  styleUrls: ['./portfolio.component.css']   // หรือ './past-work.component.css'
})
export class PortfolioComponent implements OnInit { // หรือ PastWorkComponent

  pastWorks: PastWorkItem[] = [
    {
      id: 'venio-crm-app',
      title: 'Venio CRM Application',
      clientOrCompany: 'Gofive Company Limited', // <--- ปรับชื่อบริษัท
      technologies: ['Angular.JS', '.NET Core', 'SQL Server'],
      description: 'Contributed to the development of the Venio CRM web application, enabling sales and customer service teams to efficiently manage customer data, track leads, and cultivate client relationships.',
      thumbnailUrl: 'assets/past-work/venio-crm.png'
    },
    {
      id: 'autobac-backoffice',
      title: 'Autobacs Backoffice System',
      clientOrCompany: 'Autobacs Car Service Center', // <--- ปรับชื่อ
      technologies: ['.NET Core', 'Razor Pages', 'SQL Server'], // <--- เทคโนโลยีจากข้อมูลเดิมของคุณสำหรับ Autobacs
      description: 'Developed a back-office system to support the operations of Autobacs car service centers, covering inventory management, service appointment scheduling, and invoice/receipt generation.',
      thumbnailUrl: 'assets/past-work/autobac-logo.png'
    },
    {
      id: 'ptg-backoffice',
      title: 'PTG Backoffice System',
      clientOrCompany: 'PTG Energy Public Company Limited', // <--- ปรับชื่อบริษัท
      technologies: ['.NET (Framework/Core)', 'Web Forms/MVC', 'Database Management'], // <--- เทคโนโลยีจากข้อมูลเดิมของคุณสำหรับ PTG
      description: 'Designed and developed a back-office system for managing various data аспекты of PT gas stations, facilitating systematic and accurate management of fuel stock, sales figures, and member information.',
      thumbnailUrl: 'assets/past-work/ptg-logo.png'
    },
    {
      id: 'ptg-android-pos',
      title: 'PTG Oil Mobile POS App',
      clientOrCompany: 'PTG Energy Public Company Limited', // <--- ปรับชื่อบริษัท
      technologies: ['Android Kotlin', 'MQTT', 'SQL Life'], // <--- เทคโนโลยีจากข้อมูลเดิมของคุณสำหรับ PTG
      description: 'Maintained and enhanced the mobile Point of Sale (POS) system for PTG oil afiliales, ensuring operational stability and implementing improvements for an optimized user experience on Android devices.',
      thumbnailUrl: 'assets/past-work/ptg-logo.png'
    },
    {
      id: 'srt-ticket-scan-app',
      title: 'SRT Ticket Scan App',
      clientOrCompany: 'State Railway of Thailand (SRT)', // <--- ปรับชื่อ
      technologies: ['Android', 'Kotlin', 'QR Code Scanning', 'API Integration'],
      description: 'Developed an Android mobile application using Kotlin for SRT staff to scan and verify the validity of QR code train tickets, increasing speed and reducing errors in ticket inspections.',
      thumbnailUrl: 'assets/past-work/srt-logo.png'
    },
    {
      id: 'sixth-limousine-backoffice',
      title: 'Sixth Limousine Backoffice',
      clientOrCompany: 'Sixth Limousine Thailand',
      technologies: ['.NET Core', 'Razor Pages', 'SQL Server'], // <--- เทคโนโลยีจากข้อมูลเดิมของคุณสำหรับ Sixth Limousine
      description: 'Created a back-office system for managing limousine bookings, driver scheduling, and service status tracking, streamlining the operational workflow for Sixth Limousine Thailand.',
      thumbnailUrl: 'assets/past-work/sixth-logo.png'
    },
    {
      id: 'ptt-batch-email',
      title: 'Batch Email From Tableau (PTT)', // <--- เพิ่ม PTT ใน Title เพื่อความชัดเจน
      clientOrCompany: 'In collaboration with PTT Public Company Limited', // <--- ปรับการอ้างอิง
      technologies: ['.NET Core', 'Tableau Integration', 'Email Services'], // <--- เทคโนโลยีจากข้อมูลเดิมของคุณสำหรับ PTT Batch Email
      description: 'Developed a batch email system to automatically send reports генерируемые from Tableau data to relevant stakeholders, reducing manual work étapes and enhancing the efficiency of critical data communication.',
      thumbnailUrl: 'assets/past-work/ptt.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
