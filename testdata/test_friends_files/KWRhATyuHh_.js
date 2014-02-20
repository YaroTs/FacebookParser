/*!CK:731970807!*//*1386083369,173209415*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Q9eHM"]); }

__d("AudienceSelectorTags",[],function(a,b,c,d,e,f){var g={},h={hasTags:function(i){return g.hasOwnProperty(i);},setHasTags:function(i){if(i)g[i]=true;}};e.exports=h;});
__d("DynamicIconSelector",["Button","CSS","DOM","SelectorDeprecated"],function(a,b,c,d,e,f){var g=b('Button'),h=b('CSS'),i=b('DOM'),j=b('SelectorDeprecated'),k={swapIcon:function(l){var m=j.getSelectedOptions(l)[0],n=m&&i.scry(m,'.itemIcon')[0],o=j.getSelectorButton(l);if(n){g.setIcon(o,n.cloneNode(true));}else{var p=i.scry(o,'.img')[0];p&&i.remove(p);}h.conditionClass(o,'uiSelectorChevronOnly',!n);}};j.subscribe('change',function(l,m){var n=m.selector;if(h.hasClass(n,'dynamicIconSelector'))k.swapIcon(n);});e.exports=k;});
__d("PrivacySelectorOption",["Arbiter","AudienceSelectorTags","CSS","CurrentUser","DOM","DynamicIconSelector","Parent","PrivacyConst","SelectorDeprecated","copyProperties","csx","fbt","tx"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('AudienceSelectorTags'),i=b('CSS'),j=b('CurrentUser'),k=b('DOM'),l=b('DynamicIconSelector'),m=b('Parent'),n=b('PrivacyConst'),o=b('SelectorDeprecated'),p=b('copyProperties'),q=b('csx'),r=b('fbt'),s=b('tx');function t(u,v){if(!u)throw new Error("there's no DOM option. Config data: ",v);this._elem=u;this._selector=m.byClass(this._elem,'audienceSelector');if(!this._selector)return;this._priv_base_val=v.priv_base_val;this._audienceCount=v.audience_count||"";this._hasRestricted=v.has_restricted||false;this._isCustom=v.is_custom||false;this._includedAudience=v.included||"";this._excludedAudience=v.excluded||"";this._tagExpansionBehavior=v.tag_expansion_behavior||n.TagExpansion.NONE;this._plusLabel=k.scry(u,'.plusLabel')[0];this._audienceCountLabel=k.scry(u,'.audienceCountLabel')[0];this._taggedIDs=[];this._tags=[];this._hasEvent=false;this._recalculateTooltipAndLabel();this._updateOptionCountLabel();this._updateSelector();g.subscribe('Composer/changedtags',function(w,x){var y=i.hasClass(this._selector,'composerAudienceSelector');if(!this._getChangedData()||!y)return;var z=this._hasEvent;this._hasEvent=!!x.eventTag;this._tags=x.withTags.map(function(da){return da.getText();});this._taggedIDs=x.withTags.map(function(da){return da.getValue();});for(var aa in x.mention)if(x.mention[aa].type=='user'&&x.mention[aa].uid!=j.getID()){this._tags.push(x.mention[aa].text);this._taggedIDs.push(x.mention[aa].uid);}else if(x.mention[aa].type=='event')this._hasEvent=true;if(this._hasEvent&&z!=this._hasEvent)this._eventTagChanged();var ba=k.scry(document.body,"._5l7q")[0];ba&&!!this._taggedIDs.length&&i.hide(ba);this._updateOptionCountLabel();var ca=this._recalculateTooltipAndLabel();if(ca&&o.isOptionSelected(this._elem)){this._updateSelector();g.inform('SelectedPrivacyOption/changed',this._getChangedData());}}.bind(this));o.listen(this._selector,'change',this._updateSelector.bind(this));}p(t.prototype,{updateOption:function(u,v,w,x,y){this._priv_base_val=u;this._includedAudience=v;this._excludedAudience=w;this._tagExpansionBehavior=x;this._audienceCount=y;this._recalculateTooltipAndLabel();this._updateOptionCountLabel();return {label:this._label,tooltip:this._tooltip};},_recalculateTooltipAndLabel:function(){var u=this._label;this._label=this._getNewSelectorLabel();var v=this._tooltip;this._tooltip=this._getNewTooltip();return (v!=this._tooltip)||(u!=this._label);},_getNewTooltip:function(){if(this._isCustom)return this._recalcCustomTooltip();switch(this._priv_base_val){case n.FriendsValue.ALL_FRIENDS:return this._recalcFriendsTooltip();case n.FriendsValue.FRIENDS_MINUS_ACQUAINTANCES:return this._recalcFriendsMinusTooltip();case n.FriendsValue.SELF:var u=this._getTagExpansionText();return u?u:this._getIncludedAudience();default:return this._recalcCustomTooltip();}},_getNewSelectorLabel:function(){var u=this._elem.getAttribute('data-label').replace(/\(.*\)/,"");if(this._showAudienceCount()){var v=' ('+this._audienceCount+')';u+=v;}if(this._isTagExpanded())u+=' (+)';return u;},_updateOptionCountLabel:function(){if(this._audienceCountLabel){if(this._showAudienceCount()){var u=' ('+this._audienceCount+')';k.setContent(this._audienceCountLabel,u);}i.conditionShow(this._audienceCountLabel,this._showAudienceCount());}this._plusLabel&&i.conditionShow(this._plusLabel,this._isTagExpanded());},_eventTagChanged:function(){if(o.isOptionSelected(this._elem)){var u=this._getChangedData();u.privacy=o.getValue(this._selector);g.inform('EventTagged/changed',u);}},_getChangedData:function(){return {hasEvent:this._hasEvent,tags:this._taggedIDs,privacy:this._priv_base_val};},_showAudienceCount:function(){return (this._audienceCountLabel&&this._audienceCount&&this._audienceCount.length>0);},_isTagExpanded:function(){var u=this._getTagExpansionBehavior(),v=!!this._taggedIDs.length||this._alreadyHasTags();return (v&&u!=n.TagExpansion.NONE)||(!!this._hasEvent&&u==n.TagExpansion.FRIENDS_OF_TAGGEES);},_alreadyHasTags:function(){var u=k.scry(this._selector,'*[data-oid]')[0];u=u&&u.getAttribute('data-oid');return u&&h.hasTags(u);},_updateSelector:function(){if(o.isOptionSelected(this._elem)){var u=i.hasClass(this._selector,'composerAudienceSelector');u&&o.setButtonLabel(this._selector,this._label);o.setButtonTooltip(this._selector,this._tooltip);l.swapIcon(this._selector);return false;}return true;},_isSharedAlbum:function(){var u=k.scry(this._selector,'*[data-shared-album]')[0];return u&&u.getAttribute('data-shared-album');},_getTagExpansionBehavior:function(){if(this._tagExpansionBehavior)return this._tagExpansionBehavior;var u=this._priv_base_val===n.FriendsValue.SELF,v=this._priv_base_val===n.FriendsValue.EVERYONE;if((u&&this._isSharedAlbum())||v){return n.TagExpansion.NONE;}else if(this._priv_base_val<n.FriendsValue.ALL_FRIENDS)return n.TagExpansion.TAGGEES;return n.TagExpansion.FRIENDS_OF_TAGGEES;},_getTagExpansionText:function(){var u=this._getTagExpansionBehavior();if(!!this._taggedIDs.length||this._alreadyHasTags()){if(u==n.TagExpansion.FRIENDS_OF_TAGGEES){if(this._hasEvent)return "\u0434\u0440\u0443\u0437\u044c\u044f \u0432\u0441\u0435\u0445 \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0445 \u043b\u044e\u0434\u0435\u0439, \u0433\u043e\u0441\u0442\u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f";return "\u0434\u0440\u0443\u0437\u044c\u044f \u0432\u0441\u0435\u0445, \u043a\u0442\u043e \u0431\u044b\u043b \u043e\u0442\u043c\u0435\u0447\u0435\u043d";}else if(u==n.TagExpansion.TAGGEES)return "\u0412\u0441\u0435, \u043a\u0442\u043e \u0431\u044b\u043b \u043e\u0442\u043c\u0435\u0447\u0435\u043d";return '';}if(this._hasEvent&&u==n.TagExpansion.FRIENDS_OF_TAGGEES)return "\u0433\u043e\u0441\u0442\u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f";return '';},_getIncludedAudience:function(){if(this._includedAudience)return this._includedAudience;var u=this._priv_base_val===n.FriendsValue.SELF;if(u&&!this._isSharedAlbum())return "\u0422\u043e\u043b\u044c\u043a\u043e \u044f";return this._elem.getAttribute('data-label');},_getCombinedSentence:function(u,v){if(!v)return u;return r._("{list of people who can see this}; \u0417\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c: {list of people who cannot see this}",[r.param("list of people who can see this",u),r.param("list of people who cannot see this",v)]);},_recalcFriendsTooltip:function(){var u=this._hasEvent,v=this._tags.length;if(v>2){if(u){return this._hasRestricted?"\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f, \u0434\u0440\u0443\u0437\u044c\u044f \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0445 \u0438 \u0433\u043e\u0441\u0442\u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f, \u043a\u0440\u043e\u043c\u0435: \"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u044b\u0445\"":"\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f, \u0434\u0440\u0443\u0437\u044c\u044f \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0445 \u0438 \u0433\u043e\u0441\u0442\u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f";}else return this._hasRestricted?"\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f \u0438 \u0434\u0440\u0443\u0437\u044c\u044f \u0432\u0441\u0435\u0445 \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0445 \u043b\u044e\u0434\u0435\u0439; \u041a\u0440\u043e\u043c\u0435: \u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u044b\u0435":"\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f \u0438 \u0434\u0440\u0443\u0437\u044c\u044f \u0432\u0441\u0435\u0445 \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439";}else if(v==2){if(u){if(this._hasRestricted){return "\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f, \u0434\u0440\u0443\u0437\u044c\u044f \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0445 \u0438 \u0433\u043e\u0441\u0442\u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f, \u043a\u0440\u043e\u043c\u0435: \"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u044b\u0445\"";}else return "\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f, \u0434\u0440\u0443\u0437\u044c\u044f \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0445 \u0438 \u0433\u043e\u0441\u0442\u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f";}else if(this._hasRestricted){return s._("\u0412\u0441\u0435 \u0432\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f, \u0434\u0440\u0443\u0437\u044c\u044f {user} \u0438 {user2}; \u041a\u0440\u043e\u043c\u0435: \u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u044b\u0435",{user:this._tags[0],user2:this._tags[1]});}else return s._("\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f, \u0434\u0440\u0443\u0437\u044c\u044f {user} \u0438 \u0434\u0440\u0443\u0437\u044c\u044f {user2}",{user:this._tags[0],user2:this._tags[1]});}else if(v==1){if(u){if(this._hasRestricted){return s._("\u042d\u0442\u043e \u0432\u0438\u0434\u044f\u0442 \u0432\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f, \u0434\u0440\u0443\u0437\u044c\u044f {user} \u0438 \u0433\u043e\u0441\u0442\u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f, \u043a\u0440\u043e\u043c\u0435: \"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u044b\u0445\"",{user:this._tags[0]});}else return s._("\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f, \u0434\u0440\u0443\u0437\u044c\u044f {user} \u0438 \u0433\u043e\u0441\u0442\u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f",{user:this._tags[0]});}else if(this._hasRestricted){return s._("\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f \u0438 \u0434\u0440\u0443\u0437\u044c\u044f {user}; \u041a\u0440\u043e\u043c\u0435: \u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u044b\u0435",{user:this._tags[0]});}else return s._("\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f \u0438 \u0434\u0440\u0443\u0437\u044c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f  {user}",{user:this._tags[0]});}else if(u){return this._hasRestricted?"\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f \u0438 \u0433\u043e\u0441\u0442\u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f, \u043a\u0440\u043e\u043c\u0435: \"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u044b\u0445\"":"\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f \u0438 \u0433\u043e\u0441\u0442\u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f";}else return this._hasRestricted?"\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f; \u041a\u0440\u043e\u043c\u0435: \u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u044b\u0435":"\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f";},_recalcFriendsMinusTooltip:function(){var u=this._hasEvent,v=this._tags.length;if(u){if(v>1||this._alreadyHasTags()){return this._hasRestricted?"\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f, \u0434\u0440\u0443\u0437\u044c\u044f \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0445 \u0438 \u0433\u043e\u0441\u0442\u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f; \u041a\u0440\u043e\u043c\u0435: \u0417\u043d\u0430\u043a\u043e\u043c\u044b\u0445, \u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u044b\u0445":"\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f, \u0434\u0440\u0443\u0437\u044c\u044f \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438 \u0433\u043e\u0441\u0442\u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f; \u041a\u0440\u043e\u043c\u0435: \u0417\u043d\u0430\u043a\u043e\u043c\u044b\u0445";}else if(v==1){return this._hasRestricted?s._("\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f, \u0434\u0440\u0443\u0437\u044c\u044f {user} \u0438 \u0433\u043e\u0441\u0442\u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f; \u041a\u0440\u043e\u043c\u0435: \u0417\u043d\u0430\u043a\u043e\u043c\u044b\u0445, \u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u044b\u0445",{user:this._tags[0]}):s._("\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f, \u0434\u0440\u0443\u0437\u044c\u044f {user} \u0438 \u0433\u043e\u0441\u0442\u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f; \u041a\u0440\u043e\u043c\u0435: \u0417\u043d\u0430\u043a\u043e\u043c\u044b\u0445",{user:this._tags[0]});}else return this._hasRestricted?"\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f \u0438 \u0433\u043e\u0441\u0442\u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f \u043a\u0440\u043e\u043c\u0435 \u0417\u043d\u0430\u043a\u043e\u043c\u044b\u0445, \u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u044b\u0445":"\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f \u0438 \u0433\u043e\u0441\u0442\u0438 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f \u043a\u0440\u043e\u043c\u0435 \u0417\u043d\u0430\u043a\u043e\u043c\u044b\u0445";}else if(v>0||this._alreadyHasTags()){var w="\u0434\u0440\u0443\u0437\u044c\u044f \u0432\u0441\u0435\u0445, \u043a\u0442\u043e \u0431\u044b\u043b \u043e\u0442\u043c\u0435\u0447\u0435\u043d",x=r._("{people who can see this}, {list of more people who can see this}",[r.param("people who can see this","\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u044c\u044f"),r.param("list of more people who can see this",w)]),y="\u0417\u043d\u0430\u043a\u043e\u043c\u044b\u0435";if(this._hasRestricted)y=r._("{Name of Acquaintances friend list}, {restricted}",[r.param("Name of Acquaintances friend list",y),r.param("restricted","\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u044b\u0435")]);return this._getCombinedSentence(x,y);}else{if(this._hasRestricted)return "\u0414\u0440\u0443\u0437\u044c\u044f, \u043a\u0440\u043e\u043c\u0435: \u0417\u043d\u0430\u043a\u043e\u043c\u044b\u0435, \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e";return "\u0414\u0440\u0443\u0437\u044c\u044f, \u043a\u0440\u043e\u043c\u0435 \u0417\u043d\u0430\u043a\u043e\u043c\u044b\u0445";}},_recalcCustomTooltip:function(){var u=this._getIncludedAudience(),v=this._getTagExpansionText();if(v)u=r._("{list of people who can see this}, {list of additional people who can see this}",[r.param("list of people who can see this",u),r.param("list of additional people who can see this",v)]);return this._getCombinedSentence(u,this._excludedAudience);}});e.exports=t;});
__d("CustomPrivacyOptionController",["Arbiter","AsyncDialog","AsyncRequest","DOM","Event","Form","Parent","PrivacyConst","PrivacySelectorOption","SelectorDeprecated","copyProperties"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('AsyncDialog'),i=b('AsyncRequest'),j=b('DOM'),k=b('Event'),l=b('Form'),m=b('Parent'),n=b('PrivacyConst'),o=b('PrivacySelectorOption'),p=b('SelectorDeprecated'),q=b('copyProperties');function r(s,t){if(!s)return;setTimeout((function(){this._selector=m.byClass(s,'audienceSelector');if(!this._selector)return;this.initCustomState(s,t.option_id,t.id);var u={priv_base_val:t.base_audience_value,audience_count:t.audience_count,is_custom:true,included:t.included_audience,excluded:t.excluded_audience,tag_expansion_behavior:t.tag_expansion_behavior};this._optionJSInstance=new o(s,u);k.listen(s,'click',function(event){this.openCustomDialog(event,t.option_id,t.explain_tags,t.autosave,t.limit_to_friends,t.source);}.bind(this));p.listen(this._selector,'select',function(v){if(v.option._id!=this._id)this.clearCustomState();}.bind(this));}).bind(this),0);}q(r,{_instances:{},update:function(s,t,u,v,w,x,y,z,aa){var ba=r._instances[s];ba._update(t,u)._updateOption(u,w,x,y,z,aa);g.inform('Form/change',{node:ba._container});},getData:function(s){return r._instances[s]._privacyData;},setPrivacyData:function(s,t,u){r._instances[s]._update(t,u);}});q(r.prototype,{_updateOption:function(s,t,u,v,w,x){var y=p.getOption(this._selector,s)||p.getOption(this._selector,n.BaseValue.CUSTOM+''),z=this._optionJSInstance.updateOption(t,u,v,w,x);g.inform('CustomPrivacyOptionController/update',{selector:this._selector,option:y,tooltip:z.tooltip,label:z.label});return this;},_update:function(s,t){var u=t==n.BaseValue.CUSTOM||!p.getOption(this._selector,t),v=this._selector.getAttribute('data-name');this.updateCustomState(s,u,v);return this;},initCustomState:function(s,t,u){r._instances[t]=this;this._container=j.find(s,'.customPrivacyInputs');this._id=u;this._privacyData={};var v=l.serialize(this._container);if(v.audience)this._privacyData=v.audience[u];return s;},openCustomDialog:function(event,s,t,u,v,w){var x=new i('/ajax/privacy/custom_dialog/').setData({option_id:s,id:this._id,privacy_data:this._privacyData,explain_tags:t,autosave:u,limit_to_friends:v,source:w});x.setRelativeTo(event.getTarget());h.send(x);},updateCustomState:function(s,t,u){this.clearCustomState();this._privacyData=q({},s);if(t)if(u){u=u.slice(0,-'[value]'.length);var v={};v[u]=s;l.createHiddenInputs(v,this._container,null,true);}},clearCustomState:function(){this._privacyData={};j.empty(this._container);}});e.exports=r;});
__d("AudienceSelector",["Arbiter","AudienceSelectorTags","CSS","CustomPrivacyOptionController","DOM","DynamicIconSelector","PrivacyConst","SelectorDeprecated"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('AudienceSelectorTags'),i=b('CSS'),j=b('CustomPrivacyOptionController'),k=b('DOM'),l=b('DynamicIconSelector'),m=b('PrivacyConst'),n=b('SelectorDeprecated'),o={};n.subscribe('select',function(q,r){if(!i.hasClass(r.selector,'audienceSelector'))return;var s=n.getOptionValue(r.option);r.value=s;g.inform('AudienceSelector/changed',r);if(s==m.BaseValue.CUSTOM&&!i.hasClass(r.option,'noDialog')){n.toggle(r.selector);return false;}if(i.hasClass(r.selector,'dataTooltip')){var t=k.find(r.option,'.itemAnchor').getAttribute('data-tooltip');n.setButtonTooltip(r.selector,t||null);}if(!i.hasClass(r.option,'specialOption'))return;var u=k.find(r.option,'a').getAttribute('data-type');if(i.hasClass(r.option,'moreOption')){i.addClass(r.selector,u);i.addClass(r.selector,'showSecondaryOptions');return false;}else if(i.hasClass(r.option,'returnOption')){i.removeClass(r.selector,'showSecondaryOptions');i.removeClass(r.selector,'friendList');return false;}});var p={keepSynchronized:function(q,r){o[q]||(o[q]={});o[q][r.id]=r;},setHasTags:function(q){h.setHasTags(q);},forceAndKeepSynchronized:function(q,r){p.keepSynchronized(q,r);g.inform('AudienceSelector/update',{option:n.getSelectedOptions(r)[0],selector:r});}};g.subscribe('CustomPrivacyOptionController/update',function(q,r){if(!i.hasClass(r.selector,'audienceSelector'))return;n.setSelected(r.selector,n.getOptionValue(r.option));l.swapIcon(r.selector);var s=i.hasClass(r.selector,'composerAudienceSelector');s&&n.setButtonLabel(r.selector,r.label);n.setButtonTooltip(r.selector,r.tooltip);g.inform('AudienceSelector/update',r);});g.subscribe(['AudienceSelector/changed','AudienceSelector/update'],function(event,q){var r=n.getOptionValue(q.option),s={};if(r==m.BaseValue.CUSTOM){if(event=='AudienceSelector/changed')return;s=j.getData(q.option.id);}for(var t in o){var u=o[t];if(u[q.selector.id]){g.inform('AudienceSelector/syncNonSelectorIcon',{category:t});for(var v in u){var w=u[v];if(!w||q.selector===w)continue;if(n.getValue(w)!==r){n.setSelected(w,r);l.swapIcon(w);}if(r==m.BaseValue.CUSTOM){var x=n.getOption(w,m.BaseValue.CUSTOM+'');if(x){j.setPrivacyData(x.id,s,r);n.setButtonTooltip(w,q.tooltip);}}}}}});e.exports=p;});
__d("legacy:AudienceSelector",["AudienceSelector"],function(a,b,c,d){b('AudienceSelector');},3);
__d("FriendListPrivacyOptions",["Arbiter","AsyncDialog","AsyncRequest","Dialog","DOMQuery","PageTransitions","Parent","SelectorDeprecated","$","ge"],function(a,b,c,d,e,f){var g=b('Arbiter'),h=b('AsyncDialog'),i=b('AsyncRequest'),j=b('Dialog'),k=b('DOMQuery'),l=b('PageTransitions'),m=b('Parent'),n=b('SelectorDeprecated'),o=b('$'),p=b('ge'),q=false,r=false,s=null,t={},u=function(w){if(!Object.keys(t).length)l.registerHandler(function(){t={};q=false;r=false;});var x=w.getAttribute('data-name');t[x]=w;n.listen(w,'select',function(y){var z=y.option,aa=k.find(z,'a.itemAnchor'),ba=aa.getAttribute('data-flid');if(!ba)return;var ca=aa.getAttribute('data-dynamic');if(ca&&q){v.showSmartListNux(z,ba);}else if(!ca&&r)v.showDumbListNux([ba]);});},v={listen:function(w,x,y){var z=p(w);if(!z)return;var aa=m.byClass(z,'audienceSelector');if(aa){u(aa);q=x;r=y;}},showSmartListNux:function(w,x){w=o(w);new i('/ajax/friends/lists/smart_list_publish_nux.php').setData({option_id:w.id,flid:x}).send();q=false;},setContextualDialog:function(w,x){x=o(x);var y=m.byClass(x,'audienceSelector');if(y){w.setContext(y);w.show();var z=g.subscribe('composer/publish',function(){w.hide();});w.subscribe('hide',function(){z.unsubscribe();});}},showDumbListNux:function(w){h.send(new i('/ajax/friends/lists/dumb_list_publish_nux.php').setData({flids:w}));r=false;},showBothListsNux:function(w,x){s=o(w);v.showDumbListNux(x);},setDialogX:function(w){if(!s)return;w.subscribe('hide',function(){v.showSmartListNux(s);s=null;});},setDialog:function(){if(!s)return;var w=j.getCurrent();if(w)w.setCloseHandler(function(){v.showSmartListNux(s);s=null;});}};e.exports=v;});
__d("MetaComposerEdDialog",["Animation","Arbiter","ARIA","AsyncRequest","copyProperties","CSS","DOM","Ease","ge","Parent","SelectorDeprecated","Vector"],function(a,b,c,d,e,f){var g=b('Animation'),h=b('Arbiter'),i=b('ARIA'),j=b('AsyncRequest'),k=b('copyProperties'),l=b('CSS'),m=b('DOM'),n=b('Ease'),o=b('ge'),p=b('Parent'),q=b('SelectorDeprecated'),r=b('Vector'),s=null;function t(u){this._dialog=u.dialog;this.config=u;this._init();}t.init=function(u){if(s){s.config.show_audience=u.show_audience;u.dialog.destroy();return;}s=new t(u);};k(t.prototype,{_init:function(){h.subscribe('ComposerXStatusAttachment/ready',function(){if(this.config.show_audience){this._sendEducationRequest({},'/ajax/composer/audience/education',this._handlerCustomDuration.bind(this,6000));this.config.show_audience=false;}}.bind(this));if(this.config.show_sticky)h.subscribe('composer/mutate',function(u,v){this._sendEducationRequest({sticky_num:this.config.n_sticky_shown},'/ajax/composer/audience/sticky_education');}.bind(this));if(this.config.show_event_tags)if(this.config.n_event_tag_shown===0){h.subscribe('EventTagged/changed',function(u,v){this._sendEducationRequest({selector:'div.fbComposerAudienceTourContext',privacy:v.privacy,event_tag_num:this.config.n_event_tag_shown},'/ajax/events/tagging/user_education');}.bind(this));h.subscribe(['composer/publish','composer/reset'],function(){var u=o("event_tagging_tag_expansion_NUX");u&&l.hide(u);}.bind(this));}else h.subscribe('EventTagged/changed',function(u,v){this._sendEducationRequest({ids:v.tags,from:'AtTagger',hasEvent:v.hasEvent,type:v.privacy,tag_num:this.config.n_tag_shown,event_tag_num:this.config.n_event_tag_shown},'ajax/composer/audience/tag_education',this._handler.bind(this));}.bind(this));if(this.config.show_tags)h.subscribe('SelectedPrivacyOption/changed',function(u,v){this._sendEducationRequest({ids:v.tags,from:'WithTagger',hasEvent:v.hasEvent,type:v.privacy,tag_num:this.config.n_tag_shown,event_tag_num:this.config.n_event_tag_shown},'/ajax/composer/audience/tag_education',this._handler.bind(this));}.bind(this));q.subscribe('open',this._killAnim.bind(this));},_sendEducationRequest:function(u,v,w){if(!this._updateDialogContext())return;this._async&&this._async.abort();this._async=new j(v);this._async.setData(u).setHandler(w).send();},_updateDialogContext:function(){var u=m.scry(document.body,'div.composerAudienceWrapper'),v,w;for(var x=0;x<u.length;x++){v=u[x];w=r.getElementPosition(v);if(v&&w.x>0&&w.y>0){this._dialog.setContext(v);return true;}}return false;},_handler:function(u){this._handlerCustomDuration(1500,u);},_handlerCustomDuration:function(u,v){var w=v.payload;if(!w||!this._updateDialogContext())return;var x=this._dialog.getContent().firstChild;m.setContent(x,w);i.announce(m.getText(x));this._dialog.show();var y=p.byClass(x,'metaComposerUserEd');if(this._anim){this._anim.stop();this._anim=new g(y);}else this._anim=new g(y).from('opacity',0);this._anim.to('opacity',1).ease(n.sineOut).checkpoint().duration(u).checkpoint().to('opacity',0).ease(n.sineOut).checkpoint().ondone(this._killAnim.bind(this)).go();},_killAnim:function(u,v){if(this._anim){this._dialog.hide();this._anim.stop();this._anim=null;}}});e.exports=t;});
__d("legacy:DynamicIconSelector",["DynamicIconSelector"],function(a,b,c,d){a.DynamicIconSelector=b('DynamicIconSelector');},3);