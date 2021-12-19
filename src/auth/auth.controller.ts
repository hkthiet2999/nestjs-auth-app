import { Controller, Get, Post  } from '@nestjs/common';

@Controller()
export class AuthController {


    @Get('register')
    registerGet(){
        return 'Register Route' ;
    }

    @Post('register')
    registerPost(){
        return (
            
            {
                _id: 12,
                method: "Post",
                title: "JSON Object Post register"
            }
        )
    }


  }

