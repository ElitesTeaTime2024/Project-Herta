import { Component, HostListener, OnInit, ElementRef, Renderer2 } from '@angular/core'; // เพิ่ม ElementRef, Renderer2
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  activeSection: string = 'hero';
  isMobileMenuOpen = false; // <--- เพิ่ม Property นี้

  // Section Offsets ไม่ได้ใช้ในส่วน Responsive โดยตรง แต่เก็บไว้สำหรับการ Scrollspy
  private sectionOffsets: { [key: string]: number } = {};

  constructor(private el: ElementRef, private renderer: Renderer2) { } // Inject ElementRef และ Renderer2

  ngOnInit(): void {
    this.calculateSectionOffsets();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollY > 50;

    let currentActiveSection = ''; // เริ่มต้นด้วยค่าว่าง
    const sections = ['hero', 'services', 'portfolio', 'past-work', 'tech-stack', 'qualifications', 'contact'];
    const navbarHeight = this.el.nativeElement.querySelector('.navbar')?.offsetHeight || 70;

    // พิจารณา Threshold เป็น "จุดกึ่งกลาง" หรือ "ส่วนบนของ Viewport"
    // ให้ Active เมื่อ "ส่วนบน" ของ Section ผ่านจุดกึ่งกลางของ Viewport ที่อยู่ใต้ Navbar
    const viewportTriggerPoint = navbarHeight + (window.innerHeight - navbarHeight) / 3; // เช่น 1/3 ของ Viewport ใต้ Navbar

    for (let i = 0; i < sections.length; i++) {
      const sectionId = sections[i];
      const sectionElement = document.getElementById(sectionId);

      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionBottom = sectionTop + sectionElement.offsetHeight;

        // เงื่อนไข: ถ้าส่วนบนของ viewport (ที่พิจารณา Navbar แล้ว) อยู่ระหว่าง Top และ Bottom ของ Section
        // หรือถ้าส่วนบนของ Section ผ่านจุด Trigger Point และยังไม่เลย Section นั้นไป
        if (scrollY + viewportTriggerPoint >= sectionTop && scrollY + navbarHeight < sectionBottom) {
          currentActiveSection = sectionId;
          // ไม่ break ทันที เพื่อให้โอกาส Section ที่อยู่ล่างกว่าและเข้าเงื่อนไขเหมือนกัน (แต่ใกล้เคียงกว่า) ถูกเลือก
        }
      }
    }

    // ถ้ายังไม่เจอ และ scroll อยู่บนสุด ให้เป็น hero
    if (currentActiveSection === '' && scrollY < (document.getElementById(sections[1])?.offsetTop || 300) - navbarHeight) {
        currentActiveSection = 'hero';
    } else if (currentActiveSection === '') { // Fallback
        currentActiveSection = 'hero'; // หรือ sections[0]
    }


    // อีกวิธี: หา section ที่ "ใกล้" กับ top ของ viewport ที่สุดหลังจาก navbar
    // let minDistance = Infinity;
    // currentActiveSection = sections[0]; // Default to first section
    // for (const sectionId of sections) {
    //   const sectionElement = document.getElementById(sectionId);
    //   if (sectionElement) {
    //     const distance = Math.abs((sectionElement.offsetTop - navbarHeight) - scrollY);
    //     if (distance < minDistance && scrollY + window.innerHeight > sectionElement.offsetTop && sectionElement.offsetTop + sectionElement.offsetHeight > scrollY + navbarHeight) {
    //        // ตรวจสอบว่า section อยู่ใน viewport
    //       minDistance = distance;
    //       currentActiveSection = sectionId;
    //     }
    //   }
    // }


    this.activeSection = currentActiveSection;
    // console.log('Active Section:', this.activeSection, 'ScrollY:', scrollY, 'Viewport Trigger:', viewportTriggerPoint);
  }

  calculateSectionOffsets() {
    // ... (โค้ดเดิม) ...
  }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      // คำนวณ offset โดยหักความสูงของ navbar
      const navbarHeight = this.el.nativeElement.querySelector('.navbar')?.offsetHeight || 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  // <--- เพิ่ม Method นี้ --->
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // (Optional) Prevent body scroll when mobile menu is open
    if (this.isMobileMenuOpen) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

  // <--- เพิ่ม Method นี้ --->
  closeMobileMenu() {
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

  // (Optional) Close mobile menu if window is resized to a larger screen
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 768 && this.isMobileMenuOpen) { // 768px คือ Breakpoint ที่เราจะใช้
      this.closeMobileMenu();
    }
  }
}