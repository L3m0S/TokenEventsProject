import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEvents1641347266742 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "events",

                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "begins_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "ends_at",
                        type: "timestamp"
                    },
                    {
                        name: "created_by",
                        type: "uuid"
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
                        name: "FKUserIdEvents",
                        referencedTableName: "users",
                        columnNames: ["created_by"],
                        referencedColumnNames: ["id"],
                        onDelete: "SET NULL"
                    },
                ]
            })
        );
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("events");
    }

}
