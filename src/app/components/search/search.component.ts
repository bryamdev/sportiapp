import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  public cargando: boolean;
  public artistas: any[] = [];

  constructor( private spotifyService: SpotifyService) {  
    
  }

  ngOnInit(): void {
  }

  buscar(termino: string){

    if(!termino){
      console.log("Sin termino");
      this.artistas = [];
      return;
    }

    this.cargando = true;

    console.log("Termino de busqueda: " + termino);
    this.spotifyService.getArtistas(termino)
      .subscribe( data => {
        console.log(data);
        this.artistas = data;
        this.cargando = false;
      });

  }

}
