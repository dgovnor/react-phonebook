import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    '&.disabled': {
      opacity: 0.3,
    },
  },
  input: {
    borderRadius: '4px',
    marginTop: 0,
    padding: '0.5rem',
    width: '100%',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#00955C',
    backgroundColor: '#ffffff',
  },

  compact: {
    paddingTop: '0.18rem',
    paddingBottom: '0.18rem',
  },
});
