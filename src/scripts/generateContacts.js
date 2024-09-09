import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";


const generateContacts = async (number) => {
    try {
        const existingContacts = await readContacts();
        const newContacts = [];

        for (let i = 0; i < number; i++) {
            newContacts.push(createFakeContact());
        }

        const updatedContacts = [...existingContacts, ...newContacts];
        await writeContacts(updatedContacts);

        console.log(`You have successfully added ${number} new contacts!`);

    } catch (error) {
        console.error('Error while adding contacts' ,error);

    }
};



generateContacts(5);
