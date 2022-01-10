import { getCustomRepository } from "typeorm";
import { EventsRepositories } from "../repositories/EventsRepositories";

class ListUserCreatedEventsServices {

    async execute(user_id: string) {

        const eventsRepository = await getCustomRepository(EventsRepositories);
        
        if(!user_id) {
            throw new Error("You are not logged-in!")
        };

        const userCreatedEvents = await eventsRepository.find({
            where: {
                created_by: user_id
            }
        });

        return userCreatedEvents;
    };
};

export { ListUserCreatedEventsServices };