import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToTop } from './go-to-top';

describe('GoToTop', () => {
  let component: GoToTop;
  let fixture: ComponentFixture<GoToTop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoToTop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoToTop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
