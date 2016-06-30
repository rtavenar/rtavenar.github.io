all: cc2 sess2

cc2: cc2.md
	pandoc cc2.md -s -o html/cc2.html --css ../../../css/md.css -S --ascii --number-sections
	pandoc cc2.md -S -o epub/cc2.epub -S --epub-stylesheet ../../css/md_epub.css --number-sections

sess2: sess2.md
	pandoc sess2.md -s -o html/sess2.html --css ../../../css/md.css -S --ascii --number-sections
	pandoc sess2.md -S -o epub/sess2.epub -S --epub-stylesheet ../../css/md_epub.css --number-sections
	
