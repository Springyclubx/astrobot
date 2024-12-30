import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmantAppComponent } from './departmant-app.component';

describe('DepartmantAppComponent', () => {
  let component: DepartmantAppComponent;
  let fixture: ComponentFixture<DepartmantAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmantAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmantAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
