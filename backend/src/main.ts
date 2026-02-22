import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { JwtAuthGuard } from "./auth/jwt-auth.guard";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Docker Camera Management API') 
    .setDescription('API для управления серверами и камерами в Docker')
    .setVersion('1.0') 
    .addTag('servers')
    .addTag('cameras')
    .build()
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document)
 
  await app.listen(PORT , () => console.log(`Server start on port = ${PORT}`))
}

start()