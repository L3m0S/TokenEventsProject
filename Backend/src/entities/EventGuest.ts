import { Column, Entity, PrimaryColumn, CreateDateColumn,UpdateDateColumn, JoinColumn, ManyToOne, OneToOne, ManyToMany } from 'typeorm';
import { v4 as uuid} from 'uuid';
import { Event } from "../entities/Event";
import { User } from './User';

@Entity("events_guests")
class EventGuest {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_id: string;

    @JoinColumn({name: "user_id"})
    @ManyToMany(() => User)
    userID: User

    @Column()
    event_id: string;

    @JoinColumn({name:"event_id"})
    @ManyToOne(() => Event)
    event: Event;

    @Column()
    event_role: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        };
    };
};

export { EventGuest };