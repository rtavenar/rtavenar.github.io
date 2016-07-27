SRC=header.md intro.md struct.md listes.md chaines.md dict.md fichiers.md test.md conclusion.md

all: poly

poly: html epub pdf

html: $(SRC)
	pandoc --toc -s -o html/poly.html --highlight-style pygments --columns 1000 --css ../../../css/md.css -S --normalize --ascii --number-sections --mathjax $^

epub: $(SRC)
	pandoc -S -o epub/poly.epub --columns 1000 -S --epub-cover-image=logo.png --epub-metadata=metadata.xml --epub-stylesheet ../../css/md_epub.css --mathml --toc $^

pdf: $(SRC)
	pandoc -V lang=fr -o pdf/poly.pdf --columns 1000 --chapters --number-sections $^
