(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{175:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return i})),a.d(e,"rightToc",(function(){return c})),a.d(e,"default",(function(){return o}));var r=a(2),n=a(9),b=(a(0),a(186)),l={id:"artists",title:"Artists",sidebar_label:"Artists"},i={id:"version-5.1.1/web/artists",title:"Artists",description:"GetArtist",source:"@site/versioned_docs/version-5.1.1/web/artists.md",permalink:"/SpotifyAPI-NET/docs/web/artists",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/artists.md",version:"5.1.1",lastUpdatedBy:"Ilya Burakov",lastUpdatedAt:1592674354,sidebar_label:"Artists",sidebar:"version-5.1.1/someSidebar",previous:{title:"Albums",permalink:"/SpotifyAPI-NET/docs/web/albums"},next:{title:"Browse",permalink:"/SpotifyAPI-NET/docs/web/browse"}},c=[{value:"GetArtist",id:"getartist",children:[]},{value:"GetRelatedArtists",id:"getrelatedartists",children:[]},{value:"GetArtistsTopTracks",id:"getartiststoptracks",children:[]},{value:"GetArtistsAlbums",id:"getartistsalbums",children:[]},{value:"GetSeveralArtists",id:"getseveralartists",children:[]}],p={rightToc:c};function o(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,a,{components:e,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"getartist"},"GetArtist"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Get Spotify catalog information for a single artist identified by their unique Spotify ID.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"id"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The Spotify ID for the artist."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"1KpCi9BOfviCVhmpI4G2sY"'))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#artist-object-full"}),"FullArtist")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'FullArtist artist = _spotify.GetArtist("1KpCi9BOfviCVhmpI4G2sY");\nConsole.WriteLine()\n')),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getrelatedartists"},"GetRelatedArtists"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"id"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The Spotify ID for the artist."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"1KpCi9BOfviCVhmpI4G2sY"'))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"SeveralArtists")," object which contains the property ",Object(b.b)("inlineCode",{parentName:"p"},"List<FullArtist> Artists")," (",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#artist-object-full"}),"FullArtist"),")"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'SeveralArtists artists = _spotify.GetRelatedArtists("1KpCi9BOfviCVhmpI4G2sY");\nConsole.WriteLine(artists.Artists[0].Name);\n')),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getartiststoptracks"},"GetArtistsTopTracks"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Get Spotify catalog information about an artist's top tracks by country.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"id"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The Spotify ID for the artist."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"1KpCi9BOfviCVhmpI4G2sY"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"country"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The country: an ISO 3166-1 alpha-2 country code."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"DE"'))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"SeveralTracks")," object which contains the property ",Object(b.b)("inlineCode",{parentName:"p"},"List<FullTrack> Tracks")," (",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#track-object-full"}),"FullTrack"),")"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'SeveralTracks tracks = _spotify.GetArtistsTopTracks("1KpCi9BOfviCVhmpI4G2sY", "DE");\nConsole.WriteLine(tracks.Tracks.Count); //How many tracks did we get?\n')),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getartistsalbums"},"GetArtistsAlbums"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Get Spotify catalog information about an artist's albums. Optional parameters can be specified in the query string to filter and sort the response.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"id"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The Spotify ID for the artist."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"1KpCi9BOfviCVhmpI4G2sY"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[type]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A list of keywords that will be used to filter the response. If not supplied, all album types will be returned"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"AlbumType.All"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[limit]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"20"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[offset]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The index of the first album to return. Default: 0"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[market]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"An ISO 3166-1 alpha-2 country code. Supply this parameter to limit the response to one particular geographical market"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"DE"'))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#album-object-simplified"}),"SimpleAlbum")," wrapped inside a ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#paging-object"}),"Paging-object")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'Paging<SimpleAlbum> albums = _spotify.GetArtistsAlbums("1KpCi9BOfviCVhmpI4G2sY", AlbumType.All);\nalbums.Items.ForEach(album => Console.WriteLine(album.Name));\n')),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getseveralartists"},"GetSeveralArtists"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Get Spotify catalog information for several artists based on their Spotify IDs.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ids"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A list of the Spotify IDs for the artists. Maximum: 50 IDs."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'new List<String>() { "1KpCi9BOfviCVhmpI4G2sY" } '))))),Object(b.b)("p",null,"Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"SeveralArtists")," object which contains the property ",Object(b.b)("inlineCode",{parentName:"p"},"List<FullArtist> Artists")," (",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.spotify.com/web-api/object-model/#artist-object-full"}),"FullArtist"),")"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'SeveralArtists artists = _spotify.GetSeveralArtists(new List<String>() {"1KpCi9BOfviCVhmpI4G2sY"});\nartists.Artists.ForEach(artist => Console.WriteLine(artist.Name));\n')),Object(b.b)("hr",null))}o.isMDXComponent=!0},186:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},b=Object.keys(t);for(r=0;r<b.length;r++)a=b[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(r=0;r<b.length;r++)a=b[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=n.a.createContext({}),o=function(t){var e=n.a.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i({},e,{},t)),a},s=function(t){var e=o(t.components);return n.a.createElement(p.Provider,{value:e},t.children)},O={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},m=Object(r.forwardRef)((function(t,e){var a=t.components,r=t.mdxType,b=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),s=o(a),m=r,j=s["".concat(l,".").concat(m)]||s[m]||O[m]||b;return a?n.a.createElement(j,i({ref:e},p,{components:a})):n.a.createElement(j,i({ref:e},p))}));function j(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var b=a.length,l=new Array(b);l[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var p=2;p<b;p++)l[p]=a[p];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);