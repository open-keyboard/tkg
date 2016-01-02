/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2015-12-26 19:12:27
 * @version $Id$
 */

function bindLayoutCountClick () {
    var layer = document.querySelectorAll('#layer_count ul li');
    for (var i = 0; i < layer.length; i++) {
        layer[i].addEventListener('click', function (e) {
            console.log(e);
            var c = e.target.innerText;
            laySwitch(c.replace('Layer_', ''));
        });
    }
}
bindLayoutCountClick();

document.querySelector('#layer_add').addEventListener('click', function (e) {
    var layerAdd = document.querySelector('#layer_count ul'),
        li = document.createElement('li');
        li.setAttribute('class', 'pure-menu-item');
        li.innerHTML = '<a href="javscript:void(0)" class="pure-menu-link">' +
            'Layer_' + layerCount +
            '</a>',
        count = layerCount;
    layerAdd.appendChild(li);
    initKeyboard();
    laySwitch(count);
    bindLayoutCountClick();
});

function laySwitch(count) {
    var keyboard = document.querySelectorAll('.keyboard');
    var layout = document.querySelectorAll('#layer_count li');
    for (var i = 0; i < layout.length; i++) {
        layout[i].classList.remove('focus');
    }
    console.log(count);
    console.log(layout[count - 1]);
    layout[count - 1].classList.add('focus');
    for (var i = 0; i < keyboard.length; i++) {
        keyboard[i].classList.add('hide');
    }
    document.querySelector('.layerCount_' + count).classList.remove('hide');
}

document.onkeydown = function (e) {
    console.log(e);
    if (document.querySelectorAll('.heightlight').length) {
        e.preventDefault();
        console.log(e.keyIdentifier);
        document.querySelector('.heightlight').innerHTML = KEY_MAP[e.keyCode][e.location];
        document.querySelector('.heightlight').setAttribute('data-key', KEY_MAP[e.keyCode]['key' + e.location]);
        unFcous.classList.remove('heightlight');
    }
};