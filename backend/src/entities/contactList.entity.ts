import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { ContactPerson } from "../entities/contactPerson.entity";

@Entity({ name: "contact_list" })
export class ContactList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contato: string;

  @ManyToOne(type => ContactPerson, { onDelete: "CASCADE" })
  person: ContactPerson;
}
