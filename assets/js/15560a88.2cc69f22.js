"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[2096],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),h=r,f=l["".concat(s,".").concat(h)]||l[h]||d[h]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}l.displayName="MDXCreateElement"},3873:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],c={id:"authorization_code",title:"Authorization Code"},s=void 0,u={unversionedId:"auth/authorization_code",id:"version-5.1.1/auth/authorization_code",title:"Authorization Code",description:"This way is not recommended for client-side apps and requires server-side code to run securely.",source:"@site/versioned_docs/version-5.1.1/auth/authorization_code.md",sourceDirName:"auth",slug:"/auth/authorization_code",permalink:"/SpotifyAPI-NET/docs/5.1.1/auth/authorization_code",draft:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/auth/authorization_code.md",tags:[],version:"5.1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1660667313,formattedLastUpdatedAt:"8/16/2022",frontMatter:{id:"authorization_code",title:"Authorization Code"},sidebar:"version-5.1.1/someSidebar",previous:{title:"Implicit Grant",permalink:"/SpotifyAPI-NET/docs/5.1.1/auth/implicit_grant"},next:{title:"Client Credentials",permalink:"/SpotifyAPI-NET/docs/5.1.1/auth/client_credentials"}},p={},d=[{value:"Token Refresh",id:"token-refresh",level:2}],l={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This way is ",(0,a.kt)("strong",{parentName:"p"},"not recommended")," for client-side apps and requires server-side code to run securely.\nWith this approach, you first get a code which you need to trade against the access-token.\nIn this exchange you need to provide your Client-Secret and because of that it's not recommended.\nA good thing about this method: You can always refresh your token, without having the user to auth it again."),(0,a.kt)("p",null,"More info: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow"},"here")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'static async void Main(string[] args)\n{\n    AuthorizationCodeAuth auth = new AuthorizationCodeAuth(\n      _clientId,\n      _secretId,\n      "http://localhost:4002",\n      "http://localhost:4002",\n      Scope.PlaylistReadPrivate | Scope.PlaylistReadCollaborative\n    );\n\n    auth.AuthReceived += async (sender, payload) =>\n    {\n        auth.Stop();\n        Token token = await auth.ExchangeCode(payload.Code);\n        SpotifyWebAPI api = new SpotifyWebAPI()\n        {\n          TokenType = token.TokenType,\n          AccessToken = token.AccessToken\n        };\n        // Do requests with API client\n    };\n    auth.Start(); // Starts an internal HTTP Server\n    auth.OpenBrowser();\n}\n')),(0,a.kt)("h2",{id:"token-refresh"},"Token Refresh"),(0,a.kt)("p",null,"Once the ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessToken")," is expired, you can use your ",(0,a.kt)("inlineCode",{parentName:"p"},"RefreshToken")," to get a new one.\nIn this procedure, no HTTP Server is needed in the background and a single HTTP Request is made."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// Auth code from above\n\nif(token.IsExpired())\n{\n  Token newToken = await auth.RefreshToken(token.RefreshToken);\n  api.AccessToken = newToken.AccessToken\n  api.TokenType = newToken.TokenType\n}\n")))}h.isMDXComponent=!0}}]);