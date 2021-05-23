import React, { FC } from 'react';

export const Contacts: FC = () => (
  <div>
    <div>
      <div>
        +Create contact
      </div>
      <div>
        Contacts
      </div>
    </div>
    <div>
      <table>
        <tr>
          <th>
            Name
          </th>
          <th>
            Phone number
          </th>
          <th>
            Email Address
          </th>
        </tr>
        <tr>
          <td>
            John smith
          </td>
          <td>
            0791234567
          </td>
          <td>
            john@weskills.com
          </td>
        </tr>
      </table>
    </div>
  </div>
);
Contacts.displayName = 'Contacts';
