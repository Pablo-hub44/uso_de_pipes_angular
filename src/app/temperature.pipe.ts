import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'temperature',
    standalone: true
})
export class TemperaturePipe implements PipeTransform {

    /**
     * 
     * @param value 
     * @param args 
     * @returns 
     */
    transform(value: string | number | null, inputType: 'cel' | 'fah', outputType: 'cel' | 'fah') { //value es el cual el pipe es usado, segndo parametro args es la configuracion de valores para el pipe

        let val: number;

        if (!value) {
            return value;
        }

        if (typeof value === 'string') {
            val = parseFloat(value);
        }else{
            val = value;
        }

        let outputTemp :number;

        //validamos
        if (inputType === 'cel' && outputType === 'fah') {
            //de celsius a farenheid
            outputTemp = val * (9/5) + 32;
        }else if (inputType === 'fah' && outputType === 'cel'){
            //de farenheif a celsius
            outputTemp = (val - 32) * (5/9)
        }else{
            outputTemp = val;
        }

        //const deCelsiusAFarenheit = val * (9/5)+32;
        //ahora para el simbolo , aunque eso se podria haber puesto desde arriba tambien
        let symbol: '°C' | '°F';

        if (!outputTemp) {
            symbol = inputType == 'cel' ? '°C' : '°F';
        }else{
            symbol = outputType == 'cel' ? '°C' : '°F';
        }

        return `${outputTemp.toFixed(2)}  ${symbol}`;  //`${deCelsiusAFarenheit} °F`;
    }

}