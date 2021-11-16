import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolAnimationsComponent } from './cool-animations.component';

describe('CoolAnimationsComponent', () => {
  let component: CoolAnimationsComponent;
  let fixture: ComponentFixture<CoolAnimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolAnimationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
