import { Module, Provider } from '@nestjs/common';
import { IPlateVerifyUsecase } from 'src/core/providers/use-cases/plate.verify.usecase';
import { PlateVerifyUsecase } from 'src/core/use-cases/plate.verify.usecase';
import { InfraModule } from './infra.module';

const coreProviders: Provider[] = [
  {
    provide: IPlateVerifyUsecase,
    useClass: PlateVerifyUsecase,
  },
];

@Module({
  imports: [InfraModule],
  providers: coreProviders,
  exports: coreProviders,
})
export class CoreModule {}
