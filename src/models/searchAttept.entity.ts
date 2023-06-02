import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity("SearchAttemp")
export class SearchAttempEntity {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    userId : string

    @Column()
    searchQuery : string

    @Column()
    timestamp : Date

}
