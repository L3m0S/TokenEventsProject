import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEventsGuests1641347755942 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "events_guests",

                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_id",
                        type: "uuid"
                    },
                    {
                        name: "event_id",
                        type: "uuid"
                    },
                    {
                        name: "event_role",
                        type: "varchar",
                        default: "'viewer'"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],

                foreignKeys: [
                    {
                        name: "FKUserIdGuests",
                        referencedTableName: "users",
                        columnNames: ['user_id'],
                        referencedColumnNames: ['id'],
                    },
                    {
                        name: "FKEventIdEventsGuests",
                        referencedTableName: "events",
                        columnNames: ["event_id"],
                        referencedColumnNames: ["id"],
                        
                    }
                ]
            })
        )
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("events_guests");
    
    }

}
