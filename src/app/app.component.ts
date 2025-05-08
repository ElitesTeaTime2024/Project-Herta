import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxParticlesModule } from '@tsparticles/angular'; // <--- ใช้ NgxParticlesModule
import type { Engine, ISourceOptions, Container } from "@tsparticles/engine"; // <--- Import types จาก engine
import { loadFull } from "tsparticles"; // <--- Import loadFull จาก engine (หรือ Preset ที่ต้องการ)
// ตัวอย่าง Import Preset:
// import { loadLinksPreset } from "@tsparticles/preset-links";

// Import Components ที่ AppComponent จะใช้งาน
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component'; // ตรวจสอบว่าได้ใช้ใน HTML จริงไหม
import { PortfolioComponent } from './components/portfolio/portfolio.component'; // หรือ PastWorkComponent
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { QualificationsComponent } from './components/qualifications/qualifications.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true, // <-- สมมติว่า AppComponent เป็น Standalone
  imports: [
    CommonModule,
    NgxParticlesModule, // <--- ใช้ NgxParticlesModule
    NavbarComponent,
    HeroComponent,
    PortfolioComponent, // หรือ PastWorkComponent
    TechStackComponent,
    QualificationsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-portfolio'; // หรือชื่อโปรเจกต์ของคุณ
  particlesId = "tsparticles";

  particlesOptions: ISourceOptions = {
    // >> ส่วน init สำหรับโหลด Preset/Plugins <<
    init: async (engine: Engine) => {
      console.log("Initializing tsParticles via options.init (v3)");
      // เลือกโหลดอย่างใดอย่างหนึ่ง:
      await loadFull(engine); // สำหรับ Full bundle (Shapes, Modes เยอะ)
      // หรือ โหลด Preset เฉพาะ:
      // await loadLinksPreset(engine);
    },
    // >> Background <<
    background: {
      // color: { value: "#1a1829" }, // ไม่ต้องใส่ถ้าต้องการโปร่งใส
      opacity: 0 // ทำให้ Canvas โปร่งใส
    },
    // >> Performance <<
    fpsLimit: 60,
    // >> Interactivity <<
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab", // หรือ "repulse", "bubble" (ดู v3 modes)
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        // resize: true, // v3 มักจะ handle resize โดยอัตโนมัติ
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.5 } },
        push: { quantity: 4 },
        // repulse: { distance: 100, duration: 0.4 }, // ถ้าใช้ mode 'repulse'
      },
    },
    // >> Particles <<
    particles: {
      color: { value: "#8c6dff" }, // สีม่วง Accent
      links: {
        color: "#4a4766", // สีม่วง/น้ำเงินกลางๆ
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      // collisions: { enable: true }, // Optional: ถ้าต้องการให้ชนกัน
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "bounce" }, // ใช้ outModes ใน v3
      },
      number: {
        density: {
          enable: true,
          // value_area: 800, // <--- ตรวจสอบ Property นี้! อาจจะไม่มีใน v3 หรือชื่อเปลี่ยนไป
          // ถ้าไม่มี 'value_area' อาจจะต้องลบออก หรือปรับ Config density แบบอื่นตาม Document v3
        },
        value: 50, // จำนวน Particles พื้นฐาน
        // limit: 0, // Optional: ถ้าใช้ density อาจจะตั้ง limit เป็น 0 (no limit)
      },
      opacity: {
        value: 0.5,
        // animation: { enable: true, speed: 0.5, minimumValue: 0.1 } // Optional: ทำให้กระพริบ
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 }, // ใช้ value: { min: X, max: Y } ใน v3
        // animation: { enable: true, speed: 5, minimumValue: 0.5 } // Optional: ทำให้ขนาดเปลี่ยน
      },
    },
    detectRetina: true,
  };

  constructor() {}

  ngOnInit(): void {
    // โค้ดสำหรับตรวจสอบ หรือแก้ไข Options เพิ่มเติมถ้าจำเป็น
    // เช่น การจัดการกับ density.area ถ้ายัง Error
    if (this.particlesOptions.particles?.number?.density) {
      // ตรวจสอบว่า Property `area` หรือ `value_area` มีอยู่ใน Type หรือไม่
      // ถ้าไม่มี ให้ลบออก หรือใช้ Config อื่นแทน
      // delete (this.particlesOptions.particles.number.density as any).area;
      // delete (this.particlesOptions.particles.number.density as any).value_area;
    }
  }

  // Method นี้จะถูกเรียกเมื่อ Particles ถูกโหลดเสร็จ
  particlesLoaded(): void {
    console.log("tsParticles container loaded.");
    // คุณสามารถเข้าถึง 'container' instance ได้ที่นี่
  }
}