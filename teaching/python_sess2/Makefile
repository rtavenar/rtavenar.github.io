all: sess2

sess2: sess2.md
	pandoc sess2.md -s -o html/sess2.html --highlight-style pygments --css ../../../css/md.css -S --ascii --number-sections --mathjax
	pandoc sess2.md -S -o epub/sess2.epub -S --epub-stylesheet ../../css/md_epub.css --number-sections --mathml
	pandoc sess2.md -o pdf/sess2.pdf
	
