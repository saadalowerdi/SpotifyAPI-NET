(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{177:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),b=(a(0),a(187)),l={id:"browse",title:"Browse",sidebar_label:"Browse"},c={id:"version-5.1.1/web/browse",title:"Browse",description:"GetFeaturedPlaylists",source:"@site/versioned_docs/version-5.1.1/web/browse.md",permalink:"/SpotifyAPI-NET/docs/web/browse",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/browse.md",version:"5.1.1",lastUpdatedBy:"dependabot-preview[bot]",lastUpdatedAt:1600673141,sidebar_label:"Browse",sidebar:"version-5.1.1/someSidebar",previous:{title:"Artists",permalink:"/SpotifyAPI-NET/docs/web/artists"},next:{title:"Follow",permalink:"/SpotifyAPI-NET/docs/web/follow"}},i=[{value:"GetFeaturedPlaylists",id:"getfeaturedplaylists",children:[]},{value:"GetNewAlbumReleases",id:"getnewalbumreleases",children:[]},{value:"GetCategories",id:"getcategories",children:[]},{value:"GetCategory",id:"getcategory",children:[]},{value:"GetCategoryPlaylists",id:"getcategoryplaylists",children:[]}],o={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"getfeaturedplaylists"},"GetFeaturedPlaylists"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Get a list of Spotify featured playlists (shown, for example, on a Spotify player\u2019s \u201cBrowse\u201d tab).")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[locale]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The desired language, consisting of a lowercase ISO 639 language code and an uppercase ISO 3166-1 alpha-2 country code, joined by an underscore."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"de_DE" //Germany'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[country]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A country: an ISO 3166-1 alpha-2 country code."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"DE"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[timestamp]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A timestamp in ISO 8601 format"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"DateTime.Now"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[limit]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"20"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[offset]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The index of the first item to return. Default: 0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0"))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"FeaturedPlaylists")," object, which has 2 properties. ",Object(b.b)("inlineCode",{parentName:"p"},"String Message")," and ",Object(b.b)("inlineCode",{parentName:"p"},"Paging<SimplePlaylist> Playlists")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"FeaturedPlaylists playlists = _spotify.GetFeaturedPlaylists();\nConsole.WriteLine(playlists.Message);\nplaylists.Playlists.Items.ForEach(playlist => Console.WriteLine(playlist.Name));\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getnewalbumreleases"},"GetNewAlbumReleases"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player\u2019s \u201cBrowse\u201d tab).")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[country]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A country: an ISO 3166-1 alpha-2 country code."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"DE"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[limit]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"20"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[offset]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The index of the first item to return. Default: 0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0"))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"NewAlbumReleases")," object, which has the property ",Object(b.b)("inlineCode",{parentName:"p"},"Paging<SimpleAlbum> Albums"),"."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"NewAlbumReleases newAlbums = _spotify.GetNewAlbumReleases();\nnewAlbums.Albums.Items.ForEach(album => Console.WriteLine(album.Name));\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getcategories"},"GetCategories"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Get a list of categories used to tag items in Spotify (on, for example, the Spotify player\u2019s \u201cBrowse\u201d tab).")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[country]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want to narrow the list of returned categories to those relevant to a particular country"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"DE"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[locale]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"de_DE"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[limit]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum number of categories to return. Default: 20. Minimum: 1. Maximum: 50."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"20"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[offset]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The index of the first item to return. Default: 0 (the first object)."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0"))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"CategoryList")," object, which has the property ",Object(b.b)("inlineCode",{parentName:"p"},"Paging<Category> Categories"),"."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"CategoryList categoryList = _spotify.GetCategories();\ncategoryList.Categories.Items.ForEach(category => Console.WriteLine(category.Name));\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getcategory"},"GetCategory"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Get a single category used to tag items in Spotify (on, for example, the Spotify player\u2019s \u201cBrowse\u201d tab).")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"categoryId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Spotify category ID for the category."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"party"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[country]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A country: an ISO 3166-1 alpha-2 country code. Provide this parameter to ensure that the category exists for a particular country."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"DE"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[locale]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The desired language, consisting of an ISO 639 language code and an ISO 3166-1 alpha-2 country code, joined by an underscore"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"de_DE"'))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#category-object"}),"Category")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'Category cat = _spotify.GetCategory("party");\nConsole.WriteLine(cat.Name);\n')),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getcategoryplaylists"},"GetCategoryPlaylists"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Get a list of Spotify playlists tagged with a particular category.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"categoryId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The Spotify category ID for the category."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"party"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[country]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A country: an ISO 3166-1 alpha-2 country code."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"DE"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[limit]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"20"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[offset]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The index of the first item to return. Default: 0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0"))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"CategoryPlaylist")," object, which has the property ",Object(b.b)("inlineCode",{parentName:"p"},"Paging<SimplePlaylist> Playlists")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'CategoryPlaylist playlists = _spotify.GetCategoryPlaylists("party");\nplaylists.Playlists.Items.ForEach(playlist => Console.WriteLine(playlist.Name));\n')),Object(b.b)("hr",null))}p.isMDXComponent=!0},187:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},O=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=p(a),m=n,u=O["".concat(l,".").concat(m)]||O[m]||j[m]||b;return a?r.a.createElement(u,c({ref:t},o,{components:a})):r.a.createElement(u,c({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);