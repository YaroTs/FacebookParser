/*!CK:4195926261!*//*1386558167,173203223*/

if (self.CavalryLogger) { CavalryLogger.start_js(["wm9Nv"]); }

__d("DoublyLinkedListMap",[],function(a,b,c,d,e,f){function g(){"use strict";this._head=null;this._tail=null;this._nodes={};this._nodeCount=0;}g.prototype.get=function(h){"use strict";return this._nodes[h]?this._nodes[h].data:null;};g.prototype.getIndex=function(h){"use strict";for(var i=this._head,j=0;i;i=i.next,j++)if(i.key===h)return j;return null;};g.prototype._insert=function(h,i,j,k){"use strict";j&&!this._nodes[j]&&(j=null);var l=(j&&this._nodes[j])||(k?this._head:this._tail),m={data:i,key:h,next:null,prev:null};if(l){this.remove(h);if(k){m.prev=l.prev;l.prev&&(l.prev.next=m);l.prev=m;m.next=l;}else{m.next=l.next;l.next&&(l.next.prev=m);l.next=m;m.prev=l;}}m.prev===null&&(this._head=m);m.next===null&&(this._tail=m);this._nodes[h]=m;this._nodeCount++;return this;};g.prototype.insertBefore=function(h,i,j){"use strict";return this._insert(h,i,j,true);};g.prototype.insertAfter=function(h,i,j){"use strict";return this._insert(h,i,j,false);};g.prototype.prepend=function(h,i){"use strict";return this.insertBefore(h,i,this._head&&this._head.key);};g.prototype.append=function(h,i){"use strict";return this.insertAfter(h,i,this._tail&&this._tail.key);};g.prototype.remove=function(h){"use strict";var i=this._nodes[h];if(i){var j=i.next,k=i.prev;j&&(j.prev=k);k&&(k.next=j);this._head===i&&(this._head=j);this._tail===i&&(this._tail=k);delete this._nodes[h];this._nodeCount--;}return this;};g.prototype.find=function(h){"use strict";for(var i=this._head;i;i=i.next)if(h(i.data))return i.key;return null;};g.prototype.reduce=function(h,i){"use strict";for(var j=this._head;j;j=j.next)i=h(j.data,i);return i;};g.prototype.exists=function(h){"use strict";return !!this._nodes[h];};g.prototype.isEmpty=function(){"use strict";return !this._head;};g.prototype.reset=function(){"use strict";this._head=null;this._tail=null;this._nodes={};this._nodeCount=0;};g.prototype.map=function(h){"use strict";for(var i=this._head;i;i=i.next)h(i.data);};g.prototype.getCount=function(){"use strict";return this._nodeCount;};g.prototype.getHead=function(){"use strict";return this._head&&this._head.data;};g.prototype.getTail=function(){"use strict";return this._tail&&this._tail.data;};g.prototype.getNext=function(h){"use strict";var i=this._nodes[h];if(i&&i.next)return i.next.data;return null;};g.prototype.getPrev=function(h){"use strict";var i=this._nodes[h];if(i&&i.prev)return i.prev.data;return null;};e.exports=g;});
__d("ErrorDialog",["Dialog","emptyFunction"],function(a,b,c,d,e,f){var g=b('Dialog'),h=b('emptyFunction'),i={showAsyncError:function(j){try{return i.show(j.getErrorSummary(),j.getErrorDescription());}catch(k){alert(j);}},show:function(j,k,l,m){return (new g()).setTitle(j).setBody(k).setButtons([g.OK]).setStackable(true).setModal(true).setHandler(l||h).setButtonsMessage(m||'').show();}};e.exports=i;});
__d("ScrollingPager",["Arbiter","CSS","DOM","OnVisible","UIPagelet","$","copyProperties","ge"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('CSS'),i=b('DOM'),j=b('OnVisible'),k=b('UIPagelet'),l=b('$'),m=b('copyProperties'),n=b('ge'),o={};function p(q,r,s,t){"use strict";this.scroll_loader_id=q;this.pagelet_src=r;this.data=s;this.options=t||{};if(this.options.target_id){this.target_id=this.options.target_id;this.options.append=true;}else this.target_id=q;this.scroll_area_id=this.options.scroll_area_id;this.handler=null;}p.prototype.setBuffer=function(q){"use strict";this.options.buffer=q;this.onvisible&&this.onvisible.setBuffer(q);};p.prototype.getBuffer=function(){"use strict";return this.options.buffer;};p.prototype.register=function(){"use strict";this.onvisible=new j(l(this.scroll_loader_id),this.getHandler(),false,this.options.buffer,false,n(this.scroll_area_id));o[this.scroll_loader_id]=this;g.inform(p.REGISTERED,{id:this.scroll_loader_id});};p.prototype.getInstance=function(q){"use strict";return o[q];};p.prototype.getHandler=function(){"use strict";if(this.handler)return this.handler;function q(r){var s=n(this.scroll_loader_id);if(!s){this.onvisible.remove();return;}h.addClass(s.firstChild,'async_saving');var t=this.options.handler,u=this.options.force_remove_pager&&(this.scroll_loader_id!==this.target_id);this.options.handler=function(){g.inform('ScrollingPager/loadingComplete');t&&t.apply(null,arguments);if(u)i.remove(s);};if(r)this.data.pager_fired_on_init=true;k.loadFromEndpoint(this.pagelet_src,this.target_id,this.data,this.options);}return q.bind(this);};p.prototype.setHandler=function(q){"use strict";this.handler=q;};p.prototype.removeOnVisible=function(){"use strict";this.onvisible.remove();};p.prototype.checkBuffer=function(){"use strict";this.onvisible&&this.onvisible.checkBuffer();};p.getInstance=function(q){"use strict";return o[q];};m(p,{REGISTERED:'ScrollingPager/registered'});e.exports=p;});
__d("TimelineSection",["Arbiter","DOMScroll","DoublyLinkedListMap","Run","TidyArbiterMixin","copyProperties","ge"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('DOMScroll'),i=b('DoublyLinkedListMap'),j=b('Run'),k=b('TidyArbiterMixin'),l=b('copyProperties'),m=b('ge'),n=null;function o(){n=null;}function p(q,r,s){"use strict";this.id=q;this.label=s;this.nodeID=r;this._parentSection=null;this.childSections=new i();this._isLoaded=false;setTimeout(p.inform.bind(p,'sectionInitialized/'+q,{section:this},g.BEHAVIOR_STATE),0);}p.prototype.appendSection=function(q){"use strict";this.childSections.append(q.id,q);q._parentSection=this;};p.prototype.freeze=function(){"use strict";this.freezeChildren();};p.prototype.freezeChildren=function(){"use strict";var q=this.childSections.getHead();while(q){!q.isActive()&&q.freeze();q=q.getNext();}};p.prototype.getNext=function(){"use strict";return this._parentSection&&this._parentSection.childSections.getNext(this.id);};p.prototype.getPrev=function(){"use strict";return this._parentSection&&this._parentSection.childSections.getPrev(this.id);};p.prototype.isActive=function(){"use strict";var q=this;while(q){if(q.id===n)return true;q=q._parentSection;}return false;};p.prototype.isLoaded=function(){"use strict";return this._isLoaded;};p.prototype.setIsLoaded=function(q){"use strict";this._isLoaded=q;return this;};p.prototype.scrollTo=function(){"use strict";if(!m(this.nodeID))return;h.scrollTo(this.getNode(),true,false,false,h.scrollTo.bind(this).bind(null,this.getNode(),0));};p.prototype.thaw=function(){"use strict";this.thawChildren();};p.prototype.thawChildren=function(){"use strict";var q=this.childSections.getHead();while(q){q.thaw();q=q.getNext();}};p.prototype.getNode=function(){"use strict";throw new Error('This function needs to be implemented in children.');};p.callWithSection=function(q,r){"use strict";this.subscribe('sectionInitialized/'+q,function(s,t){r(t.section);});};p.setActiveSectionID=function(q){"use strict";!n&&j.onLeave(o);n=q;};l(p,k);e.exports=p;});
__d("TimelineConstants",[],function(a,b,c,d,e,f){var g={DS_HEIGHT:'timeline-unit-height',DS_LOADED:'timeline-capsule-loaded',DS_SIDEORG:'timeline-unit-sideorg',DS_TAILBALANCE:'timeline-capsule-tailbalance',DS_COLUMN_HEIGHT_DIFFERENTIAL:'timeline-column-diff-height',FIXED_SIDE_LEFT:'left',FIXED_SIDE_RIGHT:'right',FIXED_SIDE_BOTH:'both',FIXED_SIDE_NONE:'none',SCROLL_TO_OFFSET:30,SUBSECTION_SCROLL_TO_OFFSET:90,SCRUBBER_DEFAULT_OFFSET:38,SECTION_LOADING:'TimelineConstants/sectionLoading',SECTION_LOADED:'TimelineConstants/sectionLoaded',SECTION_FULLY_LOADED:'TimelineConstants/sectionFullyLoaded',SECTION_REGISTERED:'TimelineConstants/sectionRegistered'};e.exports=g;});
__d("TimelineLegacySections",[],function(a,b,c,d,e,f){var g={},h={get:function(i){return g[i];},getAll:function(){return g;},remove:function(i){delete g[i];},removeAll:function(){g={};},set:function(i,j){g[i]=j;}};e.exports=h;});
__d("TimelineURI",["URI"],function(a,b,c,d,e,f){var g=b('URI'),h={TIMELINE_KEY:'timeline',WALL_KEY:'wall',parseURI:function(i){i=g(i);var j=i.getQueryData(),k=i.getPath(),l=k.split('/').slice(1);if(l[0]=='people'||l[0]=='pages')l=l.slice(2);var m=j.sk||l[1]||h.TIMELINE_KEY;if(m==h.WALL_KEY)m=h.TIMELINE_KEY;var n=null,o=null;if(m==h.TIMELINE_KEY){o=parseInt(l[2],10)||null;n=parseInt(l[3],10)||null;}return {path:k,id:j.id||l[0],key:m,viewas:j.viewas?j.viewas:0,filter:j.filter?j.filter:null,year:o,month:n,friendship:!!j.and};}};e.exports=h;});
__d("TimelineController",["Event","Arbiter","CSS","DataStore","DOMQuery","Run","ScrollingPager","TidyArbiter","TimelineConstants","TimelineLegacySections","TimelineURI","Vector","ViewportBounds","$","copyProperties","ge","tidyEvent","queryThenMutateDOM"],function(a,b,c,d,e,f){var g=b('Event'),h=b('Arbiter'),i=b('CSS'),j=b('DataStore'),k=b('DOMQuery'),l=b('Run'),m=b('ScrollingPager'),n=b('TidyArbiter'),o=b('TimelineConstants'),p=b('TimelineLegacySections'),q=b('TimelineURI'),r=b('Vector'),s=b('ViewportBounds'),t=b('$'),u=b('copyProperties'),v=b('ge'),w=b('tidyEvent'),x=b('queryThenMutateDOM'),y=358,z=48,aa=740,ba=1285,ca=null,da=false,ea,fa,ga,ha={},ia={},ja=[],ka=null,la=null,ma=false,na=false,oa=0,pa=false,qa=false,ra=false,sa={},ta=false;function ua(){ka&&ka.remove();ka=null;}function va(hb,ib,jb){jb=jb||[];if(ha[hb])return ha[hb][ib].apply(ha[hb],jb);ia[hb]=ia[hb]||{};ia[hb][ib]=jb;return false;}function wa(){if(!(pa||ra||qa)){ua();return;}var hb=r.getScrollPosition();pa=pa&&ab(v('rightCol'),hb,'paddingTop',true);qa=qa&&ab(t('pagelet_above_header_timeline'),hb,'top');ra=ra&&ab(t('blueBar'),hb,'paddingTop');}var xa=0;function ya(){xa=r.getScrollPosition();}function za(){x(ya,function(){var hb=oa===0||xa.y>=oa;va(gb.STICKY_HEADER,'toggle',[hb]);va(gb.CONTENT,'checkCurrentSectionChange');},'TimelineController/scrollListener');}function ab(hb,ib,jb,kb){if(!hb){ua();return;}if(ib.y<=0){bb(hb,jb);return false;}else{var lb=kb&&gb.getCurrentScrubber();if(lb&&i.hasClass(lb.getRoot(),'fixed_elem')){bb(hb,jb);return false;}else{var mb=parseInt(hb.style[jb],10)||0;if(ib.y<mb){i.addClass(hb,'timeline_fixed');hb.style[jb]=ib.y+'px';}else i.removeClass(hb,'timeline_fixed');}}return true;}function bb(hb,ib){hb.style[ib]='0px';i.removeClass(hb,'timeline_fixed');}function cb(){x(gb.shouldShowWideAds,function(){va(gb.ADS,'adjustAdsType',[ma]);va(gb.ADS,'adjustAdsToFit');va(gb.CONTENT,'adjustContentPadding');va(gb.STICKY_HEADER_NAV,'adjustMenuHeights');},'TimelineController/resize');}function db(hb,ib){if(hb=='sidebar/initialized')ta=true;va(gb.ADS,'adjustAdsType',[gb.shouldShowWideAds()]);}function eb(hb,ib){var jb=v('rightCol');if(jb){jb.style.paddingTop=ib+'px';pa=true;}var kb=t('pagelet_above_header_timeline');if(kb.firstChild){t('above_header_timeline_placeholder').style.height=kb.offsetHeight+'px';kb.style.top=ib+'px';qa=true;}var lb=document.documentElement;ra=lb.clientHeight<400||lb.clientWidth<lb.scrollWidth;if(ra)t('blueBar').style.paddingTop=ib+'px';ka=g.listen(window,'scroll',wa);h.inform('reflow');}function fb(){while(ja.length)ja.pop().remove();for(var hb in ha)ha[hb].reset&&ha[hb].reset();ua();ga.unsubscribe();ga=null;ca=null;ea=null;ha={};ia={};la=null;na=false;oa=0;qa=false;if(pa){var ib=v('rightCol');if(ib){ib.style.paddingTop='';i.removeClass(ib,'timeline_fixed');}}pa=false;if(ra){t('blueBar').style.paddingTop='';i.removeClass(t('blueBar'),'timeline_fixed');}ra=false;ta=false;da=false;j.purge(o.DS_HEIGHT);j.purge(o.DS_LOADED);j.purge(o.DS_SIDEORG);j.purge(o.DS_TAILBALANCE);j.purge(o.DS_COLUMN_HEIGHT_DIFFERENTIAL);}var gb={NAV:'nav',STICKY_HEADER:'sticky_header',STICKY_HEADER_NAV:'sticky_header_nav',SCRUBBER:'scrubber',CONTENT:'content',ADS:'ads',LOGGING:'logging',init:function(hb,ib,jb){if(da)return;if(ib==q.WALL_KEY)ib=q.TIMELINE_KEY;da=true;ea=hb;fa=jb.has_fixed_ads;na=jb.one_column_minimal;sa={allactivity:true,approve:true};if(!na)u(sa,{games:true,map:true,music:true,video:true});sa[q.TIMELINE_KEY]=true;va(gb.CONTENT,'adjustContentPadding');ja.push(g.listen(window,'scroll',za),g.listen(window,'resize',cb));ga=h.subscribe(['sidebar/initialized','sidebar/show','sidebar/hide'],db);w(n.subscribe('TimelineCover/coverCollapsed',eb));l.onLeave(fb);gb.registerCurrentKey(ib);},setAdsTracking:function(hb){va(gb.ADS,'start',[hb]);},pageHasScrubber:function(hb){return !hb||(!na&&hb.match(/^(og_)?app_/))||(hb in sa);},fixedAds:function(){return fa;},registerCurrentKey:function(hb){ca=hb;la=hb!=='map'&&r.getViewportDimensions().y<aa&&gb.pageHasScrubber(hb);la=la||t('blueBar').offsetTop;va(gb.ADS,'setShortMode',[la]);va(gb.ADS,'updateCurrentKey',[hb]);oa=hb==q.TIMELINE_KEY?y-z:0;},getCurrentKey:function(){return ca;},getCurrentScrubber:function(){return ha[gb.SCRUBBER];},getCurrentStickyHeaderNav:function(){return ha[gb.STICKY_HEADER_NAV];},scrubberHasLoaded:function(hb){i.conditionClass(hb.getRoot(),'fixed_elem',!la);va(gb.ADS,'registerScrubber',[hb]);},scrubberHasChangedState:function(){va(gb.ADS,'adjustAdsToFit');},scrubberWasClicked:function(hb){va(gb.LOGGING,'logScrubberClick',[hb]);},stickyHeaderNavWasClicked:function(hb){va(gb.LOGGING,'logStickyHeaderNavClick',[hb]);},sectionHasChanged:function(hb,ib){va(gb.STICKY_HEADER_NAV,'updateSection',[hb,ib]);va(gb.SCRUBBER,'updateSection',[hb,ib]);va(gb.ADS,'loadAdsIfEnoughTimePassed');va(gb.LOGGING,'logSectionChange',[hb,ib]);},navigateToSection:function(hb){va(gb.CONTENT,'navigateToSection',[hb]);},shouldShowWideAds:function(){if(!ta){ma=false;}else{var hb=ba+s.getRight()+s.getLeft();ma=r.getViewportDimensions().x>=hb;}return ma;},sidebarInitialized:function(){return ta;},adjustStickyHeaderWidth:function(){va(gb.STICKY_HEADER,'adjustWidth');},isOneColumnMinimal:function(){return na;},hideStickyHeaderNavSectionMenu:function(){va(gb.STICKY_HEADER_NAV,'hideSectionMenu');},register:function(hb,ib){ha[hb]=ib;if(ia[hb]){for(var jb in ia[hb])va(hb,jb,ia[hb][jb]);delete ia[hb];}},adjustScrollingPagerBuffer:function(hb,ib){var jb=j.get(o.DS_COLUMN_HEIGHT_DIFFERENTIAL,ib);if(!jb)return;var kb=m.getInstance(hb);kb&&kb.setBuffer(kb.getBuffer()+Math.abs(jb));},runOnceWhenSectionFullyLoaded:function(hb,ib,jb){var kb=p.get(ib);if(kb){var lb=false;k.scry(kb.node,'.fbTimelineCapsule').forEach(function(nb){if(!lb&&parseInt(j.get(o.DS_LOADED,nb.id),10)>=parseInt(jb,10)){hb();lb=true;}});if(lb)return;}var mb=h.subscribe(o.SECTION_FULLY_LOADED,function(nb,ob){if(ob.scrubberKey===ib&&ob.pageIndex===jb){hb();mb.unsubscribe();}});}};e.exports=gb;});
__d("TimelineSmartInsert",["Run","UserAgent","Vector"],function(a,b,c,d,e,f){var g=b('Run'),h=b('UserAgent'),i=b('Vector'),j=100;function k(q){if(q==='viewport')return i.getViewportDimensions().y;return q;}var l=false,m=false;function n(){if(m)return;g.onLeave(o);m=true;}function o(){l=false;m=false;}var p={run:function(q,r,s){n();if(!l||h.ie()<=8){r();return;}var t=q.offsetHeight;r();var u=q.offsetHeight,v=i.getScrollPosition().y,w=i.getElementPosition(q).y;if(u!==t&&w<v&&w+t<v+k(s||j))window.scrollBy(0,u-t);},enable:function(){l=true;}};e.exports=p;});
__d("legacy:ui-scrolling-pager-js",["ScrollingPager"],function(a,b,c,d){a.ScrollingPager=b('ScrollingPager');},3);
__d("ButtonGroup",["CSS","DataStore","Parent","copyProperties","createArrayFrom"],function(a,b,c,d,e,f){var g=b('CSS'),h=b('DataStore'),i=b('Parent'),j=b('copyProperties'),k=b('createArrayFrom'),l='firstItem',m='lastItem';function n(s,t){var u=i.byClass(s,t);if(!u)throw new Error('invalid use case');return u;}function o(s){return g.shown(s)&&k(s.childNodes).some(g.shown);}function p(s){var t,u,v;k(s.childNodes).forEach(function(w){v=o(w);g.removeClass(w,l);g.removeClass(w,m);g.conditionShow(w,v);if(v){t=t||w;u=w;}});t&&g.addClass(t,l);u&&g.addClass(u,m);g.conditionShow(s,t);}function q(s,t){var u=n(t,'uiButtonGroupItem');s(u);p(u.parentNode);}function r(s){"use strict";this._root=n(s,'uiButtonGroup');h.set(this._root,'ButtonGroup',this);p(this._root);}r.getInstance=function(s){"use strict";var t=n(s,'uiButtonGroup'),u=h.get(t,'ButtonGroup');return u||new r(t);};j(r.prototype,{hideItem:q.bind(null,g.hide),showItem:q.bind(null,g.show),toggleItem:q.bind(null,g.toggle)});e.exports=r;});
__d("ButtonGroupMonitor",["ContextualDialog","ContextualLayer","CSS","Layer","Parent","SelectorDeprecated"],function(a,b,c,d,e,f){var g=b('ContextualDialog'),h=b('ContextualLayer'),i=b('CSS'),j=b('Layer'),k=b('Parent'),l=b('SelectorDeprecated');function m(n){var o=k.byClass(n,'bg_stat_elem')||k.byClass(n,'uiButtonGroup');o&&i.toggleClass(o,'uiButtonGroupActive');}j.subscribe(['hide','show'],function(n,o){if(o instanceof h||o instanceof g)m(o.getCausalElement());});l.subscribe(['close','open'],function(n,o){m(o.selector);});});