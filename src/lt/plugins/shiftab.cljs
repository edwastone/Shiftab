(ns lt.plugins.shiftab
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]))

(defn indent-line [e l dir]
  (.indentLine (editor/->cm-ed e) l dir true))

(cmd/command {:command :shiftab.unindent-selection
              :desc "Editor: Unindent line(s) removing spaces"
              :exec (fn []
                      (when-let [cur (pool/last-active)]
                        (let [line (-> cur (editor/->cursor "start") :line)]
                          (if (editor/selection? cur)
                            (editor/indent-selection cur "subtract")
                            (indent-line cur line "subtract")
                            )
                          )))})
