import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'fromSeconds'})
export class DurationFormatter implements PipeTransform {
  transform(value: number): any {
    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value - (minutes * 60));
    return [
      ('00'+minutes).substr(-2),
      ('00'+minutes).substr(-2)
    ].join(':');
  }
}
