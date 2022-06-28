import "cypress-real-events/support";

describe('Web TecSinapse', ()=> {

  beforeEach(() =>{
    cy.visit('https://www.tecsinapse.com.br/');
  })

  it('verifica carregamento pagina', ()=>{

   
    cy.contains('Tecnologia e inovação para garantir performance nas vendas e excelência nos resultados para montadoras e concessionárias').should('be.visible');
    cy.contains('Com produtos e serviços focados para o negócio automotivo, visamos entregar soluções completas que crescem junto com o nosso cliente e geram resultados competitivos.').should('be.visible');
    cy.contains('Quem somos').should('be.visible');
    cy.contains('TecSinapse Labs').should('be.visible');
    cy.contains('Blog').should('be.visible');


    cy.contains('Fale com um especialista').should('be.visible');

    // FALHA INTRODUZIDA PARA PRODUÇÃO DE EVIDENCIAS 
    cy.contains('Fale com um especialistas').should('be.visible');

  } );


  it('menu Quem somos', ()=>{

    cy.contains('Quem somos').realHover('mouse');
    cy.contains('A empresa').should('be.visible');
    cy.contains('Frentes de trabalho').should('be.visible');
    cy.contains('Visão de inovação').should('be.visible');

  } );

  it('menu Setor automotivo', ()=>{

    cy.contains('Setor automotivo').realHover('mouse');
    cy.contains('Atuação').should('be.visible');
    cy.contains('Clientes').should('be.visible');
    cy.contains('Soluções').should('be.visible');

  } );

  it('menu TecSinapse labs', ()=>{

    cy.contains('TecSinapse Labs').realHover('mouse');
    cy.contains('Zerobot').should('be.visible');
    cy.contains('Squad de Desenvolvimento').should('be.visible');
    cy.contains('Squad de Pesquisa Aplicada').should('be.visible');

  } );

  it('titulos em Scroll reveal', ()=>{

    cy.scrollTo(0, 600)
    cy.contains('Especialista no setor automotivo há 16 anos no mercado').should('be.visible');
    cy.scrollTo(0, 1400)
    cy.contains('Atuamos com').should('be.visible');
    cy.scrollTo(0, 2200)
    cy.contains('Paixão e know-how pela indústria automotiva').should('be.visible');

  } );

 

  it('Contatos Fale com um especialista', ()=>{

    cy.get('#navbarSupportedContent > .form-inline > .btn').click();
    cy.get('#contato > .modal-dialog > .modal-content > .modal-header > #contatoLabel').should('be.visible');
    cy.get('#contato > .modal-dialog > .modal-content > .modal-body > :nth-child(2) > :nth-child(2) > .wpcf7-form > :nth-child(3) > .text-right > .btn').click();
    cy.contains('Enviar mensagem').click();
    cy.get('#contato > .modal-dialog > .modal-content > .modal-body > :nth-child(2) > :nth-child(2) > .wpcf7-form > :nth-child(2) > :nth-child(1) > .wpcf7-form-control-wrap > .formulario-contato-campo').type("Jacqueline Oliveira")
    cy.get('#contato > .modal-dialog > .modal-content > .modal-body > :nth-child(2) > :nth-child(2) > .wpcf7-form > :nth-child(2) > :nth-child(2) > .wpcf7-form-control-wrap > .formulario-contato-campo').type("Autobots")
    cy.get('#contato > .modal-dialog > .modal-content > .modal-body > :nth-child(2) > :nth-child(2) > .wpcf7-form > :nth-child(2) > :nth-child(3) > .wpcf7-form-control-wrap > .formulario-contato-campo').type("JacOliver@autobots.com.br")

    // FALHA INTRODUZIDA PARA PRODUÇÃO DE EVIDENCIAS 
    cy.contains('FORMULÁRIO DE CONTATO XXX').should('be.visible');


   

  } );




  } );


  




