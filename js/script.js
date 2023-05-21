window.onload = function(){
const counter = document.querySelector('.header__counter'),
      cardBtns = document.querySelectorAll('.card-catalog__btn');
     
    document.addEventListener('click', e => {

        //отслеживание кликов на главной странице по товарам
        if(e.target.classList.contains('card-catalog__btn')){
            if(e.target.classList.contains('active')){
                e.target.textContent = 'добавить в корзину';
                decrement(counter);
                document.querySelector('.header__basket').href = '#!';
            }else{
                e.target.textContent = 'В корзине';
                increment(counter);
                document.querySelector('.header__basket').href = 'basket.html';
            }
            e.target.classList.toggle('active');
            counterVisible(counter);
        }
        //инкремент и декремент цены на странице корзины

    });

    // функция инкрементирования количества товаров в корзине
       const increment = (counter) => {
        counter.textContent++;
        counter.innerHTML = `<span> ${counter.textContent}</span>`;
      };
      // функция декрементирования количества товаров в корзине
       const decrement = (counter) => {
        counter.textContent--;
        counter.innerHTML = `<span> ${counter.textContent}</span>`;
      };
       const isZero = (counter) => {
        if(counter.textContent == 0){
            return true;
        }
        return false;
      }
       const counterVisible = (counter) => {
        if(!isZero(counter)){
            counter.classList.remove('no-visible');
        }
        else{
            counter.classList.add('no-visible');
        }
      }

      if(document.querySelector('.basket__card')){
        const cards = document.querySelectorAll('.basket__card');
              cards.forEach(card => {
                increment(counter);
              });
              counterVisible(counter);
      }

      const showPrice = () => {
        if(document.querySelector('.basket__price')){
          const prices = document.querySelectorAll('.basket__price');
          let sale = 0;
          prices.forEach(e => {
            sale += +e.textContent;
            console.log(sale);
          });
          document.querySelector('.basket__full-price').textContent = `Сумма ${sale} ₽ `;
        }
      };
      showPrice();
      
      
      function basketInc(counter){
        counter.forEach(elem => {
          elem.addEventListener('click', (e) => {
            if(e.target.classList.contains('basket__inc')){
              const sum = elem.querySelector('.basket__price');
              incrementBasket(elem.querySelector('.basket__number'), sum);
              showPrice();
            }
            if(e.target.classList.contains('basket__dec')){
              const sum = elem.querySelector('.basket__price');
              decrementBasket(elem.querySelector('.basket__number'), sum);
              showPrice();
            }
          });
        });
      }
      
      const incrementBasket = (counter, sum) => {
        let num = +counter.textContent;
        let sas = +sum.textContent / num;
        if(num < 10){
        num++;
        counter.innerHTML = `${num}`;
        sum.textContent = +sas * num;
        }
      };
      // функция декрементирования количества товаров в корзине
       const decrementBasket = (counter, sum) => {
        let num = +counter.textContent;
        let sas = +sum.textContent / num;
        if(num > 1){
        num--;
        counter.innerHTML = `${num}`;
        sum.textContent = +sas * num;
        }
      };

      basketInc(document.querySelectorAll('.basket__card'));
    };