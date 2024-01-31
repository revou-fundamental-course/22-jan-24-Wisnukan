document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.navlink');
  
    burgerMenu.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });
});

function validateForm() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let telepon = document.getElementById('telepon').value;
    let message = document.getElementById('message').value;

    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('teleponError').innerText = '';
    document.getElementById('pesanError').innerText = '';
    let errorPesan = document.getElementsByClassName('error');

    errorPesan[0].style.color = '';
    errorPesan[0].style.fontSize = '';
    document.getElementById('form').style.paddingTop = '';

    document.getElementById('name').style = '';
    document.getElementById('telepon').style = '';
    document.getElementById('email').style = '';
    document.getElementById('message').style = '';

    if (name === '') {
        document.getElementById('nameError').innerText = 'Nama harus diisi!';
        document.getElementById('name').style.border = '2px solid red';
        errorPesan[0].style.color = 'red';
        errorPesan[0].style.fontSize = '13px';
        document.getElementById('form').style.paddingTop = '0px';
        return false;
    }

    if (email === '') {
        document.getElementById('emailError').innerText = 'Email harus diisi!';
        document.getElementById('email').style.border = '2px solid red';
        document.getElementById('name').style.marginBottom = '0px';
        errorPesan[1].style.color = 'red';
        errorPesan[1].style.fontSize = '13px';
        document.getElementById('form').style.paddingTop = '0px';
        return false;
    }

    if (telepon === '') {
        document.getElementById('teleponError').innerText = 'Telepon harus diisi!';
        document.getElementById('telepon').style.border = '2px solid red';
        document.getElementById('email').style.marginBottom = '0px';
        errorPesan[2].style.color = 'red';
        errorPesan[2].style.fontSize = '13px';
        document.getElementById('form').style.paddingTop = '0px';
        return false;
    }

    if (message === '') {
        document.getElementById('pesanError').innerText = 'Tinggalkan pesan minimal 1 kalimat!';
        document.getElementById('message').style.border = '2px solid red';
        document.getElementById('telepon').style.marginBottom = '0px';
        errorPesan[3].style.color = 'red';
        errorPesan[3].style.fontSize = '13px';
        document.getElementById('form').style.paddingTop = '0px';
        return false;
    }

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telepon').value = '';
    document.getElementById('message').value = '';

    alert('Terimakasih! ' + name + ', pesan anda telah terkirim')
    return true;
}

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let isTransitioning = false;

    function nextSlide() {
        if (!isTransitioning) {
            isTransitioning = true;
            setTimeout(() => {
                const firstSlide = document.querySelector('.slide');
                slider.appendChild(firstSlide);
                slider.style.transform = 'translateX(0)';
                isTransitioning = false;
            }, 800);
        }
    }

    setInterval(nextSlide, 2000);
});

