// Show partners footer using Javascript codes
(function buildPartners() {
    var data = [
        { src: 'images/partners/partner-bustour.png', alt: 'Partner Bus Tours' },
        { src: 'images/partners/partner-cabinrental.png', alt: 'Partner Cabin Rental' },
        { src: 'images/partners/partner-campingadv.png', alt: 'Partner Camping Adventure' },
        { src: 'images/partners/partner-collegetours.png', alt: 'Partner College Tours' },
        { src: 'images/partners/partner-rentalbike.png', alt: 'Partner Bike Rentals' },
        { src: 'images/partners/partner-tourgroup.png', alt: 'Partner Tour Group' }
    ];
    var list = document.getElementById('partners');
    if (!list) return;
    for (var i = 0; i < data.length; i++) {
        var li = document.createElement('li');
        li.className = 'partner';
        var img = document.createElement('img');
        img.setAttribute('src', data[i].src);
        img.setAttribute('alt', data[i].alt);
        li.appendChild(img);
        list.appendChild(li);
    }
})();