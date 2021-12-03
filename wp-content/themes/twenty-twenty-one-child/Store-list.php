<?php
/*
Template Name: Store List
*/
?>
<?php get_header(); ?>

<?php $bgimage = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' ); ?>

<section style="background-image:url(<?php echo $bgimage[0] ?>);" class="het tournament-hero">
</section>

<div class="tr-wrap pl-40  containers">
    <div class="tr-wraps pl-40">
    <div class="tornament-filter-container product-fil-con store-li" >
        <div class="search-filter pr-fl"> <div class="tabs-nav product-tab">
<ul>
 	<li class="active"><a href="#tab1">All Products</a></li>
 	<li><a href="#tab2">Clothing</a></li>
 	<li><a href="#tab3">Hardware</a></li>
</ul>
</div>
		</div>
		<div class="select-filter pro-filter">
		<div class="filter-con">
		 <select class="in-filter" name="Games" id="cars" autocomplete="off">
		  <option value="volvo">FILTER 1</option>
		  <option value="saab">OPTION2</option>
		</select>
		</div>
			<div class="filter-con">
		 <select class="in-filter" name="Games" id="cars" autocomplete="off">
		  <option value="volvo">FILTER 1</option>
		  <option value="saab">OPTION2</option>
		</select>
		</div>
			<div class="filter-con">
		 <select class="in-filter" name="Games" id="cars" autocomplete="off">
		  <option value="volvo">FILTER 1</option>
		  <option value="saab">OPTION2</option>
		</select>
		   </div>
			<div class="filter-con">
		 <select class="in-filter" name="Games" id="cars" autocomplete="off">
		  <option value="volvo">FILTER 1</option>
		  <option value="saab">OPTION2</option>
		</select>
		   </div>
		</div>
    </div>
     </div>
    </div>
    
    <div class="content-container site-container">
        <div class="pl-80 mt-80 containers ">
          <section class="tabs-content">
<div id="tab1"><?php echo do_shortcode('[products ids="all"]'); ?> <ul id="pagin"></ul></div>
<div id="tab2"><?php echo do_shortcode('[products columns ="3" category="clothing"]'); ?></div>
<div id="tab3"><?php echo do_shortcode('[products columns ="3" category="hardware"]'); ?></div>
</section>
        </div>
    </div>

                <ul id="pagin"></ul>
    
     <div class="content-container site-container">
        <div class="bottom-banner mt-80">
          <?php 
		$image = get_field('shop_banner');
		if( !empty($image) ): ?>
		<div class="tournament-hero" style="background-image: url(<?php echo $image['url']; ?>);">
		</div>
     	<?php endif; ?>
        </div>
    </div>
    
<!--</div>-->

<script>
jQuery(document).ready(function($){
    //Project pagination
    pageSize = 9;
    incremSlide = 5;
    startPage = 0;
    numberPage = 0;

    var pageCount =  $("#tab1 .entry.product").length / pageSize;
    var totalSlidepPage = Math.floor(pageCount / incremSlide);
        
    for(var i = 0 ; i<pageCount;i++){
        $("#pagin").append('<li><a href="javascript:void(0)">'+(i+1)+'</a></li> ');
        if(i>pageSize){
           $("#pagin li").eq(i).hide();
        }
    }

    var prev = $("<li/>").addClass("prev").html("Prev").click(function(){
       startPage-=5;
       incremSlide-=5;
       numberPage--;
       slide();
    });

    prev.hide();

    var next = $("<li/>").addClass("next").html("Next").click(function(){
       startPage+=5;
       incremSlide+=5;
       numberPage++;
       slide();
    });

    $("#pagin").prepend(prev).append(next);
    $("#pagin li").first().find("a").addClass("current");

    slide = function(sens){
        $("#pagin li").hide();
       
        for(t=startPage;t<incremSlide;t++){
            $("#pagin li").eq(t+1).show();
        }
        if(startPage == 0){
            next.show();
            prev.hide();
        }else if(numberPage == totalSlidepPage ){
            next.hide();
            prev.show();
        }else{
         next.show();
         prev.show();
        }
    }

    showPage = function(page) {
        $("#tab1 .entry.product").hide();
        $("#tab1 .entry.product").each(function(n) {
            if (n >= pageSize * (page - 1) && n < pageSize * page)
                $(this).show();
          });        
    }
        
    showPage(1);
    $("#pagin li a").eq(0).addClass("current");

    $("#pagin li a").click(function() {
         $("#pagin li a").removeClass("current");
         $(this).addClass("current");
         showPage(parseInt($(this).text()));
    });
    
});
</script>

<?php get_footer(); ?>