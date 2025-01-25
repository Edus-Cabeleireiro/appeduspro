!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="322e462e-a0d1-4563-acef-a8cd5900956a",e._sentryDebugIdIdentifier="sentry-dbid-322e462e-a0d1-4563-acef-a8cd5900956a")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93658],{93658:function(e,r,n){n.d(r,{Z:function(){return U}});var l=n(52322),d=n(72779),c=n.n(d),m=n(39097),f=n.n(m),g=n(62202),h=n(50567),x=n(14200),b=n(25237),y=n.n(b);let w=y()(()=>Promise.all([n.e(38003),n.e(48834),n.e(20850),n.e(62713)]).then(n.bind(n,75422)),{loadableGenerated:{webpack:()=>[75422]}});var _=n(20164);let SkeletonEventType=()=>(0,l.jsx)("div",{className:"dark:bg-darkgray-100 bg-default h-24 w-full",children:(0,l.jsxs)("div",{className:"p-5",children:[(0,l.jsxs)("div",{className:"flex space-x-2 rtl:space-x-reverse",children:[(0,l.jsx)("div",{className:"dark:bg-darkgray-400 h-2 w-1/6 rounded-md bg-neutral-200"}),(0,l.jsx)("div",{className:"dark:bg-darkgray-400 h-2 w-1/6 rounded-md bg-neutral-200"})]}),(0,l.jsxs)("div",{className:"flex space-x-2 py-2 rtl:space-x-reverse",children:[(0,l.jsx)("div",{className:"dark:bg-darkgray-400 h-2 w-1/12 rounded-md bg-neutral-200"}),(0,l.jsx)("div",{className:"dark:bg-darkgray-400 h-2 w-1/6 rounded-md bg-neutral-200"}),(0,l.jsx)("div",{className:"dark:bg-darkgray-400 h-2 w-1/12 rounded-md bg-neutral-200"})]}),(0,l.jsxs)("div",{className:"flex space-x-2 py-1 rtl:space-x-reverse",children:[(0,l.jsx)("div",{className:"dark:bg-darkgray-200 h-6 w-1/6 rounded-md bg-neutral-300"}),(0,l.jsx)("div",{className:"dark:bg-darkgray-200 h-6 w-1/6 rounded-md bg-neutral-300"})]})]})});var components_EmptyPage=function(e){let{name:r}=e,{t:n}=(0,_.b)();return(0,l.jsxs)("div",{className:"relative text-center",children:[(0,l.jsxs)("div",{className:"dark:divide-darkgray-100 flex flex-col divide-y-2 blur-[3px]",children:[(0,l.jsx)(SkeletonEventType,{}),(0,l.jsx)(SkeletonEventType,{}),(0,l.jsx)(SkeletonEventType,{})]}),(0,l.jsxs)("div",{className:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform",children:[(0,l.jsxs)("h3",{className:"text-emphasis text-lg font-semibold",children:[n("no_event_types")," "]}),(0,l.jsx)("h4",{className:"text-default text-sm leading-normal",children:n("no_event_types_description",{name:r})})]})]})},N=n(30688),k=n(36441),O=n(21121),I=n(77172),A=n(47268),T=n(86279);function UserPage(e){var r,n;let{users:d,profile:m,eventTypes:b,markdownStrippedBio:y,entity:_,isOrgSEOIndexable:U}=e,[C]=d;(0,k.Z)(m.theme);let P=!C.bio||!C.bio.replace("<p><br></p>","").length,F=(0,h.sq)(e.isEmbed),R=(0,h.Ky)("eventTypeListItem"),z="left"!==(0,h.oA)("align"),Z=!F||z,{user:W,orgSlug:G,redirect:B,...Q}=(0,N.o)();if(_.considerUnpublished)return(0,l.jsx)("div",{className:"flex h-full min-h-[calc(100dvh)] items-center justify-center",children:(0,l.jsx)(O.f,{..._})});let X=0===b.length,V=!!(null==C?void 0:null===(r=C.profile)||void 0===r?void 0:r.organization),Y=V?!!U&&m.allowSEOIndexing:m.allowSEOIndexing;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(I.A,{origin:(0,x.rQ)(null!==(n=_.orgSlug)&&void 0!==n?n:null),title:m.name,description:y,meeting:{title:y,profile:{name:"".concat(m.name),image:C.avatarUrl||null},users:[{username:"".concat(C.username),name:"".concat(C.name)}]},nextSeoProps:{noindex:!Y,nofollow:!Y}}),(0,l.jsxs)("div",{className:c()(Z?"mx-auto":"",F?"max-w-3xl":""),children:[(0,l.jsxs)("main",{className:c()(Z?"mx-auto":"",F?"border-booker border-booker-width  bg-default rounded-md":"","max-w-3xl px-4 py-24"),children:[(0,l.jsxs)("div",{className:"mb-8 text-center",children:[(0,l.jsx)(A.Y,{size:"xl",user:{avatarUrl:C.avatarUrl,profile:C.profile,name:m.name,username:m.username}}),(0,l.jsxs)("h1",{className:"font-cal text-emphasis my-1 text-3xl","data-testid":"name-title",children:[m.name,!V&&C.verified&&(0,l.jsx)(T.Z,{name:"badge-check",className:"mx-1 -mt-1 inline h-6 w-6 fill-blue-500 text-white dark:text-black"}),V&&(0,l.jsx)(T.Z,{name:"badge-check",className:"mx-1 -mt-1 inline h-6 w-6 fill-yellow-500 text-white dark:text-black"})]}),!P&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"  text-subtle break-words text-sm [&_a]:text-blue-500 [&_a]:underline [&_a]:hover:text-blue-600",dangerouslySetInnerHTML:{__html:e.safeBio}})})]}),(0,l.jsx)("div",{className:c()("rounded-md ",!X&&"border-subtle border"),"data-testid":"event-types",children:b.map(e=>(0,l.jsxs)(f(),{style:{display:"flex",...R},prefetch:!1,href:{pathname:"/".concat(C.profile.username,"/").concat(e.slug),query:Q},passHref:!0,onClick:async()=>{null===h.XW||void 0===h.XW||h.XW.fire("eventTypeSelected",{eventType:e})},className:"bg-default border-subtle dark:bg-muted dark:hover:bg-emphasis hover:bg-muted group relative border-b transition first:rounded-t-md last:rounded-b-md last:border-b-0","data-testid":"event-type-link",children:[(0,l.jsx)(T.Z,{name:"arrow-right",className:"text-emphasis absolute right-4 top-4 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"}),(0,l.jsxs)("div",{className:"block w-full p-5",children:[(0,l.jsx)("div",{className:"flex flex-wrap items-center",children:(0,l.jsx)("h2",{className:"text-default pr-2 text-sm font-semibold",children:e.title})}),(0,l.jsx)(w,{eventType:e,isPublic:!0,shortenDescription:!0})]})]},e.id))}),X&&(0,l.jsx)(components_EmptyPage,{name:m.name||"User"})]}),(0,l.jsx)(g.x7,{position:"bottom-right"})]})]})}UserPage.isBookingPage=!0;var U=UserPage},50567:function(e,r,n){n.d(r,{G$:function(){return l.G$},Ky:function(){return l.Ky},SS:function(){return l.SS},XW:function(){return d.X},oA:function(){return l.oA},sq:function(){return l.sq},wI:function(){return l.wI},xT:function(){return l.xT}});var l=n(60279),d=n(65844)},14200:function(e,r,n){n.d(r,{Ek:function(){return orgDomainConfig},N2:function(){return subdomainSuffix},fn:function(){return getOrgDomainConfigFromHostname},jR:function(){return whereClauseForOrgWithSlugOrRequestedSlug},rQ:function(){return getOrgFullOrigin}});var l=n(49854),d=n(84177),c=n(2656),m=n(34406);let f=d.Z.getSubLogger({prefix:["orgDomains.ts"]});function orgDomainConfig(e,r){var n,l,d;let c=!!(null==e?void 0:null===(d=e.headers)||void 0===d?void 0:d["x-cal-client-id"]),m=null==e?void 0:null===(n=e.headers)||void 0===n?void 0:n["x-cal-force-slug"],f=m instanceof Array?m[0]:m;if(c&&f)return{isValidOrgDomain:!0,currentOrgDomain:f};let g=(null==e?void 0:null===(l=e.headers)||void 0===l?void 0:l.host)||"";return getOrgDomainConfigFromHostname({hostname:g,fallback:r,forcedSlug:f})}function getOrgDomainConfigFromHostname(e){let{hostname:r,fallback:n,forcedSlug:d}=e,c=function(e,r){var n;if(r){if(m.env.NEXT_PUBLIC_IS_E2E)return f.debug("Using provided forcedSlug in E2E",{forcedSlug:r}),r;f.debug("Ignoring forcedSlug in non-test mode",{forcedSlug:r})}if(!e.includes("."))return f.warn('Org support not enabled for hostname without "."',{hostname:e}),null;let d=l.OZ.find(e=>{let r=new URL(l.fg),n="".concat(r.hostname).concat(r.port?":".concat(r.port):"");return n.endsWith(".".concat(e))});if(!d)return f.warn("Match of WEBAPP_URL with ALLOWED_HOSTNAME failed",{WEBAPP_URL:l.fg,ALLOWED_HOSTNAMES:l.OZ}),null;let c=e.replace(null!==(n=".".concat(d))&&void 0!==n?n:"",""),g=-1===c.indexOf(".");return g?c:(f.warn("Derived slug ended up having dots, so not considering it an org domain",{slug:c}),null)}(r,d),g=null!==c&&!l.Q3.includes(c);if(g||!n)return{currentOrgDomain:g?c:null,isValidOrgDomain:g};let h=!l.Q3.includes(n);return{currentOrgDomain:h?n:null,isValidOrgDomain:h}}function subdomainSuffix(){var e;if(!l.Mw&&m.env.LOCAL_TESTING_DOMAIN_VERCEL)return m.env.LOCAL_TESTING_DOMAIN_VERCEL;let r=null===(e=l.fg.replace("https://",""))||void 0===e?void 0:e.replace("http://","").split(".");return 3===r.length?r.slice(1).join("."):r.join(".")}function getOrgFullOrigin(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{protocol:!0};if(!e)return r.protocol?l.o6:l.o6.replace("https://","").replace("http://","");let n="".concat(r.protocol?"".concat(new URL(l.o6).protocol,"//"):"").concat(e,".").concat(subdomainSuffix());return n}function whereClauseForOrgWithSlugOrRequestedSlug(e){let r=(0,c.Z)(e);return{OR:[{slug:r},{metadata:{path:["requestedSlug"],equals:e}}],isOrganization:!0}}},90829:function(e,r,n){function getPlaceholderAvatar(e,r){return e||"https://eu.ui-avatars.com/api/?background=fff&color=f9f9f9&bold=true&background=000000&name=".concat(encodeURIComponent(r||""))}function getOrgOrTeamAvatar(e){var r;return getPlaceholderAvatar(e.logoUrl||(null===(r=e.parent)||void 0===r?void 0:r.logoUrl),e.name)}n.d(r,{B:function(){return getPlaceholderAvatar},j:function(){return getOrgOrTeamAvatar}})},96951:function(e,r,n){n.d(r,{B:function(){return getUserAvatarUrl}});var l=n(30195),d=n(49854);let getUserAvatarUrl=e=>{if(null==e?void 0:e.avatarUrl){let r=l.z.string().url().safeParse(e.avatarUrl).success;return r?e.avatarUrl:d.Q8+e.avatarUrl}return d.Q8+d.hx}},30688:function(e,r,n){n.d(r,{o:function(){return useRouterQuery}});var l=n(10037);let useRouterQuery=()=>{var e;let r=(0,l.N)(),n=function(e){let r={};if(null===e)return r;for(let[n,l]of e)if(r.hasOwnProperty(n)){let e=r[n];Array.isArray(e)||(e=[e]),e.push(l),r[n]=e}else r[n]=l;return r}(null!==(e=null==r?void 0:r.entries())&&void 0!==e?e:null);return n}},36441:function(e,r,n){n.d(r,{Z:function(){return useTheme},i:function(){return useGetTheme}});var l=n(38617),d=n(2784),c=n(50567);function useTheme(e){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e=e||"system";let{resolvedTheme:n,setTheme:m,forcedTheme:f,theme:g}=(0,l.F)(),h=(0,c.G$)();if((0,d.useEffect)(()=>{if(r||void 0===e)return;let n=h?"auto"===h?"system":h:e;n&&n!==g&&m(n)},[e,m,h]),r)return{resolvedTheme:n,forcedTheme:f,activeTheme:g}}function useGetTheme(){let e=useTheme(null,!0);if(!e)throw Error("useTheme must have a return value here");return e}},84177:function(e,r,n){var l=n(14142),d=n(49854);let c=new l.Yd({minLevel:parseInt("3"),maskValuesOfKeys:["password","passwordConfirmation","credentials","credential"],prettyLogTimeZone:d.Mw?"UTC":"local",prettyErrorStackTemplate:"  • {{fileName}}	{{method}}\n	{{filePathWithLine}}",prettyErrorTemplate:"\n{{errorName}} {{errorMessage}}\nerror stack:\n{{errorStack}}",prettyLogTemplate:"{{hh}}:{{MM}}:{{ss}}:{{ms}} [{{logLevelName}}] ",stylePrettyLogs:!0,prettyLogStyles:{name:"yellow",dateIsoStr:"blue"}});r.Z=c},2656:function(e,r,n){n.d(r,{l:function(){return slugify}});let slugify=(e,r)=>{if(!e)return"";let n=e.toLowerCase().trim().normalize("NFD").replace(RegExp("\\p{Diacritic}","gu"),"").replace(RegExp("[^.\\p{L}\\p{N}\\p{Zs}\\p{Emoji}]+","gu"),"-").replace(/[\s_#]+/g,"-").replace(/^-+/,"").replace(/\.{2,}/g,".").replace(/^\.+/,"").replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"").replace(/\s+/g," ").replace(/-+/g,"-");return r?n:n.replace(/-+$/,"").replace(/\.*$/,"")};r.Z=slugify},1363:function(e,r,n){n.d(r,{q:function(){return Avatar}});var l=n(52322),d=n(98036),c=n(37921),m=n(39097),f=n.n(m),g=n(6464),h=n(49854),x=n(62482);let b={xxs:"w-3.5 h-3.5 min-w-3.5 min-h-3.5",xs:"w-4 h-4 min-w-4 min-h-4 max-h-4",xsm:"w-5 h-5 min-w-5 min-h-5",sm:"w-6 h-6 min-w-6 min-h-6",md:"w-8 h-8 min-w-8 min-h-8",mdLg:"w-10 h-10 min-w-10 min-h-10",lg:"w-16 h-16 min-w-16 min-h-16",xl:"w-24 h-24 min-w-24 min-h-24"};function Avatar(e){let{imageSrc:r,size:n="md",alt:m,title:y,href:w,indicator:_}=e,N=(0,g.Z)("aspect-square rounded-full",b[n]),k=(0,l.jsx)(d.fC,{"data-testid":null==e?void 0:e["data-testid"],className:(0,g.Z)("bg-emphasis item-center relative inline-flex aspect-square justify-center rounded-full align-top",_?"overflow-visible":"overflow-hidden",e.className,b[n]),children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d.Ee,{src:null!=r?r:void 0,alt:m,className:(0,g.Z)("aspect-square rounded-full",b[n])}),(0,l.jsx)(d.NY,{delayMs:600,asChild:e.asChild,className:"flex h-full items-center justify-center",children:(0,l.jsx)(l.Fragment,{children:e.fallback?e.fallback:(0,l.jsx)("img",{src:h.hx,alt:m,className:N})})}),_]})});return w&&(k=(0,l.jsx)(f(),{"data-testid":"avatar-href",href:w,children:k})),y?(0,l.jsx)(c.zt,{children:(0,l.jsx)(x.Z,{content:y,children:k})}):(0,l.jsx)(l.Fragment,{children:k})}},47268:function(e,r,n){n.d(r,{Y:function(){return UserAvatar}});var l=n(52322),d=n(6464),c=n(90829),m=n(96951),f=n(1363);let g={xxs:"hidden",xs:"hidden",xsm:"hidden",sm:"h-3 w-3",md:"h-4 w-4",mdLg:"h-5 w-5",lg:"h-6 w-6",xl:"h-10 w-10"};function OrganizationIndicator(e){let{size:r,organization:n,user:m}=e,f=r&&g[r];return(0,l.jsx)("div",{className:(0,d.Z)("absolute bottom-0 right-0 z-10",f),children:(0,l.jsx)("img",{"data-testid":"organization-logo",src:(0,c.B)(n.logoUrl,n.slug),alt:m.username||"",className:"flex h-full items-center justify-center rounded-full"})})}function UserAvatar(e){var r,n;let{user:d,previewSrc:c=(0,m.B)(d),noOrganizationIndicator:g,...h}=e,x=null!==(n=null===(r=d.profile)||void 0===r?void 0:r.organization)&&void 0!==n?n:null,b=x&&!g?(0,l.jsx)(OrganizationIndicator,{size:e.size,organization:x,user:e.user}):e.indicator;return(0,l.jsx)(f.q,{...h,alt:d.name||"Nameless User",imageSrc:c,indicator:b})}},77172:function(e,r,n){n.d(r,{A:function(){return HeadSeo}});var l=n(52322),d=n(55351),c=n(82876);n(2784);var m=n(49854);let makeAbsoluteUrl=e=>/^https?:\/\//.test(e)?e:"".concat(m.Q8).concat(e),constructMeetingImage=e=>{let{title:r,users:n=[],profile:l}=e,d=new URLSearchParams({type:"meeting",title:r,meetingProfileName:l.name});return l.image&&d.set("meetingImage",makeAbsoluteUrl(l.image)),n.forEach(e=>{d.append("names",e.name),d.append("usernames",e.username)}),encodeURIComponent("/api/social/og/image?".concat(d.toString()))},constructAppImage=e=>{let{name:r,slug:n,description:l}=e,d=new URLSearchParams({type:"app",name:r,slug:n,description:l});return encodeURIComponent("/api/social/og/image?".concat(d.toString()))},constructGenericImage=e=>{let{title:r,description:n}=e,l=new URLSearchParams({type:"generic",title:r,description:n});return encodeURIComponent("/api/social/og/image?".concat(l.toString()))};var f=n(78299);let truncateOnWord=function(e,r){let n=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(e.length<=r)return e;let l=e.substring(0,148);return l=l.substring(0,Math.min(l.length,l.lastIndexOf(" "))),n&&(l+="..."),l},buildSeoMeta=e=>{let{title:r,description:n,image:l,canonical:d,siteName:c=f.G_.headSeo.siteName}=e;return{title:r,canonical:d,openGraph:{site_name:c,type:"website",title:r,description:n,images:[{url:l}]},additionalMetaTags:[{property:"name",content:r},{property:"description",content:n},{name:"description",content:n},{property:"image",content:l}]}},HeadSeo=e=>{var r;let n=(0,c.usePathname)(),g=(0,f.Qt)({path:n,origin:e.origin||m.Q8}),{title:h,description:x,siteName:b,canonical:y=g,nextSeoProps:w={},app:_,meeting:N,isBrandingHidden:k}=e,O=(0,f.UX)("ogImage")+constructGenericImage({title:h,description:x}),I=truncateOnWord(x,158),A="".concat(h).concat(k?"":" | ".concat(m.iC)),T=buildSeoMeta({title:A,image:O,description:I,canonical:y,siteName:b});if(N){let e=(0,f.UX)("ogImage")+constructMeetingImage(N);T=buildSeoMeta({title:A,description:I,image:e,canonical:y,siteName:b})}if(_){let e=(0,f.UX)("ogImage")+constructAppImage({..._,description:I});T=buildSeoMeta({title:A,description:I,image:e,canonical:y,siteName:b})}let U={...w,...T,openGraph:{...w.openGraph,...T.openGraph,images:[...(null===(r=w.openGraph)||void 0===r?void 0:r.images)||[],...T.openGraph.images]},additionalMetaTags:[...w.additionalMetaTags||[],...T.additionalMetaTags]};return(0,l.jsx)(d.PB,{...U})}},21121:function(e,r,n){n.d(r,{f:function(){return UnpublishedEntity}});var l=n(52322),d=n(90829),c=n(20164),m=n(43148),f=n(1363);function UnpublishedEntity(e){let{t:r}=(0,c.b)(),n=e.orgSlug||e.teamSlug;return(0,l.jsx)("div",{className:"m-8 flex items-center justify-center",children:(0,l.jsx)(m.O,{avatar:(0,l.jsx)(f.q,{alt:null!=n?n:"",imageSrc:(0,d.B)(e.logoUrl,n),size:"lg"}),headline:r("team_is_unpublished",{team:e.name}),description:r("".concat(e.orgSlug?"org":"team","_is_unpublished_description"))})})}},98036:function(e,r,n){n.d(r,{Ee:function(){return I},NY:function(){return A},fC:function(){return O}});var l=n(7896),d=n(2784),c=n(92211),m=n(27757),f=n(61644),g=n(72714);let h="Avatar",[x,b]=(0,c.b)(h),[y,w]=x(h),_=(0,d.forwardRef)((e,r)=>{let{__scopeAvatar:n,...c}=e,[m,f]=(0,d.useState)("idle");return(0,d.createElement)(y,{scope:n,imageLoadingStatus:m,onImageLoadingStatusChange:f},(0,d.createElement)(g.WV.span,(0,l.Z)({},c,{ref:r})))}),N=(0,d.forwardRef)((e,r)=>{let{__scopeAvatar:n,src:c,onLoadingStatusChange:h=()=>{},...x}=e,b=w("AvatarImage",n),y=function(e){let[r,n]=(0,d.useState)("idle");return(0,f.b)(()=>{if(!e){n("error");return}let r=!0,l=new window.Image,updateStatus=e=>()=>{r&&n(e)};return n("loading"),l.onload=updateStatus("loaded"),l.onerror=updateStatus("error"),l.src=e,()=>{r=!1}},[e]),r}(c),_=(0,m.W)(e=>{h(e),b.onImageLoadingStatusChange(e)});return(0,f.b)(()=>{"idle"!==y&&_(y)},[y,_]),"loaded"===y?(0,d.createElement)(g.WV.img,(0,l.Z)({},x,{ref:r,src:c})):null}),k=(0,d.forwardRef)((e,r)=>{let{__scopeAvatar:n,delayMs:c,...m}=e,f=w("AvatarFallback",n),[h,x]=(0,d.useState)(void 0===c);return(0,d.useEffect)(()=>{if(void 0!==c){let e=window.setTimeout(()=>x(!0),c);return()=>window.clearTimeout(e)}},[c]),h&&"loaded"!==f.imageLoadingStatus?(0,d.createElement)(g.WV.span,(0,l.Z)({},m,{ref:r})):null}),O=_,I=N,A=k},62202:function(e,r,n){let l,d;n.d(r,{x7:function(){return Oe},ZP:function(){return er}});var c,m=n(2784);let f={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||f,g=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,x=/\n+/g,o=(e,r)=>{let n="",l="",d="";for(let c in e){let m=e[c];"@"==c[0]?"i"==c[1]?n=c+" "+m+";":l+="f"==c[1]?o(m,c):c+"{"+o(m,"k"==c[1]?"":r)+"}":"object"==typeof m?l+=o(m,r?r.replace(/([^,])+/g,e=>c.replace(/(^:.*)|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):c):null!=m&&(c=/^--/.test(c)?c:c.replace(/[A-Z]/g,"-$&").toLowerCase(),d+=o.p?o.p(c,m):c+":"+m+";")}return n+(r&&d?r+"{"+d+"}":d)+l},b={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,l,d)=>{var c;let m=s(e),f=b[m]||(b[m]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(m));if(!b[f]){let r=m!==e?e:(e=>{let r,n,l=[{}];for(;r=g.exec(e.replace(h,""));)r[4]?l.shift():r[3]?(n=r[3].replace(x," ").trim(),l.unshift(l[0][n]=l[0][n]||{})):l[0][r[1]]=r[2].replace(x," ").trim();return l[0]})(e);b[f]=o(d?{["@keyframes "+f]:r}:r,n?"":"."+f)}return c=b[f],-1==r.data.indexOf(c)&&(r.data=l?c+r.data:r.data+c),f},p=(e,r,n)=>e.reduce((e,l,d)=>{let c=r[d];if(c&&c.call){let e=c(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;c=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==c?"":c)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let y,w,_,N=u.bind({k:1});function j(e,r){let n=this||{};return function(){let l=arguments;function a(d,c){let m=Object.assign({},d),f=m.className||a.className;n.p=Object.assign({theme:w&&w()},m),n.o=/ *go\d+/.test(f),m.className=u.apply(n,l)+(f?" "+f:""),r&&(m.ref=c);let g=e;return e[0]&&(g=m.as||e,delete m.as),_&&g[0]&&_(m),y(g,m)}return r?r(a):a}}var H=e=>"function"==typeof e,dist_u=(e,r)=>H(e)?e(r):e,k=(l=0,()=>(++l).toString()),$=e=>r=>{r&&setTimeout(()=>{e(r.getBoundingClientRect())})},S=()=>{if(void 0===d&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");d=!e||e.matches}return d},O=new Map,L=e=>{if(O.has(e))return;let r=setTimeout(()=>{O.delete(e),dist_m({type:4,toastId:e})},1e3);O.set(e,r)},J=e=>{let r=O.get(e);r&&clearTimeout(r)},E=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return r.toast.id&&J(r.toast.id),{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return e.toasts.find(e=>e.id===n.id)?E(e,{type:1,toast:n}):E(e,{type:0,toast:n});case 3:let{toastId:l}=r;return l?L(l):e.toasts.forEach(e=>{L(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===l||void 0===l?{...e,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let d=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+d}))}}},I=[],A={toasts:[],pausedAt:void 0},dist_m=e=>{A=E(A,e),I.forEach(e=>{e(A)})},T={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},v=(e={})=>{let[r,n]=(0,m.useState)(A);(0,m.useEffect)(()=>(I.push(n),()=>{let e=I.indexOf(n);e>-1&&I.splice(e,1)}),[r]);let l=r.toasts.map(r=>{var n,l;return{...e,...e[r.type],...r,duration:r.duration||(null==(n=e[r.type])?void 0:n.duration)||(null==e?void 0:e.duration)||T[r.type],style:{...e.style,...null==(l=e[r.type])?void 0:l.style,...r.style}}});return{...r,toasts:l}},q=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||k()}),dist_g=e=>(r,n)=>{let l=q(r,e,n);return dist_m({type:2,toast:l}),l.id},dist_n=(e,r)=>dist_g("blank")(e,r);dist_n.error=dist_g("error"),dist_n.success=dist_g("success"),dist_n.loading=dist_g("loading"),dist_n.custom=dist_g("custom"),dist_n.dismiss=e=>{dist_m({type:3,toastId:e})},dist_n.remove=e=>dist_m({type:4,toastId:e}),dist_n.promise=(e,r,n)=>{let l=dist_n.loading(r.loading,{...n,...null==n?void 0:n.loading});return e.then(e=>(dist_n.success(dist_u(r.success,e),{id:l,...n,...null==n?void 0:n.success}),e)).catch(e=>{dist_n.error(dist_u(r.error,e),{id:l,...n,...null==n?void 0:n.error})}),e};var D=e=>{let{toasts:r,pausedAt:n}=v(e);(0,m.useEffect)(()=>{if(n)return;let e=Date.now(),l=r.map(r=>{if(r.duration===1/0)return;let n=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(n<0){r.visible&&dist_n.dismiss(r.id);return}return setTimeout(()=>dist_n.dismiss(r.id),n)});return()=>{l.forEach(e=>e&&clearTimeout(e))}},[r,n]);let l=(0,m.useMemo)(()=>({startPause:()=>{dist_m({type:5,time:Date.now()})},endPause:()=>{n&&dist_m({type:6,time:Date.now()})},updateHeight:(e,r)=>dist_m({type:1,toast:{id:e,height:r}}),calculateOffset:(e,n)=>{let{reverseOrder:l=!1,gutter:d=8,defaultPosition:c}=n||{},m=r.filter(r=>(r.position||c)===(e.position||c)&&r.height),f=m.findIndex(r=>r.id===e.id),g=m.filter((e,r)=>r<f&&e.visible).length;return m.filter(e=>e.visible).slice(...l?[g+1]:[0,g]).reduce((e,r)=>e+(r.height||0)+d,0)}}),[r,n]);return{toasts:r,handlers:l}},U=N`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,C=N`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,P=N`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,F=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${U} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${C} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${P} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,R=N`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,z=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${R} 1s linear infinite;
`,Z=N`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,W=N`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,G=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${W} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=j("div")`
  position: absolute;
`,Q=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,X=N`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,V=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${X} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:l}=e;return void 0!==r?"string"==typeof r?m.createElement(V,null,r):r:"blank"===n?null:m.createElement(Q,null,m.createElement(z,{...l}),"loading"!==n&&m.createElement(B,null,"error"===n?m.createElement(F,{...l}):m.createElement(G,{...l})))},fe=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Te=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,Y=j("div",m.forwardRef)`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,K=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,be=(e,r)=>{let n=e.includes("top")?1:-1,[l,d]=S()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[fe(n),Te(n)];return{animation:r?`${N(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${N(d)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=m.memo(({toast:e,position:r,style:n,children:l})=>{let d=null!=e&&e.height?be(e.position||r||"top-center",e.visible):{opacity:0},c=m.createElement(M,{toast:e}),f=m.createElement(K,{...e.ariaProps},dist_u(e.message,e));return m.createElement(Y,{className:e.className,style:{...d,...n,...e.style}},"function"==typeof l?l({icon:c,message:f}):m.createElement(m.Fragment,null,c,f))});c=m.createElement,o.p=void 0,y=c,w=void 0,_=void 0;var Pe=(e,r)=>{let n=e.includes("top"),l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:S()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...l}},et=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Oe=({reverseOrder:e,position:r="top-center",toastOptions:n,gutter:l,children:d,containerStyle:c,containerClassName:f})=>{let{toasts:g,handlers:h}=D(n);return m.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...c},className:f,onMouseEnter:h.startPause,onMouseLeave:h.endPause},g.map(n=>{let c=n.position||r,f=Pe(c,h.calculateOffset(n,{reverseOrder:e,gutter:l,defaultPosition:r})),g=n.height?void 0:$(e=>{h.updateHeight(n.id,e.height)});return m.createElement("div",{ref:g,className:n.visible?et:"",key:n.id,style:f},"custom"===n.type?dist_u(n.message,n):d?d(n):m.createElement(ee,{toast:n,position:c}))}))},er=dist_n}}]);