import { Router } from "express";
import { CreateUsersController } from "./controllers/CreateUsersController";
import { CreateEventsController } from "./controllers/CreateEventsController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { ensureAuthenticated } from "./middlewares/EnsureUserAuthenticated";
import { CreateEventsGuestsController } from "./controllers/CreateEventsGuestsController";
import { ListUserGuestEventsController } from "./controllers/ListUsersGuestEventsController";
import { ListUserCreatedEventsController } from "./controllers/ListUsersCreatedEventsController";
import { DeleteEventsController } from "./controllers/DeleEventController";
import { FindEventByIdController } from "./controllers/FindEventByIdController";

const router =  Router();

const createUsersController = new CreateUsersController();
const authenticateUserController = new AuthenticateUserController();
const createEventsController =  new CreateEventsController();
const createEventsGuestsController =  new CreateEventsGuestsController();
const listUserEventsController = new ListUserGuestEventsController();
const listUserCreatedEventsController =  new ListUserCreatedEventsController();
const deleteEventsController = new DeleteEventsController();
const findEventByID = new FindEventByIdController();

//Login and register routes
router.post("/sign-up", createUsersController.handle);
router.post("/login", authenticateUserController.handle);

//Create Events and add guests routes
router.post("/create-event", ensureAuthenticated, createEventsController.handle);
router.post("/invite-guests", ensureAuthenticated, createEventsGuestsController.handle);

//Listing of events
router.get("/guest-events", ensureAuthenticated, listUserEventsController.handle);
router.get("/created-events", ensureAuthenticated, listUserCreatedEventsController.handle);
router.get("/events/:id", ensureAuthenticated, findEventByID.handle);

//Delete an event by id
router.delete("/events/:id", ensureAuthenticated, deleteEventsController.handle);

export { router };