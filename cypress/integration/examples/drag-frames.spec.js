/// <reference types="cypress" />

context('Window Frame Dragging', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('drags the divider in the full-width window ', () => {
        cy.get('.WindowSplitter-Divider')
            .first()
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove', { clientX: 300 })
            .trigger('mouseup', { force: true });

        cy.get('.WindowSplitter-FrameInner')
            .first()
            .should('have.css', 'width', '299.390625px');
    });

    it('drags the divider in the partial-width window', () => {
        cy.get('.WindowSplitter-Divider')
            .last()
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove', { clientX: 300 })
            .trigger('mouseup', { force: true });

        cy.get('.WindowSplitter-FrameInner')
            .eq(2)
            .should('have.css', 'width', '175.53125px');
    });
});
