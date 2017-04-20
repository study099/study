// Дан узел DOM. Сделай функции hasClass(node, klass), addClass(node, klass), removeClass(node, klass), 
// которые позволяют проверить, есть ли у элемента заданный CSS-класс, добавить к нему класс (если его еще нет) 
// и удалить класс.Учти, что у элемента может быть несколько классов, которые могут быть разделены 
// одним или нескольким пробельными символами (пробел, \t, \f, \r, перевод строки \n — все эти символы 
// ищутся с помощью \s в регулярке). Ты можешь спросить, что за идиот придумал разделять классы с помощью 
// непонятных спецсимволов типа \f? Не знаю, но так написано в стандарте.
// Если удалены все классы, то удалять аттрибут class="" не надо, пусть остается.
function createNode(node, classes) {
    var nodeCreate = document.createElement(node);
    nodeCreate.className = classes;

    return nodeCreate;
}

function printToConsole(param) {
    console.log(param);
}

function hasClass(node, klass) {
    var pattern = /\s/;

    if (pattern.test(klass)) {
        return false;
    }

    return (' ' + node.className + ' ').indexOf(' ' + klass + ' ') !== -1;
}

function addClass(node, klass) {
    var previousClass = node.getAttribute('class');

    return node.className = previousClass === undefined || previousClass === '' ? klass : previousClass + ' ' + klass;
}

function removeClass(node, klass) {
    var classes = node.className.split(/\s/);

    if (!classes) {
        return 'Class doesn\'t exists';
    }

    if (classes.indexOf(klass) !== -1) {
        classes.splice(classes.indexOf(klass), 1);
    }

    node.className = classes.join(' ');

    return node.className;
}

printToConsole(hasClass(createNode('div', 'test'), 'test')); // true
printToConsole(hasClass(createNode('div', 'test'), 'tes')); // false
printToConsole(hasClass(createNode('div', 'test1 test2'), 'tes')); // false
printToConsole(hasClass(createNode('div', 'test1 test2  test'), 'test')); // true
printToConsole(addClass(createNode('div', ''), 'mmm'));
printToConsole(addClass(createNode('div', 'eee'), 'mmm'));
printToConsole(addClass(createNode('div', 'eee l-l-l lll lll'), 'mmm'));
printToConsole(removeClass(createNode('div', 'uuu ee ttt'), 'ee'));