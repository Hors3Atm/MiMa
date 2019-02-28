CFLAGS = --outDir ./scripts
SF = ./scripts/

all: $(SF)switch.js

$(SF)switch.js: $(SF)ts/switch.ts
	tsc $(SF)ts/switch.ts $(CFLAGS)