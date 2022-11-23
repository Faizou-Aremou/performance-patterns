import { Pipe, PipeTransform } from '@angular/core';

const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};
@Pipe({
  name: 'calulate',
  pure: true,
})
export class CalulatePipe implements PipeTransform {
  transform(value: number) {
    return fibonacci(value);
  }
}
