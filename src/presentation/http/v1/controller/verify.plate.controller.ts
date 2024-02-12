import { Body, Controller, Get } from '@nestjs/common';
import { VerifyPlateDTOInput, VerifyPlateDTOOutput } from '../dto/verify.plate';
import { IPlateVerifyApplication } from 'src/core/providers/application/plate.verify.application.interface';

@Controller({
  version: '1',
  path: 'validate',
})
export class ValidateController {
  constructor(
    private readonly _plateVerifyApplication: IPlateVerifyApplication,
  ) {}
  @Get()
  async validate(
    @Body()
    input: VerifyPlateDTOInput,
  ): Promise<VerifyPlateDTOOutput> {
    return this._plateVerifyApplication.execute(input);
  }
}
