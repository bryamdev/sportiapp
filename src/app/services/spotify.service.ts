import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
}) //provideIn declara automaticamente el provider y no hace falta agregarlo al app.module
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log("Spotify Service!");
  }

  private getData( query: string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBCLl6qF0x297gDqAWju1Fr7tLxLAfwLqgrhxOm6PJkaV1Ulxk-M3C9RIwlNUdV33SqpQoob9BHuYhdnDg'
    });

    return this.http.get(url, {headers});

  }

  getNewReleases(){
    return this.getData('browse/new-releases?limit=30')
      .pipe( map( data => {
        return data['albums'].items; //con data['albums'] evita delcarar el tipo any a data
      }));
  }

  getArtistas(termino: string){
    return this.getData(`search?q=${ termino }&type=artist&limit=15`) 
      .pipe( map( data => {
        return data['artists'].items;
      }));
  }

  getArtistById(idArtista: string){
    return this.getData(`artists/${ idArtista }`);
  }

  getTopTracks(idArtista: string){
    return this.getData(`artists/${ idArtista }/top-tracks?market=CO`)
      .pipe( map( data => {
        return data['tracks'];
      }));
  }

}
