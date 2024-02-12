import { IUseCase } from './use-case';

export type PlateVerifyUsecaseInput = {
  plate: string;
};

export type PlateVerifyUsecaseOutput = {
  status: string;
  marca: string;
  modelo: string;
  ano: number;
  placa: string;
};

export abstract class IPlateVerifyUsecase
  implements
    IUseCase<PlateVerifyUsecaseInput, Promise<PlateVerifyUsecaseOutput>>
{
  abstract execute(
    input: PlateVerifyUsecaseInput,
  ): Promise<PlateVerifyUsecaseOutput>;
}
