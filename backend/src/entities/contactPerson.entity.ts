import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ContactList } from "./contactList.entity";

@Entity({ name: "contact_person" })
export class ContactPerson {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    nome: string;

    @Column({ nullable: false })
    sobrenome: string;

    @OneToMany(type => ContactList, contact => contact.person, { onDelete: "CASCADE" })
    contact: ContactList[];
}