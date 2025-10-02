/* jQuery lightbox */
(function ($) {
    var $overlay = $(
        '<div id="lightbox" role="dialog" aria-modal="true" aria-label="Image preview">' +
        '<div class="lb-frame">' +
        '<button class="lb-close" aria-label="Close">×</button>' +
        '<img alt="Cliff image preview" />' +
        '</div>' +
        '</div>'
    ).appendTo('body');

    var $img = $overlay.find('img');

    // OPEN
    $('.cliff-grid .cliff-card img').on('click', function (e) {
        e.preventDefault();
        $img.attr('src', this.src);
        $('body').addClass('no-scroll');
        $overlay.addClass('show');              /* show centered */
    });

    // CLOSE (backdrop or X)
    $overlay.on('click', function (e) {
        if ($(e.target).is('#lightbox, .lb-close')) {
            $overlay.removeClass('show');
            $('body').removeClass('no-scroll');
        }
    });

    // CLOSE (ESC)
    $(document).on('keydown', function (e) {
        if (e.key === 'Escape') {
            $overlay.removeClass('show');
            $('body').removeClass('no-scroll');
        }
    });
})(jQuery);
