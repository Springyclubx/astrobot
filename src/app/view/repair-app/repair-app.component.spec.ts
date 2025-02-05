import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairAppComponent } from './repair-app.component';

describe('RepairAppComponent', () => {
  let component: RepairAppComponent;
  let fixture: ComponentFixture<RepairAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepairAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
