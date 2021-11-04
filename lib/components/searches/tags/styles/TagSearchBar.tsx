import { styled } from '@mui/material/styles';

const TagSearchBar = styled('form')(({ theme }) => ({
  width: '125%',
  maxWidth: '800px',
  display: 'flex',
  justifyContent: 'center',
  justifySelf: 'flex-start',
  alignItems: 'center',
  alignSelf: 'center',
  transform: 'scale(.7)',
  borderRadius: '.5rem',
  border: `.5px solid ${theme.palette.grey[400]}`,
  backgroundColor: '#fff',
  [theme.breakpoints.up('tabletSm')]: {
    marginTop: '.5rem',
    width: '100%',
  },
  [theme.breakpoints.up('desktopMd')]: {
    marginTop: '1rem',
    marginBottom: '.35rem',
  },
  '& > button.MuiButtonBase-root:nth-of-type(1)': {
    flex: '0 1 10%',
    padding: '10px',
    '&:active': {
      transition: 'all .4s',
      transform: 'translateY(-1.5px)',
      backgroundColor: theme.palette.grey[500],
    },
  },
  '& > button.MuiIconButton-root:nth-of-type(1)': {
    '&:focus': {
      backgroundColor: theme.palette.grey[300],
    },
  },
  '& > hr.MuiDivider-root': {
    height: '30px',
    width: '2px',
    marginRight: '10px',
    [theme.breakpoints.up('mobileLg')]: {
      marginRight: '20px',
    },
  },
  '& > button.MuiButtonBase-root:nth-of-type(2)': {
    flex: '0 1 10%',
    padding: '10px',
    borderRadius: '0 .5rem .5rem 0',
    backgroundColor: theme.palette.grey[300],
    '&:active': {
      transition: 'all .4s',
      transform: 'translateY(-1.5px)',
      backgroundColor: theme.palette.grey[500],
    },
  },
}));

export default TagSearchBar;
