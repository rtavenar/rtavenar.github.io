SRC=header.md intro.md struct.md fonctions.md listes.md chaines.md dict.md test.md fichiers.md

all: poly

poly: html epub pdf

html: $(SRC)
	pandoc --toc -s -o html/poly.html --highlight-style pygments --css ../../../css/md.css -S --ascii --number-sections --mathjax $^

epub: $(SRC)
	pandoc -S -o epub/poly.epub -S --epub-stylesheet ../../css/md_epub.css --mathml --toc $^
	
pdf: $(SRC)
	pandoc -V lang=francais -o pdf/poly.pdf --chapters --number-sections $^
	
