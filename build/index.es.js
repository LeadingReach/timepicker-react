import e from"@babel/runtime/helpers/slicedToArray";import*as t from"react";import"@babel/runtime/helpers/defineProperty";import n from"@babel/runtime/helpers/typeof";var r=function(e){var n=e.meridiemClass,r=e.selectedClass,a=e.children,i=e.setTimeValue,o=e.value;return t.createElement("li",{className:"".concat(n," ").concat(r),onClick:function(){i(o)}},a)},a={hours:["01","02","03","04","05","06","07","08","09","10","11","12"],minutes:["00","30"],meridiem:["AM","PM"]},i=function(e){var n=e.setTimeValue,i=e.timeValue;return t.createElement("ul",{className:"ui-timepicker-list"},a.meridiem.map((function(e){return a.hours.map((function(o){return a.minutes.map((function(a,u){return t.createElement(r,{key:u,meridiemClass:"ui-timepicker-".concat("AM"===e?"am":"pm"),selectedClass:"".concat(i==="".concat(o,":").concat(a," ").concat(e)&&"ui-timepicker-selected"),value:"".concat(o,":").concat(a," ").concat(e),setTimeValue:n},o,":",a," ",e)}))}))})))},o=function(e){var n=e.err,r=e.formatTimeValue,a=e.setShowErr,i=e.setErr,o=e.showErr,u=e.open,l=e.value,c=e.setTimeValue,s=e.setOpen;t.useEffect((function(){Object.values(n).length?a(!0):a(!1)}),[n]),t.useEffect((function(){!l&&i({})}),[l]);return t.createElement("div",{className:"input-control"},t.createElement("input",{className:"\n        ui-timepicker-input \n        ".concat(Object.values(n).length&&"time-input-err"),type:"text",value:l||"",onBlur:function(e){var t=e.target.value;r(t)},onChange:function(e){var t=e.target.value;c(t)},onClick:function(){s(!u)}}),o&&Object.values(n).map((function(e,n){return t.createElement("span",{className:e,key:n},e)})))},u=function(e){var n=e.children;return t.createElement("div",{className:"ui-timepicker-wrapper ui-timepicker-positioned-top",tabIndex:"-1"},n)};function l(e,t){return 86400==e&&t.show2400?e:e%86400}var c={appendTo:"body",className:null,closeOnWindowScroll:!1,disableTextInput:!1,disableTimeRanges:[],disableTouchKeyboard:!1,durationTime:null,forceRoundTime:!1,lang:{AM:"AM",PM:"PM"},listWidth:null,maxTime:null,minTime:null,noneOption:!1,orientation:"l",roundingFunction:function(e,t){if(null===e)return null;for(var n=0,r=0;r<e;)n++,r+=60*t.step(n);var a=r-60*t.step(n-1);return l(e-a<r-e?a:r,t)},scrollDefault:null,selectOnBlur:!1,show2400:!1,showDuration:!1,showOn:["click","focus"],showOnFocus:!0,step:30,stopScrollPropagation:!1,timeFormat:"g:i A",typeaheadHighlight:!0,useSelect:!1,wrapHours:!0};function s(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){u=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(u)throw i}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=function(e,t){return"number"==typeof e?e:"string"==typeof e?p(e,t):"object"===n(e)&&e instanceof Date?3600*e.getHours()+60*e.getMinutes()+e.getSeconds():"function"==typeof e?e():null},p=function(e,t){if(""===e||null==e||void 0===e)return null;if("now"===e)return f(new Date,t);if("string"!=typeof e)return e;var n=e.toLowerCase().replace(/[\s.]/g,""),r=void 0;"a"!==n.slice(-1)&&"p"!==n.slice(-1)||(r="".concat(n.slice(-1),"m"));var a=n.match(/\W/)?/^(([^0-9]*))?([0-9]?[0-9])(\W+([0-5][0-9]?))?(\W+([0-5][0-9]))?(([^0-9]*))$/:/^(([^0-9]*))?([0-9]?[0-9])(([0-5][0-9]))?(([0-5][0-9]))?(([^0-9]*))$/,i=n.match(a);if(!i)return null;var o=parseInt(Number(i[3]),10),u=r||i[8],l=o,c=Number(i[5])||0,s=Number(i[7])||0;if(u||2!==i[3].length||"0"!==i[3][0]||(u="am"),o<=12&&u){var m=(u=u.trim())===t.lang.pm||u===t.lang.PM.toLowerCase();l=12===o?m?12:0:o+(m?12:0)}else{if(3600*o+60*c+s>=86400+(t.show2400?1:0)){if(!1===t.wrapHours)return null;l=o%24}}var p=3600*l+60*c+s;if(o<12&&!u&&t._twelveHourTime&&t.scrollDefault()){var v=p-t.scrollDefault();v<0&&v>=-43200&&(p=(p+43200)%86400)}return p},v=function(e,t,n,r,a){var i={errors:n,timeValue:e,origin:r},o=f(e,t);if(console.log({timeValue:e,seconds:o}),null==o)return n.timeFormatError="Please enter a valid time.",i;var u=!1;null!=t.minTime&&null!=t.maxTime&&(o<t.minTime()||o>t.maxTime())&&(u=!0);var l,c=s(t.disableTimeRanges);try{for(c.s();!(l=c.n()).done;){var m=l.value;if(o>=m[0]&&o<m[1]){u=!0;break}}}catch(e){c.e(e)}finally{c.f()}if(t.forceRoundTime){var p=t.roundingFunction(o,t);p!==o&&(o=p,r=null)}return i.timeValue=function(e,t){if("number"!=typeof e)return null;var n=parseInt(e%60,10),r=parseInt(e/60%60,10),a=parseInt(e/3600%24,10),i=new Date(1970,0,2,a,r,n,0);if(isNaN(i.getTime()))return null;if("function"==typeof t.timeFormat)return t.timeFormat(i);var o={a:function(){return i.getHours()>11?t.lang.pm:t.lang.am},A:function(){return i.getHours()>11?t.lang.PM:t.lang.AM},g:function(){var e=i.getHours()%12;return 0===e?"12":e},G:function(){var n=i.getHours();return 86400===e&&(n=t.show2400?24:0),n},h:function(){var e=i.getHours()%12;return 0!==e&&e<10&&(e="0".concat(e)),0===e?"12":e},H:function(){var n=i.getHours();return 86400===e&&(n=t.show2400?24:0),n>9?n:"0".concat(n)},i:function(){var e=i.getMinutes();return e>9?e:"0".concat(e)},s:function(){var e=i.getSeconds();return e>9?e:"0".concat(e)},"\\":function(){return""}},u=t.timeFormat.split("").reduce((function(e,t){return o[t]?e+o[t]():e+t}),"");return console.log({formattedOutput:u}),u}(o,t),u&&(n.timeRangeError="Please select a time within the time range."),i},d=function(n){var r=n.onChange,a=n.value,l=void 0===a?null:a,s=t.useState(l),m=e(s,2),f=m[0],p=m[1],d=t.useState(!1),g=e(d,2),h=g[0],b=g[1],y=t.useState(!1),w=e(y,2),T=w[0],E=w[1],S=t.useState({}),k=e(S,2),A=k[0],V=k[1];t.useEffect((function(){r&&r(f)}),[f]);var M=function(e){var t=v(e,c,{}),n=t.timeValue,r=t.errors;!e&&V(r),p(n||null)};return t.createElement("div",null,t.createElement(o,{open:h,value:f,setTimeValue:p,setOpen:b,showErr:T,setShowErr:E,setErr:V,err:A,formatTimeValue:M}),t.createElement("div",{className:"ui-list-mask ".concat(h&&"visible"),onClick:function(){b(!1),M(f)}}),h&&t.createElement(u,null,t.createElement(i,{setTimeValue:p,timeValue:f})))};export{d as TimePicker};
//# sourceMappingURL=index.es.js.map
