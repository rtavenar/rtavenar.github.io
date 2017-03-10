SRC_POLY=header.md intro.md

all: poly_html poly_epub poly_pdf

poly_html: $(SRC_POLY)
	pandoc --toc --self-contained -s -o html/poly.html --highlight-style pygments --data-dir . --columns 1000 --css ../../css/md.css -S --normalize --ascii --number-sections --mathjax $^

poly_epub: $(SRC_POLY)
	pandoc -S -o epub/poly.epub --columns 1000 -S --epub-stylesheet ../../css/md_epub.css --mathml --toc $^

poly_pdf: $(SRC_POLY)
	pandoc -V lang=fr -o pdf/poly.pdf --columns 1000 --variable urlcolor=cyan --chapters --number-sections $^

clean:
	rm -f epub/*.epub pdf/*.pdf html/*.html
