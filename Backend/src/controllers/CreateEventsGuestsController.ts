import { Request, Response } from "express";
import { CreateEventsGuestsServices } from "../services/CreateEventGuestsServices";

class CreateEventsGuestsController {

    async handle(request: Request, response: Response) {

        const {
            event_id,
            event_role
        } = request.body;

        const { user_id } = request;

        const createEventsGuestsServices = new CreateEventsGuestsServices();

        const guest = await createEventsGuestsServices.execute({
            user_id: user_id,
            event_id,
            event_role
        });

        return response.json(guest);
    };

}

export { CreateEventsGuestsController };