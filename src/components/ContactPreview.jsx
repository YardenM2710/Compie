import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { Link, useHistory } from 'react-router-dom';

export function ContactPreview({ contact, removeContact }) {
  const history = useHistory();
  function onRemoveContact(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    removeContact(contact._id);
  }

  function onEditContact(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    history.push(`/contact/edit/${contact._id}`);
  }

  return (
    <div>
      <List>
        <Link to={`/contact/${contact._id}`}>
          <ListItem
            className="list-item"
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={onRemoveContact}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>{contact.name.charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={contact.name} />
            {/* <IconButton edge="end" aria-label="delete" onClick={onEditContact}>
              <EditIcon />
            </IconButton> */}
          </ListItem>
        </Link>
        <Divider></Divider>
      </List>
    </div>
  );
}
