describe('Покупка нового аватара', function () {

    it('search something', function () {
       cy.visit('https://pokemonbattle.ru/');   //Заходим на сайт
       cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); //Вводим верный логин
       cy.get('#password').type('USER_PASSWORD'); //Вводим верный пароль
       cy.get('.auth__button').click(); //Нажимаем войти
       cy.get('.header__btns > :nth-child(4)').click(); //Нажимаем на кнопку магазин
       cy.get('.available > button').first().click(); //Покупаем аватар тренера
       cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111'); //Вводим номер карты
       cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24'); //Вводим дату карты
       cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //Вводим CVV код
       cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('KUVARDINA DASHA'); //Вводим имя
       cy.get('.pay-btn') .click(); //Нажимаем оплатить
       cy.get('#cardnumber').type('56456'); //Вводим данные из смс
       cy.get('.payment__submit-button').click(); //Нажимаем отправить
       })
})