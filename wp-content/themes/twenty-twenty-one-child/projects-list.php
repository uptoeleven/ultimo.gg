<?php
/*
Template Name: Projects List
*/
?>
<?php get_header(); ?>

<style>
    .entry-hero { position: relative; }
    .entry-hero .entry-hero-container-inner .entry-header { align-items: start; }
    .entry-hero-container-inner .entry-header>div { width: 100%; }
    .entry-hero-container-inner .entry-header { display: flex; text-align: center; justify-content: center; flex-direction: column; margin-bottom: 0; }
    .hide { display:none; }
</style>

<?php $bgimage = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' ); ?>

<section style="background-image:radial-gradient(circle at top left,rgba(40,40,40,0.79) 0%,rgba(40,40,40,0.86) 100%),url(<?php echo $bgimage[0] ?>);" class="entry-hero page-hero-section entry-hero-layout-standard mb-0">
    <div class="entry-hero-container-inner">
        <div class="hero-container-wrapper">
            <div class="hero-container site-container">
                <header class="entry-header page-title title-align-inherit title-tablet-align-inherit title-mobile-align-inherit">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-7 col-lg-6">
                            <h1 class="text-white"><?php the_field('page_title'); ?></h1>
                            
                            <?php if( get_field('page_sub_title') ): ?>
                            <h3 class="text-white"><?php the_field('page_sub_title'); ?></h3>
                            <?php endif; ?>
                        </div>
                        <div class="col-12 col-sm-12 col-md-5 col-lg-6">
                            <div class="breadcrumbs h-100 float-right">
                                <div>
                                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-chevron-right"></i>&nbsp;&nbsp;&nbsp;&nbsp;<?php the_title(); ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    </div>
</section>

<div id="primary" class="content-area">
    <div style="background-color:#f8981d;">
        <div class="content-container site-container">
            <div class="section-nav">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-4">
                        <?php
                        $field_key = "field_6087db4a91f61";
                        $field = get_field_object($field_key);
                        if( $field ) {
                            echo '<select id="sort-category" name="ProjectTypes" class="projectfilter" autocomplete="off">';
                            echo '<option value=".">All Categories</option>';
                            foreach( $field['choices'] as $k => $v ) {
                                echo '<option value="' . $k . '"';
                                if ( $k == $project_category ) {
                                    echo ' selected';
                                }
                                echo '>' . $v . '</option>';
                            }
                            echo '</select>';
                        }
                        ?>
                    </div>
                    <div class="col-12 col-sm-12 col-md-4">
                        <?php
                        $field_key = "field_60943e5d60d47";
                        $field = get_field_object($field_key);
                        if( $field ) {
                            echo '<select id="sort-location" name="ProjectLoctions" class="projectfilter" autocomplete="off">';
                            echo '<option value=".">All Locations</option>';
                            foreach( $field['choices'] as $k => $v ) {
                                echo '<option value="' . $k . '"';
                                if ( $k == $project_location ) {
                                    echo ' selected';
                                }
                                echo '>' . $v . '</option>';
                            }
                            echo '</select>';
                        }
                        ?>
                    </div>
                    <div class="col-12 col-sm-12 col-md-4">
                        <input id="filter" type="text" placeholder="Search Project" class="projectfilter searchfilter">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="content-container site-container">
        <main id="main" class="site-main" role="main">
            <div class="spacer-sm"></div>
            <div class="entry-content single-content">
                <div class="row">
                    <div class="col-12">
                        <div class="project-listing">
                            <?php echo do_shortcode('[custom_projects]'); ?>
                        </div>
                    </div>
                </div>
                <div class="spacer-sm"></div>
                <ul id="pagin"></ul>
                <div class="spacer-sm"></div>
            </div>
        </main>
    </div>
</div>

<script>
jQuery(document).ready(function($){

    //Category multiselect
    //$('#projects-type-list').multiselect();

    
    //Project category dropdown
    /*$('#projects-type-list').on('change', function(e){
        var val = $(this).val();
        if(val == 'all'){
            $('.projloop').removeClass('hide');
        } else {
            $('.projloop').removeClass('hide').filter( ':not([data-custom-type*="' + val + '"])' ).addClass( 'hide');
        }
    });*/
    /*$('#projects-type-list').change(function(){
        var sel = $(this).val();
        $('div[name="projectlist"] > div').hide();
        if(sel != "all"){
           $('div[data-custom-type="'+sel+'"]').show();
        }
        else {
            $('div[name="projectlist"] > div').show();
        }
    });*/
    /*var $lis = $("div[name='projectlist'] > div").show();
    $("#projects-type-list").change(function(){
        var selectors = $("#projects-type-list option:selected").map(function(i, value){
            return ':contains("' + this.value + '")'
        }).get();
        var $selected = $lis.stop().filter(selectors.join()).show();
        $lis.not($selected).hide();
    });*/

    
    //Project location dropdown
    /*$('#projects-loc-list').change(function(){
        var sel = $(this).val();
        $('div[name="projectlist"] > div').hide();
        if(sel != "all"){
           $('div[data-location-type="'+sel+'"]').show();
        }
        else {
            $('div[name="projectlist"] > div').show();
        }
    });*/

    
    /*$("#filter").keyup(function(){
        var filter = $(this).val(),
        count = 0;
        $('#projectsListing div.projloop').each(function(){
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).hide();
            } else {
                $(this).show();
                count++;
            }
        });
    });*/



    //Project category & location filter
    //If any of the filters change
    $('select').change(function(){
        runAllFilters();
    });

    function runAllFilters(){
        var list = $("#projectsListing .projloop");
        $(list).hide();

        var filtered = $("#projectsListing > div");

        //Get all filter values
        var cat = $('select#sort-category').val();
        var loc = $('select#sort-location').val();

        //Filter based on all of them 
        filtered = filtered.filter(function(){
            return RegExp(cat).test($(this).attr("data-custom-type")) &&
                   RegExp(loc).test($(this).attr("data-location-type"))
        });

        //Show message if there are no results
        //filtered.length === 0 ? $('#projectsListing').append("<p id='noresults'>No Results!</p>") : $('#noresults').remove()

        //Display Them
        filtered.each(function (i) {
            $(this).delay(100).show();
        });
    };



    //Project search
    /*$("#filter").keyup(function(){
        var selectSize = $(this).val();
        filter(selectSize);
    });
    function filter(e){
        var regex = new RegExp('\\b\\w*' + e + '\\w*\\b');
        $('.projloop').hide().filter(function(){
            return regex.test($(this).data('keywords'))
        }).show();
    }*/
    $("#filter").on('keyup', function(){
        var matcher = new RegExp($(this).val(), 'gi');
        $('.projloop').show().not(function(){
            return matcher.test($(this).find('.prjname, .prjdescription, .prj-detail-description').text())
        }).hide();
    });



    //Project pagination
    pageSize = 9;
    incremSlide = 5;
    startPage = 0;
    numberPage = 0;

    var pageCount =  $(".projloop").length / pageSize;
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
        $(".projloop").hide();
        $(".projloop").each(function(n) {
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