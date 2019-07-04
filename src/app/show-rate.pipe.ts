import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showRate'
})
export class ShowRatePipe implements PipeTransform {

  transform(rate: number): string {
    if(!rate || rate < 1 ){
      return 'No rating :(';
    }
    return '\t&#9733;'.repeat(rate)
  }

}
