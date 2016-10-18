// Global vars
var 	currentStage = null,		// Stage whose animation currently playing (null if stage animation completed)
	animationQueue = [],		// Queue timeline stages to be played in fast-forward if user scrolls moderately fast
	skippingEnabled = false, 	// During very fast scrolls, skip queued stages completely rather than fast-forwarding
	fxSpeed = 0.75,			// Base for all animations speeds (will scale proportionately)
	timelineStages = [		// Array of TimelineMax objects representing each stage
		new TimelineMax({ paused: true, onComplete: completeStage })
		.add(  [
			TweenMax.to($("#object-A"),fxSpeed,{scale: 0.75 }),

			TweenMax.to($("#upper-roof"),fxSpeed / 2,{top:"-3%",delay:fxSpeed }),
			TweenMax.to($("#lower-left"),fxSpeed / 2,{bottom:"-2.8%",delay:fxSpeed}),
			TweenMax.to($("#lower-right"),fxSpeed / 2,{bottom:"-4%",delay:fxSpeed }),

			TweenMax.fromTo($("#y1946 .icon"),fxSpeed * 2,{scale:0,opacity:0},{scale:1,opacity:1,delay:fxSpeed*1.25,ease: Elastic.easeOut.config(2, 0.5)}),
			TweenMax.fromTo($("#y1946 .year"),fxSpeed,{opacity:0,scale:0.9}, {opacity:1,scale:1,delay:fxSpeed*2}),
			TweenMax.fromTo($("#y1946 .paragraph"),fxSpeed*2.5,{opacity:0}, {opacity:1,delay:fxSpeed*2.25}),
			TweenMax.fromTo($("#y1954 .icon"),fxSpeed * 2,{scale:0,opacity:0},{scale:1,opacity:1,delay:fxSpeed*2.75,ease: Elastic.easeOut.config(2, 0.5)}),
			TweenMax.fromTo($("#y1954 .year"),fxSpeed,{opacity:0,scale:0.9}, {opacity:1,scale:1,delay:fxSpeed*3.5}),
			TweenMax.fromTo($("#y1954 .paragraph"),fxSpeed*2.5,{opacity:0}, {opacity:1,delay:fxSpeed*3.75})

		] ),
		new TimelineMax({ paused: true, onComplete: completeStage })
		.add(  [
			TweenMax.to($("#y1946"),fxSpeed / 2,{opacity:0}),
			TweenMax.fromTo($("#y1954"),fxSpeed / 2,{opacity:1},{opacity:0}),

			TweenMax.to($("#upper-roof"),fxSpeed / 2,{top:"-=3.5%",delay:fxSpeed }),
			TweenMax.to($("#upper-left"),fxSpeed / 2,{top:"+=4.5%",left:"-=3.5%",delay:fxSpeed}),
			TweenMax.to($("#upper-right"),fxSpeed / 2,{top:"+=7%",right:"-=4.5%",delay:fxSpeed }),
			TweenMax.to($("#lower-roof"),fxSpeed / 2,{top:"+=2%",delay:fxSpeed }),
			TweenMax.to($("#lower-left"),fxSpeed / 2,{bottom:"-=6%",delay:fxSpeed}),
			TweenMax.set($('#lower-left'), {css:{zIndex:55}}),
			TweenMax.to($("#lower-right"),fxSpeed / 2,{bottom:"-=6%",left:"+=1.5%",delay:fxSpeed }),


			TweenMax.fromTo($("#y1965 .year"),fxSpeed,{opacity:0,scale:0.9}, {opacity:1,scale:1,delay:fxSpeed*1.5}),
			TweenMax.fromTo($("#y1965 .paragraph"),fxSpeed*2.5,{opacity:0}, {opacity:1,delay:fxSpeed*1.75}),
			TweenMax.fromTo($("#y1968 .icon"),fxSpeed * 2,{scale:0,opacity:0},{scale:1,opacity:1,delay:fxSpeed*2.25,ease: Elastic.easeOut.config(2, 0.5)}),
			TweenMax.fromTo($("#y1968 .year"),fxSpeed,{opacity:0,scale:0.9}, {opacity:1,scale:1,delay:fxSpeed*2.5}),
			TweenMax.fromTo($("#y1968 .paragraph"),fxSpeed*2.5,{opacity:0}, {opacity:1,delay:fxSpeed*2.75})

		] ),
		new TimelineMax({ paused: true, onComplete: completeStage })
		.add(  [
			TweenMax.fromTo($("#y1965"),fxSpeed / 2,{opacity:1},{opacity:0}),
			TweenMax.fromTo($("#y1968"),fxSpeed / 2,{opacity:1},{opacity:0}),

			TweenMax.to($("#upper-roof"),fxSpeed / 2,{top:"-17%",delay:fxSpeed }),
			TweenMax.to($("#upper-left"),fxSpeed / 2,{top:"40%",left:"25.5%",delay:fxSpeed}),
			TweenMax.to($("#upper-right"),fxSpeed / 2,{top:"35%",right:"20.5%",delay:fxSpeed }),
			TweenMax.to($("#lower-roof"),fxSpeed / 2,{top:"75.5%",left:"31.5%",delay:fxSpeed }),
			TweenMax.to($("#lower-left"),fxSpeed / 2,{bottom:"-9.5%",delay:fxSpeed}),
			TweenMax.to($("#lower-right"),fxSpeed / 2,{bottom:"-38%",left:"39%",delay:fxSpeed }),


			TweenMax.fromTo($("#y1972 .year"),fxSpeed,{opacity:0,scale:0.9}, {opacity:1,scale:1,delay:fxSpeed*1.5}),
			TweenMax.fromTo($("#y1972 .paragraph"),fxSpeed*2.5,{opacity:0}, {opacity:1,delay:fxSpeed*1.75}),
			TweenMax.fromTo($("#y1974 .year"),fxSpeed,{opacity:0,scale:0.9}, {opacity:1,scale:1,delay:fxSpeed*1.75}),
			TweenMax.fromTo($("#y1974 .paragraph"),fxSpeed*2.5,{opacity:0}, {opacity:1,delay:fxSpeed*2})  

		] ),
		new TimelineMax({ paused: true, onComplete: completeStage })
		.add(  [
			TweenMax.fromTo($("#y1972"),fxSpeed / 2,{opacity:1},{opacity:0}),
			TweenMax.fromTo($("#y1974"),fxSpeed / 2,{opacity:1},{opacity:0}),

			TweenMax.to($("#upper-left"),fxSpeed / 2,{left:"20%",top:"43%",delay:fxSpeed}),
			TweenMax.to($("#upper-right"),fxSpeed / 2,{right:"15.5%",delay:fxSpeed }),
			TweenMax.to($("#lower-roof"),fxSpeed / 2,{top:"78.5%",left:"30%",delay:fxSpeed }),
			TweenMax.to($("#lower-left"),fxSpeed / 2,{bottom:"-21.5%",left:"20%",delay:fxSpeed}),
			TweenMax.to($("#upper-left"),fxSpeed / 2,{left:"12%",top:"46%",delay:fxSpeed}),
			TweenMax.to($("#upper-right"),fxSpeed / 2,{right:"12.5%",top:"-2.5%",delay:fxSpeed }),
			TweenMax.to($("#lower-right"),fxSpeed / 2,{bottom:"-37%",left:"51.5%",delay:fxSpeed}),

			TweenMax.fromTo($("#y1980 .icon"),fxSpeed * 2,{scale:0,opacity:0},{scale:1,opacity:1,delay:fxSpeed*1.25,ease: Elastic.easeOut.config(2, 0.5)}),
			TweenMax.fromTo($("#y1980 .year"),fxSpeed,{opacity:0,scale:0.9}, {opacity:1,scale:1,delay:fxSpeed*1.5}),
			TweenMax.fromTo($("#y1980 .paragraph"),fxSpeed*2.5,{opacity:0}, {opacity:1,delay:fxSpeed*1.5}) 

		] ),
		new TimelineMax({ paused: true, onComplete: completeStage })
		.add(  [
			TweenMax.fromTo($("#y1980"),fxSpeed / 2,{opacity:1},{opacity:0}),

			TweenMax.to($("#upper-left"),fxSpeed / 2,{left:"12%",top:"46%",delay:fxSpeed}),
			TweenMax.to($("#upper-right"),fxSpeed / 2,{right:"12.5%",top:"-2.5%",delay:fxSpeed }),
			TweenMax.to($("#lower-right"),fxSpeed / 2,{bottom:"-37%",left:"51.5%",delay:fxSpeed}),

			TweenMax.fromTo($("#y1981 .year"),fxSpeed,{opacity:0,scale:0.9}, {opacity:1,scale:1,delay:fxSpeed*1.5}),
			TweenMax.fromTo($("#y1981 .paragraph"),fxSpeed*2.5,{opacity:0}, {opacity:1,delay:fxSpeed*1.75}),
			TweenMax.fromTo($("#y1983 .icon"),fxSpeed * 2,{scale:0,opacity:0},{scale:1,opacity:1,delay:fxSpeed,ease: Elastic.easeOut.config(2, 0.5)}),
			TweenMax.fromTo($("#y1983 .year"),fxSpeed,{opacity:0,scale:0.9}, {opacity:1,scale:1,delay:fxSpeed*1.75}),
			TweenMax.fromTo($("#y1983 .paragraph"),fxSpeed*2.5,{opacity:0}, {opacity:1,delay:fxSpeed*2}) 

		] ),
		new TimelineMax({ paused: true, onComplete: completeStage })
		.add(  [
			TweenMax.fromTo($("#y1981"),fxSpeed / 2,{opacity:1},{opacity:0}),
			TweenMax.fromTo($("#y1983"),fxSpeed / 2,{opacity:1},{opacity:0}),

			TweenMax.to($("#upper-roof"),fxSpeed / 2,{top:"-25%",delay:fxSpeed }),
			TweenMax.to($("#upper-left"),fxSpeed / 2,{top:"47.5%",left:"6.5%",delay:fxSpeed}),
			TweenMax.to($("#upper-right"),fxSpeed / 2,{top:"-7.5%",right:"7%",delay:fxSpeed }),
			TweenMax.to($("#lower-roof"),fxSpeed / 2,{top:"115%",delay:fxSpeed }),
			TweenMax.to($("#lower-left"),fxSpeed / 2,{bottom:"-25%",left:"12.5%",delay:fxSpeed}),
			TweenMax.to($("#lower-right"),fxSpeed / 2,{bottom:"-59%",left:"61%",delay:fxSpeed }),

			TweenMax.fromTo($("#y1984 .year"),fxSpeed,{opacity:0,scale:0.9}, {opacity:1,scale:1,delay:fxSpeed}),
			TweenMax.fromTo($("#y1984 .paragraph"),fxSpeed*2.5,{opacity:0}, {opacity:1,delay:fxSpeed*1.55}) 

		] ),
		new TimelineMax({ paused: true, onComplete: completeStage })
		.add(  [
			TweenMax.fromTo($("#y1984"),fxSpeed / 2,{opacity:1},{opacity:0}),

			TweenMax.fromTo($("#y1989 .year"),fxSpeed,{opacity:0,scale:0.9}, {opacity:1,scale:1,delay:fxSpeed}),
			TweenMax.fromTo($("#y1989 .paragraph"),fxSpeed*2.5,{opacity:0}, {opacity:1,delay:fxSpeed*1.5}) 

		] ),
		new TimelineMax({ paused: true, onComplete: completeStage })
		.add(  [
			TweenMax.fromTo($("#y1989"),fxSpeed / 2,{opacity:1},{opacity:0}),

			TweenMax.fromTo($("#y1996 .year"),fxSpeed,{opacity:0,scale:0.9}, {opacity:1,scale:1,delay:fxSpeed}),
			TweenMax.fromTo($("#y1996 .paragraph"),fxSpeed*2.5,{opacity:0}, {opacity:1,delay:fxSpeed*1.25}),
			TweenMax.fromTo($("#y2002 .year"),fxSpeed,{opacity:0,scale:0.9}, {opacity:1,scale:1,delay:fxSpeed*1.75}),
			TweenMax.fromTo($("#y2002 .paragraph"),fxSpeed*2.5,{opacity:0}, {opacity:1,delay:fxSpeed*2})  

		] ),
		new TimelineMax({ paused: true, onComplete: completeStage })
		.add(  [
			TweenMax.fromTo($("#y1996"),fxSpeed / 2,{opacity:1},{opacity:0}),
			TweenMax.fromTo($("#y2002"),fxSpeed / 2,{opacity:1},{opacity:0}),

			TweenMax.fromTo($("#y2006 .icon"),fxSpeed * 2,{scale:0,opacity:0},{scale:1,opacity:1,delay:fxSpeed*0.75,ease: Elastic.easeOut.config(2, 0.5)}),
			TweenMax.fromTo($("#y2006 .year"),fxSpeed,{opacity:0,scale:0.9}, {opacity:1,scale:1,delay:fxSpeed*1.25}),
			TweenMax.fromTo($("#y2006 .paragraph"),fxSpeed*2.5,{opacity:0}, {opacity:1,delay:fxSpeed*1.5}),
			TweenMax.fromTo($("#y2008 .year"),fxSpeed,{opacity:0,scale:0.9}, {opacity:1,scale:1,delay:fxSpeed*1.75}),
			TweenMax.fromTo($("#y2008 .paragraph"),fxSpeed*2.5,{opacity:0}, {opacity:1,delay:fxSpeed*2}) 

		] ),
		new TimelineMax({ paused: true, onComplete: completeStage })
		.add(  [
			TweenMax.set($('#disc-A'), {css:{top:'20%',left:'36.7%'}}),
			TweenMax.fromTo($("#y2009a .icon"),fxSpeed * 2,{scale:0.5,opacity:0},{scale:1,opacity:1,delay:fxSpeed,ease: Elastic.easeOut.config(2, 0.5)}),
			TweenMax.fromTo($("#y2009a .year"),fxSpeed,{opacity:0,scale:0.9}, {opacity:1,scale:1,delay:fxSpeed*0.5}),
			TweenMax.fromTo($("#y2009a .paragraph"),fxSpeed*2.5,{opacity:0}, {opacity:1,delay:fxSpeed*1.25}),
			TweenMax.fromTo($("#disc-A"),2.0, {scale:0.25,opacity:0}, {scale:1,opacity:1,ease: Elastic.easeOut.config(1.5, 0.5)}),
			TweenMax.fromTo($("#y2009b .paragraph"),fxSpeed*2.5,{opacity:0}, {opacity:1,delay:fxSpeed}) 

		] ),
		new TimelineMax({ paused: true, onComplete: completeStage })
		.add(  [
			TweenMax.fromTo($("#y2009a"),fxSpeed / 2,{opacity:1},{opacity:0}),
			TweenMax.fromTo($("#y2009b"),fxSpeed / 2,{opacity:1},{opacity:0}),

			TweenMax.to($("#disc-A"),2.0, {scale:0.25,opacity:0,ease: Elastic.easeOut.config(1.5, 0.5)}),
			TweenMax.fromTo($("#y2010 .icon"),fxSpeed * 2,{scale:0,opacity:0},{scale:1,opacity:1,delay:fxSpeed,ease: Elastic.easeOut.config(2, 0.5)}),
			TweenMax.fromTo($("#y2010 .year"),fxSpeed,{opacity:0,scale:0.9}, {opacity:1,scale:1,delay:fxSpeed*1.75}),
			TweenMax.fromTo($("#y2010 .paragraph"),fxSpeed*2.5,{opacity:0}, {opacity:1,delay:fxSpeed*2}),
			TweenMax.fromTo($("#y2012 .year"),fxSpeed,{opacity:0,scale:0.9}, {opacity:1,scale:1,delay:fxSpeed*2.5}),
			TweenMax.fromTo($("#y2012 .paragraph"),fxSpeed*2.5,{opacity:0}, {opacity:1,delay:fxSpeed*2.75})

		] ),
		new TimelineMax({ paused: true, onComplete: completeStage })
		.add(  [
			TweenMax.fromTo($("#y2010"),fxSpeed / 2,{opacity:1},{opacity:0}),
			TweenMax.fromTo($("#y2012"),fxSpeed / 2,{opacity:1},{opacity:0}),

			TweenMax.fromTo($("#y2014a .year"),fxSpeed,{opacity:0,scale:0.9}, {opacity:1,scale:1,delay:fxSpeed}),
			TweenMax.fromTo($("#y2014a .paragraph"),fxSpeed*2.5,{opacity:0}, {opacity:1,delay:fxSpeed*1.25}),
			TweenMax.fromTo($("#y2014b .icon"),fxSpeed * 2.5,{scale:0,opacity:0},{scale:1,opacity:1,delay:fxSpeed*1.75,ease: Elastic.easeOut.config(2, 0.5)}),
			TweenMax.fromTo($("#y2014b .paragraph"),fxSpeed*3,{opacity:0}, {opacity:1,delay:fxSpeed*2.5}),
			TweenMax.set($('#disc-B'), {css:{top:'50%',left:'8%'}}),
			TweenMax.fromTo($("#disc-B"),2.0, {scale:0.25,opacity:0}, {scale:0.8,opacity:1,ease: Elastic.easeOut.config(1.5, 0.5),delay:fxSpeed*2.75}),
			TweenMax.fromTo($("#y2014c .paragraph"),fxSpeed*2.5,{opacity:0}, {opacity:1,delay:fxSpeed*3.25}) 

		] ),
		new TimelineMax({ paused: true, onComplete: completeStage })
		.add(  [
			TweenMax.fromTo($("#y2014a"),fxSpeed,{opacity:1},{opacity:0}),
			TweenMax.fromTo($("#y2014b"),fxSpeed,{opacity:1},{opacity:0}),
			TweenMax.fromTo($("#y2014c"),fxSpeed,{opacity:1},{opacity:0}),

			TweenMax.to($("#disc-B"),2.0, {scale:0.25,opacity:0,ease: Elastic.easeOut.config(1.5, 0.5)}),
			TweenMax.fromTo($("#y2015 .year"),fxSpeed,{opacity:0,scale:0.9}, {opacity:1,scale:1,delay:fxSpeed*1.5}),
			TweenMax.fromTo($("#y2015 .paragraph"),fxSpeed*2.75,{opacity:0}, {opacity:1,delay:fxSpeed*1.75})

		] )
];

// Used to calculate scroll interval between stages
var	sectionALength = 9,
	sectionBLength = 4,
	sectionATriggerInterval,
	sectionBTriggerInterval;

$(function () { // wait for document ready

	// Initiate gallery slideshow, w/analytics
	$('#gallery .slides').slick().on('beforeChange', function(event, slick, currentSlide, nextSlide){
		ga('send', 'event', {'eventCategory': "Photo Gallery", "eventAction": "Viewed slide", "eventLabel":"Slide: " + nextSlide});
		if( (nextSlide > currentSlide && nextSlide - currentSlide == 1) || (nextSlide < currentSlide && nextSlide == 0) )
			ga('send', 'event', {'eventCategory': "Photo Gallery", "eventAction": "Clicked next/previous", "eventLabel":"Direction: next" });
		else if(nextSlide < currentSlide || (currentSlide == 0 && nextSlide - currentSlide > 1) )
			ga('send', 'event', {'eventCategory': "Photo Gallery", "eventAction": "Clicked next/previous", "eventLabel":"Direction: previous" });
	});

	var hatHeight = $('#pinned-header').height();

	// Click handling for sources modal
	$('.btn-sources').click(function(){
		$(this).parent().append($('#sources-modal'));
		$('#sources-modal').css({'height':$(window).height() - 120, 'display':'block'});
		ga('send', 'event', {'eventCategory': "Sources", "eventAction": "Viewed sources modal"});
	});
	$('#mobile-btn-sources').click(function(){
		$('#sources-modal').css({'display':'block'});
		ga('send', 'event', {'eventCategory': "Sources", "eventAction": "Viewed sources modal"});
	});
	$('#modal-close').click(function(){
		$('#sources-modal').css({'display':'none'});
		ga('send', 'event', {'eventCategory': "Sources", "eventAction": "Closed sources modal"});
	});

	// Hero entry animation
	setTimeout(function(){
		$('#hero').removeClass('just-loaded');
	},1000);

	// If not mobile, wait for page height to settle, then set up timeline track dimensions and initiate timeline setup
	if($('.animation-container').css('display') != 'none'){

		/*$(window).scroll(function(){
			$('#sources-modal').css({'display':'none'});
		})*/

		setTimeout(function(){
			// A & B refer to timeline sections above and below photo gallery, respectively
			$('#animation-track-A').height($('#section-one').innerHeight() - 75 - $('#animation-header').height());
			sectionATriggerInterval = $('#animation-track-A').height() / (sectionALength + 1);
			
			$('#timeline-A').height($(window).height() - hatHeight).css('top', 0 - ($(window).height()/2 - $('#animation-A').height()/2 - hatHeight) - 30 );

			var linePadding = ( $(window).height() - $('#animation-A').height() ) / 4;
			$('#line').height($('#animation-track-A').height() - linePadding).css('top', linePadding);

			$('#animation-track-B').height($('#section-two').innerHeight() - 75);
			sectionBTriggerInterval = $('#animation-track-B').height() / (sectionBLength + 1);
			
			$('#timeline-B').height($(window).height() - hatHeight).css('top', 0 - ($(window).height()/2 - $('#animation-B').height()/2 - hatHeight) - 30 );

			
			doScrollMagic();

		},1000);

	// If mobile, set up mobile timeline slideshow, w/analytics
	} else{
		$('#mobile-timeline').css('display','block').find('.slides').slick({arrows:false,infinite:false}).on('afterChange', function(event, slick, currentSlide){
			// Show/hide sources button and pagination on intro slide
			if(currentSlide != 0){
				$('#page').html(currentSlide);
				$('#mobile-info').animate({'opacity':1},400);
			} else{
				$('#mobile-info').animate({'opacity':0},400);
			}
		}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
			ga('send', 'event', {'eventCategory': "Mobile Timeline", "eventAction": "Viewed slide", "eventLabel":"Slide: " + nextSlide});
			if(nextSlide > currentSlide)
				ga('send', 'event', {'eventCategory': "Mobile Timeline", "eventAction": "Clicked next/previous", "eventLabel":"Direction: next" });
			else if(nextSlide < currentSlide)
				ga('send', 'event', {'eventCategory': "Mobile Timeline", "eventAction": "Clicked next/previous", "eventLabel":"Direction: previous" });
		});
	}	


});


// Heavy lifter for timeline
function doScrollMagic(){

	var controller = new ScrollMagic.Controller();

	// Fix timeline(s) in place when active
	var pinA = new ScrollMagic.Scene({
		triggerElement: "#animation-track-A", 
		duration: $('#animation-track-A').height() - $('#timeline-A').height() + ($('#animation-A').height() / 2) - 30 - 10, 
		offset: $('#animation-A').height() / 2 - 30
	})
	.setPin("#animation-A")
	.addTo(controller);

	var pinB = new ScrollMagic.Scene({
		triggerElement: "#animation-track-B", 
		duration: $('#animation-track-B').height() - $('#timeline-B').height() + ($('#animation-B').height() / 2) - 30 - 10, 
		offset: $('#animation-B').height() / 2 - 30
	})
	.setPin("#animation-B")
	.addTo(controller);

	
	// Show fixed position mini-title on timeline(s)
	var pinTitleA = new TimelineMax()
    		.add( TweenMax.to($("#pinned-title-A"),0.25,{opacity: 1}) )
    		.add( TweenMax.to($("#animation-header"),0.25,{opacity: 0}) );
 
	var pinnedTitleA = new ScrollMagic.Scene({
			triggerElement: '#animation-header',
			triggerHook: 'onLeave',
			offset: $('#animation-header').height() - 25
		})
		.setTween(pinTitleA)
		.addTo(controller);

	var pinTitleB = new TimelineMax()
    		.add( TweenMax.to($("#pinned-title-B"),0.25,{opacity: 1}) );
 
	var pinnedTitleB = new ScrollMagic.Scene({
			triggerElement: '#animation-track-B',
			triggerHook: 'onLeave',
			offset: -60
		})
		.setTween(pinTitleB)
		.addTo(controller);

	
	// Get timeline components in place for animations to come
	var timelineStage0 = new TimelineMax()
		.add( [
			TweenMax.fromTo($("#object-A"),0.75, {opacity: 0.25}, {opacity: 1, ease: Expo.easeIn}),
			TweenMax.fromTo($("#circle"),2.0, {scale:0.5}, {scale:1,ease: Elastic.easeOut.config(1.5, 0.5),delay:0.75}),
			TweenMax.fromTo($("#line"),1.5, {opacity: 0}, {opacity: 1, ease: Expo.easeIn,delay:0.75}), 
		] );

	var scene0 = new ScrollMagic.Scene({
		triggerElement: "#animation-track-A",
		offset: $('#animation-A').height() * -0.03,
		reverse: false 

	})
	.setTween(timelineStage0)
	.addTo(controller);


	// Loop through array of animation stages, create & place trigger for each, attach behavior
	for(var i = 1; i <= timelineStages.length; i++){
		if(i <= sectionALength){
			$('#animation-track-A').append('<span class="trigger" id="trigger'+i+'"></span>');
			var $trigger = $('#trigger'+i).data('index', i-1).css({'position':'absolute','right':0,'top': (i * sectionATriggerInterval) + 'px'});
		} else{
			var j = i - sectionALength - 0.75;
			$('#animation-track-B').append('<span class="trigger" id="trigger'+i+'"></span>');
			var $trigger = $('#trigger'+i).data('index', i-1).css({'position':'absolute','right':0,'top': (j * sectionBTriggerInterval) + 'px'});
		}

		var scene = new ScrollMagic.Scene({
			triggerElement: '#'+$trigger.attr('id')
		})
		.on("start", function(e){
			if(e.scrollDirection == "FORWARD")
				// If a stage is already animating, skip to end, update currentStage and play
				if(currentStage != null)
					timelineStages[currentStage].progress(1, false);
				var index = $(this.triggerElement()).data('index');
				currentStage = index;
				timelineStages[$(this.triggerElement()).data('index')].play().timeScale(1);
		})
		.on("start", function(e){
			var index = $(this.triggerElement()).data('index');
			if(e.scrollDirection == "REVERSE"){
				if(currentStage != null)
					timelineStages[currentStage].progress(0, false);
				var index = $(this.triggerElement()).data('index');
				currentStage = index;
				timelineStages[index].reverse().timeScale(7);
				completeStage();
			}
				
		})
		.addTo(controller);
	}


}
/* Not using:
function playOrQueue(stage){ //console.log('playorqueue ' + stage);
	if(currentStage != null){
		queueStage(stage);
	} else {
		playStage(stage);
	}
}
function queueStage(stage){ 
	timelineStages[currentStage].timeScale(10);
	animationQueue.push(stage);
}
function playStage(stage){ 
	currentStage = stage;
	if(animationQueue.length == 0){
		skippingEnabled = false;
		timelineStages[stage].play().timeScale(1);		
	}
	else if(animationQueue.length < 4 && !skippingEnabled){ 
		timelineStages[stage].play().timeScale(10);
	}else{
		skippingEnabled = true; 
		timelineStages[stage].play().timeScale(10);
		//timelineStages[stage].progress(1,false);
		//completeStage();
		//console.log(animationQueue);
		//clearQueue();
	}
		
}
function clearQueue(){
	for(var i=0;i<animationQueue.length;i++){
		var stage = animationQueue[i];
		if(i < animationQueue.length-1){
			timelineStages[stage].progress(1,false);
		}
		else{
			animationQueue = [];
			playStage(stage);
		}
	}
}*/
function completeStage(){  
	currentStage = null;
	
}