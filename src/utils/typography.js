import Typography from 'typography';
import altonTheme from 'typography-theme-alton';

altonTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  a: {
    color: 'white',
    textDecoration: 'inherit',
  },
  'a:hover,a:active': {
    color: 'white',
    textDecoration: 'underline',
  },
});

const typography = new Typography(altonTheme);
const { rhythm, scale } = typography;
export { rhythm, scale, typography as default };
