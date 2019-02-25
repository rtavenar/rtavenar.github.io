SRC_POLY=header.md intro.md struct.md dates.md listes.md chaines.md dict.md fichiers.md api.md test.md conclusion.md
SRC_SOLUTIONS=header_solutions.md solutions.md

all: poly solutions

poly: poly_html poly_epub poly_pdf

solutions: solutions_html solutions_epub solutions_pdf

pdf: poly_pdf solutions_pdf

epub: poly_epub solutions_epub

html: poly_html solutions_html

poly_html: $(SRC_POLY)
	pandoc --toc --self-contained -s -o html/poly.html --highlight-style pygments --data-dir . --columns 1000 --css ../css_md/md.css -S --normalize --ascii --number-sections --mathml $^

poly_epub: $(SRC_POLY)
	pandoc -S -o epub/poly.epub --columns 1000 -S --epub-stylesheet ../css_md/md_epub.css --mathml --toc $^

poly_pdf: $(SRC_POLY)
	pandoc -V lang=fr -o pdf/poly.pdf --columns 1000 --variable urlcolor=cyan --chapters --number-sections $^

solutions_html: $(SRC_SOLUTIONS)
	pandoc --self-contained -s -o html/solutions.html --toc --highlight-style pygments --data-dir . --columns 1000 --css ../css_md/md_solutions.css -S --normalize --ascii --mathml $^

solutions_epub: $(SRC_SOLUTIONS)
	pandoc -S -o epub/solutions.epub --columns 1000 -S --epub-stylesheet ../css_md/md_epub.css --mathml $^

solutions_pdf: $(SRC_SOLUTIONS)
	pandoc -V lang=fr -o pdf/solutions.pdf --columns 1000 --variable urlcolor=cyan $^

clean:
	rm -f epub/*.epub pdf/*.pdf html/*.html
