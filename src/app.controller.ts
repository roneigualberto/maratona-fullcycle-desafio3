import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {


  @Get()
  @Redirect('/index.html')
  index() {}

  @Get('/send')
  @Redirect('/sender.html')
  send() {}

  @Get('/receive')
  @Redirect('/receiver.html')
  receive() {}

}
