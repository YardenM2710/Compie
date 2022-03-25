import { useEffect } from 'react';
import { useState } from 'react';
import { contactService } from '../services/contactService';
import { ContactList } from '../components/ContactList';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';

export function ContactPage() {
  const [contacts, setContacts] = useState(null);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    loadContacts();
  }, []);

  useEffect(() => {
    loadContacts();
  }, [page]);

  async function loadContacts() {
    try {
      const { contacts, pages } = await contactService.query(page);
      setContacts(contacts);
      setTotalPages(pages);
    } catch (err) {
      console.log('Couldnt load contacts', err);
    }
  }

  const removeContact = async (contactId) => {
    try {
      await contactService.deleteContact(contactId);
      loadContacts();
    } catch (err) {
      console.log('Could remove contact', err);
    }
  };

  const onNextPage = () => {
    if (page >= totalPages) return;
    setPage(page + 1);
  };
  const onPrevPage = () => {
    if (page === 0) return;
    setPage(page - 1);
  };

  if (!contacts) return <div>Loading...</div>;

  return (
    <div>
      <div className="action-btns">
        <Button disabled={!(page !== 0)} onClick={onPrevPage}>
          Prev page
        </Button>
        <p>{page + 1}</p>

        <Button disabled={!(page < totalPages - 1)} onClick={onNextPage}>
          Next page
        </Button>

        {/* <ContactFilter onChangeFilter={this.onChangeFilter} /> */}
        {/* <IconButton edge="end" aria-label="delete">
          <AddIcon />
        </IconButton> */}
      </div>
      <ContactList removeContact={removeContact} contacts={contacts} />
    </div>
  );
}
