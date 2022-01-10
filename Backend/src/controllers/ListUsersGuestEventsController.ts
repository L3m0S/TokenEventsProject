import { Request, Response } from "express";
import { ListUsersGuestEventsServices  } from "../services/ListUsersGuestEventsServices";


class ListUserGuestEventsController {

    async handle(request: Request, response: Response) {

        const { user_id } = request;

        const listUserEventsService =  new ListUsersGuestEventsServices();

        const events = await listUserEventsService.execute(user_id);

        response.json(events);
    };
};

export { ListUserGuestEventsController };