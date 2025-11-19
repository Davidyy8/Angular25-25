import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComponente } from './lista';

describe('Lista', () => {
  let component: ListaComponente;
  let fixture: ComponentFixture<ListaComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
