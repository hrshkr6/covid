import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesNavComponent } from './states-nav.component';

describe('StatesNavComponent', () => {
  let component: StatesNavComponent;
  let fixture: ComponentFixture<StatesNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatesNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
