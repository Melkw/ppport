document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript carregado e DOM pronto');

    const contato = document.getElementById('contato');
    const instagram = document.getElementById('instagram');
    const whatsapp = document.getElementById('whatsapp');
    const tiktok = document.getElementById('tiktok');
    const instagramFooter = document.getElementById('instagram-footer');
    const whatsappFooter = document.getElementById('whatsapp-footer');
    const tiktokFooter = document.getElementById('tiktok-footer');

    if (contato) {
        contato.onclick = function () {
            window.location.href = 'https://api.whatsapp.com/send/?phone=5511980354348&text&type=phone_number&app_absent=0';
        };
    } else {
        console.log('Elemento contato não encontrado');
    }

    if (instagram) {
        instagram.onclick = function () {
            window.location.href = 'https://www.instagram.com/andrey.rodrigues1/';
        };
    } else {
        console.log('Elemento instagram não encontrado');
    }

    if (whatsapp) {
        whatsapp.onclick = function () {
            window.location.href = 'https://api.whatsapp.com/send/?phone=5511980354348&text&type=phone_number&app_absent=0';
        };
    } else {
        console.log('Elemento whatsapp não encontrado');
    }

    if (tiktok) {
        tiktok.onclick = function () {
            window.location.href = 'https://www.tiktok.com';
        };
    } else {
        console.log('Elemento tiktok não encontrado');
    }

    if (instagramFooter) {
        instagramFooter.onclick = function () {
            window.location.href = 'https://www.instagram.com/andrey.rodrigues1/';
        };
    } else {
        console.log('Elemento instagram-footer não encontrado');
    }

    if (whatsappFooter) {
        whatsappFooter.onclick = function () {
            window.location.href = 'https://api.whatsapp.com/send/?phone=5511980354348&text&type=phone_number&app_absent=0';
        };
    } else {
        console.log('Elemento whatsapp-footer não encontrado');
    }

    if (tiktokFooter) {
        tiktokFooter.onclick = function () {
            window.location.href = 'https://www.tiktok.com';
        };
    } else {
        console.log('Elemento tiktok-footer não encontrado');
    }
});
