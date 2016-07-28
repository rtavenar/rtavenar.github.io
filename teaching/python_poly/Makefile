SRC_POLY=header.md intro.md struct.md listes.md chaines.md dict.md fichiers.md test.md conclusion.md
SRC_SOLUTIONS=solutions.md

all: poly solutions

poly: poly_html poly_epub poly_pdf

solutions: solutions_html solutions_epub solutions_pdf

pdf: poly_pdf solutions_pdf

epub: poly_epub solutions_epub

html: poly_html solutions_html

poly_html: $(SRC_POLY)
	pandoc --toc -s -o html/poly.html --highlight-style pygments --data-dir . --columns 1000 --css ../../../css/md.css -S --normalize --ascii --number-sections --mathjax $^

poly_epub: $(SRC_POLY)
	pandoc -S -o epub/poly.epub --columns 1000 -S --epub-cover-image=logo.png --epub-metadata=metadata.xml --epub-stylesheet ../../css/md_epub.css --mathml --toc $^

poly_pdf: $(SRC_POLY)
	pandoc -V lang=fr -o pdf/poly.pdf --columns 1000 --variable urlcolor=cyan --chapters --number-sections $^

solutions_html: $(SRC_SOLUTIONS)
	pandoc -s -o html/solutions.html --highlight-style pygments --columns 1000 --css ../../../css/md.css -S --normalize --ascii --number-sections --mathjax $^

solutions_epub: $(SRC_SOLUTIONS)
	pandoc -S -o epub/solutions.epub --columns 1000 -S --epub-cover-image=logo.png --epub-metadata=metadata.xml --epub-stylesheet ../../css/md_epub.css --mathml $^

solutions_pdf: $(SRC_SOLUTIONS)
	pandoc -V lang=fr -o pdf/solutions.pdf --columns 1000 --variable urlcolor=cyan $^
