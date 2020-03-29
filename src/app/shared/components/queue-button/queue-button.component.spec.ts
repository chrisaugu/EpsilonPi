import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueButtonComponent } from './queue-button.component';

describe('QueueButtonComponent', () => {
  let component: QueueButtonComponent;
  let fixture: ComponentFixture<QueueButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
