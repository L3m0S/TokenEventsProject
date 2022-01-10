import { getCustomRepository } from "typeorm";
import { EventsRepositories } from "../repositories/EventsRepositories";

interface IEventIdInterface {
    event_id: any
};

class FindEventByIdServices {

    async execute({event_id } : IEventIdInterface) {

        const listEventByID = getCustomRepository(EventsRepositories);

        const event = await listEventByID.findOne({id: event_id});

        if(!event) {
            throw new Error("Event not found!")
        };
        
        return event;
    };
};

export { FindEventByIdServices };