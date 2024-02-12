import { Module } from '@nestjs/common';
import { ApplicationModule } from './application.module';
import { ValidateController } from 'src/presentation/http/v1/controller/verify.plate.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [ValidateController],
  providers: [],
})
export class PresentationModule {}
