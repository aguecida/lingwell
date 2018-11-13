import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptorViewComponent } from './descriptor-view.component';

describe('DescriptorViewComponent', () => {
  let component: DescriptorViewComponent;
  let fixture: ComponentFixture<DescriptorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
