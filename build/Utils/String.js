"use strict";
/**
 * String.ts
 *
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param {string} str
 * @param {string} charList
 */
function trim(str, charList) {
    let whitespace = [' ', '\n', '\r', '\t', '\f', '\x0b', '\xa0', '\u2000', '\u2001', '\u2002', '\u2003', '\u2004', '\u2005', '\u2006', '\u2007', '\u2008', '\u2009', '\u200A', '\u200B', '\u2028', '\u2029', '\u3000'].join('');
    let l = 0;
    let i = 0;
    str += '';
    if (charList) {
        whitespace = (charList + '').replace(/([[\]().?/*{}+$^:])/g, '$1');
    }
    l = str.length;
    for (i = 0; i < l; i++) {
        if (whitespace.indexOf(str.charAt(i)) === -1) {
            str = str.substring(i);
            break;
        }
    }
    l = str.length;
    for (i = l - 1; i >= 0; i--) {
        if (whitespace.indexOf(str.charAt(i)) === -1) {
            str = str.substring(0, i + 1);
            break;
        }
    }
    return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
}
exports.trim = trim;
/**
 *
 * @param {Array|string} search
 * @param {Array|string} replace
 * @param {Array|string} subject
 * @param {object} countObj
 */
function str_replace(search, replace, subject, countObj) {
    let i = 0;
    let j = 0;
    let temp = '';
    let repl = '';
    let sl = 0;
    let fl = 0;
    let f = [].concat(search);
    let r = [].concat(replace);
    let s = subject;
    let ra = Object.prototype.toString.call(r) === '[object Array]';
    let sa = Object.prototype.toString.call(s) === '[object Array]';
    s = [].concat(s);
    let _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
    if ((typeof search === 'undefined' ? 'undefined' : _typeof(search)) === 'object' && typeof replace === 'string') {
        temp = replace;
        replace = [];
        for (i = 0; i < search.length; i += 1) {
            replace[i] = temp;
        }
        temp = '';
        r = [].concat(replace);
        ra = Object.prototype.toString.call(r) === '[object Array]';
    }
    if (typeof countObj !== 'undefined') {
        countObj.value = 0;
    }
    for (i = 0, sl = s.length; i < sl; i++) {
        if (s[i] === '') {
            continue;
        }
        for (j = 0, fl = f.length; j < fl; j++) {
            temp = s[i] + '';
            repl = ra ? r[j] !== undefined ? r[j] : '' : r[0];
            s[i] = temp.split(f[j]).join(repl);
            if (typeof countObj !== 'undefined') {
                countObj.value += temp.split(f[j]).length - 1;
            }
        }
    }
    return sa ? s : s[0];
}
exports.str_replace = str_replace;
/* End of file String.ts */ 
