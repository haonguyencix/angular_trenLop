import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapNgifComponent } from './bai-tap-ngif.component';

describe('BaiTapNgifComponent', () => {
  let component: BaiTapNgifComponent;
  let fixture: ComponentFixture<BaiTapNgifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTapNgifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
