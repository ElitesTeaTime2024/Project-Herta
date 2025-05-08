import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


// (Optional) สร้าง Interface สำหรับ Service Item เพื่อ Type Safety
interface ServiceItem {
  id: string; // สำหรับการอ้างอิง หรือ Key ใน *ngFor
  iconClass: string; // Font Awesome class
  title: string;
  description: string;
  thumbnailUrl: string; // Path ไปยังรูป Thumbnail
  // อาจจะมี link ไปยังหน้ารายละเอียดเพิ่มเติม (ถ้ามี)
  // detailsLink?: string;
}

@Component({
  selector: 'app-services',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})

export class ServicesComponent implements OnInit {

  services: ServiceItem[] = [
    {
      id: 'photography',
      iconClass: 'fas fa-camera-retro', // ไอคอนช่างภาพ
      title: 'ช่างถ่ายภาพ (Photographer)',
      description: 'รับถ่ายภาพบุคคล, สินค้า, งานอีเว้นท์ ด้วยอุปกรณ์คุณภาพสูงและมุมมองที่สร้างสรรค์ พร้อมบริการแต่งภาพให้สวยงามตรงตามความต้องการของคุณ',
      thumbnailUrl: 'assets/thumbnails/service-photography.jpg' // <--- เปลี่ยนเป็น Path รูปของคุณ
    },
    {
      id: 'web-development',
      iconClass: 'fas fa-laptop-code', // ไอคอนนักพัฒนาเว็บ
      title: 'นักพัฒนาเว็บไซต์ (Web Developer)',
      description: 'พัฒนาเว็บไซต์ครบวงจร ตั้งแต่ Frontend ด้วย Angular/React ไปจนถึง Backend ด้วย .NET Core/Node.js สร้างสรรค์เว็บไซต์ที่สวยงาม ทันสมัย และตอบโจทย์ธุรกิจของคุณ',
      thumbnailUrl: 'assets/thumbnails/service-web-dev.jpg' // <--- เปลี่ยนเป็น Path รูปของคุณ
    },
    {
      id: 'mobile-app-development',
      iconClass: 'fas fa-mobile-alt', // ไอคอนนักพัฒนาแอปมือถือ
      title: 'นักพัฒนาแอปมือถือ (Mobile App Developer)',
      description: 'สร้างแอปพลิเคชันมือถือสำหรับ iOS และ Android ด้วยเทคโนโลยี Native (Swift/Kotlin) หรือ Cross-platform (Flutter/React Native) พร้อมออกแบบ UX/UI ที่ใช้งานง่ายและน่าสนใจ',
      thumbnailUrl: 'assets/thumbnails/service-mobile-dev.jpg' // <--- เปลี่ยนเป็น Path รูปของคุณ
    }
    // คุณสามารถเพิ่ม Service อื่นๆ เข้าไปใน Array นี้ได้เลย
  ];

  constructor() { }

  ngOnInit(): void {
  }

}