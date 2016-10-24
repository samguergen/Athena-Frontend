<?php
/*
Template Name: Ad-Gallery
*/

$host   = $_SERVER["HTTP_HOST"];

//$asset_path = "//wsjcsbucket.s3.amazonaws.com/hubs/athenahealth_82507";
$asset_path = "//d885pvmm0z6oe.cloudfront.net/hubs/athenahealth_82507";

?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Paid Program: Health Care's Big Shift - athenahealth</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- OG Tags -->

		<meta name="title" content="Paid Program: Health Care's Big Shift">
		<meta name="description" content="Value-based care is driving a new model that's better for doctors, patients and our economy.">
		<link rel="canonical" href="http://<?= $host ?>/athenahealth/health-cares-big-shift/gallery.html">
		<!-- Schema.org markup for Google+ -->
		<meta itemprop="name" content="Paid Program: Health Care's Big Shift">
		<meta itemprop="description" content="Value-based care is driving a new model that's better for doctors, patients and our economy.">
		<meta itemprop="image" content="http:<?= $asset_path ?>/img/social_gallery.jpg">

		<!-- Twitter Card data -->
		<meta name="twitter:card" content="summary_large_image">
		<meta name="twitter:title" content="Paid Program: Health Care's Big Shift">
		<meta name="twitter:description" content="Paid Program for athenahealth: Value-based care is driving a better model for #doctors, #patients and our #economy. ">
		<meta name="twitter:image" content="http:<?= $asset_path ?>/img/social_gallery.jpg">

		<!-- Open Graph data -->
		<meta property="og:title" content="Paid Program: Health Care's Big Shift" />
		<meta property="og:type" content="article" />
		<meta property="og:url" content="http://<?= $host ?>/athenahealth/health-cares-big-shift/gallery.html" />
		<meta property="og:image" content="http:<?= $asset_path ?>/img/social_gallery.jpg" />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="628" />
		<meta property="og:description" content="Value-based care is driving a new model that's better for doctors, patients and our economy." />
		<meta property="og:site_name" content="athenahealth">
		<style>
			*{margin: 0;padding: 0;}
			@media screen and (max-width: 768px) {
				.at-icon-wrapper,
				.at-icon-wrapper svg{
					width: 5vw !important;
					height: 5vw !important;
				}
				.at-share-btn{
					max-width: none !important;
					max-height: none !important;
				}
			}
		</style>
	</head>
	<body>
		<script>
		      var addthis_share = {
		        url: "http://<?= $host ?>/athenahealth/health-cares-big-shift/gallery.html",
		        title: "Paid Program: Health Care's Big Shift",
		        passthrough : {
		          twitter: {
		            text: "Paid Program for athenahealth: Value-based care is driving a better model for #doctors, #patients and our #economy. "
		          }
		        }
		      }
	    </script>
	    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5743896c20d91602" async="async"></script>

	    <script>
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

			ga('create', 'UA-78607500-3', 'auto');

		</script>


	    <div class="addthis_sharing_toolbox"></div>
	    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script type="text/javascript">
			$.urlParam = function(name){
				var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
				if (results==null){
					 return null;
				}
				else{
					 return results[1] || 0;
				}
			}

			if($.urlParam('frame') == null)
				window.location = "http://<?= $host ?>/athenahealth/health-cares-big-shift/";
		</script>

	</body>
</html>

<?php //get_footer(); ?>
