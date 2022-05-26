document.addEventListener('DOMContentLoaded', () => {
  const name = document.querySelector('.name');
  const card_number = document.querySelector('.card-number');
  const expire_date = document.querySelector('.expire-date');
  const security_number = document.querySelector('.security-number');
  const card_back = document.querySelector('.card-back');
  const card_front = document.querySelector('.card-front');

  const input_name = document.getElementById('name');
  const input_card_number = document.getElementById('card_number');
  const input_expire_date = document.getElementById('expire_date');
  const input_security_number = document.getElementById('security_number');

  //   document.addEventListener('input', function (evt) {
  //     console.log(evt);
  //   });

  input_name.onkeyup = (event) => {
    const value = event.target.value;

    if (value) {
      name.innerText = value;
    } else {
      name.innerText = 'John Doe';
    }
  };

  input_card_number.onkeyup = (event) => {
    const value = event.target.value;

    if (value) {
      card_number.innerText = value;
    } else {
      card_number.innerText = '**** **** **** 1234';
    }
  };

  input_expire_date.onkeyup = (event) => {
    let value = event.target.value;

    if (value) {
      if (value.length == 2 && event.key != 'Backspace') {
        value += '/';
        // value = value + '/'
        // 'Gabriel' + ' Novais'
        // 'Gabriel Novais'
      }

      expire_date.innerText = value;
      input_expire_date.value = value;
    } else {
      expire_date.innerText = '10/25';
    }
  };

  input_security_number.onkeyup = (event) => {
    const value = event.target.value;

    if (value) {
      security_number.innerText = value;
    } else {
      security_number.innerText = '420';
    }
  };

  // entrei no Input
  input_security_number.onfocus = () => {
    card_front.style.transform = 'rotateY(180deg)';
    card_back.style.transform = 'rotateY(0)';
  };

  // sai no Input
  input_security_number.onblur = () => {
    card_front.style.transform = 'rotateY(0)';
    card_back.style.transform = 'rotateY(-180deg)';
  };
});
