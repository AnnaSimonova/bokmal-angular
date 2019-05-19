import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortParametersComponent } from './sort-parameters.component';

describe('SortParametersComponent', () => {
  let component: SortParametersComponent;
  let fixture: ComponentFixture<SortParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
