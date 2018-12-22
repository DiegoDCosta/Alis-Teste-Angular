import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Md5 } from "ts-md5/dist/md5";
import { environment } from "../../environments/environment";
import { Observable, throwError  } from "rxjs";
import { retry, catchError } from 'rxjs/operators';
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
        `${environment.MarvelEndpoint}/characters?&ts=${this.timeStamp}&apikey=${
          environment.PublicKey
        }&hash=${this.hash}`
      )
      .pipe(
        map(response => {
          return (response as any).data.results;
        })
      );
  }

  //metodo de busca, criado outro método, pois a endpoint muda
  // https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=spid&apikey=399252e317d7557e0a22b326084ab614
  buscaPersonagens(term?:string): Observable<any> {
    return this.http
      .get<any>(
        `${environment.MarvelEndpoint}/characters?nameStartsWith=${term}&orderBy=name&ts=${this.timeStamp}&apikey=${environment.PublicKey}&hash=${this.hash}`)
      .pipe(
        retry(5),
        catchError(this.handleError),
        map(response => {
          return (response as any).data.results;
        })
      );
  }

  //https://gateway.marvel.com:443/v1/public/characters/1011334?apikey=399252e317d7557e0a22b326084ab614
  // personagem por id
  //getPersonagens
  getPersonagemID(id: number): Observable<Personagem[]> {
    return this.http
      .get<Personagem[]>(
        `${environment.MarvelEndpoint}/characters/${id}?&ts=${this.timeStamp}&apikey=${
          environment.PublicKey
        }&hash=${this.hash}`
      )
      .pipe(
        retry(5),
        catchError(this.handleError),
        map(response => {
          return (response as any).data.results;
        })
      );
  }

  //pega o comic por id do personagem
  //https://gateway.marvel.com:443/v1/public/characters/1011114/comics?format=comic&apikey=399252e317d7557e0a22b326084ab614
  getComics(id: number, comics:string): Observable<Personagem[]> {
    return this.http
      .get<Personagem[]>(
        `${environment.MarvelEndpoint}/characters/${id}/${comics}?&ts=${this.timeStamp}&apikey=${
          environment.PublicKey
        }&hash=${this.hash}`
      )
      .pipe(
        retry(5),
        catchError(this.handleError),
        map(response => {
          return (response as any).data.results;
        })
      );
  }

  getPersonagemComic(url) {
    return this.http.get(`${url}?&ts=${this.timeStamp}&apikey=${environment.PublicKey}&hash=${this.hash}`)
    .pipe(
      retry(5),
      catchError(this.handleError),
      map(
        response => { return (response as any); }
        )
    )
  }

  // TRATAMENTO DE ERROR
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
 }

