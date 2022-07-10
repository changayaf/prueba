import * as React from 'react';
import type { NextPage } from 'next';

// Material UI
import { Box, Button, Container, Grid, Stack, Typography }  from '@mui/material';

// Organisms
import Link from '@components/organisms/Link';

// Template
import Layout from '@components/template/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
            >
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Order alphabetically
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                  Write a program that allows you to enter a sentence and take each letter of each word and order them alphabetically and print the result. The original length of each word in the start phrase has to be maintained in the output phrase.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Box maxWidth="sm">
                  <Button variant="contained" component={Link} noLinkStyle href="/test1">
                    Go to test
                  </Button>
              </Box>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
            >
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Salary calculation
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Write a function that calculates the pay associated with the job, taking into account normal and after-hours work.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Box maxWidth="sm">
                  <Button variant="contained" component={Link} noLinkStyle href="/test2">
                    Go to test
                  </Button>
              </Box>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
            >
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Delete duplicates
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                There is an array of integers that can contain repeated elements. We want to obtain a new array with the elements of the first array but without repetitions. The resulting array must be ordered the same as the previous one. If there are repeated elements, only the last occurrence of that element in the original array should appear in the resulting array.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Box maxWidth="sm">
                  <Button variant="contained" component={Link} noLinkStyle href="/test3">
                    Go to test
                  </Button>
              </Box>
              </Stack>
            </Grid>
          </Container>
        </Box>
      <Link href="/about" color="secondary">
        Go to the about page
      </Link>
    </Layout>
  );
};

export default Home;
