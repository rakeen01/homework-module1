
$(document).ready(function () {

    // Mark cells that are selectable (all body <td> except “Not Available”)
    $('tbody td').each(function () {
        if ($(this).text().trim().toLowerCase() !== 'not available') {
            $(this).addClass('selectable');
        }
    });

    // Toggle highlight on click; multiple cells can be selected
    $('tbody td.selectable').on('click', function () {
        $(this).toggleClass('selected');
    });

});
