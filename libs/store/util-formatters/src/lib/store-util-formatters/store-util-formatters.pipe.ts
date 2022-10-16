import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'rating',
  standalone: true
})
export class RatingPipe implements PipeTransform {
  transform(rating: number) {
    return `${Math.round(rating * 100) / 10} / 10`;
  }
}

