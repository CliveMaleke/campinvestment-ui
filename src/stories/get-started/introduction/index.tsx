// Vendors
import React from 'react';
import Box from '@mui/material/Box';

// UI
import colors from '../../../components/variables/colors';

// Assets
import Intro from './intro.svg';
import Feature1 from './feature1.svg';
import Feature2 from './feature2.svg';
import Feature3 from './feature3.svg';

const Introduction = () => {
  return (
    <>
      <Box
        component="section"
        sx={{
          height: '50vh',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            '& h1': {
              letterSpacing: '0.05rem',
              fontSize: '3rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              color: '#1fafed',
              margin: 0,
            },
            '& p': {
              fontSize: '1.15rem',
              lineHeight: 1.8,
              padding: '1.6rem 0 2.2rem 0',
            },
          }}
        >
          <h1>
            Tokenomy{' '}
            <Box
              component="span"
              sx={{
                fontWeight: 300,
                color: colors.black90,
              }}
            >
              UI
            </Box>
            <Box
              component="span"
              sx={{
                opacity: 0.4,
                fontSize: '0.2em',
                fontWeight: 'normal',
                fontStyle: 'italic',
                textTransform: 'initial',
                color: colors.black70,
              }}
            >
              v1.0.0
            </Box>
          </h1>
          <p>
            Tokenomy User Interface Kit provides you with guidelines, components
            and templates to boost the user experience of your products.
          </p>
        </Box>
        <div>
          <img alt="intro" width={500} src={Intro} />
        </div>
      </Box>
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(-190deg, #edf1f3 0%, #ffffff 100%)',
          clipPath: 'polygon(0 150px, 100% 0, 100% 100%, 0% 100%)',
          marginTop: '-7%',
          paddingTop: '13%',
        }}
      >
        <div style={{ margin: '4rem 0' }}>
          <Box
            sx={{
              padding: 5,
              '& h3': {
                marginTop: '2rem',
                fontSize: '2.25rem',
                fontWeight: 300,
                marginBottom: '1.5rem',
              },
            }}
          >
            <img alt="feature 1" src={Feature1} style={{ width: 200 }} />
            <h3>About Tokenomy UI</h3>
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
          </Box>
          <Box
            sx={{
              padding: 5,
              '& h3': {
                marginTop: '2rem',
                fontSize: '2.25rem',
                fontWeight: 300,
                marginBottom: '1.5rem',
              },
            }}
          >
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
          </Box>
          <Box
            sx={{
              padding: 5,
              '& h3': {
                marginTop: '2rem',
                fontSize: '2.25rem',
                fontWeight: 300,
                marginBottom: '1.5rem',
              },
            }}
          >
            <img
              alt="feature 3"
              src={Feature3}
              style={{ width: 200 }}
            />
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
          </Box>
        </div>
      </Box>
    </>
  );
};

export default Introduction;
