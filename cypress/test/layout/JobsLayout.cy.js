import React from 'react';
import JobsLayout from '../../../components/layout/JobsLayout';
import MockRouter from '../../utils/router';

const post = {
  title: 'API Architect',
  date: '06/22/2021',
  category: 'Architect',
  closingOn: '08/22/2021',
  contact: 'https://apiture.com/careers/?gh_jid=5303104002',
  company: {
    name: 'Apiture',
    logoUrl: '/img/logos/companies/apiture.png',
  },
  toc: [
    {
      content: 'About the team',
      slug: 'about-the-team',
      lvl: 2,
      i: 0,
      seen: 0,
    },
    {
      content: 'TL;DR',
      slug: 'tldr',
      lvl: 2,
      i: 1,
      seen: 0,
    },
    {
      content: 'About the job',
      slug: 'about-the-job',
      lvl: 2,
      i: 2,
      seen: 0,
    },
    {
      content: 'About you',
      slug: 'about-you',
      lvl: 2,
      i: 3,
      seen: 0,
    },
    {
      content: 'Pay and benefits',
      slug: 'pay-and-benefits',
      lvl: 2,
      i: 4,
      seen: 0,
    },
  ],
  readingTime: 5,
  excerpt:
    'About the team\n\nWe are an open API banking platform, focused on creating cutting-edge technology for financial institutions.\nThe platform allows banks the fast and flexible deployment of features that',
  sectionSlug: '/jobs',
  sectionWeight: 0,
  id: 'pages/jobs/apiture-api-architect.md',
  isIndex: false,
  slug: '/jobs/apiture-api-architect',
};
describe('Blog Layout Component', () => {
  it('renders correct JobLayout component', () => {
    cy.mount(
      <MockRouter asPath="/jobs/apiture-api-architect">
        <JobsLayout post={post} />
      </MockRouter>
    );
    cy.get('[data-testid="JobsLayout-Heading"]').contains(post.title);
  });

  it('renders Error Page , if post is not found ' ,() => {
    cy.mount(
      <MockRouter>
        <JobsLayout />
      </MockRouter>
    )
    
  });
});
