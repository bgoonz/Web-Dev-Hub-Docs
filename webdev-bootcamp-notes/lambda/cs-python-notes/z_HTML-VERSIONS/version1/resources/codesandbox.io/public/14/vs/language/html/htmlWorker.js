/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-html version: 2.2.0(70020ec3be15f92a794f5d2c47ae195a7da63a75)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-html/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define('vscode-nls/vscode-nls', ['require', 'exports'], function (e, t) {
  'use strict';

  function n(e, t) {
    for (var n, r, i = [], a = 2; a < arguments.length; a++)
      i[a - 2] = arguments[a];
    return (
      (n = t),
      0 === (r = i).length
        ? n
        : n.replace(/\{(\d+)\}/g, function (e, t) {
            var n = t[0];
            return void 0 !== r[n] ? r[n] : e;
          })
    );
  }

  function r(e) {
    return n;
  }
  Object.defineProperty(t, '__esModule', {
    value: !0,
  }),
    (t.loadMessageBundle = r),
    (t.config = function (e) {
      return r;
    });
}),
  define('vscode-nls', ['vscode-nls/vscode-nls'], function (e) {
    return e;
  }),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define(
          'vscode-html-languageservice/htmlLanguageTypes',
          ['require', 'exports'],
          e
        );
  })(function (e, t) {
    'use strict';
    var n, r;
    Object.defineProperty(t, '__esModule', {
      value: !0,
    }),
      ((n = t.TokenType || (t.TokenType = {}))[(n.StartCommentTag = 0)] =
        'StartCommentTag'),
      (n[(n.Comment = 1)] = 'Comment'),
      (n[(n.EndCommentTag = 2)] = 'EndCommentTag'),
      (n[(n.StartTagOpen = 3)] = 'StartTagOpen'),
      (n[(n.StartTagClose = 4)] = 'StartTagClose'),
      (n[(n.StartTagSelfClose = 5)] = 'StartTagSelfClose'),
      (n[(n.StartTag = 6)] = 'StartTag'),
      (n[(n.EndTagOpen = 7)] = 'EndTagOpen'),
      (n[(n.EndTagClose = 8)] = 'EndTagClose'),
      (n[(n.EndTag = 9)] = 'EndTag'),
      (n[(n.DelimiterAssign = 10)] = 'DelimiterAssign'),
      (n[(n.AttributeName = 11)] = 'AttributeName'),
      (n[(n.AttributeValue = 12)] = 'AttributeValue'),
      (n[(n.StartDoctypeTag = 13)] = 'StartDoctypeTag'),
      (n[(n.Doctype = 14)] = 'Doctype'),
      (n[(n.EndDoctypeTag = 15)] = 'EndDoctypeTag'),
      (n[(n.Content = 16)] = 'Content'),
      (n[(n.Whitespace = 17)] = 'Whitespace'),
      (n[(n.Unknown = 18)] = 'Unknown'),
      (n[(n.Script = 19)] = 'Script'),
      (n[(n.Styles = 20)] = 'Styles'),
      (n[(n.EOS = 21)] = 'EOS'),
      ((r = t.ScannerState || (t.ScannerState = {}))[(r.WithinContent = 0)] =
        'WithinContent'),
      (r[(r.AfterOpeningStartTag = 1)] = 'AfterOpeningStartTag'),
      (r[(r.AfterOpeningEndTag = 2)] = 'AfterOpeningEndTag'),
      (r[(r.WithinDoctype = 3)] = 'WithinDoctype'),
      (r[(r.WithinTag = 4)] = 'WithinTag'),
      (r[(r.WithinEndTag = 5)] = 'WithinEndTag'),
      (r[(r.WithinComment = 6)] = 'WithinComment'),
      (r[(r.WithinScriptContent = 7)] = 'WithinScriptContent'),
      (r[(r.WithinStyleContent = 8)] = 'WithinStyleContent'),
      (r[(r.AfterAttributeName = 9)] = 'AfterAttributeName'),
      (r[(r.BeforeAttributeValue = 10)] = 'BeforeAttributeValue');
  }),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define(
          'vscode-html-languageservice/parser/htmlScanner',
          ['require', 'exports', 'vscode-nls', '../htmlLanguageTypes'],
          e
        );
  })(function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
      value: !0,
    });
    var n = e('vscode-nls'),
      m = e('../htmlLanguageTypes'),
      b = n.loadMessageBundle(),
      o = (function () {
        function e(e, t) {
          (this.source = e), (this.len = e.length), (this.position = t);
        }
        return (
          (e.prototype.eos = function () {
            return this.len <= this.position;
          }),
          (e.prototype.getSource = function () {
            return this.source;
          }),
          (e.prototype.pos = function () {
            return this.position;
          }),
          (e.prototype.goBackTo = function (e) {
            this.position = e;
          }),
          (e.prototype.goBack = function (e) {
            this.position -= e;
          }),
          (e.prototype.advance = function (e) {
            this.position += e;
          }),
          (e.prototype.goToEnd = function () {
            this.position = this.source.length;
          }),
          (e.prototype.nextChar = function () {
            return this.source.charCodeAt(this.position++) || 0;
          }),
          (e.prototype.peekChar = function (e) {
            return (
              void 0 === e && (e = 0),
              this.source.charCodeAt(this.position + e) || 0
            );
          }),
          (e.prototype.advanceIfChar = function (e) {
            return (
              e === this.source.charCodeAt(this.position) &&
              (this.position++, !0)
            );
          }),
          (e.prototype.advanceIfChars = function (e) {
            var t;
            if (this.position + e.length > this.source.length) return !1;
            for (t = 0; t < e.length; t++)
              if (this.source.charCodeAt(this.position + t) !== e[t]) return !1;
            return this.advance(t), !0;
          }),
          (e.prototype.advanceIfRegExp = function (e) {
            var t = this.source.substr(this.position).match(e);
            return t
              ? ((this.position = this.position + t.index + t[0].length), t[0])
              : '';
          }),
          (e.prototype.advanceUntilRegExp = function (e) {
            var t = this.source.substr(this.position).match(e);
            return t
              ? ((this.position = this.position + t.index), t[0])
              : (this.goToEnd(), '');
          }),
          (e.prototype.advanceUntilChar = function (e) {
            for (; this.position < this.source.length; ) {
              if (this.source.charCodeAt(this.position) === e) return !0;
              this.advance(1);
            }
            return !1;
          }),
          (e.prototype.advanceUntilChars = function (e) {
            for (; this.position + e.length <= this.source.length; ) {
              for (
                var t = 0;
                t < e.length &&
                this.source.charCodeAt(this.position + t) === e[t];
                t++
              );
              if (t === e.length) return !0;
              this.advance(1);
            }
            return this.goToEnd(), !1;
          }),
          (e.prototype.skipWhitespace = function () {
            return (
              0 <
              this.advanceWhileChar(function (e) {
                return e === s || e === l || e === r || e === a || e === i;
              })
            );
          }),
          (e.prototype.advanceWhileChar = function (e) {
            for (
              var t = this.position;
              this.position < this.len &&
              e(this.source.charCodeAt(this.position));

            )
              this.position++;
            return this.position - t;
          }),
          e
        );
      })(),
      v = '!'.charCodeAt(0),
      y = '-'.charCodeAt(0),
      T = '<'.charCodeAt(0),
      w = '>'.charCodeAt(0),
      _ = '/'.charCodeAt(0),
      x = '='.charCodeAt(0),
      k = '"'.charCodeAt(0),
      S = "'".charCodeAt(0),
      r = '\n'.charCodeAt(0),
      i = '\r'.charCodeAt(0),
      a = '\f'.charCodeAt(0),
      s = ' '.charCodeAt(0),
      l = '\t'.charCodeAt(0),
      E = {
        'text/x-handlebars-template': !0,
      };
    t.createScanner = function (e, t, n) {
      void 0 === t && (t = 0),
        void 0 === n && (n = m.ScannerState.WithinContent);
      var r,
        l,
        c,
        u,
        d,
        p = new o(e, t),
        h = n,
        i = 0,
        a = m.TokenType.Unknown;

      function f() {
        return p.advanceIfRegExp(/^[_:\w][_:\w-.\d]*/).toLowerCase();
      }

      function g(e, t, n) {
        return (i = e), (r = n), (a = t);
      }
      return {
        scan: function () {
          var e = p.pos(),
            t = h,
            n = (function e() {
              var t,
                n = p.pos();
              if (p.eos()) return g(n, m.TokenType.EOS);
              switch (h) {
                case m.ScannerState.WithinComment:
                  return p.advanceIfChars([y, y, w])
                    ? ((h = m.ScannerState.WithinContent),
                      g(n, m.TokenType.EndCommentTag))
                    : (p.advanceUntilChars([y, y, w]),
                      g(n, m.TokenType.Comment));
                case m.ScannerState.WithinDoctype:
                  return p.advanceIfChar(w)
                    ? ((h = m.ScannerState.WithinContent),
                      g(n, m.TokenType.EndDoctypeTag))
                    : (p.advanceUntilChar(w), g(n, m.TokenType.Doctype));
                case m.ScannerState.WithinContent:
                  if (p.advanceIfChar(T)) {
                    if (!p.eos() && p.peekChar() === v) {
                      if (p.advanceIfChars([v, y, y]))
                        return (
                          (h = m.ScannerState.WithinComment),
                          g(n, m.TokenType.StartCommentTag)
                        );
                      if (p.advanceIfRegExp(/^!doctype/i))
                        return (
                          (h = m.ScannerState.WithinDoctype),
                          g(n, m.TokenType.StartDoctypeTag)
                        );
                    }
                    return p.advanceIfChar(_)
                      ? ((h = m.ScannerState.AfterOpeningEndTag),
                        g(n, m.TokenType.EndTagOpen))
                      : ((h = m.ScannerState.AfterOpeningStartTag),
                        g(n, m.TokenType.StartTagOpen));
                  }
                  return p.advanceUntilChar(T), g(n, m.TokenType.Content);
                case m.ScannerState.AfterOpeningEndTag:
                  var r = f();
                  return 0 < r.length
                    ? ((h = m.ScannerState.WithinEndTag),
                      g(n, m.TokenType.EndTag))
                    : p.skipWhitespace()
                    ? g(
                        n,
                        m.TokenType.Whitespace,
                        b(
                          'error.unexpectedWhitespace',
                          'Tag name must directly follow the open bracket.'
                        )
                      )
                    : ((h = m.ScannerState.WithinEndTag),
                      p.advanceUntilChar(w),
                      n < p.pos()
                        ? g(
                            n,
                            m.TokenType.Unknown,
                            b(
                              'error.endTagNameExpected',
                              'End tag name expected.'
                            )
                          )
                        : e());
                case m.ScannerState.WithinEndTag:
                  if (p.skipWhitespace()) return g(n, m.TokenType.Whitespace);
                  if (p.advanceIfChar(w))
                    return (
                      (h = m.ScannerState.WithinContent),
                      g(n, m.TokenType.EndTagClose)
                    );
                  t = b('error.tagNameExpected', 'Closing bracket expected.');
                  break;
                case m.ScannerState.AfterOpeningStartTag:
                  return (
                    (c = f()),
                    (u = d = void 0),
                    0 < c.length
                      ? ((l = !1),
                        (h = m.ScannerState.WithinTag),
                        g(n, m.TokenType.StartTag))
                      : p.skipWhitespace()
                      ? g(
                          n,
                          m.TokenType.Whitespace,
                          b(
                            'error.unexpectedWhitespace',
                            'Tag name must directly follow the open bracket.'
                          )
                        )
                      : ((h = m.ScannerState.WithinTag),
                        p.advanceUntilChar(w),
                        n < p.pos()
                          ? g(
                              n,
                              m.TokenType.Unknown,
                              b(
                                'error.startTagNameExpected',
                                'Start tag name expected.'
                              )
                            )
                          : e())
                  );
                case m.ScannerState.WithinTag:
                  return p.skipWhitespace()
                    ? ((l = !0), g(n, m.TokenType.Whitespace))
                    : l &&
                      0 <
                        (u = p
                          .advanceIfRegExp(/^[^\s"'>/=\x00-\x0F\x7F\x80-\x9F]*/)
                          .toLowerCase()).length
                    ? ((h = m.ScannerState.AfterAttributeName),
                      (l = !1),
                      g(n, m.TokenType.AttributeName))
                    : p.advanceIfChars([_, w])
                    ? ((h = m.ScannerState.WithinContent),
                      g(n, m.TokenType.StartTagSelfClose))
                    : p.advanceIfChar(w)
                    ? ((h =
                        'script' === c
                          ? d && E[d]
                            ? m.ScannerState.WithinContent
                            : m.ScannerState.WithinScriptContent
                          : 'style' === c
                          ? m.ScannerState.WithinStyleContent
                          : m.ScannerState.WithinContent),
                      g(n, m.TokenType.StartTagClose))
                    : (p.advance(1),
                      g(
                        n,
                        m.TokenType.Unknown,
                        b(
                          'error.unexpectedCharacterInTag',
                          'Unexpected character in tag.'
                        )
                      ));
                case m.ScannerState.AfterAttributeName:
                  return p.skipWhitespace()
                    ? ((l = !0), g(n, m.TokenType.Whitespace))
                    : p.advanceIfChar(x)
                    ? ((h = m.ScannerState.BeforeAttributeValue),
                      g(n, m.TokenType.DelimiterAssign))
                    : ((h = m.ScannerState.WithinTag), e());
                case m.ScannerState.BeforeAttributeValue:
                  if (p.skipWhitespace()) return g(n, m.TokenType.Whitespace);
                  var i = p.advanceIfRegExp(/^[^\s"'`=<>\/]+/);
                  if (0 < i.length)
                    return (
                      'type' === u && (d = i),
                      (h = m.ScannerState.WithinTag),
                      (l = !1),
                      g(n, m.TokenType.AttributeValue)
                    );
                  var a = p.peekChar();
                  return a === S || a === k
                    ? (p.advance(1),
                      p.advanceUntilChar(a) && p.advance(1),
                      'type' === u &&
                        (d = p.getSource().substring(n + 1, p.pos() - 1)),
                      (h = m.ScannerState.WithinTag),
                      (l = !1),
                      g(n, m.TokenType.AttributeValue))
                    : ((h = m.ScannerState.WithinTag), (l = !1), e());
                case m.ScannerState.WithinScriptContent:
                  for (var o = 1; !p.eos(); ) {
                    var s = p.advanceIfRegExp(/<!--|-->|<\/?script\s*\/?>?/i);
                    if (0 === s.length)
                      return p.goToEnd(), g(n, m.TokenType.Script);
                    if ('\x3c!--' === s) 1 === o && (o = 2);
                    else if ('--\x3e' === s) o = 1;
                    else if ('/' !== s[1]) 2 === o && (o = 3);
                    else {
                      if (3 !== o) {
                        p.goBack(s.length);
                        break;
                      }
                      o = 2;
                    }
                  }
                  return (
                    (h = m.ScannerState.WithinContent),
                    n < p.pos() ? g(n, m.TokenType.Script) : e()
                  );
                case m.ScannerState.WithinStyleContent:
                  return (
                    p.advanceUntilRegExp(/<\/style/i),
                    (h = m.ScannerState.WithinContent),
                    n < p.pos() ? g(n, m.TokenType.Styles) : e()
                  );
              }
              return (
                p.advance(1),
                (h = m.ScannerState.WithinContent),
                g(n, m.TokenType.Unknown, t)
              );
            })();
          return n !== m.TokenType.EOS && e === p.pos()
            ? (console.log(
                'Scanner.scan has not advanced at offset ' +
                  e +
                  ', state before: ' +
                  t +
                  ' after: ' +
                  h
              ),
              p.advance(1),
              g(e, m.TokenType.Unknown))
            : n;
        },
        getTokenType: function () {
          return a;
        },
        getTokenOffset: function () {
          return i;
        },
        getTokenLength: function () {
          return p.pos() - i;
        },
        getTokenEnd: function () {
          return p.pos();
        },
        getTokenText: function () {
          return p.getSource().substring(i, p.pos());
        },
        getScannerState: function () {
          return h;
        },
        getTokenError: function () {
          return r;
        },
      };
    };
  }),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define(
          'vscode-html-languageservice/utils/arrays',
          ['require', 'exports'],
          e
        );
  })(function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
      value: !0,
    }),
      (t.findFirst = function (e, t) {
        var n = 0,
          r = e.length;
        if (0 === r) return 0;
        for (; n < r; ) {
          var i = Math.floor((n + r) / 2);
          t(e[i]) ? (r = i) : (n = i + 1);
        }
        return n;
      }),
      (t.binarySearch = function (e, t, n) {
        for (var r = 0, i = e.length - 1; r <= i; ) {
          var a = ((r + i) / 2) | 0,
            o = n(e[a], t);
          if (o < 0) r = a + 1;
          else {
            if (!(0 < o)) return a;
            i = a - 1;
          }
        }
        return -(r + 1);
      });
  }),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define(
          'vscode-html-languageservice/utils/strings',
          ['require', 'exports'],
          e
        );
  })(function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
      value: !0,
    }),
      (t.startsWith = function (e, t) {
        if (e.length < t.length) return !1;
        for (var n = 0; n < t.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }),
      (t.endsWith = function (e, t) {
        var n = e.length - t.length;
        return 0 < n ? e.lastIndexOf(t) === n : 0 === n && e === t;
      }),
      (t.commonPrefixLength = function (e, t) {
        var n,
          r = Math.min(e.length, t.length);
        for (n = 0; n < r; n++)
          if (e.charCodeAt(n) !== t.charCodeAt(n)) return n;
        return r;
      }),
      (t.repeat = function (e, t) {
        for (var n = ''; 0 < t; )
          1 == (1 & t) && (n += e), (e += e), (t >>>= 1);
        return n;
      });
    var r = 'a'.charCodeAt(0),
      i = 'z'.charCodeAt(0),
      a = 'A'.charCodeAt(0),
      o = 'Z'.charCodeAt(0),
      s = '0'.charCodeAt(0),
      l = '9'.charCodeAt(0);
    t.isLetterOrDigit = function (e, t) {
      var n = e.charCodeAt(t);
      return (r <= n && n <= i) || (a <= n && n <= o) || (s <= n && n <= l);
    };
  }),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define(
          'vscode-html-languageservice/parser/htmlTags',
          [
            'require',
            'exports',
            '../utils/strings',
            '../utils/arrays',
            'vscode-nls',
          ],
          e
        );
  })(function (e, o) {
    'use strict';
    Object.defineProperty(o, '__esModule', {
      value: !0,
    });
    var p = e('../utils/strings'),
      t = e('../utils/arrays'),
      n = e('vscode-nls').loadMessageBundle();
    (o.EMPTY_ELEMENTS = [
      'area',
      'base',
      'br',
      'col',
      'embed',
      'hr',
      'img',
      'input',
      'keygen',
      'link',
      'menuitem',
      'meta',
      'param',
      'source',
      'track',
      'wbr',
    ]),
      (o.isEmptyElement = function (e) {
        return (
          !!e &&
          0 <=
            t.binarySearch(o.EMPTY_ELEMENTS, e.toLowerCase(), function (e, t) {
              return e.localeCompare(t);
            })
        );
      });
    var r = function (e, t) {
      void 0 === t && (t = []), (this.label = e), (this.attributes = t);
    };

    function s(e, t) {
      for (var n in t) e(n, t[n].label);
    }

    function l(e, n, t, r) {
      if (
        (r.forEach(function (e) {
          var t = e.split(':');
          n(t[0], t[1]);
        }),
        e)
      ) {
        var i = t[e];
        if (i) {
          var a = i.attributes;
          a &&
            a.forEach(function (e) {
              var t = e.split(':');
              n(t[0], t[1]);
            });
        }
      }
    }

    function c(e, r, i, t, n, a, o) {
      var s = r + ':',
        l = function (e) {
          e.forEach(function (e) {
            if (e.length > s.length && p.startsWith(e, s)) {
              var t = e.substr(s.length);
              if ('v' === t) i(r);
              else {
                var n = a[t];
                n && n.forEach(i);
              }
            }
          });
        };
      if (e) {
        var c = t[e];
        if (c) {
          var u = c.attributes;
          u && l(u);
        }
      }
      if ((l(n), o)) {
        var d = o[e];
        d && l(d);
      }
    }
    (o.HTMLTagSpecification = r),
      (o.HTML_TAGS = {
        html: new r(
          n(
            'tags.html',
            'The html element represents the root of an HTML document.'
          ),
          ['manifest']
        ),
        head: new r(
          n(
            'tags.head',
            'The head element represents a collection of metadata for the Document.'
          )
        ),
        title: new r(
          n(
            'tags.title',
            "The title element represents the document's title or name. Authors should use titles that identify their documents even when they are used out of context, for example in a user's history or bookmarks, or in search results. The document's title is often different from its first heading, since the first heading does not have to stand alone when taken out of context."
          )
        ),
        base: new r(
          n(
            'tags.base',
            'The base element allows authors to specify the document base URL for the purposes of resolving relative URLs, and the name of the default browsing context for the purposes of following hyperlinks. The element does not represent any content beyond this information.'
          ),
          ['href', 'target']
        ),
        link: new r(
          n(
            'tags.link',
            'The link element allows authors to link their document to other resources.'
          ),
          [
            'href',
            'crossorigin:xo',
            'rel',
            'media',
            'hreflang',
            'type',
            'sizes',
          ]
        ),
        meta: new r(
          n(
            'tags.meta',
            'The meta element represents various kinds of metadata that cannot be expressed using the title, base, link, style, and script elements.'
          ),
          ['name', 'http-equiv', 'content', 'charset']
        ),
        style: new r(
          n(
            'tags.style',
            'The style element allows authors to embed style information in their documents. The style element is one of several inputs to the styling processing model. The element does not represent content for the user.'
          ),
          ['media', 'nonce', 'type', 'scoped:v']
        ),
        body: new r(
          n(
            'tags.body',
            'The body element represents the content of the document.'
          ),
          [
            'onafterprint',
            'onbeforeprint',
            'onbeforeunload',
            'onhashchange',
            'onlanguagechange',
            'onmessage',
            'onoffline',
            'ononline',
            'onpagehide',
            'onpageshow',
            'onpopstate',
            'onstorage',
            'onunload',
          ]
        ),
        article: new r(
          n(
            'tags.article',
            'The article element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. Each article should be identified, typically by including a heading (h1–h6 element) as a child of the article element.'
          )
        ),
        section: new r(
          n(
            'tags.section',
            'The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element.'
          )
        ),
        nav: new r(
          n(
            'tags.nav',
            'The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links.'
          )
        ),
        aside: new r(
          n(
            'tags.aside',
            'The aside element represents a section of a page that consists of content that is tangentially related to the content around the aside element, and which could be considered separate from that content. Such sections are often represented as sidebars in printed typography.'
          )
        ),
        h1: new r(n('tags.h1', 'The h1 element represents a section heading.')),
        h2: new r(n('tags.h2', 'The h2 element represents a section heading.')),
        h3: new r(n('tags.h3', 'The h3 element represents a section heading.')),
        h4: new r(n('tags.h4', 'The h4 element represents a section heading.')),
        h5: new r(n('tags.h5', 'The h5 element represents a section heading.')),
        h6: new r(n('tags.h6', 'The h6 element represents a section heading.')),
        header: new r(
          n(
            'tags.header',
            'The header element represents introductory content for its nearest ancestor sectioning content or sectioning root element. A header typically contains a group of introductory or navigational aids. When the nearest ancestor sectioning content or sectioning root element is the body element, then it applies to the whole page.'
          )
        ),
        footer: new r(
          n(
            'tags.footer',
            'The footer element represents a footer for its nearest ancestor sectioning content or sectioning root element. A footer typically contains information about its section such as who wrote it, links to related documents, copyright data, and the like.'
          )
        ),
        address: new r(
          n(
            'tags.address',
            'The address element represents the contact information for its nearest article or body element ancestor. If that is the body element, then the contact information applies to the document as a whole.'
          )
        ),
        p: new r(n('tags.p', 'The p element represents a paragraph.')),
        hr: new r(
          n(
            'tags.hr',
            'The hr element represents a paragraph-level thematic break, e.g. a scene change in a story, or a transition to another topic within a section of a reference book.'
          )
        ),
        pre: new r(
          n(
            'tags.pre',
            'The pre element represents a block of preformatted text, in which structure is represented by typographic conventions rather than by elements.'
          )
        ),
        blockquote: new r(
          n(
            'tags.blockquote',
            'The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a footer or cite element, and optionally with in-line changes such as annotations and abbreviations.'
          ),
          ['cite']
        ),
        ol: new r(
          n(
            'tags.ol',
            'The ol element represents a list of items, where the items have been intentionally ordered, such that changing the order would change the meaning of the document.'
          ),
          ['reversed:v', 'start', 'type:lt']
        ),
        ul: new r(
          n(
            'tags.ul',
            'The ul element represents a list of items, where the order of the items is not important — that is, where changing the order would not materially change the meaning of the document.'
          )
        ),
        li: new r(
          n(
            'tags.li',
            "The li element represents a list item. If its parent element is an ol, ul, or menu element, then the element is an item of the parent element's list, as defined for those elements. Otherwise, the list item has no defined list-related relationship to any other li element."
          ),
          ['value']
        ),
        dl: new r(
          n(
            'tags.dl',
            'The dl element represents an association list consisting of zero or more name-value groups (a description list). A name-value group consists of one or more names (dt elements) followed by one or more values (dd elements), ignoring any nodes other than dt and dd elements. Within a single dl element, there should not be more than one dt element for each name.'
          )
        ),
        dt: new r(
          n(
            'tags.dt',
            'The dt element represents the term, or name, part of a term-description group in a description list (dl element).'
          )
        ),
        dd: new r(
          n(
            'tags.dd',
            'The dd element represents the description, definition, or value, part of a term-description group in a description list (dl element).'
          )
        ),
        figure: new r(
          n(
            'tags.figure',
            'The figure element represents some flow content, optionally with a caption, that is self-contained (like a complete sentence) and is typically referenced as a single unit from the main flow of the document.'
          )
        ),
        figcaption: new r(
          n(
            'tags.figcaption',
            "The figcaption element represents a caption or legend for the rest of the contents of the figcaption element's parent figure element, if any."
          )
        ),
        main: new r(
          n(
            'tags.main',
            'The main element represents the main content of the body of a document or application. The main content area consists of content that is directly related to or expands upon the central topic of a document or central functionality of an application.'
          )
        ),
        div: new r(
          n(
            'tags.div',
            'The div element has no special meaning at all. It represents its children. It can be used with the class, lang, and title attributes to mark up semantics common to a group of consecutive elements.'
          )
        ),
        a: new r(
          n(
            'tags.a',
            'If the a element has an href attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents.'
          ),
          ['href', 'target', 'download', 'ping', 'rel', 'hreflang', 'type']
        ),
        em: new r(
          n(
            'tags.em',
            'The em element represents stress emphasis of its contents.'
          )
        ),
        strong: new r(
          n(
            'tags.strong',
            'The strong element represents strong importance, seriousness, or urgency for its contents.'
          )
        ),
        small: new r(
          n(
            'tags.small',
            'The small element represents side comments such as small print.'
          )
        ),
        s: new r(
          n(
            'tags.s',
            'The s element represents contents that are no longer accurate or no longer relevant.'
          )
        ),
        cite: new r(
          n(
            'tags.cite',
            'The cite element represents a reference to a creative work. It must include the title of the work or the name of the author(person, people or organization) or an URL reference, or a reference in abbreviated form as per the conventions used for the addition of citation metadata.'
          )
        ),
        q: new r(
          n(
            'tags.q',
            'The q element represents some phrasing content quoted from another source.'
          ),
          ['cite']
        ),
        dfn: new r(
          n(
            'tags.dfn',
            'The dfn element represents the defining instance of a term. The paragraph, description list group, or section that is the nearest ancestor of the dfn element must also contain the definition(s) for the term given by the dfn element.'
          )
        ),
        abbr: new r(
          n(
            'tags.abbr',
            'The abbr element represents an abbreviation or acronym, optionally with its expansion. The title attribute may be used to provide an expansion of the abbreviation. The attribute, if specified, must contain an expansion of the abbreviation, and nothing else.'
          )
        ),
        ruby: new r(
          n(
            'tags.ruby',
            'The ruby element allows one or more spans of phrasing content to be marked with ruby annotations. Ruby annotations are short runs of text presented alongside base text, primarily used in East Asian typography as a guide for pronunciation or to include other annotations. In Japanese, this form of typography is also known as furigana. Ruby text can appear on either side, and sometimes both sides, of the base text, and it is possible to control its position using CSS. A more complete introduction to ruby can be found in the Use Cases & Exploratory Approaches for Ruby Markup document as well as in CSS Ruby Module Level 1. [RUBY-UC] [CSSRUBY]'
          )
        ),
        rb: new r(
          n(
            'tags.rb',
            "The rb element marks the base text component of a ruby annotation. When it is the child of a ruby element, it doesn't represent anything itself, but its parent ruby element uses it as part of determining what it represents."
          )
        ),
        rt: new r(
          n(
            'tags.rt',
            "The rt element marks the ruby text component of a ruby annotation. When it is the child of a ruby element or of an rtc element that is itself the child of a ruby element, it doesn't represent anything itself, but its ancestor ruby element uses it as part of determining what it represents."
          )
        ),
        rp: new r(
          n(
            'tags.rp',
            "The rp element is used to provide fallback text to be shown by user agents that don't support ruby annotations. One widespread convention is to provide parentheses around the ruby text component of a ruby annotation."
          )
        ),
        time: new r(
          n(
            'tags.time',
            'The time element represents its contents, along with a machine-readable form of those contents in the datetime attribute. The kind of content is limited to various kinds of dates, times, time-zone offsets, and durations, as described below.'
          ),
          ['datetime']
        ),
        code: new r(
          n(
            'tags.code',
            'The code element represents a fragment of computer code. This could be an XML element name, a file name, a computer program, or any other string that a computer would recognize.'
          )
        ),
        var: new r(
          n(
            'tags.var',
            'The var element represents a variable. This could be an actual variable in a mathematical expression or programming context, an identifier representing a constant, a symbol identifying a physical quantity, a function parameter, or just be a term used as a placeholder in prose.'
          )
        ),
        samp: new r(
          n(
            'tags.samp',
            'The samp element represents sample or quoted output from another program or computing system.'
          )
        ),
        kbd: new r(
          n(
            'tags.kbd',
            'The kbd element represents user input (typically keyboard input, although it may also be used to represent other input, such as voice commands).'
          )
        ),
        sub: new r(n('tags.sub', 'The sub element represents a subscript.')),
        sup: new r(n('tags.sup', 'The sup element represents a superscript.')),
        i: new r(
          n(
            'tags.i',
            'The i element represents a span of text in an alternate voice or mood, or otherwise offset from the normal prose in a manner indicating a different quality of text, such as a taxonomic designation, a technical term, an idiomatic phrase from another language, transliteration, a thought, or a ship name in Western texts.'
          )
        ),
        b: new r(
          n(
            'tags.b',
            'The b element represents a span of text to which attention is being drawn for utilitarian purposes without conveying any extra importance and with no implication of an alternate voice or mood, such as key words in a document abstract, product names in a review, actionable words in interactive text-driven software, or an article lede.'
          )
        ),
        u: new r(
          n(
            'tags.u',
            'The u element represents a span of text with an unarticulated, though explicitly rendered, non-textual annotation, such as labeling the text as being a proper name in Chinese text (a Chinese proper name mark), or labeling the text as being misspelt.'
          )
        ),
        mark: new r(
          n(
            'tags.mark',
            "The mark element represents a run of text in one document marked or highlighted for reference purposes, due to its relevance in another context. When used in a quotation or other block of text referred to from the prose, it indicates a highlight that was not originally present but which has been added to bring the reader's attention to a part of the text that might not have been considered important by the original author when the block was originally written, but which is now under previously unexpected scrutiny. When used in the main prose of a document, it indicates a part of the document that has been highlighted due to its likely relevance to the user's current activity."
          )
        ),
        bdi: new r(
          n(
            'tags.bdi',
            'The bdi element represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting. [BIDI]'
          )
        ),
        bdo: new r(
          n(
            'tags.dbo',
            'The bdo element represents explicit text directionality formatting control for its children. It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override. [BIDI]'
          )
        ),
        span: new r(
          n(
            'tags.span',
            "The span element doesn't mean anything on its own, but can be useful when used together with the global attributes, e.g. class, lang, or dir. It represents its children."
          )
        ),
        br: new r(n('tags.br', 'The br element represents a line break.')),
        wbr: new r(
          n('tags.wbr', 'The wbr element represents a line break opportunity.')
        ),
        ins: new r(
          n(
            'tags.ins',
            'The ins element represents an addition to the document.'
          )
        ),
        del: new r(
          n(
            'tags.del',
            'The del element represents a removal from the document.'
          ),
          ['cite', 'datetime']
        ),
        picture: new r(
          n(
            'tags.picture',
            'The picture element is a container which provides multiple sources to its contained img element to allow authors to declaratively control or give hints to the user agent about which image resource to use, based on the screen pixel density, viewport size, image format, and other factors. It represents its children.'
          )
        ),
        img: new r(n('tags.img', 'An img element represents an image.'), [
          'alt',
          'src',
          'srcset',
          'crossorigin:xo',
          'usemap',
          'ismap:v',
          'width',
          'height',
        ]),
        iframe: new r(
          n(
            'tags.iframe',
            'The iframe element represents a nested browsing context.'
          ),
          [
            'src',
            'srcdoc',
            'name',
            'sandbox:sb',
            'seamless:v',
            'allowfullscreen:v',
            'width',
            'height',
          ]
        ),
        embed: new r(
          n(
            'tags.embed',
            'The embed element provides an integration point for an external (typically non-HTML) application or interactive content.'
          ),
          ['src', 'type', 'width', 'height']
        ),
        object: new r(
          n(
            'tags.object',
            'The object element can represent an external resource, which, depending on the type of the resource, will either be treated as an image, as a nested browsing context, or as an external resource to be processed by a plugin.'
          ),
          [
            'data',
            'type',
            'typemustmatch:v',
            'name',
            'usemap',
            'form',
            'width',
            'height',
          ]
        ),
        param: new r(
          n(
            'tags.param',
            'The param element defines parameters for plugins invoked by object elements. It does not represent anything on its own.'
          ),
          ['name', 'value']
        ),
        video: new r(
          n(
            'tags.video',
            'A video element is used for playing videos or movies, and audio files with captions.'
          ),
          [
            'src',
            'crossorigin:xo',
            'poster',
            'preload:pl',
            'autoplay:v',
            'mediagroup',
            'loop:v',
            'muted:v',
            'controls:v',
            'width',
            'height',
          ]
        ),
        audio: new r(
          n(
            'tags.audio',
            'An audio element represents a sound or audio stream.'
          ),
          [
            'src',
            'crossorigin:xo',
            'preload:pl',
            'autoplay:v',
            'mediagroup',
            'loop:v',
            'muted:v',
            'controls:v',
          ]
        ),
        source: new r(
          n(
            'tags.source',
            'The source element allows authors to specify multiple alternative media resources for media elements. It does not represent anything on its own.'
          ),
          ['src', 'type']
        ),
        track: new r(
          n(
            'tags.track',
            'The track element allows authors to specify explicit external timed text tracks for media elements. It does not represent anything on its own.'
          ),
          ['default:v', 'kind:tk', 'label', 'src', 'srclang']
        ),
        map: new r(
          n(
            'tags.map',
            'The map element, in conjunction with an img element and any area element descendants, defines an image map. The element represents its children.'
          ),
          ['name']
        ),
        area: new r(
          n(
            'tags.area',
            'The area element represents either a hyperlink with some text and a corresponding area on an image map, or a dead area on an image map.'
          ),
          [
            'alt',
            'coords',
            'shape:sh',
            'href',
            'target',
            'download',
            'ping',
            'rel',
            'hreflang',
            'type',
          ]
        ),
        table: new r(
          n(
            'tags.table',
            'The table element represents data with more than one dimension, in the form of a table.'
          ),
          ['sortable:v', 'border']
        ),
        caption: new r(
          n(
            'tags.caption',
            'The caption element represents the title of the table that is its parent, if it has a parent and that is a table element.'
          )
        ),
        colgroup: new r(
          n(
            'tags.colgroup',
            'The colgroup element represents a group of one or more columns in the table that is its parent, if it has a parent and that is a table element.'
          ),
          ['span']
        ),
        col: new r(
          n(
            'tags.col',
            'If a col element has a parent and that is a colgroup element that itself has a parent that is a table element, then the col element represents one or more columns in the column group represented by that colgroup.'
          ),
          ['span']
        ),
        tbody: new r(
          n(
            'tags.tbody',
            'The tbody element represents a block of rows that consist of a body of data for the parent table element, if the tbody element has a parent and it is a table.'
          )
        ),
        thead: new r(
          n(
            'tags.thead',
            'The thead element represents the block of rows that consist of the column labels (headers) for the parent table element, if the thead element has a parent and it is a table.'
          )
        ),
        tfoot: new r(
          n(
            'tags.tfoot',
            'The tfoot element represents the block of rows that consist of the column summaries (footers) for the parent table element, if the tfoot element has a parent and it is a table.'
          )
        ),
        tr: new r(
          n('tags.tr', 'The tr element represents a row of cells in a table.')
        ),
        td: new r(
          n('tags.td', 'The td element represents a data cell in a table.'),
          ['colspan', 'rowspan', 'headers']
        ),
        th: new r(
          n('tags.th', 'The th element represents a header cell in a table.'),
          ['colspan', 'rowspan', 'headers', 'scope:s', 'sorted', 'abbr']
        ),
        form: new r(
          n(
            'tags.form',
            'The form element represents a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing.'
          ),
          [
            'accept-charset',
            'action',
            'autocomplete:o',
            'enctype:et',
            'method:m',
            'name',
            'novalidate:v',
            'target',
          ]
        ),
        label: new r(
          n(
            'tags.label',
            "The label element represents a caption in a user interface. The caption can be associated with a specific form control, known as the label element's labeled control, either using the for attribute, or by putting the form control inside the label element itself."
          ),
          ['form', 'for']
        ),
        input: new r(
          n(
            'tags.input',
            'The input element represents a typed data field, usually with a form control to allow the user to edit the data.'
          ),
          [
            'accept',
            'alt',
            'autocomplete:inputautocomplete',
            'autofocus:v',
            'checked:v',
            'dirname',
            'disabled:v',
            'form',
            'formaction',
            'formenctype:et',
            'formmethod:fm',
            'formnovalidate:v',
            'formtarget',
            'height',
            'inputmode:im',
            'list',
            'max',
            'maxlength',
            'min',
            'minlength',
            'multiple:v',
            'name',
            'pattern',
            'placeholder',
            'readonly:v',
            'required:v',
            'size',
            'src',
            'step',
            'type:t',
            'value',
            'width',
          ]
        ),
        button: new r(
          n(
            'tags.button',
            'The button element represents a button labeled by its contents.'
          ),
          [
            'autofocus:v',
            'disabled:v',
            'form',
            'formaction',
            'formenctype:et',
            'formmethod:fm',
            'formnovalidate:v',
            'formtarget',
            'name',
            'type:bt',
            'value',
          ]
        ),
        select: new r(
          n(
            'tags.select',
            'The select element represents a control for selecting amongst a set of options.'
          ),
          [
            'autocomplete:inputautocomplete',
            'autofocus:v',
            'disabled:v',
            'form',
            'multiple:v',
            'name',
            'required:v',
            'size',
          ]
        ),
        datalist: new r(
          n(
            'tags.datalist',
            'The datalist element represents a set of option elements that represent predefined options for other controls. In the rendering, the datalist element represents nothing and it, along with its children, should be hidden.'
          )
        ),
        optgroup: new r(
          n(
            'tags.optgroup',
            'The optgroup element represents a group of option elements with a common label.'
          ),
          ['disabled:v', 'label']
        ),
        option: new r(
          n(
            'tags.option',
            'The option element represents an option in a select element or as part of a list of suggestions in a datalist element.'
          ),
          ['disabled:v', 'label', 'selected:v', 'value']
        ),
        textarea: new r(
          n(
            'tags.textarea',
            "The textarea element represents a multiline plain text edit control for the element's raw value. The contents of the control represent the control's default value."
          ),
          [
            'autocomplete:inputautocomplete',
            'autofocus:v',
            'cols',
            'dirname',
            'disabled:v',
            'form',
            'inputmode:im',
            'maxlength',
            'minlength',
            'name',
            'placeholder',
            'readonly:v',
            'required:v',
            'rows',
            'wrap:w',
          ]
        ),
        output: new r(
          n(
            'tags.output',
            'The output element represents the result of a calculation performed by the application, or the result of a user action.'
          ),
          ['for', 'form', 'name']
        ),
        progress: new r(
          n(
            'tags.progress',
            'The progress element represents the completion progress of a task. The progress is either indeterminate, indicating that progress is being made but that it is not clear how much more work remains to be done before the task is complete (e.g. because the task is waiting for a remote host to respond), or the progress is a number in the range zero to a maximum, giving the fraction of work that has so far been completed.'
          ),
          ['value', 'max']
        ),
        meter: new r(
          n(
            'tags.meter',
            'The meter element represents a scalar measurement within a known range, or a fractional value; for example disk usage, the relevance of a query result, or the fraction of a voting population to have selected a particular candidate.'
          ),
          ['value', 'min', 'max', 'low', 'high', 'optimum']
        ),
        fieldset: new r(
          n(
            'tags.fieldset',
            'The fieldset element represents a set of form controls optionally grouped under a common name.'
          ),
          ['disabled:v', 'form', 'name']
        ),
        legend: new r(
          n(
            'tags.legend',
            "The legend element represents a caption for the rest of the contents of the legend element's parent fieldset element, if any."
          )
        ),
        details: new r(
          n(
            'tags.details',
            'The details element represents a disclosure widget from which the user can obtain additional information or controls.'
          ),
          ['open:v']
        ),
        summary: new r(
          n(
            'tags.summary',
            "The summary element represents a summary, caption, or legend for the rest of the contents of the summary element's parent details element, if any."
          )
        ),
        dialog: new r(
          n(
            'tags.dialog',
            'The dialog element represents a part of an application that a user interacts with to perform a task, for example a dialog box, inspector, or window.'
          )
        ),
        script: new r(
          n(
            'tags.script',
            'The script element allows authors to include dynamic script and data blocks in their documents. The element does not represent content for the user.'
          ),
          [
            'src',
            'type',
            'charset',
            'async:v',
            'defer:v',
            'crossorigin:xo',
            'nonce',
          ]
        ),
        noscript: new r(
          n(
            'tags.noscript',
            "The noscript element represents nothing if scripting is enabled, and represents its children if scripting is disabled. It is used to present different markup to user agents that support scripting and those that don't support scripting, by affecting how the document is parsed."
          )
        ),
        template: new r(
          n(
            'tags.template',
            'The template element is used to declare fragments of HTML that can be cloned and inserted in the document by script.'
          )
        ),
        canvas: new r(
          n(
            'tags.canvas',
            'The canvas element provides scripts with a resolution-dependent bitmap canvas, which can be used for rendering graphs, game graphics, art, or other visual images on the fly.'
          ),
          ['width', 'height']
        ),
      }),
      (o.IONIC_TAGS = {
        'ion-checkbox': new r(
          n(
            'tags.ion.checkbox',
            "The checkbox is no different than the HTML checkbox input, except it's styled differently. The checkbox behaves like any AngularJS checkbox."
          ),
          ['name', 'ng-false-value', 'ng-model', 'ng-true-value']
        ),
        'ion-content': new r(
          n(
            'tags.ion.content',
            "The ionContent directive provides an easy to use content area that can be configured to use Ionic's custom Scroll View, or the built-in overflow scrolling of the browser."
          ),
          [
            'delegate-handle',
            'direction:scrolldir',
            'has-bouncing:b',
            'locking:b',
            'on-scroll',
            'on-scroll-complete',
            'overflow-scroll:b',
            'padding:b',
            'scroll:b',
            'scrollbar-x:b',
            'scrollbar-y:b',
            'start-x',
            'start-y',
          ]
        ),
        'ion-delete-button': new r(
          n('tags.ion.deletebutton', 'Child of ionItem'),
          []
        ),
        'ion-footer-bar': new r(
          n(
            'tags.ion.footerbar',
            'Adds a fixed footer bar below some content. Can also be a subfooter (higher up) if the "bar-subfooter" class is applied.'
          ),
          ['align-title:align', 'keyboard-attach:v']
        ),
        'ion-header-bar': new r(
          n(
            'tags.ion.headerbar',
            'Adds a fixed header bar above some content. Can also be a subheader (lower down) if the "bar-subheader" class is applied.'
          ),
          ['align-title:align', 'no-tap-scroll:b']
        ),
        'ion-infinite-scroll': new r(
          n(
            'tags.ion.infinitescroll',
            'Child of ionContent or ionScroll. The ionInfiniteScroll directive allows you to call a function whenever the user gets to the bottom of the page or near the bottom of the page.'
          ),
          ['distance', 'icon', 'immediate-check:b', 'on-infinite', 'spinner']
        ),
        'ion-input': new r(
          n(
            'tags.ion.input',
            'ionInput is meant for text type inputs only. Ionic uses an actual <input type="text"> HTML element within the component, with Ionic wrapping to better handle the user experience and interactivity.'
          ),
          ['type:inputtype', 'clearInput:v']
        ),
        'ion-item': new r(n('tags.ion.item', 'Child of ionList.'), []),
        'ion-list': new r(
          n(
            'tags.ion.list',
            'The List is a widely used interface element in almost any mobile app, and can include content ranging from basic text all the way to buttons, toggles, icons, and thumbnails.'
          ),
          [
            'can-swipe:b',
            'delegate-handle',
            'show-delete:b',
            'show-reorder:b',
            'type:listtype',
          ]
        ),
        'ion-modal-view': new r(
          n(
            'tags.ion.modalview',
            "The Modal is a content pane that can go over the user's main view temporarily. Usually used for making a choice or editing an item."
          ),
          []
        ),
        'ion-nav-back-button': new r(
          n(
            'tags.ion.navbackbutton',
            'Child of ionNavBar. Creates a back button inside an ionNavBar. The back button will appear when the user is able to go back in the current navigation stack.'
          ),
          []
        ),
        'ion-nav-bar': new r(
          n(
            'tags.ion.navbar',
            'If you have an ionNavView directive, you can also create an <ion-nav-bar>, which will create a topbar that updates as the application state changes.'
          ),
          ['align-title:align', 'delegate-handle', 'no-tap-scroll:b']
        ),
        'ion-nav-buttons': new r(
          n(
            'tags.ion.navbuttons',
            'Child of ionNavView. Use ionNavButtons to set the buttons on your ionNavBar from within an ionView.'
          ),
          ['side:navsides']
        ),
        'ion-nav-title': new r(
          n(
            'tags.ion.navtitle',
            'Child of ionNavView. The ionNavTitle directive replaces an ionNavBar title text with custom HTML from within an ionView template.'
          ),
          []
        ),
        'ion-nav-view': new r(
          n(
            'tags.ion.navview',
            'The ionNavView directive is used to render templates in your application. Each template is part of a state. States are usually mapped to a url, and are defined programatically using angular-ui-router.'
          ),
          ['name']
        ),
        'ion-option-button': new r(
          n(
            'tags.ion.optionbutton',
            'Child of ionItem. Creates an option button inside a list item, that is visible when the item is swiped to the left by the user.'
          ),
          []
        ),
        'ion-pane': new r(
          n(
            'tags.ion.pane',
            'A simple container that fits content, with no side effects. Adds the "pane" class to the element.'
          ),
          []
        ),
        'ion-popover-view': new r(
          n(
            'tags.ion.popoverview',
            "The Popover is a view that floats above an app's content. Popovers provide an easy way to present or gather information from the user."
          ),
          []
        ),
        'ion-radio': new r(
          n(
            'tags.ion.radio',
            "The radio ionRirective is no different than the HTML radio input, except it's styled differently. The ionRadio behaves like AngularJS radio input."
          ),
          [
            'disabled:b',
            'icon',
            'name',
            'ng-disabled:b',
            'ng-model',
            'ng-value',
            'value',
          ]
        ),
        'ion-refresher': new r(
          n(
            'tags.ion.refresher',
            'Child of ionContent or ionScroll. Allows you to add pull-to-refresh to a scrollView. Place it as the first child of your ionContent or ionScroll element.'
          ),
          [
            'disable-pulling-rotation:b',
            'on-pulling',
            'on-refresh',
            'pulling-icon',
            'pulling-text',
            'refreshing-icon',
            'spinner',
          ]
        ),
        'ion-reorder-button': new r(
          n('tags.ion.reorderbutton', 'Child of ionItem.'),
          ['on-reorder']
        ),
        'ion-scroll': new r(
          n(
            'tags.ion.scroll',
            'Creates a scrollable container for all content inside.'
          ),
          [
            'delegate-handle',
            'direction:scrolldir',
            'has-bouncing:b',
            'locking:b',
            'max-zoom',
            'min-zoom',
            'on-refresh',
            'on-scroll',
            'paging:b',
            'scrollbar-x:b',
            'scrollbar-y:b',
            'zooming:b',
          ]
        ),
        'ion-side-menu': new r(
          n(
            'tags.ion.sidemenu',
            'Child of ionSideMenus. A container for a side menu, sibling to an ionSideMenuContent directive.'
          ),
          ['is-enabled:b', 'expose-aside-when', 'side:navsides', 'width']
        ),
        'ion-side-menu-content': new r(
          n(
            'tags.ion.sidemenucontent',
            'Child of ionSideMenus. A container for the main visible content, sibling to one or more ionSideMenu directives.'
          ),
          ['drag-content:b', 'edge-drag-threshold']
        ),
        'ion-side-menus': new r(
          n(
            'tags.ion.sidemenus',
            'A container element for side menu(s) and the main content. Allows the left and/or right side menu to be toggled by dragging the main content area side to side.'
          ),
          ['delegate-handle', 'enable-menu-with-back-views:b']
        ),
        'ion-slide': new r(
          n(
            'tags.ion.slide',
            'Child of ionSlideBox. Displays a slide inside of a slidebox.'
          ),
          []
        ),
        'ion-slide-box': new r(
          n(
            'tags.ion.slidebox',
            'The Slide Box is a multi-page container where each page can be swiped or dragged between.'
          ),
          [
            'active-slide',
            'auto-play:b',
            'delegate-handle',
            'does-continue:b',
            'on-slide-changed',
            'pager-click',
            'show-pager:b',
            'slide-interval',
          ]
        ),
        'ion-spinner': new r(
          n(
            'tags.ion.spinner',
            'The ionSpinner directive provides a variety of animated spinners.'
          ),
          ['icon']
        ),
        'ion-tab': new r(
          n(
            'tags.ion.tab',
            "Child of ionTabs. Contains a tab's content. The content only exists while the given tab is selected."
          ),
          [
            'badge',
            'badge-style',
            'disabled',
            'hidden',
            'href',
            'icon',
            'icon-off',
            'icon-on',
            'ng-click',
            'on-deselect',
            'on-select',
            'title',
          ]
        ),
        'ion-tabs': new r(
          n(
            'tags.ion.tabs',
            'Powers a multi-tabbed interface with a tab bar and a set of "pages" that can be tabbed through.'
          ),
          ['delegate-handle']
        ),
        'ion-title': new r(
          n(
            'tags.ion.title',
            'ion-title is a component that sets the title of the ionNavbar'
          ),
          []
        ),
        'ion-toggle': new r(
          n(
            'tags.ion.toggle',
            "A toggle is an animated switch which binds a given model to a boolean. Allows dragging of the switch's nub. The toggle behaves like any AngularJS checkbox otherwise."
          ),
          [
            'name',
            'ng-false-value',
            'ng-model',
            'ng-true-value',
            'toggle-class',
          ]
        ),
        'ion-view ': new r(
          n(
            'tags.ion.view',
            'Child of ionNavView. A container for view content and any navigational and header bar information.'
          ),
          [
            'cache-view:b',
            'can-swipe-back:b',
            'hide-back-button:b',
            'hide-nav-bar:b',
            'view-title',
          ]
        ),
      }),
      (o.getHTML5TagProvider = function () {
        var r = [
            'aria-activedescendant',
            'aria-atomic:b',
            'aria-autocomplete:autocomplete',
            'aria-busy:b',
            'aria-checked:tristate',
            'aria-colcount',
            'aria-colindex',
            'aria-colspan',
            'aria-controls',
            'aria-current:current',
            'aria-describedat',
            'aria-describedby',
            'aria-disabled:b',
            'aria-dropeffect:dropeffect',
            'aria-errormessage',
            'aria-expanded:u',
            'aria-flowto',
            'aria-grabbed:u',
            'aria-haspopup:b',
            'aria-hidden:b',
            'aria-invalid:invalid',
            'aria-kbdshortcuts',
            'aria-label',
            'aria-labelledby',
            'aria-level',
            'aria-live:live',
            'aria-modal:b',
            'aria-multiline:b',
            'aria-multiselectable:b',
            'aria-orientation:orientation',
            'aria-owns',
            'aria-placeholder',
            'aria-posinset',
            'aria-pressed:tristate',
            'aria-readonly:b',
            'aria-relevant:relevant',
            'aria-required:b',
            'aria-roledescription',
            'aria-rowcount',
            'aria-rowindex',
            'aria-rowspan',
            'aria-selected:u',
            'aria-setsize',
            'aria-sort:sort',
            'aria-valuemax',
            'aria-valuemin',
            'aria-valuenow',
            'aria-valuetext',
            'accesskey',
            'class',
            'contenteditable:b',
            'contextmenu',
            'dir:d',
            'draggable:b',
            'dropzone',
            'hidden:v',
            'id',
            'itemid',
            'itemprop',
            'itemref',
            'itemscope:v',
            'itemtype',
            'lang',
            'role:roles',
            'spellcheck:b',
            'style',
            'tabindex',
            'title',
            'translate:y',
          ],
          n = [
            'onabort',
            'onblur',
            'oncanplay',
            'oncanplaythrough',
            'onchange',
            'onclick',
            'oncontextmenu',
            'ondblclick',
            'ondrag',
            'ondragend',
            'ondragenter',
            'ondragleave',
            'ondragover',
            'ondragstart',
            'ondrop',
            'ondurationchange',
            'onemptied',
            'onended',
            'onerror',
            'onfocus',
            'onformchange',
            'onforminput',
            'oninput',
            'oninvalid',
            'onkeydown',
            'onkeypress',
            'onkeyup',
            'onload',
            'onloadeddata',
            'onloadedmetadata',
            'onloadstart',
            'onmousedown',
            'onmousemove',
            'onmouseout',
            'onmouseover',
            'onmouseup',
            'onmousewheel',
            'onpause',
            'onplay',
            'onplaying',
            'onprogress',
            'onratechange',
            'onreset',
            'onresize',
            'onreadystatechange',
            'onscroll',
            'onseeked',
            'onseeking',
            'onselect',
            'onshow',
            'onstalled',
            'onsubmit',
            'onsuspend',
            'ontimeupdate',
            'onvolumechange',
            'onwaiting',
          ],
          i = {
            b: ['true', 'false'],
            u: ['true', 'false', 'undefined'],
            o: ['on', 'off'],
            y: ['yes', 'no'],
            w: ['soft', 'hard'],
            d: ['ltr', 'rtl', 'auto'],
            m: ['GET', 'POST', 'dialog'],
            fm: ['GET', 'POST'],
            s: ['row', 'col', 'rowgroup', 'colgroup'],
            t: [
              'hidden',
              'text',
              'search',
              'tel',
              'url',
              'email',
              'password',
              'datetime',
              'date',
              'month',
              'week',
              'time',
              'datetime-local',
              'number',
              'range',
              'color',
              'checkbox',
              'radio',
              'file',
              'submit',
              'image',
              'reset',
              'button',
            ],
            im: [
              'verbatim',
              'latin',
              'latin-name',
              'latin-prose',
              'full-width-latin',
              'kana',
              'kana-name',
              'katakana',
              'numeric',
              'tel',
              'email',
              'url',
            ],
            bt: ['button', 'submit', 'reset', 'menu'],
            lt: ['1', 'a', 'A', 'i', 'I'],
            mt: ['context', 'toolbar'],
            mit: ['command', 'checkbox', 'radio'],
            et: [
              'application/x-www-form-urlencoded',
              'multipart/form-data',
              'text/plain',
            ],
            tk: [
              'subtitles',
              'captions',
              'descriptions',
              'chapters',
              'metadata',
            ],
            pl: ['none', 'metadata', 'auto'],
            sh: ['circle', 'default', 'poly', 'rect'],
            xo: ['anonymous', 'use-credentials'],
            sb: [
              'allow-forms',
              'allow-modals',
              'allow-pointer-lock',
              'allow-popups',
              'allow-popups-to-escape-sandbox',
              'allow-same-origin',
              'allow-scripts',
              'allow-top-navigation',
            ],
            tristate: ['true', 'false', 'mixed', 'undefined'],
            inputautocomplete: [
              'additional-name',
              'address-level1',
              'address-level2',
              'address-level3',
              'address-level4',
              'address-line1',
              'address-line2',
              'address-line3',
              'bday',
              'bday-year',
              'bday-day',
              'bday-month',
              'billing',
              'cc-additional-name',
              'cc-csc',
              'cc-exp',
              'cc-exp-month',
              'cc-exp-year',
              'cc-family-name',
              'cc-given-name',
              'cc-name',
              'cc-number',
              'cc-type',
              'country',
              'country-name',
              'current-password',
              'email',
              'family-name',
              'fax',
              'given-name',
              'home',
              'honorific-prefix',
              'honorific-suffix',
              'impp',
              'language',
              'mobile',
              'name',
              'new-password',
              'nickname',
              'organization',
              'organization-title',
              'pager',
              'photo',
              'postal-code',
              'sex',
              'shipping',
              'street-address',
              'tel-area-code',
              'tel',
              'tel-country-code',
              'tel-extension',
              'tel-local',
              'tel-local-prefix',
              'tel-local-suffix',
              'tel-national',
              'transaction-amount',
              'transaction-currency',
              'url',
              'username',
              'work',
            ],
            autocomplete: ['inline', 'list', 'both', 'none'],
            current: [
              'page',
              'step',
              'location',
              'date',
              'time',
              'true',
              'false',
            ],
            dropeffect: ['copy', 'move', 'link', 'execute', 'popup', 'none'],
            invalid: ['grammar', 'false', 'spelling', 'true'],
            live: ['off', 'polite', 'assertive'],
            orientation: ['vertical', 'horizontal', 'undefined'],
            relevant: [
              'additions',
              'removals',
              'text',
              'all',
              'additions text',
            ],
            sort: ['ascending', 'descending', 'none', 'other'],
            roles: [
              'alert',
              'alertdialog',
              'button',
              'checkbox',
              'dialog',
              'gridcell',
              'link',
              'log',
              'marquee',
              'menuitem',
              'menuitemcheckbox',
              'menuitemradio',
              'option',
              'progressbar',
              'radio',
              'scrollbar',
              'searchbox',
              'slider',
              'spinbutton',
              'status',
              'switch',
              'tab',
              'tabpanel',
              'textbox',
              'timer',
              'tooltip',
              'treeitem',
              'combobox',
              'grid',
              'listbox',
              'menu',
              'menubar',
              'radiogroup',
              'tablist',
              'tree',
              'treegrid',
              'application',
              'article',
              'cell',
              'columnheader',
              'definition',
              'directory',
              'document',
              'feed',
              'figure',
              'group',
              'heading',
              'img',
              'list',
              'listitem',
              'math',
              'none',
              'note',
              'presentation',
              'region',
              'row',
              'rowgroup',
              'rowheader',
              'separator',
              'table',
              'term',
              'text',
              'toolbar',
              'banner',
              'complementary',
              'contentinfo',
              'form',
              'main',
              'navigation',
              'region',
              'search',
              'doc-abstract',
              'doc-acknowledgments',
              'doc-afterword',
              'doc-appendix',
              'doc-backlink',
              'doc-biblioentry',
              'doc-bibliography',
              'doc-biblioref',
              'doc-chapter',
              'doc-colophon',
              'doc-conclusion',
              'doc-cover',
              'doc-credit',
              'doc-credits',
              'doc-dedication',
              'doc-endnote',
              'doc-endnotes',
              'doc-epigraph',
              'doc-epilogue',
              'doc-errata',
              'doc-example',
              'doc-footnote',
              'doc-foreword',
              'doc-glossary',
              'doc-glossref',
              'doc-index',
              'doc-introduction',
              'doc-noteref',
              'doc-notice',
              'doc-pagebreak',
              'doc-pagelist',
              'doc-part',
              'doc-preface',
              'doc-prologue',
              'doc-pullquote',
              'doc-qna',
              'doc-subtitle',
              'doc-tip',
              'doc-toc',
            ],
          };
        return {
          getId: function () {
            return 'html5';
          },
          isApplicable: function () {
            return !0;
          },
          collectTags: function (e) {
            return s(e, o.HTML_TAGS);
          },
          collectAttributes: function (e, t) {
            l(e, t, o.HTML_TAGS, r),
              n.forEach(function (e) {
                t(e, 'event');
              });
          },
          collectValues: function (e, t, n) {
            return c(e, t, n, o.HTML_TAGS, r, i);
          },
        };
      }),
      (o.getAngularTagProvider = function () {
        var r = {
            input: [
              'ng-model',
              'ng-required',
              'ng-minlength',
              'ng-maxlength',
              'ng-pattern',
              'ng-trim',
            ],
            select: ['ng-model'],
            textarea: [
              'ng-model',
              'ng-required',
              'ng-minlength',
              'ng-maxlength',
              'ng-pattern',
              'ng-trim',
            ],
          },
          i = [
            'ng-app',
            'ng-strict-di',
            'ng-bind',
            'ng-bind-html',
            'ng-bind-template',
            'ng-blur',
            'ng-change',
            'ng-checked',
            'ng-class',
            'ng-class-even',
            'ng-class-odd',
            'ng-click',
            'ng-cloak',
            'ng-controller',
            'ng-copy',
            'ng-csp',
            'ng-cut',
            'ng-dblclick',
            'ng-disabled',
            'ng-focus',
            'ng-form',
            'ng-hide',
            'ng-href',
            'ng-if',
            'ng-include',
            'ng-init',
            'ng-jq',
            'ng-keydown',
            'ng-keypress',
            'ng-keyup',
            'ng-list',
            'ng-model-options',
            'ng-mousedown',
            'ng-mouseenter',
            'ng-mouseleave',
            'ng-mousemove',
            'ng-mouseover',
            'ng-mouseup',
            'ng-non-bindable',
            'ng-open',
            'ng-options',
            'ng-paste',
            'ng-pluralize',
            'ng-readonly',
            'ng-repeat',
            'ng-selected',
            'ng-show',
            'ng-src',
            'ng-srcset',
            'ng-style',
            'ng-submit',
            'ng-switch',
            'ng-transclude',
            'ng-value',
          ];
        return {
          getId: function () {
            return 'angular1';
          },
          isApplicable: function (e) {
            return 'html' === e;
          },
          collectTags: function (e) {},
          collectAttributes: function (e, t) {
            if (e) {
              var n = r[e];
              n &&
                n.forEach(function (e) {
                  t(e), t('data-' + e);
                });
            }
            i.forEach(function (e) {
              t(e), t('data-' + e);
            });
          },
          collectValues: function (e, t, n) {},
        };
      }),
      (o.getIonicTagProvider = function () {
        var r = {
            a: ['nav-direction:navdir', 'nav-transition:trans'],
            button: ['menu-toggle:menusides'],
          },
          i = [
            'collection-repeat',
            'force-refresh-images:b',
            'ion-stop-event',
            'item-height',
            'item-render-buffer',
            'item-width',
            'menu-close:v',
            'on-double-tap',
            'on-drag',
            'on-drag-down',
            'on-drag-left',
            'on-drag-right',
            'on-drag-up',
            'on-hold',
            'on-release',
            'on-swipe',
            'on-swipe-down',
            'on-swipe-left',
            'on-swipe-right',
            'on-swipe-up',
            'on-tap',
            'on-touch',
          ],
          a = {
            align: ['center', 'left', 'right'],
            b: ['true', 'false'],
            inputtype: [
              'email',
              'number',
              'password',
              'search',
              'tel',
              'text',
              'url',
            ],
            listtype: ['card', 'list-inset'],
            menusides: ['left', 'right'],
            navdir: ['back', 'enter', 'exit', 'forward', 'swap'],
            navsides: ['left', 'primary', 'right', 'secondary'],
            scrolldir: ['x', 'xy', 'y'],
            trans: ['android', 'ios', 'none'],
          };
        return {
          getId: function () {
            return 'ionic';
          },
          isApplicable: function (e) {
            return 'html' === e;
          },
          collectTags: function (e) {
            return s(e, o.IONIC_TAGS);
          },
          collectAttributes: function (e, n) {
            if ((l(e, n, o.IONIC_TAGS, i), e)) {
              var t = r[e];
              t &&
                t.forEach(function (e) {
                  var t = e.split(':');
                  n(t[0], t[1]);
                });
            }
          },
          collectValues: function (e, t, n) {
            return c(e, t, n, o.IONIC_TAGS, i, a, r);
          },
        };
      });
  }),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define(
          'vscode-html-languageservice/parser/htmlParser',
          [
            'require',
            'exports',
            './htmlScanner',
            '../utils/arrays',
            './htmlTags',
            '../htmlLanguageTypes',
          ],
          e
        );
  })(function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
      value: !0,
    });
    var d = e('./htmlScanner'),
      i = e('../utils/arrays'),
      p = e('./htmlTags'),
      h = e('../htmlLanguageTypes'),
      f = (function () {
        function e(e, t, n, r) {
          (this.start = e),
            (this.end = t),
            (this.children = n),
            (this.parent = r),
            (this.closed = !1);
        }
        return (
          Object.defineProperty(e.prototype, 'attributeNames', {
            get: function () {
              return this.attributes ? Object.keys(this.attributes) : [];
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.isSameTag = function (e) {
            return (
              this.tag &&
              e &&
              this.tag.length === e.length &&
              this.tag.toLowerCase() === e
            );
          }),
          Object.defineProperty(e.prototype, 'firstChild', {
            get: function () {
              return this.children[0];
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'lastChild', {
            get: function () {
              return this.children.length
                ? this.children[this.children.length - 1]
                : void 0;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.findNodeBefore = function (t) {
            var e =
              i.findFirst(this.children, function (e) {
                return t <= e.start;
              }) - 1;
            if (0 <= e) {
              var n = this.children[e];
              if (t > n.start) {
                if (t < n.end) return n.findNodeBefore(t);
                var r = n.lastChild;
                return r && r.end === n.end ? n.findNodeBefore(t) : n;
              }
            }
            return this;
          }),
          (e.prototype.findNodeAt = function (t) {
            var e =
              i.findFirst(this.children, function (e) {
                return t <= e.start;
              }) - 1;
            if (0 <= e) {
              var n = this.children[e];
              if (t > n.start && t <= n.end) return n.findNodeAt(t);
            }
            return this;
          }),
          e
        );
      })();
    (t.Node = f),
      (t.parse = function (e) {
        for (
          var t = d.createScanner(e),
            n = new f(0, e.length, [], void 0),
            r = n,
            i = -1,
            a = null,
            o = t.scan();
          o !== h.TokenType.EOS;

        ) {
          switch (o) {
            case h.TokenType.StartTagOpen:
              var s = new f(t.getTokenOffset(), e.length, [], r);
              r.children.push(s), (r = s);
              break;
            case h.TokenType.StartTag:
              r.tag = t.getTokenText();
              break;
            case h.TokenType.StartTagClose:
              (r.end = t.getTokenEnd()),
                r.tag &&
                  p.isEmptyElement(r.tag) &&
                  r.parent &&
                  ((r.closed = !0), (r = r.parent));
              break;
            case h.TokenType.EndTagOpen:
              i = t.getTokenOffset();
              break;
            case h.TokenType.EndTag:
              for (
                var l = t.getTokenText().toLowerCase();
                !r.isSameTag(l) && r.parent;

              )
                (r.end = i), (r.closed = !1), (r = r.parent);
              r !== n && ((r.closed = !0), (r.endTagStart = i));
              break;
            case h.TokenType.StartTagSelfClose:
              r.parent &&
                ((r.closed = !0), (r.end = t.getTokenEnd()), (r = r.parent));
              break;
            case h.TokenType.EndTagClose:
              r.parent && ((r.end = t.getTokenEnd()), (r = r.parent));
              break;
            case h.TokenType.AttributeName:
              (a = t.getTokenText()),
                (c = r.attributes) || (r.attributes = c = {}),
                (c[a] = null);
              break;
            case h.TokenType.AttributeValue:
              var c,
                u = t.getTokenText();
              (c = r.attributes) && a && ((c[a] = u), (a = null));
          }
          o = t.scan();
        }
        for (; r.parent; ) (r.end = e.length), (r.closed = !1), (r = r.parent);
        return {
          roots: n.children,
          findNodeBefore: n.findNodeBefore.bind(n),
          findNodeAt: n.findNodeAt.bind(n),
        };
      });
  }),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define('vscode-languageserver-types/main', ['require', 'exports'], e);
  })(function (e, t) {
    'use strict';
    var o, n, r, i, a, s, l, c, u, d, p, h, f, g, m, b, v, y, T, w, _, x, k, S;
    Object.defineProperty(t, '__esModule', {
      value: !0,
    }),
      ((n = o = t.Position || (t.Position = {})).create = function (e, t) {
        return {
          line: e,
          character: t,
        };
      }),
      (n.is = function (e) {
        var t = e;
        return X.objectLiteral(t) && X.number(t.line) && X.number(t.character);
      }),
      ((i = r = t.Range || (t.Range = {})).create = function (e, t, n, r) {
        if (X.number(e) && X.number(t) && X.number(n) && X.number(r))
          return {
            start: o.create(e, t),
            end: o.create(n, r),
          };
        if (o.is(e) && o.is(t))
          return {
            start: e,
            end: t,
          };
        throw new Error(
          'Range#create called with invalid arguments[' +
            e +
            ', ' +
            t +
            ', ' +
            n +
            ', ' +
            r +
            ']'
        );
      }),
      (i.is = function (e) {
        var t = e;
        return X.objectLiteral(t) && o.is(t.start) && o.is(t.end);
      }),
      ((s = a = t.Location || (t.Location = {})).create = function (e, t) {
        return {
          uri: e,
          range: t,
        };
      }),
      (s.is = function (e) {
        var t = e;
        return (
          X.defined(t) &&
          r.is(t.range) &&
          (X.string(t.uri) || X.undefined(t.uri))
        );
      }),
      ((c = l = t.Color || (t.Color = {})).create = function (e, t, n, r) {
        return {
          red: e,
          green: t,
          blue: n,
          alpha: r,
        };
      }),
      (c.is = function (e) {
        var t = e;
        return (
          X.number(t.red) &&
          X.number(t.green) &&
          X.number(t.blue) &&
          X.number(t.alpha)
        );
      }),
      ((u = t.ColorInformation || (t.ColorInformation = {})).create = function (
        e,
        t
      ) {
        return {
          range: e,
          color: t,
        };
      }),
      (u.is = function (e) {
        var t = e;
        return r.is(t.range) && l.is(t.color);
      }),
      ((d = t.ColorPresentation || (t.ColorPresentation = {})).create =
        function (e, t, n) {
          return {
            label: e,
            textEdit: t,
            additionalTextEdits: n,
          };
        }),
      (d.is = function (e) {
        var t = e;
        return (
          X.string(t.label) &&
          (X.undefined(t.textEdit) || w.is(t)) &&
          (X.undefined(t.additionalTextEdits) ||
            X.typedArray(t.additionalTextEdits, w.is))
        );
      }),
      ((p = t.FoldingRangeKind || (t.FoldingRangeKind = {})).Comment =
        'comment'),
      (p.Imports = 'imports'),
      (p.Region = 'region'),
      ((h = t.FoldingRange || (t.FoldingRange = {})).create = function (
        e,
        t,
        n,
        r,
        i
      ) {
        var a = {
          startLine: e,
          endLine: t,
        };
        return (
          X.defined(n) && (a.startCharacter = n),
          X.defined(r) && (a.endCharacter = r),
          X.defined(i) && (a.kind = i),
          a
        );
      }),
      (h.is = function (e) {
        var t = e;
        return (
          X.number(t.startLine) &&
          X.number(t.startLine) &&
          (X.undefined(t.startCharacter) || X.number(t.startCharacter)) &&
          (X.undefined(t.endCharacter) || X.number(t.endCharacter)) &&
          (X.undefined(t.kind) || X.string(t.kind))
        );
      }),
      ((g = f =
        t.DiagnosticRelatedInformation ||
        (t.DiagnosticRelatedInformation = {})).create = function (e, t) {
        return {
          location: e,
          message: t,
        };
      }),
      (g.is = function (e) {
        var t = e;
        return X.defined(t) && a.is(t.location) && X.string(t.message);
      }),
      ((m = t.DiagnosticSeverity || (t.DiagnosticSeverity = {})).Error = 1),
      (m.Warning = 2),
      (m.Information = 3),
      (m.Hint = 4),
      ((v = b = t.Diagnostic || (t.Diagnostic = {})).create = function (
        e,
        t,
        n,
        r,
        i,
        a
      ) {
        var o = {
          range: e,
          message: t,
        };
        return (
          X.defined(n) && (o.severity = n),
          X.defined(r) && (o.code = r),
          X.defined(i) && (o.source = i),
          X.defined(a) && (o.relatedInformation = a),
          o
        );
      }),
      (v.is = function (e) {
        var t = e;
        return (
          X.defined(t) &&
          r.is(t.range) &&
          X.string(t.message) &&
          (X.number(t.severity) || X.undefined(t.severity)) &&
          (X.number(t.code) || X.string(t.code) || X.undefined(t.code)) &&
          (X.string(t.source) || X.undefined(t.source)) &&
          (X.undefined(t.relatedInformation) ||
            X.typedArray(t.relatedInformation, f.is))
        );
      }),
      ((T = y = t.Command || (t.Command = {})).create = function (e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var i = {
          title: e,
          command: t,
        };
        return X.defined(n) && 0 < n.length && (i.arguments = n), i;
      }),
      (T.is = function (e) {
        var t = e;
        return X.defined(t) && X.string(t.title) && X.string(t.command);
      }),
      ((_ = w = t.TextEdit || (t.TextEdit = {})).replace = function (e, t) {
        return {
          range: e,
          newText: t,
        };
      }),
      (_.insert = function (e, t) {
        return {
          range: {
            start: e,
            end: e,
          },
          newText: t,
        };
      }),
      (_.del = function (e) {
        return {
          range: e,
          newText: '',
        };
      }),
      (_.is = function (e) {
        var t = e;
        return X.objectLiteral(t) && X.string(t.newText) && r.is(t.range);
      }),
      ((k = x = t.TextDocumentEdit || (t.TextDocumentEdit = {})).create =
        function (e, t) {
          return {
            textDocument: e,
            edits: t,
          };
        }),
      (k.is = function (e) {
        var t = e;
        return X.defined(t) && A.is(t.textDocument) && Array.isArray(t.edits);
      }),
      ((S = t.WorkspaceEdit || (t.WorkspaceEdit = {})).is = function (e) {
        var t = e;
        return (
          t &&
          (void 0 !== t.changes || void 0 !== t.documentChanges) &&
          (void 0 === t.documentChanges ||
            X.typedArray(t.documentChanges, x.is))
        );
      });
    var E,
      A,
      C,
      q,
      L,
      O,
      I,
      D,
      N,
      R,
      j,
      P,
      U,
      M,
      B = (function () {
        function e(e) {
          this.edits = e;
        }
        return (
          (e.prototype.insert = function (e, t) {
            this.edits.push(w.insert(e, t));
          }),
          (e.prototype.replace = function (e, t) {
            this.edits.push(w.replace(e, t));
          }),
          (e.prototype.delete = function (e) {
            this.edits.push(w.del(e));
          }),
          (e.prototype.add = function (e) {
            this.edits.push(e);
          }),
          (e.prototype.all = function () {
            return this.edits;
          }),
          (e.prototype.clear = function () {
            this.edits.splice(0, this.edits.length);
          }),
          e
        );
      })(),
      W = (function () {
        function e(n) {
          var r = this;
          (this._textEditChanges = Object.create(null)),
            n &&
              ((this._workspaceEdit = n).documentChanges
                ? n.documentChanges.forEach(function (e) {
                    var t = new B(e.edits);
                    r._textEditChanges[e.textDocument.uri] = t;
                  })
                : n.changes &&
                  Object.keys(n.changes).forEach(function (e) {
                    var t = new B(n.changes[e]);
                    r._textEditChanges[e] = t;
                  }));
        }
        return (
          Object.defineProperty(e.prototype, 'edit', {
            get: function () {
              return this._workspaceEdit;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.getTextEditChange = function (e) {
            if (A.is(e)) {
              if (
                (this._workspaceEdit ||
                  (this._workspaceEdit = {
                    documentChanges: [],
                  }),
                !this._workspaceEdit.documentChanges)
              )
                throw new Error(
                  'Workspace edit is not configured for versioned document changes.'
                );
              var t = e;
              if (!(r = this._textEditChanges[t.uri])) {
                var n = {
                  textDocument: t,
                  edits: (i = []),
                };
                this._workspaceEdit.documentChanges.push(n),
                  (r = new B(i)),
                  (this._textEditChanges[t.uri] = r);
              }
              return r;
            }
            if (
              (this._workspaceEdit ||
                (this._workspaceEdit = {
                  changes: Object.create(null),
                }),
              !this._workspaceEdit.changes)
            )
              throw new Error(
                'Workspace edit is not configured for normal text edit changes.'
              );
            var r;
            if (!(r = this._textEditChanges[e])) {
              var i = [];
              (this._workspaceEdit.changes[e] = i),
                (r = new B(i)),
                (this._textEditChanges[e] = r);
            }
            return r;
          }),
          e
        );
      })();
    (t.WorkspaceChange = W),
      ((E =
        t.TextDocumentIdentifier || (t.TextDocumentIdentifier = {})).create =
        function (e) {
          return {
            uri: e,
          };
        }),
      (E.is = function (e) {
        var t = e;
        return X.defined(t) && X.string(t.uri);
      }),
      ((C = A =
        t.VersionedTextDocumentIdentifier ||
        (t.VersionedTextDocumentIdentifier = {})).create = function (e, t) {
        return {
          uri: e,
          version: t,
        };
      }),
      (C.is = function (e) {
        var t = e;
        return X.defined(t) && X.string(t.uri) && X.number(t.version);
      }),
      ((q = t.TextDocumentItem || (t.TextDocumentItem = {})).create = function (
        e,
        t,
        n,
        r
      ) {
        return {
          uri: e,
          languageId: t,
          version: n,
          text: r,
        };
      }),
      (q.is = function (e) {
        var t = e;
        return (
          X.defined(t) &&
          X.string(t.uri) &&
          X.string(t.languageId) &&
          X.number(t.version) &&
          X.string(t.text)
        );
      }),
      ((O = L = t.MarkupKind || (t.MarkupKind = {})).PlainText = 'plaintext'),
      (O.Markdown = 'markdown'),
      ((I = L = t.MarkupKind || (t.MarkupKind = {})).is = function (e) {
        var t = e;
        return t === I.PlainText || t === I.Markdown;
      }),
      ((D = t.MarkupContent || (t.MarkupContent = {})).is = function (e) {
        var t = e;
        return X.objectLiteral(e) && L.is(t.kind) && X.string(t.value);
      }),
      ((N = t.CompletionItemKind || (t.CompletionItemKind = {})).Text = 1),
      (N.Method = 2),
      (N.Function = 3),
      (N.Constructor = 4),
      (N.Field = 5),
      (N.Variable = 6),
      (N.Class = 7),
      (N.Interface = 8),
      (N.Module = 9),
      (N.Property = 10),
      (N.Unit = 11),
      (N.Value = 12),
      (N.Enum = 13),
      (N.Keyword = 14),
      (N.Snippet = 15),
      (N.Color = 16),
      (N.File = 17),
      (N.Reference = 18),
      (N.Folder = 19),
      (N.EnumMember = 20),
      (N.Constant = 21),
      (N.Struct = 22),
      (N.Event = 23),
      (N.Operator = 24),
      (N.TypeParameter = 25),
      ((R = t.InsertTextFormat || (t.InsertTextFormat = {})).PlainText = 1),
      (R.Snippet = 2),
      ((t.CompletionItem || (t.CompletionItem = {})).create = function (e) {
        return {
          label: e,
        };
      }),
      ((t.CompletionList || (t.CompletionList = {})).create = function (e, t) {
        return {
          items: e || [],
          isIncomplete: !!t,
        };
      }),
      ((P = j = t.MarkedString || (t.MarkedString = {})).fromPlainText =
        function (e) {
          return e.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&');
        }),
      (P.is = function (e) {
        var t = e;
        return (
          X.string(t) ||
          (X.objectLiteral(t) && X.string(t.language) && X.string(t.value))
        );
      }),
      ((t.Hover || (t.Hover = {})).is = function (e) {
        var t = e;
        return (
          X.objectLiteral(t) &&
          (D.is(t.contents) ||
            j.is(t.contents) ||
            X.typedArray(t.contents, j.is)) &&
          (void 0 === e.range || r.is(e.range))
        );
      }),
      ((t.ParameterInformation || (t.ParameterInformation = {})).create =
        function (e, t) {
          return t
            ? {
                label: e,
                documentation: t,
              }
            : {
                label: e,
              };
        }),
      ((t.SignatureInformation || (t.SignatureInformation = {})).create =
        function (e, t) {
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
          var i = {
            label: e,
          };
          return (
            X.defined(t) && (i.documentation = t),
            X.defined(n) ? (i.parameters = n) : (i.parameters = []),
            i
          );
        }),
      ((U =
        t.DocumentHighlightKind || (t.DocumentHighlightKind = {})).Text = 1),
      (U.Read = 2),
      (U.Write = 3),
      ((t.DocumentHighlight || (t.DocumentHighlight = {})).create = function (
        e,
        t
      ) {
        var n = {
          range: e,
        };
        return X.number(t) && (n.kind = t), n;
      }),
      ((M = t.SymbolKind || (t.SymbolKind = {})).File = 1),
      (M.Module = 2),
      (M.Namespace = 3),
      (M.Package = 4),
      (M.Class = 5),
      (M.Method = 6),
      (M.Property = 7),
      (M.Field = 8),
      (M.Constructor = 9),
      (M.Enum = 10),
      (M.Interface = 11),
      (M.Function = 12),
      (M.Variable = 13),
      (M.Constant = 14),
      (M.String = 15),
      (M.Number = 16),
      (M.Boolean = 17),
      (M.Array = 18),
      (M.Object = 19),
      (M.Key = 20),
      (M.Null = 21),
      (M.EnumMember = 22),
      (M.Struct = 23),
      (M.Event = 24),
      (M.Operator = 25),
      (M.TypeParameter = 26),
      ((t.SymbolInformation || (t.SymbolInformation = {})).create = function (
        e,
        t,
        n,
        r,
        i
      ) {
        var a = {
          name: e,
          kind: t,
          location: {
            uri: r,
            range: n,
          },
        };
        return i && (a.containerName = i), a;
      });
    var V,
      H,
      G,
      F,
      z,
      K,
      $ = function () {};
    (t.DocumentSymbol = $),
      ((V = $ = t.DocumentSymbol || (t.DocumentSymbol = {})).create = function (
        e,
        t,
        n,
        r,
        i,
        a
      ) {
        var o = {
          name: e,
          detail: t,
          kind: n,
          range: r,
          selectionRange: i,
        };
        return void 0 !== a && (o.children = a), o;
      }),
      (V.is = function (e) {
        var t = e;
        return (
          t &&
          X.string(t.name) &&
          X.string(t.detail) &&
          X.number(t.kind) &&
          r.is(t.range) &&
          r.is(t.selectionRange) &&
          (void 0 === t.deprecated || X.boolean(t.deprecated)) &&
          (void 0 === t.children || Array.isArray(t.children))
        );
      }),
      (t.DocumentSymbol = $),
      ((H = t.CodeActionKind || (t.CodeActionKind = {})).QuickFix = 'quickfix'),
      (H.Refactor = 'refactor'),
      (H.RefactorExtract = 'refactor.extract'),
      (H.RefactorInline = 'refactor.inline'),
      (H.RefactorRewrite = 'refactor.rewrite'),
      (H.Source = 'source'),
      (H.SourceOrganizeImports = 'source.organizeImports'),
      ((G = t.CodeActionContext || (t.CodeActionContext = {})).create =
        function (e, t) {
          var n = {
            diagnostics: e,
          };
          return null != t && (n.only = t), n;
        }),
      (G.is = function (e) {
        var t = e;
        return (
          X.defined(t) &&
          X.typedArray(t.diagnostics, b.is) &&
          (void 0 === t.only || X.typedArray(t.only, X.string))
        );
      }),
      ((F = t.CodeAction || (t.CodeAction = {})).create = function (e, t, n) {
        var r = {
          title: e,
        };
        return (
          y.is(t) ? (r.command = t) : (r.edit = t),
          void 0 !== n && (r.kind = n),
          r
        );
      }),
      (F.is = function (e) {
        var t = e;
        return (
          t &&
          X.string(t.title) &&
          (void 0 === t.diagnostics || X.typedArray(t.diagnostics, b.is)) &&
          (void 0 === t.kind || X.string(t.kind)) &&
          (void 0 !== t.edit || void 0 !== t.command) &&
          (void 0 === t.command || y.is(t.command)) &&
          (void 0 === t.edit || S.is(t.edit))
        );
      }),
      ((z = t.CodeLens || (t.CodeLens = {})).create = function (e, t) {
        var n = {
          range: e,
        };
        return X.defined(t) && (n.data = t), n;
      }),
      (z.is = function (e) {
        var t = e;
        return (
          X.defined(t) &&
          r.is(t.range) &&
          (X.undefined(t.command) || y.is(t.command))
        );
      }),
      ((K = t.FormattingOptions || (t.FormattingOptions = {})).create =
        function (e, t) {
          return {
            tabSize: e,
            insertSpaces: t,
          };
        }),
      (K.is = function (e) {
        var t = e;
        return X.defined(t) && X.number(t.tabSize) && X.boolean(t.insertSpaces);
      });
    var Y,
      J,
      Z,
      Q = function () {};
    (t.DocumentLink = Q),
      ((Y = Q = t.DocumentLink || (t.DocumentLink = {})).create = function (
        e,
        t,
        n
      ) {
        return {
          range: e,
          target: t,
          data: n,
        };
      }),
      (Y.is = function (e) {
        var t = e;
        return (
          X.defined(t) &&
          r.is(t.range) &&
          (X.undefined(t.target) || X.string(t.target))
        );
      }),
      (t.DocumentLink = Q),
      (t.EOL = ['\n', '\r\n', '\r']),
      ((J = t.TextDocument || (t.TextDocument = {})).create = function (
        e,
        t,
        n,
        r
      ) {
        return new ne(e, t, n, r);
      }),
      (J.is = function (e) {
        var t = e;
        return !!(
          X.defined(t) &&
          X.string(t.uri) &&
          (X.undefined(t.languageId) || X.string(t.languageId)) &&
          X.number(t.lineCount) &&
          X.func(t.getText) &&
          X.func(t.positionAt) &&
          X.func(t.offsetAt)
        );
      }),
      (J.applyEdits = function (e, t) {
        for (
          var n = e.getText(),
            r = (function e(t, n) {
              if (t.length <= 1) return t;
              var r = (t.length / 2) | 0,
                i = t.slice(0, r),
                a = t.slice(r);
              e(i, n), e(a, n);
              for (var o = 0, s = 0, l = 0; o < i.length && s < a.length; ) {
                var c = n(i[o], a[s]);
                t[l++] = c <= 0 ? i[o++] : a[s++];
              }
              for (; o < i.length; ) t[l++] = i[o++];
              for (; s < a.length; ) t[l++] = a[s++];
              return t;
            })(t, function (e, t) {
              var n = e.range.start.line - t.range.start.line;
              return 0 === n
                ? e.range.start.character - t.range.start.character
                : n;
            }),
            i = n.length,
            a = r.length - 1;
          0 <= a;
          a--
        ) {
          var o = r[a],
            s = e.offsetAt(o.range.start),
            l = e.offsetAt(o.range.end);
          if (!(l <= i)) throw new Error('Ovelapping edit');
          (n = n.substring(0, s) + o.newText + n.substring(l, n.length)),
            (i = s);
        }
        return n;
      }),
      ((Z =
        t.TextDocumentSaveReason ||
        (t.TextDocumentSaveReason = {})).Manual = 1),
      (Z.AfterDelay = 2),
      (Z.FocusOut = 3);
    var X,
      ee,
      te,
      ne = (function () {
        function e(e, t, n, r) {
          (this._uri = e),
            (this._languageId = t),
            (this._version = n),
            (this._content = r),
            (this._lineOffsets = null);
        }
        return (
          Object.defineProperty(e.prototype, 'uri', {
            get: function () {
              return this._uri;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'languageId', {
            get: function () {
              return this._languageId;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'version', {
            get: function () {
              return this._version;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.getText = function (e) {
            if (e) {
              var t = this.offsetAt(e.start),
                n = this.offsetAt(e.end);
              return this._content.substring(t, n);
            }
            return this._content;
          }),
          (e.prototype.update = function (e, t) {
            (this._content = e.text),
              (this._version = t),
              (this._lineOffsets = null);
          }),
          (e.prototype.getLineOffsets = function () {
            if (null === this._lineOffsets) {
              for (
                var e = [], t = this._content, n = !0, r = 0;
                r < t.length;
                r++
              ) {
                n && (e.push(r), (n = !1));
                var i = t.charAt(r);
                (n = '\r' === i || '\n' === i),
                  '\r' === i &&
                    r + 1 < t.length &&
                    '\n' === t.charAt(r + 1) &&
                    r++;
              }
              n && 0 < t.length && e.push(t.length), (this._lineOffsets = e);
            }
            return this._lineOffsets;
          }),
          (e.prototype.positionAt = function (e) {
            e = Math.max(Math.min(e, this._content.length), 0);
            var t = this.getLineOffsets(),
              n = 0,
              r = t.length;
            if (0 === r) return o.create(0, e);
            for (; n < r; ) {
              var i = Math.floor((n + r) / 2);
              t[i] > e ? (r = i) : (n = i + 1);
            }
            var a = n - 1;
            return o.create(a, e - t[a]);
          }),
          (e.prototype.offsetAt = function (e) {
            var t = this.getLineOffsets();
            if (e.line >= t.length) return this._content.length;
            if (e.line < 0) return 0;
            var n = t[e.line],
              r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
            return Math.max(Math.min(n + e.character, r), n);
          }),
          Object.defineProperty(e.prototype, 'lineCount', {
            get: function () {
              return this.getLineOffsets().length;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
    (ee = X || (X = {})),
      (te = Object.prototype.toString),
      (ee.defined = function (e) {
        return void 0 !== e;
      }),
      (ee.undefined = function (e) {
        return void 0 === e;
      }),
      (ee.boolean = function (e) {
        return !0 === e || !1 === e;
      }),
      (ee.string = function (e) {
        return '[object String]' === te.call(e);
      }),
      (ee.number = function (e) {
        return '[object Number]' === te.call(e);
      }),
      (ee.func = function (e) {
        return '[object Function]' === te.call(e);
      }),
      (ee.objectLiteral = function (e) {
        return null !== e && 'object' == typeof e;
      }),
      (ee.typedArray = function (e, t) {
        return Array.isArray(e) && e.every(t);
      });
  }),
  define(
    'vscode-languageserver-types',
    ['vscode-languageserver-types/main'],
    function (e) {
      return e;
    }
  ),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define(
          'vscode-html-languageservice/parser/razorTags',
          ['require', 'exports'],
          e
        );
  })(function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
      value: !0,
    }),
      (t.getRazorTagProvider = function () {
        var r = {
          a: [
            'asp-action',
            'asp-controller',
            'asp-fragment',
            'asp-host',
            'asp-protocol',
            'asp-route',
          ],
          div: ['asp-validation-summary'],
          form: ['asp-action', 'asp-controller', 'asp-anti-forgery'],
          input: ['asp-for', 'asp-format'],
          label: ['asp-for'],
          select: ['asp-for', 'asp-items'],
          span: ['asp-validation-for'],
        };
        return {
          getId: function () {
            return 'razor';
          },
          isApplicable: function (e) {
            return 'razor' === e;
          },
          collectTags: function (e) {},
          collectAttributes: function (e, t) {
            if (e) {
              var n = r[e];
              n &&
                n.forEach(function (e) {
                  return t(e);
                });
            }
          },
          collectValues: function (e, t, n) {},
        };
      });
  }),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define(
          'vscode-html-languageservice/services/tagProviders',
          ['require', 'exports', '../parser/htmlTags', '../parser/razorTags'],
          e
        );
  })(function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
      value: !0,
    });
    var n = e('../parser/htmlTags'),
      r = e('../parser/razorTags');
    t.allTagProviders = [
      n.getHTML5TagProvider(),
      n.getAngularTagProvider(),
      n.getIonicTagProvider(),
      r.getRazorTagProvider(),
    ];
  }),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define(
          'vscode-html-languageservice/parser/htmlEntities',
          ['require', 'exports'],
          e
        );
  })(function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
      value: !0,
    }),
      (t.entities = {
        'Aacute;': 'Á',
        Aacute: 'Á',
        'aacute;': 'á',
        aacute: 'á',
        'Abreve;': 'Ă',
        'abreve;': 'ă',
        'ac;': '∾',
        'acd;': '∿',
        'acE;': '∾̳',
        'Acirc;': 'Â',
        Acirc: 'Â',
        'acirc;': 'â',
        acirc: 'â',
        'acute;': '´',
        acute: '´',
        'Acy;': 'А',
        'acy;': 'а',
        'AElig;': 'Æ',
        AElig: 'Æ',
        'aelig;': 'æ',
        aelig: 'æ',
        'af;': '⁡',
        'Afr;': '𝔄',
        'afr;': '𝔞',
        'Agrave;': 'À',
        Agrave: 'À',
        'agrave;': 'à',
        agrave: 'à',
        'alefsym;': 'ℵ',
        'aleph;': 'ℵ',
        'Alpha;': 'Α',
        'alpha;': 'α',
        'Amacr;': 'Ā',
        'amacr;': 'ā',
        'amalg;': '⨿',
        'AMP;': '&',
        AMP: '&',
        'amp;': '&',
        amp: '&',
        'And;': '⩓',
        'and;': '∧',
        'andand;': '⩕',
        'andd;': '⩜',
        'andslope;': '⩘',
        'andv;': '⩚',
        'ang;': '∠',
        'ange;': '⦤',
        'angle;': '∠',
        'angmsd;': '∡',
        'angmsdaa;': '⦨',
        'angmsdab;': '⦩',
        'angmsdac;': '⦪',
        'angmsdad;': '⦫',
        'angmsdae;': '⦬',
        'angmsdaf;': '⦭',
        'angmsdag;': '⦮',
        'angmsdah;': '⦯',
        'angrt;': '∟',
        'angrtvb;': '⊾',
        'angrtvbd;': '⦝',
        'angsph;': '∢',
        'angst;': 'Å',
        'angzarr;': '⍼',
        'Aogon;': 'Ą',
        'aogon;': 'ą',
        'Aopf;': '𝔸',
        'aopf;': '𝕒',
        'ap;': '≈',
        'apacir;': '⩯',
        'apE;': '⩰',
        'ape;': '≊',
        'apid;': '≋',
        'apos;': "'",
        'ApplyFunction;': '⁡',
        'approx;': '≈',
        'approxeq;': '≊',
        'Aring;': 'Å',
        Aring: 'Å',
        'aring;': 'å',
        aring: 'å',
        'Ascr;': '𝒜',
        'ascr;': '𝒶',
        'Assign;': '≔',
        'ast;': '*',
        'asymp;': '≈',
        'asympeq;': '≍',
        'Atilde;': 'Ã',
        Atilde: 'Ã',
        'atilde;': 'ã',
        atilde: 'ã',
        'Auml;': 'Ä',
        Auml: 'Ä',
        'auml;': 'ä',
        auml: 'ä',
        'awconint;': '∳',
        'awint;': '⨑',
        'backcong;': '≌',
        'backepsilon;': '϶',
        'backprime;': '‵',
        'backsim;': '∽',
        'backsimeq;': '⋍',
        'Backslash;': '∖',
        'Barv;': '⫧',
        'barvee;': '⊽',
        'Barwed;': '⌆',
        'barwed;': '⌅',
        'barwedge;': '⌅',
        'bbrk;': '⎵',
        'bbrktbrk;': '⎶',
        'bcong;': '≌',
        'Bcy;': 'Б',
        'bcy;': 'б',
        'bdquo;': '„',
        'becaus;': '∵',
        'Because;': '∵',
        'because;': '∵',
        'bemptyv;': '⦰',
        'bepsi;': '϶',
        'bernou;': 'ℬ',
        'Bernoullis;': 'ℬ',
        'Beta;': 'Β',
        'beta;': 'β',
        'beth;': 'ℶ',
        'between;': '≬',
        'Bfr;': '𝔅',
        'bfr;': '𝔟',
        'bigcap;': '⋂',
        'bigcirc;': '◯',
        'bigcup;': '⋃',
        'bigodot;': '⨀',
        'bigoplus;': '⨁',
        'bigotimes;': '⨂',
        'bigsqcup;': '⨆',
        'bigstar;': '★',
        'bigtriangledown;': '▽',
        'bigtriangleup;': '△',
        'biguplus;': '⨄',
        'bigvee;': '⋁',
        'bigwedge;': '⋀',
        'bkarow;': '⤍',
        'blacklozenge;': '⧫',
        'blacksquare;': '▪',
        'blacktriangle;': '▴',
        'blacktriangledown;': '▾',
        'blacktriangleleft;': '◂',
        'blacktriangleright;': '▸',
        'blank;': '␣',
        'blk12;': '▒',
        'blk14;': '░',
        'blk34;': '▓',
        'block;': '█',
        'bne;': '=⃥',
        'bnequiv;': '≡⃥',
        'bNot;': '⫭',
        'bnot;': '⌐',
        'Bopf;': '𝔹',
        'bopf;': '𝕓',
        'bot;': '⊥',
        'bottom;': '⊥',
        'bowtie;': '⋈',
        'boxbox;': '⧉',
        'boxDL;': '╗',
        'boxDl;': '╖',
        'boxdL;': '╕',
        'boxdl;': '┐',
        'boxDR;': '╔',
        'boxDr;': '╓',
        'boxdR;': '╒',
        'boxdr;': '┌',
        'boxH;': '═',
        'boxh;': '─',
        'boxHD;': '╦',
        'boxHd;': '╤',
        'boxhD;': '╥',
        'boxhd;': '┬',
        'boxHU;': '╩',
        'boxHu;': '╧',
        'boxhU;': '╨',
        'boxhu;': '┴',
        'boxminus;': '⊟',
        'boxplus;': '⊞',
        'boxtimes;': '⊠',
        'boxUL;': '╝',
        'boxUl;': '╜',
        'boxuL;': '╛',
        'boxul;': '┘',
        'boxUR;': '╚',
        'boxUr;': '╙',
        'boxuR;': '╘',
        'boxur;': '└',
        'boxV;': '║',
        'boxv;': '│',
        'boxVH;': '╬',
        'boxVh;': '╫',
        'boxvH;': '╪',
        'boxvh;': '┼',
        'boxVL;': '╣',
        'boxVl;': '╢',
        'boxvL;': '╡',
        'boxvl;': '┤',
        'boxVR;': '╠',
        'boxVr;': '╟',
        'boxvR;': '╞',
        'boxvr;': '├',
        'bprime;': '‵',
        'Breve;': '˘',
        'breve;': '˘',
        'brvbar;': '¦',
        brvbar: '¦',
        'Bscr;': 'ℬ',
        'bscr;': '𝒷',
        'bsemi;': '⁏',
        'bsim;': '∽',
        'bsime;': '⋍',
        'bsol;': '\\',
        'bsolb;': '⧅',
        'bsolhsub;': '⟈',
        'bull;': '•',
        'bullet;': '•',
        'bump;': '≎',
        'bumpE;': '⪮',
        'bumpe;': '≏',
        'Bumpeq;': '≎',
        'bumpeq;': '≏',
        'Cacute;': 'Ć',
        'cacute;': 'ć',
        'Cap;': '⋒',
        'cap;': '∩',
        'capand;': '⩄',
        'capbrcup;': '⩉',
        'capcap;': '⩋',
        'capcup;': '⩇',
        'capdot;': '⩀',
        'CapitalDifferentialD;': 'ⅅ',
        'caps;': '∩︀',
        'caret;': '⁁',
        'caron;': 'ˇ',
        'Cayleys;': 'ℭ',
        'ccaps;': '⩍',
        'Ccaron;': 'Č',
        'ccaron;': 'č',
        'Ccedil;': 'Ç',
        Ccedil: 'Ç',
        'ccedil;': 'ç',
        ccedil: 'ç',
        'Ccirc;': 'Ĉ',
        'ccirc;': 'ĉ',
        'Cconint;': '∰',
        'ccups;': '⩌',
        'ccupssm;': '⩐',
        'Cdot;': 'Ċ',
        'cdot;': 'ċ',
        'cedil;': '¸',
        cedil: '¸',
        'Cedilla;': '¸',
        'cemptyv;': '⦲',
        'cent;': '¢',
        cent: '¢',
        'CenterDot;': '·',
        'centerdot;': '·',
        'Cfr;': 'ℭ',
        'cfr;': '𝔠',
        'CHcy;': 'Ч',
        'chcy;': 'ч',
        'check;': '✓',
        'checkmark;': '✓',
        'Chi;': 'Χ',
        'chi;': 'χ',
        'cir;': '○',
        'circ;': 'ˆ',
        'circeq;': '≗',
        'circlearrowleft;': '↺',
        'circlearrowright;': '↻',
        'circledast;': '⊛',
        'circledcirc;': '⊚',
        'circleddash;': '⊝',
        'CircleDot;': '⊙',
        'circledR;': '®',
        'circledS;': 'Ⓢ',
        'CircleMinus;': '⊖',
        'CirclePlus;': '⊕',
        'CircleTimes;': '⊗',
        'cirE;': '⧃',
        'cire;': '≗',
        'cirfnint;': '⨐',
        'cirmid;': '⫯',
        'cirscir;': '⧂',
        'ClockwiseContourIntegral;': '∲',
        'CloseCurlyDoubleQuote;': '”',
        'CloseCurlyQuote;': '’',
        'clubs;': '♣',
        'clubsuit;': '♣',
        'Colon;': '∷',
        'colon;': ':',
        'Colone;': '⩴',
        'colone;': '≔',
        'coloneq;': '≔',
        'comma;': ',',
        'commat;': '@',
        'comp;': '∁',
        'compfn;': '∘',
        'complement;': '∁',
        'complexes;': 'ℂ',
        'cong;': '≅',
        'congdot;': '⩭',
        'Congruent;': '≡',
        'Conint;': '∯',
        'conint;': '∮',
        'ContourIntegral;': '∮',
        'Copf;': 'ℂ',
        'copf;': '𝕔',
        'coprod;': '∐',
        'Coproduct;': '∐',
        'COPY;': '©',
        COPY: '©',
        'copy;': '©',
        copy: '©',
        'copysr;': '℗',
        'CounterClockwiseContourIntegral;': '∳',
        'crarr;': '↵',
        'Cross;': '⨯',
        'cross;': '✗',
        'Cscr;': '𝒞',
        'cscr;': '𝒸',
        'csub;': '⫏',
        'csube;': '⫑',
        'csup;': '⫐',
        'csupe;': '⫒',
        'ctdot;': '⋯',
        'cudarrl;': '⤸',
        'cudarrr;': '⤵',
        'cuepr;': '⋞',
        'cuesc;': '⋟',
        'cularr;': '↶',
        'cularrp;': '⤽',
        'Cup;': '⋓',
        'cup;': '∪',
        'cupbrcap;': '⩈',
        'CupCap;': '≍',
        'cupcap;': '⩆',
        'cupcup;': '⩊',
        'cupdot;': '⊍',
        'cupor;': '⩅',
        'cups;': '∪︀',
        'curarr;': '↷',
        'curarrm;': '⤼',
        'curlyeqprec;': '⋞',
        'curlyeqsucc;': '⋟',
        'curlyvee;': '⋎',
        'curlywedge;': '⋏',
        'curren;': '¤',
        curren: '¤',
        'curvearrowleft;': '↶',
        'curvearrowright;': '↷',
        'cuvee;': '⋎',
        'cuwed;': '⋏',
        'cwconint;': '∲',
        'cwint;': '∱',
        'cylcty;': '⌭',
        'Dagger;': '‡',
        'dagger;': '†',
        'daleth;': 'ℸ',
        'Darr;': '↡',
        'dArr;': '⇓',
        'darr;': '↓',
        'dash;': '‐',
        'Dashv;': '⫤',
        'dashv;': '⊣',
        'dbkarow;': '⤏',
        'dblac;': '˝',
        'Dcaron;': 'Ď',
        'dcaron;': 'ď',
        'Dcy;': 'Д',
        'dcy;': 'д',
        'DD;': 'ⅅ',
        'dd;': 'ⅆ',
        'ddagger;': '‡',
        'ddarr;': '⇊',
        'DDotrahd;': '⤑',
        'ddotseq;': '⩷',
        'deg;': '°',
        deg: '°',
        'Del;': '∇',
        'Delta;': 'Δ',
        'delta;': 'δ',
        'demptyv;': '⦱',
        'dfisht;': '⥿',
        'Dfr;': '𝔇',
        'dfr;': '𝔡',
        'dHar;': '⥥',
        'dharl;': '⇃',
        'dharr;': '⇂',
        'DiacriticalAcute;': '´',
        'DiacriticalDot;': '˙',
        'DiacriticalDoubleAcute;': '˝',
        'DiacriticalGrave;': '`',
        'DiacriticalTilde;': '˜',
        'diam;': '⋄',
        'Diamond;': '⋄',
        'diamond;': '⋄',
        'diamondsuit;': '♦',
        'diams;': '♦',
        'die;': '¨',
        'DifferentialD;': 'ⅆ',
        'digamma;': 'ϝ',
        'disin;': '⋲',
        'div;': '÷',
        'divide;': '÷',
        divide: '÷',
        'divideontimes;': '⋇',
        'divonx;': '⋇',
        'DJcy;': 'Ђ',
        'djcy;': 'ђ',
        'dlcorn;': '⌞',
        'dlcrop;': '⌍',
        'dollar;': '$',
        'Dopf;': '𝔻',
        'dopf;': '𝕕',
        'Dot;': '¨',
        'dot;': '˙',
        'DotDot;': '⃜',
        'doteq;': '≐',
        'doteqdot;': '≑',
        'DotEqual;': '≐',
        'dotminus;': '∸',
        'dotplus;': '∔',
        'dotsquare;': '⊡',
        'doublebarwedge;': '⌆',
        'DoubleContourIntegral;': '∯',
        'DoubleDot;': '¨',
        'DoubleDownArrow;': '⇓',
        'DoubleLeftArrow;': '⇐',
        'DoubleLeftRightArrow;': '⇔',
        'DoubleLeftTee;': '⫤',
        'DoubleLongLeftArrow;': '⟸',
        'DoubleLongLeftRightArrow;': '⟺',
        'DoubleLongRightArrow;': '⟹',
        'DoubleRightArrow;': '⇒',
        'DoubleRightTee;': '⊨',
        'DoubleUpArrow;': '⇑',
        'DoubleUpDownArrow;': '⇕',
        'DoubleVerticalBar;': '∥',
        'DownArrow;': '↓',
        'Downarrow;': '⇓',
        'downarrow;': '↓',
        'DownArrowBar;': '⤓',
        'DownArrowUpArrow;': '⇵',
        'DownBreve;': '̑',
        'downdownarrows;': '⇊',
        'downharpoonleft;': '⇃',
        'downharpoonright;': '⇂',
        'DownLeftRightVector;': '⥐',
        'DownLeftTeeVector;': '⥞',
        'DownLeftVector;': '↽',
        'DownLeftVectorBar;': '⥖',
        'DownRightTeeVector;': '⥟',
        'DownRightVector;': '⇁',
        'DownRightVectorBar;': '⥗',
        'DownTee;': '⊤',
        'DownTeeArrow;': '↧',
        'drbkarow;': '⤐',
        'drcorn;': '⌟',
        'drcrop;': '⌌',
        'Dscr;': '𝒟',
        'dscr;': '𝒹',
        'DScy;': 'Ѕ',
        'dscy;': 'ѕ',
        'dsol;': '⧶',
        'Dstrok;': 'Đ',
        'dstrok;': 'đ',
        'dtdot;': '⋱',
        'dtri;': '▿',
        'dtrif;': '▾',
        'duarr;': '⇵',
        'duhar;': '⥯',
        'dwangle;': '⦦',
        'DZcy;': 'Џ',
        'dzcy;': 'џ',
        'dzigrarr;': '⟿',
        'Eacute;': 'É',
        Eacute: 'É',
        'eacute;': 'é',
        eacute: 'é',
        'easter;': '⩮',
        'Ecaron;': 'Ě',
        'ecaron;': 'ě',
        'ecir;': '≖',
        'Ecirc;': 'Ê',
        Ecirc: 'Ê',
        'ecirc;': 'ê',
        ecirc: 'ê',
        'ecolon;': '≕',
        'Ecy;': 'Э',
        'ecy;': 'э',
        'eDDot;': '⩷',
        'Edot;': 'Ė',
        'eDot;': '≑',
        'edot;': 'ė',
        'ee;': 'ⅇ',
        'efDot;': '≒',
        'Efr;': '𝔈',
        'efr;': '𝔢',
        'eg;': '⪚',
        'Egrave;': 'È',
        Egrave: 'È',
        'egrave;': 'è',
        egrave: 'è',
        'egs;': '⪖',
        'egsdot;': '⪘',
        'el;': '⪙',
        'Element;': '∈',
        'elinters;': '⏧',
        'ell;': 'ℓ',
        'els;': '⪕',
        'elsdot;': '⪗',
        'Emacr;': 'Ē',
        'emacr;': 'ē',
        'empty;': '∅',
        'emptyset;': '∅',
        'EmptySmallSquare;': '◻',
        'emptyv;': '∅',
        'EmptyVerySmallSquare;': '▫',
        'emsp;': ' ',
        'emsp13;': ' ',
        'emsp14;': ' ',
        'ENG;': 'Ŋ',
        'eng;': 'ŋ',
        'ensp;': ' ',
        'Eogon;': 'Ę',
        'eogon;': 'ę',
        'Eopf;': '𝔼',
        'eopf;': '𝕖',
        'epar;': '⋕',
        'eparsl;': '⧣',
        'eplus;': '⩱',
        'epsi;': 'ε',
        'Epsilon;': 'Ε',
        'epsilon;': 'ε',
        'epsiv;': 'ϵ',
        'eqcirc;': '≖',
        'eqcolon;': '≕',
        'eqsim;': '≂',
        'eqslantgtr;': '⪖',
        'eqslantless;': '⪕',
        'Equal;': '⩵',
        'equals;': '=',
        'EqualTilde;': '≂',
        'equest;': '≟',
        'Equilibrium;': '⇌',
        'equiv;': '≡',
        'equivDD;': '⩸',
        'eqvparsl;': '⧥',
        'erarr;': '⥱',
        'erDot;': '≓',
        'Escr;': 'ℰ',
        'escr;': 'ℯ',
        'esdot;': '≐',
        'Esim;': '⩳',
        'esim;': '≂',
        'Eta;': 'Η',
        'eta;': 'η',
        'ETH;': 'Ð',
        ETH: 'Ð',
        'eth;': 'ð',
        eth: 'ð',
        'Euml;': 'Ë',
        Euml: 'Ë',
        'euml;': 'ë',
        euml: 'ë',
        'euro;': '€',
        'excl;': '!',
        'exist;': '∃',
        'Exists;': '∃',
        'expectation;': 'ℰ',
        'ExponentialE;': 'ⅇ',
        'exponentiale;': 'ⅇ',
        'fallingdotseq;': '≒',
        'Fcy;': 'Ф',
        'fcy;': 'ф',
        'female;': '♀',
        'ffilig;': 'ﬃ',
        'fflig;': 'ﬀ',
        'ffllig;': 'ﬄ',
        'Ffr;': '𝔉',
        'ffr;': '𝔣',
        'filig;': 'ﬁ',
        'FilledSmallSquare;': '◼',
        'FilledVerySmallSquare;': '▪',
        'fjlig;': 'fj',
        'flat;': '♭',
        'fllig;': 'ﬂ',
        'fltns;': '▱',
        'fnof;': 'ƒ',
        'Fopf;': '𝔽',
        'fopf;': '𝕗',
        'ForAll;': '∀',
        'forall;': '∀',
        'fork;': '⋔',
        'forkv;': '⫙',
        'Fouriertrf;': 'ℱ',
        'fpartint;': '⨍',
        'frac12;': '½',
        frac12: '½',
        'frac13;': '⅓',
        'frac14;': '¼',
        frac14: '¼',
        'frac15;': '⅕',
        'frac16;': '⅙',
        'frac18;': '⅛',
        'frac23;': '⅔',
        'frac25;': '⅖',
        'frac34;': '¾',
        frac34: '¾',
        'frac35;': '⅗',
        'frac38;': '⅜',
        'frac45;': '⅘',
        'frac56;': '⅚',
        'frac58;': '⅝',
        'frac78;': '⅞',
        'frasl;': '⁄',
        'frown;': '⌢',
        'Fscr;': 'ℱ',
        'fscr;': '𝒻',
        'gacute;': 'ǵ',
        'Gamma;': 'Γ',
        'gamma;': 'γ',
        'Gammad;': 'Ϝ',
        'gammad;': 'ϝ',
        'gap;': '⪆',
        'Gbreve;': 'Ğ',
        'gbreve;': 'ğ',
        'Gcedil;': 'Ģ',
        'Gcirc;': 'Ĝ',
        'gcirc;': 'ĝ',
        'Gcy;': 'Г',
        'gcy;': 'г',
        'Gdot;': 'Ġ',
        'gdot;': 'ġ',
        'gE;': '≧',
        'ge;': '≥',
        'gEl;': '⪌',
        'gel;': '⋛',
        'geq;': '≥',
        'geqq;': '≧',
        'geqslant;': '⩾',
        'ges;': '⩾',
        'gescc;': '⪩',
        'gesdot;': '⪀',
        'gesdoto;': '⪂',
        'gesdotol;': '⪄',
        'gesl;': '⋛︀',
        'gesles;': '⪔',
        'Gfr;': '𝔊',
        'gfr;': '𝔤',
        'Gg;': '⋙',
        'gg;': '≫',
        'ggg;': '⋙',
        'gimel;': 'ℷ',
        'GJcy;': 'Ѓ',
        'gjcy;': 'ѓ',
        'gl;': '≷',
        'gla;': '⪥',
        'glE;': '⪒',
        'glj;': '⪤',
        'gnap;': '⪊',
        'gnapprox;': '⪊',
        'gnE;': '≩',
        'gne;': '⪈',
        'gneq;': '⪈',
        'gneqq;': '≩',
        'gnsim;': '⋧',
        'Gopf;': '𝔾',
        'gopf;': '𝕘',
        'grave;': '`',
        'GreaterEqual;': '≥',
        'GreaterEqualLess;': '⋛',
        'GreaterFullEqual;': '≧',
        'GreaterGreater;': '⪢',
        'GreaterLess;': '≷',
        'GreaterSlantEqual;': '⩾',
        'GreaterTilde;': '≳',
        'Gscr;': '𝒢',
        'gscr;': 'ℊ',
        'gsim;': '≳',
        'gsime;': '⪎',
        'gsiml;': '⪐',
        'GT;': '>',
        GT: '>',
        'Gt;': '≫',
        'gt;': '>',
        gt: '>',
        'gtcc;': '⪧',
        'gtcir;': '⩺',
        'gtdot;': '⋗',
        'gtlPar;': '⦕',
        'gtquest;': '⩼',
        'gtrapprox;': '⪆',
        'gtrarr;': '⥸',
        'gtrdot;': '⋗',
        'gtreqless;': '⋛',
        'gtreqqless;': '⪌',
        'gtrless;': '≷',
        'gtrsim;': '≳',
        'gvertneqq;': '≩︀',
        'gvnE;': '≩︀',
        'Hacek;': 'ˇ',
        'hairsp;': ' ',
        'half;': '½',
        'hamilt;': 'ℋ',
        'HARDcy;': 'Ъ',
        'hardcy;': 'ъ',
        'hArr;': '⇔',
        'harr;': '↔',
        'harrcir;': '⥈',
        'harrw;': '↭',
        'Hat;': '^',
        'hbar;': 'ℏ',
        'Hcirc;': 'Ĥ',
        'hcirc;': 'ĥ',
        'hearts;': '♥',
        'heartsuit;': '♥',
        'hellip;': '…',
        'hercon;': '⊹',
        'Hfr;': 'ℌ',
        'hfr;': '𝔥',
        'HilbertSpace;': 'ℋ',
        'hksearow;': '⤥',
        'hkswarow;': '⤦',
        'hoarr;': '⇿',
        'homtht;': '∻',
        'hookleftarrow;': '↩',
        'hookrightarrow;': '↪',
        'Hopf;': 'ℍ',
        'hopf;': '𝕙',
        'horbar;': '―',
        'HorizontalLine;': '─',
        'Hscr;': 'ℋ',
        'hscr;': '𝒽',
        'hslash;': 'ℏ',
        'Hstrok;': 'Ħ',
        'hstrok;': 'ħ',
        'HumpDownHump;': '≎',
        'HumpEqual;': '≏',
        'hybull;': '⁃',
        'hyphen;': '‐',
        'Iacute;': 'Í',
        Iacute: 'Í',
        'iacute;': 'í',
        iacute: 'í',
        'ic;': '⁣',
        'Icirc;': 'Î',
        Icirc: 'Î',
        'icirc;': 'î',
        icirc: 'î',
        'Icy;': 'И',
        'icy;': 'и',
        'Idot;': 'İ',
        'IEcy;': 'Е',
        'iecy;': 'е',
        'iexcl;': '¡',
        iexcl: '¡',
        'iff;': '⇔',
        'Ifr;': 'ℑ',
        'ifr;': '𝔦',
        'Igrave;': 'Ì',
        Igrave: 'Ì',
        'igrave;': 'ì',
        igrave: 'ì',
        'ii;': 'ⅈ',
        'iiiint;': '⨌',
        'iiint;': '∭',
        'iinfin;': '⧜',
        'iiota;': '℩',
        'IJlig;': 'Ĳ',
        'ijlig;': 'ĳ',
        'Im;': 'ℑ',
        'Imacr;': 'Ī',
        'imacr;': 'ī',
        'image;': 'ℑ',
        'ImaginaryI;': 'ⅈ',
        'imagline;': 'ℐ',
        'imagpart;': 'ℑ',
        'imath;': 'ı',
        'imof;': '⊷',
        'imped;': 'Ƶ',
        'Implies;': '⇒',
        'in;': '∈',
        'incare;': '℅',
        'infin;': '∞',
        'infintie;': '⧝',
        'inodot;': 'ı',
        'Int;': '∬',
        'int;': '∫',
        'intcal;': '⊺',
        'integers;': 'ℤ',
        'Integral;': '∫',
        'intercal;': '⊺',
        'Intersection;': '⋂',
        'intlarhk;': '⨗',
        'intprod;': '⨼',
        'InvisibleComma;': '⁣',
        'InvisibleTimes;': '⁢',
        'IOcy;': 'Ё',
        'iocy;': 'ё',
        'Iogon;': 'Į',
        'iogon;': 'į',
        'Iopf;': '𝕀',
        'iopf;': '𝕚',
        'Iota;': 'Ι',
        'iota;': 'ι',
        'iprod;': '⨼',
        'iquest;': '¿',
        iquest: '¿',
        'Iscr;': 'ℐ',
        'iscr;': '𝒾',
        'isin;': '∈',
        'isindot;': '⋵',
        'isinE;': '⋹',
        'isins;': '⋴',
        'isinsv;': '⋳',
        'isinv;': '∈',
        'it;': '⁢',
        'Itilde;': 'Ĩ',
        'itilde;': 'ĩ',
        'Iukcy;': 'І',
        'iukcy;': 'і',
        'Iuml;': 'Ï',
        Iuml: 'Ï',
        'iuml;': 'ï',
        iuml: 'ï',
        'Jcirc;': 'Ĵ',
        'jcirc;': 'ĵ',
        'Jcy;': 'Й',
        'jcy;': 'й',
        'Jfr;': '𝔍',
        'jfr;': '𝔧',
        'jmath;': 'ȷ',
        'Jopf;': '𝕁',
        'jopf;': '𝕛',
        'Jscr;': '𝒥',
        'jscr;': '𝒿',
        'Jsercy;': 'Ј',
        'jsercy;': 'ј',
        'Jukcy;': 'Є',
        'jukcy;': 'є',
        'Kappa;': 'Κ',
        'kappa;': 'κ',
        'kappav;': 'ϰ',
        'Kcedil;': 'Ķ',
        'kcedil;': 'ķ',
        'Kcy;': 'К',
        'kcy;': 'к',
        'Kfr;': '𝔎',
        'kfr;': '𝔨',
        'kgreen;': 'ĸ',
        'KHcy;': 'Х',
        'khcy;': 'х',
        'KJcy;': 'Ќ',
        'kjcy;': 'ќ',
        'Kopf;': '𝕂',
        'kopf;': '𝕜',
        'Kscr;': '𝒦',
        'kscr;': '𝓀',
        'lAarr;': '⇚',
        'Lacute;': 'Ĺ',
        'lacute;': 'ĺ',
        'laemptyv;': '⦴',
        'lagran;': 'ℒ',
        'Lambda;': 'Λ',
        'lambda;': 'λ',
        'Lang;': '⟪',
        'lang;': '⟨',
        'langd;': '⦑',
        'langle;': '⟨',
        'lap;': '⪅',
        'Laplacetrf;': 'ℒ',
        'laquo;': '«',
        laquo: '«',
        'Larr;': '↞',
        'lArr;': '⇐',
        'larr;': '←',
        'larrb;': '⇤',
        'larrbfs;': '⤟',
        'larrfs;': '⤝',
        'larrhk;': '↩',
        'larrlp;': '↫',
        'larrpl;': '⤹',
        'larrsim;': '⥳',
        'larrtl;': '↢',
        'lat;': '⪫',
        'lAtail;': '⤛',
        'latail;': '⤙',
        'late;': '⪭',
        'lates;': '⪭︀',
        'lBarr;': '⤎',
        'lbarr;': '⤌',
        'lbbrk;': '❲',
        'lbrace;': '{',
        'lbrack;': '[',
        'lbrke;': '⦋',
        'lbrksld;': '⦏',
        'lbrkslu;': '⦍',
        'Lcaron;': 'Ľ',
        'lcaron;': 'ľ',
        'Lcedil;': 'Ļ',
        'lcedil;': 'ļ',
        'lceil;': '⌈',
        'lcub;': '{',
        'Lcy;': 'Л',
        'lcy;': 'л',
        'ldca;': '⤶',
        'ldquo;': '“',
        'ldquor;': '„',
        'ldrdhar;': '⥧',
        'ldrushar;': '⥋',
        'ldsh;': '↲',
        'lE;': '≦',
        'le;': '≤',
        'LeftAngleBracket;': '⟨',
        'LeftArrow;': '←',
        'Leftarrow;': '⇐',
        'leftarrow;': '←',
        'LeftArrowBar;': '⇤',
        'LeftArrowRightArrow;': '⇆',
        'leftarrowtail;': '↢',
        'LeftCeiling;': '⌈',
        'LeftDoubleBracket;': '⟦',
        'LeftDownTeeVector;': '⥡',
        'LeftDownVector;': '⇃',
        'LeftDownVectorBar;': '⥙',
        'LeftFloor;': '⌊',
        'leftharpoondown;': '↽',
        'leftharpoonup;': '↼',
        'leftleftarrows;': '⇇',
        'LeftRightArrow;': '↔',
        'Leftrightarrow;': '⇔',
        'leftrightarrow;': '↔',
        'leftrightarrows;': '⇆',
        'leftrightharpoons;': '⇋',
        'leftrightsquigarrow;': '↭',
        'LeftRightVector;': '⥎',
        'LeftTee;': '⊣',
        'LeftTeeArrow;': '↤',
        'LeftTeeVector;': '⥚',
        'leftthreetimes;': '⋋',
        'LeftTriangle;': '⊲',
        'LeftTriangleBar;': '⧏',
        'LeftTriangleEqual;': '⊴',
        'LeftUpDownVector;': '⥑',
        'LeftUpTeeVector;': '⥠',
        'LeftUpVector;': '↿',
        'LeftUpVectorBar;': '⥘',
        'LeftVector;': '↼',
        'LeftVectorBar;': '⥒',
        'lEg;': '⪋',
        'leg;': '⋚',
        'leq;': '≤',
        'leqq;': '≦',
        'leqslant;': '⩽',
        'les;': '⩽',
        'lescc;': '⪨',
        'lesdot;': '⩿',
        'lesdoto;': '⪁',
        'lesdotor;': '⪃',
        'lesg;': '⋚︀',
        'lesges;': '⪓',
        'lessapprox;': '⪅',
        'lessdot;': '⋖',
        'lesseqgtr;': '⋚',
        'lesseqqgtr;': '⪋',
        'LessEqualGreater;': '⋚',
        'LessFullEqual;': '≦',
        'LessGreater;': '≶',
        'lessgtr;': '≶',
        'LessLess;': '⪡',
        'lesssim;': '≲',
        'LessSlantEqual;': '⩽',
        'LessTilde;': '≲',
        'lfisht;': '⥼',
        'lfloor;': '⌊',
        'Lfr;': '𝔏',
        'lfr;': '𝔩',
        'lg;': '≶',
        'lgE;': '⪑',
        'lHar;': '⥢',
        'lhard;': '↽',
        'lharu;': '↼',
        'lharul;': '⥪',
        'lhblk;': '▄',
        'LJcy;': 'Љ',
        'ljcy;': 'љ',
        'Ll;': '⋘',
        'll;': '≪',
        'llarr;': '⇇',
        'llcorner;': '⌞',
        'Lleftarrow;': '⇚',
        'llhard;': '⥫',
        'lltri;': '◺',
        'Lmidot;': 'Ŀ',
        'lmidot;': 'ŀ',
        'lmoust;': '⎰',
        'lmoustache;': '⎰',
        'lnap;': '⪉',
        'lnapprox;': '⪉',
        'lnE;': '≨',
        'lne;': '⪇',
        'lneq;': '⪇',
        'lneqq;': '≨',
        'lnsim;': '⋦',
        'loang;': '⟬',
        'loarr;': '⇽',
        'lobrk;': '⟦',
        'LongLeftArrow;': '⟵',
        'Longleftarrow;': '⟸',
        'longleftarrow;': '⟵',
        'LongLeftRightArrow;': '⟷',
        'Longleftrightarrow;': '⟺',
        'longleftrightarrow;': '⟷',
        'longmapsto;': '⟼',
        'LongRightArrow;': '⟶',
        'Longrightarrow;': '⟹',
        'longrightarrow;': '⟶',
        'looparrowleft;': '↫',
        'looparrowright;': '↬',
        'lopar;': '⦅',
        'Lopf;': '𝕃',
        'lopf;': '𝕝',
        'loplus;': '⨭',
        'lotimes;': '⨴',
        'lowast;': '∗',
        'lowbar;': '_',
        'LowerLeftArrow;': '↙',
        'LowerRightArrow;': '↘',
        'loz;': '◊',
        'lozenge;': '◊',
        'lozf;': '⧫',
        'lpar;': '(',
        'lparlt;': '⦓',
        'lrarr;': '⇆',
        'lrcorner;': '⌟',
        'lrhar;': '⇋',
        'lrhard;': '⥭',
        'lrm;': '‎',
        'lrtri;': '⊿',
        'lsaquo;': '‹',
        'Lscr;': 'ℒ',
        'lscr;': '𝓁',
        'Lsh;': '↰',
        'lsh;': '↰',
        'lsim;': '≲',
        'lsime;': '⪍',
        'lsimg;': '⪏',
        'lsqb;': '[',
        'lsquo;': '‘',
        'lsquor;': '‚',
        'Lstrok;': 'Ł',
        'lstrok;': 'ł',
        'LT;': '<',
        LT: '<',
        'Lt;': '≪',
        'lt;': '<',
        lt: '<',
        'ltcc;': '⪦',
        'ltcir;': '⩹',
        'ltdot;': '⋖',
        'lthree;': '⋋',
        'ltimes;': '⋉',
        'ltlarr;': '⥶',
        'ltquest;': '⩻',
        'ltri;': '◃',
        'ltrie;': '⊴',
        'ltrif;': '◂',
        'ltrPar;': '⦖',
        'lurdshar;': '⥊',
        'luruhar;': '⥦',
        'lvertneqq;': '≨︀',
        'lvnE;': '≨︀',
        'macr;': '¯',
        macr: '¯',
        'male;': '♂',
        'malt;': '✠',
        'maltese;': '✠',
        'Map;': '⤅',
        'map;': '↦',
        'mapsto;': '↦',
        'mapstodown;': '↧',
        'mapstoleft;': '↤',
        'mapstoup;': '↥',
        'marker;': '▮',
        'mcomma;': '⨩',
        'Mcy;': 'М',
        'mcy;': 'м',
        'mdash;': '—',
        'mDDot;': '∺',
        'measuredangle;': '∡',
        'MediumSpace;': ' ',
        'Mellintrf;': 'ℳ',
        'Mfr;': '𝔐',
        'mfr;': '𝔪',
        'mho;': '℧',
        'micro;': 'µ',
        micro: 'µ',
        'mid;': '∣',
        'midast;': '*',
        'midcir;': '⫰',
        'middot;': '·',
        middot: '·',
        'minus;': '−',
        'minusb;': '⊟',
        'minusd;': '∸',
        'minusdu;': '⨪',
        'MinusPlus;': '∓',
        'mlcp;': '⫛',
        'mldr;': '…',
        'mnplus;': '∓',
        'models;': '⊧',
        'Mopf;': '𝕄',
        'mopf;': '𝕞',
        'mp;': '∓',
        'Mscr;': 'ℳ',
        'mscr;': '𝓂',
        'mstpos;': '∾',
        'Mu;': 'Μ',
        'mu;': 'μ',
        'multimap;': '⊸',
        'mumap;': '⊸',
        'nabla;': '∇',
        'Nacute;': 'Ń',
        'nacute;': 'ń',
        'nang;': '∠⃒',
        'nap;': '≉',
        'napE;': '⩰̸',
        'napid;': '≋̸',
        'napos;': 'ŉ',
        'napprox;': '≉',
        'natur;': '♮',
        'natural;': '♮',
        'naturals;': 'ℕ',
        'nbsp;': ' ',
        nbsp: ' ',
        'nbump;': '≎̸',
        'nbumpe;': '≏̸',
        'ncap;': '⩃',
        'Ncaron;': 'Ň',
        'ncaron;': 'ň',
        'Ncedil;': 'Ņ',
        'ncedil;': 'ņ',
        'ncong;': '≇',
        'ncongdot;': '⩭̸',
        'ncup;': '⩂',
        'Ncy;': 'Н',
        'ncy;': 'н',
        'ndash;': '–',
        'ne;': '≠',
        'nearhk;': '⤤',
        'neArr;': '⇗',
        'nearr;': '↗',
        'nearrow;': '↗',
        'nedot;': '≐̸',
        'NegativeMediumSpace;': '​',
        'NegativeThickSpace;': '​',
        'NegativeThinSpace;': '​',
        'NegativeVeryThinSpace;': '​',
        'nequiv;': '≢',
        'nesear;': '⤨',
        'nesim;': '≂̸',
        'NestedGreaterGreater;': '≫',
        'NestedLessLess;': '≪',
        'NewLine;': '\n',
        'nexist;': '∄',
        'nexists;': '∄',
        'Nfr;': '𝔑',
        'nfr;': '𝔫',
        'ngE;': '≧̸',
        'nge;': '≱',
        'ngeq;': '≱',
        'ngeqq;': '≧̸',
        'ngeqslant;': '⩾̸',
        'nges;': '⩾̸',
        'nGg;': '⋙̸',
        'ngsim;': '≵',
        'nGt;': '≫⃒',
        'ngt;': '≯',
        'ngtr;': '≯',
        'nGtv;': '≫̸',
        'nhArr;': '⇎',
        'nharr;': '↮',
        'nhpar;': '⫲',
        'ni;': '∋',
        'nis;': '⋼',
        'nisd;': '⋺',
        'niv;': '∋',
        'NJcy;': 'Њ',
        'njcy;': 'њ',
        'nlArr;': '⇍',
        'nlarr;': '↚',
        'nldr;': '‥',
        'nlE;': '≦̸',
        'nle;': '≰',
        'nLeftarrow;': '⇍',
        'nleftarrow;': '↚',
        'nLeftrightarrow;': '⇎',
        'nleftrightarrow;': '↮',
        'nleq;': '≰',
        'nleqq;': '≦̸',
        'nleqslant;': '⩽̸',
        'nles;': '⩽̸',
        'nless;': '≮',
        'nLl;': '⋘̸',
        'nlsim;': '≴',
        'nLt;': '≪⃒',
        'nlt;': '≮',
        'nltri;': '⋪',
        'nltrie;': '⋬',
        'nLtv;': '≪̸',
        'nmid;': '∤',
        'NoBreak;': '⁠',
        'NonBreakingSpace;': ' ',
        'Nopf;': 'ℕ',
        'nopf;': '𝕟',
        'Not;': '⫬',
        'not;': '¬',
        not: '¬',
        'NotCongruent;': '≢',
        'NotCupCap;': '≭',
        'NotDoubleVerticalBar;': '∦',
        'NotElement;': '∉',
        'NotEqual;': '≠',
        'NotEqualTilde;': '≂̸',
        'NotExists;': '∄',
        'NotGreater;': '≯',
        'NotGreaterEqual;': '≱',
        'NotGreaterFullEqual;': '≧̸',
        'NotGreaterGreater;': '≫̸',
        'NotGreaterLess;': '≹',
        'NotGreaterSlantEqual;': '⩾̸',
        'NotGreaterTilde;': '≵',
        'NotHumpDownHump;': '≎̸',
        'NotHumpEqual;': '≏̸',
        'notin;': '∉',
        'notindot;': '⋵̸',
        'notinE;': '⋹̸',
        'notinva;': '∉',
        'notinvb;': '⋷',
        'notinvc;': '⋶',
        'NotLeftTriangle;': '⋪',
        'NotLeftTriangleBar;': '⧏̸',
        'NotLeftTriangleEqual;': '⋬',
        'NotLess;': '≮',
        'NotLessEqual;': '≰',
        'NotLessGreater;': '≸',
        'NotLessLess;': '≪̸',
        'NotLessSlantEqual;': '⩽̸',
        'NotLessTilde;': '≴',
        'NotNestedGreaterGreater;': '⪢̸',
        'NotNestedLessLess;': '⪡̸',
        'notni;': '∌',
        'notniva;': '∌',
        'notnivb;': '⋾',
        'notnivc;': '⋽',
        'NotPrecedes;': '⊀',
        'NotPrecedesEqual;': '⪯̸',
        'NotPrecedesSlantEqual;': '⋠',
        'NotReverseElement;': '∌',
        'NotRightTriangle;': '⋫',
        'NotRightTriangleBar;': '⧐̸',
        'NotRightTriangleEqual;': '⋭',
        'NotSquareSubset;': '⊏̸',
        'NotSquareSubsetEqual;': '⋢',
        'NotSquareSuperset;': '⊐̸',
        'NotSquareSupersetEqual;': '⋣',
        'NotSubset;': '⊂⃒',
        'NotSubsetEqual;': '⊈',
        'NotSucceeds;': '⊁',
        'NotSucceedsEqual;': '⪰̸',
        'NotSucceedsSlantEqual;': '⋡',
        'NotSucceedsTilde;': '≿̸',
        'NotSuperset;': '⊃⃒',
        'NotSupersetEqual;': '⊉',
        'NotTilde;': '≁',
        'NotTildeEqual;': '≄',
        'NotTildeFullEqual;': '≇',
        'NotTildeTilde;': '≉',
        'NotVerticalBar;': '∤',
        'npar;': '∦',
        'nparallel;': '∦',
        'nparsl;': '⫽⃥',
        'npart;': '∂̸',
        'npolint;': '⨔',
        'npr;': '⊀',
        'nprcue;': '⋠',
        'npre;': '⪯̸',
        'nprec;': '⊀',
        'npreceq;': '⪯̸',
        'nrArr;': '⇏',
        'nrarr;': '↛',
        'nrarrc;': '⤳̸',
        'nrarrw;': '↝̸',
        'nRightarrow;': '⇏',
        'nrightarrow;': '↛',
        'nrtri;': '⋫',
        'nrtrie;': '⋭',
        'nsc;': '⊁',
        'nsccue;': '⋡',
        'nsce;': '⪰̸',
        'Nscr;': '𝒩',
        'nscr;': '𝓃',
        'nshortmid;': '∤',
        'nshortparallel;': '∦',
        'nsim;': '≁',
        'nsime;': '≄',
        'nsimeq;': '≄',
        'nsmid;': '∤',
        'nspar;': '∦',
        'nsqsube;': '⋢',
        'nsqsupe;': '⋣',
        'nsub;': '⊄',
        'nsubE;': '⫅̸',
        'nsube;': '⊈',
        'nsubset;': '⊂⃒',
        'nsubseteq;': '⊈',
        'nsubseteqq;': '⫅̸',
        'nsucc;': '⊁',
        'nsucceq;': '⪰̸',
        'nsup;': '⊅',
        'nsupE;': '⫆̸',
        'nsupe;': '⊉',
        'nsupset;': '⊃⃒',
        'nsupseteq;': '⊉',
        'nsupseteqq;': '⫆̸',
        'ntgl;': '≹',
        'Ntilde;': 'Ñ',
        Ntilde: 'Ñ',
        'ntilde;': 'ñ',
        ntilde: 'ñ',
        'ntlg;': '≸',
        'ntriangleleft;': '⋪',
        'ntrianglelefteq;': '⋬',
        'ntriangleright;': '⋫',
        'ntrianglerighteq;': '⋭',
        'Nu;': 'Ν',
        'nu;': 'ν',
        'num;': '#',
        'numero;': '№',
        'numsp;': ' ',
        'nvap;': '≍⃒',
        'nVDash;': '⊯',
        'nVdash;': '⊮',
        'nvDash;': '⊭',
        'nvdash;': '⊬',
        'nvge;': '≥⃒',
        'nvgt;': '>⃒',
        'nvHarr;': '⤄',
        'nvinfin;': '⧞',
        'nvlArr;': '⤂',
        'nvle;': '≤⃒',
        'nvlt;': '<⃒',
        'nvltrie;': '⊴⃒',
        'nvrArr;': '⤃',
        'nvrtrie;': '⊵⃒',
        'nvsim;': '∼⃒',
        'nwarhk;': '⤣',
        'nwArr;': '⇖',
        'nwarr;': '↖',
        'nwarrow;': '↖',
        'nwnear;': '⤧',
        'Oacute;': 'Ó',
        Oacute: 'Ó',
        'oacute;': 'ó',
        oacute: 'ó',
        'oast;': '⊛',
        'ocir;': '⊚',
        'Ocirc;': 'Ô',
        Ocirc: 'Ô',
        'ocirc;': 'ô',
        ocirc: 'ô',
        'Ocy;': 'О',
        'ocy;': 'о',
        'odash;': '⊝',
        'Odblac;': 'Ő',
        'odblac;': 'ő',
        'odiv;': '⨸',
        'odot;': '⊙',
        'odsold;': '⦼',
        'OElig;': 'Œ',
        'oelig;': 'œ',
        'ofcir;': '⦿',
        'Ofr;': '𝔒',
        'ofr;': '𝔬',
        'ogon;': '˛',
        'Ograve;': 'Ò',
        Ograve: 'Ò',
        'ograve;': 'ò',
        ograve: 'ò',
        'ogt;': '⧁',
        'ohbar;': '⦵',
        'ohm;': 'Ω',
        'oint;': '∮',
        'olarr;': '↺',
        'olcir;': '⦾',
        'olcross;': '⦻',
        'oline;': '‾',
        'olt;': '⧀',
        'Omacr;': 'Ō',
        'omacr;': 'ō',
        'Omega;': 'Ω',
        'omega;': 'ω',
        'Omicron;': 'Ο',
        'omicron;': 'ο',
        'omid;': '⦶',
        'ominus;': '⊖',
        'Oopf;': '𝕆',
        'oopf;': '𝕠',
        'opar;': '⦷',
        'OpenCurlyDoubleQuote;': '“',
        'OpenCurlyQuote;': '‘',
        'operp;': '⦹',
        'oplus;': '⊕',
        'Or;': '⩔',
        'or;': '∨',
        'orarr;': '↻',
        'ord;': '⩝',
        'order;': 'ℴ',
        'orderof;': 'ℴ',
        'ordf;': 'ª',
        ordf: 'ª',
        'ordm;': 'º',
        ordm: 'º',
        'origof;': '⊶',
        'oror;': '⩖',
        'orslope;': '⩗',
        'orv;': '⩛',
        'oS;': 'Ⓢ',
        'Oscr;': '𝒪',
        'oscr;': 'ℴ',
        'Oslash;': 'Ø',
        Oslash: 'Ø',
        'oslash;': 'ø',
        oslash: 'ø',
        'osol;': '⊘',
        'Otilde;': 'Õ',
        Otilde: 'Õ',
        'otilde;': 'õ',
        otilde: 'õ',
        'Otimes;': '⨷',
        'otimes;': '⊗',
        'otimesas;': '⨶',
        'Ouml;': 'Ö',
        Ouml: 'Ö',
        'ouml;': 'ö',
        ouml: 'ö',
        'ovbar;': '⌽',
        'OverBar;': '‾',
        'OverBrace;': '⏞',
        'OverBracket;': '⎴',
        'OverParenthesis;': '⏜',
        'par;': '∥',
        'para;': '¶',
        para: '¶',
        'parallel;': '∥',
        'parsim;': '⫳',
        'parsl;': '⫽',
        'part;': '∂',
        'PartialD;': '∂',
        'Pcy;': 'П',
        'pcy;': 'п',
        'percnt;': '%',
        'period;': '.',
        'permil;': '‰',
        'perp;': '⊥',
        'pertenk;': '‱',
        'Pfr;': '𝔓',
        'pfr;': '𝔭',
        'Phi;': 'Φ',
        'phi;': 'φ',
        'phiv;': 'ϕ',
        'phmmat;': 'ℳ',
        'phone;': '☎',
        'Pi;': 'Π',
        'pi;': 'π',
        'pitchfork;': '⋔',
        'piv;': 'ϖ',
        'planck;': 'ℏ',
        'planckh;': 'ℎ',
        'plankv;': 'ℏ',
        'plus;': '+',
        'plusacir;': '⨣',
        'plusb;': '⊞',
        'pluscir;': '⨢',
        'plusdo;': '∔',
        'plusdu;': '⨥',
        'pluse;': '⩲',
        'PlusMinus;': '±',
        'plusmn;': '±',
        plusmn: '±',
        'plussim;': '⨦',
        'plustwo;': '⨧',
        'pm;': '±',
        'Poincareplane;': 'ℌ',
        'pointint;': '⨕',
        'Popf;': 'ℙ',
        'popf;': '𝕡',
        'pound;': '£',
        pound: '£',
        'Pr;': '⪻',
        'pr;': '≺',
        'prap;': '⪷',
        'prcue;': '≼',
        'prE;': '⪳',
        'pre;': '⪯',
        'prec;': '≺',
        'precapprox;': '⪷',
        'preccurlyeq;': '≼',
        'Precedes;': '≺',
        'PrecedesEqual;': '⪯',
        'PrecedesSlantEqual;': '≼',
        'PrecedesTilde;': '≾',
        'preceq;': '⪯',
        'precnapprox;': '⪹',
        'precneqq;': '⪵',
        'precnsim;': '⋨',
        'precsim;': '≾',
        'Prime;': '″',
        'prime;': '′',
        'primes;': 'ℙ',
        'prnap;': '⪹',
        'prnE;': '⪵',
        'prnsim;': '⋨',
        'prod;': '∏',
        'Product;': '∏',
        'profalar;': '⌮',
        'profline;': '⌒',
        'profsurf;': '⌓',
        'prop;': '∝',
        'Proportion;': '∷',
        'Proportional;': '∝',
        'propto;': '∝',
        'prsim;': '≾',
        'prurel;': '⊰',
        'Pscr;': '𝒫',
        'pscr;': '𝓅',
        'Psi;': 'Ψ',
        'psi;': 'ψ',
        'puncsp;': ' ',
        'Qfr;': '𝔔',
        'qfr;': '𝔮',
        'qint;': '⨌',
        'Qopf;': 'ℚ',
        'qopf;': '𝕢',
        'qprime;': '⁗',
        'Qscr;': '𝒬',
        'qscr;': '𝓆',
        'quaternions;': 'ℍ',
        'quatint;': '⨖',
        'quest;': '?',
        'questeq;': '≟',
        'QUOT;': '"',
        QUOT: '"',
        'quot;': '"',
        quot: '"',
        'rAarr;': '⇛',
        'race;': '∽̱',
        'Racute;': 'Ŕ',
        'racute;': 'ŕ',
        'radic;': '√',
        'raemptyv;': '⦳',
        'Rang;': '⟫',
        'rang;': '⟩',
        'rangd;': '⦒',
        'range;': '⦥',
        'rangle;': '⟩',
        'raquo;': '»',
        raquo: '»',
        'Rarr;': '↠',
        'rArr;': '⇒',
        'rarr;': '→',
        'rarrap;': '⥵',
        'rarrb;': '⇥',
        'rarrbfs;': '⤠',
        'rarrc;': '⤳',
        'rarrfs;': '⤞',
        'rarrhk;': '↪',
        'rarrlp;': '↬',
        'rarrpl;': '⥅',
        'rarrsim;': '⥴',
        'Rarrtl;': '⤖',
        'rarrtl;': '↣',
        'rarrw;': '↝',
        'rAtail;': '⤜',
        'ratail;': '⤚',
        'ratio;': '∶',
        'rationals;': 'ℚ',
        'RBarr;': '⤐',
        'rBarr;': '⤏',
        'rbarr;': '⤍',
        'rbbrk;': '❳',
        'rbrace;': '}',
        'rbrack;': ']',
        'rbrke;': '⦌',
        'rbrksld;': '⦎',
        'rbrkslu;': '⦐',
        'Rcaron;': 'Ř',
        'rcaron;': 'ř',
        'Rcedil;': 'Ŗ',
        'rcedil;': 'ŗ',
        'rceil;': '⌉',
        'rcub;': '}',
        'Rcy;': 'Р',
        'rcy;': 'р',
        'rdca;': '⤷',
        'rdldhar;': '⥩',
        'rdquo;': '”',
        'rdquor;': '”',
        'rdsh;': '↳',
        'Re;': 'ℜ',
        'real;': 'ℜ',
        'realine;': 'ℛ',
        'realpart;': 'ℜ',
        'reals;': 'ℝ',
        'rect;': '▭',
        'REG;': '®',
        REG: '®',
        'reg;': '®',
        reg: '®',
        'ReverseElement;': '∋',
        'ReverseEquilibrium;': '⇋',
        'ReverseUpEquilibrium;': '⥯',
        'rfisht;': '⥽',
        'rfloor;': '⌋',
        'Rfr;': 'ℜ',
        'rfr;': '𝔯',
        'rHar;': '⥤',
        'rhard;': '⇁',
        'rharu;': '⇀',
        'rharul;': '⥬',
        'Rho;': 'Ρ',
        'rho;': 'ρ',
        'rhov;': 'ϱ',
        'RightAngleBracket;': '⟩',
        'RightArrow;': '→',
        'Rightarrow;': '⇒',
        'rightarrow;': '→',
        'RightArrowBar;': '⇥',
        'RightArrowLeftArrow;': '⇄',
        'rightarrowtail;': '↣',
        'RightCeiling;': '⌉',
        'RightDoubleBracket;': '⟧',
        'RightDownTeeVector;': '⥝',
        'RightDownVector;': '⇂',
        'RightDownVectorBar;': '⥕',
        'RightFloor;': '⌋',
        'rightharpoondown;': '⇁',
        'rightharpoonup;': '⇀',
        'rightleftarrows;': '⇄',
        'rightleftharpoons;': '⇌',
        'rightrightarrows;': '⇉',
        'rightsquigarrow;': '↝',
        'RightTee;': '⊢',
        'RightTeeArrow;': '↦',
        'RightTeeVector;': '⥛',
        'rightthreetimes;': '⋌',
        'RightTriangle;': '⊳',
        'RightTriangleBar;': '⧐',
        'RightTriangleEqual;': '⊵',
        'RightUpDownVector;': '⥏',
        'RightUpTeeVector;': '⥜',
        'RightUpVector;': '↾',
        'RightUpVectorBar;': '⥔',
        'RightVector;': '⇀',
        'RightVectorBar;': '⥓',
        'ring;': '˚',
        'risingdotseq;': '≓',
        'rlarr;': '⇄',
        'rlhar;': '⇌',
        'rlm;': '‏',
        'rmoust;': '⎱',
        'rmoustache;': '⎱',
        'rnmid;': '⫮',
        'roang;': '⟭',
        'roarr;': '⇾',
        'robrk;': '⟧',
        'ropar;': '⦆',
        'Ropf;': 'ℝ',
        'ropf;': '𝕣',
        'roplus;': '⨮',
        'rotimes;': '⨵',
        'RoundImplies;': '⥰',
        'rpar;': ')',
        'rpargt;': '⦔',
        'rppolint;': '⨒',
        'rrarr;': '⇉',
        'Rrightarrow;': '⇛',
        'rsaquo;': '›',
        'Rscr;': 'ℛ',
        'rscr;': '𝓇',
        'Rsh;': '↱',
        'rsh;': '↱',
        'rsqb;': ']',
        'rsquo;': '’',
        'rsquor;': '’',
        'rthree;': '⋌',
        'rtimes;': '⋊',
        'rtri;': '▹',
        'rtrie;': '⊵',
        'rtrif;': '▸',
        'rtriltri;': '⧎',
        'RuleDelayed;': '⧴',
        'ruluhar;': '⥨',
        'rx;': '℞',
        'Sacute;': 'Ś',
        'sacute;': 'ś',
        'sbquo;': '‚',
        'Sc;': '⪼',
        'sc;': '≻',
        'scap;': '⪸',
        'Scaron;': 'Š',
        'scaron;': 'š',
        'sccue;': '≽',
        'scE;': '⪴',
        'sce;': '⪰',
        'Scedil;': 'Ş',
        'scedil;': 'ş',
        'Scirc;': 'Ŝ',
        'scirc;': 'ŝ',
        'scnap;': '⪺',
        'scnE;': '⪶',
        'scnsim;': '⋩',
        'scpolint;': '⨓',
        'scsim;': '≿',
        'Scy;': 'С',
        'scy;': 'с',
        'sdot;': '⋅',
        'sdotb;': '⊡',
        'sdote;': '⩦',
        'searhk;': '⤥',
        'seArr;': '⇘',
        'searr;': '↘',
        'searrow;': '↘',
        'sect;': '§',
        sect: '§',
        'semi;': ';',
        'seswar;': '⤩',
        'setminus;': '∖',
        'setmn;': '∖',
        'sext;': '✶',
        'Sfr;': '𝔖',
        'sfr;': '𝔰',
        'sfrown;': '⌢',
        'sharp;': '♯',
        'SHCHcy;': 'Щ',
        'shchcy;': 'щ',
        'SHcy;': 'Ш',
        'shcy;': 'ш',
        'ShortDownArrow;': '↓',
        'ShortLeftArrow;': '←',
        'shortmid;': '∣',
        'shortparallel;': '∥',
        'ShortRightArrow;': '→',
        'ShortUpArrow;': '↑',
        'shy;': '­',
        shy: '­',
        'Sigma;': 'Σ',
        'sigma;': 'σ',
        'sigmaf;': 'ς',
        'sigmav;': 'ς',
        'sim;': '∼',
        'simdot;': '⩪',
        'sime;': '≃',
        'simeq;': '≃',
        'simg;': '⪞',
        'simgE;': '⪠',
        'siml;': '⪝',
        'simlE;': '⪟',
        'simne;': '≆',
        'simplus;': '⨤',
        'simrarr;': '⥲',
        'slarr;': '←',
        'SmallCircle;': '∘',
        'smallsetminus;': '∖',
        'smashp;': '⨳',
        'smeparsl;': '⧤',
        'smid;': '∣',
        'smile;': '⌣',
        'smt;': '⪪',
        'smte;': '⪬',
        'smtes;': '⪬︀',
        'SOFTcy;': 'Ь',
        'softcy;': 'ь',
        'sol;': '/',
        'solb;': '⧄',
        'solbar;': '⌿',
        'Sopf;': '𝕊',
        'sopf;': '𝕤',
        'spades;': '♠',
        'spadesuit;': '♠',
        'spar;': '∥',
        'sqcap;': '⊓',
        'sqcaps;': '⊓︀',
        'sqcup;': '⊔',
        'sqcups;': '⊔︀',
        'Sqrt;': '√',
        'sqsub;': '⊏',
        'sqsube;': '⊑',
        'sqsubset;': '⊏',
        'sqsubseteq;': '⊑',
        'sqsup;': '⊐',
        'sqsupe;': '⊒',
        'sqsupset;': '⊐',
        'sqsupseteq;': '⊒',
        'squ;': '□',
        'Square;': '□',
        'square;': '□',
        'SquareIntersection;': '⊓',
        'SquareSubset;': '⊏',
        'SquareSubsetEqual;': '⊑',
        'SquareSuperset;': '⊐',
        'SquareSupersetEqual;': '⊒',
        'SquareUnion;': '⊔',
        'squarf;': '▪',
        'squf;': '▪',
        'srarr;': '→',
        'Sscr;': '𝒮',
        'sscr;': '𝓈',
        'ssetmn;': '∖',
        'ssmile;': '⌣',
        'sstarf;': '⋆',
        'Star;': '⋆',
        'star;': '☆',
        'starf;': '★',
        'straightepsilon;': 'ϵ',
        'straightphi;': 'ϕ',
        'strns;': '¯',
        'Sub;': '⋐',
        'sub;': '⊂',
        'subdot;': '⪽',
        'subE;': '⫅',
        'sube;': '⊆',
        'subedot;': '⫃',
        'submult;': '⫁',
        'subnE;': '⫋',
        'subne;': '⊊',
        'subplus;': '⪿',
        'subrarr;': '⥹',
        'Subset;': '⋐',
        'subset;': '⊂',
        'subseteq;': '⊆',
        'subseteqq;': '⫅',
        'SubsetEqual;': '⊆',
        'subsetneq;': '⊊',
        'subsetneqq;': '⫋',
        'subsim;': '⫇',
        'subsub;': '⫕',
        'subsup;': '⫓',
        'succ;': '≻',
        'succapprox;': '⪸',
        'succcurlyeq;': '≽',
        'Succeeds;': '≻',
        'SucceedsEqual;': '⪰',
        'SucceedsSlantEqual;': '≽',
        'SucceedsTilde;': '≿',
        'succeq;': '⪰',
        'succnapprox;': '⪺',
        'succneqq;': '⪶',
        'succnsim;': '⋩',
        'succsim;': '≿',
        'SuchThat;': '∋',
        'Sum;': '∑',
        'sum;': '∑',
        'sung;': '♪',
        'Sup;': '⋑',
        'sup;': '⊃',
        'sup1;': '¹',
        sup1: '¹',
        'sup2;': '²',
        sup2: '²',
        'sup3;': '³',
        sup3: '³',
        'supdot;': '⪾',
        'supdsub;': '⫘',
        'supE;': '⫆',
        'supe;': '⊇',
        'supedot;': '⫄',
        'Superset;': '⊃',
        'SupersetEqual;': '⊇',
        'suphsol;': '⟉',
        'suphsub;': '⫗',
        'suplarr;': '⥻',
        'supmult;': '⫂',
        'supnE;': '⫌',
        'supne;': '⊋',
        'supplus;': '⫀',
        'Supset;': '⋑',
        'supset;': '⊃',
        'supseteq;': '⊇',
        'supseteqq;': '⫆',
        'supsetneq;': '⊋',
        'supsetneqq;': '⫌',
        'supsim;': '⫈',
        'supsub;': '⫔',
        'supsup;': '⫖',
        'swarhk;': '⤦',
        'swArr;': '⇙',
        'swarr;': '↙',
        'swarrow;': '↙',
        'swnwar;': '⤪',
        'szlig;': 'ß',
        szlig: 'ß',
        'Tab;': '\t',
        'target;': '⌖',
        'Tau;': 'Τ',
        'tau;': 'τ',
        'tbrk;': '⎴',
        'Tcaron;': 'Ť',
        'tcaron;': 'ť',
        'Tcedil;': 'Ţ',
        'tcedil;': 'ţ',
        'Tcy;': 'Т',
        'tcy;': 'т',
        'tdot;': '⃛',
        'telrec;': '⌕',
        'Tfr;': '𝔗',
        'tfr;': '𝔱',
        'there4;': '∴',
        'Therefore;': '∴',
        'therefore;': '∴',
        'Theta;': 'Θ',
        'theta;': 'θ',
        'thetasym;': 'ϑ',
        'thetav;': 'ϑ',
        'thickapprox;': '≈',
        'thicksim;': '∼',
        'ThickSpace;': '  ',
        'thinsp;': ' ',
        'ThinSpace;': ' ',
        'thkap;': '≈',
        'thksim;': '∼',
        'THORN;': 'Þ',
        THORN: 'Þ',
        'thorn;': 'þ',
        thorn: 'þ',
        'Tilde;': '∼',
        'tilde;': '˜',
        'TildeEqual;': '≃',
        'TildeFullEqual;': '≅',
        'TildeTilde;': '≈',
        'times;': '×',
        times: '×',
        'timesb;': '⊠',
        'timesbar;': '⨱',
        'timesd;': '⨰',
        'tint;': '∭',
        'toea;': '⤨',
        'top;': '⊤',
        'topbot;': '⌶',
        'topcir;': '⫱',
        'Topf;': '𝕋',
        'topf;': '𝕥',
        'topfork;': '⫚',
        'tosa;': '⤩',
        'tprime;': '‴',
        'TRADE;': '™',
        'trade;': '™',
        'triangle;': '▵',
        'triangledown;': '▿',
        'triangleleft;': '◃',
        'trianglelefteq;': '⊴',
        'triangleq;': '≜',
        'triangleright;': '▹',
        'trianglerighteq;': '⊵',
        'tridot;': '◬',
        'trie;': '≜',
        'triminus;': '⨺',
        'TripleDot;': '⃛',
        'triplus;': '⨹',
        'trisb;': '⧍',
        'tritime;': '⨻',
        'trpezium;': '⏢',
        'Tscr;': '𝒯',
        'tscr;': '𝓉',
        'TScy;': 'Ц',
        'tscy;': 'ц',
        'TSHcy;': 'Ћ',
        'tshcy;': 'ћ',
        'Tstrok;': 'Ŧ',
        'tstrok;': 'ŧ',
        'twixt;': '≬',
        'twoheadleftarrow;': '↞',
        'twoheadrightarrow;': '↠',
        'Uacute;': 'Ú',
        Uacute: 'Ú',
        'uacute;': 'ú',
        uacute: 'ú',
        'Uarr;': '↟',
        'uArr;': '⇑',
        'uarr;': '↑',
        'Uarrocir;': '⥉',
        'Ubrcy;': 'Ў',
        'ubrcy;': 'ў',
        'Ubreve;': 'Ŭ',
        'ubreve;': 'ŭ',
        'Ucirc;': 'Û',
        Ucirc: 'Û',
        'ucirc;': 'û',
        ucirc: 'û',
        'Ucy;': 'У',
        'ucy;': 'у',
        'udarr;': '⇅',
        'Udblac;': 'Ű',
        'udblac;': 'ű',
        'udhar;': '⥮',
        'ufisht;': '⥾',
        'Ufr;': '𝔘',
        'ufr;': '𝔲',
        'Ugrave;': 'Ù',
        Ugrave: 'Ù',
        'ugrave;': 'ù',
        ugrave: 'ù',
        'uHar;': '⥣',
        'uharl;': '↿',
        'uharr;': '↾',
        'uhblk;': '▀',
        'ulcorn;': '⌜',
        'ulcorner;': '⌜',
        'ulcrop;': '⌏',
        'ultri;': '◸',
        'Umacr;': 'Ū',
        'umacr;': 'ū',
        'uml;': '¨',
        uml: '¨',
        'UnderBar;': '_',
        'UnderBrace;': '⏟',
        'UnderBracket;': '⎵',
        'UnderParenthesis;': '⏝',
        'Union;': '⋃',
        'UnionPlus;': '⊎',
        'Uogon;': 'Ų',
        'uogon;': 'ų',
        'Uopf;': '𝕌',
        'uopf;': '𝕦',
        'UpArrow;': '↑',
        'Uparrow;': '⇑',
        'uparrow;': '↑',
        'UpArrowBar;': '⤒',
        'UpArrowDownArrow;': '⇅',
        'UpDownArrow;': '↕',
        'Updownarrow;': '⇕',
        'updownarrow;': '↕',
        'UpEquilibrium;': '⥮',
        'upharpoonleft;': '↿',
        'upharpoonright;': '↾',
        'uplus;': '⊎',
        'UpperLeftArrow;': '↖',
        'UpperRightArrow;': '↗',
        'Upsi;': 'ϒ',
        'upsi;': 'υ',
        'upsih;': 'ϒ',
        'Upsilon;': 'Υ',
        'upsilon;': 'υ',
        'UpTee;': '⊥',
        'UpTeeArrow;': '↥',
        'upuparrows;': '⇈',
        'urcorn;': '⌝',
        'urcorner;': '⌝',
        'urcrop;': '⌎',
        'Uring;': 'Ů',
        'uring;': 'ů',
        'urtri;': '◹',
        'Uscr;': '𝒰',
        'uscr;': '𝓊',
        'utdot;': '⋰',
        'Utilde;': 'Ũ',
        'utilde;': 'ũ',
        'utri;': '▵',
        'utrif;': '▴',
        'uuarr;': '⇈',
        'Uuml;': 'Ü',
        Uuml: 'Ü',
        'uuml;': 'ü',
        uuml: 'ü',
        'uwangle;': '⦧',
        'vangrt;': '⦜',
        'varepsilon;': 'ϵ',
        'varkappa;': 'ϰ',
        'varnothing;': '∅',
        'varphi;': 'ϕ',
        'varpi;': 'ϖ',
        'varpropto;': '∝',
        'vArr;': '⇕',
        'varr;': '↕',
        'varrho;': 'ϱ',
        'varsigma;': 'ς',
        'varsubsetneq;': '⊊︀',
        'varsubsetneqq;': '⫋︀',
        'varsupsetneq;': '⊋︀',
        'varsupsetneqq;': '⫌︀',
        'vartheta;': 'ϑ',
        'vartriangleleft;': '⊲',
        'vartriangleright;': '⊳',
        'Vbar;': '⫫',
        'vBar;': '⫨',
        'vBarv;': '⫩',
        'Vcy;': 'В',
        'vcy;': 'в',
        'VDash;': '⊫',
        'Vdash;': '⊩',
        'vDash;': '⊨',
        'vdash;': '⊢',
        'Vdashl;': '⫦',
        'Vee;': '⋁',
        'vee;': '∨',
        'veebar;': '⊻',
        'veeeq;': '≚',
        'vellip;': '⋮',
        'Verbar;': '‖',
        'verbar;': '|',
        'Vert;': '‖',
        'vert;': '|',
        'VerticalBar;': '∣',
        'VerticalLine;': '|',
        'VerticalSeparator;': '❘',
        'VerticalTilde;': '≀',
        'VeryThinSpace;': ' ',
        'Vfr;': '𝔙',
        'vfr;': '𝔳',
        'vltri;': '⊲',
        'vnsub;': '⊂⃒',
        'vnsup;': '⊃⃒',
        'Vopf;': '𝕍',
        'vopf;': '𝕧',
        'vprop;': '∝',
        'vrtri;': '⊳',
        'Vscr;': '𝒱',
        'vscr;': '𝓋',
        'vsubnE;': '⫋︀',
        'vsubne;': '⊊︀',
        'vsupnE;': '⫌︀',
        'vsupne;': '⊋︀',
        'Vvdash;': '⊪',
        'vzigzag;': '⦚',
        'Wcirc;': 'Ŵ',
        'wcirc;': 'ŵ',
        'wedbar;': '⩟',
        'Wedge;': '⋀',
        'wedge;': '∧',
        'wedgeq;': '≙',
        'weierp;': '℘',
        'Wfr;': '𝔚',
        'wfr;': '𝔴',
        'Wopf;': '𝕎',
        'wopf;': '𝕨',
        'wp;': '℘',
        'wr;': '≀',
        'wreath;': '≀',
        'Wscr;': '𝒲',
        'wscr;': '𝓌',
        'xcap;': '⋂',
        'xcirc;': '◯',
        'xcup;': '⋃',
        'xdtri;': '▽',
        'Xfr;': '𝔛',
        'xfr;': '𝔵',
        'xhArr;': '⟺',
        'xharr;': '⟷',
        'Xi;': 'Ξ',
        'xi;': 'ξ',
        'xlArr;': '⟸',
        'xlarr;': '⟵',
        'xmap;': '⟼',
        'xnis;': '⋻',
        'xodot;': '⨀',
        'Xopf;': '𝕏',
        'xopf;': '𝕩',
        'xoplus;': '⨁',
        'xotime;': '⨂',
        'xrArr;': '⟹',
        'xrarr;': '⟶',
        'Xscr;': '𝒳',
        'xscr;': '𝓍',
        'xsqcup;': '⨆',
        'xuplus;': '⨄',
        'xutri;': '△',
        'xvee;': '⋁',
        'xwedge;': '⋀',
        'Yacute;': 'Ý',
        Yacute: 'Ý',
        'yacute;': 'ý',
        yacute: 'ý',
        'YAcy;': 'Я',
        'yacy;': 'я',
        'Ycirc;': 'Ŷ',
        'ycirc;': 'ŷ',
        'Ycy;': 'Ы',
        'ycy;': 'ы',
        'yen;': '¥',
        yen: '¥',
        'Yfr;': '𝔜',
        'yfr;': '𝔶',
        'YIcy;': 'Ї',
        'yicy;': 'ї',
        'Yopf;': '𝕐',
        'yopf;': '𝕪',
        'Yscr;': '𝒴',
        'yscr;': '𝓎',
        'YUcy;': 'Ю',
        'yucy;': 'ю',
        'Yuml;': 'Ÿ',
        'yuml;': 'ÿ',
        yuml: 'ÿ',
        'Zacute;': 'Ź',
        'zacute;': 'ź',
        'Zcaron;': 'Ž',
        'zcaron;': 'ž',
        'Zcy;': 'З',
        'zcy;': 'з',
        'Zdot;': 'Ż',
        'zdot;': 'ż',
        'zeetrf;': 'ℨ',
        'ZeroWidthSpace;': '​',
        'Zeta;': 'Ζ',
        'zeta;': 'ζ',
        'Zfr;': 'ℨ',
        'zfr;': '𝔷',
        'ZHcy;': 'Ж',
        'zhcy;': 'ж',
        'zigrarr;': '⇝',
        'Zopf;': 'ℤ',
        'zopf;': '𝕫',
        'Zscr;': '𝒵',
        'zscr;': '𝓏',
        'zwj;': '‍',
        'zwnj;': '‌',
      });
  }),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define(
          'vscode-html-languageservice/services/htmlCompletion',
          [
            'require',
            'exports',
            'vscode-languageserver-types',
            '../parser/htmlScanner',
            '../parser/htmlTags',
            './tagProviders',
            '../htmlLanguageTypes',
            '../parser/htmlEntities',
            'vscode-nls',
            '../utils/strings',
          ],
          e
        );
  })(function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
      value: !0,
    });
    var C = e('vscode-languageserver-types'),
      q = e('../parser/htmlScanner'),
      L = e('../parser/htmlTags'),
      O = e('./tagProviders'),
      I = e('../htmlLanguageTypes'),
      D = e('../parser/htmlEntities'),
      n = e('vscode-nls'),
      N = e('../utils/strings'),
      R = n.loadMessageBundle(),
      r = (function () {
        function e() {
          this.completionParticipants = [];
        }
        return (
          (e.prototype.setCompletionParticipants = function (e) {
            this.completionParticipants = e || [];
          }),
          (e.prototype.doComplete = function (m, b, s, r) {
            var v = {
                isIncomplete: !1,
                items: [],
              },
              y = this.completionParticipants,
              T = O.allTagProviders.filter(function (e) {
                return (
                  e.isApplicable(m.languageId) && (!r || !1 !== r[e.getId()])
                );
              }),
              w = m.getText(),
              _ = m.offsetAt(b),
              d = s.findNodeBefore(_);
            if (!d) return v;
            var x,
              k = q.createScanner(w, d.start),
              S = '';

            function E(e, t) {
              return (
                void 0 === t && (t = _),
                _ < e && (e = _),
                {
                  start: m.positionAt(e),
                  end: m.positionAt(t),
                }
              );
            }

            function n(e, t) {
              var n = E(e, t);
              return (
                T.forEach(function (e) {
                  e.collectTags(function (e, t) {
                    v.items.push({
                      label: e,
                      kind: C.CompletionItemKind.Property,
                      documentation: t,
                      textEdit: C.TextEdit.replace(n, e),
                      insertTextFormat: C.InsertTextFormat.PlainText,
                    });
                  });
                }),
                v
              );
            }

            function p(e) {
              for (var t = e; 0 < t; ) {
                var n = w.charAt(t - 1);
                if (0 <= '\n\r'.indexOf(n)) return w.substring(t, e);
                if (!j(n)) return null;
                t--;
              }
              return w.substring(0, e);
            }

            function i(e, t, n) {
              void 0 === n && (n = _);
              var r = E(e, n),
                i = P(
                  w,
                  n,
                  I.ScannerState.WithinEndTag,
                  I.TokenType.EndTagClose
                )
                  ? ''
                  : '>',
                a = d;
              for (t && (a = a.parent); a; ) {
                var o = a.tag;
                if (o && (!a.closed || (a.endTagStart && a.endTagStart > _))) {
                  var s = {
                      label: '/' + o,
                      kind: C.CompletionItemKind.Property,
                      filterText: '/' + o + i,
                      textEdit: C.TextEdit.replace(r, '/' + o + i),
                      insertTextFormat: C.InsertTextFormat.PlainText,
                    },
                    l = p(a.start),
                    c = p(e - 1);
                  if (null !== l && null !== c && l !== c) {
                    var u = l + '</' + o + i;
                    (s.textEdit = C.TextEdit.replace(E(e - 1 - c.length), u)),
                      (s.filterText = c + '</' + o + i);
                  }
                  return v.items.push(s), v;
                }
                a = a.parent;
              }
              return (
                t ||
                  T.forEach(function (e) {
                    e.collectTags(function (e, t) {
                      v.items.push({
                        label: '/' + e,
                        kind: C.CompletionItemKind.Property,
                        documentation: t,
                        filterText: '/' + e + i,
                        textEdit: C.TextEdit.replace(r, '/' + e + i),
                        insertTextFormat: C.InsertTextFormat.PlainText,
                      });
                    });
                  }),
                v
              );
            }

            function e(e, t) {
              if (r && r.hideAutoCompleteProposals) return v;
              if (!L.isEmptyElement(t)) {
                var n = m.positionAt(e);
                v.items.push({
                  label: '</' + t + '>',
                  kind: C.CompletionItemKind.Property,
                  filterText: '</' + t + '>',
                  textEdit: C.TextEdit.insert(n, '$0</' + t + '>'),
                  insertTextFormat: C.InsertTextFormat.Snippet,
                });
              }
              return v;
            }

            function t(e, t) {
              return n(e, t), i(e, !0, t), v;
            }

            function a(e, t) {
              void 0 === t && (t = _);
              for (var n = _; n < t && '<' !== w[n]; ) n++;
              var i = E(e, n),
                a = P(
                  w,
                  t,
                  I.ScannerState.AfterAttributeName,
                  I.TokenType.DelimiterAssign
                )
                  ? ''
                  : '="$1"',
                r = S.toLowerCase(),
                o = Object.create(null);
              return (
                T.forEach(function (e) {
                  e.collectAttributes(r, function (e, t) {
                    if (!o[e]) {
                      o[e] = !0;
                      var n,
                        r = e;
                      'v' !== t &&
                        a.length &&
                        ((r += a),
                        t &&
                          (n = {
                            title: 'Suggest',
                            command: 'editor.action.triggerSuggest',
                          })),
                        v.items.push({
                          label: e,
                          kind:
                            'handler' === t
                              ? C.CompletionItemKind.Function
                              : C.CompletionItemKind.Value,
                          textEdit: C.TextEdit.replace(i, r),
                          insertTextFormat: C.InsertTextFormat.Snippet,
                          command: n,
                        });
                    }
                  });
                }),
                (function (t, n) {
                  var r = 'data-',
                    i = {};
                  (i[r] = r + '$1="$2"'),
                    s &&
                      s.roots.forEach(function (e) {
                        return (function t(e) {
                          e.attributeNames.forEach(function (e) {
                            !N.startsWith(e, r) ||
                              i[e] ||
                              n[e] ||
                              (i[e] = e + '="$1"');
                          });
                          e.children.forEach(function (e) {
                            return t(e);
                          });
                        })(e);
                      });
                  Object.keys(i).forEach(function (e) {
                    return v.items.push({
                      label: e,
                      kind: C.CompletionItemKind.Value,
                      textEdit: C.TextEdit.replace(t, i[e]),
                      insertTextFormat: C.InsertTextFormat.Snippet,
                    });
                  });
                })(i, o),
                v
              );
            }

            function o(e, t) {
              var n, r, i, a;
              if (
                (void 0 === t && (t = _),
                e < _ && _ <= t && ((a = w[e]), /^["']*$/.test(a)))
              ) {
                var o = e + 1,
                  s = t;
                e < t && w[t - 1] === w[e] && s--;
                var l = (function (e, t, n) {
                    for (; n < t && !j(e[t - 1]); ) t--;
                    return t;
                  })(w, _, o),
                  c = (function (e, t, n) {
                    for (; t < n && !j(e[t]); ) t++;
                    return t;
                  })(w, _, s);
                (n = E(l, c)),
                  (i = o <= _ && _ <= s ? w.substring(o, _) : ''),
                  (r = !1);
              } else (n = E(e, t)), (i = w.substring(e, _)), (r = !0);
              var u = S.toLowerCase(),
                d = x.toLowerCase();
              if (0 < y.length)
                for (var p = E(e, t), h = 0, f = y; h < f.length; h++) {
                  var g = f[h];
                  g.onHtmlAttributeValue &&
                    g.onHtmlAttributeValue({
                      document: m,
                      position: b,
                      tag: u,
                      attribute: d,
                      value: i,
                      range: p,
                    });
                }
              k.getTokenText();
              return (
                T.forEach(function (e) {
                  e.collectValues(u, d, function (e) {
                    var t = r ? '"' + e + '"' : e;
                    v.items.push({
                      label: e,
                      filterText: t,
                      kind: C.CompletionItemKind.Unit,
                      textEdit: C.TextEdit.replace(n, t),
                      insertTextFormat: C.InsertTextFormat.PlainText,
                    });
                  });
                }),
                A(),
                v
              );
            }

            function l(e) {
              return _ === k.getTokenEnd() &&
                (u = k.scan()) === e &&
                k.getTokenOffset() === _
                ? k.getTokenEnd()
                : _;
            }

            function c() {
              for (var e = 0, t = y; e < t.length; e++) {
                var n = t[e];
                n.onHtmlContent &&
                  n.onHtmlContent({
                    document: m,
                    position: b,
                  });
              }
              return A();
            }

            function A() {
              for (
                var e = _ - 1, t = b.character;
                0 <= e && N.isLetterOrDigit(w, e);

              )
                e--, t--;
              if (0 <= e && '&' === w[e]) {
                var n = C.Range.create(C.Position.create(b.line, t - 1), b);
                for (var r in D.entities)
                  if (N.endsWith(r, ';')) {
                    var i = '&' + r;
                    v.items.push({
                      label: i,
                      kind: C.CompletionItemKind.Keyword,
                      documentation: R(
                        'entity.propose',
                        "Character entity representing '" + D.entities[r] + "'"
                      ),
                      textEdit: C.TextEdit.replace(n, i),
                      insertTextFormat: C.InsertTextFormat.PlainText,
                    });
                  }
              }
              return v;
            }
            for (
              var u = k.scan();
              u !== I.TokenType.EOS && k.getTokenOffset() <= _;

            ) {
              switch (u) {
                case I.TokenType.StartTagOpen:
                  if (k.getTokenEnd() === _) {
                    var h = l(I.TokenType.StartTag);
                    return t(_, h);
                  }
                  break;
                case I.TokenType.StartTag:
                  if (k.getTokenOffset() <= _ && _ <= k.getTokenEnd())
                    return n(k.getTokenOffset(), k.getTokenEnd());
                  S = k.getTokenText();
                  break;
                case I.TokenType.AttributeName:
                  if (k.getTokenOffset() <= _ && _ <= k.getTokenEnd())
                    return a(k.getTokenOffset(), k.getTokenEnd());
                  x = k.getTokenText();
                  break;
                case I.TokenType.DelimiterAssign:
                  if (k.getTokenEnd() === _) {
                    h = l(I.TokenType.AttributeValue);
                    return o(_, h);
                  }
                  break;
                case I.TokenType.AttributeValue:
                  if (k.getTokenOffset() <= _ && _ <= k.getTokenEnd())
                    return o(k.getTokenOffset(), k.getTokenEnd());
                  break;
                case I.TokenType.Whitespace:
                  if (_ <= k.getTokenEnd())
                    switch (k.getScannerState()) {
                      case I.ScannerState.AfterOpeningStartTag:
                        return t(k.getTokenOffset(), l(I.TokenType.StartTag));
                      case I.ScannerState.WithinTag:
                      case I.ScannerState.AfterAttributeName:
                        return a(k.getTokenEnd());
                      case I.ScannerState.BeforeAttributeValue:
                        return o(k.getTokenEnd());
                      case I.ScannerState.AfterOpeningEndTag:
                        return i(k.getTokenOffset() - 1, !1);
                      case I.ScannerState.WithinContent:
                        return c();
                    }
                  break;
                case I.TokenType.EndTagOpen:
                  if (_ <= k.getTokenEnd())
                    return i(k.getTokenOffset() + 1, !1, l(I.TokenType.EndTag));
                  break;
                case I.TokenType.EndTag:
                  if (_ <= k.getTokenEnd())
                    for (var f = k.getTokenOffset() - 1; 0 <= f; ) {
                      var g = w.charAt(f);
                      if ('/' === g) return i(f, !1, k.getTokenEnd());
                      if (!j(g)) break;
                      f--;
                    }
                  break;
                case I.TokenType.StartTagClose:
                  if (_ <= k.getTokenEnd() && S) return e(k.getTokenEnd(), S);
                  break;
                case I.TokenType.Content:
                  if (_ <= k.getTokenEnd()) return c();
                  break;
                default:
                  if (_ <= k.getTokenEnd()) return v;
              }
              u = k.scan();
            }
            return v;
          }),
          (e.prototype.doTagComplete = function (e, t, n) {
            var r = e.offsetAt(t);
            if (r <= 0) return null;
            var i = e.getText().charAt(r - 1);
            if ('>' === i) {
              if (
                (o = n.findNodeBefore(r)) &&
                o.tag &&
                !L.isEmptyElement(o.tag) &&
                o.start < r &&
                (!o.endTagStart || o.endTagStart > r)
              )
                for (
                  var a = (s = q.createScanner(e.getText(), o.start)).scan();
                  a !== I.TokenType.EOS && s.getTokenEnd() <= r;

                ) {
                  if (a === I.TokenType.StartTagClose && s.getTokenEnd() === r)
                    return '$0</' + o.tag + '>';
                  a = s.scan();
                }
            } else if ('/' === i) {
              for (var o = n.findNodeBefore(r); o && o.closed; ) o = o.parent;
              if (o && o.tag) {
                var s;
                for (
                  a = (s = q.createScanner(e.getText(), o.start)).scan();
                  a !== I.TokenType.EOS && s.getTokenEnd() <= r;

                ) {
                  if (a === I.TokenType.EndTagOpen && s.getTokenEnd() === r)
                    return o.tag + '>';
                  a = s.scan();
                }
              }
            }
            return null;
          }),
          e
        );
      })();

    function j(e) {
      return /^\s*$/.test(e);
    }

    function P(e, t, n, r) {
      for (
        var i = q.createScanner(e, t, n), a = i.scan();
        a === I.TokenType.Whitespace;

      )
        a = i.scan();
      return a === r;
    }
    t.HTMLCompletion = r;
  }),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define(
          'vscode-html-languageservice/services/htmlHover',
          [
            'require',
            'exports',
            '../parser/htmlScanner',
            'vscode-languageserver-types',
            './tagProviders',
            '../htmlLanguageTypes',
          ],
          e
        );
  })(function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
      value: !0,
    });
    var u = e('../parser/htmlScanner'),
      d = e('vscode-languageserver-types'),
      p = e('./tagProviders'),
      h = e('../htmlLanguageTypes');
    t.doHover = function (i, e, t) {
      var a = i.offsetAt(e),
        n = t.findNodeAt(a);
      if (!n || !n.tag) return null;
      var s = p.allTagProviders.filter(function (e) {
        return e.isApplicable(i.languageId);
      });

      function r(r, i, a) {
        r = r.toLowerCase();
        for (
          var e = function (e) {
              var n = null;
              if (
                (e.collectTags(function (e, t) {
                  e === r &&
                    (n = {
                      contents: [
                        {
                          language: 'html',
                          value: a ? '<' + r + '>' : '</' + r + '>',
                        },
                        d.MarkedString.fromPlainText(t),
                      ],
                      range: i,
                    });
                }),
                n)
              )
                return {
                  value: n,
                };
            },
            t = 0,
            n = s;
          t < n.length;
          t++
        ) {
          var o = e(n[t]);
          if ('object' == typeof o) return o.value;
        }
        return null;
      }

      function o(e, t) {
        for (
          var n = u.createScanner(i.getText(), t), r = n.scan();
          r !== h.TokenType.EOS &&
          (n.getTokenEnd() < a || (n.getTokenEnd() === a && r !== e));

        )
          r = n.scan();
        return r === e && a <= n.getTokenEnd()
          ? {
              start: i.positionAt(n.getTokenOffset()),
              end: i.positionAt(n.getTokenEnd()),
            }
          : null;
      }
      if (n.endTagStart && a >= n.endTagStart) {
        var l = o(h.TokenType.EndTag, n.endTagStart);
        return l ? r(n.tag, l, !1) : null;
      }
      var c = o(h.TokenType.StartTag, n.start);
      return c ? r(n.tag, c, !0) : null;
    };
  }),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define(
          'vscode-html-languageservice/beautify/beautify',
          ['require', 'exports'],
          e
        );
  })(function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
      value: !0,
    }),
      (t.js_beautify = function (e, t) {
        return e;
      });
  }),
  (function () {
    var e = (function (n) {
      var r = {};

      function i(e) {
        if (r[e]) return r[e].exports;
        var t = (r[e] = {
          i: e,
          l: !1,
          exports: {},
        });
        return n[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
      }
      return (
        (i.m = n),
        (i.c = r),
        (i.d = function (e, t, n) {
          i.o(e, t) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: n,
            });
        }),
        (i.r = function (e) {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, {
              value: 'Module',
            }),
            Object.defineProperty(e, '__esModule', {
              value: !0,
            });
        }),
        (i.t = function (t, e) {
          if ((1 & e && (t = i(t)), 8 & e)) return t;
          if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
          var n = Object.create(null);
          if (
            (i.r(n),
            Object.defineProperty(n, 'default', {
              enumerable: !0,
              value: t,
            }),
            2 & e && 'string' != typeof t)
          )
            for (var r in t)
              i.d(
                n,
                r,
                function (e) {
                  return t[e];
                }.bind(null, r)
              );
          return n;
        }),
        (i.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return i.d(t, 'a', t), t;
        }),
        (i.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (i.p = ''),
        i((i.s = 8))
      );
    })([
      ,
      ,
      function (e, t) {
        e.exports.mergeOpts = function (e, t) {
          var n,
            r = {};
          for (n in e) n !== t && (r[n] = e[n]);
          if (t in e) for (n in e[t]) r[n] = e[t][n];
          return r;
        };
      },
      function (e, t) {
        var n = '$@A-Z_a-z',
          r =
            'ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ',
          i = '$0-9A-Z_a-z',
          a =
            '̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿',
          o = new RegExp('[' + n + r + ']'),
          s = new RegExp('[' + i + r + a + ']');
        (t.identifier = new RegExp('[' + n + r + '][' + i + r + a + ']*', 'g')),
          (t.newline = /[\n\r\u2028\u2029]/),
          (t.lineBreak = new RegExp('\r\n|' + t.newline.source)),
          (t.allLineBreaks = new RegExp(t.lineBreak.source, 'g')),
          (t.isIdentifierStart = function (e) {
            return o.test(String.fromCharCode(e));
          }),
          (t.isIdentifierChar = function (e) {
            return s.test(String.fromCharCode(e));
          });
      },
      function (e, t) {
        function r(t) {
          (this._character_count = 0),
            (this._indent_count = -1),
            (this._items = []);
          var n = !0;
          (this.set_indent = function (e) {
            (this._character_count = t.baseIndentLength + e * t.indent_length),
              (this._indent_count = e);
          }),
            (this.get_character_count = function () {
              return this._character_count;
            }),
            (this.is_empty = function () {
              return n;
            }),
            (this.last = function () {
              return this._empty ? null : this._items[this._items.length - 1];
            }),
            (this.push = function (e) {
              this._items.push(e),
                (this._character_count += e.length),
                (n = !1);
            }),
            (this.pop = function () {
              var e = null;
              return (
                n ||
                  ((e = this._items.pop()),
                  (this._character_count -= e.length),
                  (n = 0 === this._items.length)),
                e
              );
            }),
            (this.remove_indent = function () {
              0 < this._indent_count &&
                ((this._indent_count -= 1),
                (this._character_count -= t.indent_length));
            }),
            (this.trim = function () {
              for (; ' ' === this.last(); )
                this._items.pop(), (this._character_count -= 1);
              n = 0 === this._items.length;
            }),
            (this.toString = function () {
              var e = '';
              return (
                this._empty ||
                  (0 <= this._indent_count &&
                    (e = t.indent_cache[this._indent_count]),
                  (e += this._items.join(''))),
                e
              );
            });
        }
        e.exports.Output = function (t, n) {
          (n = n || ''),
            (this.indent_cache = [n]),
            (this.baseIndentLength = n.length),
            (this.indent_length = t.length),
            (this.raw = !1),
            (this._lines = []),
            (this.baseIndentString = n),
            (this.indent_string = t),
            (this.previous_line = null),
            (this.current_line = null),
            (this.space_before_token = !1),
            (this.add_outputline = function () {
              (this.previous_line = this.current_line),
                (this.current_line = new r(this)),
                this._lines.push(this.current_line);
            }),
            this.add_outputline(),
            (this.get_line_number = function () {
              return this._lines.length;
            }),
            (this.add_new_line = function (e) {
              return !(
                (1 === this.get_line_number() && this.just_added_newline()) ||
                (!e && this.just_added_newline()) ||
                (this.raw || this.add_outputline(), 0)
              );
            }),
            (this.get_code = function (e, t) {
              var n = this._lines.join('\n').replace(/[\r\n\t ]+$/, '');
              return (
                e && (n += '\n'), '\n' !== t && (n = n.replace(/[\n]/g, t)), n
              );
            }),
            (this.set_indent = function (e) {
              if (1 < this._lines.length) {
                for (; e >= this.indent_cache.length; )
                  this.indent_cache.push(
                    this.indent_cache[this.indent_cache.length - 1] +
                      this.indent_string
                  );
                return this.current_line.set_indent(e), !0;
              }
              return this.current_line.set_indent(0), !1;
            }),
            (this.add_raw_token = function (e) {
              for (var t = 0; t < e.newlines; t++) this.add_outputline();
              this.current_line.push(e.whitespace_before),
                this.current_line.push(e.text),
                (this.space_before_token = !1);
            }),
            (this.add_token = function (e) {
              this.add_space_before_token(), this.current_line.push(e);
            }),
            (this.add_space_before_token = function () {
              this.space_before_token &&
                !this.just_added_newline() &&
                this.current_line.push(' '),
                (this.space_before_token = !1);
            }),
            (this.remove_indent = function (e) {
              for (var t = this._lines.length; e < t; )
                this._lines[e].remove_indent(), e++;
            }),
            (this.trim = function (e) {
              for (
                e = void 0 !== e && e, this.current_line.trim(t, n);
                e && 1 < this._lines.length && this.current_line.is_empty();

              )
                this._lines.pop(),
                  (this.current_line = this._lines[this._lines.length - 1]),
                  this.current_line.trim();
              this.previous_line =
                1 < this._lines.length
                  ? this._lines[this._lines.length - 2]
                  : null;
            }),
            (this.just_added_newline = function () {
              return this.current_line.is_empty();
            }),
            (this.just_added_blankline = function () {
              return (
                !!this.just_added_newline() &&
                (1 === this._lines.length ||
                  this._lines[this._lines.length - 2].is_empty())
              );
            });
        };
      },
      ,
      function (e, t) {
        e.exports.InputScanner = function (e) {
          var i = e || '',
            a = i.length,
            o = 0;
          (this.back = function () {
            0 < o && (o -= 1);
          }),
            (this.hasNext = function () {
              return o < a;
            }),
            (this.next = function () {
              var e = null;
              return this.hasNext() && ((e = i.charAt(o)), (o += 1)), e;
            }),
            (this.peek = function (e) {
              var t = null;
              return (
                (e = e || 0), 0 <= (e += o) && e < a && (t = i.charAt(e)), t
              );
            }),
            (this.test = function (e, t) {
              if (((t = t || 0), (t += o), 0 <= (e.lastIndex = t) && t < a)) {
                var n = e.exec(i);
                return n && n.index === t;
              }
              return !1;
            }),
            (this.testChar = function (e, t) {
              var n = this.peek(t);
              return null !== n && e.test(n);
            }),
            (this.match = function (e) {
              e.lastIndex = o;
              var t = e.exec(i);
              return t && t.index === o ? (o += t[0].length) : (t = null), t;
            }),
            (this.readWhile = function (e) {
              var t = '',
                n = this.match(e);
              return n && (t = n[0]), t;
            }),
            (this.readUntil = function (e) {
              var t,
                n = o;
              e.lastIndex = o;
              var r = e.exec(i);
              return (n = r ? r.index : a), (t = i.substring(o, n)), (o = n), t;
            }),
            (this.readUntilAfter = function (e) {
              var t,
                n = o;
              e.lastIndex = o;
              var r = e.exec(i);
              return (
                (n = r ? r.index + r[0].length : a),
                (t = i.substring(o, n)),
                (o = n),
                t
              );
            }),
            (this.peekUntilAfter = function (e) {
              var t = o,
                n = this.readUntilAfter(e);
              return (o = t), n;
            }),
            (this.lookBack = function (e) {
              var t = o - 1;
              return (
                t >= e.length &&
                i.substring(t - e.length, t).toLowerCase() === e
              );
            });
        };
      },
      ,
      function (e, t, n) {
        var r = n(9).Beautifier;
        e.exports = function (e, t) {
          return new r(e, t).beautify();
        };
      },
      function (e, t, n) {
        var a = n(2).mergeOpts,
          r = n(3),
          q = n(4).Output,
          L = n(6).InputScanner,
          O = r.lineBreak,
          I = r.allLineBreaks;
        e.exports.Beautifier = function (o, e) {
          o = o || '';
          var t = (e = a((e = e || {}), 'css')).indent_size
              ? parseInt(e.indent_size, 10)
              : 4,
            n = e.indent_char || ' ',
            r = void 0 !== e.preserve_newlines && e.preserve_newlines,
            s =
              void 0 === e.selector_separator_newline ||
              e.selector_separator_newline,
            l = void 0 !== e.end_with_newline && e.end_with_newline,
            c = void 0 === e.newline_between_rules || e.newline_between_rules,
            u =
              void 0 !== e.space_around_combinator && e.space_around_combinator;
          u =
            u ||
            (void 0 !== e.space_around_selector_separator &&
              e.space_around_selector_separator);
          var d = e.eol ? e.eol : 'auto';
          e.indent_with_tabs && ((n = '\t'), (t = 1)),
            'auto' === d &&
              ((d = '\n'), o && O.test(o || '') && (d = o.match(O)[0])),
            (d = d.replace(/\\r/, '\r').replace(/\\n/, '\n')),
            (o = o.replace(I, '\n'));
          var p,
            h,
            f = /\s/,
            g = /(?:\s|\n)+/g,
            m = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g,
            b = /\/\/(?:[^\n\r\u2028\u2029]*)/g,
            v = 0;

          function y(e) {
            var t = '';
            for (p = h.next(); p; ) {
              if (((t += p), '\\' === p)) t += h.next();
              else if (-1 !== e.indexOf(p) || '\n' === p) break;
              p = h.next();
            }
            return t;
          }

          function T(e) {
            for (var t = f.test(h.peek()), n = !0; f.test(h.peek()); )
              (p = h.next()),
                e && '\n' === p && (r || n) && ((n = !1), S.add_new_line(!0));
            return t;
          }

          function w() {
            for (var e = 0, t = 1, n = h.peek(t); n; ) {
              if ('{' === n) return !0;
              if ('(' === n) e += 1;
              else if (')' === n) {
                if (0 === e) return !1;
                e -= 1;
              } else if (';' === n || '}' === n) return !1;
              t++, (n = h.peek(t));
            }
            return !1;
          }
          var _ = '',
            i = 0;
          if (o && o.length) {
            for (; ' ' === o.charAt(i) || '\t' === o.charAt(i); ) i += 1;
            (_ = o.substring(0, i)), (o = o.substring(i));
          }
          var x,
            k,
            S,
            E = new Array(t + 1).join(n);

          function A(e) {
            S.just_added_newline() && S.set_indent(x), S.add_token(e);
          }

          function C(e) {
            e && (S.space_before_token = !0);
          }
          (this.beautify = function () {
            (S = new q(E, _)), (h = new L(o)), (p = null), (v = k = x = 0);
            for (var e = !1, t = !1, n = !1, r = !1; ; ) {
              var i = '' !== h.readWhile(g);
              if (!(p = h.next())) break;
              if ('/' === p && '*' === h.peek())
                S.add_new_line(),
                  h.back(),
                  A(h.readWhile(m)),
                  T(!0),
                  S.add_new_line();
              else if ('/' === p && '/' === h.peek())
                (S.space_before_token = !0), h.back(), A(h.readWhile(b)), T(!0);
              else if ('@' === p)
                if ((C(i), '{' === h.peek())) A(p + y('}'));
                else {
                  A(p);
                  var a = h.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
                  a.match(/[ :]$/) &&
                    (A((a = y(': ').replace(/\s$/, ''))),
                    (S.space_before_token = !0)),
                    'extend' === (a = a.replace(/\s$/, '')) && (r = !0),
                    a in this.NESTED_AT_RULE
                      ? ((k += 1), a in this.CONDITIONAL_GROUP_RULE && (n = !0))
                      : e || 0 !== v || -1 === a.indexOf(':') || (t = !0);
                }
              else
                '#' === p && '{' === h.peek()
                  ? (C(i), A(p + y('}')))
                  : '{' === p
                  ? h.match(/[\t\n ]*}/g)
                    ? ((S.space_before_token = !0),
                      A('{}'),
                      T(!0),
                      S.add_new_line(),
                      c &&
                        0 === x &&
                        !S.just_added_blankline() &&
                        S.add_new_line(!0))
                    : (x++,
                      (S.space_before_token = !0),
                      A(p),
                      T(!0),
                      S.add_new_line(),
                      n ? ((n = !1), (e = k < x)) : (e = k <= x))
                  : '}' === p
                  ? (0 < x && x--,
                    S.add_new_line(),
                    A(p),
                    k && k--,
                    T(!(t = e = !1)),
                    S.add_new_line(),
                    c &&
                      0 === x &&
                      !S.just_added_blankline() &&
                      S.add_new_line(!0))
                  : ':' === p
                  ? (!e && !n) || h.lookBack('&') || w() || h.lookBack('(') || r
                    ? (h.lookBack(' ') && (S.space_before_token = !0),
                      ':' === h.peek() ? ((p = h.next()), A('::')) : A(':'))
                    : (A(':'), t || ((t = !0), (S.space_before_token = !0)))
                  : '"' === p || "'" === p
                  ? (C(i), A(p + y(p)))
                  : ';' === p
                  ? ((r = t = !1),
                    A(p),
                    T(!0),
                    '/' !== h.peek() && S.add_new_line())
                  : '(' === p
                  ? h.lookBack('url')
                    ? (A(p),
                      T(),
                      (p = h.next()) &&
                        (')' !== p && '"' !== p && "'" !== p
                          ? A(p + y(')'))
                          : (h.back(), v++)))
                    : (v++, C(i), A(p), T())
                  : ')' === p
                  ? (A(p), v--)
                  : ',' === p
                  ? (A(p),
                    T(!0),
                    s && !t && v < 1
                      ? S.add_new_line()
                      : (S.space_before_token = !0))
                  : ('>' === p || '+' === p || '~' === p) && !t && v < 1
                  ? u
                    ? ((S.space_before_token = !0),
                      A(p),
                      (S.space_before_token = !0))
                    : (A(p), T(), p && f.test(p) && (p = ''))
                  : ']' === p
                  ? A(p)
                  : '[' === p
                  ? (C(i), A(p))
                  : '=' === p
                  ? (T(), A('='), f.test(p) && (p = ''))
                  : ('!' === p ? A(' ') : C(i), A(p));
            }
            return S.get_code(l, d);
          }),
            (this.NESTED_AT_RULE = {
              '@page': !0,
              '@font-face': !0,
              '@keyframes': !0,
              '@media': !0,
              '@supports': !0,
              '@document': !0,
            }),
            (this.CONDITIONAL_GROUP_RULE = {
              '@media': !0,
              '@supports': !0,
              '@document': !0,
            });
        };
      },
    ]);
    'function' == typeof define && define.amd
      ? define(
          'vscode-html-languageservice/beautify/beautify-css',
          [],
          function () {
            return {
              css_beautify: e,
            };
          }
        )
      : 'undefined' != typeof exports
      ? (exports.css_beautify = e)
      : 'undefined' != typeof window
      ? (window.css_beautify = e)
      : 'undefined' != typeof global && (global.css_beautify = e);
  })(),
  (function () {
    var i = (function (n) {
      var r = {};

      function i(e) {
        if (r[e]) return r[e].exports;
        var t = (r[e] = {
          i: e,
          l: !1,
          exports: {},
        });
        return n[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
      }
      return (
        (i.m = n),
        (i.c = r),
        (i.d = function (e, t, n) {
          i.o(e, t) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: n,
            });
        }),
        (i.r = function (e) {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, {
              value: 'Module',
            }),
            Object.defineProperty(e, '__esModule', {
              value: !0,
            });
        }),
        (i.t = function (t, e) {
          if ((1 & e && (t = i(t)), 8 & e)) return t;
          if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
          var n = Object.create(null);
          if (
            (i.r(n),
            Object.defineProperty(n, 'default', {
              enumerable: !0,
              value: t,
            }),
            2 & e && 'string' != typeof t)
          )
            for (var r in t)
              i.d(
                n,
                r,
                function (e) {
                  return t[e];
                }.bind(null, r)
              );
          return n;
        }),
        (i.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return i.d(t, 'a', t), t;
        }),
        (i.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (i.p = ''),
        i((i.s = 10))
      );
    })([
      ,
      ,
      function (e, t) {
        e.exports.mergeOpts = function (e, t) {
          var n,
            r = {};
          for (n in e) n !== t && (r[n] = e[n]);
          if (t in e) for (n in e[t]) r[n] = e[t][n];
          return r;
        };
      },
      function (e, t) {
        var n = '$@A-Z_a-z',
          r =
            'ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ',
          i = '$0-9A-Z_a-z',
          a =
            '̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿',
          o = new RegExp('[' + n + r + ']'),
          s = new RegExp('[' + i + r + a + ']');
        (t.identifier = new RegExp('[' + n + r + '][' + i + r + a + ']*', 'g')),
          (t.newline = /[\n\r\u2028\u2029]/),
          (t.lineBreak = new RegExp('\r\n|' + t.newline.source)),
          (t.allLineBreaks = new RegExp(t.lineBreak.source, 'g')),
          (t.isIdentifierStart = function (e) {
            return o.test(String.fromCharCode(e));
          }),
          (t.isIdentifierChar = function (e) {
            return s.test(String.fromCharCode(e));
          });
      },
      ,
      ,
      function (e, t) {
        e.exports.InputScanner = function (e) {
          var i = e || '',
            a = i.length,
            o = 0;
          (this.back = function () {
            0 < o && (o -= 1);
          }),
            (this.hasNext = function () {
              return o < a;
            }),
            (this.next = function () {
              var e = null;
              return this.hasNext() && ((e = i.charAt(o)), (o += 1)), e;
            }),
            (this.peek = function (e) {
              var t = null;
              return (
                (e = e || 0), 0 <= (e += o) && e < a && (t = i.charAt(e)), t
              );
            }),
            (this.test = function (e, t) {
              if (((t = t || 0), (t += o), 0 <= (e.lastIndex = t) && t < a)) {
                var n = e.exec(i);
                return n && n.index === t;
              }
              return !1;
            }),
            (this.testChar = function (e, t) {
              var n = this.peek(t);
              return null !== n && e.test(n);
            }),
            (this.match = function (e) {
              e.lastIndex = o;
              var t = e.exec(i);
              return t && t.index === o ? (o += t[0].length) : (t = null), t;
            }),
            (this.readWhile = function (e) {
              var t = '',
                n = this.match(e);
              return n && (t = n[0]), t;
            }),
            (this.readUntil = function (e) {
              var t,
                n = o;
              e.lastIndex = o;
              var r = e.exec(i);
              return (n = r ? r.index : a), (t = i.substring(o, n)), (o = n), t;
            }),
            (this.readUntilAfter = function (e) {
              var t,
                n = o;
              e.lastIndex = o;
              var r = e.exec(i);
              return (
                (n = r ? r.index + r[0].length : a),
                (t = i.substring(o, n)),
                (o = n),
                t
              );
            }),
            (this.peekUntilAfter = function (e) {
              var t = o,
                n = this.readUntilAfter(e);
              return (o = t), n;
            }),
            (this.lookBack = function (e) {
              var t = o - 1;
              return (
                t >= e.length &&
                i.substring(t - e.length, t).toLowerCase() === e
              );
            });
        };
      },
      ,
      ,
      ,
      function (e, t, n) {
        var i = n(11).Beautifier;
        e.exports = function (e, t, n, r) {
          return new i(e, t, n, r).beautify();
        };
      },
      function (e, t, n) {
        var s = n(2).mergeOpts,
          r = n(3),
          l = n(6).InputScanner,
          c = r.lineBreak,
          u = r.allLineBreaks;

        function d(e) {
          return e.replace(/\s+$/g, '');
        }
        e.exports.Beautifier = function (h, f, g, m) {
          var b,
            e,
            t,
            n,
            v,
            y,
            T,
            w,
            _,
            x,
            k,
            r,
            i,
            S,
            a,
            E,
            A,
            C,
            q,
            L,
            O,
            o,
            I;

          function D() {
            return (
              (this.token = ''),
              (this.current_mode = 'CONTENT'),
              (this.tags = {
                parent: null,
                tag: '',
                indent_level: 0,
                token: null,
              }),
              (this.last_token = {
                text: '',
                type: '',
              }),
              (this.token_text = ''),
              (this.newlines = 0),
              (this.indent_content = e),
              (this.indent_body_inner_html = t),
              (this.indent_head_inner_html = n),
              (this.Utils = {
                whitespace: '\n\r\t '.split(''),
                single_token: f.void_elements || [
                  'area',
                  'base',
                  'br',
                  'col',
                  'embed',
                  'hr',
                  'img',
                  'input',
                  'keygen',
                  'link',
                  'menuitem',
                  'meta',
                  'param',
                  'source',
                  'track',
                  'wbr',
                  '!doctype',
                  '?xml',
                  '?php',
                  '?=',
                  'basefont',
                  'isindex',
                ],
                extra_liners: o,
                in_array: function (e, t) {
                  for (var n = 0; n < t.length; n++) if (e === t[n]) return !0;
                  return !1;
                },
              }),
              (this.is_whitespace = function (e) {
                for (var t = 0; t < e.length; t++)
                  if (!this.Utils.in_array(e.charAt(t), this.Utils.whitespace))
                    return !1;
                return !0;
              }),
              (this.traverse_whitespace = function () {
                var e = '';
                if (
                  this.Utils.in_array(this.input.peek(), this.Utils.whitespace)
                ) {
                  for (
                    this.newlines = 0;
                    (e = this.input.next()),
                      r &&
                        '\n' === e &&
                        this.newlines <= i &&
                        (this.newlines += 1),
                      this.Utils.in_array(
                        this.input.peek(),
                        this.Utils.whitespace
                      );

                  );
                  return !0;
                }
                return !1;
              }),
              (this.space_or_wrap = function (e) {
                return this.line_char_count >= this.wrap_line_length
                  ? (this.print_newline(!1, e), this.print_indentation(e), !0)
                  : (this.line_char_count++, e.push(' '), !1);
              }),
              (this.get_content = function () {
                for (
                  var e = '',
                    t = {
                      parent: this.tags.token,
                      text: '',
                      type: 'TK_CONTENT',
                    },
                    n = [];
                  !(
                    '<' === this.input.peek() ||
                    (S && this.input.test(/\{\{/g))
                  );

                ) {
                  if (!this.input.hasNext()) {
                    n.length || (t.type = 'TK_EOF');
                    break;
                  }
                  this.traverse_whitespace()
                    ? this.space_or_wrap(n)
                    : ((e = this.input.next()),
                      this.line_char_count++,
                      n.push(e));
                }
                return (t.text = n.join('')), t;
              }),
              (this.get_contents_to = function (e) {
                if (!this.input.hasNext())
                  return {
                    text: '',
                    type: 'TK_EOF',
                  };
                var t = new RegExp('</' + e + '\\s*>', 'igm');
                return {
                  text: this.input.readUntil(t),
                  type: 'TK_' + e,
                };
              }),
              (this.record_tag = function (e, t) {
                var n = {
                  parent: this.tags,
                  tag: e,
                  indent_level: this.indent_level,
                  token: t,
                };
                this.tags = n;
              }),
              (this.retrieve_tag = function (e) {
                for (var t = null, n = this.tags; n && n.tag !== e; )
                  n = n.parent;
                return (
                  n &&
                    ((t = n.token),
                    (this.indent_level = n.indent_level),
                    (this.tags = n.parent)),
                  t
                );
              }),
              (this.indent_to_tag = function (e) {
                for (var t = this.tags; t && t.tag !== e; ) t = t.parent;
                t && (this.indent_level = t.indent_level);
              }),
              (this.get_tag = function () {
                var e,
                  t = '',
                  n = {
                    parent: this.tags.token,
                    text: '',
                    type: '',
                    tag_name: '',
                    is_inline_tag: !1,
                    is_unformatted: !1,
                    is_content_unformatted: !1,
                    is_opening_tag: !1,
                    is_closing_tag: !1,
                    multiline_content: !1,
                    start_tag_token: null,
                  },
                  r = [],
                  i = '',
                  a = !1,
                  o = !0,
                  s = !1,
                  l = !1,
                  c = '',
                  u = !1,
                  d = this.input.peek(),
                  p = this.input.peek(1),
                  h = this.input.peek(2);
                '<' !== d || ('!' !== p && '?' !== p && '%' !== p)
                  ? S && '{' === d && '{' === p && '!' === h
                    ? ((e = '{'),
                      (c = (t = this.get_comment()).match(/^{{([^\s}]+)/)[1]),
                      (r = [t]),
                      (l = !0))
                    : '<' === d
                    ? (r.push(this.input.next()),
                      (e = '<'),
                      (c = this.input.readUntil(/[\s>{]/g)),
                      r.push(c),
                      (c = c.toLowerCase()),
                      (a = !0))
                    : S &&
                      '{' === d &&
                      '{' === p &&
                      (r.push(this.input.next()),
                      r.push(this.input.next()),
                      '#' === h && r.push(this.input.next()),
                      (e = '{'),
                      (c = this.input.readUntil(/[\s}]/g)),
                      r.push(c),
                      (c = c.toLowerCase()),
                      (a = !1))
                  : ((e = '<'),
                    (c = (t = this.get_comment()).match(/^<([^\s>]+)/)[1]),
                    (r = [t]),
                    (l = !0)),
                  (n.is_closing_tag = '/' === c.charAt(0)),
                  (n.tag_name = n.is_closing_tag ? c.substr(1) : c),
                  (n.is_inline_tag =
                    this.Utils.in_array(n.tag_name, _) || '{' === e),
                  (n.is_unformatted = this.Utils.in_array(c, x)),
                  (n.is_content_unformatted = this.Utils.in_array(c, k));
                var f,
                  g = E;
                if (
                  ((q || L) && (g = r.join('').length + 1),
                  (this.line_char_count += r.join('').length),
                  !l)
                ) {
                  for (; this.input.hasNext(); ) {
                    if (
                      ((t = this.input.next()),
                      S &&
                        '{' === e &&
                        2 < r.length &&
                        '}' === t &&
                        '}' === r[r.length - 1])
                    ) {
                      this.line_char_count++, r.push(t);
                      break;
                    }
                    if (
                      (("'" !== t && '"' !== t) ||
                        ((t += this.get_unformatted(t)), '{' !== e && (a = !0)),
                      n.is_unformatted)
                    )
                      r.push(t), this.line_char_count++;
                    else if (this.Utils.in_array(t, this.Utils.whitespace))
                      a = !0;
                    else {
                      if (
                        ('<' === e &&
                          ('=' === t && (a = !1),
                          !C ||
                            !s ||
                            u ||
                            ('>' !== t && '/' !== t) ||
                            (this.input.test(/\/?\s*>/g, -1) &&
                              ((u = !(a = !1)),
                              this.print_newline(!1, r),
                              this.print_indentation(r)))),
                        a)
                      )
                        if ('{' === e)
                          this.line_char_count++, r.push(' '), (a = !1);
                        else if (
                          r.length &&
                          '=' !== r[r.length - 1] &&
                          '>' !== t &&
                          a
                        ) {
                          var m = this.space_or_wrap(r) && '/' !== t && !A;
                          if (((a = !1), A && '/' !== t)) {
                            var b = !1;
                            C &&
                              o &&
                              (b = !this.input.test(
                                /\S*(="([^"]|\\")*")?\s*\/?\s*>/g,
                                -1
                              )),
                              (o && !b) ||
                                (this.print_newline(!1, r),
                                this.print_indentation(r),
                                (m = !0));
                          }
                          if (m) {
                            s = !0;
                            for (var v = 0; v < g; v++)
                              this.line_char_count++, r.push(' ');
                          }
                          if (o)
                            for (var y = 0; y < r.length; y++)
                              if (' ' === r[y]) {
                                o = !1;
                                break;
                              }
                        }
                      if (
                        (S &&
                          '<' === e &&
                          '{' === t &&
                          '{' === this.input.peek() &&
                          ((t += this.get_unformatted(/}}/g)),
                          r.length &&
                            ' ' !== r[r.length - 1] &&
                            '<' !== r[r.length - 1] &&
                            (t = ' ' + t),
                          (a = !0)),
                        this.line_char_count++,
                        r.push(t),
                        '>' === t)
                      )
                        break;
                    }
                  }
                  if (!t)
                    return (
                      r.length ? (n.text = r.join('')) : (n.type = 'TK_EOF'), n
                    );
                }
                return (
                  ('script' !== c && 'style' !== c) || (f = r.join('')),
                  (2 < r.length && '/' === r[r.length - 2]) ||
                  this.Utils.in_array(c, this.Utils.single_token)
                    ? ((n.type = 'TK_TAG_SINGLE'), (n.is_closing_tag = !0))
                    : S && '{' === e && 'else' === c
                    ? (this.indent_to_tag('if'),
                      (n.type = 'TK_TAG_HANDLEBARS_ELSE'),
                      (this.indent_content = !0),
                      this.traverse_whitespace())
                    : S &&
                      '{' === e &&
                      (r.length < 2 || /[^#\^\/]/.test(r[2].charAt(0)))
                    ? ((n.type = 'TK_TAG_SINGLE'), (n.is_closing_tag = !0))
                    : n.is_unformatted || n.is_content_unformatted
                    ? ((i = this.get_unformatted(
                        new RegExp('</' + c + '>', 'ig')
                      )),
                      r.push(i),
                      (n.type = 'TK_TAG_SINGLE'),
                      (n.is_closing_tag = !0))
                    : 'script' === c &&
                      (-1 === f.search('type') ||
                        (-1 < f.search('type') &&
                          -1 <
                            f.search(
                              /\b(text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect)/
                            )))
                    ? (this.record_tag(c), (n.type = 'TK_TAG_SCRIPT'))
                    : 'style' === c &&
                      (-1 === f.search('type') ||
                        (-1 < f.search('type') && -1 < f.search('text/css')))
                    ? (this.record_tag(c), (n.type = 'TK_TAG_STYLE'))
                    : '!' === c.charAt(0)
                    ? ((n.type = 'TK_TAG_SINGLE'), this.traverse_whitespace())
                    : (n.is_closing_tag
                        ? ((n.start_tag_token = this.retrieve_tag(
                            c.substring(1)
                          )),
                          (n.type = 'TK_TAG_END'))
                        : (this.record_tag(c, n),
                          'html' !== c && (this.indent_content = !0),
                          (n.type = 'TK_TAG_START'),
                          (n.is_opening_tag = !0)),
                      this.traverse_whitespace() && this.space_or_wrap(r),
                      this.Utils.in_array(c, this.Utils.extra_liners) &&
                        (this.print_newline(!1, this.output),
                        this.output.length &&
                          '\n' !== this.output[this.output.length - 2] &&
                          this.print_newline(!0, this.output))),
                  (n.text = r.join('')),
                  n
                );
              }),
              (this.get_comment = function () {
                for (
                  var e = '', t = '>', n = !1, r = this.input.next();
                  r &&
                  ((e += r).charAt(e.length - 1) !== t.charAt(t.length - 1) ||
                    -1 === e.indexOf(t));

                )
                  n ||
                    ((n = 10 < e.length),
                    0 === e.indexOf('<![if')
                      ? ((t = '<![endif]>'), (n = !0))
                      : 0 === e.indexOf('<![cdata[')
                      ? ((t = ']]>'), (n = !0))
                      : 0 === e.indexOf('<![')
                      ? ((t = ']>'), (n = !0))
                      : 0 === e.indexOf('\x3c!--')
                      ? ((t = '--\x3e'), (n = !0))
                      : 0 === e.indexOf('{{!--')
                      ? ((t = '--}}'), (n = !0))
                      : 0 === e.indexOf('{{!')
                      ? 5 === e.length &&
                        -1 === e.indexOf('{{!--') &&
                        ((t = '}}'), (n = !0))
                      : 0 === e.indexOf('<?')
                      ? ((t = '?>'), (n = !0))
                      : 0 === e.indexOf('<%') && ((t = '%>'), (n = !0))),
                    (r = this.input.next());
                return e;
              }),
              (this.get_unformatted = function (e) {
                var t,
                  n = '',
                  r = '';
                if ('"' === e || "'" === e)
                  for (
                    var i = '"' === e ? /"|{{/g : /'|{{/g;
                    this.input.hasNext() &&
                    ((n += r = this.input.readUntilAfter(i)),
                    !r[r.length - 1].match(/['"]/g));

                  )
                    this.input.hasNext() &&
                      (n += this.input.readUntilAfter(/}}/g));
                else n = this.input.readUntilAfter(e);
                return (
                  -1 !== (t = n.lastIndexOf('\n'))
                    ? (this.line_char_count = n.length - t)
                    : (this.line_char_count += n.length),
                  n
                );
              }),
              (this.get_token = function () {
                var e;
                if (
                  'TK_TAG_SCRIPT' === this.last_token.type ||
                  'TK_TAG_STYLE' === this.last_token.type
                ) {
                  var t = this.last_token.type.substr(7);
                  e = this.get_contents_to(t);
                } else
                  'CONTENT' === this.current_mode
                    ? '' === (e = this.get_content()).text &&
                      (e = this.get_tag())
                    : 'TAG' === this.current_mode && (e = this.get_tag());
                return e;
              }),
              (this.get_full_indent = function (e) {
                return (e = this.indent_level + e || 0) < 1
                  ? ''
                  : Array(e + 1).join(this.indent_string);
              }),
              (this.printer = function (e, t, n, r, i) {
                (e = (e = e || '').replace(/\r\n|[\r\u2028\u2029]/g, '\n')),
                  (this.input = new l(e)),
                  (this.output = []),
                  (this.indent_character = t),
                  (this.indent_string = ''),
                  (this.indent_size = n),
                  (this.brace_style = i),
                  (this.indent_level = 0),
                  (this.wrap_line_length = r);
                for (
                  var a = (this.line_char_count = 0);
                  a < this.indent_size;
                  a++
                )
                  this.indent_string += this.indent_character;
                (this.print_newline = function (e, t) {
                  t &&
                    t.length &&
                    (e || '\n' !== t[t.length - 1]) &&
                    ((this.line_char_count = 0),
                    '\n' !== t[t.length - 1] &&
                      (t[t.length - 1] = d(t[t.length - 1])),
                    t.push('\n'));
                }),
                  (this.print_indentation = function (e) {
                    for (var t = 0; t < this.indent_level; t++)
                      e.push(this.indent_string),
                        (this.line_char_count += this.indent_string.length);
                  }),
                  (this.print_token = function (e) {
                    (this.is_whitespace(e) && !this.output.length) ||
                      ((e || '' !== e) &&
                        this.output.length &&
                        '\n' === this.output[this.output.length - 1] &&
                        (this.print_indentation(this.output),
                        (e = e.replace(/^\s+/g, ''))),
                      this.print_token_raw(e));
                  }),
                  (this.print_token_raw = function (e) {
                    0 < this.newlines && (e = d(e)),
                      e &&
                        '' !== e &&
                        (1 < e.length && '\n' === e.charAt(e.length - 1)
                          ? (this.output.push(e.slice(0, -1)),
                            this.print_newline(!1, this.output))
                          : this.output.push(e));
                    for (var t = 0; t < this.newlines; t++)
                      this.print_newline(0 < t, this.output);
                    this.newlines = 0;
                  }),
                  (this.indent = function () {
                    this.indent_level++;
                  }),
                  (this.unindent = function () {
                    0 < this.indent_level && this.indent_level--;
                  });
              }),
              this
            );
          }
          (h = h || ''),
            (void 0 !== (f = s((f = f || {}), 'html')).wrap_line_length &&
              0 !== parseInt(f.wrap_line_length, 10)) ||
              void 0 === f.max_char ||
              0 === parseInt(f.max_char, 10) ||
              (f.wrap_line_length = f.max_char),
            (e = void 0 !== f.indent_inner_html && f.indent_inner_html),
            (t =
              void 0 === f.indent_body_inner_html || f.indent_body_inner_html),
            (n =
              void 0 === f.indent_head_inner_html || f.indent_head_inner_html),
            (v = void 0 === f.indent_size ? 4 : parseInt(f.indent_size, 10)),
            (y = void 0 === f.indent_char ? ' ' : f.indent_char),
            (w = void 0 === f.brace_style ? 'collapse' : f.brace_style),
            (T =
              0 === parseInt(f.wrap_line_length, 10)
                ? 32786
                : parseInt(f.wrap_line_length || 250, 10)),
            (_ = f.inline || [
              'a',
              'abbr',
              'area',
              'audio',
              'b',
              'bdi',
              'bdo',
              'br',
              'button',
              'canvas',
              'cite',
              'code',
              'data',
              'datalist',
              'del',
              'dfn',
              'em',
              'embed',
              'i',
              'iframe',
              'img',
              'input',
              'ins',
              'kbd',
              'keygen',
              'label',
              'map',
              'mark',
              'math',
              'meter',
              'noscript',
              'object',
              'output',
              'progress',
              'q',
              'ruby',
              's',
              'samp',
              'select',
              'small',
              'span',
              'strong',
              'sub',
              'sup',
              'svg',
              'template',
              'textarea',
              'time',
              'u',
              'var',
              'video',
              'wbr',
              'text',
              'acronym',
              'address',
              'big',
              'dt',
              'ins',
              'strike',
              'tt',
            ]),
            (x = f.unformatted || []),
            (k = f.content_unformatted || ['pre', 'textarea']),
            (r = void 0 === f.preserve_newlines || f.preserve_newlines),
            (i = r
              ? isNaN(parseInt(f.max_preserve_newlines, 10))
                ? 32786
                : parseInt(f.max_preserve_newlines, 10)
              : 0),
            (S = void 0 !== f.indent_handlebars && f.indent_handlebars),
            (a = void 0 === f.wrap_attributes ? 'auto' : f.wrap_attributes),
            (E = isNaN(parseInt(f.wrap_attributes_indent_size, 10))
              ? v
              : parseInt(f.wrap_attributes_indent_size, 10)),
            (A = 'force' === a.substr(0, 'force'.length)),
            (C = 'force-expand-multiline' === a),
            (q = 'force-aligned' === a),
            (L = 'aligned-multiple' === a),
            (O = void 0 !== f.end_with_newline && f.end_with_newline),
            (o =
              'object' == typeof f.extra_liners && f.extra_liners
                ? f.extra_liners.concat()
                : 'string' == typeof f.extra_liners
                ? f.extra_liners.split(',')
                : 'head,body,/html'.split(',')),
            (I = f.eol ? f.eol : 'auto'),
            f.indent_with_tabs && ((y = '\t'), (v = 1)),
            'auto' === I &&
              ((I = '\n'), h && c.test(h || '') && (I = h.match(c)[0])),
            (I = I.replace(/\\r/, '\r').replace(/\\n/, '\n')),
            (h = h.replace(u, '\n')),
            (this.beautify = function () {
              (b = new D()).printer(h, y, v, T, w);
              for (
                var e = null,
                  t = {
                    text: '',
                    type: '',
                    tag_name: '',
                    is_opening_tag: !1,
                    is_closing_tag: !1,
                    is_inline_tag: !1,
                  };
                'TK_EOF' !== (e = b.get_token()).type;

              ) {
                switch (e.type) {
                  case 'TK_TAG_START':
                    e.is_inline_tag ||
                      'TK_CONTENT' === b.last_token.type ||
                      (e.parent && (e.parent.multiline_content = !0),
                      b.print_newline(!1, b.output)),
                      b.print_token(e.text),
                      b.indent_content &&
                        ((!b.indent_body_inner_html && 'body' === e.tag_name) ||
                          (!b.indent_head_inner_html &&
                            'head' === e.tag_name) ||
                          b.indent(),
                        (b.indent_content = !1)),
                      (t = e),
                      (b.current_mode = 'CONTENT');
                    break;
                  case 'TK_TAG_STYLE':
                  case 'TK_TAG_SCRIPT':
                    b.print_newline(!1, b.output),
                      b.print_token(e.text),
                      (t = e),
                      (b.current_mode = 'CONTENT');
                    break;
                  case 'TK_TAG_END':
                    ((e.start_tag_token &&
                      e.start_tag_token.multiline_content) ||
                      !(
                        e.is_inline_tag ||
                        t.is_inline_tag ||
                        (b.last_token === t &&
                          t.is_opening_tag &&
                          e.is_closing_tag &&
                          t.tag_name === e.tag_name) ||
                        'TK_CONTENT' === b.last_token.type
                      )) &&
                      b.print_newline(!1, b.output),
                      b.print_token(e.text),
                      (t = e),
                      (b.current_mode = 'CONTENT');
                    break;
                  case 'TK_TAG_SINGLE':
                    ('!--' === e.tag_name &&
                      b.last_token.is_closing_tag &&
                      -1 === e.text.indexOf('\n')) ||
                      e.is_inline_tag ||
                      e.is_unformatted ||
                      b.print_newline(!1, b.output),
                      b.print_token(e.text),
                      (t = e),
                      (b.current_mode = 'CONTENT');
                    break;
                  case 'TK_TAG_HANDLEBARS_ELSE':
                    for (
                      var n = !1, r = b.output.length - 1;
                      0 <= r && '\n' !== b.output[r];
                      r--
                    )
                      if (b.output[r].match(/{{#if/)) {
                        n = !0;
                        break;
                      }
                    n || b.print_newline(!1, b.output),
                      b.print_token(e.text),
                      b.indent_content && (b.indent(), (b.indent_content = !1)),
                      (t = e),
                      (b.current_mode = 'CONTENT');
                    break;
                  case 'TK_TAG_HANDLEBARS_COMMENT':
                    b.print_token(e.text), (b.current_mode = 'TAG');
                    break;
                  case 'TK_CONTENT':
                    if (
                      (b.print_token(e.text), (b.current_mode = 'TAG'), !e.text)
                    )
                      continue;
                    break;
                  case 'TK_STYLE':
                  case 'TK_SCRIPT':
                    if ('' !== e.text) {
                      b.print_newline(!1, b.output);
                      var i,
                        a = e.text,
                        o = 1;
                      'TK_SCRIPT' === e.type
                        ? (i = 'function' == typeof g && g)
                        : 'TK_STYLE' === e.type &&
                          (i = 'function' == typeof m && m),
                        'keep' === f.indent_scripts
                          ? (o = 0)
                          : 'separate' === f.indent_scripts &&
                            (o = -b.indent_level);
                      var s = b.get_full_indent(o);
                      if (i) {
                        var l = function () {
                          this.eol = '\n';
                        };
                        l.prototype = f;
                        var c = new l();
                        a = i(a.replace(/^\s*/, s), c);
                      } else {
                        var u =
                            a
                              .match(/^\s*/)[0]
                              .match(/[^\n\r]*$/)[0]
                              .split(b.indent_string).length - 1,
                          d = b.get_full_indent(o - u);
                        a = a
                          .replace(/^\s*/, s)
                          .replace(/\r\n|\r|\n/g, '\n' + d)
                          .replace(/\s+$/, '');
                      }
                      a &&
                        (b.print_token_raw(a), b.print_newline(!0, b.output));
                    }
                    b.current_mode = 'TAG';
                    break;
                  default:
                    '' !== e.text && b.print_token(e.text);
                }
                b.last_token = e;
              }
              var p = b.output.join('').replace(/[\r\n\t ]+$/, '');
              return (
                O && (p += '\n'), '\n' !== I && (p = p.replace(/[\n]/g, I)), p
              );
            });
        };
      },
    ]);
    if ('function' == typeof define && define.amd)
      define('vscode-html-languageservice/beautify/beautify-html', [
        'require',
        './beautify',
        './beautify-css',
      ], function (e) {
        var n = e('./beautify'),
          r = e('./beautify-css');
        return {
          html_beautify: function (e, t) {
            return i(e, t, n.js_beautify, r.css_beautify);
          },
        };
      });
    else if ('undefined' != typeof exports) {
      var n = require('./beautify.js'),
        r = require('./beautify-css.js');
      exports.html_beautify = function (e, t) {
        return i(e, t, n.js_beautify, r.css_beautify);
      };
    } else
      'undefined' != typeof window
        ? (window.html_beautify = function (e, t) {
            return i(e, t, window.js_beautify, window.css_beautify);
          })
        : 'undefined' != typeof global &&
          (global.html_beautify = function (e, t) {
            return i(e, t, global.js_beautify, global.css_beautify);
          });
  })(),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define(
          'vscode-html-languageservice/services/htmlFormatter',
          [
            'require',
            'exports',
            'vscode-languageserver-types',
            '../beautify/beautify-html',
            '../utils/strings',
          ],
          e
        );
  })(function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
      value: !0,
    });
    var g = e('vscode-languageserver-types'),
      m = e('../beautify/beautify-html'),
      b = e('../utils/strings');

    function v(e, t, n) {
      if (e && e.hasOwnProperty(t)) {
        var r = e[t];
        if (null !== r) return r;
      }
      return n;
    }

    function y(e, t, n) {
      var r = v(e, t, null);
      return 'string' == typeof r
        ? 0 < r.length
          ? r.split(',').map(function (e) {
              return e.trim().toLowerCase();
            })
          : []
        : n;
    }

    function T(e, t) {
      return -1 !== '\r\n'.indexOf(e.charAt(t));
    }

    function w(e, t) {
      return -1 !== ' \t'.indexOf(e.charAt(t));
    }
    t.format = function (e, t, n) {
      var r = e.getText(),
        i = !0,
        a = 0,
        o = n.tabSize || 4;
      if (t) {
        for (var s = e.offsetAt(t.start), l = s; 0 < l && w(r, l - 1); ) l--;
        0 === l || T(r, l - 1) ? (s = l) : l < s && (s = l + 1);
        for (var c = e.offsetAt(t.end), u = c; u < r.length && w(r, u); ) u++;
        if (
          ((u === r.length || T(r, u)) && (c = u),
          (t = g.Range.create(e.positionAt(s), e.positionAt(c))),
          (i = c === r.length),
          (r = r.substring(s, c)),
          0 !== s)
        ) {
          var d = e.offsetAt(g.Position.create(t.start.line, 0));
          a = (function (e, t, n) {
            for (var r = t, i = 0, a = n.tabSize || 4; r < e.length; ) {
              var o = e.charAt(r);
              if (' ' === o) i++;
              else {
                if ('\t' !== o) break;
                i += a;
              }
              r++;
            }
            return Math.floor(i / a);
          })(e.getText(), d, n);
        }
      } else
        t = g.Range.create(g.Position.create(0, 0), e.positionAt(r.length));
      var p = {
          indent_size: n.insertSpaces ? o : 1,
          indent_char: n.insertSpaces ? ' ' : '\t',
          wrap_line_length: v(n, 'wrapLineLength', 120),
          unformatted: y(n, 'unformatted', void 0),
          content_unformatted: y(n, 'contentUnformatted', void 0),
          indent_inner_html: v(n, 'indentInnerHtml', !1),
          preserve_newlines: v(n, 'preserveNewLines', !0),
          max_preserve_newlines: v(n, 'maxPreserveNewLines', 32786),
          indent_handlebars: v(n, 'indentHandlebars', !1),
          end_with_newline: i && v(n, 'endWithNewline', !1),
          extra_liners: y(n, 'extraLiners', void 0),
          wrap_attributes: v(n, 'wrapAttributes', 'auto'),
          wrap_attributes_indent_size: v(n, 'wrapAttributesIndentSize', void 0),
          eol: '\n',
        },
        h = m.html_beautify(r, p);
      if (0 < a) {
        var f = n.insertSpaces ? b.repeat(' ', o * a) : b.repeat('\t', a);
        (h = h.split('\n').join('\n' + f)),
          0 === t.start.character && (h = f + h);
      }
      return [
        {
          range: t,
          newText: h,
        },
      ];
    };
  });
var __extends =
  (this && this.__extends) ||
  (function () {
    var r =
      Object.setPrototypeOf ||
      ({
        __proto__: [],
      } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      };
    return function (e, t) {
      function n() {
        this.constructor = e;
      }
      r(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n()));
    };
  })();
!(function (e) {
  if ('object' == typeof module && 'object' == typeof module.exports) {
    var t = e(require, exports);
    void 0 !== t && (module.exports = t);
  } else
    'function' == typeof define &&
      define.amd &&
      define('vscode-uri/index', ['require', 'exports'], e);
})(function (e, t) {
  'use strict';
  var r;
  if (
    (Object.defineProperty(t, '__esModule', {
      value: !0,
    }),
    'object' == typeof process)
  )
    r = 'win32' === process.platform;
  else if ('object' == typeof navigator) {
    var n = navigator.userAgent;
    r = 0 <= n.indexOf('Windows');
  }
  var a = /^\w[\w\d+.-]*$/,
    o = /^\//,
    s = /^\/\//;
  var i,
    p = '/',
    l = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
    c = (function () {
      function n(e, t, n, r, i) {
        'object' == typeof e
          ? ((this.scheme = e.scheme || ''),
            (this.authority = e.authority || ''),
            (this.path = e.path || ''),
            (this.query = e.query || ''),
            (this.fragment = e.fragment || ''))
          : ((this.scheme = e || ''),
            (this.authority = t || ''),
            (this.path = (function (e, t) {
              switch (e) {
                case 'https':
                case 'http':
                case 'file':
                  t ? t[0] !== p && (t = p + t) : (t = p);
              }
              return t;
            })(this.scheme, n || '')),
            (this.query = r || ''),
            (this.fragment = i || ''),
            (function (e) {
              if (e.scheme && !a.test(e.scheme))
                throw new Error(
                  '[UriError]: Scheme contains illegal characters.'
                );
              if (e.path)
                if (e.authority) {
                  if (!o.test(e.path))
                    throw new Error(
                      '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
                    );
                } else if (s.test(e.path))
                  throw new Error(
                    '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
                  );
            })(this));
      }
      return (
        (n.isUri = function (e) {
          return (
            e instanceof n ||
            (!!e &&
              'string' == typeof e.authority &&
              'string' == typeof e.fragment &&
              'string' == typeof e.path &&
              'string' == typeof e.query &&
              'string' == typeof e.scheme)
          );
        }),
        Object.defineProperty(n.prototype, 'fsPath', {
          get: function () {
            return g(this);
          },
          enumerable: !0,
          configurable: !0,
        }),
        (n.prototype.with = function (e) {
          if (!e) return this;
          var t = e.scheme,
            n = e.authority,
            r = e.path,
            i = e.query,
            a = e.fragment;
          return (
            void 0 === t ? (t = this.scheme) : null === t && (t = ''),
            void 0 === n ? (n = this.authority) : null === n && (n = ''),
            void 0 === r ? (r = this.path) : null === r && (r = ''),
            void 0 === i ? (i = this.query) : null === i && (i = ''),
            void 0 === a ? (a = this.fragment) : null === a && (a = ''),
            t === this.scheme &&
            n === this.authority &&
            r === this.path &&
            i === this.query &&
            a === this.fragment
              ? this
              : new u(t, n, r, i, a)
          );
        }),
        (n.parse = function (e) {
          var t = l.exec(e);
          return t
            ? new u(
                t[2] || '',
                decodeURIComponent(t[4] || ''),
                decodeURIComponent(t[5] || ''),
                decodeURIComponent(t[7] || ''),
                decodeURIComponent(t[9] || '')
              )
            : new u('', '', '', '', '');
        }),
        (n.file = function (e) {
          var t = '';
          if ((r && (e = e.replace(/\\/g, p)), e[0] === p && e[1] === p)) {
            var n = e.indexOf(p, 2);
            -1 === n
              ? ((t = e.substring(2)), (e = p))
              : ((t = e.substring(2, n)), (e = e.substring(n) || p));
          }
          return new u('file', t, e, '', '');
        }),
        (n.from = function (e) {
          return new u(e.scheme, e.authority, e.path, e.query, e.fragment);
        }),
        (n.prototype.toString = function (e) {
          return void 0 === e && (e = !1), m(this, e);
        }),
        (n.prototype.toJSON = function () {
          return this;
        }),
        (n.revive = function (e) {
          if (e) {
            if (e instanceof n) return e;
            var t = new u(e);
            return (t._fsPath = e.fsPath), (t._formatted = e.external), t;
          }
          return e;
        }),
        n
      );
    })(),
    u = (function (t) {
      function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e._formatted = null), (e._fsPath = null), e;
      }
      return (
        __extends(e, t),
        Object.defineProperty(e.prototype, 'fsPath', {
          get: function () {
            return this._fsPath || (this._fsPath = g(this)), this._fsPath;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.toString = function (e) {
          return (
            void 0 === e && (e = !1),
            e
              ? m(this, !0)
              : (this._formatted || (this._formatted = m(this, !1)),
                this._formatted)
          );
        }),
        (e.prototype.toJSON = function () {
          var e = {
            $mid: 1,
          };
          return (
            this._fsPath && (e.fsPath = this._fsPath),
            this._formatted && (e.external = this._formatted),
            this.path && (e.path = this.path),
            this.scheme && (e.scheme = this.scheme),
            this.authority && (e.authority = this.authority),
            this.query && (e.query = this.query),
            this.fragment && (e.fragment = this.fragment),
            e
          );
        }),
        e
      );
    })((t.default = c)),
    d =
      (((i = {})[58] = '%3A'),
      (i[47] = '%2F'),
      (i[63] = '%3F'),
      (i[35] = '%23'),
      (i[91] = '%5B'),
      (i[93] = '%5D'),
      (i[64] = '%40'),
      (i[33] = '%21'),
      (i[36] = '%24'),
      (i[38] = '%26'),
      (i[39] = '%27'),
      (i[40] = '%28'),
      (i[41] = '%29'),
      (i[42] = '%2A'),
      (i[43] = '%2B'),
      (i[44] = '%2C'),
      (i[59] = '%3B'),
      (i[61] = '%3D'),
      (i[32] = '%20'),
      i);

  function h(e, t) {
    for (var n = void 0, r = -1, i = 0; i < e.length; i++) {
      var a = e.charCodeAt(i);
      if (
        (97 <= a && a <= 122) ||
        (65 <= a && a <= 90) ||
        (48 <= a && a <= 57) ||
        45 === a ||
        46 === a ||
        95 === a ||
        126 === a ||
        (t && 47 === a)
      )
        -1 !== r && ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
          void 0 !== n && (n += e.charAt(i));
      else {
        void 0 === n && (n = e.substr(0, i));
        var o = d[a];
        void 0 !== o
          ? (-1 !== r &&
              ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
            (n += o))
          : -1 === r && (r = i);
      }
    }
    return (
      -1 !== r && (n += encodeURIComponent(e.substring(r))),
      void 0 !== n ? n : e
    );
  }

  function f(e) {
    for (var t = void 0, n = 0; n < e.length; n++) {
      var r = e.charCodeAt(n);
      35 === r || 63 === r
        ? (void 0 === t && (t = e.substr(0, n)), (t += d[r]))
        : void 0 !== t && (t += e[n]);
    }
    return void 0 !== t ? t : e;
  }

  function g(e) {
    var t;
    return (
      (t =
        e.authority && 1 < e.path.length && 'file' === e.scheme
          ? '//' + e.authority + e.path
          : 47 === e.path.charCodeAt(0) &&
            ((65 <= e.path.charCodeAt(1) && e.path.charCodeAt(1) <= 90) ||
              (97 <= e.path.charCodeAt(1) && e.path.charCodeAt(1) <= 122)) &&
            58 === e.path.charCodeAt(2)
          ? e.path[1].toLowerCase() + e.path.substr(2)
          : e.path),
      r && (t = t.replace(/\//g, '\\')),
      t
    );
  }

  function m(e, t) {
    var n = t ? f : h,
      r = '',
      i = e.scheme,
      a = e.authority,
      o = e.path,
      s = e.query,
      l = e.fragment;
    if (
      (i && ((r += i), (r += ':')),
      (a || 'file' === i) && ((r += p), (r += p)),
      a)
    ) {
      var c = a.indexOf('@');
      if (-1 !== c) {
        var u = a.substr(0, c);
        (a = a.substr(c + 1)),
          -1 === (c = u.indexOf(':'))
            ? (r += n(u, !1))
            : ((r += n(u.substr(0, c), !1)),
              (r += ':'),
              (r += n(u.substr(c + 1), !1))),
          (r += '@');
      }
      -1 === (c = (a = a.toLowerCase()).indexOf(':'))
        ? (r += n(a, !1))
        : ((r += n(a.substr(0, c), !1)), (r += a.substr(c)));
    }
    if (o) {
      if (3 <= o.length && 47 === o.charCodeAt(0) && 58 === o.charCodeAt(2))
        65 <= (d = o.charCodeAt(1)) &&
          d <= 90 &&
          (o = '/' + String.fromCharCode(d + 32) + ':' + o.substr(3));
      else if (2 <= o.length && 58 === o.charCodeAt(1)) {
        var d;
        65 <= (d = o.charCodeAt(0)) &&
          d <= 90 &&
          (o = String.fromCharCode(d + 32) + ':' + o.substr(2));
      }
      r += n(o, !0);
    }
    return (
      s && ((r += '?'), (r += n(s, !1))), l && ((r += '#'), (r += n(l, !1))), r
    );
  }
}),
  define('vscode-uri', ['vscode-uri/index'], function (e) {
    return e;
  }),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define(
          'vscode-html-languageservice/services/htmlLinks',
          [
            'require',
            'exports',
            '../parser/htmlScanner',
            'vscode-languageserver-types',
            '../utils/strings',
            'vscode-uri',
            '../htmlLanguageTypes',
          ],
          e
        );
  })(function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
      value: !0,
    });
    var d = e('../parser/htmlScanner'),
      p = e('vscode-languageserver-types'),
      h = e('../utils/strings'),
      f = e('vscode-uri'),
      g = e('../htmlLanguageTypes');

    function m(e, t) {
      var n = e[0];
      return (
        n !== e[e.length - 1] ||
          ("'" !== n && '"' !== n) ||
          (e = e.substr(1, e.length - 2)),
        'razor' === t && '~' === e[0] && (e = e.substr(1)),
        e
      );
    }

    function b(e, t, n, r, i, a) {
      var o = m(n, e.languageId);
      if (
        !(function (e, t) {
          if (!e.length) return !1;
          if ('handlebars' === t && /{{.*}}/.test(e)) return !1;
          if ('razor' === t && /@/.test(e)) return !1;
          try {
            return !!f.default.parse(e);
          } catch (e) {
            return !1;
          }
        })(o, e.languageId)
      )
        return null;
      o.length < n.length && (r++, i--);
      var s,
        l,
        c,
        u,
        d =
          ((s = e.uri),
          (c = t),
          (u = a),
          /^\s*javascript\:/i.test((l = o)) ||
          /^\s*\#/i.test(l) ||
          /[\n\r]/.test(l)
            ? null
            : ((l = l.replace(/^\s*/g, '')),
              /^https?:\/\//i.test(l) || /^file:\/\//i.test(l)
                ? l
                : /^\/\//i.test(l)
                ? (h.startsWith(s, 'https://') ? 'https' : 'http') +
                  ':' +
                  l.replace(/^\s*/g, '')
                : c
                ? c.resolveReference(l, u || s)
                : l));
      return d &&
        (function (e) {
          try {
            return f.default.parse(e), !0;
          } catch (e) {
            return !1;
          }
        })(d)
        ? {
            range: p.Range.create(e.positionAt(r), e.positionAt(i)),
            target: d,
          }
        : null;
    }
    t.findDocumentLinks = function (e, t) {
      for (
        var n = [],
          r = d.createScanner(e.getText(), 0),
          i = r.scan(),
          a = !1,
          o = !1,
          s = void 0;
        i !== g.TokenType.EOS;

      ) {
        switch (i) {
          case g.TokenType.StartTag:
            s || (o = 'base' === r.getTokenText().toLowerCase());
            break;
          case g.TokenType.AttributeName:
            var l = r.getTokenText().toLowerCase();
            a = 'src' === l || 'href' === l;
            break;
          case g.TokenType.AttributeValue:
            if (a) {
              var c = r.getTokenText();
              if (!o) {
                var u = b(e, t, c, r.getTokenOffset(), r.getTokenEnd(), s);
                u && n.push(u);
              }
              o &&
                void 0 === s &&
                (s = m(c, e.languageId)) &&
                t &&
                (s = t.resolveReference(s, e.uri)),
                (a = o = !1);
            }
        }
        i = r.scan();
      }
      return n;
    };
  }),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define(
          'vscode-html-languageservice/services/htmlHighlighting',
          [
            'require',
            'exports',
            '../parser/htmlScanner',
            'vscode-languageserver-types',
            '../htmlLanguageTypes',
          ],
          e
        );
  })(function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
      value: !0,
    });
    var a = e('../parser/htmlScanner'),
      l = e('vscode-languageserver-types'),
      c = e('../htmlLanguageTypes');

    function n(e, t) {
      return (
        e.line < t.line || (e.line === t.line && e.character <= t.character)
      );
    }

    function u(e, t) {
      return n(e.start, t) && n(t, e.end);
    }

    function d(e, t, n) {
      for (
        var r = a.createScanner(t.getText(), n), i = r.scan();
        i !== c.TokenType.EOS && i !== e;

      )
        i = r.scan();
      return i !== c.TokenType.EOS
        ? {
            start: t.positionAt(r.getTokenOffset()),
            end: t.positionAt(r.getTokenEnd()),
          }
        : null;
    }
    t.findDocumentHighlights = function (e, t, n) {
      var r = e.offsetAt(t),
        i = n.findNodeAt(r);
      if (!i.tag) return [];
      var a = [],
        o = d(c.TokenType.StartTag, e, i.start),
        s =
          'number' == typeof i.endTagStart &&
          d(c.TokenType.EndTag, e, i.endTagStart);
      return (
        ((o && u(o, t)) || (s && u(s, t))) &&
          (o &&
            a.push({
              kind: l.DocumentHighlightKind.Read,
              range: o,
            }),
          s &&
            a.push({
              kind: l.DocumentHighlightKind.Read,
              range: s,
            })),
        a
      );
    };
  }),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define(
          'vscode-html-languageservice/services/htmlSymbolsProvider',
          ['require', 'exports', 'vscode-languageserver-types'],
          e
        );
  })(function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
      value: !0,
    });
    var l = e('vscode-languageserver-types');
    t.findDocumentSymbols = function (t, e) {
      var n = [];
      return (
        e.roots.forEach(function (e) {
          !(function t(n, e, r, i) {
            var a = (function (e) {
                var t = e.tag;
                if (e.attributes) {
                  var n = e.attributes.id,
                    r = e.attributes.class;
                  n && (t += '#' + n.replace(/[\"\']/g, '')),
                    r &&
                      (t += r
                        .replace(/[\"\']/g, '')
                        .split(/\s+/)
                        .map(function (e) {
                          return '.' + e;
                        })
                        .join(''));
                }
                return t || '?';
              })(e),
              o = l.Location.create(
                n.uri,
                l.Range.create(n.positionAt(e.start), n.positionAt(e.end))
              ),
              s = {
                name: a,
                location: o,
                containerName: r,
                kind: l.SymbolKind.Field,
              };
            i.push(s),
              e.children.forEach(function (e) {
                t(n, e, a, i);
              });
          })(t, e, '', n);
        }),
        n
      );
    };
  }),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define(
          'vscode-html-languageservice/services/htmlFolding',
          [
            'require',
            'exports',
            'vscode-languageserver-types',
            '../htmlLanguageTypes',
            '../parser/htmlScanner',
            '../parser/htmlTags',
          ],
          e
        );
  })(function (e, t) {
    'use strict';
    Object.defineProperty(t, '__esModule', {
      value: !0,
    });
    var b = e('vscode-languageserver-types'),
      v = e('../htmlLanguageTypes'),
      y = e('../parser/htmlScanner'),
      T = e('../parser/htmlTags');
    t.getFoldingRanges = function (e, t) {
      var n = y.createScanner(e.getText()),
        r = n.scan(),
        i = [],
        a = [],
        o = null,
        s = -1;

      function l(e) {
        i.push(e), (s = e.startLine);
      }
      for (; r !== v.TokenType.EOS; ) {
        switch (r) {
          case v.TokenType.StartTag:
            var c = n.getTokenText(),
              u = e.positionAt(n.getTokenOffset()).line;
            a.push({
              startLine: u,
              tagName: c,
            }),
              (o = c);
            break;
          case v.TokenType.EndTag:
            o = n.getTokenText();
            break;
          case v.TokenType.StartTagClose:
            if (!o || !T.isEmptyElement(o)) break;
          case v.TokenType.EndTagClose:
          case v.TokenType.StartTagSelfClose:
            for (var d = a.length - 1; 0 <= d && a[d].tagName !== o; ) d--;
            if (0 <= d) {
              var p = a[d];
              a.length = d;
              var h = e.positionAt(n.getTokenOffset()).line;
              (u = p.startLine) < (g = h - 1) &&
                s !== u &&
                l({
                  startLine: u,
                  endLine: g,
                });
            }
            break;
          case v.TokenType.Comment:
            u = e.positionAt(n.getTokenOffset()).line;
            var f = n.getTokenText().match(/^\s*#(region\b)|(endregion\b)/);
            if (f)
              if (f[1])
                a.push({
                  startLine: u,
                  tagName: '',
                });
              else {
                for (d = a.length - 1; 0 <= d && a[d].tagName.length; ) d--;
                if (0 <= d) {
                  (p = a[d]), (a.length = d);
                  var g = u;
                  (u = p.startLine) < g &&
                    s !== u &&
                    l({
                      startLine: u,
                      endLine: g,
                      kind: b.FoldingRangeKind.Region,
                    });
                }
              }
            else
              u <
                (g = e.positionAt(
                  n.getTokenOffset() + n.getTokenLength()
                ).line) &&
                l({
                  startLine: u,
                  endLine: g,
                  kind: b.FoldingRangeKind.Comment,
                });
        }
        r = n.scan();
      }
      var m = (t && t.rangeLimit) || Number.MAX_VALUE;
      return (
        i.length > m &&
          (i = (function (e, t) {
            e = e.sort(function (e, t) {
              var n = e.startLine - t.startLine;
              return 0 === n && (n = e.endLine - t.endLine), n;
            });
            for (
              var n = void 0,
                r = [],
                i = [],
                a = [],
                o = function (e, t) {
                  (i[e] = t) < 30 && (a[t] = (a[t] || 0) + 1);
                },
                s = 0;
              s < e.length;
              s++
            ) {
              var l = e[s];
              if (n) {
                if (l.startLine > n.startLine)
                  if (l.endLine <= n.endLine)
                    r.push(n), (n = l), o(s, r.length);
                  else if (l.startLine > n.endLine) {
                    for (; (n = r.pop()) && l.startLine > n.endLine; );
                    n && r.push(n), (n = l), o(s, r.length);
                  }
              } else (n = l), o(s, 0);
            }
            var c = 0,
              u = 0;
            for (s = 0; s < a.length; s++) {
              var d = a[s];
              if (d) {
                if (t < d + c) {
                  u = s;
                  break;
                }
                c += d;
              }
            }
            var p = [];
            for (s = 0; s < e.length; s++) {
              var h = i[s];
              'number' == typeof h &&
                (h < u || (h === u && c++ < t)) &&
                p.push(e[s]);
            }
            return p;
          })(i, m)),
        i
      );
    };
  }),
  (function (e) {
    if ('object' == typeof module && 'object' == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      'function' == typeof define &&
        define.amd &&
        define(
          'vscode-html-languageservice/htmlLanguageService',
          [
            'require',
            'exports',
            './parser/htmlScanner',
            './parser/htmlParser',
            './services/htmlCompletion',
            './services/htmlHover',
            './services/htmlFormatter',
            './services/htmlLinks',
            './services/htmlHighlighting',
            './services/htmlSymbolsProvider',
            './services/htmlFolding',
            './htmlLanguageTypes',
            'vscode-languageserver-types',
          ],
          e
        );
  })(function (e, n) {
    'use strict';

    function t(e) {
      for (var t in e) n.hasOwnProperty(t) || (n[t] = e[t]);
    }
    Object.defineProperty(n, '__esModule', {
      value: !0,
    });
    var r = e('./parser/htmlScanner'),
      i = e('./parser/htmlParser'),
      a = e('./services/htmlCompletion'),
      o = e('./services/htmlHover'),
      s = e('./services/htmlFormatter'),
      l = e('./services/htmlLinks'),
      c = e('./services/htmlHighlighting'),
      u = e('./services/htmlSymbolsProvider'),
      d = e('./services/htmlFolding');
    t(e('./htmlLanguageTypes')),
      t(e('vscode-languageserver-types')),
      (n.getLanguageService = function () {
        var e = new a.HTMLCompletion();
        return {
          createScanner: r.createScanner,
          parseHTMLDocument: function (e) {
            return i.parse(e.getText());
          },
          doComplete: e.doComplete.bind(e),
          setCompletionParticipants: e.setCompletionParticipants.bind(e),
          doHover: o.doHover,
          format: s.format,
          findDocumentHighlights: c.findDocumentHighlights,
          findDocumentLinks: l.findDocumentLinks,
          findDocumentSymbols: u.findDocumentSymbols,
          getFoldingRanges: d.getFoldingRanges,
          doTagComplete: e.doTagComplete.bind(e),
        };
      });
  }),
  define(
    'vscode-html-languageservice',
    ['vscode-html-languageservice/htmlLanguageService'],
    function (e) {
      return e;
    }
  ),
  define(
    'vs/language/html/htmlWorker',
    [
      'require',
      'exports',
      'vscode-html-languageservice',
      'vscode-languageserver-types',
    ],
    function (e, t, n, i) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0,
      });
      var a = monaco.Promise,
        r = (function () {
          function e(e, t) {
            (this._ctx = e),
              (this._languageSettings = t.languageSettings),
              (this._languageId = t.languageId),
              (this._languageService = n.getLanguageService());
          }
          return (
            (e.prototype.doValidation = function (e) {
              return a.as([]);
            }),
            (e.prototype.doComplete = function (e, t) {
              var n = this._getTextDocument(e),
                r = this._languageService.parseHTMLDocument(n);
              return a.as(
                this._languageService.doComplete(
                  n,
                  t,
                  r,
                  this._languageSettings && this._languageSettings.suggest
                )
              );
            }),
            (e.prototype.format = function (e, t, n) {
              var r = this._getTextDocument(e),
                i = this._languageService.format(
                  r,
                  t,
                  this._languageSettings && this._languageSettings.format
                );
              return a.as(i);
            }),
            (e.prototype.findDocumentHighlights = function (e, t) {
              var n = this._getTextDocument(e),
                r = this._languageService.parseHTMLDocument(n),
                i = this._languageService.findDocumentHighlights(n, t, r);
              return a.as(i);
            }),
            (e.prototype.findDocumentLinks = function (e) {
              var t = this._getTextDocument(e),
                n = this._languageService.findDocumentLinks(t, null);
              return a.as(n);
            }),
            (e.prototype.provideFoldingRanges = function (e, t) {
              var n = this._getTextDocument(e),
                r = this._languageService.getFoldingRanges(n, t);
              return a.as(r);
            }),
            (e.prototype._getTextDocument = function (e) {
              for (
                var t = 0, n = this._ctx.getMirrorModels();
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r.uri.toString() === e)
                  return i.TextDocument.create(
                    e,
                    this._languageId,
                    r.version,
                    r.getValue()
                  );
              }
              return null;
            }),
            e
          );
        })();
      (t.HTMLWorker = r),
        (t.create = function (e, t) {
          return new r(e, t);
        });
    }
  );