import { compareSync } from "bcryptjs";
import { request, Request, Response } from "express";
import { DeleteEventsServices } from "../services/DeleteEventsServices";


class DeleteEventsController {

    async handle( request: Request, response: Response) {
        
        const { user_id } =  request;

        const event_id = request.params.id;

        const deleteEventsServices = new DeleteEventsServices();

        const  deleted_event =  await deleteEventsServices.execute({event_id, user_id});

        return response.json("Event deleted!");
    };
};

export { DeleteEventsController };

