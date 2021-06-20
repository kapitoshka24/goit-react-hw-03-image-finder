(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{25:function(e,t,a){},27:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(18),o=a.n(r),s=(a(25),a(9)),i=a(4),l=a(5),u=a(7),h=a(6),m=a(0),g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={searchValue:""},e.handleChange=function(t){var a=t.target.value;e.setState({searchValue:a})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.searchValue),e.reset()},e.reset=function(){e.setState({searchValue:""})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.searchValue;return Object(m.jsx)("header",{className:"Searchbar",children:Object(m.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(m.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(m.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(m.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleChange})]})})}}]),a}(n.Component),d=(a(27),a(19)),b=a.n(d),j=function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,c=void 0===n?1:n;return b()("https://pixabay.com/api/?q=".concat(a,"&page=").concat(c,"&key=").concat("21315741-9bacfcacd69aafd45f00bd411","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},f=function(e){var t=e.smallImage,a=e.largeImage,n=e.tags,c=e.onImageClick;return Object(m.jsx)("li",{className:"ImageGalleryItem",children:Object(m.jsx)("img",{src:t,alt:n,className:"ImageGalleryItem-image",onClick:function(){return c(a,n)}})})},p=function(e){var t=e.images,a=e.onImageClick;return Object(m.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.webformatURL,c=e.largeImageURL,r=e.tags;return Object(m.jsx)(f,{smallImage:n,largeImage:c,tags:r,onImageClick:a},t)}))})},v=function(e){var t=e.onClick;return Object(m.jsx)("div",{className:"ButtonDiv",children:Object(m.jsx)("button",{className:"Button",type:"submit",onClick:t,children:"Load more"})})},O=a(20),y=a.n(O),C=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).backdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e.onEscClose=function(t){"Escape"===t.code&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onEscClose)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onEscClose)}},{key:"render",value:function(){var e=this.props,t=e.largeImage,a=e.tags;return Object(m.jsx)("div",{className:"Overlay",onClick:this.backdropClick,children:Object(m.jsx)("div",{className:"Modal",children:Object(m.jsx)("img",{className:"Modal-photo",src:t,alt:a})})})}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={images:[],currentPage:1,searchQuery:"",largeImageURL:"",tags:"",showModal:!1,isLoading:!1},e.onSubmit=function(t){e.setState({searchQuery:t,currentPage:1,images:[]})},e.fetchImages=function(){var t=e.state,a={searchQuery:t.searchQuery,currentPage:t.currentPage};e.setState({isLoading:!0}),j(a).then((function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),currentPage:e.currentPage+1}})),e.scrollDown()})).finally((function(){return e.setState({isLoading:!1})}))},e.onImageClick=function(t,a){e.setState({largeImageURL:t,tags:a,showModal:!0})},e.scrollDown=function(){window.scrollTo({top:document.documentElement.scrollTop+window.innerHeight,behavior:"smooth"})},e.onClose=function(){e.setState({showModal:!1})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"componentWillUnmount",value:function(){this.setState({searchQuery:""})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.showModal,c=e.largeImageURL,r=e.tags,o=t.length>0&&!a;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{onSubmit:this.onSubmit}),Object(m.jsx)(p,{images:t,onImageClick:this.onImageClick}),o&&Object(m.jsx)(v,{onClick:this.fetchImages}),a&&Object(m.jsx)(y.a,{className:"Loader",type:"Bars",color:"#3f51b5",height:70,width:70}),n&&Object(m.jsx)(C,{largeImage:c,tags:r,onClose:this.onClose})]})}}]),a}(n.Component);o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.7b4dd609.chunk.js.map