import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRepositoryTag } from './app.repository';
import { AppRepositoryHashmap } from './app.repository.hashmap';
import { AppRepositoryRedis } from './app.repository.redis';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: AppRepositoryTag, 
      useClass: AppRepositoryRedis, 
      // useClass: AppRepositoryHashmap,
    },
  ]
})
export class AppModule {}
