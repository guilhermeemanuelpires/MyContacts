import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { ContactPerson } from "../entities/contactPerson.entity";
import { ContactList } from "../entities/contactList.entity";

class ContactListController {

    public async Find(req: Request, res: Response) {
        try {
            const contact = await getRepository(ContactPerson)
                .createQueryBuilder("contatos")
                .leftJoinAndSelect("contatos.contact", "contact_list")
                .getMany();

            res.send(contact);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async Create(req: Request, res: Response) {
        try {
            const person = req.body;
            
            await getRepository(ContactPerson).save(person);

            if (!!person.contatos) {
                const ID = person.id;
                for (let index in person.contatos) {
                    const contato = {
                        contato: person.contatos[index].contato,
                        person: ID
                    };
                    await getRepository(ContactList).save(contato);
                }
            }

            res.status(200).send({ message: 'Contato incluido com sucesso!' });

        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async Delete(req: Request, res: Response) {

        try {
            const id = req.params.id;

            const contact = await getRepository(ContactPerson).findOne(id);

            if (!contact) {
                res.status(404).send({ message: 'contato não encontrado!' });
            } else {
                await getRepository(ContactPerson).delete(id);
                res.status(200).send({ message: 'Contato deletado com sucesso' });
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

}

export default new ContactListController();
