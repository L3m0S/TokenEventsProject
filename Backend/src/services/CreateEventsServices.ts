import { getCustomRepository } from "typeorm";
import { EventsRepositories } from "../repositories/EventsRepositories";

interface IEventRequest {
    name: string;
    description: string;
    begins_at: Date;
    ends_at: Date;
    created_by: string;
};

class CreateEventsServices {

    async execute({name, description, begins_at, ends_at, created_by} : IEventRequest) {
        
        const eventsRepository = getCustomRepository(EventsRepositories);

        if(!name) {
            throw new Error("Please fill the name of the event!")
        };

        const eventAlreadyExists = await eventsRepository.findOne({
            name
        });

        if(eventAlreadyExists){
            throw new Error("An event with this name already exists and you cannot overwrite it!")
        };

        if(!ends_at) {
            throw new Error("Please fill the Date of ending for de event!")
        };

        if(!created_by) {
            throw new Error("User not logged in!")
        };

        const event = eventsRepository.create({
            name,
            description, 
            begins_at, 
            ends_at, 
            created_by
        });

        await eventsRepository.save(event);

        return event;
    };
};

export { CreateEventsServices }