describe('Проверка авторизации', function () {

    it('Авторизация (верный логин, верный пароль)', function () {
       cy.visit('https://login.qa.studio/'); //Зашла на сайт
       cy.get('#mail').type('german@dolnikov.ru'); //Ввела верный логин
       cy.get('#pass').type('iLoveqastudio1'); //Ввела верный пароль
       cy.get('#loginButton').click(); //Нашала на кнопку войти
       cy.get('#messageHeader').contains('Авторизация прошла успешно'); //
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       })
    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); //Зашла на сайт
        cy.get('#forgotEmailButton').click(); //Нажала на кнопку "Забыли пароль"
        cy.get('#mailForgot').type('german@dolnikov.ru')
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })
    it('Авторизация (верный логин, неверный пароль)', function () {
            cy.visit('https://login.qa.studio/'); //Зашла на сайт
            cy.get('#mail').type('german@dolnikov.ru'); //Ввела верный логин
            cy.get('#pass').type('iLoveqastudio11'); //Ввела неверный пароль
            cy.get('#loginButton').click(); //Нашала на кнопку войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Ввела верный логин и неверный пароль
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            })
    it('Авторизация (неверный логин, верный пароль)', function () {
                cy.visit('https://login.qa.studio/'); //Зашла на сайт
                cy.get('#mail').type('german1@dolnikov.ru'); //Ввела неверный логин
                cy.get('#pass').type('iLoveqastudio1'); //Ввела верный пароль
                cy.get('#loginButton').click(); //Нашала на кнопку войти
                cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Ввела неверный логин и верный пароль
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                })
    it('Авторизация (логин без @, верный пароль)', function () {
                    cy.visit('https://login.qa.studio/'); //Зашла на сайт
                    cy.get('#mail').type('german1dolnikov.ru'); //Ввела логин без @
                    cy.get('#pass').type('iLoveqastudio1'); //Ввела верный пароль
                    cy.get('#loginButton').click(); //Нашала на кнопку войти
                    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Ввела логин без @, ввела верный пароль
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                    })
    it('Авторизация (верный логин, верный пароль)', function () {
                        cy.visit('https://login.qa.studio/'); //Зашла на сайт
                        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввела верный логин
                        cy.get('#pass').type('iLoveqastudio1'); //Ввела верный пароль
                        cy.get('#loginButton').click(); //Нашала на кнопку войти
                        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //
                        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                        })
})