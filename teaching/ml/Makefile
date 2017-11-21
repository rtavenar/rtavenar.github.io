all: slides_lda.html

slides_lda.html: lda.md
	pandoc -s --mathml --css ../../css/slides.css -t slidy lda.md -o slides_lda.html --slide-level=1
