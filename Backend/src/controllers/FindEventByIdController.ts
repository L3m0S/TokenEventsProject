import { Request,  Response } from "express";
import { FindEventByIdServices } from "../services/FindEventByIdServices";


class FindEventByIdController {

    async handle(request: Request, response: Response) {

        const event_id = request.params.id;
        console.log(event_id);

        const findEventByIdServices = new FindEventByIdServices();

        const event = await findEventByIdServices.execute({event_id});

        return response.json(event);
    };
};

export { FindEventByIdController };