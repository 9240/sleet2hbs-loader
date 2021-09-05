!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('sleet'), require('sleet-handlebars')))
    : 'function' == typeof define && define.amd
    ? define(['sleet', 'sleet-handlebars'], t)
    : 'object' == typeof exports
    ? (exports['sleet2hbs-loader'] = t(
        require('sleet'),
        require('sleet-handlebars')
      ))
    : (e['sleet2hbs-loader'] = t(e.sleet, e['sleet-handlebars']));
})(self, function (e, t) {
  return (
    (r = {
      138: function (e, t, r) {
        const s = r(926),
          o = r(635),
          n = r(351);
        e.exports = function (e, t, r) {
          const i = n.readFileSync(this.resource, 'utf8');
          return s.compile(i, { filename: this.resource, sleetHandlebars: o })
            .content;
        };
      },
      926: function (t) {
        'use strict';
        t.exports = e;
      },
      635: function (e) {
        'use strict';
        e.exports = t;
      },
      351: function () {},
    }),
    (s = {}),
    (function e(t) {
      var o = s[t];
      if (void 0 !== o) return o.exports;
      var n = (s[t] = { exports: {} });
      return r[t](n, n.exports, e), n.exports;
    })(138)
  );
  var r, s;
});
