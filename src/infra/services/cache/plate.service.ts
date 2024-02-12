import { Injectable } from '@nestjs/common';
import {
  PlateServiceInput,
  PlateServiceOutput,
} from 'src/core/providers/services/plate.service.interface';

@Injectable()
export class PlateService {
  getValidation(input: PlateServiceInput): PlateServiceOutput {
    const carros = [
      {
        status: 'Ativo',
        marca: 'ExemploMarca1',
        modelo: 'ExemploModelo1',
        ano: 2022,
        placa: 'ABC1234',
      },
      {
        status: 'Ativo',
        marca: 'ExemploMarca2',
        modelo: 'ExemploModelo2',
        ano: 2022,
        placa: 'XYZ5678',
      },
      {
        status: 'Ativo',
        marca: 'ExemploMarca3',
        modelo: 'ExemploModelo3',
        ano: 2022,
        placa: 'DEF9012',
      },
    ];

    const carroEncontrado = carros.find((carro) => carro.placa === input.plate);

    if (carroEncontrado) {
      console.log('Carro encontrado:', carroEncontrado);
      return carroEncontrado;
    } else {
      console.log('Carro não encontrado para a placa:', input.plate);
      return;
    }
  }
}
