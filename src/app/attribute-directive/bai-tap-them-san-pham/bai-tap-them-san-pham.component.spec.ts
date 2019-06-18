import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapThemSanPhamComponent } from './bai-tap-them-san-pham.component';

describe('BaiTapThemSanPhamComponent', () => {
  let component: BaiTapThemSanPhamComponent;
  let fixture: ComponentFixture<BaiTapThemSanPhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTapThemSanPhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapThemSanPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
