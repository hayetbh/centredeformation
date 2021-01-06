import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionCondidatComponent } from './inscription-condidat.component';

describe('InscriptionCondidatComponent', () => {
  let component: InscriptionCondidatComponent;
  let fixture: ComponentFixture<InscriptionCondidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionCondidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionCondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
