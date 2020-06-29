(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{156:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(9),c=(a(0),a(186)),l={id:"search",title:"Search",sidebar_label:"Search"},i={id:"version-5.1.1/web/search",title:"Search",description:"SearchItems",source:"@site/versioned_docs/version-5.1.1/web/search.md",permalink:"/SpotifyAPI-NET/docs/web/search",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/search.md",version:"5.1.1",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1593463355,sidebar_label:"Search",sidebar:"version-5.1.1/someSidebar",previous:{title:"Proxy Settings",permalink:"/SpotifyAPI-NET/docs/web/proxy"},next:{title:"Tracks",permalink:"/SpotifyAPI-NET/docs/web/tracks"}},o=[{value:"SearchItems",id:"searchitems",children:[]},{value:"SearchItemsEscaped",id:"searchitemsescaped",children:[]}],b={rightToc:o};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"searchitems"},"SearchItems"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Get Spotify catalog information about artists, albums, tracks or playlists that match a keyword string.")),Object(c.b)("p",null,"::: warning\nYou may want to use ",Object(c.b)("inlineCode",{parentName:"p"},"SearchItemsEscaped")," if you're processing user-input without validation\n:::"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Example"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"q"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The search query's keywords (and optional field filters and operators), for example q=roadhouse+blues."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},'"roadhouse+blues"'))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"type"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A list of item types to search across."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"SearchType.Album"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[limit]"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"20"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[offset]"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The index of the first result to return. Default: 0"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"0"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[market]"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"An ISO 3166-1 alpha-2 country code or the string from_token."),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},'"de"'))))),Object(c.b)("p",null,"Returns a ",Object(c.b)("inlineCode",{parentName:"p"},"SearchItem")," which contains the properties ",Object(c.b)("inlineCode",{parentName:"p"},"Paging<FullArtist> Artists"),",",Object(c.b)("inlineCode",{parentName:"p"},"Paging<FullTrack> Tracks"),", ",Object(c.b)("inlineCode",{parentName:"p"},"Paging<SimpleAlbum> Albums"),", ",Object(c.b)("inlineCode",{parentName:"p"},"Paging<SimplePlaylist> Playlists"),". They are filled based on your search-type."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Usage")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'SearchItem item = _spotify.SearchItems("roadhouse+blues", SearchType.Album | SearchType.Playlist);\nConsole.WriteLine(item.Albums.Total); //How many results are there in total? NOTE: item.Tracks = item.Artists = null\n')),Object(c.b)("hr",null),Object(c.b)("h2",{id:"searchitemsescaped"},"SearchItemsEscaped"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Get Spotify catalog information about artists, albums, tracks or playlists that match a keyword string.")),Object(c.b)("p",null,"Works like ",Object(c.b)("inlineCode",{parentName:"p"},"SearchItems"),", but URL escapes all characters"))}p.isMDXComponent=!0},186:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},s=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(a),m=r,d=s["".concat(l,".").concat(m)]||s[m]||u[m]||c;return a?n.a.createElement(d,i({ref:t},b,{components:a})):n.a.createElement(d,i({ref:t},b))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,l=new Array(c);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var b=2;b<c;b++)l[b]=a[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);