import { Get, Controller } from '@nestjs/common';

@Controller('api')
export class AppController {
	@Get()
	root(): string {
		return '{"hello": "Hello World!"}';
	}
}