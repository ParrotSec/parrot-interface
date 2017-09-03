
INSTALL=install -m 0644

all:

clean:

install:
	mkdir -p $(DESTDIR)/usr/bin/
	mkdir -p $(DESTDIR)/usr/share/applications/
	mkdir -p $(DESTDIR)/etc/xdg/autostart/
	
	chmod -R 0644 etc/* usr/* lib/*
	chmod 755 usr/share/parrot-defaults/postgresql_reduce_shared_buffers
	chown root:root etc/* usr/* lib/*
	cp -r etc/* usr/* lib/* $(DESTDIR)/
	cp keyboard-selector/keyboard-selector.sh $(DESTDIR)/usr/bin/keyboard-selector
	cp keyboard-selector/parrot-keyboard-selector.desktop $(DESTDIR)/etc/xdg/autostart/
		chown root:root $(DESTDIR)/usr/bin/keyboard-selector
	chown root:root $(DESTDIR)/etc/xdg/autostart/parrot-keyboard-selector.desktop
	chmod 755 $(DESTDIR)/usr/bin/keyboard-selector
	chmod 755 $(DESTDIR)/etc/xdg/autostart/parrot-keyboard-selector.desktop
	

