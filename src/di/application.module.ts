import { Module, Provider } from '@nestjs/common';
import { PlateVerifyApplication } from 'src/application/plate.validator.application';
import { IPlateVerifyApplication } from 'src/core/providers/application/plate.verify.application.interface';
import { CoreModule } from './core.module';

const applicationProviders: Provider[] = [
  {
    provide: IPlateVerifyApplication,
    useClass: PlateVerifyApplication,
  },
];

@Module({
  imports: [CoreModule],
  providers: applicationProviders,
  exports: applicationProviders,
})
export class ApplicationModule {}
