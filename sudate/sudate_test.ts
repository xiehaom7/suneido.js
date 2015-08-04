"use strict";

import date = require("./date");
import sudate = require("./sudate");
import assert = require("assert");

function testSuDate(): void {
    var d1 = date.makeDateTime_full(2003, 11, 27, 16, 37, 33, 123),
        d3 = date.makeDateTime_full(2003, 12, 3, 0, 0, 0, 0),
        d4 = date.makeDateTime_full(2003, 12, 3, 0, 0, 12, 345),
        d5 = date.makeDateTime_full(2003, 12, 3, 1, 2, 3, 4),
        d6 = date.makeDateTime_full(2005, 1, 1, 16, 37, 33, 123),
        sud1 = sudate.makeSuDate_int_int(d1.date(), d1.time()),
        sud2,
        sud3 = sudate.makeSuDate_int_int(d3.date(), d3.time()),
        sud4 = sudate.makeSuDate_int_int(d4.date(), d4.time()),
        sud5 = sudate.makeSuDate_int_int(d5.date(), d5.time()),
        sud6 = sudate.makeSuDate_int_int(d6.date(), d6.time());

    assert(sud1.year() === 2003, "Check initialize year.");
    assert(sud1.month()=== 11, "Check initialize month.");
    assert(sud1.day() === 27, "Check initialize date.");
    assert(sud1.hour() === 16, "Check initialize hours.");
    assert(sud1.minute() === 37, "Check initialize minutes.");
    assert(sud1.second() === 33, "Check initialize seconds.");
    assert(sud1.millisecond() === 123, "Check initialize milliseconds.");

    assert(sud1.weekday() === 4, "Check method weekday() with no arg.");
    assert(sud1.weekday("MON") === 3, "Check method weekday() with string arg.");
    assert(sud1.weekday(4) === 0, "Check method weekday() with number arg.");

    assert(sud3.minusDays(sud1) === 6, "Check method minus_days().");
    assert(sud4.minusSeconds(sud3) === 12.345, "Check method minus_milliseconds()");

    sud2 = sud3.plus({hours: 1, minutes: 2, seconds: 3, milliseconds: 4});
    assert(sud2.d.time() === sud5.d.time() && sud2.d.date() === sud5.d.date(), "Check method plus() with hms set");

    sud2 = sud1.plus({years: 1, days: 5, months: 1});
    assert(sud2.d.time() === sud6.d.time() && sud2.d.date() === sud6.d.date(), "Check method plus() with ymd set");
    sud2 = sud1.plus({years: 1, months: 1, days: 5});
    assert(sud2.d.time() === sud6.d.time() && sud2.d.date() === sud6.d.date(), "Check method plus() with ymd set in another sequence");

    assert.equal(sud1.formatEn("dddd, MMMM d, yyyy"), "Thursday, November 27, 2003");
    assert.equal(sud1.formatEn("ddd, MMM. dd, \\'yy"), "Thu, Nov. 27, '03");
    assert.equal(sud1.formatEn("MM/dd/yy"), "11/27/03");
    assert.equal(sud1.formatEn("yyyyMMdd"), "20031127");
    assert.equal(sud1.formatEn("h:mmaa"), "4:37pm");
    assert.equal(sud1.formatEn("HH:mm:ss"), "16:37:33");
    assert.equal(sud1.formatEn("yyyy-MM-dd H:mm"), "2003-11-27 16:37");
    assert.equal(sud1.formatEn("dd \\de MMM"), "27 de Nov");
    assert.equal(sud1.formatEn("dd 'de' MMM"), "27 de Nov");

    sud2 = sudate.parse("#20150326.122334456", "yyyyMMdd");
    assert.equal(sud2.formatEn("yyyy-MM-dd H:mm:ss"), "2015-03-26 12:23:34");
    sud2 = sudate.parse("2000/3/4 8:34:56", "yyyyMMdd");
    assert.equal(sud2.formatEn("yyyy-MM-dd H:mm:ss"), "2000-03-04 8:34:56");

    sud2 = sudate.literal("#19990101");
    assert.equal(sud2.toString(), "#19990101.000000000");
    sud2 = sudate.literal("#19990101.010203456");
    assert.equal(sud2.toString(), "#19990101.010203456");
}

testSuDate();
