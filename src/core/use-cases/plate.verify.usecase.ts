import { Injectable } from '@nestjs/common';
import {
  IPlateVerifyUsecase,
  PlateVerifyUsecaseInput,
  PlateVerifyUsecaseOutput,
} from '../providers/use-cases/plate.verify.usecase';
import { IPlateServiceInterface } from '../providers/services/plate.service.interface';

@Injectable()
export class PlateVerifyUsecase implements IPlateVerifyUsecase {
  constructor(private _plateService: IPlateServiceInterface) {}

  async execute({
    plate,
  }: PlateVerifyUsecaseInput): Promise<PlateVerifyUsecaseOutput> {
    const result = await this._plateService.getValidation({ plate });
    return {
      status: result.status,
      marca: result.marca,
      modelo: result.modelo,
      ano: result.ano,
      placa: result.placa,
    };
  }
}
