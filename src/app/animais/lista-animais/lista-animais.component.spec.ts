import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAnimaisComponent } from './lista-animais.component';

describe('ListaAnimaisComponent', () => {
  let component: ListaAnimaisComponent;
  let fixture: ComponentFixture<ListaAnimaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAnimaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
