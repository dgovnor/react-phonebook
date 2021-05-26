import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  contactContainer: {
    display: 'flex',
    margin: '64px 1rem 0 1rem',
  },
  sidePanel: {
    width: '19.5rem',
  },
  create: {
    background: '#00955C',
    borderRadius: '6px',
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '20px 0',
  },
  contacts: {
    background: '#E5FAF2',
    borderRadius: '6px',
    fontWeight: 700,
    marginTop: '12px',
    textAlign: 'center',
    padding: '20px 0',

  },
  tableContainer: {
    background: '#FFFFFF',
    border: '1px solid #E0E0E0',
    width: '100%',
    margin: '0 0.5rem 0 32px',
    padding: '69px 32px',
    borderRadius: '6px',
  },
  table: {
    width: '100%',
    '& td': {
      paddingTop: '24px',
    },
  },
  tableHeader: {
    padding: '24px 8px',
    textAlign: 'left',
    fontSize: '20px',
    borderBottom: '1px solid #E0E0E0',
  },
  tableBody: {
    padding: '2px',

  },
  tableRow: {
    padding: '2px',

  },

  tableImage: {
    height: '35px',
    width: '35px',
    backgroundColor: '#00955C',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: '20px',
    padding: '2px',
    borderRadius: '50%',
  },

});
