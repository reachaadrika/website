import { getEvents } from "../../../../../lib/staticHelpers";
import Eventindex from "../../../../../pages/community/events";
import meetings from "../../../../../config/meetings.json";
import MockApp from "../../../../utils/mockApp";


describe('CommunityIndexPage', () => {
  beforeEach(() => {
    cy.mount(<MockApp><Eventindex /></MockApp>)
  });

  it('displays the basic Events', () => {
    cy.get('[data-testid="Events-main"]').should('exist')
    cy.contains('Join an AsyncAPI event from anywhere in the world.')
    cy.get('[data-testid="Events-Button"]').should('exist')
    cy.get(`[href="https://calendar.google.com/calendar/u/3?cid=Y19xOXRzZWlnbG9tZHNqNm5qdWh2YnB0czExY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"]`).should('exist');
    cy.get(`[href="https://calendar.google.com/calendar/ical/c_q9tseiglomdsj6njuhvbpts11c%40group.calendar.google.com/public/basic.ics"]`).should('exist');
    cy.get('[data-testid="TextLink-href" ]').should('have.attr', 'href', 'https://github.com/asyncapi/community/blob/master/MEETINGS_ORGANIZATION.md')
  });

  it('displays recording card', () => {
    cy.get('[data-testid="RecordingsCard-img"]').should('exist');
    cy.get('[data-testid="Recordings-Link"]').should('have.attr','href','https://www.youtube.com/playlist?list=PLbi1gRlP7pijRiA32SU36hD_FW-2qyPhl')
    cy.get('[data-testid="Recordings-text"]').should('exist');
  });

  it('Community Meeting Card', () => {
    cy.get('[data-testid="EventTypesCard"]').should('exist')
      cy.get('[data-testid="Meeting-heading"]').should('exist')
      cy.get('[ data-testid="Meeting-paragraph"]').should('exist')
      cy.get('[ data-testid="Meeting-host"]').should('exist')
      cy.get('[ data-testid="Meeting-link"]').should('exist')
  });

  
  it('Other Meeting Cards', () => {
    cy.get('[data-testid="EventTypesCard-others"]').should('exist')
      cy.get('[data-testid="Meeting-heading"]').should('exist')
      cy.get('[ data-testid="Meeting-paragraph"]').should('exist')
      cy.get('[ data-testid="Meeting-host"]').should('exist')
      cy.get('[ data-testid="Meeting-link"]').should('exist')
  });

});