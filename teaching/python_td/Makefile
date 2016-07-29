SRC_TURTLE=turtle.md

all: turtle

turtle: turtle_html turtle_epub turtle_pdf

pdf: turtle_pdf

epub: turtle_epub

html: turtle_html

turtle_html: $(SRC_TURTLE)
	pandoc --self-contained -s -o html/turtle.html --highlight-style pygments --data-dir . --columns 1000 --css ../../css/md_td.css -S --normalize --ascii --number-sections --mathml $^

turtle_epub: $(SRC_TURTLE)
	pandoc -S -o epub/turtle.epub --columns 1000 -S --epub-cover-image=logo.png --epub-metadata=metadata.xml --epub-stylesheet ../../css/md_epub.css --mathml $^

turtle_pdf: $(SRC_TURTLE)
	pandoc -V lang=fr -o pdf/turtle.pdf --columns 1000 --variable urlcolor=cyan --number-sections $^
