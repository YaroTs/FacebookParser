/*!CK:878675397!*//*1386558168,173224797*/

if (self.CavalryLogger) { CavalryLogger.start_js(["S53mx"]); }

__d("WindowComm",["URI"],function(a,b,c,d,e,f){var g=b('URI'),h={_callbacks:{},makeHandler:function(i,j,k){j=j||'opener';if(!k)k='f'+(Math.random()*(1<<30)).toString(16).replace('.','');h._callbacks[k]=i;return new g('/connect/window_comm.php').setQueryData({_id:k,_relation:j}).getQualifiedURI().toString();},_recv:function(i){var j=new g(i).getQueryData();h._callbacks[j._id](j);}};e.exports=h;a.WindowComm=h;});
__d("resolveWindow",[],function(a,b,c,d,e,f){function g(h){var i=window,j=h.split('.');try{for(var l=0;l<j.length;l++){var m=j[l],n=/^frames\[['"]?([a-zA-Z0-9\-_]+)['"]?\]$/.exec(m);if(n){i=i.frames[n[1]];}else if(m==='opener'||m==='parent'||m==='top'){i=i[m];}else return null;}}catch(k){return null;}return i;}e.exports=g;});
__d("XD",["Arbiter","DOM","DOMDimensions","Log","PHPQuerySerializer","URI","copyProperties","isInIframe","resolveWindow"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('DOM'),i=b('DOMDimensions'),j=b('Log'),k=b('PHPQuerySerializer'),l=b('URI'),m=b('copyProperties'),n=b('isInIframe'),o=b('resolveWindow'),p='fb_xdm_frame_'+location.protocol.replace(':',''),q={_callbacks:[],_opts:{autoResize:false,allowShrink:true,channelUrl:null,hideOverflow:false,resizeTimeout:1000,resizeWidth:false,expectResizeAck:false,resizeAckTimeout:6000},_lastResizeAckId:0,_resizeCount:0,_resizeTimestamp:0,_shrinker:null,init:function(s){this._opts=m(m({},this._opts),s);if(this._opts.autoResize)this._startResizeMonitor();g.subscribe('Connect.Unsafe.resize.ack',function(t,u){if(!u.id)u.id=this._resizeCount;if(u.id>this._lastResizeAckId)this._lastResizeAckId=u.id;}.bind(this));},send:function(s,t){t=t||this._opts.channelUrl;if(!t)return;var u={},v=new l(t);m(u,s);m(u,k.deserialize(v.getFragment()));var w=l(u.origin).getOrigin(),x=o(u.relation.replace(/^parent\./,'')),y=50,z=function(){var aa=x.frames[p];try{aa.proxyMessage(k.serialize(u),w);}catch(ba){if(--y){setTimeout(z,100);}else j.warn('No such frame "'+p+'" to proxyMessage to');}};z();},_computeSize:function(){var s=i.getDocumentDimensions(),t=0;if(this._opts.resizeWidth){var u=document.body;if(u.clientWidth<u.scrollWidth){t=s.width;}else{var v=u.childNodes;for(var w=0;w<v.length;w++){var x=v[w],y=x.offsetLeft+x.offsetWidth;if(y>t)t=y;}}t=Math.max(t,q.forced_min_width);}s.width=t;if(this._opts.allowShrink){if(!this._shrinker)this._shrinker=h.create('div');h.appendContent(document.body,this._shrinker);s.height=Math.max(this._shrinker.offsetTop,0);}return s;},_startResizeMonitor:function(){var s,t=document.documentElement;if(this._opts.hideOverflow){t.style.overflow='hidden';document.body.style.overflow='hidden';}var u=(function(){var v=this._computeSize(),w=Date.now(),x=this._lastResizeAckId<this._resizeCount&&(w-this._resizeTimestamp)>this._opts.resizeAckTimeout;if(!s||(this._opts.expectResizeAck&&x)||(this._opts.allowShrink&&s.width!=v.width)||(!this._opts.allowShrink&&s.width<v.width)||(this._opts.allowShrink&&s.height!=v.height)||(!this._opts.allowShrink&&s.height<v.height)){s=v;this._resizeCount++;this._resizeTimestamp=w;var y={type:'resize',height:v.height,ackData:{id:this._resizeCount}};if(v.width&&v.width!=0)y.width=v.width;try{if(l(document.referrer).isFacebookURI()&&n()&&window.name&&window.parent.location&&window.parent.location.toString&&l(window.parent.location).isFacebookURI()){var aa=window.parent.document.getElementsByTagName('iframe');for(var ba=0;ba<aa.length;ba=ba+1)if(aa[ba].name==window.name){if(this._opts.resizeWidth)aa[ba].style.width=y.width+'px';aa[ba].style.height=y.height+'px';}}this.send(y);}catch(z){this.send(y);}}}).bind(this);u();setInterval(u,this._opts.resizeTimeout);}},r=m({},q);e.exports.UnverifiedXD=r;e.exports.XD=q;a.UnverifiedXD=r;a.XD=q;});
__d("legacy:developer-comments-js",["CommentAdminPanelController"],function(a,b,c,d){a.CommentAdminPanelController=b('CommentAdminPanelController');},3);
__d("legacy:feedback",["Feedback"],function(a,b,c,d){a.Feedback=b('Feedback');},3);
__d("legacy:dom",["DOM"],function(a,b,c,d){a.DOM=b('DOM');},3);
__d("RequiredFormListener",["Event","Input"],function(a,b,c,d,e,f){var g=b('Event'),h=b('Input');g.listen(document.documentElement,'submit',function(i){var j=i.getTarget().getElementsByTagName('*');for(var k=0;k<j.length;k++)if(j[k].getAttribute('required')&&h.isEmpty(j[k])){j[k].focus();return false;}},g.Priority.URGENT);});
__d("ArbiterFrame",[],function(a,b,c,d,e,f){var g={inform:function(h,i,j){var k=parent.frames,l=k.length,m;i.crossFrame=true;for(var n=0;n<l;n++){m=k[n];try{if(!m||m==window)continue;if(m.require){m.require('Arbiter').inform(h,i,j);}else if(m.ServerJSAsyncLoader)m.ServerJSAsyncLoader.wakeUp(h,i,j);}catch(o){}}}};e.exports=g;});
__d("BootloadBundle",["Bootloader"],function(a,b,c,d,e,f){var g=b('Bootloader'),h={markLoaded:function(i){var j={};i.forEach(function(k){j[k]={resources:[],module:true};});g.enableBootload(j);g.done(i);}};e.exports=h;});
__d("Plugin",["Arbiter","ArbiterFrame"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('ArbiterFrame'),i={CONNECT:'platform/plugins/connect',DISCONNECT:'platform/plugins/disconnect',ERROR:'platform/plugins/error',RELOAD:'platform/plugins/reload',DIALOG:'platform/plugins/dialog',connect:function(j,k){var l={identifier:j,href:j,story_fbid:k};g.inform(i.CONNECT,l);h.inform(i.CONNECT,l);},disconnect:function(j,k){var l={identifier:j,href:j,story_fbid:k};g.inform(i.DISCONNECT,l);h.inform(i.DISCONNECT,l);},error:function(j,k){g.inform(i.ERROR,{action:j,content:k});},reload:function(j){g.inform(i.RELOAD,j||'');h.inform(i.RELOAD,{});}};e.exports=i;});
__d("PluginMessage",["DOMEventListener"],function(a,b,c,d,e,f){var g=b('DOMEventListener'),h={listen:function(){g.add(window,'message',function(event){if((/\.facebook\.com$/).test(event.origin)&&/^FB_POPUP:/.test(event.data)){var i=JSON.parse(event.data.substring(9));if('reload' in i&&/^https?:/.test(i.reload))document.location.replace(i.reload);}});}};e.exports=h;});
__d("PluginOptin",["DOMEvent","DOMEventListener","PluginMessage","PopupWindow","URI","UserAgent","copyProperties"],function(a,b,c,d,e,f){var g=b('DOMEvent'),h=b('DOMEventListener'),i=b('PluginMessage'),j=b('PopupWindow'),k=b('URI'),l=b('UserAgent'),m=b('copyProperties');function n(o,p){m(this,{return_params:k.getRequestURI().getQueryData(),login_params:{},optin_params:{},plugin:o,api_key:p});this.addReturnParams({ret:'optin'});delete this.return_params.hash;}m(n.prototype,{addReturnParams:function(o){m(this.return_params,o);return this;},addLoginParams:function(o){m(this.login_params,o);return this;},addOptinParams:function(o){m(this.optin_params,o);return this;},start:function(){var o=new k('/dialog/plugin.optin').addQueryData(this.optin_params).addQueryData({app_id:this.api_key||127760087237610,secure:k.getRequestURI().isSecure(),social_plugin:this.plugin,return_params:JSON.stringify(this.return_params),login_params:JSON.stringify(this.login_params)});if(l.mobile()){o.setSubdomain('m');}else o.addQueryData({display:'popup'});this.popup=j.open(o.toString(),420,450);i.listen();return this;}});n.starter=function(o,p,q,r){var s=new n(o);s.addReturnParams(p||{});s.addLoginParams(q||{});s.addOptinParams(r||{});return s.start.bind(s);};n.listen=function(o,p,q,r,s){h.add(o,'click',function(t){new g(t).kill();n.starter(p,q,r,s)();});};e.exports=n;});
__d("PluginConnectButton",["Arbiter","CSS","DOM","DOMDimensions","DOMEvent","DOMEventListener","Form","Plugin","PluginOptin","Style","URI","copyProperties","csx","cx","getElementPosition"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('CSS'),i=b('DOM'),j=b('DOMDimensions'),k=b('DOMEvent'),l=b('DOMEventListener'),m=b('Form'),n=b('Plugin'),o=b('PluginOptin'),p=b('Style'),q=b('URI'),r=b('copyProperties'),s=b('csx'),t=b('cx'),u=b('getElementPosition'),v=g.SUBSCRIBE_NEW,w=g.subscribe,x=function(z,aa){return l.add(z,'click',aa);};function y(z){this.config=z;this.busy=false;var aa=i.find(z.form,'.pluginConnectButton');this.buttons=aa;this.node_connected=i.find(aa,'.pluginConnectButtonConnected');this.node_disconnected=i.find(aa,'.pluginConnectButtonDisconnected');var ba=function(da){new k(da).kill();if(!this.busy){this.submit();this.busy=true;}}.bind(this);x(this.node_disconnected,ba);x(i.find(aa,'.pluginButtonX button'),ba);if(z.clickopensdialog)l.add(this.node_connected,'click',function(da){g.inform(n.DIALOG,da);}.bind(this));var ca=this.update.bind(this);w(n.CONNECT,ca,v);w(n.DISCONNECT,ca,v);w(n.ERROR,this.error.bind(this),v);w('Connect.Unsafe.xd/reposition',this.flip.bind(this));if(z.autosubmit)this.submit();}r(y.prototype,{update:function(z,event){this.busy=false;var aa=this.config;if(event.identifier!==aa.identifier)return;var ba=z===n.CONNECT?true:false,ca="/plugins/"+aa.plugin+"/";ca+=!ba?"connect":"disconnect";h[ba?'show':'hide'](this.node_connected);h[ba?'hide':'show'](this.node_disconnected);try{if(document.activeElement.nodeName.toLowerCase()==='button'){var ea=ba?this.node_connected:this.node_disconnected,fa=i.find(ea,'button');fa.disabled=false;fa.focus();}}catch(da){}aa.connected=ba;aa.form.setAttribute('action',ca);aa.form.setAttribute('ajaxify',ca);},error:function(event,z){this.busy=false;if(z.action in {connect:1,disconnect:1}){i.setContent(this.buttons,z.content);i.find(this.buttons,'a').focus();}},submit:function(){if(!this.config.canpersonalize)return this.login();m.bootstrap(this.config.form);this.fireStateToggle();},fireStateToggle:function(){var z=this.config;if(z.connected){n.disconnect(z.identifier);}else n.connect(z.identifier);},login:function(){var z=this.config.plugin;new o(z,q.getRequestURI().getQueryData().api_key).addReturnParams({act:'connect'}).start();},flip:function(z,aa){var ba=i.find(document.body,'.pluginConnectButtonLayoutRoot');h.toggleClass(ba,"_4-nd");var ca=i.find(document.body,"._4xn8"),da=i.scry(this.config.form,'.pluginConnectButtonConnected .pluginButtonIcon'),ea=p.get(da[0],'display')!=='none'?da[0]:da[1],fa=(aa.type==='restore')?6:u(ea).x+j.getElementDimensions(ea).width/2-6;p.set(ca,'left',fa+'px');}});e.exports=y;});
__d("PluginConnection",["Arbiter","CSS","Plugin","copyProperties"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('CSS'),i=b('Plugin'),j=b('copyProperties'),k=function(){};j(k.prototype,{init:function(l,m,n,event){event=event||i.CONNECT;this.identifier=l;this.element=m;this.css=n;g.subscribe([i.CONNECT,i.DISCONNECT],function(o,p){if(l===p.href)h[o===event?'addClass':'removeClass'](m,n);return true;});return this;},connected:function(){return h.hasClass(this.element,this.css);},connect:function(){return g.inform(i.CONNECT,{href:this.identifier},g.BEHAVIOR_STATE);},disconnect:function(){return g.inform(i.DISCONNECT,{href:this.identifier},g.BEHAVIOR_STATE);},toggle:function(){return this.connected()?this.disconnect():this.connect();}});k.init=function(l){for(var m,n=0;n<l.length;n++){m=new k();m.init.apply(m,l[n]);}};e.exports=k;});
__d("UnverifiedXD",["XD","XDUnverifiedChannel"],function(a,b,c,d,e,f){var g=b('XD').UnverifiedXD,h=c('XDUnverifiedChannel').channel;g.init({channelUrl:h});e.exports=g;});
__d("PluginResize",["Log","UnverifiedXD","copyProperties","Locale"],function(a,b,c,d,e,f){var g=b('Log'),h=b('UnverifiedXD'),i=b('copyProperties'),j=b('Locale');function k(n){n=n||document.body;var o=0;if(j.isRTL()&&n.offsetParent){o=n.offsetParent.offsetWidth-n.offsetLeft-n.offsetWidth;}else if(!j.isRTL())o=n.offsetLeft;return n.offsetWidth+o;}function l(n){n=n||document.body;return n.offsetHeight+n.offsetTop;}function m(n,o,event,p){this.calcWidth=n||k;this.calcHeight=o||l;this.width=undefined;this.height=undefined;this.reposition=!!p;this.event=event||'resize';}i(m.prototype,{resize:function(){var n=this.calcWidth(),o=this.calcHeight();if(n!==this.width||o!==this.height){g.debug('Resizing Plugin: (%s, %s, %s, %s)',n,o,this.event,this.reposition);this.width=n;this.height=o;h.send({type:this.event,width:n,height:o,reposition:this.reposition});}return this;},auto:function(n){setInterval(this.resize.bind(this),n||250);return this;}});m.auto=function(n,event,o){return new m(k.bind(null,n),l.bind(null,n),event).resize().auto(o);};m.autoHeight=function(n,o,event,p){return new m(function(){return n;},l.bind(null,o),event).resize().auto(p);};e.exports=m;});
__d("PluginShareButton",["DOMEvent","DOMEventListener","PluginResize","PopupWindow","UserAgent"],function(a,b,c,d,e,f){var g=b('DOMEvent'),h=b('DOMEventListener'),i=b('PluginResize'),j=b('PopupWindow'),k=b('UserAgent'),l={listen:function(m,n){var o=m.href;h.add(m,'click',function(p){new g(p).kill();j.open(o,340,670);});},resize:function(m){var n=k.firefox()||k.ie()>=9?1:0;new i(function(){return m.offsetWidth+m.offsetLeft+n;},function(){return m.offsetHeight+m.offsetTop;}).resize().auto();}};e.exports=l;});
__d("PluginXDReady",["Arbiter","UnverifiedXD"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('UnverifiedXD'),i={handleMessage:function(j){if(!j.method)return;try{g.inform('Connect.Unsafe.'+j.method,JSON.parse(j.params),g.BEHAVIOR_PERSISTENT);}catch(k){}}};a.XdArbiter=i;h.send({xd_action:'plugin_ready',name:window.name});e.exports=null;});