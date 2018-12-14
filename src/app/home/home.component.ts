import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { MarvelService } from '../_services/marvel.service'
import { Personagem } from "../_models/personagem";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public personagens:Personagem[];
  //form de busca de personagems
  formBusca: FormGroup;
  campoDeBusca: FormControl;

  constructor(
    private marvelService:MarvelService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.campoDeBusca = this.fb.control('');
    this.formBusca = this.fb.group({
      campoDeBusca: this.campoDeBusca
    });

    this.getPersonagen();//carrega os cards de personagens na home
    this.buscarPersonagem(); //busca os personagens na API remotamente

}

  getPersonagen(){
    return this.marvelService.getPersonagens().subscribe(
      (response => {
        this.personagens = response;
        console.log(response);
      })
    )
  }

  buscarPersonagem(){
    this.campoDeBusca.valueChanges.pipe(
      switchMap(
        name => this.marvelService.buscaPersonagens(this.campoDeBusca.value)
      )
    ).subscribe(
      (response => {
        this.personagens = response
        console.log('buscou?',response);
      })
    )
  }
}
