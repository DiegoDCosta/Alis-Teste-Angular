import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemBuscaComponent } from './personagem-busca.component';

describe('PersonagemBuscaComponent', () => {
  let component: PersonagemBuscaComponent;
  let fixture: ComponentFixture<PersonagemBuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonagemBuscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagemBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
