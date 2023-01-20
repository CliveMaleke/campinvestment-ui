declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    xs: true; 
    sm: true;
    md: true;
    lg: true;
    xl: true;
    // xl2: true;
  }
}

const MuiBreakpointsTheme = {
  values: {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    // xl2: 1536,
  },
};

export default MuiBreakpointsTheme;
