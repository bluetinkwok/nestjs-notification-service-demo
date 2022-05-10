import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CampignController } from './campign.controller';
import { CampignService } from './campign.service';

import { CampignSchema } from './schemas/campign.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Campign', schema: CampignSchema}
    ]),
  ],
  controllers: [CampignController],
  providers: [CampignService]
})
export class CampignModule {}
