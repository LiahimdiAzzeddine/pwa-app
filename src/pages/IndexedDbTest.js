import React, { useState, useEffect } from 'react';
import '../App.css';
import { initDB } from "react-indexed-db-hook";
import { DBConfig } from "../DBConfig";
import { useIndexedDB } from 'react-indexed-db-hook';

initDB(DBConfig);

export const IndexedDbTest = () => {
    const { add, getAll, deleteRecord } = useIndexedDB("people");
    
    const [persons, setPersons] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleClick = () => {
        if (!name || !email) {
            setError('Name and email are required.');
            return;
        }

        add({ name, email }).then(
            (event) => {
                console.log("ID Generated: ", event);
                setName('');
                setEmail('');
                setError('');
                // Mettre à jour l'état des personnes après l'ajout
                setPersons([...persons, { id: event, name, email }]);
            },
            (error) => {
                console.log(error);
                setError('Failed to add person to the database.');
            }
        );
    };

    const handleDelete = (id) => {
        deleteRecord(id).then(() => {
            setPersons(persons.filter(person => person.id !== id));
        }).catch(error => {
            console.log(error);
            setError('Failed to delete person from the database.');
        });
    };

    useEffect(() => {
        getAll().then((personsFromDB) => {
            setPersons(personsFromDB);
        }).catch(error => {
            console.log(error);
            setError('Failed to fetch data from the database.');
        });
    }, []);

    return (
        <div className="App-header3">
          <h2>Indexed-DB CRUD</h2>
          <div className="form-container">
          <form>
            <input
              className="input-field"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <input
              className="input-field"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <button className="button" onClick={handleClick}>Add</button>
            </form>
          </div>
          {error && <div>{error}</div>}
          <div>
            {persons.map((person) => (
              <div className="person-container" key={person.id}>
                <div className="person-details">
                  <span>Name: {person.name}</span>
                  <span>Email: {person.email}</span>
                </div>
                <button className="delete-button" onClick={() => handleDelete(person.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      );
};
