import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkmarck'
})
//ng generate pipe checkmark
export class CheckmarckPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let ret:string = '\u2718'; //unicode characters x
    if(value)//if value ==true return \u2713 else \u2718
    ret='\u2713';
    return ret;
  }

}
