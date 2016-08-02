<?php

	$json_url = "https://api.archives-ouvertes.fr/search/?q=authIdHal_s:rtavenar&wt=json&fl=docType_s,halId_s,authFullName_s,producedDateY_i,fileMain_s,title_s,conferenceTitle_s,bookTitle_s,journalTitle_s,label_bibtex,files_s&rows=1000&sort=producedDateY_i%20desc";
	$contents = utf8_encode(file_get_contents($json_url));
	$results = json_decode($contents)->response->docs;
	
	$nPapers = $results->response->numFound;
	$startId = $results->response->start;
	
	$i = 0;

?>
		<div class="in">	
			<section>
				<article class="content">
					<!-- ML for Environmental Time Series -->
					<section class="post">
						<header class="post-header">
							<h2 class="post-title">Machine Learning for Environmental Time Series</h2>
						</header>
						<article class="post-content">
							<img src="img/map_cropped.png" class="project" />
						
							<p>
								A lot of environmental data are timestamped. 
								Designing ML techniques that can handle this time dimension can often lead to much improved performance.
								We have so far turned our focus on 2 different types of environmental data: chemistry data in streams and remote sensing data (such as satellite image time series).
							</p>
							
							<h3 class="project">Related papers</h3>
							<?php echoPaper($results, "halshs-01343211", $i++);?>
							<?php echoPaper($results, "halshs-01228397", $i++);?>
							<?php echoPaper($results, "halshs-00906292", $i++);?>
							

							<section class="clear"></section>

						</article>
					</section>
					
					<!-- ML for Time Series -->
					<section class="post">
						<header class="post-header">
							<h2 class="post-title">Machine Learning &amp; Time Series</h2>
						</header>
						<article class="post-content">
							<img src="img/dtw.svg" class="project" />
						
							<p>
								This section gathers Machine Learning tools dedicated to time series with no specific focus on environmental data.
							</p>
							
							<h3 class="project">Related papers</h3>
							<?php echoPaper($results, "halshs-01339007", $i++);?>
							<?php echoPaper($results, "hal-01252726", $i++);?>
							<?php echoPaper($results, "halshs-01184900", $i++);?>
							<?php echoPaper($results, "halshs-00912512", $i++);?>
							
							<h3 class="project">Related source code</h3>
							<ul>
								<li><a href="https://github.com/rtavenar/CostAware_ECTS">Cost-Aware Early Classification of Time Series</a></li>
								<li><a href="https://github.com/rtavenar/dbotsw">Dense Bag-of-Temporal-SIFT-Words (fork from Adeline Bailly's code)</a></li>
							</ul>
							

							<section class="clear"></section>

						</article>
					</section>
					
					<!-- Action recognition -->
					<section id="post-7" class="post-7 page type-page status-publish hentry post cf">
						<header class="post-header">
							<h2 class="post-title">Time-Sensitive Graphical Models</h2>
						</header>
						<article class="post-content">
							<img src="img/hdlsm-supervised.svg" class="project" />
							
							<p>
								We have been using time-sensitive topic models (such as Probabilistic Latent Semantic Motifs or Hierarchical Dirichlet Latent Semantic Motifs) to perform action recognition in videos.
								We are still investigating the design of richer models to better capture information from streams of numerical features.
							</p>
							
							<h3 class="project">Related papers</h3>
							<?php echoPaper($results, "hal-00872048", $i++);?>
							<?php echoPaper($results, "halshs-00906292", $i++);?>

							<section class="clear"></section>

						</article>
					</section>
					
					<!-- Main PhD Project -->
					<section id="post-7" class="post-7 page type-page status-publish hentry post cf">
						<header class="post-header">
							<h2 class="post-title">Indexing &amp; IR [Past]</h2>
						</header>
						<article class="post-content">
							<img src="img/lbub.svg" class="project" />
						
							<p>
								Our main goal in this project was to introduce new indexing schemes that were able to efficiently deal with time series.
								One contribution in this field was iSAX+, an approximate-lower-bound-based indexing scheme for DTW.
								Some works about vector data indexing are also cited here.
							</p>
							
							<h3 class="project">Related papers</h3>
							<?php echoPaper($results, "hal-00862176", $i++);?>
							<?php echoPaper($results, "inria-00567877", $i++);?>
							<?php echoPaper($results, "hal-00672897", $i++);?>
							<?php echoPaper($results, "tel-00639225", $i++);?>
							<?php echoPaper($results, "inria-00566883", $i++);?>
							<?php echoPaper($results, "inria-00576886", $i++);?>
							<?php echoPaper($results, "inria-00561797", $i++);?>

							<section class="clear"></section>

						</article>
					</section>
					
					<!-- Sensor data mining -->
					<section id="post-7" class="post-7 page type-page status-publish hentry post cf">
						<header class="post-header">
							<h2 class="post-title">Time Series Mining for Smart Environments [Past]</h2>
						</header>
						<article class="post-content">
							<img src="img/smartenv.png" class="project" />
							
							<p>
								The growing use of lots of low-level sensors instead of few higher-level ones implies the use of dedicated pattern extraction methods. 
								To do so, we have worked on the already existing T-patterns algorithm so that it can efficiently scale up to larger volumes of data.
							</p>
							
							<h3 class="project">Related papers</h3>
							<?php echoPaper($results, "halshs-01138500", $i++);?>
							<?php echoPaper($results, "halshs-01138508", $i++);?>
							<?php echoPaper($results, "halshs-01138512", $i++);?>

							<section class="clear"></section>

						</article>
					</section>
				</article>
			</section>
		</div>
