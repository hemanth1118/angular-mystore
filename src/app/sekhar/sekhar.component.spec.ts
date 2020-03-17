import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SekharComponent } from './sekhar.component';

describe('SekharComponent', () => {
  let component: SekharComponent;
  let fixture: ComponentFixture<SekharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SekharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SekharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
