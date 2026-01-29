import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounsellingCenter } from './counselling-center';

describe('CounsellingCenter', () => {
  let component: CounsellingCenter;
  let fixture: ComponentFixture<CounsellingCenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounsellingCenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounsellingCenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
