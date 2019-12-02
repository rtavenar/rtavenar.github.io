TARGETS=intro fonctions turtle listes_dates listes_avancees chaines dict fichiers numpy chifoumi racine premier kpg nettoyage entrainement entrainement_nocorr tdinverse corrigemastermind corrigetictactoe bataille_navale api bataille_navale_intermediaire1 bataille_navale_intermediaire2  bataille_navale_intermediaire3  bataille_navale_intermediaire_corneille corrigetictactoe2019 api_graphh api_rest
all: $(TARGETS)

$(TARGETS): %: html/%.html epub/%.epub pdf/%.pdf

html/%.html: %.md
	pandoc --self-contained -s -o $@ --highlight-style pygments --data-dir . --columns 1000 --css ../css_md/md_td.css --ascii --number-sections --mathml $^

epub/%.epub: %.md
	pandoc -o $@ --columns 1000 --number-sections --css ../css_md/md_epub.css --mathml $^

pdf/%.pdf: %.md
	pandoc -V lang=fr -o $@ --columns 1000 --variable urlcolor=cyan --number-sections $^

clean:
	rm -f epub/*.epub pdf/*.pdf html/*.html
