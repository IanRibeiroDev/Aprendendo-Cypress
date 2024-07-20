/// <reference types="cypress" />

import { format, prepareLocalStorage } from '../support/utils.js'

context('Dev Finances Transação', () => {

    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/#', {
            onBeforeLoad: (win) => prepareLocalStorage(win)
        })
    });

    it('Cadastrar entrada', () => {
        // - entender o fluxo manualmente
        // - mapear os elementos que vamos interagir
        // - descrever as interações com o cypress
        // - adicionar as asserções que a gente precisa
        
        cy.get('#transaction .button').click();
        cy.get('#description').type("Mesada");
        cy.get('[step="0.01"]').type("12");
        cy.get('[type=date]').type("2024-07-19");
        cy.get('button').contains('Salvar').click();

        cy.get('#data-table tbody tr').should('have.length', 3);
    });

    it('Cadastrar saídas', () => {
        cy.get('#transaction .button').click();
        cy.get('#description').type("Despesa");
        cy.get('[step="0.01"]').type("-20");
        cy.get('[type=date]').type("2024-07-20");
        cy.get('button').contains('Salvar').click();

        cy.get('#data-table tbody tr').should('have.length', 3);
    });

    it('Remover entradas e saídas', () => {
        cy.get('#data-table tbody tr').should('have.length', 2);

        cy.get('td.description')
        .contains("Mesada")
        .parent()
        .find('img[onclick*=remove]')
        .click();

        cy.get('#data-table tbody tr').should('have.length', 1);
        
        cy.get('td.description')
        .contains("Suco Kapo")
        .siblings()
        .children('img')
        .click();

        cy.get('#data-table tbody tr').should('have.length', 0);
    });

    it('Validar saldo com diversas transações', () => {
        let soma = 0;
        cy.get('#data-table tbody tr')
        .each((el, i, list) => {
            cy.get(el)
            .find('td.income, td.expense')
            .invoke('text')
            .then(text => {
                soma += format(text);
            });
        });

        cy.get('#totalDisplay')
        .invoke('text')
        .then(text => {
            expect(format(text)).to.eq(soma);
        });
    });
});