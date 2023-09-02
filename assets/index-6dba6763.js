import{s as b,j as n,a as I,_,b as L,u as X,c as R,H as E,t as Y}from"./index-72c1e717.js";import{u as W,a as H}from"./index.esm-04db7c21.js";import{G as q}from"./index-da42693c.js";import{u as z}from"./use-app-selector-5837f077.js";import{H as V}from"./index-b92077b1.js";b.div`
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
  padding: 30px 20px;
  border-radius: 10px;
  width: 500px;
`;b.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
`;b.h3`
  font-size: 22px;
  text-align: center;
  margin-bottom: 10px;
`;const M=b.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    height: 50px;
    border-radius: 8px;
    padding: 10px;
    color: #000;
  }

  textarea {
    border-radius: 8px;
    padding: 10px;
    color: #000;
  }
`;b.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;const J=({postId:e})=>{const a=W(),{register:t,handleSubmit:r,reset:i,formState:{errors:o}}=H(),s=u=>{a(I({postId:e,comment:u})),_.success("Comment added successfully"),i()};return n.jsxs("div",{style:{width:"100%"},children:[n.jsx("h2",{className:"mb-4",children:"افزودن دیدگاه"}),n.jsxs("form",{onSubmit:r(s),children:[n.jsxs(M,{children:[n.jsx("label",{htmlFor:"name",children:"نام"}),n.jsx("input",{type:"text",id:"name",...t("name",{required:!0})}),o.name&&n.jsx("p",{children:"این فیلد اجباری است"})]}),n.jsxs(M,{className:"mt-3",children:[n.jsx("label",{htmlFor:"email",children:"ایمیل"}),n.jsx("input",{type:"email",id:"email",...t("email",{required:!0})}),o.email&&n.jsx("p",{children:"این فیلد اجباری است"})]}),n.jsxs(M,{className:"mt-3",children:[n.jsx("label",{htmlFor:"content",children:"متن دیدگاه"}),n.jsx("textarea",{id:"content",rows:5,...t("content",{required:!0})}),o.email&&n.jsx("p",{children:"این فیلد اجباری است"})]}),n.jsx(q,{size:"20px"}),n.jsx("button",{type:"submit",className:"button",children:"ارسال"})]})]})};function f(e,a){if(a.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+a.length+" present")}function d(e){f(1,arguments);var a=Object.prototype.toString.call(e);return e instanceof Date||L(e)==="object"&&a==="[object Date]"?new Date(e.getTime()):typeof e=="number"||a==="[object Number]"?new Date(e):((typeof e=="string"||a==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}var U={};function $(){return U}function P(e){var a=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return a.setUTCFullYear(e.getFullYear()),e.getTime()-a.getTime()}function y(e,a){f(2,arguments);var t=d(e),r=d(a),i=t.getTime()-r.getTime();return i<0?-1:i>0?1:i}function Q(e,a){f(2,arguments);var t=d(e),r=d(a),i=t.getFullYear()-r.getFullYear(),o=t.getMonth()-r.getMonth();return i*12+o}function B(e,a){return f(2,arguments),d(e).getTime()-d(a).getTime()}var S={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(a){return a<0?Math.ceil(a):Math.floor(a)}},G="trunc";function K(e){return e?S[e]:S[G]}function Z(e){f(1,arguments);var a=d(e);return a.setHours(23,59,59,999),a}function ee(e){f(1,arguments);var a=d(e),t=a.getMonth();return a.setFullYear(a.getFullYear(),t+1,0),a.setHours(23,59,59,999),a}function te(e){f(1,arguments);var a=d(e);return Z(a).getTime()===ee(a).getTime()}function ae(e,a){f(2,arguments);var t=d(e),r=d(a),i=y(t,r),o=Math.abs(Q(t,r)),s;if(o<1)s=0;else{t.getMonth()===1&&t.getDate()>27&&t.setDate(30),t.setMonth(t.getMonth()-i*o);var u=y(t,r)===-i;te(d(e))&&o===1&&y(e,r)===1&&(u=!1),s=i*(o-Number(u))}return s===0?0:s}function ne(e,a,t){f(2,arguments);var r=B(e,a)/1e3;return K(t==null?void 0:t.roundingMethod)(r)}var re={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ie=function(a,t,r){var i,o=re[a];return typeof o=="string"?i=o:t===1?i=o.one:i=o.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};const se=ie;function j(e){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.width?String(a.width):e.defaultWidth,r=e.formats[t]||e.formats[e.defaultWidth];return r}}var oe={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},le={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ue={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},de={date:j({formats:oe,defaultWidth:"full"}),time:j({formats:le,defaultWidth:"full"}),dateTime:j({formats:ue,defaultWidth:"full"})};const me=de;var ce={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},he=function(a,t,r,i){return ce[a]};const fe=he;function p(e){return function(a,t){var r=t!=null&&t.context?String(t.context):"standalone",i;if(r==="formatting"&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,s=t!=null&&t.width?String(t.width):o;i=e.formattingValues[s]||e.formattingValues[o]}else{var u=e.defaultWidth,l=t!=null&&t.width?String(t.width):e.defaultWidth;i=e.values[l]||e.values[u]}var c=e.argumentCallback?e.argumentCallback(a):a;return i[c]}}var ve={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ge={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},pe={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},xe={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},be={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ye={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},we=function(a,t){var r=Number(a),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Me={ordinalNumber:we,era:p({values:ve,defaultWidth:"wide"}),quarter:p({values:ge,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:p({values:pe,defaultWidth:"wide"}),day:p({values:xe,defaultWidth:"wide"}),dayPeriod:p({values:be,defaultWidth:"wide",formattingValues:ye,defaultFormattingWidth:"wide"})};const je=Me;function x(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=a.match(i);if(!o)return null;var s=o[0],u=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(u)?Ne(u,function(h){return h.test(s)}):De(u,function(h){return h.test(s)}),c;c=e.valueCallback?e.valueCallback(l):l,c=t.valueCallback?t.valueCallback(c):c;var v=a.slice(s.length);return{value:c,rest:v}}}function De(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}function Ne(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}function Pe(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.match(e.matchPattern);if(!r)return null;var i=r[0],o=a.match(e.parsePattern);if(!o)return null;var s=e.valueCallback?e.valueCallback(o[0]):o[0];s=t.valueCallback?t.valueCallback(s):s;var u=a.slice(i.length);return{value:s,rest:u}}}var Se=/^(\d+)(th|st|nd|rd)?/i,Te=/\d+/i,We={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ke={any:[/^b/i,/^(a|c)/i]},Ce={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Fe={any:[/1/i,/2/i,/3/i,/4/i]},Ae={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Oe={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ie={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},_e={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Le={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Xe={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Re={ordinalNumber:Pe({matchPattern:Se,parsePattern:Te,valueCallback:function(a){return parseInt(a,10)}}),era:x({matchPatterns:We,defaultMatchWidth:"wide",parsePatterns:ke,defaultParseWidth:"any"}),quarter:x({matchPatterns:Ce,defaultMatchWidth:"wide",parsePatterns:Fe,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:x({matchPatterns:Ae,defaultMatchWidth:"wide",parsePatterns:Oe,defaultParseWidth:"any"}),day:x({matchPatterns:Ie,defaultMatchWidth:"wide",parsePatterns:_e,defaultParseWidth:"any"}),dayPeriod:x({matchPatterns:Le,defaultMatchWidth:"any",parsePatterns:Xe,defaultParseWidth:"any"})};const Ee=Re;var Ye={code:"en-US",formatDistance:se,formatLong:me,formatRelative:fe,localize:je,match:Ee,options:{weekStartsOn:0,firstWeekContainsDate:1}};const He=Ye;function k(e,a){if(e==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);return e}function qe(e){return k({},e)}var T=1440,ze=2520,D=43200,Ve=86400;function Je(e,a,t){var r,i;f(2,arguments);var o=$(),s=(r=(i=t==null?void 0:t.locale)!==null&&i!==void 0?i:o.locale)!==null&&r!==void 0?r:He;if(!s.formatDistance)throw new RangeError("locale must contain formatDistance property");var u=y(e,a);if(isNaN(u))throw new RangeError("Invalid time value");var l=k(qe(t),{addSuffix:!!(t!=null&&t.addSuffix),comparison:u}),c,v;u>0?(c=d(a),v=d(e)):(c=d(e),v=d(a));var h=ne(v,c),C=(P(v)-P(c))/1e3,m=Math.round((h-C)/60),g;if(m<2)return t!=null&&t.includeSeconds?h<5?s.formatDistance("lessThanXSeconds",5,l):h<10?s.formatDistance("lessThanXSeconds",10,l):h<20?s.formatDistance("lessThanXSeconds",20,l):h<40?s.formatDistance("halfAMinute",0,l):h<60?s.formatDistance("lessThanXMinutes",1,l):s.formatDistance("xMinutes",1,l):m===0?s.formatDistance("lessThanXMinutes",1,l):s.formatDistance("xMinutes",m,l);if(m<45)return s.formatDistance("xMinutes",m,l);if(m<90)return s.formatDistance("aboutXHours",1,l);if(m<T){var F=Math.round(m/60);return s.formatDistance("aboutXHours",F,l)}else{if(m<ze)return s.formatDistance("xDays",1,l);if(m<D){var A=Math.round(m/T);return s.formatDistance("xDays",A,l)}else if(m<Ve)return g=Math.round(m/D),s.formatDistance("aboutXMonths",g,l)}if(g=ae(v,c),g<12){var O=Math.round(m/D);return s.formatDistance("xMonths",O,l)}else{var N=g%12,w=Math.floor(g/12);return N<3?s.formatDistance("aboutXYears",w,l):N<9?s.formatDistance("overXYears",w,l):s.formatDistance("almostXYears",w+1,l)}}const Ue=({comment:e})=>n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-baseline gap-2",children:[n.jsx("h6",{className:"text-sm",children:e.name}),n.jsx("span",{className:"text-xs text-slate-400",children:Je(new Date(e.commentedAt),new Date,{addSuffix:!0})})]}),n.jsx("p",{className:"mt-1 text-sm",children:e.content})]}),$e=({comments:e})=>n.jsxs("div",{children:[n.jsx("h2",{className:"text-xl font-bold",children:"Recent Comments"}),n.jsx("div",{className:"mt-3 flex flex-col gap-3",children:e.length>0?e.map(a=>n.jsx(Ue,{comment:a},a.id)):n.jsx("div",{className:"mt-2",children:n.jsx("p",{className:"text-slate-300",children:"No comments found"})})})]}),et=()=>{const{id:e}=X(),a=W(),t=z(i=>R(i,Number(e)));if(!t)return n.jsxs("div",{className:"flex flex-col items-center justify-center py-6",children:[n.jsx("img",{src:"/images/no-post.png",alt:"no-port",className:"w-full max-w-xs"}),n.jsx("p",{className:"mt-2",children:"متاسفانه مقاله ی مورد نظر یافت نشد."})]});const r=()=>{a(Y(t.id))};return n.jsxs("div",{children:[n.jsxs("div",{className:"py-8",children:[n.jsx("h1",{className:"text-center text-3xl font-bold",children:t.title}),n.jsxs("p",{className:"text-gray mt-4 flex items-center justify-center gap-2",children:[n.jsx("span",{children:t.category}),n.jsx("span",{className:"h-2 w-2 rounded bg-teal-500",style:{display:"inline-block"}}),n.jsx("span",{children:t.publishedAt})]})]}),n.jsx("img",{src:t.imageUrl,alt:t.title,width:"100%"}),n.jsx("div",{className:"prose prose-sm prose-invert max-w-full py-4",children:n.jsx("div",{dangerouslySetInnerHTML:{__html:t.content}})}),n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsx("strong",{children:"برچسب ها: "}),n.jsx("div",{className:"flex flex-wrap items-center gap-2",children:t.tags.map(i=>n.jsx("span",{className:"bg-primary rounded p-1 text-sm",children:i},i))})]}),n.jsxs("div",{role:"button",className:"flex items-center gap-1",onClick:r,children:[t.isLiked?n.jsx(V,{className:"text-teal-500",width:20,height:20}):n.jsx(E,{className:"text-teal-500",width:20,height:20}),t.isLiked?n.jsx("span",{children:"Liked"}):n.jsx("span",{children:"Like"})]})]}),n.jsx("div",{className:"mt-12 flex gap-6",children:n.jsx($e,{comments:t.comments})}),n.jsx("div",{className:"mt-12 flex gap-12",children:n.jsx(J,{postId:t.id})})]})};export{et as default};
