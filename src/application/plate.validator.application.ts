import { Injectable } from '@nestjs/common';
import {
  IPlateVerifyApplication,
  VerifyPlateApplicationInput,
  VerifyPlateApplicationOutput,
} from 'src/core/providers/application/plate.verify.application.interface';
import { IPlateVerifyUsecase } from 'src/core/providers/use-cases/plate.verify.usecase';

@Injectable()
export class PlateVerifyApplication implements IPlateVerifyApplication {
  constructor(private readonly _plateVerifyUsecase: IPlateVerifyUsecase) {}

  async execute(
    input: VerifyPlateApplicationInput,
  ): Promise<VerifyPlateApplicationOutput> {
    return await this._plateVerifyUsecase.execute(input);
  }
}
