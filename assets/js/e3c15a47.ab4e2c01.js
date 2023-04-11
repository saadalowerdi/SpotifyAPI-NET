"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[5935],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9294:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"pkce",title:"PKCE"},s=void 0,c={unversionedId:"pkce",id:"pkce",title:"PKCE",description:"The authorization code flow with PKCE is the best option for mobile and desktop applications where it is unsafe to store your client secret. It provides your app with an access token that can be refreshed. For further information about this flow, see IETF RFC-7636.",source:"@site/docs/pkce.md",sourceDirName:".",slug:"/pkce",permalink:"/SpotifyAPI-NET/docs/pkce",draft:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/pkce.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1681239250,formattedLastUpdatedAt:"Apr 11, 2023",frontMatter:{id:"pkce",title:"PKCE"},sidebar:"docs",previous:{title:"Authorization Code",permalink:"/SpotifyAPI-NET/docs/authorization_code"},next:{title:"Token Swap",permalink:"/SpotifyAPI-NET/docs/token_swap"}},p={},u=[{value:"Generating Challenge &amp; Verifier",id:"generating-challenge--verifier",level:2},{value:"Generating Login URI",id:"generating-login-uri",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The authorization code flow with PKCE is the best option for mobile and desktop applications where it is unsafe to store your client secret. It provides your app with an access token that can be refreshed. For further information about this flow, see ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7636"},"IETF RFC-7636"),".")),(0,a.kt)("h2",{id:"generating-challenge--verifier"},"Generating Challenge & Verifier"),(0,a.kt)("p",null,"For every authentication request, a verify code and its challenge code needs to be generated. The class ",(0,a.kt)("inlineCode",{parentName:"p"},"PKCEUtil")," can be used to generate those, either with random generated or self supplied values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// Generates a secure random verifier of length 100 and its challenge\nvar (verifier, challenge) = PKCEUtil.GenerateCodes();\n\n// Generates a secure random verifier of length 120 and its challenge\nvar (verifier, challenge) = PKCEUtil.GenerateCodes(120);\n\n// Returns the passed string and its challenge (Make sure it\'s random and long enough)\nvar (verifier, challenge) = PKCEUtil.GenerateCodes("YourSecureRandomString");\n')),(0,a.kt)("h2",{id:"generating-login-uri"},"Generating Login URI"),(0,a.kt)("p",null,"Like most auth flows, you'll need to redirect your user to Spotify's servers so they are able to grant access to your application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// Make sure "http://localhost:5000/callback" is in your applications redirect URIs!\nvar loginRequest = new LoginRequest(\n  new Uri("http://localhost:5000/callback"),\n  "YourClientId",\n  LoginRequest.ResponseType.Code\n)\n{\n  CodeChallengeMethod = "S256",\n  CodeChallenge = challenge,\n  Scope = new[] { Scopes.PlaylistReadPrivate, Scopes.PlaylistReadCollaborative }\n};\nvar uri = loginRequest.ToUri();\n// Redirect user to uri via your favorite web-server or open a local browser window\n')),(0,a.kt)("p",null,"When the user is redirected to the generated uri, they will have to login with their Spotify account and confirm that your application wants to access their user data. Once confirmed, they will be redirected to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/callback")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," parameter is attached to the query. The redirect URI can also contain a custom protocol paired with UWP App Custom Protocol handler. This received ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," has to be exchanged for an ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"refresh_token"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// This method should be called from your web-server when the user visits "http://localhost:5000/callback"\npublic Task GetCallback(string code)\n{\n  // Note that we use the verifier calculated above!\n  var initialResponse = await new OAuthClient().RequestToken(\n    new PKCETokenRequest("ClientId", code, "http://localhost:5000", verifier)\n  );\n\n  var spotify = new SpotifyClient(initialResponse.AccessToken);\n  // Also important for later: response.RefreshToken\n}\n')),(0,a.kt)("p",null,"With PKCE you can also refresh tokens once they're expired:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var newResponse = await new OAuthClient().RequestToken(\n  new PKCETokenRefreshRequest("ClientId", initialResponse.RefreshToken)\n);\n\nvar spotify = new SpotifyClient(newResponse.AccessToken);\n')),(0,a.kt)("p",null,"If you do not want to take care of manually refreshing tokens, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"PKCEAuthenticator"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"var authenticator = new PKCEAuthenticator(clientId, initialResponse);\n\nvar config = SpotifyClientConfig.CreateDefault()\n  .WithAuthenticator(authenticator);\nvar spotify = new SpotifyClient(config);\n")))}f.isMDXComponent=!0}}]);