import Contact from "../Contact/Contact";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={nanoid()}>
          <Contact name={contact.name} number={contact.number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
