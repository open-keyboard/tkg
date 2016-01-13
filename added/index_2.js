/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2015-12-26 19:12:27
 * @version $Id$
 */

function bindLayoutCountClick () {
    var layer = document.querySelectorAll('#layer_count ul li a'),
        layerDel = document.querySelectorAll('#layer_count ul li span');
    for (var i = 0; i < layer.length; i++) {
        layer[i].addEventListener('click', function (e) {
            // e.stopPropagation();
            console.log(e);
            var c = e.target.innerText;
            laySwitch(c.replace('Layer_', ''));
        });
    }
    for (var i = 1; i < layerDel.length; i++) {
        layerDel[i].addEventListener('click', function (e) {
            // e.stopPropagation();
            console.log(this);
            var c = this.getAttribute('data-count');
            console.log(c);
            layDel(c);
        });
    }
}
bindLayoutCountClick();

document.querySelector('#layer_add').addEventListener('click', function (e) {
    var layerAdd = document.querySelector('#layer_count ul'),
        li = document.createElement('li'),
        count = layerCount;
    li.setAttribute('class', 'pure-menu-item');
    li.innerHTML = '<a href="javscript:void(0)" class="pure-menu-link">' +
            'Layer_' + (layerCount + 1) +
            '</a>' +
            '<span data-count="' + (layerCount + 1) + '">X</span>';
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
    for (var j = 0; j < keyboard.length; j++) {
        keyboard[j].classList.add('hide');
    }
    document.querySelector('.layerCount_' + count).classList.remove('hide');
}

function layDel(count) {
    delete document.querySelectorAll('.layerCount_' + count + '')[0];
    laySwitch(count - 1);
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

var btn = document.querySelectorAll('#keys_other button');

for (var i = btn.length - 1; i >= 0; i--) {
    btn[i].addEventListener('click', function (e) {
        console.log(e.target.innerHTML);
        var val = e.target.innerHTML,
            key = e.target.getAttribute('data-key');
        if (document.querySelectorAll('.heightlight').length) {
            document.querySelector('.heightlight').innerHTML = val;
            document.querySelector('.heightlight').setAttribute('data-key', key);
            unFcous.classList.remove('heightlight');
            appendFns();
        }
    })
}

document.querySelector('#dol_c').addEventListener('click', function (e) {
    console.log(layerCount);
    for (var i = 0; i < layerCount; i++) {
        console.log(i);
        KEY_MAP_GEN.iso[i] = [];
        for (var j = 5 - 1; j >= 0; j--) {
            var row = document.querySelector('.layerCount_' + (i + 1) + '').querySelector('.row-' + j + '').querySelectorAll('.keycaps'),
                array = [];
            for (var k = 0; k < row.length; k++) {
                array.push(row[k].getAttribute('data-key'));
            }
            KEY_MAP_GEN.iso[i].push(array);
        }
    }
    var postData = {
        matrix_rows: '5',
        matrix_cols: '14',
        matrix_size: '',
        max_layers: '8',
        max_fns: '32',
        eep_size: '1024',
        eep_start: '17',
        keymaps: KEY_MAP_GEN.iso,
        fn_actions: ''
    };
    $.ajax({
        url: 'download.php?file=c',
        type: 'POST',
        data: postData,
        success: function(data) {
            // console.log('data', data);
            var blob = new Blob([data]),
            link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'keymap.c';
            link.click();
        },
        error: function(data) {
            // console.error('data', data);
        }
    });
});

tkg.getFns = function () {
    // body...
}