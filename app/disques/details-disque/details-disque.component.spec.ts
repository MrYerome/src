import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDisqueComponent } from './details-disque.component';

describe('DetailsDisqueComponent', () => {
  let component: DetailsDisqueComponent;
  let fixture: ComponentFixture<DetailsDisqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDisqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
