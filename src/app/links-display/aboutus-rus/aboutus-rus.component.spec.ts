import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusRusComponent } from './aboutus-rus.component';

describe('AboutusRusComponent', () => {
  let component: AboutusRusComponent;
  let fixture: ComponentFixture<AboutusRusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusRusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
