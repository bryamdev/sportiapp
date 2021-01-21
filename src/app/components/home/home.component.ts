import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public cargando: boolean;
  public nuevasCanciones: any[] = [];

  public error: boolean;
  public errorMessage: string;
  

  constructor( private spotifyService: SpotifyService ) {
    
    this.cargando = true;
    this.error = false;
    
    spotifyService.getNewReleases()
      .subscribe( data =>{
        console.log(data);
        this.nuevasCanciones = data;
        this.cargando = false;
      }, (errService) => {
        this.cargando = false;
        this.error = true;
        this.errorMessage = errService.error.error.message;
        console.log("Ocurrió un error");
        console.log(errService);
      });

  }

  ngOnInit(): void {
  }

}
