import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
    try {
        const contacts = await readContacts();

        if (contacts.length === 0) {
        console.log('Please add contact before deleting!');
        return;
        }
    // contacts.splice(-1, 1);
    // await writeContacts(contacts);

    // const newArr = contacts.slice(1, contacts.length - 1);
    // await writeContacts(newArr);

    // contacts.length = contacts.length - 1;

        contacts.pop();
        await writeContacts(contacts);
        console.log('Last contact was removed');

    } catch (error) {
        console.error('Error while removing last contact', error);
    }
};

removeLastContact();
