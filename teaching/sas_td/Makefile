TARGETS=intro_corr intro_nocorr nyfood_corr nyfood_nocorr graphes_corr graphes sas_ondemand

all: $(TARGETS)

$(TARGETS): %: html/%.html pdf/%.pdf

html/%.html: %.md
	pandoc --self-contained -s -o $@ --highlight-style pygments --data-dir . --columns 1000 --css ../css_md/md_td.css --ascii --number-sections --mathml  --syntax-definition=sas.xml $^

pdf/%.pdf: %.md
	pandoc -V lang=fr -o $@ --columns 1000 --variable urlcolor=cyan --number-sections  --syntax-definition=sas.xml $^

clean:
	rm -f pdf/*.pdf html/*.html
