# Parrot Cyberpunk — quick start

Open **Apps** to browse applications and **Parrot Security** → tool categories.
Use **Super+Space** to search by name. **Super** means the Windows or Command key.
Press **Super+F1** to reopen the desktop guide.

## Everyday controls

- **Apps:** open a category, then a subcategory and select a tool; Back returns to the previous level. Search opens the quick launcher.
- **Workspaces:** click a number in the panel, or use Ctrl+Alt+Left/Right. The four desktops are one horizontal line.
- **Windows:** click an app icon to focus it; right-click to close it.
- **Wi-Fi:** use the network tray icon to join a network.
- **Sound:** click the volume indicator for device settings; scroll to adjust volume.
- **Settings:** network, sound, Bluetooth, displays and desktop configuration.
- **Power:** suspend, log out, restart or shut down; installed sessions can also lock.

Windows tile automatically. Hold **Super** and left-drag a window to drop it at
a new position in the tiling layout; right-drag to resize it.

## Shortcuts

| Shortcut | Action |
| --- | --- |
| Super+D / Super+Space | Browse the menu / search applications |
| Super+T / Alt+T | Terminal |
| Super+E / Super+B | Files / Firefox |
| Super+I | Settings |
| Alt+Tab | Switch windows |
| Super+Q / Alt+F4 | Close a window |
| Super+F | Toggle fullscreen |
| Super+V | Toggle floating |
| Super+arrow | Focus a neighboring window |
| Super+Shift+arrow | Move a window |
| Super+Ctrl+arrow | Resize a window |
| Ctrl+Alt+Left / Right | Previous / next desktop |
| Shift+Ctrl+Alt+Left / Right | Move the active window to the previous/next desktop |
| Print / Shift+Print | Screenshot a region / all displays |
| Super+L | Lock (installed) |
| Ctrl+Alt+Delete | Power menu |

Screenshots go to **Pictures/Screenshots** and the clipboard. Esc cancels selection.
## Personalize

**Settings → Desktop configuration** opens `~/.config/hypr/local.lua` for keyboard,
display and appearance settings. In Nano, **Ctrl+O**, then Enter saves;
**Ctrl+X** exits. Hyprland reloads saved changes automatically.

Display-tool changes last for the current session. For persistent settings, use
the `hl.monitor(...)` example in `local.lua`; `hyprctl monitors` lists display names.

- **Terminal:** `~/.config/kitty/kitty.conf`
- **Launcher:** `~/.config/fuzzel/fuzzel.ini`
- **Wallpaper:** **Settings → Wallpaper** creates and opens
  `~/.config/hypr/hyprpaper.conf`. Change the `path` or `fit_mode` values;
  saving restarts Hyprpaper automatically. `hyprctl monitors` lists monitor
  names for per-monitor blocks.
- **Idle timers:** **Settings → Idle timers** creates and opens
  `~/.config/hypr/hypridle.conf`. Timeout values are in seconds; the default
  is lock after 10 minutes, display off after 15 minutes and suspend after
  30 minutes. Saving restarts Hypridle automatically.
- **Panel:** copy the files you want to change from `/etc/xdg/waybar/`
  into `~/.config/waybar/`, then edit them. Log out and back in to apply changes.

Back up personal settings before editing. `hyprctl configerrors` lists desktop
configuration errors. If Apps will not open, use Super+Space to search and check
`~/.local/state/cyberpunk-apps/apps.log` for the menu error.

## Add applications or install Parrot

Use APT for Parrot packages:

```sh
sudo apt install PACKAGE
```

Replace `PACKAGE` with the package name. To install Parrot to disk, open the Parrot
installer from **Apps**. Changes on a live USB without persistence disappear on reboot.
