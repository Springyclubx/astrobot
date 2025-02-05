import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartAppComponent } from './part-app.component';

describe('PartAppComponent', () => {
  let component: PartAppComponent;
  let fixture: ComponentFixture<PartAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
