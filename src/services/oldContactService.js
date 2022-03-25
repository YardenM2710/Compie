import { storageService } from './storageService.js';
import { utilService } from './UtilService.js';

export const contactService = {
  query,
  save,
  remove,
  getById,
  getEmptyContact,
};

const STORAGE_KEY = 'contacts';

const gDefaultContacts = [
  {
    _id: utilService.makeId(),
    name: 'Ochoa Hyde',
    email: 'ochoahyde@renovize.com',
    phone: '+1 (968) 593-3824',
    src: 'user-1.png',
  },
  {
    _id: utilService.makeId(),
    name: 'Dominique Sote',
    email: 'ocDomyde@renbabaze.com',
    phone: '+1 (968) 523-32224',
    src: 'user-2.png',
  },
  {
    _id: utilService.makeId(),
    name: 'Floyd Rutledge',
    email: 'anaotheremail@renovize.com',
    phone: '+1 (331) 523-3331',
    src: 'user-3.png',
  },
  {
    _id: utilService.makeId(),
    name: 'Glenna Santana',
    email: 'someemail@renovize.com',
    phone: '+1 (331) 531-3124',
    src: 'user-4.png',
  },
  {
    _id: utilService.makeId(),
    name: 'Pinhas Hakatan',
    email: 'oDs23e@gmail.com',
    phone: '+1 (968) 523-32224',
    src: 'user-5.png',
  },
  {
    _id: utilService.makeId(),
    name: 'John Lennux',
    email: 'ffs12l@walla.com',
    phone: '+1 (331) 523-3441',
    src: 'user-6.png',
  },
  {
    _id: utilService.makeId(),
    name: 'Optimus Prime',
    email: 'differentmail@renovize.com',
    phone: '+1 (331) 531-3124',
    src: 'user-7.png',
  },
];

var gContacts = _loadContacts();

function query(filterBy) {
  let contactsToReturn = gContacts;
  if (filterBy) {
    var { text } = filterBy;
    contactsToReturn = gContacts.filter((contact) =>
      contact.name.toLowerCase().includes(text.toLowerCase())
    );
  }
  return Promise.resolve([...contactsToReturn]);
}

function getById(id) {
  const contact = gContacts.find((contact) => contact._id === id);
  return Promise.resolve({ ...contact });
}

function remove(id) {
  const idx = gContacts.findIndex((contact) => contact._id === id);
  gContacts.splice(idx, 1);
  if (!gContacts.length) gContacts = gDefaultContacts.slice();
  storageService.store(STORAGE_KEY, gContacts);
  return Promise.resolve();
}

function save(contactToSave) {
  if (contactToSave._id) {
    const idx = gContacts.findIndex(
      (contact) => contact._id === contactToSave._id
    );
    gContacts.splice(idx, 1, contactToSave);
  } else {
    contactToSave._id = utilService.makeId();
    gContacts.unshift(contactToSave);
  }
  storageService.store(STORAGE_KEY, gContacts);
  return Promise.resolve(contactToSave);
}

// function _update(contactToSave) {
//     const idx = gContacts.findIndex(contact => contact._id === contactToSave._id)
//     gContacts.splice(idx, 1, contactToSave)
//     return Promise.resolve(contactToSave)
// }

// function _add(contactToSave) {

// }

function getEmptyContact() {
  return {
    name: '',
    phone: '',
    email: '',
    src: './images/new-user.png',
  };
}

function _loadContacts() {
  let contacts = storageService.load(STORAGE_KEY);
  if (!contacts || !contacts.length) contacts = gDefaultContacts;
  storageService.store(STORAGE_KEY, contacts);
  return contacts;
}
