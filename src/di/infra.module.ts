import { HttpModule } from '@nestjs/axios';
import { Module, Provider } from '@nestjs/common';
import { IPlateServiceInterface } from 'src/core/providers/services/plate.service.interface';
import { PlateService } from 'src/infra/services/cache/plate.service';

export const infraProviders: Provider[] = [
  {
    provide: IPlateServiceInterface,
    useClass: PlateService,
  },
];

@Module({
  imports: [HttpModule.register({})],
  providers: infraProviders,
  exports: infraProviders,
})
export class InfraModule {}
