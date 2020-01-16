import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const About = ({ data }) => (
  <Layout>
    <Head pageTitle={data.teamJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.teamJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query teamQuery {
    teamJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
