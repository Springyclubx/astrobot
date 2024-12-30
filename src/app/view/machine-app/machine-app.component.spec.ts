import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineAppComponent } from './machine-app.component';

describe('MachineAppComponent', () => {
  let component: MachineAppComponent;
  let fixture: ComponentFixture<MachineAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
