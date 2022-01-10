import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateResquest {
    email: string;
    password: string;
};

class AuthenticateUserServices {
    
    async execute({email, password}: IAuthenticateResquest) {

        const userRespository = getCustomRepository(UsersRepositories);

        const user = await userRespository.findOne({
            email
        });

        if(!user) {
            throw new Error("Incorrect username or password!")
        };

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new Error("Incorrect username or password!")
        };

        const token = sign({
            email: user.email
        }, "3bbbe41566e0706ecb1a9fe7c7eb8b96",
        //Para melhor segurança seria uma boa pratica esse hash estar em uma variavel de ambiente
        {
            subject: user.id,
            expiresIn: "12h"
        });
        
        return token;
    }
}

export { AuthenticateUserServices };