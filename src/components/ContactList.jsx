import { useState } from 'react';
import { ContactPreview } from './ContactPreview';

export function ContactList({ contacts, onSelectContact, removeContact }) {
  const [page, setPage] = useState(1);
  return (
    <section className="contact-list">
      <h2>Your Contacts</h2>

      {contacts.map((contact) => (
        <ContactPreview
          removeContact={removeContact}
          onSelectContact={onSelectContact}
          contact={contact}
          key={contact._id}
        />
      ))}
    </section>
  );
}
