import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Get()
    getUsers(){}

    @Post("register")
    createUser(){}

    @Post("login")
    loginUser(){}

}
