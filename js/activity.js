$(document).ready(function () {
    // Mark cells that are selectable (all body <td> except “Not Available”)
    $('tbody td').each(function () {
        if ($(this).text().trim().toLowerCase() !== 'not available') {
            $(this).addClass('selectable');
        }
    });

    // Toggle highlight + update display box
    $('tbody td.selectable').on('click', function () {
        const $cell = $(this);
        const activityName = $cell.text().trim();

        // figure out which Cliff (column heading) this cell belongs to
        const colIndex = $cell.index(); // 1..4 map to West..South
        const siteName = $('thead th').eq(colIndex).text().trim();

        // full label to show in the list
        const label = `${activityName} at ${siteName}`;

        // toggle selected visual
        $cell.toggleClass('selected');

        // if selected, show box and append an entry
        if ($cell.hasClass('selected')) {
            $('#displaySelected').css('visibility', 'visible')
                .css('margin-top', '2em');

            // append only if not already present
            const exists = $('#result p').filter(function () {
                return $(this).text().trim() === label;
            }).length > 0;

            if (!exists) {
                $('#result').append(`<p>${label}</p>`);
            }
        } else {
            // remove the matching entry
            $('#result p').filter(function () {
                return $(this).text().trim() === label;
            }).remove();

            // if no entries left, hide the box and remove top space
            if ($('#result').find('p').length === 0) {
                $('#displaySelected').css('visibility', 'hidden')
                    .css('margin-top', '0');
            }
        }
    });
});
