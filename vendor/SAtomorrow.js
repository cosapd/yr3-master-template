/*

 MyFonts Webfont Build ID 3383183, 2017-05-02T14:10:42-0400

 The fonts listed in this notice are subject to the End User License
 Agreement(s) entered into by the website owner. All other parties are 
 explicitly restricted from using the Licensed Webfonts(s).

 You may obtain a valid license at the URLs below.

 Webfont: HelveticaLTCom-Roman by Linotype
 URL: http://www.myfonts.com/fonts/linotype/helvetica/com/
 Copyright: Part of the digitally encoded machine readable outline data for producing the Typefaces provided is copyrighted &#x00A9; 2004 - 2009 Linotype GmbH, www.linotype.com. All rights reserved. This software is the property of Linotype GmbH, and may not be repro

 Webfont: HelveticaLTCom-Bold by Linotype
 URL: http://www.myfonts.com/fonts/linotype/helvetica/com-bold/
 Copyright: Part of the digitally encoded machine readable outline data for producing the Typefaces provided is copyrighted &#x00A9; 2004 - 2009 Linotype GmbH, www.linotype.com. All rights reserved. This software is the property of Linotype GmbH, and may not be repro

 Webfont: TradeGothicLT-Light by Linotype
 URL: http://www.myfonts.com/fonts/linotype/trade-gothic/light-63882/
 Copyright: Part of the digitally encoded machine readable outline data for producing the Typefaces provided is copyrighted (c) 1989, 1992, 2003 Linotype Library GmbH, www.linotype.com. All rights reserved. This software is the property of Linotype Library GmbH, and 

 Webfont: TradeGothicLT-Bold by Linotype
 URL: http://www.myfonts.com/fonts/linotype/trade-gothic/bold-63882/
 Copyright: Part of the digitally encoded machine readable outline data for producing the Typefaces provided is copyrighted (c) 1989, 1992, 2003 Linotype Library GmbH, www.linotype.com. All rights reserved. This software is the property of Linotype Library GmbH, and 

 Webfont: HelveticaLTCom-Light by Linotype
 URL: http://www.myfonts.com/fonts/linotype/helvetica/com-light/
 Copyright: Part of the digitally encoded machine readable outline data for producing the Typefaces provided is copyrighted &#x00A9; 2008 Linotype GmbH, www.linotype.com. All rights reserved. This software is the property of Linotype GmbH, and may not be reproduced, 


 License: http://www.myfonts.com/viewlicense?type=web&buildid=3383183
 Licensed pageviews: 250,000

 ? 2017 MyFonts Inc
*/
var protocol=document.location.protocol;"https:"!=protocol&&(protocol="http:");var count=document.createElement("script");count.type="text/javascript";count.async=!0;count.src=protocol+"//hello.myfonts.net/count/339f8f";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(count,s);var browserName,browserVersion,webfontType;if("undefined"==typeof woffEnabled)var woffEnabled=!0;var svgEnabled=0,woff2Enabled=1;
if("undefined"!=typeof customPath)var path=customPath;else{var scripts=document.getElementsByTagName("SCRIPT"),script=scripts[scripts.length-1].src;script.match("://")||"/"==script.charAt(0)||(script="./"+script);path=script.replace(/\\/g,"/").replace(/\/[^\/]*\/?$/,"")}
var wfpath=path+"/webfonts/",browsers=[{regex:"MSIE (\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:9,type:"woff"},{version:5,type:"eot"}]},{regex:"Trident/(\\d+\\.\\d+); (.+)?rv:(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$3)",type:[{version:11,type:"woff"}]},{regex:"Firefox[/s](\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:3.6,type:"woff"},{version:3.5,type:"ttf"}]},{regex:"Edge/(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:12,type:"woff"}]},
{regex:"Chrome/(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:36,type:"woff2"},{version:6,type:"woff"},{version:4,type:"ttf"}]},{regex:"Mozilla.*Android (\\d+\\.\\d+).*AppleWebKit.*Safari",versionRegex:"new Number(RegExp.$1)",type:[{version:4.1,type:"woff"},{version:3.1,type:"svg#wf"},{version:2.2,type:"ttf"}]},{regex:"Mozilla.*(iPhone|iPad).* OS (\\d+)_(\\d+).* AppleWebKit.*Safari",versionRegex:"new Number(RegExp.$2) + (new Number(RegExp.$3) / 10)",unhinted:!0,type:[{version:5,
type:"woff"},{version:4.2,type:"ttf"},{version:1,type:"svg#wf"}]},{regex:"Mozilla.*(iPhone|iPad|BlackBerry).*AppleWebKit.*Safari",versionRegex:"1.0",type:[{version:1,type:"svg#wf"}]},{regex:"Version/(\\d+\\.\\d+)(\\.\\d+)? Safari/(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:5.1,type:"woff"},{version:3.1,type:"ttf"}]},{regex:"Opera/(\\d+\\.\\d+)(.+)Version/(\\d+\\.\\d+)(\\.\\d+)?",versionRegex:"new Number(RegExp.$3)",type:[{version:24,type:"woff2"},{version:11.1,type:"woff"},
{version:10.1,type:"ttf"}]}],browLen=browsers.length,suffix="",i=0;
a:for(;i<browLen;i++){var regex=new RegExp(browsers[i].regex);if(regex.test(navigator.userAgent)){browserVersion=eval(browsers[i].versionRegex);var typeLen=browsers[i].type.length;for(j=0;j<typeLen;j++)if(browserVersion>=browsers[i].type[j].version&&(1==browsers[i].unhinted&&(suffix="_unhinted"),webfontType=browsers[i].type[j].type,"woff"!=webfontType||woffEnabled)&&("woff2"!=webfontType||woff2Enabled)&&("svg#wf"!=webfontType||svgEnabled))break a}else webfontType="woff"}
/(Macintosh|Android)/.test(navigator.userAgent)&&"svg#wf"!=webfontType&&(suffix="_unhinted");var head=document.getElementsByTagName("head")[0],stylesheet=document.createElement("style");stylesheet.setAttribute("type","text/css");head.appendChild(stylesheet);
for(var fonts=[{fontFamily:"HelveticaLTCom-Roman",url:wfpath+"339F8F_0"+suffix+"_0."+webfontType},{fontFamily:"HelveticaLTCom-Bold",url:wfpath+"339F8F_1"+suffix+"_0."+webfontType},{fontFamily:"TradeGothicLT-Light",url:wfpath+"339F8F_2"+suffix+"_0."+webfontType},{fontFamily:"TradeGothicLT-Bold",url:wfpath+"339F8F_3"+suffix+"_0."+webfontType},{fontFamily:"HelveticaLTCom-Light",url:wfpath+"339F8F_4"+suffix+"_0."+webfontType}],len=fonts.length,css="",i=0;i<len;i++){var format="svg#wf"==webfontType?'format("svg")':
"ttf"==webfontType?'format("truetype")':"eot"==webfontType?"":'format("'+webfontType+'")',css=css+("@font-face{font-family: "+fonts[i].fontFamily+";src:url("+fonts[i].url+")"+format+";");fonts[i].fontWeight&&(css+="font-weight: "+fonts[i].fontWeight+";");fonts[i].fontStyle&&(css+="font-style: "+fonts[i].fontStyle+";");css+="}"}stylesheet.styleSheet?stylesheet.styleSheet.cssText=css:stylesheet.innerHTML=css;
