$(function () {
    $("#navshow").click(function () { $(this).hasClass("on") ? ($(this).removeClass("on"), $("#navbar").hide(300)) : ($(this).addClass("on"), $("#navbar").show(300)) }); $("#navbar li.dropdown").click(function () { if ($(this).hasClass("open")) { $(this).removeClass("open"); $(this).children(".dropdown-menu").hide(500); } else { $(this).addClass("open"); $(this).children(".dropdown-menu").show(500); } }); $("#btnsearch").click(function () { search() }); $("#kw").bind("keypress", function (a) { "13" == a.keyCode && search() }); var a = $(".navbar"); $(".roll").scrollToFixed({ marginTop: a.outerHeight() + 10 }); jQuery("span.time").timeago(); $(".scolltop").scrollToTop(1E3);
});
(function (a) {
    a.isScrollToFixed = function (e) { return !!a(e).data("ScrollToFixed") }; a.ScrollToFixed = function (e, g) {
        function t() { var a = d.options.limit; return a ? "function" === typeof a ? a.apply(b) : a : 0 } function h() { return "fixed" === q } function p() { return !(h() || "absolute" === q) } function c() {
            h() || (m.css({ display: b.css("display"), width: b.outerWidth(!0), height: b.outerHeight(!0), "float": b.css("float") }), cssOptions = { "z-index": d.options.zIndex, position: "fixed", top: -1 == d.options.bottom ? v() : "", bottom: -1 == d.options.bottom ?
"" : d.options.bottom, "margin-left": "0px"
            }, d.options.dontSetWidth || (cssOptions.width = b.width()), b.css(cssOptions), b.addClass(d.options.baseClassName), d.options.className && b.addClass(d.options.className), q = "fixed")
        } function A() { var a = t(), c = r; d.options.removeOffsets && (c = "", a -= w); cssOptions = { position: "absolute", top: a, left: c, "margin-left": "0px", bottom: "" }; d.options.dontSetWidth || (cssOptions.width = b.width()); b.css(cssOptions); q = "absolute" } function f() {
            p() || (u = -1, m.css("display", "none"), b.css({ "z-index": B,
                width: "", position: x, left: "", top: C, "margin-left": ""
            }), b.removeClass("scroll-to-fixed-fixed"), d.options.className && b.removeClass(d.options.className), q = null)
        } function y(a) { a != u && (b.css("left", r - a), u = a) } function v() { var a = d.options.marginTop; return a ? "function" === typeof a ? a.apply(b) : a : 0 } function k() {
            if (a.isScrollToFixed(b)) {
                var e = n; n ? p() && (w = b.offset().top, r = b.offset().left) : (b.trigger("preUnfixed.ScrollToFixed"), f(), b.trigger("unfixed.ScrollToFixed"), u = -1, w = b.offset().top, r = b.offset().left, d.options.offsets &&
(r += b.offset().left - b.position().left), -1 == D && (D = r), q = b.css("position"), n = !0, -1 != d.options.bottom && (b.trigger("preFixed.ScrollToFixed"), c(), b.trigger("fixed.ScrollToFixed"))); var k = a(window).scrollLeft(), g = a(window).scrollTop(), m = t(); d.options.minWidth && a(window).width() < d.options.minWidth ? p() && e || (l(), b.trigger("preUnfixed.ScrollToFixed"), f(), b.trigger("unfixed.ScrollToFixed")) : d.options.maxWidth && a(window).width() > d.options.maxWidth ? p() && e || (l(), b.trigger("preUnfixed.ScrollToFixed"), f(), b.trigger("unfixed.ScrollToFixed")) :
-1 == d.options.bottom ? 0 < m && g >= m - v() ? "absolute" === q && e || (l(), b.trigger("preAbsolute.ScrollToFixed"), A(), b.trigger("unfixed.ScrollToFixed")) : g >= w - v() ? (h() && e || (l(), b.trigger("preFixed.ScrollToFixed"), c(), u = -1, b.trigger("fixed.ScrollToFixed")), y(k)) : p() && e || (l(), b.trigger("preUnfixed.ScrollToFixed"), f(), b.trigger("unfixed.ScrollToFixed")) : 0 < m ? (e = g + a(window).height() - b.outerHeight(!0), (g = v()) || (g = d.options.bottom ? d.options.bottom : 0, g = -g), e >= m - g ? h() && (l(), b.trigger("preUnfixed.ScrollToFixed"), "absolute" ===
x ? A() : f(), b.trigger("unfixed.ScrollToFixed")) : (h() || (l(), b.trigger("preFixed.ScrollToFixed"), c()), y(k), b.trigger("fixed.ScrollToFixed"))) : y(k)
            }
        } function l() { var a = b.css("position"); "absolute" == a ? b.trigger("postAbsolute.ScrollToFixed") : "fixed" == a ? b.trigger("postFixed.ScrollToFixed") : b.trigger("postUnfixed.ScrollToFixed") } var d = this; d.$el = a(e); d.el = e; d.$el.data("ScrollToFixed", d); var n = !1, b = d.$el, q, x, C, B, w = 0, r = 0, D = -1, u = -1, m = null, z = function (a) { b.is(":visible") && (n = !1, k()) }, E = function (a) {
            window.requestAnimationFrame ?
requestAnimationFrame(k) : k()
        }; d.init = function () {
            d.options = a.extend({}, a.ScrollToFixed.defaultOptions, g); B = b.css("z-index"); d.$el.css("z-index", d.options.zIndex); m = a("<div />"); q = b.css("position"); x = b.css("position"); C = b.css("top"); p() && d.$el.after(m); a(window).bind("resize.ScrollToFixed", z); a(window).bind("scroll.ScrollToFixed", E); "ontouchmove" in window && a(window).bind("touchmove.ScrollToFixed", k); d.options.preFixed && b.bind("preFixed.ScrollToFixed", d.options.preFixed); d.options.postFixed && b.bind("postFixed.ScrollToFixed",
d.options.postFixed); d.options.preUnfixed && b.bind("preUnfixed.ScrollToFixed", d.options.preUnfixed); d.options.postUnfixed && b.bind("postUnfixed.ScrollToFixed", d.options.postUnfixed); d.options.preAbsolute && b.bind("preAbsolute.ScrollToFixed", d.options.preAbsolute); d.options.postAbsolute && b.bind("postAbsolute.ScrollToFixed", d.options.postAbsolute); d.options.fixed && b.bind("fixed.ScrollToFixed", d.options.fixed); d.options.unfixed && b.bind("unfixed.ScrollToFixed", d.options.unfixed); d.options.spacerClass && m.addClass(d.options.spacerClass);
            b.bind("resize.ScrollToFixed", function () { m.height(b.height()) }); b.bind("scroll.ScrollToFixed", function () { b.trigger("preUnfixed.ScrollToFixed"); f(); b.trigger("unfixed.ScrollToFixed"); k() }); b.bind("detach.ScrollToFixed", function (c) {
                c = c || window.event; c.preventDefault && c.preventDefault(); c.returnValue = !1; b.trigger("preUnfixed.ScrollToFixed"); f(); b.trigger("unfixed.ScrollToFixed"); a(window).unbind("resize.ScrollToFixed", z); a(window).unbind("scroll.ScrollToFixed", E); b.unbind(".ScrollToFixed"); m.remove();
                d.$el.removeData("ScrollToFixed")
            }); z()
        }; d.init()
    }; a.ScrollToFixed.defaultOptions = { marginTop: 0, limit: 0, bottom: -1, zIndex: 1E3, baseClassName: "scroll-to-fixed-fixed" }; a.fn.scrollToFixed = function (e) { return this.each(function () { new a.ScrollToFixed(this, e) }) }
})(jQuery);
(function (a) { a.fn.scrollToTop = function (e) { var g = { speed: 800 }; e && a.extend(g, { speed: e }); return this.each(function () { var e = a(this); a(window).scroll(function () { 100 < a(this).scrollTop() ? e.fadeIn() : e.fadeOut() }); e.click(function (e) { e.preventDefault(); a("body, html").animate({ scrollTop: 0 }, g.speed) }) }) } })(jQuery);
(function (a) { "function" === typeof define && define.amd ? define(["jquery"], a) : "object" === typeof module && "object" === typeof module.exports ? a(require("jquery")) : a(jQuery) })(function (a) {
    function e() {
        if (!a.contains(document.documentElement, this)) return a(this).timeago("dispose"), this; var c; c = a(this); if (!c.data("timeago")) {
            c.data("timeago", { datetime: h.datetime(c) }); var e = a.trim(c.text()); h.settings.localeTitle ? c.attr("title", c.data("timeago").datetime.toLocaleString()) : !(0 < e.length) || h.isTime(c) && c.attr("title") ||
c.attr("title", e)
        } c = c.data("timeago"); e = h.settings; isNaN(c.datetime) || (0 == e.cutoff || Math.abs(t(c.datetime)) < e.cutoff) && a(this).text(g(c.datetime)); return this
    } function g(a) { return h.inWords(t(a)) } function t(a) { return (new Date).getTime() - a.getTime() } a.timeago = function (c) { return c instanceof Date ? g(c) : "string" === typeof c ? g(a.timeago.parse(c)) : "number" === typeof c ? g(new Date(c)) : g(a.timeago.datetime(c)) }; var h = a.timeago; a.extend(a.timeago, { settings: { refreshMillis: 6E4, allowPast: !0, allowFuture: !1, localeTitle: !1,
        cutoff: 0, strings: { prefixAgo: null, prefixFromNow: null, suffixAgo: "\u524d", suffixFromNow: "from now", seconds: "1 \u5206\u949f", minute: "1 \u5206\u949f", minutes: "%d \u5206\u949f", hour: "1 \u5c0f\u65f6", hours: "%d \u5c0f\u65f6", day: "1 \u5929", days: "%d \u5929", month: "1 \u6708", months: "%d \u6708", year: "1 \u5e74", years: "%d \u5e74", wordSeparator: "", numbers: [] }
    }, inWords: function (c) {
        function e(b, d) { return (a.isFunction(b) ? b(d, c) : b).replace(/%d/i, f.numbers && f.numbers[d] || d) } if (!this.settings.allowPast && !this.settings.allowFuture) throw "timeago allowPast and allowFuture settings can not both be set to false.";
        var f = this.settings.strings, g = f.prefixAgo, h = f.suffixAgo; this.settings.allowFuture && 0 > c && (g = f.prefixFromNow, h = f.suffixFromNow); if (!this.settings.allowPast && 0 <= c) return this.settings.strings.inPast; var k = Math.abs(c) / 1E3, l = k / 60, d = l / 60, n = d / 24, b = n / 365, k = 45 > k && e(f.seconds, Math.round(k)) || 90 > k && e(f.minute, 1) || 45 > l && e(f.minutes, Math.round(l)) || 90 > l && e(f.hour, 1) || 24 > d && e(f.hours, Math.round(d)) || 42 > d && e(f.day, 1) || 30 > n && e(f.days, Math.round(n)) || 45 > n && e(f.month, 1) || 365 > n && e(f.months, Math.round(n / 30)) || 1.5 > b &&
e(f.year, 1) || e(f.years, Math.round(b)), l = f.wordSeparator || ""; void 0 === f.wordSeparator && (l = " "); return a.trim([g, k, h].join(l))
    }, parse: function (c) { c = a.trim(c); c = c.replace(/\.\d+/, ""); c = c.replace(/-/, "/").replace(/-/, "/"); c = c.replace(/T/, " ").replace(/Z/, " UTC"); c = c.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); c = c.replace(/([\+\-]\d\d)$/, " $100"); return new Date(c) }, datetime: function (c) { c = h.isTime(c) ? a(c).attr("datetime") : a(c).attr("title"); return h.parse(c) }, isTime: function (c) { return "time" === a(c).get(0).tagName.toLowerCase() }
    });
    var p = { init: function () { var c = a.proxy(e, this); c(); var g = h.settings; 0 < g.refreshMillis && (this._timeagoInterval = setInterval(c, g.refreshMillis)) }, update: function (c) { c = h.parse(c); a(this).data("timeago", { datetime: c }); h.settings.localeTitle && a(this).attr("title", c.toLocaleString()); e.apply(this) }, updateFromDOM: function () { a(this).data("timeago", { datetime: h.parse(h.isTime(this) ? a(this).attr("datetime") : a(this).attr("title")) }); e.apply(this) }, dispose: function () {
        this._timeagoInterval && (window.clearInterval(this._timeagoInterval),
this._timeagoInterval = null)
    }
    }; a.fn.timeago = function (a, e) { var f = a ? p[a] : p.init; if (!f) throw Error("Unknown function name '" + a + "' for timeago"); this.each(function () { f.call(this, e) }); return this }; document.createElement("abbr"); document.createElement("time")
}); function search() { var a = encodeURI($("#kw").val()); "" != a ? window.location.href = "/search.html?keys=" + a : $("#kw").focus() }
function getSubstr(downurl) {
    var resultStr = downurl
    if (downurl.indexOf("ed2k://|file|") == 0) {
        var tmpStr = resultStr.split('|');
        if (tmpStr.length > 3) {
            if (tmpStr[2].length > 0) {
                resultStr = decodeURIComponent(tmpStr[2]);
            }
        }

        return resultStr;
    } else {
        return resultStr;
    }
}
var links = function (id) { $.getJSON("/tools/opt_ajax.ashx", { action: "links", id: id, t: new Date() }, function (data) { var strHtml = ""; if (data.total > 0) { strHtml += "<div class='downlist clearfix'><ul class='clearfix'><li class='clearfix'>"; strHtml += "<a href='javascript:'>以下链接提供观看或下载</a><span>"; $.each(data.items, function (i, v) { strHtml += "<a class='v" + v.origin_id + "' href='" + v.link_url + "' target='_blank'>" + v.origin_name + (v.link_pwd.length > 1 ? "：" + v.link_pwd : "") + "</a>" }); strHtml += "</span></li></ul></div>"; $(".links_after").after(strHtml) } }) }
function hits(a) { null == $.cookie("hits" + a) && $.ajax({ type: "GET", url: "/tools/opt_ajax.ashx", data: { action: "hits", id: a }, dataType: "text", success: function (e) { $.cookie("hits" + a, a) } }) } function digg(a) { null != $.cookie("digg" + a) ? alert("\u4eb2\uff0c\u60a8\u5df2\u7ecf\u8d5e\u8fc7\u4e86\uff01") : $.ajax({ type: "GET", url: "/tools/opt_ajax.ashx", data: { action: "digg", id: a }, dataType: "text", success: function (e) { e = $("#digg").attr("val"); e = parseInt(e) + 1; $("#digg").find(".praise").html("\u8d5e " + e); $.cookie("digg" + a, a) } }) }
function msg() { $.ajax({ url: "/tools/opt_ajax.ashx?action=msg", dataType: "text", type: "post", timeout: 6E3, async: !1, data: $("#form1").serialize(), success: function (a) { a = eval("(" + a + ")"); if ("1" == a.status) alert(a.msg), window.location.href = "/message.html"; else return alert(a.msg), !1 } }) };
function tabs() { $(".change").each(function (i, v) { $(v).find(".tabs a").each(function (ii, vv) { $(vv).click(function () { $(v).find(".tabs a").removeClass("active").eq($(this).index()).addClass("active"); $(v).find(".wrap .panel").hide().eq($(this).index()).show(); }); }); }); }