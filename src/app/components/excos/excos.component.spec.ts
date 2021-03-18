import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcosComponent } from './excos.component';

describe('ExcosComponent', () => {
  let component: ExcosComponent;
  let fixture: ComponentFixture<ExcosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
