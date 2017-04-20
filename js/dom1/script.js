// Дан узел DOM. Сделай функции hasClass(node, klass), addClass(node, klass), removeClass(node, klass), 
// которые позволяют проверить, есть ли у элемента заданный CSS-класс, добавить к нему класс (если его еще нет) 
// и удалить класс.Учти, что у элемента может быть несколько классов, которые могут быть разделены 
// одним или нескольким пробельными символами (пробел, \t, \f, \r, перевод строки \n — все эти символы 
// ищутся с помощью \s в регулярке). Ты можешь спросить, что за идиот придумал разделять классы с помощью 
// непонятных спецсимволов типа \f? Не знаю, но так написано в стандарте.
// Если удалены все классы, то удалять аттрибут class="" не надо, пусть остается.
function createNode(name, klasses) {
    var n = document.createElement(name);
    n.className = klasses;

    return n;
}

function l(x) {
    console.log(x);
}

function hasClass(node, klass) {
    return (' ' + node.className + ' ').indexOf(' ' + klass + ' ') !== -1;
}

function addClass(node, klass) {
    var previousClass = node.getAttribute('class');

    return previousClass === undefined || previousClass === '' ? node.className = klass :
        node.className = previousClass + ' ' + klass;
}

function removeClass(node, klass) {
    var classes = node.className.split(/\s/);

    if (classes === '' || classes === undefined) {
        return 'Class doesn\'t exists';
    }
    else {
        for (var i = 0; i < classes.length; ++i) {
            if (classes[i] === klass) {
                classes.splice(i, 1);
                --i;
            }
        }

        node.className = classes.join(' ');
    }

    return node.className;
}

l(hasClass(createNode('div', 'test'), 'test')); // true
l(hasClass(createNode('div', 'test'), 'tes')); // false
l(hasClass(createNode('div', 'test1 test2'), 'tes')); // false
l(hasClass(createNode('div', 'test1 test2   test'), "test")); // true
l(addClass(createNode('div', ''), 'mmm'));
l(addClass(createNode('div', 'eee'), 'mmm'));
l(addClass(createNode('div', 'eee l-l-l lll lll'), 'mmm'));
l(removeClass(createNode('div', 'uuu ee ttt'), 'ee'));