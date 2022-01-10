import { Column, Entity, PrimaryColumn, CreateDateColumn,UpdateDateColumn, JoinColumn, OneToOne } from 'typeorm';
import { v4 as uuid} from 'uuid';
import { User } from './User';

@Entity("events")
class Event {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    begins_at: Date;

    @Column()
    ends_at: Date;

    @Column()
    created_by: string;

    @JoinColumn({name:"created_by"})
    @OneToOne(() => User)
    user: User;

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

export { Event };