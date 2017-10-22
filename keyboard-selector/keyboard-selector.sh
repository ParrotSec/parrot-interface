#!/bin/bash

if [ -f ~/.keymap-selected ]
then
	setxkbmap $(cat "~/.keymap-selected")
else
	sleep 5
	setxkbmap us
	lxkeymap && touch ~/.keymap-selected
fi
