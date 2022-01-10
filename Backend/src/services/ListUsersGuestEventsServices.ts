import { getCustomRepository } from "typeorm";
import { EventsGuestsRepositories } from "../repositories/EventsGuestsRespositories";

class ListUsersGuestEventsServices {

    async execute(user_id: string) {

        const eventsGuestsRepository = getCustomRepository(EventsGuestsRepositories);

        if(!user_id) {
            throw new Error("You are not logged-in!")
        };

        const events = eventsGuestsRepository.find({
            select: [
                "event_id"
            ],
            where: {
                user_id: user_id
            },
            relations: [
                "event"
            ]
        });

        return events
    };
 
};

export { ListUsersGuestEventsServices  };