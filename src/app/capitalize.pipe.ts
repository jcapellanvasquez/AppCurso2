import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
      let val: string = value;
      let arrName: Array<string> = value.split(' ');
      let nombre = "";

      nombre += arrName.map( item => {
          let nombre1= item.split('')
          nombre1[0] = nombre1[0].toUpperCase()
          console.log(nombre1)
          return nombre1.join('')
      }).join(' ')

      return nombre
  }


}
