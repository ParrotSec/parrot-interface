
INSTALL=install -m 0644

all:

clean:

install:
	chmod -R 0644 etc/* usr/* lib/*
	chmod +x usr/share/parrot-defaults/postgresql_reduce_shared_buffers
	chown root:root etc/* usr/* lib/*
	cp -r etc/* usr/* lib/* $(DESTDIR)/
