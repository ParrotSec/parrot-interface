#!/bin/bash

if [ -f ~/.keymap-selected ]
then
	exit 0
else
	touch ~/.keymap-selected
	lxkeymap
fi
