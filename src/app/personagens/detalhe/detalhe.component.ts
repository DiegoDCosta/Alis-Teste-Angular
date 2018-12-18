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
  public comics:any[] = [];
  public comicsImage:string;

  public dataInfo:any[]=[]; // remover teste
  public dataImage:any;
  public dataDescription: any;
  //public series = [];

  constructor(
    private marvelService: MarvelService,
    private spinner: NgxSpinnerService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.spinner.show(); //loading
    this.getPersonagemById();
    this.getComicsID();
  }

  getPersonagemById(){
    this.marvelService.getPersonagemID(this.router.snapshot.params[`id`])
    .subscribe(response => {
      this.detalhes = response //recebe personagens
      console.log(response)
    });
    this.spinner.hide(); //loading
  }


  getComicsID(){
    this.marvelService.getComics(this.router.snapshot.params[`id`],'comics')
    .subscribe(response => {
      this.comics = response;
      this.comicsImage = `${this.comics[1].thumbnail.path}.${this.comics[1].thumbnail.extension}`;
      console.log("Comics por ID -> ",this.comics);
    });
    this.spinner.hide(); //loading
  }

  teste(url) {
    this.marvelService.getPersonagemComic(url).subscribe( response  =>{
      this.dataInfo = response.data.results[0]
      this.dataDescription = `${response.data.results[0].description}`;
      this.dataImage = `${response.data.results[0].thumbnail.path}.${response.data.results[0].thumbnail.extension}`;
      console.log(this.dataInfo)
    })
  }
}
