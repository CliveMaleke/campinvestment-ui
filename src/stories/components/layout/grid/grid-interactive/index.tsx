// Vendors
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';
import {
  GridDirection,
  GridJustification,
  GridItemsAlignment,
} from '@material-ui/core/Grid';

// Components
import Box from '@components/layout/Box';
import Grid from '@components/layout/Grid';
import FormLabel from '@components/inputs/FormLabel';
import FormControlLabel from '@components/inputs/FormControlLabel';
import RadioGroup from '@components/inputs/RadioGroup';
import Radio from '@components/inputs/Radio';

interface DefaultProps {
  bgcolor: string;
  p: number;
  m: number;
  height: string;
  textAlign: string;
}

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    marginTop: 10,
  },
}));

const defaultProps: DefaultProps = {
  bgcolor: '#cfe8fc',
  p: 2,
  m: 1,
  height: '100%',
  textAlign: 'center',
};

const GridInteractive: React.FC = () => {
  const [direction, setDirection] = React.useState<GridDirection>('row');
  const [justify, setJustify] = React.useState<GridJustification>('flex-start');
  const [alignItems, setAlignItems] =
    React.useState<GridItemsAlignment>('flex-start');
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid
          container
          direction={direction}
          justifyContent={justify}
          alignItems={alignItems}
        >
          <Grid item>
            <Box
              {...defaultProps}
              style={{ paddingTop: 10, paddingBottom: 10 }}
            >
              Cell 1
            </Box>
          </Grid>
          <Grid item>
            <Box
              {...defaultProps}
              style={{ paddingTop: 20, paddingBottom: 20 }}
            >
              Cell 2
            </Box>
          </Grid>
          <Grid item>
            <Box
              {...defaultProps}
              style={{ paddingTop: 30, paddingBottom: 30 }}
            >
              Cell 3
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.control}>
          <Grid container>
            <Grid item>
              <FormLabel>direction</FormLabel>
              <RadioGroup
                name="direction"
                aria-label="direction"
                value={direction}
                onChange={(event) =>
                  setDirection(event.target.value as GridDirection)
                }
                row
              >
                {['row', 'row-reverse', 'column', 'column-reverse'].map(
                  (value) => (
                    <FormControlLabel
                      key={value}
                      value={value}
                      control={<Radio />}
                      label={value}
                    />
                  ),
                )}
              </RadioGroup>
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: 20 }}>
            <Grid item>
              <FormLabel>justifyContent</FormLabel>
              <RadioGroup
                name="justifyContent"
                aria-label="justifyContent"
                value={justify}
                onChange={(event) =>
                  setJustify(event.target.value as GridJustification)
                }
                row
              >
                {[
                  'flex-start',
                  'center',
                  'flex-end',
                  'space-between',
                  'space-around',
                  'space-evenly',
                ].map((value) => (
                  <FormControlLabel
                    key={value}
                    value={value}
                    control={<Radio />}
                    label={value}
                  />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: 20 }}>
            <Grid item>
              <FormLabel>alignItems</FormLabel>
              <RadioGroup
                name="alignItems"
                aria-label="alignItems"
                value={alignItems}
                onChange={(event) =>
                  setAlignItems(event.target.value as GridItemsAlignment)
                }
                row
              >
                {[
                  'flex-start',
                  'center',
                  'flex-end',
                  'stretch',
                  'baseline',
                ].map((value) => (
                  <FormControlLabel
                    key={value}
                    value={value}
                    control={<Radio />}
                    label={value}
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

export default GridInteractive;
