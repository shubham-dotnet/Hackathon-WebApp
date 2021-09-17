import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMaincontentComponent } from './admin-maincontent.component';

describe('AdminMaincontentComponent', () => {
  let component: AdminMaincontentComponent;
  let fixture: ComponentFixture<AdminMaincontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMaincontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMaincontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
