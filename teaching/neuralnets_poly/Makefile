SRC_POLY=header.md intro.md perceptron.md mlp.md cnn.md tf.md

all: poly

poly: poly_html poly_epub poly_pdf

pdf: poly_pdf

epub: poly_epub

html: poly_html

poly_html: $(SRC_POLY)
	pandoc --toc -s -o html/poly.html --highlight-style pygments --data-dir . --columns 1000 --css ../../../css/md.css -S --normalize --ascii --number-sections --mathjax --filter pandoc-eqnos $^

poly_epub: $(SRC_POLY)
	pandoc -S -o epub/poly.epub --columns 1000 -S --epub-stylesheet ../../css/md_epub.css --mathml --toc --filter pandoc-eqnos $^

poly_pdf: $(SRC_POLY)
	pandoc -V lang=fr -o pdf/poly.pdf --columns 1000 --variable urlcolor=cyan --chapters --number-sections --filter pandoc-eqnos $^

clean:
	rm -f epub/*.epub pdf/*.pdf html/*.html
