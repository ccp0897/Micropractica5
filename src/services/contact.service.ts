import { Contact } from "../models/contact.model";

export class ContactService{
    private contacts: Contact[]= [{"nombre": "Alberto", "organizacion":"TESLA", "movil":"666666666",correo:"alberto@tesla.com"}];

    constructor(){

    }

    addContact(value:Contact){
        this.contacts.push(value);
    }

    getContacts(){
        return this.contacts;
    }
    updateContat(value: Contact){

    }
    removeContact(value: Contact){
        
    }
}