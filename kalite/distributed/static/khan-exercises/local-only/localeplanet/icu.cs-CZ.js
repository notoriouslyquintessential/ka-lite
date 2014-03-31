(function() {

	var dfs = {"am_pm":["dop.","odp."],"day_name":["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],"day_short":["ne","po","út","st","čt","pá","so"],"era":["př. n. l.","n. l."],"era_name":["př. n. l.","n. l."],"month_name":["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"],"month_short":["Led","Úno","Bře","Dub","Kvě","Čer","Čvc","Srp","Zář","Říj","Lis","Pro"],"order_full":"DMY","order_long":"DMY","order_medium":"DMY","order_short":"DMY"};
	var nfs = {"decimal_separator":",","grouping_separator":" ","minus":"-"};
	var df = {SHORT_PADDED_CENTURY:function(d){if(d){return(((d.getDate()+101)+'').substring(1)+'.'+((d.getMonth()+101)+'').substring(1)+'.'+d.getFullYear());}},SHORT:function(d){if(d){return(d.getDate()+'.'+(d.getMonth()+1)+'.'+(d.getFullYear()+'').substring(2));}},SHORT_NOYEAR:function(d){if(d){return(d.getDate()+'.'+(d.getMonth()+1));}},SHORT_NODAY:function(d){if(d){return((d.getMonth()+1)+'.'+(d.getFullYear()+'').substring(2));}},MEDIUM:function(d){if(d){return(d.getDate()+'.'+(d.getMonth()+1)+'.'+d.getFullYear());}},MEDIUM_NOYEAR:function(d){if(d){return(d.getDate()+'.'+(d.getMonth()+1));}},MEDIUM_WEEKDAY_NOYEAR:function(d){if(d){return(dfs.day_short[d.getDay()]+' '+d.getDate()+'.'+(d.getMonth()+1));}},LONG_NODAY:function(d){if(d){return(dfs.month_name[d.getMonth()]+' '+d.getFullYear());}},LONG:function(d){if(d){return(d.getDate()+'.'+' '+dfs.month_name[d.getMonth()]+' '+d.getFullYear());}},FULL:function(d){if(d){return(dfs.day_name[d.getDay()]+','+' '+d.getDate()+'.'+' '+dfs.month_name[d.getMonth()]+' '+d.getFullYear());}}};
	
	window.icu = window.icu || new Object();
	var icu = window.icu;	
		
	icu.getCountry = function() { return "CZ" };
	icu.getCountryName = function() { return "Česká republika" };
	icu.getDateFormat = function(formatCode) { var retVal = {}; retVal.format = df[formatCode]; return retVal; };
	icu.getDateFormats = function() { return df; };
	icu.getDateFormatSymbols = function() { return dfs; };
	icu.getDecimalFormat = function(places) { var retVal = {}; retVal.format = function(n) { var ns = n < 0 ? Math.abs(n).toFixed(places) : n.toFixed(places); var ns2 = ns.split('.'); s = ns2[0]; var d = ns2[1]; var rgx = /(\d+)(\d{3})/;while(rgx.test(s)){s = s.replace(rgx, '$1' + nfs["grouping_separator"] + '$2');} return (n < 0 ? nfs["minus"] : "") + s + nfs["decimal_separator"] + d;}; return retVal; };
	icu.getDecimalFormatSymbols = function() { return nfs; };
	icu.getIntegerFormat = function() { var retVal = {}; retVal.format = function(i) { var s = i < 0 ? Math.abs(i).toString() : i.toString(); var rgx = /(\d+)(\d{3})/;while(rgx.test(s)){s = s.replace(rgx, '$1' + nfs["grouping_separator"] + '$2');} return i < 0 ? nfs["minus"] + s : s;}; return retVal; };
	icu.getLanguage = function() { return "cs" };
	icu.getLanguageName = function() { return "čeština" };
	icu.getLocale = function() { return "cs-CZ" };
	icu.getLocaleName = function() { return "čeština (Česká republika)" };

})();