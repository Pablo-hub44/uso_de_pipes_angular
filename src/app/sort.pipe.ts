import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false //por defecto es true, con false se deshabilitara el mecanismo de almacenamiento en cache, mejor dejarlo en true pk consumira mucho rendimiento
})
export class SortPipe implements PipeTransform {

  transform(value: number[]|string[], direction: 'asc'| 'desc' = 'asc') {
    
    const sorted = [...value];
    sorted.sort((a,b) =>{
      if (direction === 'asc') {
        return a>b ? 1: -1;
      }else{
        return a>b ? -1 : 1;
      }
    });
    return sorted;
  }

}
