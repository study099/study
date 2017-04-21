// Сделай поле из белых клеточек (клеточка может иметь размер около 28×28 пикселей). 
// При клике на клеточку она должна менять цвет на черный. Под таблицей должна быть кнопка «поменять цвета». 
// При ее нажатии все цвета клеточек меняются на противоположные.

// Делать поле удобно с помощью элемента <table>. Саму таблицу надо не вставить в исходный код, а сгенерировать 
// и добавить в DOM страницы яваскриптом.

// У тебя может возникнуть желание поставить обработчик события на каждую клеточку. Не делай так, это неэффективно, 
// достаточно одного обработчика на всю таблицу (так как события всплывают от элемента вверх по дереву DOM и можно 
// 	ловить все события одним обработиком на таблице).

// Чтобы поменять цвета всех клеточек сразу, необязательно обходить их в цикле. Если помечать нажатые клетки 
// определенным классом, то перекрасить их все одновременно можно, поменяв класс на самой таблице.

// Ты можешь заметить, что событие click срабатывает после отпускания левой кнопки мыши, а mousedown — при нажатии 
// (любой) и с ним получается ощущение более быстрого отклика.

// Ты можешь заметить, что, если быстро кликать по клеткам, браузер пытается выделять ячейки таблицы, и выглядит это 
// некрасиво. Если это так, то надо средствами CSS3 сделать таблицу невыделяемой.
var table = document.getElementById('tbl');

var Table = {
    rows: 8,
    cols: 8,

    initTable: function () {
        for (var i = 0; i < Table.rows; i++) {
            var tr = document.createElement('tr');
            table.appendChild(tr);

            for (var j = 0; j < Table.cols; j++) {
                var td = document.createElement('td');
                td.className = 'td-white';
                tr.appendChild(td);
            }
        }
    }
}

Table.initTable();

table.onmousedown = function (event) {
    var target = event.target;

    if (target.tagName !== 'TD') {
        return;
    }

    changeColor(target);
}

function changeColor(node) {

    node.classList.remove('td-white');
    node.classList.add('td-black');
}

var changeColorButton = document.getElementById('change-colors');

function invertColors() {
    var td = document.getElementsByTagName('td');

    for (var obj of td) {
        if (obj.classList.contains('td-black')) {
            obj.classList.remove('td-black');
            obj.classList.add('td-white');
        }
        else {
            obj.classList.remove('td-white');
            obj.classList.add('td-black');
        }
    }
}

changeColorButton.addEventListener('mousedown', invertColors);