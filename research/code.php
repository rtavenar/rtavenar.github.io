<?php

	$json_url = "https://api.archives-ouvertes.fr/search/?q=*romain%20tavenard*&wt=json&fl=docType_s,halId_s,authFullName_s,producedDateY_i,fileMain_s,title_s,conferenceTitle_s,bookTitle_s,journalTitle_s,label_bibtex,&rows=1000&sort=producedDateY_i%20desc";
	$contents = utf8_encode(file_get_contents($json_url));
	$results = json_decode($contents)->response->docs;
	
	$nPapers = $results->response->numFound;
	
	$i = 0;

?>
		<div class="in">	
			<section>
				<article class="content">
					<!-- ML for Environmental Time Series -->
					<section class="post">
						<header class="post-header">
							<h2 class="post-title">BoTSW: Bag-of-Temporal-SIFT-Words</h2>
						</header>
						<article class="post-content">
							<img src="img/botsw.svg" class="project" />
						
							<p>
								This contains code for BoTSW that is a time series classification scheme based on two basic steps: <br />
								(i) local features are extracted using the SIFT framework adapted to time series and<br />
								(ii) a global representation of the time series is built in a Bag-of-Word manner.
							</p>
							<p>
								Language: Python (tested with Python 3.4)<br />
								Python library dependencies: sklearn, numpy
							</p>
							<p>
								<a href="files/botsw.tar.gz">Download link (botsw.tar.gz)</a>
							</p>
							
							<h3 class="project">This code has been used in the following paper:</h3>
							<?php echoPaper($results, "halshs-00906292", $i++);?>
							

							<section class="clear"></section>

						</article>
					</section>
				</article>
			</section>
		</div>
