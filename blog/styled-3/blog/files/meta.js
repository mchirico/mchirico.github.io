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
	var websiteMeta = {"2c59dfc4387dd326cc38c868da1e209e-1.html":"\"The heart began to beat faster and the heat of the body to increase. Then came the scarlet rash, spreading like wildfire over the face and body. Most","category-swift.html":"A list of posts in category &ldquo;Swift&rdquo;","ebda65dbffbc25a9e791153e41c3058d-4.html":"Looks like Xcode 7.2 beta 3 is out…downloading it.  It would be nice to setup this version as the backup, and Xcode 7.1.1\nas the default application t","category-edgar-rice-burroughs.html":"A list of posts in category &ldquo;Edgar Rice Burroughs&rdquo;","archive-nov-2015.html":"Archives for Nov 2015","7b06f896794b90648cfdc435afe816d2-2.html":"￼\n\n'Chorus again!' cried the Gryphon, and the Mock Turtle had just begun  to repeat it, when a cry of 'The trial's beginning!' was heard in the  dista","1c6067ddd6e8d6f98b9a599d15ab1d0a-3.html":"Beginning of the blog page…decided to go with RapidWeaver 6, even after being burned with the no backup option.","category-jack-london.html":"A list of posts in category &ldquo;Jack London&rdquo;","archive-sep-2014.html":"Archives for Sep 2014","09b06926f288d493cbb7948450c3ba63-7.html":"\n\n<script src=\"https:\/\/gist.github.com\/mchirico\/b9e7c8b861e8d334c1a3.js\"><\/script>\n","0e01abffa1fbe8c2203bbb50f7267444-5.html":"Okay. Back to looking at core data in swift.","d209e09813d9da21deaca114a509e45f-0.html":"The women and children of a man's retinue may be likened to a military unit for which he is responsible in various ways, as in matters of instruction,","category-lewis-carroll.html":"A list of posts in category &ldquo;Lewis Carroll&rdquo;","9a65db3bfef5a96350bca6cc54a64038-6.html":"\n\n<script src=\"https:\/\/gist.github.com\/mchirico\/7277eb42a5c2e18cde11.js\"><\/script>"};
 
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