/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2015-10-25 15:14:03
 * @version $Id$
 */

var KEY_MAP_GEN = {
    ansi: {},
    iso: {},
    jis: {},
    customI: {}
};

var KEYCODE = {
    '8': {
        '0': 'Back Space',
        '1': '',
        '2': '',
        'key0': 'KC_BSPC'
    },
    '9': {
        '0': 'Tab',
        '1': '',
        '2': '',
        'key0': 'KC_TAB'
    },
    '13': {
        '0': 'Enter',
        '1': '',
        '2': '',
        '3': 'Enter',
        'key0': 'KC_ENT',
        'key3': 'KC_KP_ENTER'
    },
    '16': {
        '0': '',
        '1': 'L Shift',
        '2': 'R Shift',
        'key1': 'KC_LSHIFT',
        'key2': 'KC_RSHIFT'
    },
    '17': {
        '0': '',
        '1': 'L Ctrl',
        '2': 'R Ctrl',
        'key1': 'KC_LCTL',
        'key2': 'KC_RCTRL'
    },
    '18': {
        '0': '',
        '1': 'L Alt',
        '2': 'R Alt',
        'key1': 'KC_LALT',
        'key2': 'KC_RALT'
    },
    '19': {
        '0': 'Pause Break',
        '1': '',
        '2': '',
        'key0': 'KC_PAUS'
    },
    '20': {
        '0': 'Caps Lock',
        '1': '',
        '2': '',
        'key0': 'KC_CAPS'
    },
    '27': {
        '0': 'Esc',
        '1': '',
        '2': '',
        'key0': 'KC_ESC'
    },
    '32': {
        '0': 'Spacebar',
        '1': '',
        '2': '',
        'key0': 'KC_TRNS'
    },
    '33': {
        '0': 'Page Up',
        '1': '',
        '2': '',
        'key0': 'KC_PGUP'
    },
    '34': {
        '0': 'Page Down',
        '1': '',
        '2': '',
        'key0': 'KC_PGDN'
    },
    '35': {
        '0': 'End',
        '1': '',
        '2': '',
        'key0': 'KC_END'
    },
    '36': {
        '0': 'Home',
        '1': '',
        '2': '',
        'key0': 'KC_HOME'
    },
    '37': {
        '0': '&#8592',
        '1': '',
        '2': '',
        'key0': 'KC_LEFT'
    },
    '38': {
        '0': '&#8593',
        '1': '',
        '2': '',
        'key0': 'KC_UP'
    },
    '39': {
        '0': '&#8594',
        '1': '',
        '2': '',
        'key0': 'KC_RIGHT'
    },
    '40': {
        '0': '&#8595',
        '1': '',
        '2': '',
        'key0': 'KC_DOWN'
    },
    '44': {
        '0': 'Print Screen',
        '1': '',
        '2': '',
        'key0': 'KC_PSCR'
    },
    '45': {
        '0': 'Insert',
        '1': '',
        '2': '',
        'key0': 'KC_INS'
    },
    '46': {
        '0': 'Delete',
        '1': '',
        '2': '',
        'key0': 'KC_DEL'
    },
    '48': {
        '0': '0',
        '1': '',
        '2': '',
        'key0': 'KC_0'
    },
    '49': {
        '0': '1',
        '1': '',
        '2': '',
        'key0': 'KC_1'
    },
    '50': {
        '0': '2',
        '1': '',
        '2': '',
        'key0': 'KC_2'
    },
    '51': {
        '0': '3',
        '1': '',
        '2': '',
        'key0': 'KC_3'
    },
    '52': {
        '0': '4',
        '1': '',
        '2': '',
        'key0': 'KC_4'
    },
    '53': {
        '0': '5',
        '1': '',
        '2': '',
        'key0': 'KC_5'
    },
    '54': {
        '0': '6',
        '1': '',
        '2': '',
        'key0': 'KC_6'
    },
    '55': {
        '0': '7',
        '1': '',
        '2': '',
        'key0': 'KC_7'
    },
    '56': {
        '0': '8',
        '1': '',
        '2': '',
        'key0': 'KC_8'
    },
    '57': {
        '0': '9',
        '1': '',
        '2': '',
        'key0': 'KC_9'
    },
    '65': {
        '0': 'A',
        '1': '',
        '2': '',
        'key0': 'KC_A'
    },
    '66': {
        '0': 'B',
        '1': '',
        '2': '',
        'key0': 'KC_B'
    },
    '67': {
        '0': 'C',
        '1': '',
        '2': '',
        'key0': 'KC_C'
    },
    '68': {
        '0': 'D',
        '1': '',
        '2': '',
        'key0': 'KC_D'
    },
    '69': {
        '0': 'E',
        '1': '',
        '2': '',
        'key0': 'KC_E'
    },
    '70': {
        '0': 'F',
        '1': '',
        '2': '',
        'key0': 'KC_F'
    },
    '71': {
        '0': 'G',
        '1': '',
        '2': '',
        'key0': 'KC_G'
    },
    '72': {
        '0': 'H',
        '1': '',
        '2': '',
        'key0': 'KC_H'
    },
    '73': {
        '0': 'I',
        '1': '',
        '2': '',
        'key0': 'KC_I'
    },
    '74': {
        '0': 'J',
        '1': '',
        '2': '',
        'key0': 'KC_J'
    },
    '75': {
        '0': 'K',
        '1': '',
        '2': '',
        'key0': 'KC_K'
    },
    '76': {
        '0': 'L',
        '1': '',
        '2': '',
        'key0': 'KC_L'
    },
    '77': {
        '0': 'M',
        '1': '',
        '2': '',
        'key0': 'KC_M'
    },
    '78': {
        '0': 'N',
        '1': '',
        '2': '',
        'key0': 'KC_N'
    },
    '79': {
        '0': 'O',
        '1': '',
        '2': '',
        'key0': 'KC_O'
    },
    '80': {
        '0': 'P',
        '1': '',
        '2': '',
        'key0': 'KC_P'
    },
    '81': {
        '0': 'Q',
        '1': '',
        '2': '',
        'key0': 'KC_Q'
    },
    '82': {
        '0': 'R',
        '1': '',
        '2': '',
        'key0': 'KC_R'
    },
    '83': {
        '0': 'S',
        '1': '',
        '2': '',
        'key0': 'KC_S'
    },
    '84': {
        '0': 'T',
        '1': '',
        '2': '',
        'key0': 'KC_T'
    },
    '85': {
        '0': 'U',
        '1': '',
        '2': '',
        'key0': 'KC_U'
    },
    '86': {
        '0': 'V',
        '1': '',
        '2': '',
        'key0': 'KC_V'
    },
    '87': {
        '0': 'W',
        '1': '',
        '2': '',
        'key0': 'KC_W'
    },
    '88': {
        '0': 'X',
        '1': '',
        '2': '',
        'key0': 'KC_X'
    },
    '89': {
        '0': 'Y',
        '1': '',
        '2': '',
        'key0': 'KC_Y'
    },
    '90': {
        '0': 'Z',
        '1': '',
        '2': '',
        'key0': 'KC_Z'
    },
    '91': {
        '0': '',
        '1': 'L Win',
        '2': 'R Win',
        'key1': 'KC_LGUI',
        'key2': 'KC_RGUI'
    },
    '93': {
        '0': 'Menu',
        '1': '',
        '2': '',
        'key0': 'KC_APPLICATION'
    },
    '96': {
        '0': '0',
        '1': '',
        '2': '',
        'key0': 'KC_KP_0'
    },
    '97': {
        '0': '1',
        '1': '',
        '2': '',
        'key0': 'KC_KP_1'
    },
    '98': {
        '0': '2',
        '1': '',
        '2': '',
        'key0': 'KC_KP_2'
    },
    '99': {
        '0': '3',
        '1': '',
        '2': '',
        'key0': 'KC_KP_3'
    },
    '100': {
        '0': '4',
        '1': '',
        '2': '',
        'key0': 'KC_KP_4'
    },
    '101': {
        '0': '5',
        '1': '',
        '2': '',
        'key0': 'KC_KP_5'
    },
    '102': {
        '0': '6',
        '1': '',
        '2': '',
        'key0': 'KC_KP_6'
    },
    '103': {
        '0': '7',
        '1': '',
        '2': '',
        'key0': 'KC_KP_7'
    },
    '104': {
        '0': '8',
        '1': '',
        '2': '',
        'key0': 'KC_KP_8'
    },
    '105': {
        '0': '9',
        '1': '',
        '2': '',
        'key0': 'KC_KP_9'
    },
    '106': {
        '0': '*',
        '1': '',
        '2': '',
        'key0': 'KC_KP_ASTERISK'
    },
    '107': {
        '0': '+',
        '1': '',
        '2': '',
        'key0': 'KC_KP_PLUS'
    },
    '109': {
        '0': '-',
        '1': '',
        '2': '',
        'key0': 'KC_KP_MINUS'
    },
    '110': {
        '0': '.',
        '1': '',
        '2': '',
        'key0': 'KC_KP_DOT'
    },
    '111': {
        '0': '/',
        '1': '',
        '2': '',
        'key0': ''
    },
    '112': {
        '0': 'F1',
        '1': '',
        '2': '',
        'key0': 'KC_F1'
    },
    '113': {
        '0': 'F2',
        '1': '',
        '2': '',
        'key0': 'KC_F2'
    },
    '114': {
        '0': 'F3',
        '1': '',
        '2': '',
        'key0': 'KC_F3'
    },
    '115': {
        '0': 'F4',
        '1': '',
        '2': '',
        'key0': 'KC_F4'
    },
    '116': {
        '0': 'F5',
        '1': '',
        '2': '',
        'key0': 'KC_F5'
    },
    '117': {
        '0': 'F6',
        '1': '',
        '2': '',
        'key0': 'KC_F6'
    },
    '118': {
        '0': 'F7',
        '1': '',
        '2': '',
        'key0': 'KC_F7'
    },
    '119': {
        '0': 'F8',
        '1': '',
        '2': '',
        'key0': 'KC_F8'
    },
    '120': {
        '0': 'F9',
        '1': '',
        '2': '',
        'key0': 'KC_F9'
    },
    '121': {
        '0': 'F10',
        '1': '',
        '2': '',
        'key0': 'KC_F10'
    },
    '122': {
        '0': 'F11',
        '1': '',
        '2': '',
        'key0': 'KC_F11'
    },
    '123': {
        '0': 'F12',
        '1': '',
        '2': '',
        'key0': 'KC_F12'
    },
    '144': {
        '0': 'Num Lock',
        '1': '',
        '2': '',
        'key0': 'KC_NUMLOCK'
    },
    '145': {
        '0': 'Scroll Lock',
        '1': '',
        '2': '',
        'key0': 'KC_SLCK'
    },
    '186': {
        '0': ';',
        '1': '',
        '2': '',
        'key0': 'KC_SCLN'
    },
    '187': {
        '0': '=',
        '1': '',
        '2': '',
        'key0': 'KC_EQL'
    },
    '188': {
        '0': ',',
        '1': '',
        '2': '',
        'key0': 'KC_COMM'
    },
    '189': {
        '0': '-',
        '1': '',
        '2': '',
        'key0': 'KC_MINS'
    },
    '190': {
        '0': '.',
        '1': '',
        '2': '',
        'key0': 'KC_DOT'
    },
    '191': {
        '0': '/',
        '1': '',
        '2': '',
        'key0': 'KC_SLSH'
    },
    '192': {
        '0': '`',
        '1': '',
        '2': '',
        'key0': 'KC_GRV'
    },
    '219': {
        '0': '[',
        '1': '',
        '2': '',
        'key0': 'KC_LBRC'
    },
    '220': {
        '0': '\\',
        '1': '',
        '2': '',
        'key0': 'KC_BSLS'
    },
    '221': {
        '0': ']',
        '1': '',
        '2': '',
        'key0': 'KC_RBRC'
    },
    '222': {
        '0': '\'',
        '1': '',
        '2': '',
        'key0': 'KC_QUOT'
    },
};

var LAYOUT = {
    ansi: [{
        val: ['Ctrl', 'Win', 'Alt', '', '', 'Spacebar', '', '', '', '', 'Alt', 'Win', 'Menu', 'Ctrl'],
        keyCode: ['17_1', '91_1', '18_1', '', '', '32_0', '', '', '', '', '18_2', '92_0', '93_0', '17_2'],
        size: ['1_25', '1_25', '1_25', '0', '0', '6_25', '0', '0', '0', '0', '1_25', '1_25', '1_25', '1_25'],
        key: ['KC_LCTL', 'KC_LGUI', 'KC_LALT', 'KC_NO', 'KC_NO', 'KC_TRNS', 'KC_NO', 'KC_NO', 'KC_NO', 'KC_NO', 'KC_RALT', 'KC_LGUI', 'KC_APP', 'KC_RCTL']
    }, {
        val: ['Shift', '', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '', 'Shift'],
        keyCode: ['16_1', '', '90_0', '88_0', '67_0', '86_0', '66_0', '78_0', '77_0', '188_0', '190_0', '191_0', '', '16_2'],
        size: ['2_25', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '2_75'],
        key: ['KC_LSFT', 'KC_NO', 'KC_Z', 'KC_X', 'KC_C', 'KC_V', 'KC_B', 'KC_N', 'KC_M', 'KC_COMM', 'KC_DOT', 'KC_SLSH', 'KC_NO', 'KC_RSFT']
    }, {
        val: ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', '', 'Enter'],
        keyCode: ['20_0', '65_0', '83_0', '68_0', '70_0', '71_0', '72_0', '74_0', '75_0', '76_0', '186_0', '222_0', '', '13_0'],
        size: ['1_75', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', '2_25'],
        key: ['KC_CAPS', 'KC_A', 'KC_S', 'KC_D', 'KC_F', 'KC_G', 'KC_H', 'KC_J', 'KC_K', 'KC_L', 'KC_SCLN', 'KC_QUOT', 'KC_NO', 'KC_ENT']
    }, {
        val: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
        keyCode: ['9_0', '81_0', '87_0', '69_0', '82_0', '84_0', '89_0', '85_0', '73_0', '79_0', '80_0', '219_0', '221_0', '220_0'],
        size: ['1_5', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1_5'],
        key: ['KC_TAB', 'KC_Q', 'KC_W', 'KC_E', 'KC_R', 'KC_T', 'KC_Y', 'KC_U', 'KC_I', 'KC_O', 'KC_P', 'KC_LBRC', 'KC_RBRC', 'KC_BSLS']
    }, {
        val: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Back Space'],
        keyCode: ['192_0', '49_0', '50_0', '51_0', '52_0', '53_0', '54_0', '55_0', '56_0', '57_0', '48_0', '189_0', '187_0', '8_0'],
        size: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2'],
        key: ['KC_GRV', 'KC_1', 'KC_2', 'KC_3', 'KC_4', 'KC_5', 'KC_6', 'KC_7', 'KC_8', 'KC_9', 'KC_0', 'KC_MINS', 'KC_EQL', 'KC_BSPC']
    }],
    iso: [],
    jis: [],
    customI: [{
        val: ['Ctrl', 'Win', 'Alt', '', '', 'Spacebar', '', '', '', '', 'fn0', 'Left', 'Down', 'Right'],
        keyCode: ['17_1', '91_1', '18_1', '', '', '32_0', '', '', '', '', '18_2', '37_0', '40_0', '39_0'],
        size: ['1_25', '1_25', '1_25', '0', '0', '6_25', '0', '0', '0', '0', '1_25', '1_25', '1_25', '1_25'],
        key: ['KC_LCTL', 'KC_LALT', 'KC_LGUI', 'KC_NO', 'KC_NO', 'KC_SPC', 'KC_NO', 'KC_NO', 'KC_NO', 'KC_NO', 'KC_FN0', 'KC_LEFT', 'KC_DOWN', 'KC_RGHT']
    }, {
        val: ['Shift', '', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'up', '`'],
        keyCode: ['16_1', '', '90_0', '88_0', '67_0', '86_0', '66_0', '78_0', '77_0', '188_0', '190_0', '191_0', '38_0', '192_0'],
        size: ['2_25', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1_75', '1'],
        key: ['KC_LSFT', 'KC_NO', 'KC_Z', 'KC_X', 'KC_C', 'KC_V', 'KC_B', 'KC_N', 'KC_M', 'KC_COMM', 'KC_DOT', 'KC_SLSH', 'KC_GRV', 'KC_UP']
    }, {
        val: ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', '\\', 'Enter'],
        keyCode: ['20_0', '65_0', '83_0', '68_0', '70_0', '71_0', '72_0', '74_0', '75_0', '76_0', '186_0', '222_0', '13_0'],
        size: ['1_75', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', 'enter_iso'],
        key: ['KC_CAPS', 'KC_A', 'KC_S', 'KC_D', 'KC_F', 'KC_G', 'KC_H', 'KC_J', 'KC_K', 'KC_L', 'KC_SCLN', 'KC_QUOT', 'KC_BSLS', 'KC_ENT']
    }, {
        val: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', ''],
        keyCode: ['9_0', '81_0', '87_0', '69_0', '82_0', '84_0', '89_0', '85_0', '73_0', '79_0', '80_0', '219_0', '221_0', ''],
        size: ['1_5', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0'],
        key: ['KC_TAB', 'KC_Q', 'KC_W', 'KC_E', 'KC_R', 'KC_T', 'KC_Y', 'KC_U', 'KC_I', 'KC_O', 'KC_P', 'KC_LBRC', 'KC_RBRC', 'KC_NO']
    }, {
        val: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Back Space'],
        keyCode: ['192_0', '49_0', '50_0', '51_0', '52_0', '53_0', '54_0', '55_0', '56_0', '57_0', '48_0', '189_0', '187_0', '8_0'],
        size: ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '2'],
        key: ['KC_GRV', 'KC_1', 'KC_2', 'KC_3', 'KC_4', 'KC_5', 'KC_6', 'KC_7', 'KC_8', 'KC_9', 'KC_0', 'KC_MINS', 'KC_EQL', 'KC_BSPC']
    }]
};