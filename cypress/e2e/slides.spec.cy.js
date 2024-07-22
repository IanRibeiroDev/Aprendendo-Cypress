context('Ticketbox', () => {

    beforeEach(() => {
        cy.visit('https://ticket-box.s3.eu-central-1.amazonaws.com/index.html');
    });

    it('Prática 1', () => {
        let firstName = "Ian"
        let lastName = "Ribeiro de Mendonça"
        
        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('fieldset p').invoke('text').then((text) => {
            expect(text.split(',')[1].trimStart()).to.eq(firstName + " " + lastName)
        });
    });

    it('Prática 1 versão slide corrijida', () => {
        const firstName = "Rafael";
        const lastName = "Anderson";
        const fullName = `${firstName} ${lastName}`;

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get('#ticket-quantity').select("2")
        cy.get('#vip').click();

        

        cy.get(".agreement p").should("contain",`I, ${fullName}, wish to buy 2 VIP tickets. I understand that all ticket sales are final.`);
    });

    it('Prática 2', () => {
        let firstName = "Ian"
        let lastName = "Ribeiro de Mendonça"
        let email = "ianribeiro@gmail.com"
        
        cy.preencherFormularioTicketbox(firstName, lastName, email)
        cy.get('button[type=submit]').click();

        cy.get('.success p').invoke('text').then((text) => {
            expect(text).to.eq('Ticket(s) successfully ordered.')
        });
    });
});


context('httpbin', () => {
    
    it('Prática 3', () => {
        cy.request({
            method: 'GET',
            url: 'https://httpbin.org/get',
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.statusText).to.eq("OK")
        });
    });

    it('Prática 4', () => {
        let nome = "Ian"
        let idade = 24

        cy.request({
            method: 'POST',
            url: 'https://httpbin.org/post',
            body: {
                "name": nome,
                "age": idade
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.statusText).to.eq("OK")
            cy.log(response.body.data)
            expect(JSON.parse(response.body.data).name).to.eq(nome)
            expect(JSON.parse(response.body.data).age).to.eq(idade)
        });;
    });
});

context('GitHub', () => {
    
});

context('CAC TAC', () => {
    
    beforeEach(() => {
        cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html');    
    });

    it('Desafio', () => {
        cy.preencherFormularioCacTac("Ian", "Ribeiro de Mendonça", "ianribeiro@gmail.com")
        cy.get('button[type=submit]').click();
        cy.get('.success[style="display: block;"]', {timeout: 1000});
    });
});