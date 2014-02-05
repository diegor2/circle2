//	Diego Ramos Ruggeri
//	2010-06-13
//	diego[at]quenerd[dot]com[dot]br
//	Show google plus connections

	function callback(d){
	
	//friends <a href="http://bradfitz.com" rel="friend" >Brad</a>
	//		url = r[i].text.match(/http:.+\.gif/im);
	
	//			addImg(url[0], r[i].text);
	
	alert(d);
	
	}
	
	function findImg(url){
		//download the document and parse for images
		$.get(url, crawl);
	}
	function crawl(d){
		var url;
		//find images inside the document
		url=d.match(/<img[^>]>/);
		if (url != null) 
			url=url[0].match(/src\s*\=\s*('[\w!:.?+=%@!\-\/]+'|"[\w!:.?+=%@!\-\/]+")/);
		if (url != null) 
			url=url[0].match(/http:\/\/[\w!:.?+=%@!\-\/]+\.gif/);
		if (url != null) 
			addImg(url[0], 2);
	}
	function addImg(url, title){

			//create anchors
			a = document.createElement('a');
			a.href=url;
			a.className='fancybox';
			a.rel='gallery';
			a.title=title;
			a.id=img_id++;
			
			//append tumbnails (first frame)
			img = document.createElement('img');
			img.src='thumb.php?img='+url;
			$(a).append(img);
			$('#container').append(a);
			
			//pre-load full images on hidden frame
 			//img = document.createElement('img');
 			//img.src=original;
 			//$('#cache').append(img);
			
			//config fancybox overlay
			$(a).fancybox({
										 'transitionIn'	:	'elastic',
										 'transitionOut'	:	'elastic',
										 'speedIn'		:	100, 
										 'speedOut'		:	100, 
										 'titlePosition'	:	'inside',
										 'onStart': checkFinish,
 										 'cyclic' : true,
 										 'overlayColor' : '#4099ff',
 										 'overlayOpacity': 0.3,
 										 'autoscale': false
	 								});
	}
	function checkFinish(){
		//alert('t');
	}

	var img_id=1;
	function start(){
		var url;
		url='https://socialgraph.googleapis.com/lookup?q=https://plus.google.com/'+$('#uid').val()+'&pretty=true&callback=?';
		$.getJSON(url, callback);
	}