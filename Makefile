all:

clean:

install:
	mkdir -p $(DESTDIR)/usr/bin/
	mkdir -p $(DESTDIR)/usr/share/applications/
	chmod -R 0644 $(DESTDIR)/etc/* $(DESTDIR)/usr/*
	chmod 755 usr/share/parrot-defaults/postgresql_reduce_shared_buffers
	chown root:root $(DESTDIR)/etc/* $(DESTDIR)/usr/*
	cp -r etc/* usr/* $(DESTDIR)/
