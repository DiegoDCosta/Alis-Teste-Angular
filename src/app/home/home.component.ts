import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../_services/marvel.service'
import { Personagem } from "../_models/personagem";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public personagem:Personagem[];

  constructor(
    private marvelService:MarvelService
  ) { }

  ngOnInit() {
    this.getPersonagen();
  }

  getPersonagen(){
    return this.marvelService.getPersonagens().subscribe(
      (response => {
        this.personagem = response;
        console.log(response);
      })
    )
  }

}
