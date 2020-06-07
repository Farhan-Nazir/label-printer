(this["webpackJsonprma-print-tool"]=this["webpackJsonprma-print-tool"]||[]).push([[0],{47:function(e,t,a){e.exports=a(63)},52:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),l=a.n(i),o=(a(52),a(42)),u=a(22),c=a(23),s=a(27),m=a(24),p=a(28),d=a(90),h=a(93),b=a(94),v=a(95),E=a(38),g=a.n(E),f=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{paddingLeft:"15px"}},r.a.createElement("h3",null,"RMA ID: ",this.props.RMAID,r.a.createElement("br",null),"Serial # ",this.props.SerialNumber," ",r.a.createElement("br",null),"Prod-Unit: ",this.props.ProdUnit,r.a.createElement("br",null),"C.O.O: ",this.props.Country)),r.a.createElement("div",{style:{paddingLeft:"20px"}},r.a.createElement(g.a,{size:84,value:"rma"+this.props.RMAID})))}}]),t}(n.Component),y=a(39),O=a.n(y),C=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={scanUnit:"",rmaID:"",isTrue:!0,unitData:[]},a.handleOnChange=function(e){var t=e.target.value;a.setState({scanUnit:t});var n=t.split(",");a.setState({unitData:Object(o.a)(n)})},a.handleOnChangeRmaID=function(e){a.setState({rmaID:e.target.value}),a.state.rmaID.length>0?a.setState({isTrue:!1}):a.setState({isTrue:!0})},a.handleOnReset=function(){return a.setState({scanUnit:"",unitData:["","","","",""],rmaID:"",isTrue:!0})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.unitData;return r.a.createElement("div",{style:{textAlign:"center",marginTop:"15px",marginLeft:"50px",display:"flex"}},r.a.createElement(d.a,{style:{width:"600px"}},r.a.createElement(h.a,{variant:"h3",component:"h3"},"RMA Label Print Tool."),r.a.createElement(h.a,{variant:"subtitle1",component:"h5"},"Please scan a unit to print the label."),r.a.createElement(b.a,{id:"outlined-email-input",required:!0,label:"Scan a unit",type:"text",name:"scanUnit",margin:"normal",variant:"outlined",onChange:this.handleOnChange,value:this.state.scanUnit,autoFocus:!0,fullWidth:!0}),r.a.createElement("br",null),r.a.createElement(v.a,{variant:"contained",color:"secondary",onClick:this.handleOnReset},"Reset")),r.a.createElement(d.a,{style:{width:"400px",height:"500px",marginLeft:"5px"}},r.a.createElement(b.a,{required:!0,id:"outlined-email-input",label:"Serial Number",type:"text",name:"serial",autoComplete:"serial-number",margin:"normal",variant:"outlined",onChange:this.handleOnChange,value:t[0],InputLabelProps:{shrink:!0}}),r.a.createElement("br",null),r.a.createElement(b.a,{id:"outlined-email-input",label:"RMA ID",type:"text",name:"rma-id",autoComplete:"rma-id",margin:"normal",variant:"outlined",value:this.state.rmaID,onChange:this.handleOnChangeRmaID,required:!0}),r.a.createElement("br",null),r.a.createElement(b.a,{required:!0,id:"outlined-email-input",label:"Prod Unit",type:"text",name:"prod-unit",autoComplete:"prod-unit",margin:"normal",variant:"outlined",InputLabelProps:{shrink:!0},value:t[1]}),r.a.createElement("br",null),r.a.createElement(b.a,{id:"outlined-email-input",label:"C.O.O",type:"text",name:"country",autoComplete:"country",margin:"normal",variant:"outlined",value:t[4],InputLabelProps:{shrink:!0},required:!0}),r.a.createElement("br",null),r.a.createElement(O.a,{copyStyles:!1,trigger:function(){return r.a.createElement(v.a,{variant:"contained",disabled:e.state.isTrue,color:"primary"},"Print")},content:function(){return e.componentRef}})),r.a.createElement(f,{ref:function(t){return e.componentRef=t},RMAID:this.state.rmaID,SerialNumber:t[0],ProdUnit:t[1],Country:t[4]}))}}]),t}(n.Component);a(62);var x=function(){return r.a.createElement("div",null," ",r.a.createElement(C,null)," ")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.5ba8576a.chunk.js.map