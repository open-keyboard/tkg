/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2015-12-26 18:44:56
 * @version $Id$
 */

var keyboardContainer = document.getElementById('keyboard_container');

function bindClick (dom) {
    var keycaps = dom.querySelectorAll('.keycaps');
    for (var i = 0; i < keycaps.length; i++) {
        keycaps[i].addEventListener('click', function (e) {
            var _this = e.target;
            if (unFcous) {
                unFcous.classList.remove('heightlight');
            }
            unFcous = _this;
            console.log(unFcous);
            _this.classList.add('heightlight');
        });
    }
}

function initKeyboard () {
    var ansi = KEY.ansi,
        keyboard = document.createElement('div'),
        rowCount = [8, 12, 13, 14, 14];
    keyboard.setAttribute('class', 'keyboard layerCount_' + layerCount + ' clearfix');
    for (var i = 5 - 1; i >= 0; i--) {
        var row = document.createElement('div');
        row.setAttribute('class', 'clearfix row-' + i);
        for (var j = 0; j < rowCount[i]; j++) {
            var keycaps = document.createElement('div');
            keycaps.setAttribute('class', 'keycaps keycap_' + ansi[i].size[j] + ' code_' + ansi[i].keyCode[j] + '');
            keycaps.setAttribute('data-key', ansi[i].key[j]);
            keycaps.innerHTML = ansi[i].val[j];
            row.appendChild(keycaps);
        }
        keyboard.appendChild(row);
    }
    keyboardContainer.appendChild(keyboard);
    bindClick(document.querySelector('.layerCount_' + layerCount));
    layerCount++;
}

initKeyboard();