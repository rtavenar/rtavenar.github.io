all: cc2

cc2: cc2.md
	pandoc cc2.md -s -o html/cc2.html --css ../../../css/md.css -S --ascii --number-sections
	pandoc cc2.md -S -o epub/cc2.epub -S --epub-stylesheet ../../css/md_epub.css --number-sections
	
