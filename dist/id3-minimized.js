function y(f,d,b){var h=d||0,c=0;"string"==typeof f?(c=b||f.length,this.a=function(a){return f.charCodeAt(a+h)&255}):"unknown"==typeof f&&(c=b||IEBinary_getLength(f),this.a=function(a){return IEBinary_getByteAt(f,a+h)});this.l=function(a,e){for(var u=Array(e),b=0;b<e;b++)u[b]=this.a(a+b);return u};this.h=function(){return c};this.d=function(a,e){return 0!=(this.a(a)&1<<e)};this.w=function(a){a=(this.a(a+1)<<8)+this.a(a);0>a&&(a+=65536);return a};this.i=function(a){var e=this.a(a),b=this.a(a+1),c=
this.a(a+2);a=this.a(a+3);e=(((e<<8)+b<<8)+c<<8)+a;0>e&&(e+=4294967296);return e};this.o=function(a){var e=this.a(a),b=this.a(a+1);a=this.a(a+2);e=((e<<8)+b<<8)+a;0>e&&(e+=16777216);return e};this.c=function(a,e){for(var b=[],c=a,g=0;c<a+e;c++,g++)b[g]=String.fromCharCode(this.a(c));return b.join("")};this.e=function(a,e,b){a=this.l(a,e);switch(b.toLowerCase()){case "utf-16":case "utf-16le":case "utf-16be":e=b;var c,g=0,h=1;b=0;c=Math.min(c||a.length,a.length);254==a[0]&&255==a[1]?(e=!0,g=2):255==
a[0]&&254==a[1]&&(e=!1,g=2);e&&(h=0,b=1);e=[];for(var k=0;g<c;k++){var d=a[g+h],l=(d<<8)+a[g+b],g=g+2;if(0==l)break;else 216>d||224<=d?e[k]=String.fromCharCode(l):(d=(a[g+h]<<8)+a[g+b],g+=2,e[k]=String.fromCharCode(l,d))}a=new String(e.join(""));a.g=g;break;case "utf-8":c=0;g=Math.min(g||a.length,a.length);239==a[0]&&187==a[1]&&191==a[2]&&(c=3);h=[];for(b=0;c<g&&(e=a[c++],0!=e);b++)128>e?h[b]=String.fromCharCode(e):194<=e&&224>e?(k=a[c++],h[b]=String.fromCharCode(((e&31)<<6)+(k&63))):224<=e&&240>
e?(k=a[c++],l=a[c++],h[b]=String.fromCharCode(((e&255)<<12)+((k&63)<<6)+(l&63))):240<=e&&245>e&&(k=a[c++],l=a[c++],d=a[c++],e=((e&7)<<18)+((k&63)<<12)+((l&63)<<6)+(d&63)-65536,h[b]=String.fromCharCode((e>>10)+55296,(e&1023)+56320));a=new String(h.join(""));a.g=c;break;default:g=[];h=h||a.length;for(c=0;c<h;){b=a[c++];if(0==b)break;g[c-1]=String.fromCharCode(b)}a=new String(g.join(""));a.g=c}return a};this.f=function(a,b){b()}}document.write("<script type='text/vbscript'>\r\nFunction IEBinary_getByteAt(strBinary, iOffset)\r\n\tIEBinary_getByteAt = AscB(MidB(strBinary,iOffset+1,1))\r\nEnd Function\r\nFunction IEBinary_getLength(strBinary)\r\n\tIEBinary_getLength = LenB(strBinary)\r\nEnd Function\r\n\x3c/script>\r\n");function B(f,d,b){function h(a,b,e,h,d,f){var l=c();l?("undefined"===typeof f&&(f=!0),b&&("undefined"!=typeof l.onload?l.onload=function(){"200"==l.status||"206"==l.status?(l.fileSize=d||l.getResponseHeader("Content-Length"),b(l)):e&&e();l=null}:l.onreadystatechange=function(){4==l.readyState&&("200"==l.status||"206"==l.status?(l.fileSize=d||l.getResponseHeader("Content-Length"),b(l)):e&&e(),l=null)}),l.open("GET",a,f),l.overrideMimeType&&l.overrideMimeType("text/plain; charset=x-user-defined"),h&&
l.setRequestHeader("Range","bytes="+h[0]+"-"+h[1]),l.setRequestHeader("If-Modified-Since","Sat, 1 Jan 1970 00:00:00 GMT"),l.send(null)):e&&e()}function c(){var a=null;window.XMLHttpRequest?a=new XMLHttpRequest:window.ActiveXObject&&(a=new ActiveXObject("Microsoft.XMLHTTP"));return a}function a(a,b){var e=c();e&&(b&&("undefined"!=typeof e.onload?e.onload=function(){"200"==e.status&&b(this);e=null}:e.onreadystatechange=function(){4==e.readyState&&("200"==e.status&&b(this),e=null)}),e.open("HEAD",a,
!0),e.send(null))}function e(a,e){var c,d;function k(a){var b=~~(a[0]/c)-d;a=~~(a[1]/c)+1+d;0>b&&(b=0);a>=blockTotal&&(a=blockTotal-1);return[b,a]}function f(d,n){for(;m[d[0]];)if(d[0]++,d[0]>d[1]){n&&n();return}for(;m[d[1]];)if(d[1]--,d[0]>d[1]){n&&n();return}var k=[d[0]*c,(d[1]+1)*c-1];h(a,function(a){parseInt(a.getResponseHeader("Content-Length"),10)==e&&(d[0]=0,d[1]=blockTotal-1,k[0]=0,k[1]=e-1);a={data:a.N||a.responseText,offset:k[0]};for(var b=d[0];b<=d[1];b++)m[b]=a;n&&n()},b,k,l,!!n)}var l,
n=new y("",0,e),m=[];c=c||2048;d="undefined"===typeof d?0:d;blockTotal=~~((e-1)/c)+1;for(var r in n)n.hasOwnProperty(r)&&"function"===typeof n[r]&&(this[r]=n[r]);this.a=function(a){var b;f(k([a,a]));b=m[~~(a/c)];if("string"==typeof b.data)return b.data.charCodeAt(a-b.offset)&255;if("unknown"==typeof b.data)return IEBinary_getByteAt(b.data,a-b.offset)};this.f=function(a,b){f(k(a),b)}}(function(){a(f,function(a){a=parseInt(a.getResponseHeader("Content-Length"),10)||-1;d(new e(f,a))})})()};(function(f){f.FileAPIReader=function(d,b){return function(h,c){var a=b||new FileReader;a.onload=function(a){c(new y(a.target.result))};a.readAsBinaryString(d)}}})(this);(function(f){function d(b,h,c){var a=void 0,e=void 0;function d(b){var c=~~(b[0]/a)-e;b=~~(b[1]/a)+1+e;0>c&&(c=0);b>=blockTotal&&(b=blockTotal-1);return[c,b]}function f(c,e){for(;s[c[0]];)if(c[0]++,c[0]>c[1]){e&&e();return}for(;s[c[1]];)if(c[1]--,c[0]>c[1]){e&&e();return}var d=[c[0]*a,(c[1]+1)*a-1];k.onload=function(a){a.loaded==h&&(c[0]=0,c[1]=a.total-1,d[0]=0,d[1]=h-1);a={data:a.target.result,offset:d[0]};for(var b=c[0];b<=c[1];b++)s[b]=a;e&&e()};k.readAsBinaryString(b.slice(d[0],d[1]))}var g=new y("",
0,h),s=[],k=c||new FileReader,a=a||2048,e="undefined"===typeof e?0:e;blockTotal=~~((h-1)/a)+1;for(var t in g)g.hasOwnProperty(t)&&"function"===typeof g[t]&&(this[t]=g[t]);this.a=function(b){var c;f(d([b,b]));c=s[~~(b/a)];if("string"==typeof c.data)return c.data.charCodeAt(b-c.offset)&255;if("unknown"==typeof c.data)return IEBinary_getByteAt(c.data,b-c.offset)};this.f=function(a,b){f(d(a),b)}}f.BufferedFileAPIReader=function(b,h){return function(c,a){a(new d(b,b.size,h))}}})(this);(function(f){var d=f.p={},b={},h=[0,7];d.t=function(c){delete b[c]};d.s=function(){b={}};d.B=function(c,a,e){e=e||{};(e.file?BufferedBinaryFileReader:e.dataReader||B)(e.file||c,function(d){d.f(h,function(){var h="ftypM4A"==d.c(4,7)?ID4:"ID3"==d.c(0,3)?ID3v2:ID3v1;h.m(d,function(){var g=e.tags,f=h.n(d,g),g=b[c]||{},k;for(k in f)f.hasOwnProperty(k)&&(g[k]=f[k]);b[c]=g;a&&a()})})})};d.v=function(c){if(!b[c])return null;var a={},e;for(e in b[c])b[c].hasOwnProperty(e)&&(a[e]=b[c][e]);return a};d.A=function(c,
a){return b[c]?b[c][a]:null};f.ID3=f.p;d.loadTags=d.B;d.getAllTags=d.v;d.getTag=d.A;d.clearTags=d.t;d.clearAll=d.s})(this);(function(f){var d=f.q={},b="Blues;Classic Rock;Country;Dance;Disco;Funk;Grunge;Hip-Hop;Jazz;Metal;New Age;Oldies;Other;Pop;R&B;Rap;Reggae;Rock;Techno;Industrial;Alternative;Ska;Death Metal;Pranks;Soundtrack;Euro-Techno;Ambient;Trip-Hop;Vocal;Jazz+Funk;Fusion;Trance;Classical;Instrumental;Acid;House;Game;Sound Clip;Gospel;Noise;AlternRock;Bass;Soul;Punk;Space;Meditative;Instrumental Pop;Instrumental Rock;Ethnic;Gothic;Darkwave;Techno-Industrial;Electronic;Pop-Folk;Eurodance;Dream;Southern Rock;Comedy;Cult;Gangsta;Top 40;Christian Rap;Pop/Funk;Jungle;Native American;Cabaret;New Wave;Psychadelic;Rave;Showtunes;Trailer;Lo-Fi;Tribal;Acid Punk;Acid Jazz;Polka;Retro;Musical;Rock & Roll;Hard Rock;Folk;Folk-Rock;National Folk;Swing;Fast Fusion;Bebob;Latin;Revival;Celtic;Bluegrass;Avantgarde;Gothic Rock;Progressive Rock;Psychedelic Rock;Symphonic Rock;Slow Rock;Big Band;Chorus;Easy Listening;Acoustic;Humour;Speech;Chanson;Opera;Chamber Music;Sonata;Symphony;Booty Bass;Primus;Porn Groove;Satire;Slow Jam;Club;Tango;Samba;Folklore;Ballad;Power Ballad;Rhythmic Soul;Freestyle;Duet;Punk Rock;Drum Solo;Acapella;Euro-House;Dance Hall".split(";");
d.m=function(b,c){var a=b.h();b.f([a-128-1,a],c)};d.n=function(d){var c=d.h()-128;if("TAG"==d.c(c,3)){var a=d.c(c+3,30).replace(/\0/g,""),e=d.c(c+33,30).replace(/\0/g,""),f=d.c(c+63,30).replace(/\0/g,""),p=d.c(c+93,4).replace(/\0/g,"");if(0==d.a(c+97+28))var g=d.c(c+97,28).replace(/\0/g,""),s=d.a(c+97+29);else g="",s=0;d=d.a(c+97+30);return{version:"1.1",title:a,artist:e,album:f,year:p,comment:g,track:s,genre:255>d?b[d]:""}}return{}};f.ID3v1=f.q})(this);(function(f){function d(a,b){var c=b.a(a),d=b.a(a+1),h=b.a(a+2);return b.a(a+3)&127|(h&127)<<7|(d&127)<<14|(c&127)<<21}var b=f.D={};b.b={};b.frames={BUF:"Recommended buffer size",CNT:"Play counter",COM:"Comments",CRA:"Audio encryption",CRM:"Encrypted meta frame",ETC:"Event timing codes",EQU:"Equalization",GEO:"General encapsulated object",IPL:"Involved people list",LNK:"Linked information",MCI:"Music CD Identifier",MLL:"MPEG location lookup table",PIC:"Attached picture",POP:"Popularimeter",REV:"Reverb",
RVA:"Relative volume adjustment",SLT:"Synchronized lyric/text",STC:"Synced tempo codes",TAL:"Album/Movie/Show title",TBP:"BPM (Beats Per Minute)",TCM:"Composer",TCO:"Content type",TCR:"Copyright message",TDA:"Date",TDY:"Playlist delay",TEN:"Encoded by",TFT:"File type",TIM:"Time",TKE:"Initial key",TLA:"Language(s)",TLE:"Length",TMT:"Media type",TOA:"Original artist(s)/performer(s)",TOF:"Original filename",TOL:"Original Lyricist(s)/text writer(s)",TOR:"Original release year",TOT:"Original album/Movie/Show title",
TP1:"Lead artist(s)/Lead performer(s)/Soloist(s)/Performing group",TP2:"Band/Orchestra/Accompaniment",TP3:"Conductor/Performer refinement",TP4:"Interpreted, remixed, or otherwise modified by",TPA:"Part of a set",TPB:"Publisher",TRC:"ISRC (International Standard Recording Code)",TRD:"Recording dates",TRK:"Track number/Position in set",TSI:"Size",TSS:"Software/hardware and settings used for encoding",TT1:"Content group description",TT2:"Title/Songname/Content description",TT3:"Subtitle/Description refinement",
TXT:"Lyricist/text writer",TXX:"User defined text information frame",TYE:"Year",UFI:"Unique file identifier",ULT:"Unsychronized lyric/text transcription",WAF:"Official audio file webpage",WAR:"Official artist/performer webpage",WAS:"Official audio source webpage",WCM:"Commercial information",WCP:"Copyright/Legal information",WPB:"Publishers official webpage",WXX:"User defined URL link frame",AENC:"Audio encryption",APIC:"Attached picture",COMM:"Comments",COMR:"Commercial frame",ENCR:"Encryption method registration",
EQUA:"Equalization",ETCO:"Event timing codes",GEOB:"General encapsulated object",GRID:"Group identification registration",IPLS:"Involved people list",LINK:"Linked information",MCDI:"Music CD identifier",MLLT:"MPEG location lookup table",OWNE:"Ownership frame",PRIV:"Private frame",PCNT:"Play counter",POPM:"Popularimeter",POSS:"Position synchronisation frame",RBUF:"Recommended buffer size",RVAD:"Relative volume adjustment",RVRB:"Reverb",SYLT:"Synchronized lyric/text",SYTC:"Synchronized tempo codes",
TALB:"Album/Movie/Show title",TBPM:"BPM (beats per minute)",TCOM:"Composer",TCON:"Content type",TCOP:"Copyright message",TDAT:"Date",TDLY:"Playlist delay",TENC:"Encoded by",TEXT:"Lyricist/Text writer",TFLT:"File type",TIME:"Time",TIT1:"Content group description",TIT2:"Title/songname/content description",TIT3:"Subtitle/Description refinement",TKEY:"Initial key",TLAN:"Language(s)",TLEN:"Length",TMED:"Media type",TOAL:"Original album/movie/show title",TOFN:"Original filename",TOLY:"Original lyricist(s)/text writer(s)",
TOPE:"Original artist(s)/performer(s)",TORY:"Original release year",TOWN:"File owner/licensee",TPE1:"Lead performer(s)/Soloist(s)",TPE2:"Band/orchestra/accompaniment",TPE3:"Conductor/performer refinement",TPE4:"Interpreted, remixed, or otherwise modified by",TPOS:"Part of a set",TPUB:"Publisher",TRCK:"Track number/Position in set",TRDA:"Recording dates",TRSN:"Internet radio station name",TRSO:"Internet radio station owner",TSIZ:"Size",TSRC:"ISRC (international standard recording code)",TSSE:"Software/Hardware and settings used for encoding",
TYER:"Year",TXXX:"User defined text information frame",UFID:"Unique file identifier",USER:"Terms of use",USLT:"Unsychronized lyric/text transcription",WCOM:"Commercial information",WCOP:"Copyright/Legal information",WOAF:"Official audio file webpage",WOAR:"Official artist/performer webpage",WOAS:"Official audio source webpage",WORS:"Official internet radio station homepage",WPAY:"Payment",WPUB:"Publishers official webpage",WXXX:"User defined URL link frame"};var h={title:["TIT2","TT2"],artist:["TPE1",
"TP1"],album:["TALB","TAL"],year:["TYER","TYE"],comment:["COMM","COM"],track:["TRCK","TRK"],genre:["TCON","TCO"],picture:["APIC","PIC"],lyrics:["USLT","ULT"]},c=["title","artist","album","track"];b.m=function(a,b){a.f([0,d(6,a)],b)};b.n=function(a,e){var f=0,p=a.a(f+3);if(4<p)return{version:">2.4"};var g=a.a(f+4),s=a.d(f+5,7),k=a.d(f+5,6),t=a.d(f+5,5),l=d(f+6,a),f=f+10;if(k)var n=a.i(f),f=f+(n+4);var p={version:"2."+p+"."+g,major:p,revision:g,flags:{unsynchronisation:s,extended_header:k,experimental_indicator:t},
size:l},m;if(s)m={};else{for(var l=l-10,s=a,g=e,k={},t=p.major,n=[],r=0,q;q=(g||c)[r];r++)n=n.concat(h[q]||[q]);for(g=n;f<l;){n=null;r=s;q=f;var x=null;switch(t){case 2:m=r.c(q,3);var v=r.o(q+3),w=6;break;case 3:m=r.c(q,4);v=r.i(q+4);w=10;break;case 4:m=r.c(q,4),v=d(q+4,r),w=10}if(""==m)break;f+=w+v;0>g.indexOf(m)||(2<t&&(x={message:{P:r.d(q+8,6),I:r.d(q+8,5),M:r.d(q+8,4)},k:{K:r.d(q+8+1,7),F:r.d(q+8+1,3),H:r.d(q+8+1,2),C:r.d(q+8+1,1),u:r.d(q+8+1,0)}}),q+=w,x&&x.k.u&&(d(q,r),q+=4,v-=4),x&&x.k.C||
(m in b.b?n=b.b[m]:"T"==m[0]&&(n=b.b["T*"]),n=n?n(q,v,r,x):void 0,n={id:m,size:v,description:m in b.frames?b.frames[m]:"Unknown",data:n},m in k?(k[m].id&&(k[m]=[k[m]]),k[m].push(n)):k[m]=n))}m=k}for(var z in h)if(h.hasOwnProperty(z)){a:{v=h[z];"string"==typeof v&&(v=[v]);w=0;for(f=void 0;f=v[w];w++)if(f in m){a=m[f].data;break a}a=void 0}a&&(p[z]=a)}for(var A in m)m.hasOwnProperty(A)&&(p[A]=m[A]);return p};f.ID3v2=b})(this);(function(){function f(b){var d;switch(b){case 0:d="iso-8859-1";break;case 1:d="utf-16";break;case 2:d="utf-16be";break;case 3:d="utf-8"}return d}var d="32x32 pixels 'file icon' (PNG only);Other file icon;Cover (front);Cover (back);Leaflet page;Media (e.g. lable side of CD);Lead artist/lead performer/soloist;Artist/performer;Conductor;Band/Orchestra;Composer;Lyricist/text writer;Recording Location;During recording;During performance;Movie/video screen capture;A bright coloured fish;Illustration;Band/artist logotype;Publisher/Studio logotype".split(";");
ID3v2.b.APIC=function(b,h,c,a,e){e=e||"3";a=b;var u=f(c.a(b));switch(e){case "2":var p=c.c(b+1,3);b+=4;break;case "3":case "4":p=c.e(b+1,h-(b-a),u),b+=1+p.g}e=c.a(b,1);e=d[e];u=c.e(b+1,h-(b-a),u);b+=1+u.g;return{format:p.toString(),type:e,description:u.toString(),data:c.l(b,a+h-b)}};ID3v2.b.COMM=function(b,d,c){var a=b,e=f(c.a(b)),u=c.c(b+1,3),p=c.e(b+4,d-4,e);b+=4+p.g;b=c.e(b,a+d-b,e);return{language:u,O:p.toString(),text:b.toString()}};ID3v2.b.COM=ID3v2.b.COMM;ID3v2.b.PIC=function(b,d,c,a){return ID3v2.b.APIC(b,
d,c,a,"2")};ID3v2.b.PCNT=function(b,d,c){return c.J(b)};ID3v2.b.CNT=ID3v2.b.PCNT;ID3v2.b["T*"]=function(b,d,c){var a=f(c.a(b));return c.e(b+1,d-1,a).toString()};ID3v2.b.TCON=function(b,d,c){return ID3v2.b["T*"].apply(this,arguments).replace(/^\(\d+\)/,"")};ID3v2.b.TCO=ID3v2.b.TCON;ID3v2.b.USLT=function(b,d,c){var a=b,e=f(c.a(b)),u=c.c(b+1,3),p=c.e(b+4,d-4,e);b+=4+p.g;b=c.e(b,a+d-b,e);return{language:u,G:p.toString(),L:b.toString()}};ID3v2.b.ULT=ID3v2.b.USLT})();(function(f){function d(b,a,e,f){var p=b.i(a);if(0==p)f();else{var g=b.c(a+4,4);-1<["moov","udta","meta","ilst"].indexOf(g)?("meta"==g&&(a+=4),b.f([a+8,a+8+8],function(){d(b,a+8,p-8,f)})):b.f([a+(g in h.j?0:p),a+p+8],function(){d(b,a+p,e,f)})}}function b(c,a,e,d,f){f=void 0===f?"":f+"  ";for(var g=e;g<e+d;){var s=a.i(g);if(0==s)break;var k=a.c(g+4,4);if(-1<["moov","udta","meta","ilst"].indexOf(k)){"meta"==k&&(g+=4);b(c,a,g+8,s-8,f);break}if(h.j[k]){var t=a.o(g+16+1),l=h.j[k],t=h.types[t];if("trkn"==
k)c[l[0]]=a.a(g+16+11),c.count=a.a(g+16+13);else{var k=g+16+4+4,n=s-16-4-4,m;switch(t){case "text":m=a.e(k,n,"UTF-8");break;case "uint8":m=a.w(k);break;case "jpeg":case "png":m={k:"image/"+t,data:a.l(k,n)}}c[l[0]]="comment"===l[0]?{text:m}:m}}g+=s}}var h=f.r={};h.types={0:"uint8",1:"text",13:"jpeg",14:"png",21:"uint8"};h.j={"\u00a9alb":["album"],"\u00a9art":["artist"],"\u00a9ART":["artist"],aART:["artist"],"\u00a9day":["year"],"\u00a9nam":["title"],"\u00a9gen":["genre"],trkn:["track"],"\u00a9wrt":["composer"],
"\u00a9too":["encoder"],cprt:["copyright"],covr:["picture"],"\u00a9grp":["grouping"],keyw:["keyword"],"\u00a9lyr":["lyrics"],"\u00a9cmt":["comment"],tmpo:["tempo"],cpil:["compilation"],disk:["disc"]};h.m=function(b,a){b.f([0,7],function(){d(b,0,b.h(),a)})};h.n=function(c){var a={};b(a,c,0,c.h());return a};f.ID4=f.r})(this);
