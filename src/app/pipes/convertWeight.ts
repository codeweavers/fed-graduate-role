import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'convertWeight' })
export class convertWeightPipe implements PipeTransform{
transform(weight: number){
    let kilograms = weight / 10;
    return  (kilograms + "kgs (") + ((kilograms * 2.2).toFixed(1) + "lbs)")
};

}