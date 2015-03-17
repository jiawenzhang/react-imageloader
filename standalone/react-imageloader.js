!function(r,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React")):"function"==typeof define&&define.amd?define(["React"],t):"object"==typeof exports?exports.ReactImageLoader=t(require("React")):r.ReactImageLoader=t(r.React)}(this,function(r){return function(r){function t(n){if(e[n])return e[n].exports;var o=e[n]={exports:{},id:n,loaded:!1};return r[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var e={};return t.m=r,t.c=e,t.p="",t(0)}([function(r,t,e){var n,o,a,s,i,p,u,d,c,l,f,h,g,m,y,L=[].slice;s=e(1),f=e(2),i=e(3),a=s.PropTypes,g=s.DOM,y=g.span,l=g.img,h=g.noscript,p={PENDING:"pending",LOADING:"loading",LOADED:"loaded",FAILED:"failed"},d=function(r){return r.naturalWidth+r.naturalHeight===0||r.width+r.height===0},m=function(r){return(s.renderToStaticMarkup||s.renderComponentToStaticMarkup)(r)},c=function(r){return r},u=function(r){return(s.createFactory||c)(r)},o=u(s.createClass({displayName:"ImageLoaderImage",getInitialState:function(){return{isInitialRender:!0}},componentDidMount:function(){return this.setState({isInitialRender:!1})},handleLoad:function(){var r,t,e;return r=1<=arguments.length?L.call(arguments,0):[],this.isMounted()?(e=this.refs.image,"naturalWidth"in e&&!d(e)?this.handleError(new Error("Image <"+e.src+"> could not be loaded.")):"function"==typeof(t=this.props).onLoad?t.onLoad.apply(t,r):void 0):void 0},handleError:function(){var r,t;return r=1<=arguments.length?L.call(arguments,0):[],"function"==typeof(t=this.props).onError?t.onError.apply(t,r):void 0},renderImg:function(){return l(f(this.props,{ref:"image",onLoad:this.handleLoad,onError:this.handleError}))},render:function(){var r;return this.state.isInitialRender?(r=m(h(null,this.renderImg())),y({style:{display:"none"},dangerouslySetInnerHTML:{__html:r}})):this.renderImg()}})),r.exports=n=s.createClass({displayName:"ImageLoader",mixins:[i],propTypes:{wrapper:a.func,preloader:a.func},getInitialState:function(){return{status:p.PENDING}},getDefaultProps:function(){return{wrapper:y,loader:o}},componentWillReceiveProps:function(r){return this.props.src!==r.src?this.setState({status:r.src?p.LOADING:p.PENDING}):void 0},getClassName:function(){var r;return r="imageloader "+this.state.status,this.props.className&&(r+=" "+this.props.className),r},getImgProps:function(){var r;return r=f(this.props,{style:f(this.props.style,{display:this.state.status===p.LOADED?null:"none"})}),delete r.wrapper,delete r.preloader,delete r.children,r},loaderDidLoad:function(){return this.setState({status:p.LOADED})},loaderDidError:function(){return this.setState({status:p.FAILED})},renderChildren:function(){return Array.isArray(this.props.children)?this.props.children.slice(0):[this.props.children]},render:function(){var r,t;return t=[{className:this.getClassName()}],this.props.src&&t.push(this.renderLoader(o,this.getImgProps())),this.props.preloader&&this.state.status!==p.LOADED&&t.push(this.props.preloader()),this.state.status===p.FAILED&&(t=t.concat(this.renderChildren())),(r=this.props).wrapper.apply(r,t)}})},function(t){t.exports=r},function(r){function t(){for(var r={},t=0;t<arguments.length;t++){var e=arguments[t];for(var n in e)e.hasOwnProperty(n)&&(r[n]=e[n])}return r}r.exports=t},function(r,t,e){var n,o,a,s,i=[].slice;o=e(1),s=e(4),n=o.PropTypes,r.exports=a={propTypes:{src:n.string,onLoad:n.func,onError:n.func},renderLoader:function(r,t){return r(s(t,{src:this.props.src,onLoad:function(r){return function(){var t,e;return t=1<=arguments.length?i.call(arguments,0):[],"function"==typeof r.loaderDidLoad&&r.loaderDidLoad.apply(r,t),"function"==typeof(e=r.props).onLoad?e.onLoad.apply(e,t):void 0}}(this),onError:function(r){return function(){var t,e;return t=1<=arguments.length?i.call(arguments,0):[],"function"==typeof r.loaderDidError&&r.loaderDidError.apply(r,t),"function"==typeof(e=r.props).onError?e.onError.apply(e,t):void 0}}(this)}))}}},function(r){function t(){for(var r={},t=0;t<arguments.length;t++){var e=arguments[t];for(var n in e)e.hasOwnProperty(n)&&(r[n]=e[n])}return r}r.exports=t}])});