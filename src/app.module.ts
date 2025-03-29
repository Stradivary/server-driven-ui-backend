import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/users/user.entity';
import { AuthModule } from './modules/services/auth.module';
import { UIController } from './modules/ui/app.ui.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [UIController],
})

export class AppModule {}
