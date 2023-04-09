import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'convertHeight' })
export class convertHeightPipe implements PipeTransform{
transform(height: number){
    return height*10 + " cms / " + height/10 + "m." 
};

}