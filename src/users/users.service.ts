import { Injectable } from '@nestjs/common';

const Users = [
    {
        id: 1,
        name:"ajay",
        email:"ajaymalik07@gmail.com"
    },
    {
        id: 2,
        name:"kartikey",
        email:"kartikey@gmail.com"
    },
    {
        id: 3,
        name:"abhinav",
        email:"abhinav@gmail.com"
    },
    {
        id: 4,
        name:"krish",
        email:"krish@gmail.com"
    },
    {
        id: 5,
        name:"suryansh",
        email:"suryansh@gmail.com"
    }
]


@Injectable()
export class UsersService {
    getUsers(){
        return Users;
    }
}
