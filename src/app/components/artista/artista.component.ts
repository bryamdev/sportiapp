import { Component, OnInit } from '@angular/core';

import{ ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  public artista: any = {};
  public cargando: boolean;
  public topTracks: any[] = [];

  constructor( private actRoute: ActivatedRoute,
               private sprotifyService: SpotifyService ) { 

    this.cargando = true;
    
    this.actRoute.params
      .subscribe( param => {
        let id: string = param['id'];
        //console.log("El parametro es: " + id);

        this.setArtista(id);
        this.getTopTracks(id);

        
      });
  }


  setArtista(id: string){
    this.sprotifyService.getArtistById(id)
        .subscribe( data => {
          this.artista = data;
          console.log(this.artista);
          this.cargando = false;
        });
  }

  getTopTracks(id: string){
    this.sprotifyService.getTopTracks(id)
          .subscribe( data => {
            this.topTracks = data;
            console.log(this.topTracks);
        });  
  }

  
}
