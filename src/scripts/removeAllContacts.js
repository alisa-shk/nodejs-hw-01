import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeAllContacts = async () => {
    try {
        const contacts = await readContacts();

        if (contacts.length === 0) {
        console.log('Please add contact before deleting!');
        return;
        }
        fs.writeFile(PATH_DB, '[]');
        console.log('All contacts were successfully removed');
    } catch (error) {
        console.error('Error while removing contacts!', error);

    }

};

removeAllContacts();
