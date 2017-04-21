$(document).ready(function () {
    var table = document.getElementById('tbl');

    var Table = {
        rows: 8,
        cols: 8,

        initTable: function () {
            for (var i = 0; i < Table.rows; i++) {
                var tr = $('<tr>');

                $(table).append(tr);

                for (var j = 0; j < Table.cols; j++) {
                    var td = $('<td>');

                    $(td).addClass('td-white');
                    $(tr).append(td);
                }
            }
        }
    }

    Table.initTable();

    $(table).on('mousedown','td', function () {
        if ($(this).hasClass('td-white')) {
            $(this).removeClass('td-white');
            $(this).addClass('td-black');
        }
        else{
            $(this).removeClass('td-black');
            $(this).addClass('td-white');
        }
    });

    // $(table).delegate('td', 'mousedown', function () {
    //     if ($(this).hasClass('td-white')) {
    //         $(this).removeClass('td-white');
    //         $(this).addClass('td-black');
    //     }
    //     else {
    //         $(this).removeClass('td-black');
    //         $(this).addClass('td-white');
    //     }
    // });

    function invertColors() {
        var td = $('td');

        if (td.hasClass('td-black')) {
            td.removeClass('td-black');
            td.addClass('td-white');
        }
        else {
            td.removeClass('td-white');
            td.addClass('td-black');
        }
    }

    $('#change-colors').on('mousedown', invertColors);
});
