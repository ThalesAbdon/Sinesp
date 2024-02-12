import { IBaseApplication } from './base.application';

export type VerifyPlateApplicationInput = {
  plate: string;
};

export type VerifyPlateApplicationOutput = {
  status: string;
  marca: string;
  modelo: string;
  ano: number;
  placa: string;
};

export abstract class IPlateVerifyApplication
  implements
    IBaseApplication<
      VerifyPlateApplicationInput,
      Promise<VerifyPlateApplicationOutput>
    >
{
  abstract execute(
    input: VerifyPlateApplicationInput,
  ): Promise<VerifyPlateApplicationOutput>;
}
