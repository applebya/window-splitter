(this["webpackJsonpwindow-splitter"]=this["webpackJsonpwindow-splitter"]||[]).push([[0],{13:function(e,n,t){e.exports=t(21)},18:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(8),o=t.n(i),l=(t(18),t(1)),c=t(2),s=t(4);function u(){var e=Object(l.a)([""]);return u=function(){return e},e}var d=c.b.section.attrs({className:"WindowSplitter-FrameInner"})(u()),h=t(3);function b(){var e=Object(l.a)(["\n    display: block;\n    position: relative;\n    min-width: 6px;\n    width: 6px;\n    cursor: ew-resize;\n\n    :before {\n        content: '';\n        display: block;\n        left: 2px;\n        height: 100%;\n        background: rgba(0, 0, 0, 0.5);\n        width: 1px;\n    }\n"]);return b=function(){return e},e}var f=c.b.div.attrs({className:"WindowSplitter-Divider"})(b());function m(){var e=Object(l.a)(["\n                :first-child {\n                    flex: none;\n                    width: ","%;\n                }\n            "]);return m=function(){return e},e}function g(){var e=Object(l.a)(["\n    display: flex;\n    align-items: stretch;\n    border: 1px solid rgba(0, 0, 0, 0.5);\n\n    > section {\n        flex: 1;\n\n        ","\n    }\n"]);return g=function(){return e},e}var w=c.b.div.attrs({className:"WindowSplitter-Frame"})(g(),(function(e){return e.widthPercent&&Object(c.a)(m(),e.widthPercent)})),p=function(e){var n=e.children,t=Object(s.a)(e,["children"]);if(!(n instanceof Array)||n.length<2)throw new Error("<FrameContainer/> must contain 2 <Frame/> children");var i=Object(r.useState)(null),o=Object(h.a)(i,2),l=o[0],c=o[1],u=Object(r.useState)(!1),d=Object(h.a)(u,2),b=d[0],m=d[1],g=function(){var e=Object(r.useRef)(),n=Object(r.useState)({width:null,left:null}),t=Object(h.a)(n,2),a=t[0],i=t[1];return Object(r.useEffect)((function(){if(e&&e.current){var n=e.current.getBoundingClientRect(),t=n.width,r=n.left;i({width:t,left:r})}}),[e]),[e,a.width,a.left]}(),p=Object(h.a)(g,3),v=p[0],k=p[1],j=p[2],y=Object(r.useCallback)((function(){m(!1)}),[]),E=Object(r.useCallback)((function(e){var n=e.clientX;j&&k&&c((n-j)/k*100)}),[k,j]);return Object(r.useEffect)((function(){b?(window.addEventListener("mousemove",E),window.addEventListener("mouseup",y)):(window.removeEventListener("mousemove",E),window.removeEventListener("mouseup",y))}),[b,E,y]),a.a.createElement(w,Object.assign({ref:v,widthPercent:l},t),n[0],a.a.createElement(f,{onMouseDown:function(){m(!0)}}),n[1])};function v(){var e=Object(l.a)([""]);return v=function(){return e},e}var k=Object(c.b)((function(e){var n=e.container,t=Object(s.a)(e,["container"]),r=n?p:d;return a.a.createElement(r,t)}))(v());function j(){var e=Object(l.a)(["\n    width: 75%;\n    margin: 0px auto;\n"]);return j=function(){return e},e}function y(){var e=Object(l.a)(["\n    h1,\n    h2 {\n        text-align: center;\n    }\n"]);return y=function(){return e},e}var E=c.b.div(y()),O=Object(c.b)(k)(j());var x=function(){return a.a.createElement(E,null,a.a.createElement("h1",null,"Window Splitter Demo"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("h2",null,"Full-screen window frames"),a.a.createElement(k,{container:!0},a.a.createElement(k,null,"Sink me square-rigged sutler Jack Ketch rum avast gunwalls Plate Fleet long clothes marooned barkadeer. Take a caulk ballast Letter of Marque case shot black spot hogshead scallywag haul wind draft hornswaggle bilged on her anchor. Parley clipper port lookout lugsail ho bring a spring upon her cable Cat o'nine tails landlubber or just lubber coxswain aye. Cable booty code of conduct reef broadside bilge rat brigantine nipperkin Arr fire ship port. Keelhaul belaying pin handsomely wherry run a rig crack Jennys tea cup coffer brigantine fire in the hole provost bucko. Tack execution dock rigging Chain Shot Letter of Marque fire in the hole galleon Plate Fleet strike colors draft grog."),a.a.createElement(k,null,"Killick spike reef sails brigantine hang the jib Buccaneer American Main jury mast mizzen provost ho. Carouser black jack swing the lead fore gunwalls pink sheet hulk quarter killick booty. Sea Legs hardtack yo-ho-ho lateen sail marooned execution dock coffer lookout furl scurvy American Main. Hearties smartly broadside measured fer yer chains Pirate Round hornswaggle pink Plate Fleet dance the hempen jig bilged on her anchor swing the lead. Brig booty clap of thunder Barbary Coast hands gangplank Chain Shot snow Plate Fleet splice the main brace gabion. Jack reef barkadeer maroon hornswaggle dead men tell no tales code of conduct Buccaneer hempen halter scuttle spirits.")),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("h2",null,"Constrained window frames"),a.a.createElement(O,{container:!0},a.a.createElement(k,null,"Hearties smartly broadside measured fer yer chains Pirate Round hornswaggle pink Plate Fleet dance the hempen jig bilged on her anchor swing the lead."),a.a.createElement(k,null,"Hearties smartly broadside measured fer yer chains Pirate Round hornswaggle pink Plate Fleet dance the hempen jig bilged on her anchor swing the lead.")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.2d9b4cdd.chunk.js.map