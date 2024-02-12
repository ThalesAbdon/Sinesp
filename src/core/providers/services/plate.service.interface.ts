export class PlateServiceInput {
  plate: string;
}

export type PlateServiceOutput = {
  status: string;
  marca: string;
  modelo: string;
  ano: number;
  placa: string;
};

export abstract class IPlateServiceInterface {
  abstract getValidation(input: PlateServiceInput): Promise<PlateServiceOutput>;
}
