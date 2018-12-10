import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemDetalheComponent } from './personagem-detalhe.component';

describe('PersonagemDetalheComponent', () => {
  let component: PersonagemDetalheComponent;
  let fixture: ComponentFixture<PersonagemDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonagemDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagemDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
