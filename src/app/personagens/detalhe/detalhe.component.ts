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

  constructor(
    private marvelService: MarvelService,
    private spinner: NgxSpinnerService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {

    this.marvelService.getPersonagemID(this.router.snapshot.params[`id`])
      .subscribe(response => this.detalhes = response);

  }

}
