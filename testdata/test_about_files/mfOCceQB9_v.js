/*!CK:1352673979!*//*1386688595,178191153*/

if (self.CavalryLogger) { CavalryLogger.start_js(["wBI6Z"]); }

__d("ComposerXDatepickerIconReset",["CSS","cx"],function(a,b,c,d,e,f){var g=b('CSS'),h=b('cx');function i(j){g.removeClass(j.element,"_4_na");g.removeClass(j.element,"_509o");}e.exports=i;});
__d("TimelineAggregatePost",["AsyncRequest","DataStore","DOM","Event","Parent","ScrollableArea","Style","cx"],function(a,b,c,d,e,f){var g=b('AsyncRequest'),h=b('DataStore'),i=b('DOM'),j=b('Event'),k=b('Parent'),l=b('ScrollableArea'),m=b('Style'),n=b('cx'),o={init:function(p){j.listen(p,'click',function(q){var r=q.getTarget();if(q.isDefaultRequested()||r.tagName==='A'||k.byClass(r,"_1ww"))return true;var s=k.byTag(r,'li'),t=h.get(s,'url');g.bootstrap(t,s);});},initPage:function(p){j.listen(p,'click',function(q){var r=k.byClass(q.getTarget(),'uiCloseButton');if(r)return;var s=k.byTag(q.getTarget(),'li');new g().setURI(h.get(s,'url')).send();});},poke:function(p){l.poke(p);},setScrollHeight:function(p){var q=i.find(p,'.sArea');m.set(q,'height',p.offsetHeight+'px');}};e.exports=o;});
__d("legacy:TimelineAggregatePost",["TimelineAggregatePost"],function(a,b,c,d){a.TimelineAggregatePost=b('TimelineAggregatePost');},3);
__d("TimelineCommentsLoader",["Event","CommentPrelude","CSS","DOM","Parent","emptyFunction"],function(a,b,c,d,e,f){var g=b('Event'),h=b('CommentPrelude'),i=b('CSS'),j=b('DOM'),k=b('Parent'),l=b('emptyFunction'),m={init:function(){m.init=l;g.listen(document.body,'click',function(n){var o=k.byClass(n.getTarget(),'fbTimelineFeedbackCommentLoader');if(o){n.kill();h.click(o,false);var p=k.byTag(o,'form'),q=j.scry(p,'li.uiUfiViewAll input');if(!q.length)q=j.scry(p,'li.fbUfiViewPrevious input');if(!q.length)q=j.scry(p,'a.UFIPagerLink');q[0].click();i.show(j.find(p,'li.uiUfiComments'));i.removeClass(o,'fbTimelineFeedbackCommentLoader');}});}};e.exports=m;});
__d("TimelineCapsule",["Arbiter","CSS","DataStore","DOM","DOMQuery","DOMScroll","Parent","TimelineConstants","TimelineLegacySections","UserAgent","Vector","$","createArrayFrom","csx","isEmpty","queryThenMutateDOM"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('CSS'),i=b('DataStore'),j=b('DOM'),k=b('DOMQuery'),l=b('DOMScroll'),m=b('Parent'),n=b('TimelineConstants'),o=b('TimelineLegacySections'),p=b('UserAgent'),q=b('Vector'),r=b('$'),s=b('createArrayFrom'),t=b('csx'),u=b('isEmpty'),v=b('queryThenMutateDOM'),w=(function(){var x=45,y=15,z={},aa={};function ba(oa){return h.hasClass(oa,'fbTimelineBalancer');}function ca(oa){return oa.getAttribute('data-spine');}function da(oa){return h.hasClass(oa,'placeholderUnit');}function ea(oa,pa){if(pa)return (i.get(n.DS_SIDEORG,oa.id)||oa.getAttribute('data-side'));return oa.getAttribute('data-side');}var fa=function(oa,pa){if(p.ie()<=6){fa=function(qa,ra){i.set(n.DS_SIDEORG,qa.id,ea(qa,true));qa.setAttribute('data-side',ra);h.removeClass(qa,'leftColumn');h.removeClass(qa,'rightColumn');h.addClass(qa,ra=='l'?'leftColumn':'rightColumn');};}else fa=function(qa,ra){i.set(n.DS_SIDEORG,qa.id,ea(qa,true));qa.setAttribute('data-side',ra);};fa(oa,pa);};function ga(oa){return oa.getAttribute('data-size');}function ha(oa){if(h.hasClass(oa,'fbTimelineOneColumn')&&oa.prevSibling&&h.hasClass(oa.prevSibling,'fbTimelineOneColumn'))return y*2;if(h.hasClass(oa,'fbTimelineIndeterminateContent'))return 0;return y;}function ia(oa,pa){var qa=0;if(h.shown(oa)&&!h.hasClass(oa,'placeholderUnit'))qa=oa.offsetHeight+ha(oa);i.set(n.DS_HEIGHT,oa.id,parseInt(qa,10));}function ja(oa){var pa=i.get(n.DS_HEIGHT,oa.id,null);return pa;}function ka(oa,pa){if(ga(pa)=='2'){return 0;}else if(ea(pa)=='r'){return oa+ja(pa);}else return oa-ja(pa);}function la(oa){k.scry(oa,"._3ram").forEach(function(pa){var qa=pa.getAttribute('data-endmarker'),ra=pa.getAttribute('data-pageindex'),sa=function(){if(!pa.parentNode)return;i.set(n.DS_LOADED,oa.id,ra);j.remove(pa);g.inform(n.SECTION_FULLY_LOADED,{scrubberKey:qa,pageIndex:ra,capsuleID:oa.id,childCount:oa.childNodes.length});};if(o.get(qa)){sa();}else var ta=g.subscribe(n.SECTION_REGISTERED,function(ua,va){if(va.scrubberKey===qa){sa();ta.unsubscribe();}});});g.inform('TimelineCapsule/balanced',{capsule:oa});}function ma(oa){if(u(z[oa.id]))return;var pa=ba(oa)?oa.firstChild:oa,qa=pa.childNodes.length,ra={},sa={},ta,ua=y,va=y,wa,xa=[];for(var ya=0;ya<qa;ya++){ta=pa.childNodes[ya];if(h.hasClass(ta,'fbTimelineUnit')){wa=k.scry(ta,'div.timelineUnitContainer')[0];if(wa)sa[ta.id]=wa.getAttribute('data-time');if(!da(ta)&&h.shown(ta)){if(ga(ta)=='2'){ra[ta.id]=Math.max(ua,va);ua=va=ra[ta.id]+ja(ta);}else if(ea(ta)=='r'){ra[ta.id]=va;va+=ja(ta);}else{ra[ta.id]=ua;ua+=ja(ta);}if(ea(ta,true)=='l'||ga(ta)=='2')xa.push(ta.id);}}}for(ya=0;ya<xa.length-1;++ya){var za=xa[ya],ab=xa[ya+1],bb=ra[za]+x,cb=ra[ab];for(var db in z[oa.id]){if(bb>cb)break;var eb=z[oa.id][db];if(h.shown(eb))continue;if(sa[db]<=sa[za]&&sa[db]>sa[ab]){eb.style.top=bb+"px";bb+=x;h.show(eb);}}}}function na(oa,pa){var qa=m.byAttribute(oa,'data-size');if(qa){if(h.hasClass(oa.parentNode,'timelineReportContent')){pa(oa);}else pa(qa);w.balanceCapsule(m.byClass(qa,'fbTimelineCapsule'));}}return {removeUnit:function(oa){na(oa,function(pa){j.remove(pa);});},removeUnitWithID:function(oa){w.removeUnit(r(oa));},hideUnit:function(oa){na(oa,function(pa){h.addClass(pa,'fbTimelineColumnHidden');});},undoHideUnit:function(oa,pa){j.remove(m.byClass(pa,'hiddenText'));na(oa,function(qa){h.removeClass(qa,'fbTimelineColumnHidden');});},unplacehold:function(oa){var pa=r(oa);pa.style.top=null;h.removeClass(pa,'visiblePlaceholder');h.removeClass(pa,'placeholder');var qa=m.byClass(pa,'fbTimelineCapsule');delete z[qa.id][oa];w.balanceCapsule(qa);},scrollToCapsule:function(oa){if(!aa.hasOwnProperty(oa.id)){var pa=q.getElementPosition(oa.parentNode);l.scrollTo(new q(q.getScrollPosition().x,pa.y-n.SUBSECTION_SCROLL_TO_OFFSET,'document'));aa[oa.id]=true;}},balanceCapsuleFromChild:function(oa,pa){w.balanceCapsule(m.byClass(oa,'fbTimelineCapsule'),pa);},balanceCapsuleDeferred:function(oa,pa){setTimeout(w.balanceCapsule.bind(null,oa,pa),0);},balanceCapsule:function(oa,pa){if(!oa||!oa.childNodes)return;var qa=0,ra,sa=document.createDocumentFragment(),ta=[],ua=[],va=[],wa=false,xa=pa&&pa.heights_action;if(pa&&pa.tail_balance)i.set(n.DS_TAILBALANCE,oa.id,pa.tail_balance);if(p.chrome()||p.webkit())h.toggleClass(oa,'webkitFix');for(var ya=0;ya<oa.childNodes.length;ya++){ra=oa.childNodes[ya];if(ca(ra)){continue;}else if(ba(ra)){s(ra.firstChild.childNodes).forEach(function(gb){ia(gb,xa);});continue;}ia(ra,xa);if(ea(ra,true)=='r'){ua.push(ra);}else ta.push(ra);va.push(ra);if(ga(ra)!='2')if((qa>0&&ea(ra)=='r')||(qa<0&&ea(ra)=='l'))wa=true;qa=ka(qa,ra);}var za=[],ab=[],bb=[];k.scry(oa,'li.fbTimelineBalancer').forEach(function(gb){var hb=s(gb.firstChild.childNodes);if(gb.getAttribute('data-nonunits')){bb=bb.concat(hb);}else if(ea(gb)=='left'){za=za.concat(hb);}else if(ea(gb)=='right')ab=ab.concat(hb);});if(wa){oa.style.minHeight=oa.offsetHeight;ta.forEach(function(gb){if(ga(gb)!='2')fa(gb,'l');});ua.forEach(function(gb){if(ga(gb)!='2')fa(gb,'r');});var cb=j.create('li',{className:'fbTimelineBalancer'},j.create('ol',null,ta));cb.setAttribute('data-side','left');j.prependContent(oa,cb);za=ta.concat(za);var db=j.create('li',{className:'fbTimelineBalancer'},j.create('ol',null,ua));db.setAttribute('data-side','right');j.prependContent(oa,db);ab=ua.concat(ab);qa=0;}while(bb.length)sa.appendChild(bb.shift());while((qa>=0&&za.length)||(qa<0&&ab.length)){if(qa>=0){ra=za.shift();}else ra=ab.shift();sa.appendChild(ra);qa=ka(qa,ra);}oa.appendChild(sa);k.scry(oa,'li.fbTimelineBalancer').forEach(function(gb){if(!gb.firstChild.childNodes.length)j.remove(gb);});var eb=(pa&&pa.tail_balance)||i.get(n.DS_TAILBALANCE,oa.id);if(eb)qa=w.tailBalance(oa,qa,eb);if(wa){va.forEach(function(gb){if(gb.parentNode!==oa){oa.appendChild(gb);qa=ka(qa,gb);}});oa.style.minHeight=null;}var fb=m.byClass(oa,'fbTimelineSection');if(fb)i.set(n.DS_COLUMN_HEIGHT_DIFFERENTIAL,fb.id,qa);z[oa.id]={};k.scry(oa,'li.placeholderUnit').forEach(function(gb){z[oa.id][gb.id]=gb;});ma(oa);la(oa);},tailBalance:function(oa,pa,qa){if(!oa)return pa;var ra=[],sa=[],ta=[],ua=[];k.scry(oa,'li.fbTimelineBalancer').forEach(function(wa){var xa=s(wa.firstChild.childNodes);if(wa.getAttribute('data-nonunits')){ua=ua.concat(xa);}else if(ea(wa)=='left'){sa=sa.concat(xa);}else if(ea(wa)=='right')ta=ta.concat(xa);ra=ra.concat(xa);});if((qa==n.FIXED_SIDE_RIGHT&&sa.length)||(qa==n.FIXED_SIDE_LEFT&&ta.length))return pa;var va=document.createDocumentFragment();if(ra)while(ra.length){if(qa!=n.FIXED_SIDE_NONE)if(ga(ra[0])!='2')if(pa>=0){fa(ra[0],'l');}else fa(ra[0],'r');pa=ka(pa,ra[0]);va.appendChild(ra.shift());}oa.appendChild(va);k.scry(oa,'li.fbTimelineBalancer').forEach(function(wa){if(!wa.firstChild.childNodes.length)j.remove(wa);});return pa;},loadTwoColumnUnits:function(oa){var pa=r(oa);v(function(){var qa=m.byClass(pa,'fbTimelineSection');if(qa){var ra=k.find(pa,"._3rbf"),sa=k.find(pa,"._3rbh"),ta=sa.offsetHeight-ra.offsetHeight;i.set(n.DS_COLUMN_HEIGHT_DIFFERENTIAL,qa.id,ta);}},la.bind(null,pa));}};})();e.exports=a.TimelineCapsule||w;});
__d("TimelineCapsuleUtilities",["CSS"],function(a,b,c,d,e,f){var g=b('CSS'),h={setFirstUnit:function(i){var j=true;for(var k=0;k<i.childNodes.length;++k){var l=i.childNodes[k];if(l.id.indexOf('tl_unit_')===0)if(j){j=false;g.addClass(l,'firstUnit');}else{g.removeClass(l,'firstUnit');break;}}}};e.exports=h;});
__d("TimelineUnitSelector",["DOMQuery","Parent"],function(a,b,c,d,e,f){var g=b('DOMQuery'),h=b('Parent'),i={getUnitsWithTime:function(j){return g.scry(j,'div.timelineUnitContainer').filter(function(k){return (h.byClass(k,'fbTimelineCapsule')===j&&k.getAttribute('data-time'));});}};e.exports=i;});
__d("TimelineComposerUtilities",["Event","Arbiter","Bootloader","CSS","DOM","DOMQuery","Parent","TimelineUnitSelector","Vector","cx","csx"],function(a,b,c,d,e,f){var g=b('Event'),h=b('Arbiter'),i=b('Bootloader'),j=b('CSS'),k=b('DOM'),l=b('DOMQuery'),m=b('Parent'),n=b('TimelineUnitSelector'),o=b('Vector'),p=b('cx'),q=b('csx'),r=86400*31,s=86400000,t={listenToSetEstimatedDate:function(u,v){return h.subscribe('ComposerXTimelineTagger/init',function(w,x){if(l.contains(u,x.datePickerElement)){t.setEstimatedDate(x.datePickerInstance,v());x.composerTimelineTagger.switchToTagger('date');}});},listenToSetEstimatedDateOld:function(u,v){return h.subscribe('TimelineBackdatedComposerTagger/initialized',function(event,w){if(w.composer===u)w.date_picker.subscribe('initialized',function(x,y){t.setEstimatedDate(y,v());});});},listenToPublish:function(u,v){if(u.root)u=u.root;return h.subscribe('composer/publish',function(event,w){if(w.composer_id===u.id)i.loadModules(['TimelineStoryPublisher'],function(x){x.publish(w);v&&v();});});},listenToAnotherComposerOpen:function(u,v){return h.subscribe('composer/mutate',function(w,x){if(x!==u)v();});},listenToCancel:function(u,v){return g.listen(u,'click',function(event){if(m.byClass(event.getTarget(),"_306"))v();});},listenToCancelOld:function(u,v){return g.listen(u,'click',function(event){m.byClass(event.getTarget(),'cancelBtn')&&v();});},hidePlaceIfAttachmentsTooTall:function(u){var v=l.find(u,"._2_4"),w=o.getElementDimensions(v).y;if(w>50)j.hide(l.find(v,"._mg"));},hidePlaceIfAttachmentsTooTallOld:function(u){var v=k.find(u,'ul.fbTimelineComposerAttachments'),w=o.getElementDimensions(v).y;if(w>50){var x=m.byTag(k.scry(v,'span.placeAttachment')[0],'li');x&&j.hide(x);}},setEstimatedDate:function(u,v){var w,x;if(v&&j.hasClass(v,'fbTimelineCapsule')){w=v.getAttribute('data-start');x=v.getAttribute('data-end');if(w&&x){var y=new Date(x*1000),z=new Date();if(y>z){u.setDate(z.getFullYear(),z.getMonth()+1,z.getDate());}else if(x-w>2*r){u.setDate(y.getFullYear());}else u.setDate(y.getFullYear(),y.getMonth()+1);}return;}var aa=m.byClass(v,'fbTimelineCapsule');if(aa){w=aa.getAttribute('data-start');x=aa.getAttribute('data-end');var ba=o.getElementPosition(v).y,ca=[x,null],da=[w,null],ea=n.getUnitsWithTime(aa);for(var fa=0;fa<ea.length;fa++){var ga=ea[fa],ha=k.scry(ga.parentNode,'.spinePointer')[0];if(!ha)continue;var ia=o.getElementPosition(ha).y;if(ia<=ba){if(!ca[1]||ia>ca[1])ca=[ga.getAttribute('data-time'),ia];}else if(!da[1]||ia<da[1])da=[ga.getAttribute('data-time'),ia];}if(ca[0]!==null&&da[0]!==null){var ja=Math.round((parseInt(ca[0],10)+parseInt(da[0],10))/2)*1000;ja=Math.min(new Date()-s,ja);u.setDateWithTimestamp(ja);}}}};e.exports=t;});
__d("TimelineComposer",["Arbiter","Bootloader","CSS","DOM","Parent","Run","TimelineCapsule","TimelineCapsuleUtilities","TimelineComposerUtilities","$","cx"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('Bootloader'),i=b('CSS'),j=b('DOM'),k=b('Parent'),l=b('Run'),m=b('TimelineCapsule'),n=b('TimelineCapsuleUtilities'),o=b('TimelineComposerUtilities'),p=b('$'),q=b('cx'),r;function s(u){if(u.isScheduledPost||u.isOGPost)return;if(!u.streamStory){window.location.reload();return;}if(u.backdatedTime){h.loadModules(['TimelineStoryPublisher'],function(w){w.publish(u);});return;}var v=t.renderCapsuleBasedStory(r,u.streamStory);g.inform('TimelineComposer/on_after_publish',v,g.BEHAVIOR_PERSISTENT);}var t={init:function(u){r=p(u);var v=g.subscribe('composer/publish',function(event,w){if(w.composer_id===r.id)s(w);});l.onLeave(v.unsubscribe.bind(v));if(i.hasClass(r,"_mj")){o.hidePlaceIfAttachmentsTooTall(r);}else o.hidePlaceIfAttachmentsTooTallOld(r);},renderCapsuleBasedStory:function(u,v){var w=k.byClass(u,'fbTimelineCapsule');if(!w)return;var x=k.byClass(u,'timelineUnitContainer').parentNode,y=x.nextSibling;if(y&&y.getAttribute('data-spine'))x=x.nextSibling;var z=j.insertAfter(x,v)[0];h.loadModules(['Animation'],function(aa){new aa(z.firstChild).from('backgroundColor','#fff8dd').to('backgroundColor','#fff').duration(2000).ease(aa.ease.both).go();});n.setFirstUnit(w);m.balanceCapsule(w);return z;}};e.exports=a.TimelineComposer||t;});
__d("TimelineContentLoader",["Arbiter","CSS","DOM","DOMScroll","Event","OnVisible","Parent","ScrollingPager","TimelineConstants","TimelineController","TimelineLegacySections","TimelineSmartInsert","TimelineURI","UIPagelet","UserAgent","Vector","$","arrayContains","copyProperties","createArrayFrom","csx","debounce","ge","startsWith","tx","userAction"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('CSS'),i=b('DOM'),j=b('DOMScroll'),k=b('Event'),l=b('OnVisible'),m=b('Parent'),n=b('ScrollingPager'),o=b('TimelineConstants'),p=b('TimelineController'),q=b('TimelineLegacySections'),r=b('TimelineSmartInsert'),s=b('TimelineURI'),t=b('UIPagelet'),u=b('UserAgent'),v=b('Vector'),w=b('$'),x=b('arrayContains'),y=b('copyProperties'),z=b('createArrayFrom'),aa=b('csx'),ba=b('debounce'),ca=b('ge'),da=b('startsWith'),ea=b('tx'),fa=b('userAction'),ga=false,ha=false,ia,ja=null,ka={},la=[],ma=[],na=[],oa={},pa={},qa={},ra={},sa=null,ta=false,ua=null;function va(fb,gb,hb,ib,jb){"use strict";this.node=fb;this.loaded=ib;this.canScrollLoad=true;this.canUnload=gb!=eb.RECENT;this.scrubberKey=gb;this.historicUnitCount=jb;this._pageletLoadData=hb;this._expandPageletLoadData={};this.rightColumnFinished=false;}va.prototype.load=function(fb,gb){"use strict";if(this.loaded)return;var hb=this._pageletLoadData;g.inform(o.SECTION_LOADING,{data:hb,scrubberKey:this.scrubberKey});this.loaded=true;h.removeClass(this.node,'fbTimelineTimePeriodUnexpanded');h.removeClass(this.node,'fbTimelineTimePeriodSuppressed');var ib='ProfileTimelineSectionPagelet',jb=this.scrubberKey==eb.WAY_BACK;if(jb)ib='ProfileTimelineRemainingYearsPagelet';hb.highlight_unit_data=fb;hb.parent_key=this.parentKey;hb.force_no_friend_activity=ta;h.conditionClass(this.node,'combinedSections',hb.combine_sections);h.conditionClass(this.node,'fbTimelineSectionLoading',!hb.combine_sections);if(this.canUnload&&ha){var kb=this.node.firstChild.cloneNode(true);h.hide(kb);i.insertAfter(this.node,kb);}else this.canScrollLoad=false;var lb=null;if(gb&&!hb.combine_sections){this.node.style.minHeight=window.innerHeight+'px';lb=function(){this.node.style.minHeight='';ab(this.scrubberKey);}.bind(this);}else if(hb.combine_sections)lb=function(){ab(this.scrubberKey);eb.hideSection(this.scrubberKey);}.bind(this);var mb=hb.combine_sections&&jb;qa[this.scrubberKey]=t.loadFromEndpoint(ib,mb?hb.unit_container_id+'_left':this.node.id,hb,{usePipe:true,jsNonblock:true,constHeight:true,append:mb,finallyHandler:lb});db(this.scrubberKey);};va.prototype.preload=function(){"use strict";h.addClass(this.node,'fbTimelineTimePeriodSuppressed');h.removeClass(this.node,'fbTimelineTimePeriodUnexpanded');var fb=i.find(this.node,'span.sectionLabel');if(fb.getAttribute('data-original-label')){i.setContent(fb,fb.getAttribute('data-original-label'));fb.removeAttribute('data-original-label');}};va.prototype.unload=function(){"use strict";if(!this.loaded||!this.canUnload)return;this.loaded=false;qa[this.scrubberKey]&&qa[this.scrubberKey].cancel();h.addClass(this.node,'fbTimelineTimePeriodUnexpanded');h.removeClass(this.node,'fbTimelineTimePeriodSuppressed');if(this.node.nextSibling&&h.hasClass(this.node.nextSibling,'fbTimelineSection')){i.setContent(this.node,this.node.nextSibling);h.show(this.node.firstChild);}else i.empty(this.node);this.deactivateScrollLoad();};va.prototype.activateScrollLoad=function(){"use strict";this.canScrollLoad=true;h.removeClass(this.node,'fbTimelineTimePeriodSuppressed');h.addClass(this.node,'fbTimelineTimePeriodUnexpanded');pa[this.scrubberKey]&&pa[this.scrubberKey].reset();};va.prototype.deactivateScrollLoad=function(){"use strict";if(!this.loaded){this.canScrollLoad=false;h.removeClass(this.node,'fbTimelineTimePeriodUnexpanded');h.addClass(this.node,'fbTimelineTimePeriodSuppressed');pa[this.scrubberKey]&&pa[this.scrubberKey].remove();}};va.prototype.setExpandLoadData=function(fb){"use strict";this._expandPageletLoadData=fb;return this;};va.prototype.appendData=function(fb){"use strict";y(this._pageleLoadData,fb);return this;};va.prototype.expandSubSections=function(){"use strict";if(this.subSections.length)eb.navigateToSection(this.subSections[0].scrubberKey);};va.prototype.expand=function(fb){"use strict";if(!this.loaded)return;sa.add_event('expand_'+this.scrubberKey);var gb=i.find(this.node,'.fbTimelineSectionExpander');h.addClass(gb.firstChild,'async_saving');fb&&h.addClass(fb,'async_saving');eb.navigateToSection(this.scrubberKey);i.scry(this.node,'.fbTimelineCapsule').forEach(i.remove);this._expandPageletLoadData.new_expand=true;qa[this.scrubberKey]&&qa[this.scrubberKey].cancel();qa[this.scrubberKey]=t.loadFromEndpoint('ProfileTimelineSectionPagelet',gb.id,this._expandPageletLoadData,{usePipe:true,jsNonblock:true,constHeight:true});};va.prototype.isPermalinkPeriod=function(){"use strict";return this._pageletLoadData.is_permalink_period;};va.prototype.shouldCombineSections=function(){"use strict";return this._pageletLoadData.combine_sections;};function wa(){if(ga)return;p.register(p.CONTENT,eb);sa=fa('timeline').uai('init','scrubber',false);ga=true;if(u.ie()<=7)ha=true;}var xa=ba(function(fb,gb,hb){var ib=q.get(fb).historicUnitCount;gb-=ib;hb-=1;if(ib==-1||hb<=0||gb<0)return;var jb=eb.getNextSectionKey(fb);if(jb){q.get(jb).load();xa(jb,gb,hb);}},500);function ya(fb,gb,hb,ib){var jb=eb.getNextSectionKey(gb);if(jb){pa[jb]=new l(fb,za.bind(null,jb,fb),false,hb||1000);}else if(gb!==eb.WAY_BACK){ib=ib?ib:0;if(ib>80)return null;setTimeout(ya.bind(null,fb,gb,hb,ib+1),250);}}function za(fb,gb){var hb=q.get(fb);if(hb&&hb.canScrollLoad){sa.add_event("scroll_load_"+fb);if(ha){hb.preload();}else{hb.load();if(ua&&!hb.shouldCombineSections())xa(fb,ua.required_units,ua.max_parallelism);}gb&&i.remove(gb);}}function ab(fb){var gb=pa[fb];if(gb){gb.remove();pa[fb]=null;i.remove(gb.getElement());}}function bb(){var fb,gb,hb=false;for(var ib=0;ib<la.length;ib++){var jb=la[ib];if(!jb)continue;var kb=q.get(jb);if(kb&&(kb.canScrollLoad||kb.loaded)){if(!kb.loaded){h.removeClass(kb.node,'fbTimelineTimePeriodSuppressed');h.addClass(kb.node,'fbTimelineTimePeriodUnexpanded');}if(fb&&gb){cb(fb,gb);if(hb)fb.deactivateScrollLoad();hb=true;}fb=null;gb=null;continue;}else if(fb){gb=kb;kb.deactivateScrollLoad();}else{fb=kb;if(hb)kb.activateScrollLoad();}h.removeClass(kb.node,'fbTimelineTimePeriodSuppressed');h.addClass(kb.node,'fbTimelineTimePeriodUnexpanded');}}function cb(fb,gb){h.removeClass(gb.node,'fbTimelineTimePeriodUnexpanded');h.addClass(gb.node,'fbTimelineTimePeriodSuppressed');var hb=i.find(fb.node,'span.sectionLabel'),ib=i.find(gb.node,'span.sectionLabel');if(!ib.getAttribute('data-original-label'))ib.setAttribute('data-original-label',i.getText(ib));if(hb.getAttribute('data-month')&&ib.getAttribute('data-month')&&hb.getAttribute('data-year')==ib.getAttribute('data-year')){i.setContent(ib,ea._("\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c {month1} - {month2} {year}",{month1:ib.getAttribute('data-month'),month2:hb.getAttribute('data-month'),year:hb.getAttribute('data-year')}));}else if(hb.getAttribute('data-year')!==ib.getAttribute('data-year')){i.setContent(ib,ea._("\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c {year1} - {year2}",{year1:ib.getAttribute('data-year'),year2:hb.getAttribute('data-year')}));}else i.setContent(ib,ea._("\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c {year}",{year:ib.getAttribute('data-year')}));}function db(fb){if(ha)for(var gb=0;gb<la.length-1;gb++){var hb=la[gb];if(!hb)continue;if(hb!=fb){var ib=q.get(hb);if(ib.loaded&&ib.canUnload)ib.unload();}}bb();}var eb={WAY_BACK:'way_back',RECENT:'recent',HEADER_SCROLL_CUTOFF:80,CURRENT_SECTION_OFFSET:150,FOOTER_HEIGHT:60,registerTimePeriod:function(fb,gb,hb,ib,jb,kb,lb){wa();if(x(na,gb))return;if(ma)y(hb,ma);var mb=new va(fb,gb,hb,ib,lb);if(!jb){la[kb]=gb;ka[gb]=true;}else{mb.parentKey=jb;q.get(jb).subSections=q.get(jb).subSections||[];q.get(jb).subSections[kb]=mb;}if(mb.shouldCombineSections())p.hideStickyHeaderNavSectionMenu();q.set(gb,mb);eb.checkCurrentSectionChange();g.inform(o.SECTION_REGISTERED,{scrubberKey:gb,period:mb});},reset:function(){for(var fb in pa)pa[fb]&&pa[fb].remove();for(var gb in qa)qa[gb]&&qa[gb].cancel();for(var hb in ra){ra[hb].unsubscribe();delete ra[hb];}ia&&ia.unsubscribe();ia=null;q.removeAll();ja=null;ka={};la=[];ma=[];na=[];oa={};pa={};qa={};sa=null;ta=false;ga=false;},checkCurrentSectionChange:function(){var fb=eb.getCurrentSection(),gb=ja&&ja.scrubberKey;if(fb&&fb.scrubberKey!==gb&&!fb.isPermalinkPeriod()){ja=fb;var hb=fb.scrubberKey,ib=fb.parentKey;if(!ib){ib=hb;hb=null;}p.sectionHasChanged(ib,hb);}},setParallelLoadConfig:function(fb){ua=fb;},getCurrentSection:function(){var fb={},gb=q.getAll();for(var hb in gb){var ib=gb[hb];if(!ib.loaded||oa[ib.scrubberKey])continue;var jb=v.getElementPosition(ib.node,'viewport').y;if(ib.scrubberKey=='recent')jb--;if(jb<eb.CURRENT_SECTION_OFFSET)fb[jb]=ib;}var kb=Math.max.apply(null,Object.keys(fb)),lb=kb==-Infinity;if(!lb){return fb[kb];}else if(la[0])return q.get(la[0]);return null;},capsuleForCurrentSection:function(){var fb=eb.getCurrentSection();return fb&&i.scry(fb.node,'.fbTimelineCapsule')[0];},enableScrollLoad:function(fb,gb,hb,ib){fb=w(fb);var jb=m.byClass(fb,'fbTimelineSection')||fb.parentNode,kb=jb&&i.scry(jb,'.fbTimelineCapsule')[0];if(!kb)return;if(hb===null){ya(fb,gb,ib);}else p.runOnceWhenSectionFullyLoaded(ya.bind(null,fb,gb,ib),gb,hb);},enableScrollLoadOnClick:function(fb,gb,hb){fb=w(fb);k.listen(fb,'click',function(ib){ib.prevent();eb.enableScrollLoad(fb,gb,null,hb);});},expandSectionOnClick:function(fb,gb){k.listen(fb,'click',function(hb){hb.prevent();q.get(gb).expand();});},expandSubSectionsOnClick:function(fb,gb){k.listen(fb,'click',function(hb){hb.prevent();q.get(gb).expandSubSections();});},getNextSectionKey:function(fb){for(var gb=0;gb<la.length-1;gb++)if(la[gb]==fb){while(gb<la.length-1&&!la[gb+1])gb++;return la[gb+1];}var hb=q.get(fb);if(!hb||!hb.parentKey)return;var ib=q.get(hb.parentKey);if(!ib)return;for(var jb=0;jb<ib.subSections.length-1;jb++)if(ib.subSections[jb].scrubberKey==fb)return ib.subSections[jb+1].scrubberKey;},hideSection:function(fb){var gb=q.get(fb);gb&&h.hide(i.find(gb.node,'.fbTimelineSection'));var hb=p.getCurrentScrubber();if(hb){var ib=null;if(!ka[fb]){var jb=gb.parentKey;ib=p.getCurrentScrubber().getSubnav(jb,fb);}else ib=p.getCurrentScrubber().getNav(fb);ib&&h.hide(ib);}var kb=p.getCurrentStickyHeaderNav();kb&&kb.removeTimePeriod(fb);oa[fb]=true;},loadSectionOnClick:function(fb,gb){k.listen(fb,'click',function(hb){hb.prevent();q.get(gb).load();});},removeSection:function(fb){for(var gb in la)if(la[gb]==fb){la[gb]=null;break;}q.remove(fb);delete ka[fb];if(fb in pa){pa[fb].remove();delete pa[fb];}var hb=p.getCurrentStickyHeaderNav();hb&&hb.removeTimePeriod(fb);na.push(fb);},removeSectionParent:function(fb){i.remove(w(fb).parentNode);},navigateToSection:function(fb,gb,hb){sa.add_event("nav_"+fb);gb=!!gb;var ib=fb,jb=q.get(fb);if(!jb)return;if(!jb.loaded){r.enable();i.scry(w('timeline_tab_content'),'.fbTimelineShowOlderSections').forEach(i.remove);}if(!ka[fb]){if(!jb.loaded)jb.node.style.minHeight=v.getViewportDimensions().y+'px';var kb=g.subscribe(o.SECTION_FULLY_LOADED,function(sb,tb){if(tb.scrubberKey===fb){jb.node.style.minHeight='';kb.unsubscribe();}});ib=jb.parentKey;var lb=q.get(ib).node;if(!h.hasClass(lb,'fbTimelineSectionExpanded')){j.scrollTo(lb,0);h.addClass(lb,'fbTimelineSectionExpanded');i.scry(lb,'.fbTimelineCapsule').forEach(i.remove);i.scry(lb,'div.fbTimelineSectionExpandPager').forEach(i.remove);i.scry(lb,'div.fbTimelineContentHeader').forEach(i.remove);i.scry(lb,"._5vf").forEach(function(sb){if(!sb.getAttribute('data-subsection'))i.remove(sb);});}var mb=eb.getNextSectionKey(ib);if(mb&&pa[mb])pa[mb].setBuffer(0);}for(var nb=0;nb<la.length;nb++){var ob=la[nb];if(!ob)continue;if(ob==ib)break;q.get(ob).deactivateScrollLoad();i.scry(w('timeline_tab_content'),'.fbTimelineSectionExpandPager').forEach(function(sb){var tb=n.getInstance(sb.id);tb&&tb.removeOnVisible();});}eb.adjustContentPadding();jb.load(hb,true);bb();var pb=v.getScrollPosition().x,qb=v.getElementPosition(jb.node).y;if(!gb){var rb=ka[fb]?o.SCROLL_TO_OFFSET:o.SUBSECTION_SCROLL_TO_OFFSET;j.scrollTo(new v(pb,qb-rb,'document'),true,false,false,function(){var sb=v.getElementPosition(jb.node).y;j.scrollTo(new v(pb,sb-rb,'document'),false);var tb=i.scry(jb.node,'h3.uiHeaderTitle')[0];if(tb){tb.tabIndex=0;tb.focus();}});}},adjustContentPadding:function(){var fb=ca('timeline_tab_content');if(!fb)return;if(p.isOneColumnMinimal())return;var gb=p.getCurrentKey()||s.TIMELINE_KEY;if(gb!==s.TIMELINE_KEY)return;var hb=la.length-1,ib=q.get(la[hb]);fb.style.paddingBottom=ib&&ib.loaded?null:v.getViewportDimensions().y-eb.CURRENT_SECTION_OFFSET-eb.HEADER_SCROLL_CUTOFF-eb.FOOTER_HEIGHT+'px';},adjustContentPaddingAfterLoad:function(fb,gb){p.runOnceWhenSectionFullyLoaded(eb.adjustContentPadding,fb,gb);},appendContentAfterLoad:function(fb,gb,hb){p.runOnceWhenSectionFullyLoaded(i.appendContent.bind(null,w(fb),gb),hb,'0');},markSectionAsLoaded:function(fb,gb,hb){p.runOnceWhenSectionFullyLoaded(function(){ca(fb)&&h.removeClass(w(fb).parentNode,'fbTimelineSectionLoading');},gb,hb);},suppressSectionsAbove:function(fb){var gb,hb;for(var ib=0;ib<la.length;ib++){var jb=la[ib];if(!jb)continue;gb=q.get(jb).node;hb=null;if(z(fb.parentNode.children).indexOf(fb)<=z(gb.parentNode.children).indexOf(gb)){hb=jb;break;}q.get(jb).deactivateScrollLoad();}if(hb)eb.navigateToSection(hb,true);},forceNoFriendActivity:function(){ta=true;},removeDupes:function(fb){var gb=ca(fb);if(!gb)return;var hb=i.scry(gb,'li.fbTimelineUnit'),ib={};for(var jb=0;jb<hb.length;jb++){var kb=hb[jb];if(kb.id&&da(kb.id,'tl_unit_')){var lb=kb.id.substring(8,kb.id.length),mb=i.scry(kb,'div.timelineUnitContainer');if(mb.length>0)lb=lb+mb[0].getAttribute('data-time');if(ib.hasOwnProperty(lb)){kb.id='dupe_unit_'+Math.random();kb.className="hidden_elem";}else ib[lb]=1;}}},removeLoadingState:function(fb){ca(fb)&&h.removeClass(w(fb),'fbTimelineSectionLoading');},setExpandLoadDataForSection:function(fb,gb){var hb=q.get(fb);hb&&hb.setExpandLoadData(gb);},appendSectionDataForAllSections:function(fb){ma=fb;for(var gb=0;gb<la.length-1;gb++){var hb=la[gb];if(!hb)continue;var ib=q.get(hb);ib&&ib.appendData(fb);}},updatePagerAfterLoad:function(fb,gb,hb,ib,jb){var kb=n.getInstance(fb.firstChild.id);if(!kb){ra[fb.firstChild.id]=g.subscribe(n.REGISTERED,function(lb,mb){ra[fb.firstChild.id].unsubscribe();delete ra[fb.firstChild.id];if(mb.id===fb.firstChild.id)eb.updatePagerAfterLoad(fb,gb,hb,ib,jb);});return;}p.runOnceWhenSectionFullyLoaded(function(){h.removeClass(fb,'fbTimelineHiddenPager');kb.checkBuffer();},hb,ib);if(jb)p.runOnceWhenSectionFullyLoaded(p.adjustScrollingPagerBuffer.bind(null,fb.firstChild.id,gb),hb,ib);},showAfterLoad:function(fb,gb,hb){p.runOnceWhenSectionFullyLoaded(function(){var ib=ca(fb);ib&&h.show(ib);},gb,hb);},repositionDialog:function(fb){g.subscribe(o.SECTION_LOADED,function(){fb.updatePosition();});},rightColumnFinished:function(fb){var gb=q.get(fb);gb.rightColumnFinished=true;},addUnrankedUnits:function(fb){var gb=w(fb),hb=i.scry(gb,'li.fbTimelineUnit');for(var ib=hb.length-1;ib>=0;ib--){var jb=hb[ib];i.insertAfter(gb,jb);h.addClass(i.find(jb,'div.timelineUnitContainer'),'fbTimelineHighlightUnit');}i.remove(gb);}};e.exports=eb;});
__d("TimelineLogging",["TimelineController","reportData"],function(a,b,c,d,e,f){var g=b('TimelineController'),h=b('reportData'),i=false,j=0,k=null,l=null,m={init:function(n){if(i)return;j=n;g.register(g.LOGGING,this);},reset:function(){i=false;j=0;k=null;},log:function(n,o){o.profile_id=j;h(n,{gt:o});},logSectionChange:function(n,o){var p={timeline_section_change:1,key:n};if(k&&n==k){p.timeline_scrubber=1;k=null;}if(l&&n==l){p.sticky_header_nav=1;l=null;}m.log('timeline',p);},logScrubberClick:function(n){k=n;},logStickyHeaderNavClick:function(n){l=n;}};e.exports=m;});