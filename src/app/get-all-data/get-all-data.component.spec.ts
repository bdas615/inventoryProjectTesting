import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllDataComponent } from './get-all-data.component';

describe('GetAllDataComponent', () => {
  let component: GetAllDataComponent;
  let fixture: ComponentFixture<GetAllDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
