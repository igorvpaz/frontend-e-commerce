
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              if (index > 2) return '';
              return `<span class="${className}"></span>`;
            }
          },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        },
    });
});


const btn = document.querySelector('#btn-search');

btn.addEventListener('click', function(e) {
    e.preventDefault();

    const search = document.querySelector('#search-desktop').value;

    if (search === '') {
        window.alert('Por favor, insira um termo de pesquisa.');
        return;
    }
    else{
    window.alert('Você pesquisou por: ' + search);
    }
});


function toggleBuy(button) {
    
    let container = document.createElement('div');
    container.classList.add('d-flex', 'align-items-center', 'justify-content-between', 'w-100', 'border', 'rounded', 'p-2');

    let btnMinus = document.createElement('button');
    btnMinus.classList.add('btn', 'btn-outline-secondary', 'px-3');
    btnMinus.innerHTML = "-";
    btnMinus.onclick = function() {
        let count = parseInt(spanCount.innerText);
        if (count > 1) {
            spanCount.innerText = count - 1;
        } else {
            container.replaceWith(button);
        }
    };

    let spanCount = document.createElement('span');
    spanCount.innerText = "1";
    spanCount.classList.add('text-center', 'fw-bold', 'flex-grow-1');

    let btnPlus = document.createElement('button');
    btnPlus.classList.add('btn', 'btn-outline-secondary', 'px-3');
    btnPlus.innerHTML = "+";
    btnPlus.onclick = function() {
        let count = parseInt(spanCount.innerText);
        spanCount.innerText = count + 1;
    };

    container.appendChild(btnMinus);
    container.appendChild(spanCount);
    container.appendChild(btnPlus);

    container.style.height = button.offsetHeight + "px";

    button.replaceWith(container);
}


function toggleCustomDropdown(event) {
    event.preventDefault();
    const dropdown = document.getElementById('customDropdown');
    dropdown.classList.toggle('show');
  }

  // Fecha se clicar fora
  document.addEventListener('click', function (e) {
    const dropdown = document.getElementById('customDropdown');
    if (!e.target.closest('.nav-item') && !e.target.closest('#customDropdown')) {
      dropdown.classList.remove('show');
    }
  });
