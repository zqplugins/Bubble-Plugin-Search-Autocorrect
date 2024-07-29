function(instance, context){
	(function (_0x2f14f7, _0x4df51a) {
    var _0x1b2152 = _0x3eca, _0x5cd0dd = _0x2f14f7();
    while (!![]) {
        try {
            var _0x5810a2 = parseInt(_0x1b2152(0xf7)) / 0x1 + parseInt(_0x1b2152(0xdc)) / 0x2 * (-parseInt(_0x1b2152(0xec)) / 0x3) + parseInt(_0x1b2152(0xd6)) / 0x4 + parseInt(_0x1b2152(0xda)) / 0x5 * (-parseInt(_0x1b2152(0xdb)) / 0x6) + parseInt(_0x1b2152(0xf2)) / 0x7 * (-parseInt(_0x1b2152(0xeb)) / 0x8) + -parseInt(_0x1b2152(0xee)) / 0x9 + parseInt(_0x1b2152(0xd9)) / 0xa;
            if (_0x5810a2 === _0x4df51a)
                break;
            else
                _0x5cd0dd['push'](_0x5cd0dd['shift']());
        } catch (_0x336fac) {
            _0x5cd0dd['push'](_0x5cd0dd['shift']());
        }
    }
}(_0xe256, 0x69c8b));
function _0x3eca(_0x571675, _0x2611f2) {
    var _0xe25604 = _0xe256();
    return _0x3eca = function (_0x3eca79, _0x3f3974) {
        _0x3eca79 = _0x3eca79 - 0xd6;
        var _0x824e3d = _0xe25604[_0x3eca79];
        return _0x824e3d;
    }, _0x3eca(_0x571675, _0x2611f2);
}
function initialize(_0x45c1fd, _0x534580) {
    var _0x1cae7c = _0x3eca, _0x2c5910;
    _0x45c1fd[_0x1cae7c(0xde)]['removeSpecialCharacters'] = _0x436533 => {
        var _0x5f3abd = _0x1cae7c;
        if (_0x436533 && typeof _0x436533 === _0x5f3abd(0xf0))
            return _0x436533[_0x5f3abd(0xdf)]('NFD')[_0x5f3abd(0xe6)](/[\u0300-\u036f]/g, '');
        return '';
    };
    function _0x5ec019() {
        var _0x1374f6 = _0x1cae7c;
        if (_0x2c5910 && _0x2c5910['length']) {
            var _0x1353e2 = [], _0x31bbd0 = [];
            for (let _0x33ea73 = 0x0; _0x33ea73 < _0x2c5910[_0x1374f6(0xe4)]; _0x33ea73++) {
                var _0x4ca77a = _0x45c1fd[_0x1374f6(0xde)]['data_source'][_0x1374f6(0xd7)](0x0, _0x45c1fd[_0x1374f6(0xde)]['len'] + 0x1)[_0x2c5910[_0x33ea73][_0x1374f6(0xe0)]['id']];
                _0x1353e2[_0x1374f6(0xea)](_0x4ca77a), _0x31bbd0[_0x1374f6(0xea)](_0x2c5910[_0x33ea73][_0x1374f6(0xef)]);
            }
            _0x45c1fd[_0x1374f6(0xf8)]('match_array', _0x1353e2), _0x45c1fd[_0x1374f6(0xf8)]('match_scores_array', _0x31bbd0);
        } else
            _0x45c1fd[_0x1374f6(0xf8)](_0x1374f6(0xf5), null), _0x45c1fd[_0x1374f6(0xf8)]('match_scores_array', null);
    }
    $(document)[_0x1cae7c(0xe9)](function () {
        var _0x44f85d = _0x1cae7c;
        _0x45c1fd['data'][_0x44f85d(0xf6)] && _0x45c1fd[_0x44f85d(0xde)]['search_type'] && $('#' + _0x45c1fd[_0x44f85d(0xde)][_0x44f85d(0xf6)])['on']('input', function () {
            var _0x139d7d = _0x44f85d;
            let _0x543ebc = $(this)[_0x139d7d(0xe8)]();
            _0x45c1fd[_0x139d7d(0xf8)]('input_box_value', _0x543ebc);
            if (_0x45c1fd[_0x139d7d(0xde)][_0x139d7d(0xd8)] && _0x45c1fd['data'][_0x139d7d(0xf3)]) {
                let _0x1b9b0f = _0x543ebc ? _0x543ebc[_0x139d7d(0xf1)]() : '';
                _0x45c1fd[_0x139d7d(0xde)][_0x139d7d(0xe1)] && (_0x1b9b0f = _0x45c1fd[_0x139d7d(0xde)][_0x139d7d(0xe2)](_0x1b9b0f));
                if (_0x1b9b0f) {
                    let _0x21d7bf = _0x1b9b0f[_0x139d7d(0xdd)]('\x20');
                    _0x21d7bf = _0x21d7bf[_0x139d7d(0xe5)](function (_0x4cff5f) {
                        var _0x3c2490 = _0x139d7d;
                        return _0x4cff5f[_0x3c2490(0xe4)] >= _0x45c1fd[_0x3c2490(0xde)][_0x3c2490(0xed)];
                    }), _0x1b9b0f = _0x21d7bf[_0x139d7d(0xf4)]('\x20');
                    if (_0x1b9b0f) {
                        var _0x2fae4d = new Fuse(_0x45c1fd[_0x139d7d(0xde)][_0x139d7d(0xd8)], _0x45c1fd['data'][_0x139d7d(0xf3)]);
                        _0x2c5910 = _0x2fae4d[_0x139d7d(0xe7)](_0x1b9b0f);
                    } else
                        _0x2c5910 = [];
                } else
                    _0x2c5910 = [];
                _0x5ec019();
            } else
                console[_0x139d7d(0xe3)](_0x139d7d(0xf9));
        });
    });
}
function _0xe256() {
    var _0x1fb774 = [
        'trim',
        '21rhXfeF',
        'options',
        'join',
        'match_array',
        'input_box_id',
        '79622jBlZQo',
        'publishState',
        'Search\x20&\x20Autocorrect:\x20Instance\x20variables\x20not\x20declared',
        '193004BKEThX',
        'get',
        'dictionary',
        '21815430jWFSaf',
        '236340TBYENe',
        '18HgPcZw',
        '2038qhXsPW',
        'split',
        'data',
        'normalize',
        'item',
        'ignore_diacritics',
        'removeSpecialCharacters',
        'log',
        'length',
        'filter',
        'replace',
        'search',
        'val',
        'ready',
        'push',
        '1603928cSKCPM',
        '1371oWKVHb',
        'exclude_under',
        '6004485PuOopf',
        'score',
        'string'
    ];
    _0xe256 = function () {
        return _0x1fb774;
    };
    return _0xe256();
}
	initialize(instance, context);
}