TARGETS=enonce enonce_2018 enonce_2019 enonce_2020 tweepy_gmaps tweepy_createapp
all: $(TARGETS)

$(TARGETS): %: html/%.html epub/%.epub pdf/%.pdf

html/%.html: %.md
	pandoc --self-contained -s -o $@ --highlight-style pygments --data-dir . --columns 1000 --css ../css_md/md_td.css --ascii --number-sections --mathml $^

epub/%.epub: %.md
	pandoc -o $@ --columns 1000 --number-sections --css ../css_md/md_epub.css --mathml $^

pdf/%.pdf: %.md
	pandoc -V lang=fr -o $@ --columns 1000 --variable urlcolor=cyan --number-sections $^

clean:
	rm -f epub/*.epub pdf/*.pdf html/*.html
