import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {

    if( !images || images == null ){
      return 'assets/img/noimage.png';
    }

    if(images.length == 0){
      return 'assets/img/noimage.png';
    }

    return images[1].url;
  }

}
