		<div class="in">	
			<section>
				<article class="content">
					<section class="post">
						<article class="post-content">
							<p>This page is automatically generated from my <a href="https://halshs.archives-ouvertes.fr/index/index">HAL</a> record. It is likely that my <a href="http://scholar.google.com/citations?user=wn1XFWMAAAAJ&amp;hl=fr">Google Scholar Profile</a> is more up-to-date than the following list.</p>
							
<?php
	$json_url = "https://api.archives-ouvertes.fr/search/?q=authIdHal_s:rtavenar&wt=json&fl=docType_s,halId_s,authFullName_s,producedDateY_i,fileMain_s,title_s,conferenceTitle_s,bookTitle_s,journalTitle_s,label_bibtex,files_s&rows=1000&sort=producedDateY_i%20desc";
	$contents = utf8_encode(file_get_contents($json_url));
	$results = json_decode($contents);
	
	$nPapers = $results->response->numFound;
	$startId = $results->response->start;
	
	$counter = 1;
	foreach(Array("ART" => "Journals", "COMM" => "Conferences", "THESE" => "Thesis") as $pubType => $pubTypeName) {
		echo("<h2>".$pubTypeName."</h2>");
		for($i = $startId; $i < $nPapers; $i++) {
			$curPaper = $results->response->docs[$i];
			if($curPaper->docType_s == $pubType) {				
				echo(strPaper($curPaper, $counter, true));
				$counter++;
			}
		}
	}
?>

							<section class="clear"></section>

						</article>
					</section>
				</article>
			</section>
		</div>
