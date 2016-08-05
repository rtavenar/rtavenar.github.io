TARGETS=intro fonctions turtle listes listes_avancees chaines dict fichiers numpy chifoumi racine premier kpg nettoyage entrainement entrainement_nocorr
all: $(TARGETS)

$(TARGETS): %: html/%.html epub/%.epub pdf/%.pdf

html/%.html: %.md
	pandoc --self-contained -s -o $@ --highlight-style pygments --data-dir . --columns 1000 --css ../../css/md_td.css -S --normalize --ascii --number-sections --mathml $^

epub/%.epub: %.md
	pandoc -S -o $@ --columns 1000 --number-sections --epub-stylesheet ../../css/md_epub.css --mathml $^

pdf/%.pdf: %.md
	pandoc -V lang=fr -o $@ --columns 1000 --variable urlcolor=cyan --number-sections $^

clean:
	rm -f epub/*.epub pdf/*.pdf html/*.html
