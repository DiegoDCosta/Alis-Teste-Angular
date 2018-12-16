import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personagem } from "../../_models/personagem";

import { MarvelService } from '../../_services/marvel.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit {

  public detalhes: Personagem[];
  public comics = [];
  public series = [];

  constructor(
    private marvelService: MarvelService,
    private spinner: NgxSpinnerService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.spinner.show(); //loading
    this.getPersonagemById();
    this.getComics();
  }

  getPersonagemById(){
    this.marvelService.getPersonagemID(this.router.snapshot.params[`id`])
    .subscribe(response => {
      this.detalhes = response //recebe personagens
      console.log(response)
    });
    this.spinner.hide(); //loading
  }

  getComics(){
    this.marvelService.getComics(this.router.snapshot.params[`id`],'comics')
    .subscribe(response => {
      this.comics = response;
      console.log("Comics por ID -> ",this.comics)
    });
    this.spinner.hide(); //loading
  }
}
