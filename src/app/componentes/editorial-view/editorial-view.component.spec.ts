import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialViewComponent } from './editorial-view.component';

describe('EditorialViewComponent', () => {
  let component: EditorialViewComponent;
  let fixture: ComponentFixture<EditorialViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorialViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
