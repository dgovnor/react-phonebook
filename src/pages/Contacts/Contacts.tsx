import React, { FC, useEffect, useState } from 'react';
import { fireStore } from '../../components/Firebase';
import { getInitials } from '../../utils/getInitials';
import { useStyles } from './useStyles';

export const Contacts: FC = () => {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [contacts, setContacts] = useState<any[]>([]);
  const fetchBlogs = async () => {
    const response = fireStore.collection('contacts');
    const data = await response.get();
    data.docs.forEach((item) => {
      setContacts([item.data()]);
    });
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  const tableHeader = [
    'Name', 'Phone number', 'Email Address',
  ];
  return (
    <div className={classes.contactContainer}>
      <div className={classes.sidePanel}>
        <div className={classes.create}>
          +Create contact
        </div>
        <div className={classes.contacts}>
          Contacts
        </div>
      </div>
      <div className={classes.tableContainer}>
        <table className={classes.table}>
          <tr>
            {tableHeader.map((header) => (
              <th className={classes.tableHeader}>
                {header}
              </th>
            ))}

          </tr>
          <tr>
            <td style={{ opacity: '0.5' }}>
              {' Contacts (11)'}
            </td>
          </tr>
          {contacts.map((contact) => (
            <tr className={classes.tableBody}>
              <td className={classes.tableRow}>
                <div style={{ display: 'flex' }}>
                  <div className={classes.tableImage}>
                    {getInitials('John Smith') }
                  </div>
                  <p style={{ padding: '8px' }}>{contact.address}</p>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
Contacts.displayName = 'Contacts';
