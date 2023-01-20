// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

// UI
import { black, blue50 } from '../../../components/variables/colors';

// Assets
import Intro from './intro.svg';
import Feature1 from './feature1.svg';
import Feature2 from './feature2.svg';
import Feature3 from './feature3.svg';

const useStyles = makeStyles({
  intro: {
    height: '40vh',
    display: 'flex',
    justifyContent: 'space-between',
  },
  introLeft: {
    maxWidth: 400,
    '& h1': {
      letterSpacing: '0.05rem',
      fontSize: '3rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      color: blue50,
      margin: 0,
    },
    '& p': {
      fontSize: '1.15rem',
      lineHeight: 1.8,
      padding: '1.6rem 0 2.2rem 0',
    },
  },
  introRight: {
    maxWidth: 500,
    '& img': {
      width: '100%',
    }
  },
  introName: {
    fontWeight: 300,
    color: black,
  },
  introVersion: {
    opacity: 0.4,
    fontSize: '0.2em',
    fontWeight: 'normal',
    fontStyle: 'italic',
    textTransform: 'initial',
    color: black,
  },
  features: {
    position: 'relative',
    background: 'linear-gradient(-190deg, #edf1f3 0%, #ffffff 100%)',
    clipPath: 'polygon(0 150px, 100% 0, 100% 100%, 0% 100%)',
    marginTop: '-7%',
    paddingTop: '13%',
  },
  featureItem: {
    padding: 30,
    '& h3': {
      marginTop: '2rem',
      fontSize: '2.25rem',
      fontWeight: 300,
      marginBottom: '1.5rem',
    },
  },
});

const Introduction = () => {
  const classes = useStyles();
  return (
    <>
      <section className={classes.intro}>
        <div className={classes.introLeft}>
          <h1>
            Tokenomy <span className={classes.introName}>UI</span>
            <span className={classes.introVersion}>v1.0.0</span>
          </h1>
          <p>
            Tokenomy User Interface Kit provides you with guidelines, components
            and templates to boost the user experience of your products.
          </p>
        </div>
        <div className={classes.introRight}>
          <img alt="intro" src={Intro} />
        </div>
      </section>
      <section className={classes.features}>
        <div style={{ margin: '4rem 0' }}>
          <div className={classes.featureItem}>
            <img alt="feature 1" src={Feature1} style={{ width: 200 }} />
            <h3>About {process.env.STORYBOOK_APP_NAME}</h3>
            <p>
              Tokenomy is a licensed digital asset platform that offers a wide
              range of crypto-based financial services such as fixed deposit,
              staking, dual currency deposit, lending, custody, and spot &
              futures trading.
            </p>
            <p>
              Building on this initiative, Tokenomy UI style guide emphasizes
              Tokenomy’s commitment to establish and build the brand.
            </p>
          </div>
          <div className={classes.featureItem}>
            <img alt="feature 2" src={Feature2} style={{ width: 200 }} />
            <h3>Purpose</h3>
            <p>
              The purpose of this project is to create a unified toolkit that is
              used by UX-designers and developers on their projects alike to
              ensure all Tokenomy branded projects are accessible, appealing and
              have a consistent look and feel across the board by following
              Tokenomy’s design and implementation guidelines.
            </p>
            <p>
              The guidelines contained in this guide are to be applied to all
              Tokenomy's digital products such as websites, web applications,
              internal systems and other.
            </p>
          </div>
          <div className={classes.featureItem}>
            <img alt="feature 3" src={Feature3} style={{ width: 200 }} />
            <h3>Toolkit</h3>
            <p>
              By unifiying design elements into reusable components, development
              will simplify and accelerate the development of these digital
              products.
            </p>
            <p>
              The guide is a living document created to meet the needs of
              Tokenomy’s front-end developers and designers. If there is a
              component or pattern you need or you have any other feedback,
              question or comment please contact us.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
