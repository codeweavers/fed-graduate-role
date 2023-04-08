import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'convertWeight' })
export class convertWeightPipe implements PipeTransform{
transform(weight: number){
    return  weight * 10 + "kgs"
};

}