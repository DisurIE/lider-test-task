const counter = document.querySelector('.header__counter'),
      cardBtns = document.querySelectorAll('.card-catalog__btn');
     
    document.addEventListener('click', e => {
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