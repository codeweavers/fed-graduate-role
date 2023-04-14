import { Pipe, PipeTransform } from '@angular/core';

// Take height in decimetres and convert it to metres and feet/inches, returned as string
@Pipe({ name: 'convertHeight' })
export class convertHeightPipe implements PipeTransform{
transform(height: number): string{
    let inchesTotal = ((height*10)/2.54);
    let feet = Math.floor(inchesTotal/12)
    let inches = inchesTotal - (12 * feet)
    return height/10 + "m (" + feet + "ft " + Math.round(inches) + "in)" 
};

}