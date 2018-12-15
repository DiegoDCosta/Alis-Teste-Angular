import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { MarvelService } from '../../_services/marvel.service'
import { Personagem } from "../../_models/personagem";

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {

  public personagemResult:Personagem[];
  //form de busca de personagems
  formBusca: FormGroup;
  campoDeBusca: FormControl;

  constructor(
    private marvelService:MarvelService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.campoDeBusca = this.fb.control('');
    this.formBusca = this.fb.group({
      campoDeBusca: this.campoDeBusca
    });

    this.buscarPersonagem();

  }

  buscarPersonagem(){
    this.campoDeBusca.valueChanges.pipe(
      switchMap(
        name => this.marvelService.buscaPersonagens(this.campoDeBusca.value)
      )
    ).subscribe(
      (response => {
        this.personagemResult = response
        console.log('personagem buscado ->',response);
      })
    )
  }

}
