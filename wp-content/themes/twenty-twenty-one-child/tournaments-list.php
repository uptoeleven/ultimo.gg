<?php
/*
Template Name: Tournament List
*/
?>
<?php get_header(); ?>

<?php $bgimage = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' ); ?>

<section style="background-image:url(<?php echo $bgimage[0] ?>);" class="het tournament-hero">
</section>

<div class="tr-wrap pl-40 containers">
    <div class="tr-wraps sms pl-40">
    <div class="tornament-filter-container turnament-con" >
        <div class="search-filter"> <input id="filter" type="text" placeholder="Search for tournament" class="tornamentfilter searchfilter"><p>
			<a onClick="window.location.reload()">Reset filter list</a>
			</p> 
		</div>
		<div class="select-filter turnament-fil">
			<div class="filter-con">
			<?php
                        $field_key ="field_619cd92454c06";
                        $field = get_field_object($field_key);
                        if( $field ) {
                            echo '<select id="sort-games" name="Games" class="in-filter" autocomplete="off">';
                            echo '<option value=".">Games</option>';
                            foreach( $field['choices'] as $k => $v ) {
                                echo '<option value="' . $k . '"';
                                if ( $k == $game_filter ) {
                                    echo ' selected';
                                }
                                echo '>' . $v . '</option>';
                            }
                            echo '</select>';
                        }
                        ?>
			</div>

			<div class="filter-con">
		<?php
                        $field_key ="field_619ce9495b2df";
                        $field = get_field_object($field_key);
                        if( $field ) {
                            echo '<select id="sort-gen" name="Genere" class="in-filter" autocomplete="off">';
                            echo '<option value=".">Genere</option>';
                            foreach( $field['choices'] as $k => $v ) {
                                echo '<option value="' . $k . '"';
                                if ( $k == $genere ) {
                                    echo ' selected';
                                }
                                echo '>' . $v . '</option>';
                            }
                            echo '</select>';
                        }
                        ?>
		</div>
			<div class="filter-con">
		 	<?php
                        $field_key ="field_619f34179401b";
                        $field = get_field_object($field_key);
                        if( $field ) {
                            echo '<select id="sort-team" name="Team_size" class="in-filter" autocomplete="off">';
                            echo '<option value=".">Team Size</option>';
                            foreach( $field['choices'] as $k => $v ) {
                                echo '<option value="' . $k . '"';
                                if ( $k == $team_size ) {
                                    echo ' selected';
                                }
                                echo '>' . $v . '</option>';
                            }
                            echo '</select>';
                        }
                        ?>
		   </div>
		
		
		
        <div class="filter-con">
        <select class="in-filter" name="time" id="cars" autocomplete="off" onchange="javascript:show_date(this.value);">
        <option value="time">Time</option>
        <option value="today">Today</option>
        <option value="tomorrow">Tomorrow</option>
        <option value="this_week">This Week</option>
        <option value="this_month">This Month</option>
        <option value="this_year">This Year</option>
        </select>
        </div>
        </div>
        
    </div>
	 <div class="tor-sec-slider">
     <?php echo do_shortcode('[filter_tournaments]'); ?>
     </div>
    </div>
	
	
	<div class="content-container site-container">
        <div class="pl-80 mt-80 ">
           <div  class="sec-title">
            <span class="tournament-head">Featured tournaments</span>
            </div>
			<div class="feature-container">
            <?php echo do_shortcode('[shortcode_featured_slider]'); ?>
		      <div class="swiper-button-nex"><svg xmlns="http://www.w3.org/2000/svg" width="7.503" height="7.503"><path data-name="Path 13667" d="M3.349.353 6.796 3.8 3.447 7.149" fill="#171619" stroke="#fff"/></svg></div>
               <div class="swiper-button-pre"><svg xmlns="http://www.w3.org/2000/svg" width="7.503" height="7.503"><path data-name="Path 13667" d="M4.154.354.707 3.801 4.056 7.15" fill="#171619" stroke="#fff"/></svg></div>
			</div>
        </div>
    </div>
    
    <div class="content-container site-container">
        <div class="pl-80 mt-80 ">
           <div  class="sec-title">
            <span class="tournament-head">Coming Soon</span>
            </div>
            <?php echo do_shortcode('[shortcode_tournaments type="tournaments" taxonomy="wa_rankings_category" field="slug" terms="coming-soon" limit="-1"]'); ?>
        </div>
    </div>
    
    <div class="content-container site-container">
        <div class="pl-80 mt-80 ">
           <div  class="sec-title">
            <span class="tournament-head">Trending</span>
            </div>
            <?php echo do_shortcode('[shortcode_tournaments type="tournaments" taxonomy="wa_rankings_category" field="slug" terms="trending" limit="-1"]'); ?>
        </div>
    </div>
    
    
</div>    
     <div class="content-container site-container">
        <div class="bottom-banner mt-80">
          <?php 
			
		$image = get_field('bottom_banner');
		if( !empty($image) ): ?>
		<div class="tournament-hero" style="background-image: url(<?php echo $image['url']; ?>);">
		</div>
     	<?php endif; ?>
        </div>
    </div>
    


<script>
jQuery(document).ready(function($){

	//Project category & location filter
    //If any of the filters change
    $('select').change(function(){
        //runAllFilters();
    });
    $('#sort-games').change(function(){
        runAllFilters();
    });
    $('#sort-gen').change(function(){
        runAllFilters();
    });
    $('#sort-team').change(function(){
        runAllFilters();
    });
    

    function runAllFilters(){
        var list = $(".tournaments_filter_list .tor-item");
        $(list).hide();

        var filtered = $(".tournaments_filter_list > div");

        //Get all filter values
        var game = $('select#sort-games').val();
		var gen = $('select#sort-gen').val();
		var team = $('select#sort-team').val();
		    
		

        //Filter based on all of them 
        filtered = filtered.filter(function(){
            return RegExp(game).test($(this).attr("data-custom-type"))&&
                   RegExp(gen).test($(this).attr("data-genere-type"))&&
                   RegExp(team).test($(this).attr("data-size-type"))
        });

        //Show message if there are no results
        //filtered.length === 0 ? $('#projectsListing').append("<p id='noresults'>No Results!</p>") : $('#noresults').remove()

        //Display Them
        filtered.each(function (i) {
            $(this).delay(100).show();
        });
    };


    
    $("#filter").on('keyup', function(){
        var matcher = new RegExp($(this).val(), 'gi');
        $('.tor-item').show().not(function(){
            return matcher.test($(this).find('.tur-name').text())
        }).hide();
    });

    
});
</script>



<script>
    function show_date(date_string){
        if(date_string== 'time'){
            jQuery(".tournaments_filter_list .tor-item").show();
        }
        if(date_string== 'today'){
            var date_arr = new Array();
            var today="<?php echo date('d/m/Y');?>";
            jQuery(".tournaments_filter_list .tor-item").hide();
            jQuery(".tournaments_filter_list .tor-item").each(function(){
                var data_date_type=jQuery(this).attr('data-date-type');
                if(data_date_type==today){
                    jQuery(this).delay(100).show();
                }
            });
            
        }
        if(date_string== 'tomorrow'){
            var date_arr = new Array();
            var tomorrow = "<?php echo date('d/m/Y', strtotime('+1 day')) ;?>";
            jQuery(".tournaments_filter_list .tor-item").hide();
            jQuery(".tournaments_filter_list .tor-item").each(function(){
                var data_date_type=jQuery(this).attr('data-date-type');
                if(data_date_type==tomorrow){
                    jQuery(this).delay(100).show();
                }
            });
        }
        if(date_string== 'this_week'){
            <?php 
            $myDate = date('Y-m-d');
            $week_arr = array();
            $week_arr[]= date("d/m/Y", strtotime('monday this week', strtotime($myDate)));
            $week_arr[]= date("d/m/Y", strtotime('tuesday this week', strtotime($myDate)));
            $week_arr[]= date("d/m/Y", strtotime('wednesday this week', strtotime($myDate)));
            $week_arr[]= date("d/m/Y", strtotime('thursday this week', strtotime($myDate)));
            $week_arr[]= date("d/m/Y", strtotime('friday this week', strtotime($myDate)));
            $week_arr[]= date("d/m/Y", strtotime('saturday this week', strtotime($myDate)));
            $week_arr[]= date("d/m/Y", strtotime('sunday this week', strtotime($myDate)));
            ?>
            var date_arr = new Array();
            date_arr = <?php echo json_encode($week_arr); ?>;
            jQuery(".tournaments_filter_list .tor-item").hide();
            jQuery(".tournaments_filter_list .tor-item").each(function(){
                var data_date_type=jQuery(this).attr('data-date-type');
                var is_search = date_arr.indexOf(data_date_type);
                if(is_search!='-1'){
                     jQuery(this).delay(100).show();
                }
            });
        }
        if(date_string== 'this_month'){
            <?php
            $month_dates_arr = array();
            for($i = 1; $i <=  date('t'); $i++)
            {
            $month_dates_arr[] = str_pad($i, 2, '0', STR_PAD_LEFT).'/'.date('m').'/'.date('Y');
            }
            ?>
            var date_arr = new Array();
            date_arr = <?php echo json_encode($month_dates_arr); ?>;
            //alert(date_arr[0]);
            jQuery(".tournaments_filter_list .tor-item").hide();
            jQuery(".tournaments_filter_list .tor-item").each(function(){
                var data_date_type=jQuery(this).attr('data-date-type');
                var is_search = date_arr.indexOf(data_date_type);
                if(is_search!='-1'){
                     jQuery(this).delay(100).show();
                }
            });
        }
        if(date_string== 'this_year'){
            <?php
            $year_dates_arr=array();
            $secondsperday=86400;
            
            $firstdayofyear=mktime(12,0,0,1,1,date('Y'));
            $lastdayofyear=mktime(12,0,0,12,31,date('Y'));
            
            $theday = $firstdayofyear;
            
            for($theday=$firstdayofyear; $theday<=$lastdayofyear; $theday+=$secondsperday) {
            $dayinfo=getdate($theday);
            $year_dates_arr[]=date('d/m/Y',$theday);
            }
            
            ?>
            var date_arr = new Array();
            date_arr = <?php echo json_encode($year_dates_arr); ?>;
            //alert(date_arr[0]);
            jQuery(".tournaments_filter_list .tor-item").hide();
            jQuery(".tournaments_filter_list .tor-item").each(function(){
                var data_date_type=jQuery(this).attr('data-date-type');
                var is_search = date_arr.indexOf(data_date_type);
                if(is_search!='-1'){
                     jQuery(this).delay(100).show();
                }
            });
        }
        
    }
   
</script>

<?php get_footer(); ?>