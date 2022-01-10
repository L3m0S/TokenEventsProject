import { EntityRepository, Repository } from "typeorm";
import { EventGuest } from "../entities/EventGuest";

@EntityRepository(EventGuest)
class EventsGuestsRepositories extends Repository<EventGuest> {

};

export { EventsGuestsRepositories  };