import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Md5 } from "ts-md5/dist/md5";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Personagem } from "../_models/personagem";

@Injectable({
  providedIn: "root"
})
export class MarvelService {

  constructor(private http: HttpClient) {
    //console.log("verificação da hash de acesso", this.hash);
  }

  //cria o timestamp
  private timeStamp = new Date().getTime();
  //cria o hash
  private hash = Md5.hashStr(
    this.timeStamp + environment.PrivateKey + environment.PublicKey
  );

  //getPersonagens
  getPersonagens(): Observable<Personagem[]> {
    return this.http
      .get<Personagem[]>(
        `${environment.MarvelEndpoint}&ts=${this.timeStamp}&apikey=${
          environment.PublicKey
        }&hash=${this.hash}`
      )
      .pipe(
        map(response => {
          return (response as any).data.results;
        })
      );
  }



  //metodo de busca

  buscaPersonagens(term?:string): Observable<any> {
    return this.http
      .get<any>(
        `${environment.MarvelEndpoint}name=${term}&ts=${this.timeStamp}&apikey=${environment.PublicKey}&hash=${this.hash}`)
      .pipe(
        map(response => {
          return (response as any).data.results;
        })
      );
  }


}
