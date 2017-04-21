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

    $(table).on('mousedown', 'td', function () {
        if ($(this).hasClass('td-white')) {
            $(this).removeClass('td-white').addClass('td-black');
        }
        else {
            $(this).removeClass('td-black').addClass('td-white');
        }
    });

    function invertColors() {
        var tdBlack = $('td.td-black');
        var tdWhite = $('td.td-white');

        tdBlack.removeClass('td-black').addClass('td-white');
        tdWhite.removeClass('td-white').addClass('td-black');
    }

    $('#change-colors').on('mousedown', invertColors);
});
