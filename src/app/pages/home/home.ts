import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 @ViewChildren('counter') counters!: QueryList<ElementRef>;

  ngAfterViewInit(): void {

    // 🔹 Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries, observerRef) => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add('active');

          // 🔹 If it is a counter section, start counter
          if (entry.target.classList.contains('counter-section')) {
            this.startCounterAnimation();
          }

          observerRef.unobserve(entry.target); // Run only once
        }

      });
    }, {
      threshold: 0.15
    });

    revealElements.forEach(el => observer.observe(el));
  }

  startCounterAnimation() {

    const speed = 200;

    this.counters.forEach((counterEl: ElementRef) => {

      const element = counterEl.nativeElement;

      // Prevent re-running
      if (element.classList.contains('counted')) return;
      element.classList.add('counted');

      const target = +element.getAttribute('data-target');
      let count = 0;
      const increment = target / speed;

      const updateCount = () => {
        if (count < target) {
          count += increment;
          element.innerText = Math.ceil(count);
          setTimeout(updateCount, 10);
        } else {
          element.innerText = target + "+";
        }
      };

      updateCount();
    });

  }
  features = [
  { icon: 'fa-solid fa-book-open-reader', text: 'सन २००५-०६ ते आतापर्यत सतत बॅचेस उत्तीर्ण झाल्या असून 100% निकाल' },
  { icon: 'fa-solid fa-earth-asia', text: 'शहरापासून दूर निसर्गरम्य परिसरात शाळेची भव्य इमारत' },
  { icon: 'fa-solid fa-user-check', text: 'सांस्कृतिक कार्यक्रमातून शालेय रंगतरंग हे वार्षिक स्नेहसंमेलन' },
  { icon: 'fa-solid fa-network-wired', text: 'प्रत्येक वर्गात एफ.एम.व लूप इन्डक्शन सिस्टीम' },
  { icon: 'fa-solid fa-user-graduate', text: 'शिक्षक व विद्यार्थ्यांसाठी सुसज्ज ग्रंथालय' },
  { icon: 'fa-solid fa-book-open', text: 'शालेय परिसरात Wi-Fi यंत्रणेची उपलब्धता' },
  { icon: 'fa-solid fa-chalkboard-user', text: 'शिक्षकांसाठी मार्गदर्शन व प्रशिक्षण व्यवस्था' },
  { icon: 'fas fa-award', text: 'मुलांच्या भाषा व वाचा विकासासाठी स्पीच ट्रेनर व साऊंडप्रूफ रूम' }
];
}
