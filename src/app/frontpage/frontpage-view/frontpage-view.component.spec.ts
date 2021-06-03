import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpageViewComponent } from './frontpage-view.component';

describe('FrontpageViewComponent', () => {
  let component: FrontpageViewComponent;
  let fixture: ComponentFixture<FrontpageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontpageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontpageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
