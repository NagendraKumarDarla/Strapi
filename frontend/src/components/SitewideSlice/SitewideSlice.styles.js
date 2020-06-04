const backgroundTheme = ({ background }) => {
  switch (background) {
    case 'dark1':
      return {
        backgroundColor: '#4c4c4c',
        color: '#fff',
      };
    case 'dark2':
      return {
        backgroundColor: '#404040',
        color: '#fff',
      };
    case 'dark3':
      return {
        backgroundColor: '#333',
        color: '#fff',
      };
    case 'light1':
      return {
        backgroundColor: '#fff',
        color: '#333'
      };
    case 'light2':
      return {
        backgroundColor: '#F7F7F7',
        color: '#333',
      };
    case 'blue':
      return {
        backgroundColor : '#007AAA',
        color: '#fff',
      };
    default:
      return '';
  }
};

const padding = ({ padding, theme }) => {
  switch (padding) {
    case 'padding1':
      return {
        paddingTop: theme.spacingDefaults.spacing2,
        paddingBottom: theme.spacingDefaults.spacing5,
      };
    case 'padding2':
      return {
        paddingTop: theme.spacingDefaults.spacing2,
        paddingBottom: theme.spacingDefaults.spacing5,
        [theme.breakpoints.up('sm')]: {
          paddingTop: theme.spacingDefaults.spacing7,
          paddingBottom: theme.spacingDefaults.spacing10,
        },
      };
    default:
      return '';
  }
};

export const styles = (theme) => ({
  root: (props) => ({
    ...padding({ padding: props.padding, theme: theme }),
    ...backgroundTheme({ background: props.background }),
  }),
});
