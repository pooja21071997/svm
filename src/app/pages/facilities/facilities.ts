import { Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-facilities',
  imports: [],
  templateUrl: './facilities.html',
  styleUrl: './facilities.css',
})
export class Facilities {
//  @ViewChildren('featureSection') sections!: QueryList<ElementRef>;

//   ngAfterViewInit(): void {
//     this.checkSections();
//   }

//   @HostListener('window:scroll', [])
//   onWindowScroll() {
//     this.checkSections();
//   }

//  checkSections() {
//   console.log("Checking sections...");

//   const triggerPoint = window.innerHeight - 100;

//   this.sections.forEach(section => {
//     const rect = section.nativeElement.getBoundingClientRect();
//     console.log("Section top:", rect.top);

//     if (rect.top < triggerPoint) {
//       section.nativeElement.classList.add('active');
//       console.log("Activated!");
//     }
//   });
// }
 ngAfterViewInit() {
    const sections = document.querySelectorAll('.feature-section');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
  }
}
