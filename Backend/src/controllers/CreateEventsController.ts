import { Request, Response } from "express";
import { CreateEventsServices } from "../services/CreateEventsServices";


class CreateEventsController {

    async handle(request: Request, response: Response) {

        const { 
            name, 
            description, 
            begins_at, 
            ends_at
        } = request.body;

        const { user_id } = request;

        const createEventsServices = new CreateEventsServices();

        const event = await createEventsServices.execute({ 
            name, 
            description, 
            begins_at, 
            ends_at, 
            created_by: user_id
        });

        return response.json(event);
    };
};

export { CreateEventsController };