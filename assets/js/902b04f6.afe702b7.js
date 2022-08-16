"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[1755],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2197:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),p=["components"],i={id:"token_swap",title:"Token Swap"},s=void 0,l={unversionedId:"token_swap",id:"token_swap",title:"Token Swap",description:"Token Swap provides an authenticatiow flow where client-side apps (like CLI/desktop/mobile apps) are still able to use long-living tokens and the opportunity to refresh them without exposing your application's secret. This however requires a server-side part to work.",source:"@site/docs/token_swap.md",sourceDirName:".",slug:"/token_swap",permalink:"/SpotifyAPI-NET/docs/token_swap",draft:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/token_swap.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1660667313,formattedLastUpdatedAt:"8/16/2022",frontMatter:{id:"token_swap",title:"Token Swap"},sidebar:"docs",previous:{title:"PKCE",permalink:"/SpotifyAPI-NET/docs/pkce"},next:{title:"Showcase",permalink:"/SpotifyAPI-NET/docs/showcase"}},c={},d=[{value:"Flow",id:"flow",level:2},{value:"Server Implementation",id:"server-implementation",level:2},{value:"Swap",id:"swap",level:3},{value:"Refresh",id:"refresh",level:3},{value:"Example",id:"example",level:2}],u={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Token Swap provides an authenticatiow flow where client-side apps (like CLI/desktop/mobile apps) are still able to use long-living tokens and the opportunity to refresh them without exposing your application's secret. This however requires a server-side part to work."),(0,a.kt)("p",null,"It is based on the ",(0,a.kt)("a",{parentName:"p",href:"/SpotifyAPI-NET/docs/authorization_code"},"Authorization Code")," flow and is also documented by Spotify: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.spotify.com/documentation/ios/guides/token-swap-and-refresh/"},"Token Swap and Refresh "),"."),(0,a.kt)("h2",{id:"flow"},"Flow"),(0,a.kt)("p",null,"The client uses the first part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization Code")," flow and redirects the user to Spotify's login page. In this part, only the client id is required. Once the user logged in and confirmed the usage of your app, they will be redirect to a ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost")," server which grabs the ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," from the query parameters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var request = new LoginRequest("http://localhost", "ClientId", LoginRequest.ResponseType.Code)\n{\n  Scope = new List<string> { Scopes.UserReadEmail }\n};\nBrowserUtil.Open(uri);\n')),(0,a.kt)("p",null,"Now, swapping out this ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," for an ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token")," would require the app's client secret. We don't have this on the client-side. Instead, we send a request to our server, which takes care of the code swap:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public Task GetCallback(string code)\n{\n  var response = await new OAuthClient().RequestToken(\n    new TokenSwapTokenRequest("https://your-swap-server.com/swap", code)\n  );\n\n  var spotify = new SpotifyClient(response.AccessToken);\n  // Also important for later: response.RefreshToken\n}\n')),(0,a.kt)("p",null,"The server swapped out the ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," for an ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"refresh_token"),". Once we realize the ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token")," expired, we can also ask the server to refresh it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// if response.IsExpired is true\nvar newResponse = await new OAuthClient().RequestToken(\n  new TokenSwapTokenRequest("https://your-swap-server.com/refresh", response.RefreshToken)\n);\n\nvar spotify = new SpotifyClient(newResponse.AccessToken);\n')),(0,a.kt)("h2",{id:"server-implementation"},"Server Implementation"),(0,a.kt)("p",null,"The server needs to support two endpoints, ",(0,a.kt)("inlineCode",{parentName:"p"},"/swap")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/refresh")," (endpoints can be named differently of course)."),(0,a.kt)("h3",{id:"swap"},"Swap"),(0,a.kt)("p",null,"The client sends a body via ",(0,a.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," where the received ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," is included. In cURL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://example.com/v1/swap"\\\n  -H "Content-Type: application/x-www-form-urlencoded"\\\n  --data "code=AQDy8...xMhKNA"\n')),(0,a.kt)("p",null,"The server needs to respond with content-type ",(0,a.kt)("inlineCode",{parentName:"p"},"application/json")," and the following body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n "access_token" : "NgAagA...Um_SHo",\n "expires_in" : "3600",\n "refresh_token" : "NgCXRK...MzYjw"\n}\n')),(0,a.kt)("h3",{id:"refresh"},"Refresh"),(0,a.kt)("p",null,"The client sends a body via ",(0,a.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," where the received ",(0,a.kt)("inlineCode",{parentName:"p"},"refresh_token")," is included. In cURL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://example.com/v1/refresh"\\\n  -H "Content-Type: application/x-www-form-urlencoded"\\\n  --data "refresh_token=NgCXRK...MzYjw"\n')),(0,a.kt)("p",null,"The server needs to respond with content-type ",(0,a.kt)("inlineCode",{parentName:"p"},"application/json")," and the following body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n "access_token" : "NgAagA...Um_SHo",\n "expires_in" : "3600"\n}\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"An example server has been implemented in Node.JS with a .NET CLI client, located at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.TokenSwap"},"Example.TokenSwap"),"."))}h.isMDXComponent=!0}}]);