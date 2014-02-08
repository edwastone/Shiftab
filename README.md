LightTable plugin for Shift-Tab keymap

In Python, the typical setup is 1 tab = 4 spaces.

Rather than using 4 Backspaces to go back to the outer block,
editors allow users to use 1 Backspace or 1 Shift-Tab to
achieve this.

The default Unindent command in LightTable, however, is not
suitable for this Shift-Tab usage, as it uses the default
indentLine(aggressive=false) from CodeMirror. As such,
Unindent on a blank line would remove all spaces.

This plugin adds a keymap for Shift-Tab to a customize version
of the Unindent command.
