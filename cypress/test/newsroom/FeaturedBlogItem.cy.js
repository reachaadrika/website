import { mount } from 'cypress/react'
import FeaturedBlogPost from '../../../components/newsroom/FeaturedBlogPost'
import { post } from '../mockData/blogmockData';
describe('Features Component', () => {
    it('renders without errors', () => {
        mount(<FeaturedBlogPost post={ post } />);
        cy.get('[data-testid="FeaturedBlogPostItem-Link"]').should('have.attr', 'href', post.slug)
        cy.get('[data-testid="FeaturedBlogPostItem-Img"]').should('have.attr', 'src', post.cover)
        cy.get('[data-testid="FeaturedBlogPost-type"]').should('exist', post.type)
        cy.contains(post.title)
        cy.contains(post.type)
        post.authors.forEach(author => {
            cy.contains(author.name)
        })
        cy.get('[data-testid="FeaturedBlog-Authorimg"]').should('exist', post.authors)
        cy.get('[ data-testid="FeaturedBlogPost-date"]').should('exist', post.date)
        cy.get('[ data-testid="FeaturedBlogPost-RT"]').should('exist', post.readingTime)


    });
});
