import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AldahirPage } from './aldahir.page';

describe('AldahirPage', () => {
  let component: AldahirPage;
  let fixture: ComponentFixture<AldahirPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AldahirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
