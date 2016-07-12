/*!
 * # Semantic UI - Checkbox
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,n,t,i){"use strict";e.fn.checkbox=function(t){var o,a=e(this),c=a.selector||"",r=(new Date).getTime(),d=[],l=arguments[0],s="string"==typeof l,u=[].slice.call(arguments,1);return a.each(function(){var a,b,h=e.extend(!0,{},e.fn.checkbox.settings,t),g=h.className,p=h.namespace,f=h.selector,k=h.error,m="."+p,v="module-"+p,y=e(this),C=e(this).children(f.label),x=e(this).children(f.input),w=x[0],I=!1,S=!1,D=y.data(v),O=this;b={initialize:function(){b.verbose("Initializing checkbox",h),b.create.label(),b.bind.events(),b.set.tabbable(),b.hide.input(),b.observeChanges(),b.instantiate(),b.setup()},instantiate:function(){b.verbose("Storing instance of module",b),D=b,y.data(v,b)},destroy:function(){b.verbose("Destroying module"),b.unbind.events(),b.show.input(),y.removeData(v)},fix:{reference:function(){y.is(f.input)&&(b.debug("Behavior called on <input> adjusting invoked element"),y=y.closest(f.checkbox),b.refresh())}},setup:function(){b.set.initialLoad(),b.is.indeterminate()?(b.debug("Initial value is indeterminate"),b.indeterminate()):b.is.checked()?(b.debug("Initial value is checked"),b.check()):(b.debug("Initial value is unchecked"),b.uncheck()),b.remove.initialLoad()},refresh:function(){C=y.children(f.label),x=y.children(f.input),w=x[0]},hide:{input:function(){b.verbose("Modfying <input> z-index to be unselectable"),x.addClass(g.hidden)}},show:{input:function(){b.verbose("Modfying <input> z-index to be selectable"),x.removeClass(g.hidden)}},observeChanges:function(){"MutationObserver"in n&&(a=new MutationObserver(function(){b.debug("DOM tree modified, updating selector cache"),b.refresh()}),a.observe(O,{childList:!0,subtree:!0}),b.debug("Setting up mutation observer",a))},attachEvents:function(n,t){var i=e(n);t=e.isFunction(b[t])?b[t]:b.toggle,i.length>0?(b.debug("Attaching checkbox events to element",n,t),i.on("click"+m,t)):b.error(k.notFound)},event:{click:function(n){var t=e(n.target);return t.is(f.input)?void b.verbose("Using default check action on initialized checkbox"):t.is(f.link)?void b.debug("Clicking link inside checkbox, skipping toggle"):(b.toggle(),x.focus(),void n.preventDefault())},keydown:function(e){var n=e.which,t={enter:13,space:32,escape:27};n==t.escape?(b.verbose("Escape key pressed blurring field"),x.blur(),S=!0):e.ctrlKey||n!=t.space&&n!=t.enter?S=!1:(b.verbose("Enter/space key pressed, toggling checkbox"),b.toggle(),S=!0)},keyup:function(e){S&&e.preventDefault()}},check:function(){b.should.allowCheck()&&(b.debug("Checking checkbox",x),b.set.checked(),b.should.ignoreCallbacks()||(h.onChecked.call(w),h.onChange.call(w)))},uncheck:function(){b.should.allowUncheck()&&(b.debug("Unchecking checkbox"),b.set.unchecked(),b.should.ignoreCallbacks()||(h.onUnchecked.call(w),h.onChange.call(w)))},indeterminate:function(){return b.should.allowIndeterminate()?void b.debug("Checkbox is already indeterminate"):(b.debug("Making checkbox indeterminate"),b.set.indeterminate(),void(b.should.ignoreCallbacks()||(h.onIndeterminate.call(w),h.onChange.call(w))))},determinate:function(){return b.should.allowDeterminate()?void b.debug("Checkbox is already determinate"):(b.debug("Making checkbox determinate"),b.set.determinate(),void(b.should.ignoreCallbacks()||(h.onDeterminate.call(w),h.onChange.call(w))))},enable:function(){return b.is.enabled()?void b.debug("Checkbox is already enabled"):(b.debug("Enabling checkbox"),b.set.enabled(),void h.onEnable.call(w))},disable:function(){return b.is.disabled()?void b.debug("Checkbox is already disabled"):(b.debug("Disabling checkbox"),b.set.disabled(),void h.onDisable.call(w))},get:{radios:function(){var n=b.get.name();return e('input[name="'+n+'"]').closest(f.checkbox)},otherRadios:function(){return b.get.radios().not(y)},name:function(){return x.attr("name")}},is:{initialLoad:function(){return I},radio:function(){return x.hasClass(g.radio)||"radio"==x.attr("type")},indeterminate:function(){return x.prop("indeterminate")!==i&&x.prop("indeterminate")},checked:function(){return x.prop("checked")!==i&&x.prop("checked")},disabled:function(){return x.prop("disabled")!==i&&x.prop("disabled")},enabled:function(){return!b.is.disabled()},determinate:function(){return!b.is.indeterminate()},unchecked:function(){return!b.is.checked()}},should:{allowCheck:function(){return b.is.determinate()&&b.is.checked()&&!b.should.forceCallbacks()?(b.debug("Should not allow check, checkbox is already checked"),!1):h.beforeChecked.apply(w)===!1?(b.debug("Should not allow check, beforeChecked cancelled"),!1):!0},allowUncheck:function(){return b.is.determinate()&&b.is.unchecked()&&!b.should.forceCallbacks()?(b.debug("Should not allow uncheck, checkbox is already unchecked"),!1):h.beforeUnchecked.apply(w)===!1?(b.debug("Should not allow uncheck, beforeUnchecked cancelled"),!1):!0},allowIndeterminate:function(){return b.is.indeterminate()&&!b.should.forceCallbacks()?(b.debug("Should not allow indeterminate, checkbox is already indeterminate"),!1):h.beforeIndeterminate.apply(w)===!1?(b.debug("Should not allow indeterminate, beforeIndeterminate cancelled"),!1):!0},allowDeterminate:function(){return b.is.determinate()&&!b.should.forceCallbacks()?(b.debug("Should not allow determinate, checkbox is already determinate"),!1):h.beforeDeterminate.apply(w)===!1?(b.debug("Should not allow determinate, beforeDeterminate cancelled"),!1):!0},forceCallbacks:function(){return b.is.initialLoad()&&h.fireOnInit},ignoreCallbacks:function(){return I&&!h.fireOnInit}},can:{change:function(){return!(y.hasClass(g.disabled)||y.hasClass(g.readOnly)||x.prop("disabled")||x.prop("readonly"))},uncheck:function(){return"boolean"==typeof h.uncheckable?h.uncheckable:!b.is.radio()}},set:{initialLoad:function(){I=!0},checked:function(){return b.verbose("Setting class to checked"),y.removeClass(g.indeterminate).addClass(g.checked),b.is.radio()&&b.uncheckOthers(),!b.is.indeterminate()&&b.is.checked()?void b.debug("Input is already checked, skipping input property change"):(b.verbose("Setting state to checked",w),x.prop("indeterminate",!1).prop("checked",!0),void b.trigger.change())},unchecked:function(){return b.verbose("Removing checked class"),y.removeClass(g.indeterminate).removeClass(g.checked),!b.is.indeterminate()&&b.is.unchecked()?void b.debug("Input is already unchecked"):(b.debug("Setting state to unchecked"),x.prop("indeterminate",!1).prop("checked",!1),void b.trigger.change())},indeterminate:function(){return b.verbose("Setting class to indeterminate"),y.addClass(g.indeterminate),b.is.indeterminate()?void b.debug("Input is already indeterminate, skipping input property change"):(b.debug("Setting state to indeterminate"),x.prop("indeterminate",!0),void b.trigger.change())},determinate:function(){return b.verbose("Removing indeterminate class"),y.removeClass(g.indeterminate),b.is.determinate()?void b.debug("Input is already determinate, skipping input property change"):(b.debug("Setting state to determinate"),void x.prop("indeterminate",!1))},disabled:function(){return b.verbose("Setting class to disabled"),y.addClass(g.disabled),b.is.disabled()?void b.debug("Input is already disabled, skipping input property change"):(b.debug("Setting state to disabled"),x.prop("disabled","disabled"),void b.trigger.change())},enabled:function(){return b.verbose("Removing disabled class"),y.removeClass(g.disabled),b.is.enabled()?void b.debug("Input is already enabled, skipping input property change"):(b.debug("Setting state to enabled"),x.prop("disabled",!1),void b.trigger.change())},tabbable:function(){b.verbose("Adding tabindex to checkbox"),x.attr("tabindex")===i&&x.attr("tabindex",0)}},remove:{initialLoad:function(){I=!1}},trigger:{change:function(){b.verbose("Triggering change event from programmatic change"),x.trigger("change")}},create:{label:function(){x.prevAll(f.label).length>0?(x.prev(f.label).detach().insertAfter(x),b.debug("Moving existing label",C)):b.has.label()||(C=e("<label>").insertAfter(x),b.debug("Creating label",C))}},has:{label:function(){return C.length>0}},bind:{events:function(){b.verbose("Attaching checkbox events"),y.on("click"+m,b.event.click).on("keydown"+m,f.input,b.event.keydown).on("keyup"+m,f.input,b.event.keyup)}},unbind:{events:function(){b.debug("Removing events"),y.off(m)}},uncheckOthers:function(){var e=b.get.otherRadios();b.debug("Unchecking other radios",e),e.removeClass(g.checked)},toggle:function(){return b.can.change()?void(b.is.indeterminate()||b.is.unchecked()?(b.debug("Currently unchecked"),b.check()):b.is.checked()&&b.can.uncheck()&&(b.debug("Currently checked"),b.uncheck())):void(b.is.radio()||b.debug("Checkbox is read-only or disabled, ignoring toggle"))},setting:function(n,t){if(b.debug("Changing setting",n,t),e.isPlainObject(n))e.extend(!0,h,n);else{if(t===i)return h[n];h[n]=t}},internal:function(n,t){if(e.isPlainObject(n))e.extend(!0,b,n);else{if(t===i)return b[n];b[n]=t}},debug:function(){h.debug&&(h.performance?b.performance.log(arguments):(b.debug=Function.prototype.bind.call(console.info,console,h.name+":"),b.debug.apply(console,arguments)))},verbose:function(){h.verbose&&h.debug&&(h.performance?b.performance.log(arguments):(b.verbose=Function.prototype.bind.call(console.info,console,h.name+":"),b.verbose.apply(console,arguments)))},error:function(){b.error=Function.prototype.bind.call(console.error,console,h.name+":"),b.error.apply(console,arguments)},performance:{log:function(e){var n,t,i;h.performance&&(n=(new Date).getTime(),i=r||n,t=n-i,r=n,d.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:O,"Execution Time":t})),clearTimeout(b.performance.timer),b.performance.timer=setTimeout(b.performance.display,500)},display:function(){var n=h.name+":",t=0;r=!1,clearTimeout(b.performance.timer),e.each(d,function(e,n){t+=n["Execution Time"]}),n+=" "+t+"ms",c&&(n+=" '"+c+"'"),(console.group!==i||console.table!==i)&&d.length>0&&(console.groupCollapsed(n),console.table?console.table(d):e.each(d,function(e,n){console.log(n.Name+": "+n["Execution Time"]+"ms")}),console.groupEnd()),d=[]}},invoke:function(n,t,a){var c,r,d,l=D;return t=t||u,a=O||a,"string"==typeof n&&l!==i&&(n=n.split(/[\. ]/),c=n.length-1,e.each(n,function(t,o){var a=t!=c?o+n[t+1].charAt(0).toUpperCase()+n[t+1].slice(1):n;if(e.isPlainObject(l[a])&&t!=c)l=l[a];else{if(l[a]!==i)return r=l[a],!1;if(!e.isPlainObject(l[o])||t==c)return l[o]!==i?(r=l[o],!1):(b.error(k.method,n),!1);l=l[o]}})),e.isFunction(r)?d=r.apply(a,t):r!==i&&(d=r),e.isArray(o)?o.push(d):o!==i?o=[o,d]:d!==i&&(o=d),r}},s?(D===i&&b.initialize(),b.invoke(l)):(D!==i&&D.invoke("destroy"),b.initialize())}),o!==i?o:this},e.fn.checkbox.settings={name:"Checkbox",namespace:"checkbox",debug:!1,verbose:!0,performance:!0,uncheckable:"auto",fireOnInit:!1,onChange:function(){},beforeChecked:function(){},beforeUnchecked:function(){},beforeDeterminate:function(){},beforeIndeterminate:function(){},onChecked:function(){},onUnchecked:function(){},onDeterminate:function(){},onIndeterminate:function(){},onEnabled:function(){},onDisabled:function(){},className:{checked:"checked",indeterminate:"indeterminate",disabled:"disabled",hidden:"hidden",radio:"radio",readOnly:"read-only"},error:{method:"The method you called is not defined"},selector:{checkbox:".ui.checkbox",label:"label, .box",input:'input[type="checkbox"], input[type="radio"]',link:"a[href]"}}}(jQuery,window,document);