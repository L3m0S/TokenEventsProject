import { getCustomRepository } from 'typeorm';
import { EventGuest } from '../entities/EventGuest';
import { EventsGuestsRepositories } from '../repositories/EventsGuestsRespositories';
import { EventsRepositories } from '../repositories/EventsRepositories';

interface IEventIdInterface {
    user_id: string;
    event_id: string;
};

class DeleteEventsServices {

    async execute({ user_id, event_id } : IEventIdInterface) {

        const eventsRepository = getCustomRepository(EventsRepositories);
        const eventsGuestRepository = getCustomRepository(EventsGuestsRepositories);

        if(!event_id) {
            throw new Error("Missging Argument: event ID!")
        };

        const eventExists = await eventsRepository.findOne(event_id);

        if(!eventExists) {
            throw new Error("Event not found!")
        };

        if(eventExists.created_by == user_id) {

            const deletedGuest = await eventsGuestRepository.delete({event_id: event_id});

            const deletedEvent = await eventsRepository.delete(event_id);

            return;
        } else {
            throw new Error("You can only delete Events tha you create!")
        };
        
    };
};

export { DeleteEventsServices };