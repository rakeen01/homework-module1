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


/* ============================
 * build modal content
 * ============================ */
(function () {
    // Utility: make a list of selected cells in "Activity at Cliff" text format
    function collectSelected() {
        var out = [];
        // Accept either .selected or .active (covers previous weeks)
        var picked = document.querySelectorAll('#activitiesTable td.selected, #activitiesTable td.active');

        picked.forEach(function (td) {
            // Column header (cliff)
            var colIndex = td.cellIndex;
            var cliff = td.closest('table').tHead.rows[0].cells[colIndex].textContent.trim();

            // Row header (activity) — first th in the row
            var act = td.parentElement.querySelector('th, td').textContent.trim();

            var txt = td.textContent.trim();
            if (txt && txt.toLowerCase() !== 'not available') {
                out.push(txt + ' at ' + cliff);
            } else {
                // If cell has no custom text, fall back to "Activity at Cliff"
                out.push(act + ' at ' + cliff);
            }
        });

        return out;
    }

    // When the modal is about to show, populate the list
    $('#activitiesModal').on('show.bs.modal', function () {
        var items = collectSelected();
        var $body = $(this).find('.modal-body');

        if (!items.length) {
            $body.html('<p class="mb-0 text-muted">No activities selected.</p>');
            return;
        }

        var html = '<ul class="pl-3 mb-0">';
        items.forEach(function (s) { html += '<li>' + s + '</li>'; });
        html += '</ul>';
        $body.html(html);
    });

})();
