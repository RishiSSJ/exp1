import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributedirectivesDemoComponent } from './attributedirectives-demo.component';

describe('AttributedirectivesDemoComponent', () => {
  let component: AttributedirectivesDemoComponent;
  let fixture: ComponentFixture<AttributedirectivesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributedirectivesDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributedirectivesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
