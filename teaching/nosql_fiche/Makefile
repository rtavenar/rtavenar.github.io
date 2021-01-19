TARGETS=install intro td_mongoshell td_mongoshell_corr td_reqsupp td_reqsupp_corr td_textgeo td_textgeo_corr td_index td_index_corr td_aggregate td_aggregate_corr td_cud_corr td_cud td_sharding_corr td_sharding td_mapreduce_corr td_mapreduce
all: $(TARGETS)

$(TARGETS): %: html/%.html epub/%.epub pdf/%.pdf

html/%.html: %.md
	pandoc --self-contained -s -o $@ --highlight-style pygments --data-dir . --columns 1000 --css ../css_md/md_td_mongo.css --ascii --number-sections --mathml $^

epub/%.epub: %.md
	pandoc -o $@ --columns 1000 --number-sections --css ../css_md/md_epub.css --mathml $^

pdf/%.pdf: %.md
	pandoc -V lang=fr -o $@ --columns 1000 --variable urlcolor=cyan --number-sections $^

clean:
	rm -f epub/*.epub pdf/*.pdf html/*.html
