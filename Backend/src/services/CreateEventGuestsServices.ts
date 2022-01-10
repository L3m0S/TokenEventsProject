import { getCustomRepository } from "typeorm";
import { EventsGuestsRepositories } from "../repositories/EventsGuestsRespositories";
import { EventsRepositories } from "../repositories/EventsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IGuestRequestInterface{
    user_id: string;
    event_id: string;
    event_role: string;
};

class CreateEventsGuestsServices {

    async execute({user_id, event_id, event_role}: IGuestRequestInterface ) {

        const eventsGuestRepository = getCustomRepository(EventsGuestsRepositories);
        const usersRepositories = getCustomRepository(UsersRepositories);
        const eventsRepository = getCustomRepository(EventsRepositories);

        const userExists = await usersRepositories.findOne(user_id);

        if(!userExists) {
            throw new Error("Guest not found!");
        };

        const eventExists = await eventsRepository.findOne(event_id);

        if(!eventExists) {
            throw new Error("Event not found!");
        };

        if(!event_role) {
            throw new Error("Please fill the role of the Guest!");
        };

        const guest = eventsGuestRepository.create({
            user_id,
            event_id,
            event_role
        });

        await eventsGuestRepository.save(guest);

        return guest;
    };
};

export { CreateEventsGuestsServices };