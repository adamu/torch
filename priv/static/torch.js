!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};
/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/Pikaday/Pikaday
 */!function(e,n){var a;try{a=$d2b378008f565d8d$import$a2cb963221bbaab7}catch(e){}t=function(e){"use strict";var t="function"==typeof e,n=!!window.addEventListener,a=window.document,i=window.setTimeout,s=function(e,t,a,i){n?e.addEventListener(t,a,!!i):e.attachEvent("on"+t,a)},o=function(e,t,a,i){n?e.removeEventListener(t,a,!!i):e.detachEvent("on"+t,a)},r=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},l=function(e,t){return-1!==(" "+e.className+" ").indexOf(" "+t+" ")},d=function(e,t){l(e,t)||(e.className=""===e.className?t:e.className+" "+t)},h=function(e,t){e.className=r((" "+e.className+" ").replace(" "+t+" "," "))},u=function(e){return/Array/.test(Object.prototype.toString.call(e))},c=function(e){return/Date/.test(Object.prototype.toString.call(e))&&!isNaN(e.getTime())},f=function(e){var t=e.getDay();return 0===t||6===t},g=function(e){return e%4==0&&e%100!=0||e%400==0},m=function(e,t){return[31,g(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},p=function(e){c(e)&&e.setHours(0,0,0,0)},y=function(e,t){return e.getTime()===t.getTime()},b=function(e,t,n){var a,i;for(a in t)(i=void 0!==e[a])&&"object"==typeof t[a]&&null!==t[a]&&void 0===t[a].nodeName?c(t[a])?n&&(e[a]=new Date(t[a].getTime())):u(t[a])?n&&(e[a]=t[a].slice(0)):e[a]=b({},t[a],n):!n&&i||(e[a]=t[a]);return e},v=function(e,t,n){var i;a.createEvent?((i=a.createEvent("HTMLEvents")).initEvent(t,!0,!1),i=b(i,n),e.dispatchEvent(i)):a.createEventObject&&(i=a.createEventObject(),i=b(i,n),e.fireEvent("on"+t,i))},D=function(e){return e.month<0&&(e.year-=Math.ceil(Math.abs(e.month)/12),e.month+=12),e.month>11&&(e.year+=Math.floor(Math.abs(e.month)/12),e.month-=12),e},_={field:null,bound:void 0,ariaLabel:"Use the arrow keys to pick a date",position:"bottom left",reposition:!0,format:"YYYY-MM-DD",toString:null,parse:null,defaultDate:null,setDefaultDate:!1,firstDay:0,firstWeekOfYearMinDays:4,formatStrict:!1,minDate:null,maxDate:null,yearRange:10,showWeekNumber:!1,pickWholeWeek:!1,minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,startRange:null,endRange:null,isRTL:!1,yearSuffix:"",showMonthAfterYear:!1,showDaysInNextAndPreviousMonths:!1,enableSelectionDaysInNextAndPreviousMonths:!1,numberOfMonths:1,mainCalendar:"left",container:void 0,blurFieldOnSelect:!0,i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},theme:null,events:[],onSelect:null,onOpen:null,onClose:null,onDraw:null,keyboardInput:!0},w=function(e,t,n){for(t+=e.firstDay;t>=7;)t-=7;return n?e.i18n.weekdaysShort[t]:e.i18n.weekdays[t]},k=function(e){var t=[],n="false";if(e.isEmpty){if(!e.showDaysInNextAndPreviousMonths)return'<td class="is-empty"></td>';t.push("is-outside-current-month"),e.enableSelectionDaysInNextAndPreviousMonths||t.push("is-selection-disabled")}return e.isDisabled&&t.push("is-disabled"),e.isToday&&t.push("is-today"),e.isSelected&&(t.push("is-selected"),n="true"),e.hasEvent&&t.push("has-event"),e.isInRange&&t.push("is-inrange"),e.isStartRange&&t.push("is-startrange"),e.isEndRange&&t.push("is-endrange"),'<td data-day="'+e.day+'" class="'+t.join(" ")+'" aria-selected="'+n+'"><button class="pika-button pika-day" type="button" data-pika-year="'+e.year+'" data-pika-month="'+e.month+'" data-pika-day="'+e.day+'">'+e.day+"</button></td>"},M=function(e,t){e.setHours(0,0,0,0);var n=e.getDate(),a=e.getDay(),i=t,s=i-1,o=7,r=function(e){return(e+o-1)%o};e.setDate(n+s-r(a));var l=new Date(e.getFullYear(),0,i),d=864e5,h=(e.getTime()-l.getTime())/d;return 1+Math.round((h-s+r(l.getDay()))/o)},x=function(n,a,i,s){var o=new Date(i,a,n);return'<td class="pika-week">'+(t?e(o).isoWeek():M(o,s))+"</td>"},R=function(e,t,n,a){return'<tr class="pika-row'+(n?" pick-whole-week":"")+(a?" is-selected":"")+'">'+(t?e.reverse():e).join("")+"</tr>"},S=function(e){return"<tbody>"+e.join("")+"</tbody>"},E=function(e){var t,n=[];for(e.showWeekNumber&&n.push("<th></th>"),t=0;t<7;t++)n.push('<th scope="col"><abbr title="'+w(e,t)+'">'+w(e,t,!0)+"</abbr></th>");return"<thead><tr>"+(e.isRTL?n.reverse():n).join("")+"</tr></thead>"},N=function(e,t,n,a,i,s){var o,r,l,d,h,c=e._o,f=n===c.minYear,g=n===c.maxYear,m='<div id="'+s+'" class="pika-title" role="heading" aria-live="assertive">',p=!0,y=!0;for(l=[],o=0;o<12;o++)l.push('<option value="'+(n===i?o-t:12+o-t)+'"'+(o===a?' selected="selected"':"")+(f&&o<c.minMonth||g&&o>c.maxMonth?' disabled="disabled"':"")+">"+c.i18n.months[o]+"</option>");for(d='<div class="pika-label">'+c.i18n.months[a]+'<select class="pika-select pika-select-month" tabindex="-1">'+l.join("")+"</select></div>",u(c.yearRange)?(o=c.yearRange[0],r=c.yearRange[1]+1):(o=n-c.yearRange,r=1+n+c.yearRange),l=[];o<r&&o<=c.maxYear;o++)o>=c.minYear&&l.push('<option value="'+o+'"'+(o===n?' selected="selected"':"")+">"+o+"</option>");return h='<div class="pika-label">'+n+c.yearSuffix+'<select class="pika-select pika-select-year" tabindex="-1">'+l.join("")+"</select></div>",c.showMonthAfterYear?m+=h+d:m+=d+h,f&&(0===a||c.minMonth>=a)&&(p=!1),g&&(11===a||c.maxMonth<=a)&&(y=!1),0===t&&(m+='<button class="pika-prev'+(p?"":" is-disabled")+'" type="button">'+c.i18n.previousMonth+"</button>"),t===e._o.numberOfMonths-1&&(m+='<button class="pika-next'+(y?"":" is-disabled")+'" type="button">'+c.i18n.nextMonth+"</button>"),m+"</div>"},C=function(e,t,n){return'<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="'+n+'">'+E(e)+S(t)+"</table>"},A=function(o){var r=this,d=r.config(o);r._onMouseDown=function(e){if(r._v){var t=(e=e||window.event).target||e.srcElement;if(t)if(l(t,"is-disabled")||(!l(t,"pika-button")||l(t,"is-empty")||l(t.parentNode,"is-disabled")?l(t,"pika-prev")?r.prevMonth():l(t,"pika-next")&&r.nextMonth():(r.setDate(new Date(t.getAttribute("data-pika-year"),t.getAttribute("data-pika-month"),t.getAttribute("data-pika-day"))),d.bound&&i((function(){r.hide(),d.blurFieldOnSelect&&d.field&&d.field.blur()}),100))),l(t,"pika-select"))r._c=!0;else{if(!e.preventDefault)return e.returnValue=!1,!1;e.preventDefault()}}},r._onChange=function(e){var t=(e=e||window.event).target||e.srcElement;t&&(l(t,"pika-select-month")?r.gotoMonth(t.value):l(t,"pika-select-year")&&r.gotoYear(t.value))},r._onKeyChange=function(e){if(e=e||window.event,r.isVisible())switch(e.keyCode){case 13:case 27:d.field&&d.field.blur();break;case 37:r.adjustDate("subtract",1);break;case 38:r.adjustDate("subtract",7);break;case 39:r.adjustDate("add",1);break;case 40:r.adjustDate("add",7);break;case 8:case 46:r.setDate(null)}},r._parseFieldValue=function(){if(d.parse)return d.parse(d.field.value,d.format);if(t){var n=e(d.field.value,d.format,d.formatStrict);return n&&n.isValid()?n.toDate():null}return new Date(Date.parse(d.field.value))},r._onInputChange=function(e){var t;e.firedBy!==r&&(t=r._parseFieldValue(),c(t)&&r.setDate(t),r._v||r.show())},r._onInputFocus=function(){r.show()},r._onInputClick=function(){r.show()},r._onInputBlur=function(){var e=a.activeElement;do{if(l(e,"pika-single"))return}while(e=e.parentNode);r._c||(r._b=i((function(){r.hide()}),50)),r._c=!1},r._onClick=function(e){var t=(e=e||window.event).target||e.srcElement,a=t;if(t){!n&&l(t,"pika-select")&&(t.onchange||(t.setAttribute("onchange","return;"),s(t,"change",r._onChange)));do{if(l(a,"pika-single")||a===d.trigger)return}while(a=a.parentNode);r._v&&t!==d.trigger&&a!==d.trigger&&r.hide()}},r.el=a.createElement("div"),r.el.className="pika-single"+(d.isRTL?" is-rtl":"")+(d.theme?" "+d.theme:""),s(r.el,"mousedown",r._onMouseDown,!0),s(r.el,"touchend",r._onMouseDown,!0),s(r.el,"change",r._onChange),d.keyboardInput&&s(a,"keydown",r._onKeyChange),d.field&&(d.container?d.container.appendChild(r.el):d.bound?a.body.appendChild(r.el):d.field.parentNode.insertBefore(r.el,d.field.nextSibling),s(d.field,"change",r._onInputChange),d.defaultDate||(d.defaultDate=r._parseFieldValue(),d.setDefaultDate=!0));var h=d.defaultDate;c(h)?d.setDefaultDate?r.setDate(h,!0):r.gotoDate(h):r.gotoDate(new Date),d.bound?(this.hide(),r.el.className+=" is-bound",s(d.trigger,"click",r._onInputClick),s(d.trigger,"focus",r._onInputFocus),s(d.trigger,"blur",r._onInputBlur)):this.show()};return A.prototype={config:function(e){this._o||(this._o=b({},_,!0));var t=b(this._o,e,!0);t.isRTL=!!t.isRTL,t.field=t.field&&t.field.nodeName?t.field:null,t.theme="string"==typeof t.theme&&t.theme?t.theme:null,t.bound=!!(void 0!==t.bound?t.field&&t.bound:t.field),t.trigger=t.trigger&&t.trigger.nodeName?t.trigger:t.field,t.disableWeekends=!!t.disableWeekends,t.disableDayFn="function"==typeof t.disableDayFn?t.disableDayFn:null;var n=parseInt(t.numberOfMonths,10)||1;if(t.numberOfMonths=n>4?4:n,c(t.minDate)||(t.minDate=!1),c(t.maxDate)||(t.maxDate=!1),t.minDate&&t.maxDate&&t.maxDate<t.minDate&&(t.maxDate=t.minDate=!1),t.minDate&&this.setMinDate(t.minDate),t.maxDate&&this.setMaxDate(t.maxDate),u(t.yearRange)){var a=(new Date).getFullYear()-10;t.yearRange[0]=parseInt(t.yearRange[0],10)||a,t.yearRange[1]=parseInt(t.yearRange[1],10)||a}else t.yearRange=Math.abs(parseInt(t.yearRange,10))||_.yearRange,t.yearRange>100&&(t.yearRange=100);return t},toString:function(n){return n=n||this._o.format,c(this._d)?this._o.toString?this._o.toString(this._d,n):t?e(this._d).format(n):this._d.toDateString():""},getMoment:function(){return t?e(this._d):null},setMoment:function(n,a){t&&e.isMoment(n)&&this.setDate(n.toDate(),a)},getDate:function(){return c(this._d)?new Date(this._d.getTime()):null},setDate:function(e,t){if(!e)return this._d=null,this._o.field&&(this._o.field.value="",v(this._o.field,"change",{firedBy:this})),this.draw();if("string"==typeof e&&(e=new Date(Date.parse(e))),c(e)){var n=this._o.minDate,a=this._o.maxDate;c(n)&&e<n?e=n:c(a)&&e>a&&(e=a),this._d=new Date(e.getTime()),p(this._d),this.gotoDate(this._d),this._o.field&&(this._o.field.value=this.toString(),v(this._o.field,"change",{firedBy:this})),t||"function"!=typeof this._o.onSelect||this._o.onSelect.call(this,this.getDate())}},clear:function(){this.setDate(null)},gotoDate:function(e){var t=!0;if(c(e)){if(this.calendars){var n=new Date(this.calendars[0].year,this.calendars[0].month,1),a=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),i=e.getTime();a.setMonth(a.getMonth()+1),a.setDate(a.getDate()-1),t=i<n.getTime()||a.getTime()<i}t&&(this.calendars=[{month:e.getMonth(),year:e.getFullYear()}],"right"===this._o.mainCalendar&&(this.calendars[0].month+=1-this._o.numberOfMonths)),this.adjustCalendars()}},adjustDate:function(e,t){var n,a=this.getDate()||new Date,i=864e5*parseInt(t);"add"===e?n=new Date(a.valueOf()+i):"subtract"===e&&(n=new Date(a.valueOf()-i)),this.setDate(n)},adjustCalendars:function(){this.calendars[0]=D(this.calendars[0]);for(var e=1;e<this._o.numberOfMonths;e++)this.calendars[e]=D({month:this.calendars[0].month+e,year:this.calendars[0].year});this.draw()},gotoToday:function(){this.gotoDate(new Date)},gotoMonth:function(e){isNaN(e)||(this.calendars[0].month=parseInt(e,10),this.adjustCalendars())},nextMonth:function(){this.calendars[0].month++,this.adjustCalendars()},prevMonth:function(){this.calendars[0].month--,this.adjustCalendars()},gotoYear:function(e){isNaN(e)||(this.calendars[0].year=parseInt(e,10),this.adjustCalendars())},setMinDate:function(e){e instanceof Date?(p(e),this._o.minDate=e,this._o.minYear=e.getFullYear(),this._o.minMonth=e.getMonth()):(this._o.minDate=_.minDate,this._o.minYear=_.minYear,this._o.minMonth=_.minMonth,this._o.startRange=_.startRange),this.draw()},setMaxDate:function(e){e instanceof Date?(p(e),this._o.maxDate=e,this._o.maxYear=e.getFullYear(),this._o.maxMonth=e.getMonth()):(this._o.maxDate=_.maxDate,this._o.maxYear=_.maxYear,this._o.maxMonth=_.maxMonth,this._o.endRange=_.endRange),this.draw()},setStartRange:function(e){this._o.startRange=e},setEndRange:function(e){this._o.endRange=e},draw:function(e){if(this._v||e){var t,n=this._o,a=n.minYear,s=n.maxYear,o=n.minMonth,r=n.maxMonth,l="";this._y<=a&&(this._y=a,!isNaN(o)&&this._m<o&&(this._m=o)),this._y>=s&&(this._y=s,!isNaN(r)&&this._m>r&&(this._m=r));for(var d=0;d<n.numberOfMonths;d++)t="pika-title-"+Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,2),l+='<div class="pika-lendar">'+N(this,d,this.calendars[d].year,this.calendars[d].month,this.calendars[0].year,t)+this.render(this.calendars[d].year,this.calendars[d].month,t)+"</div>";this.el.innerHTML=l,n.bound&&"hidden"!==n.field.type&&i((function(){n.trigger.focus()}),1),"function"==typeof this._o.onDraw&&this._o.onDraw(this),n.bound&&n.field.setAttribute("aria-label",n.ariaLabel)}},adjustPosition:function(){var e,t,n,i,s,o,r,l,u,c,f,g;if(!this._o.container){if(this.el.style.position="absolute",t=e=this._o.trigger,n=this.el.offsetWidth,i=this.el.offsetHeight,s=window.innerWidth||a.documentElement.clientWidth,o=window.innerHeight||a.documentElement.clientHeight,r=window.pageYOffset||a.body.scrollTop||a.documentElement.scrollTop,f=!0,g=!0,"function"==typeof e.getBoundingClientRect)l=(c=e.getBoundingClientRect()).left+window.pageXOffset,u=c.bottom+window.pageYOffset;else for(l=t.offsetLeft,u=t.offsetTop+t.offsetHeight;t=t.offsetParent;)l+=t.offsetLeft,u+=t.offsetTop;(this._o.reposition&&l+n>s||this._o.position.indexOf("right")>-1&&l-n+e.offsetWidth>0)&&(l=l-n+e.offsetWidth,f=!1),(this._o.reposition&&u+i>o+r||this._o.position.indexOf("top")>-1&&u-i-e.offsetHeight>0)&&(u=u-i-e.offsetHeight,g=!1),this.el.style.left=l+"px",this.el.style.top=u+"px",d(this.el,f?"left-aligned":"right-aligned"),d(this.el,g?"bottom-aligned":"top-aligned"),h(this.el,f?"right-aligned":"left-aligned"),h(this.el,g?"top-aligned":"bottom-aligned")}},render:function(e,t,n){var a=this._o,i=new Date,s=m(e,t),o=new Date(e,t,1).getDay(),r=[],l=[];p(i),a.firstDay>0&&(o-=a.firstDay)<0&&(o+=7);for(var d=0===t?11:t-1,h=11===t?0:t+1,u=0===t?e-1:e,g=11===t?e+1:e,b=m(u,d),v=s+o,D=v;D>7;)D-=7;v+=7-D;for(var _=!1,w=0,M=0;w<v;w++){var S=new Date(e,t,w-o+1),E=!!c(this._d)&&y(S,this._d),N=y(S,i),A=-1!==a.events.indexOf(S.toDateString()),I=w<o||w>=s+o,T=w-o+1,Y=t,O=e,j=a.startRange&&y(a.startRange,S),L=a.endRange&&y(a.endRange,S),W=a.startRange&&a.endRange&&a.startRange<S&&S<a.endRange;I&&(w<o?(T=b+T,Y=d,O=u):(T-=s,Y=h,O=g));var F={day:T,month:Y,year:O,hasEvent:A,isSelected:E,isToday:N,isDisabled:a.minDate&&S<a.minDate||a.maxDate&&S>a.maxDate||a.disableWeekends&&f(S)||a.disableDayFn&&a.disableDayFn(S),isEmpty:I,isStartRange:j,isEndRange:L,isInRange:W,showDaysInNextAndPreviousMonths:a.showDaysInNextAndPreviousMonths,enableSelectionDaysInNextAndPreviousMonths:a.enableSelectionDaysInNextAndPreviousMonths};a.pickWholeWeek&&E&&(_=!0),l.push(k(F)),7==++M&&(a.showWeekNumber&&l.unshift(x(w-o,t,e,a.firstWeekOfYearMinDays)),r.push(R(l,a.isRTL,a.pickWholeWeek,_)),l=[],M=0,_=!1)}return C(a,r,n)},isVisible:function(){return this._v},show:function(){this.isVisible()||(this._v=!0,this.draw(),h(this.el,"is-hidden"),this._o.bound&&(s(a,"click",this._onClick),this.adjustPosition()),"function"==typeof this._o.onOpen&&this._o.onOpen.call(this))},hide:function(){var e=this._v;!1!==e&&(this._o.bound&&o(a,"click",this._onClick),this._o.container||(this.el.style.position="static",this.el.style.left="auto",this.el.style.top="auto"),d(this.el,"is-hidden"),this._v=!1,void 0!==e&&"function"==typeof this._o.onClose&&this._o.onClose.call(this))},destroy:function(){var e=this._o;this.hide(),o(this.el,"mousedown",this._onMouseDown,!0),o(this.el,"touchend",this._onMouseDown,!0),o(this.el,"change",this._onChange),e.keyboardInput&&o(a,"keydown",this._onKeyChange),e.field&&(o(e.field,"change",this._onInputChange),e.bound&&(o(e.trigger,"click",this._onInputClick),o(e.trigger,"focus",this._onInputFocus),o(e.trigger,"blur",this._onInputBlur))),this.el.parentNode&&this.el.parentNode.removeChild(this.el)}},A}(a)}(),function(){function e(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function t(t){var n=t.getAttribute("data-confirm");if(n&&!window.confirm(n))return;const a=e("_method",t.getAttribute("data-method")),i=e("_csrf_token",t.getAttribute("data-csrf")),s=document.createElement("form");s.method="get"===t.getAttribute("data-method")?"get":"post",s.action=t.getAttribute("data-to"),s.style.display="hidden",s.appendChild(i),s.appendChild(a),document.body.appendChild(s),s.submit()}window.addEventListener("click",(function(e){for(var n=e.target;n&&n.getAttribute;){if(n.getAttribute("data-method"))return t(n),e.preventDefault(),!1;n=n.parentNode}}),!1)}(),window.onload=()=>{const n=Array.prototype.slice;n.call(document.querySelectorAll(".torch-nav a"),0).forEach((e=>{const t=window.location.href,n=new URL(e.getAttribute("href"),document.baseURI).href;t.startsWith(n)&&e.classList.add("active")})),n.call(document.querySelectorAll("button.torch-flash-close"),0).forEach((e=>{e.addEventListener("click",(function(){const t=e.closest(".torch-flash");t.parentNode.removeChild(t)}))}));const a=document.querySelector("form#torch-filters-form");if(!a)return;a.addEventListener("submit",(function(e){e.preventDefault();let t=!0;n.call(this.querySelectorAll(".field"),0).forEach((e=>{const n=e.getElementsByTagName("label")[0].textContent,a=e.getElementsByClassName("start")[0],i=e.getElementsByClassName("end")[0];a&&i&&(""===a.value&&""!==i.value?(window.alert(`Please select a start date for the ${n} field`),t=!1):""===i.value&&""!==a.value&&(window.alert(`Please select an end at date for the ${n} field`),t=!1))})),t&&(n.call(this.querySelectorAll("input, select"),0).forEach((e=>{""===e.value&&(e.disabled=!0)})),e.target.submit())})),n.call(document.querySelectorAll("select.filter-type"),0).forEach((e=>{e.addEventListener("change",(e=>{e.target.nextElementSibling.name=e.target.value}))}));const i=e=>e.toLocaleString("en-us",{year:"numeric",month:"2-digit",day:"2-digit"}).replace(/(\d+)\/(\d+)\/(\d+)/,"$3-$1-$2"),s=e=>{const t=e.split("-");if(3===t.length)return new Date(t[0],t[1]-1,t[2])};n.call(document.querySelectorAll(".datepicker"),0).forEach((n=>{const a=s(n.value)||new Date;new(e(t))({field:n,toString:e=>i(e),onSelect:e=>n.value=i(e),defaultDate:a,parse:s,theme:"torch-datepicker"})})),n.call(document.querySelectorAll(".torch-flash-close"),0).forEach((e=>{e.addEventListener("click",(function(t){let n=e;for(;(n=n.parentElement)&&!(n.matches||n.matchesSelector).call(n,"torch-flash");)n.parentNode.removeChild(n)}))}))}}();
//# sourceMappingURL=torch.js.map
