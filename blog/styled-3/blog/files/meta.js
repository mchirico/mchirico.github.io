(function() {
	var Realmac = Realmac || {};

	Realmac.meta = {
		
		// Set the browser title
		//
		// @var String text
		setTitle: function(text) {
			return document.title = text;
		},
		
		// Set the content attribute of a meta tag
		//
		// @var String name
		// @var String content
		setTagContent: function(tag, content){
			// If the tag being set is title
			// return the result of setTitle
			if ( tag === 'title' )
			{
				return this.setTitle(content);
			}
			
			// Otherwise try and find the meta tag
			var tag = this.getTag(tag);
			
			// If we have a tag, set the content
			if ( tag !== false )
			{
				return tag.setAttribute('content', content);
			}
			
			return false;
		},
		
		// Find a meta tag
		//
		// @var String name
		getTag: function(name) {
			var meta = document.querySelectorAll('meta');
			
			for ( var i=0; i<meta.length; i++ )
			{
				if (meta[i].name == name){
					return meta[i];
				}
			}
			
			var tag = document.createElement('meta');
			tag.name = name;
			document.getElementsByTagName('head')[0].appendChild(tag);
			
			return tag;
		}
	};
 
	// Object containing all website meta info
	var websiteMeta = {"archive-dec-2015.html":"Archives for Dec 2015","2c59dfc4387dd326cc38c868da1e209e-1.html":"\"The heart began to beat faster and the heat of the body to increase. Then came the scarlet rash, spreading like wildfire over the face and body. Most","d209e09813d9da21deaca114a509e45f-0.html":"The women and children of a man's retinue may be likened to a military unit for which he is responsible in various ways, as in matters of instruction,","85ce1e0ab9a5ba4549d2b2ba7e0dc618-10.html":"Playgrounds are kind of addictive….\n\n￼","94e27abd749513f798bec3cda17f85ec-14.html":"http:\/\/www.montcopa.org\/index.aspx?NID=834\n","ebda65dbffbc25a9e791153e41c3058d-4.html":"Looks like Xcode 7.2 beta 3 is out…downloading it.  It would be nice to setup this version as the backup, and Xcode 7.1.1\nas the default application t","3d43ed5df05b46f98f0f299b5f5c4d3e-13.html":"\nhttp:\/\/devpost.com\/hackathons\n\n","4212c602c2c601e89b9e7080587bad7e-15.html":"Reference for cron jobs:\nhttps:\/\/cloud.google.com\/appengine\/docs\/python\/config\/cron?hl=en#Python_app_yaml_About_cron_yaml\n\n","608cb7502a87a96628a79e6aec2bda9d-9.html":"\n\nGood video on protocols\nhttp:\/\/www.raywenderlich.com\/116154\/intermediate-swift-2-part-5-protocols\n\n","archive-nov-2015.html":"Archives for Nov 2015","archive-sep-2014.html":"Archives for Sep 2014","e4ac2edb6aec2215b112fbf8c2a4f7c8-12.html":"\n\nhttps:\/\/github.com\/ochococo\/Design-Patterns-In-Swift#creational\n\n","09b06926f288d493cbb7948450c3ba63-7.html":"Interesting note… dynamic dispatch happens automatically unless you declare a class or method final?\n\nhttps:\/\/developer.apple.com\/swift\/blog\/?id=27\n\n\n","0e01abffa1fbe8c2203bbb50f7267444-5.html":"Okay. Back to looking at core data in swift.\n\nSometimes you just want a very quick way of adding and deleting core data…hmm, was certainly thinking of","1c6067ddd6e8d6f98b9a599d15ab1d0a-3.html":"Beginning of the blog page…decided to go with RapidWeaver 6, even after being burned with the no backup option.","d66130b8da3356fcf665dd42c0a9b32e-8.html":"It's probably worth viewing the raywenderlich.com video's on tableviews:\n\nhttp:\/\/www.raywenderlich.com\/119628\/new-video-tutorial-series-table-views\n\n","7b06f896794b90648cfdc435afe816d2-2.html":"￼\n\n'Chorus again!' cried the Gryphon, and the Mock Turtle had just begun  to repeat it, when a cry of 'The trial's beginning!' was heard in the  dista","dc9da4659e5afe93fe83dae228b23717-11.html":"Lasso\nhttp:\/\/web.stanford.edu\/~hastie\/Papers\/B67.2%20%282005%29%20301-320%20Zou%20&%20Hastie.pdf\n\n\nhttp:\/\/www.cs.nyu.edu\/~mohri\/mlu\/mlu_lecture_3.pdf\n","9a65db3bfef5a96350bca6cc54a64038-6.html":"\nSoftmax\nhttp:\/\/cs229.stanford.edu\/notes\/cs229-notes1.pdf\n\n\n\nTensorFlow tutorials\nhttps:\/\/github.com\/nlintz\/TensorFlow-Tutorials\n\n\n\n<script src=\"https"};
 
	// pageId must match the key in websiteMeta object
	var url = window.location.pathname;
	var pageId = url.substring(url.lastIndexOf('/')+1);
	if (!pageId || pageId.length == 0){
		pageId = 'index.html';
	}
	pageMeta = websiteMeta[pageId];
 
	// If we have meta for this page
	if (pageMeta){
		Realmac.meta.setTagContent('description', pageMeta);
	}
 
 })();