/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2016-02-29 15:44:33
 * @version $Id$
 */

var keymap = {
        "0":[
                ["KC_GRV","KC_1","KC_2","KC_3","KC_4","KC_5","KC_6","KC_7","KC_8","KC_9","KC_0","KC_MINS","KC_EQL","KC_BSPC"],
                ["KC_TAB","KC_Q","KC_W","KC_E","KC_R","KC_T","KC_Y","KC_U","KC_I","KC_O","KC_P","KC_LBRC","KC_RBRC","KC_BSLS"],
                ["KC_CAPS","KC_A","KC_S","KC_D","KC_F","KC_G","KC_H","KC_J","KC_K","KC_L","KC_SCLN","KC_QUOT","KC_NO","KC_ENT"],
                ["KC_LSFT","KC_NO","KC_Z","KC_X","KC_C","KC_V","KC_B","KC_N","KC_M","KC_COMM","KC_DOT","KC_SLSH","KC_NO","KC_RSFT"],
                ["KC_LCTL","KC_LGUI","KC_LALT","KC_NO","KC_NO","KC_TRNS","KC_NO","KC_NO","KC_NO","KC_NO","KC_FN0","KC_LGUI","KC_APP","KC_RCTL"]
            ],
        "1":[
                ["KC_GRV","KC_1","KC_2","KC_3","KC_4","KC_5","KC_6","KC_7","KC_8","KC_9","KC_0","KC_MINS","KC_EQL","KC_BSPC"],
                ["KC_TAB","KC_Q","KC_W","KC_E","KC_R","KC_T","KC_Y","KC_U","KC_I","KC_O","KC_P","KC_LBRC","KC_RBRC","KC_BSLS"],
                ["KC_CAPS","KC_A","KC_S","KC_D","KC_F","KC_G","KC_H","KC_J","KC_K","KC_L","KC_SCLN","KC_QUOT","KC_NO","KC_ENT"],
                ["KC_LSFT","KC_NO","KC_Z","KC_X","KC_C","KC_V","KC_B","KC_N","KC_M","KC_COMM","KC_DOT","KC_SLSH","KC_NO","KC_UP"],
                ["KC_LCTL","KC_LGUI","KC_LALT","KC_NO","KC_NO","KC_TRNS","KC_NO","KC_NO","KC_NO","KC_NO","KC_FN0","KC_LEFT","KC_DOWN","KC_RGHT"]
            ]
    };
var fn = {
        "0":["ACTION_LAYER_MOMENTARY",1]
    };

function gen_c(keymap, fn) {
    var obj = {
        'matrix_rows': 5,
        'matrix_cols': 14,
        'matrix_size': '',
        'max_layers': 8,
        'max_fns': 32,
        'eep_size': 1024,
        'eep_start': 17,
        'keymaps': JSON.stringify(keymap),
        'fn_actions': JSON.stringify(fn)
    };
    function formUrlEncode(obj) {
        var urlData = '';
        for (var x in obj) {
            urlData = urlData + x + '=' + obj[x] + '&';
        }
        urlData = urlData.substr(0, (urlData.length - 1));
        return urlData;
    }
    console.log(obj);
    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', '/tkg/download.php?file=c');
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // xhr.send(formUrlEncode(obj));
    // xhr.onreadystatechange = function() {
    //     if (xhr.readyState == 4) {
    //         if (xhr.status == 200) {
    //             console.log(xhr.responseText);
    //             var blob = new Blob([xhr.responseText]),
    //                 link = document.createElement('a');
    //             link.href = window.URL.createObjectURL(blob);
    //             link.download = 'keymap_tkg.c';
    //             link.click();
    //             window.URL.revokeObjectURL(link.href);
    //         }
    //     }
    // }

    function genInput(form, value) {
        var s = document.createElement('input');
        s.setAttribute('type', 'hidden');
        s.setAttribute('name', value);
        s.setAttribute('value', obj[value]);
        form.appendChild(s);
    }
    var dolForm = document.querySelector('#dl_form');
    if (dolForm) {
        dolForm.outerHTML = '';
        delete dolForm;
    }
    var form = document.createElement('form');
    form.setAttribute('id', 'dl_form');
    form.setAttribute('action', '/tkg/download.php?file=c');
    form.setAttribute('method', 'POST');
    genInput(form, 'matrix_rows');
    genInput(form, 'matrix_cols');
    genInput(form, 'matrix_size');
    genInput(form, 'max_layers');
    genInput(form, 'max_fns');
    genInput(form, 'eep_size');
    genInput(form, 'eep_start');
    genInput(form, 'keymaps');
    genInput(form, 'fn_actions');
    document.body.appendChild(form);
    form.submit();
}