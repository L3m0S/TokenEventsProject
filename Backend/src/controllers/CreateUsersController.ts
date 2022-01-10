import { Request, Response } from "express";
import { CreateUsersServices } from "../services/CreateUsersServices";

class CreateUsersController {

    async handle(request: Request, response: Response) {
        
        const { 
            name, 
            email, 
            password, 
            admin
        } = request.body;

        const createUsersService = new CreateUsersServices();

        const user = await createUsersService.execute({ 
            name, 
            email, 
            password, 
            admin 
        });

        return response.json(user);
    };
};

export { CreateUsersController };