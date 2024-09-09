import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    try {
        const existingContacts = await readContacts();
        const newContact = createFakeContact();
        const updatedContacts = [...existingContacts, newContact];
        await writeContacts(updatedContacts);
        console.log('Contact was successfully added');

    } catch (error) {
        console.error('Error while adding a contact', error);
    }

};

addOneContact();
