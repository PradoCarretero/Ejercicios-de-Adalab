import "../styles/App.scss";
import contactList from "../data/contacts.json";
import { useState } from "react";

function App() {
  const [data, setData] = useState(contactList);
  const [search, setSearch] = useState("");
  const [newContact, setNewContact] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
  });

  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };
  const htmlData = data
    .filter(
      (oneContact) =>
        oneContact.name.toLowerCase().includes(search.toLowerCase()) ||
        oneContact.lastname.toLowerCase().includes(search.toLowerCase())
    )

    .map((contact, index) => (
      <li key={index} className="contact__item">
        <p className="contact__name">
          <label className="contact__label">Nombre:</label>
          {contact.name} {contact.lastname}
        </p>
        <p className="contact__phone">
          <label className="contact__label">Teléfono:</label>
          <a
            href={`tel: ${contact.phone}`}
            title="Pulsa aquí para llamar a Lola"
          >
            {contact.phone}
          </a>
        </p>
        <p className="contact__mail">
          <label className="contact__label">Email:</label>
          <a
            href={`mailto: ${contact.email}`}
            title="Pulsa aquí para escribir a Lola"
          >
            {contact.email}
          </a>
        </p>
      </li>
    ));

  const handleNewContact = (ev) => {
    setNewContact({
      ...newContact,
      //name: Josefa
      // phone: 60029
      // eso es lo que busco que pase en la siguiente línea
      [ev.target.id]: ev.target.value,
    });
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    setData([...data, newContact]);
    setNewContact({
      name: "",
      lastname: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <h1 className="header__title">Mi agenda de contactos</h1>
        <form>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar contactos por nombre"
            onChange={handleSearch}
            value={search}
          />
        </form>
      </header>

      <main>
        {/* contact list */}
        <ul className="contact__list">{htmlData}</ul>

        {/* new contact */}
        <form className="new-contact__form">
          <h2 className="new-contact__title">Añade un nuevo contacto</h2>
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            onChange={handleNewContact}
            value={newContact.name}
          />
          <input
            className="new-contact__input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Apellidos"
            onChange={handleNewContact}
            value={newContact.lastname}
          />
          <input
            className="new-contact__input"
            type="phone"
            name="phone"
            id="phone"
            placeholder="Teléfono"
            onChange={handleNewContact}
            value={newContact.phone}
          />
          <input
            className="new-contact__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleNewContact}
            value={newContact.email}
          />
          <input
            className="new-contact__btn"
            type="submit"
            value="Añadir"
            onClick={handleClick}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
