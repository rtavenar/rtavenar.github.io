all: turtle intro fonctions listes listes_avancees chaines dict fichiers numpy

intro: html/intro.html epub/intro.epub pdf/intro.pdf

fonctions: html/fonctions.html epub/fonctions.epub pdf/fonctions.pdf

turtle: html/turtle.html epub/turtle.epub pdf/turtle.pdf

listes: html/listes.html epub/listes.epub pdf/listes.pdf

listes_avancees: html/listes_avancees.html epub/listes_avancees.epub pdf/listes_avancees.pdf

chaines: html/chaines.html epub/chaines.epub pdf/chaines.pdf

dict: html/dict.html epub/dict.epub pdf/dict.pdf

fichiers: html/fichiers.html epub/fichiers.epub pdf/fichiers.pdf

numpy: html/numpy.html epub/numpy.epub pdf/numpy.pdf

html/%.html: %.md
	pandoc --self-contained -s -o $@ --highlight-style pygments --data-dir . --columns 1000 --css ../../css/md_td.css -S --normalize --ascii --number-sections --mathml $^

epub/%.epub: %.md
	pandoc -S -o $@ --columns 1000 -S --epub-cover-image=logo.png --epub-metadata=metadata.xml --epub-stylesheet ../../css/md_epub.css --mathml $^

pdf/%.pdf: %.md
	pandoc -V lang=fr -o $@ --columns 1000 --variable urlcolor=cyan --number-sections $^

clean:
	rm -f epub/*.epub pdf/*.pdf html/*.html
