import { Request, Response } from "express";
import { ListUserCreatedEventsServices } from "../services/ListUserCreatedEventsServices";

class ListUserCreatedEventsController {

    async handle(request: Request, response: Response) {

        const { user_id } = request;

        const listUsersCreatedEventsServices = new ListUserCreatedEventsServices();

        const events = await listUsersCreatedEventsServices.execute(user_id);

        response.json(events);
    };
};

export { ListUserCreatedEventsController }