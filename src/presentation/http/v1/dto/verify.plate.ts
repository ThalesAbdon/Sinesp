import { IsString } from 'class-validator';

export class VerifyPlateDTOInput {
  @IsString()
  plate: string;
}

export class VerifyPlateDTOOutput {
  status: string;
  marca: string;
  modelo: string;
  ano: number;
  placa: string;
}
