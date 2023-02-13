// Vendors
import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { GridSpacing as GridSpacingProps } from '@material-ui/core/Grid';

// Components
import Box from '@components/layout/Box';
import Grid from '@components/layout/Grid';
import FormLabel from '@components/inputs/FormLabel';
import FormControlLabel from '@components/inputs/FormControlLabel';
import RadioGroup from '@components/inputs/RadioGroup';
import Radio from '@components/inputs/Radio';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    marginTop: 10,
  },
}));

const defaultProps = {
  bgcolor: '#cfe8fc',
  height: 200,
  width: 100,
};

const GridSpacing = () => {
  const [spacing, setSpacing] = React.useState<GridSpacingProps>(2);
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacingProps);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="flex-start" spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Box {...defaultProps} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.control}>
          <Grid container>
            <Grid item>
              <FormLabel>Spacing</FormLabel>
              <RadioGroup
                name="spacing"
                aria-label="spacing"
                value={spacing.toString()}
                onChange={handleChange}
                row
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <FormControlLabel
                    key={value}
                    value={value.toString()}
                    control={<Radio />}
                    label={value.toString()}
                  />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default GridSpacing;
