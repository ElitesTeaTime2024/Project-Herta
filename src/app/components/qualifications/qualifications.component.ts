import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ถ้าใช้ *ngFor

interface QualificationItem {
  id: string;
  title: string;
  issuer?: string; // ผู้ออกใบรับรอง/องค์กร
  level?: string;  // ระดับ (เช่น C1)
  dateAchieved?: string; // วันที่ได้รับ (Optional)
  description?: string;
  iconClass?: string; // ไอคอน
  badgeUrl?: string;  // URL ของ Digital Badge (ถ้ามี)
  verifyUrl?: string; // URL สำหรับ Verify (ถ้ามี)
}

@Component({
  selector: 'app-qualifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.css']
})
export class QualificationsComponent implements OnInit {

  qualifications: QualificationItem[] = [
    {
      id: 'efset-c1',
      title: 'EF SET Certificate™',
      issuer: 'EF Standard English Test (EF SET)',
      level: 'C1 Advanced',
      dateAchieved: '2024', // Optional
      description: 'Achieved a C1 Advanced level on the EF SET, demonstrating a high proficiency in English understanding a wide range of demanding, longer texts, and recognizing implicit meaning. Can express him fluently and spontaneously without much obvious searching for expressions.',
      iconClass: 'fas fa-language', // หรือ fas fa-language
      // badgeUrl: 'URL_TO_YOUR_EFSET_BADGE_IF_ANY', // ถ้ามี Digital Badge
      verifyUrl: 'https://cert.efset.org/DhE3Qo' // <--- ใส่ Link ตรวจสอบจริง ถ้ามี
    }
    // คุณสามารถเพิ่ม Qualifications หรือ Certifications อื่นๆ ที่นี่ได้
    // {
    //   id: 'another-cert',
    //   title: 'Some Other Certification',
    //   issuer: 'Certifying Body',
    //   level: 'Professional',
    //   description: 'Details about this certification.',
    //   iconClass: 'fas fa-award'
    // }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}