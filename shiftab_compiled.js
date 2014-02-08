if(!lt.util.load.provided_QMARK_('lt.plugins.shiftab')) {
goog.provide('lt.plugins.shiftab');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');

lt.plugins.shiftab.indent_line = (function indent_line(e,l,dir){return lt.objs.editor.__GT_cm_ed.call(null,e).indentLine(l,dir,true);
});

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"shiftab.unindent-selection","shiftab.unindent-selection",1373998433),new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Unindent line(s) removing spaces",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var cur = temp__4092__auto__;var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,cur,"start"));if(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,cur)))
{return lt.objs.editor.indent_selection.call(null,cur,"subtract");
} else
{return lt.plugins.shiftab.indent_line.call(null,cur,line,"subtract");
}
} else
{return null;
}
})], null));

}

//# sourceMappingURL=