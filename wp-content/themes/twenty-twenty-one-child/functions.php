<?php

// Queue parent style followed by child/customized style

add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles', PHP_INT_MAX);



function theme_enqueue_styles() {

    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array( 'parent-style' ) );
	
    wp_enqueue_style('child-responsive', get_stylesheet_directory_uri() . '/css/responsive.css');
	
	

}

//Add custom stylesheet

function custom_stylesheet() {

    wp_enqueue_style('bootstrapcss', get_stylesheet_directory_uri() . '/css/bootstrap.min.css');

    wp_enqueue_style('bootstrapgridcss', get_stylesheet_directory_uri() . '/css/bootstrap-grid.min.css');
    
    wp_enqueue_style('owlCarousel', get_stylesheet_directory_uri() . '/css/owl.carousel.min.css');
    
    wp_enqueue_style('owlCarouselTheme', get_stylesheet_directory_uri() . '/css/owl.theme.default.min.css');
	
	wp_enqueue_style('carousel', get_stylesheet_directory_uri() . '/css/carousel.css');
	wp_enqueue_style( 'swiper', 'https://unpkg.com/swiper/swiper-bundle.min.css', [], '7.3.0' );
	
}

add_action('wp_enqueue_scripts', 'custom_stylesheet');



//Add custom JavaScript

function custom_javasvript() {

   // wp_enqueue_script('sitejquery', get_stylesheet_directory_uri() . '/js/jquery-3.6.0.min.js');

    wp_enqueue_script('bootstrapmin', get_stylesheet_directory_uri() . '/js/bootstrap.min.js');

    wp_enqueue_script('bootstrapbundle', get_stylesheet_directory_uri() . '/js/bootstrap.bundle.min.js');
	wp_enqueue_script('owlCarousel-js', get_stylesheet_directory_uri() . '/js/owl.carousel.js');
	wp_enqueue_script('mousewheel-js', get_stylesheet_directory_uri() . '/js/jquery.mousewheel.min.js');
	wp_enqueue_script( 'swiper-js', 'https://unpkg.com/swiper/swiper-bundle.min.js', [], '7.3.0', true );
// 	wp_enqueue_script('carousel-js', get_stylesheet_directory_uri() . '/js/carousel.js');
	wp_enqueue_script('custom_javascript', get_stylesheet_directory_uri() . '/js/custom.js');

}

add_action('wp_enqueue_scripts', 'custom_javasvript');

// function wpb_adding_scripts() {
// wp_register_script('carousel-js', get_stylesheet_directory_uri() . '/js/carousel.js','','1.1', true);
// wp_enqueue_script('carousel-js');
// }
// add_action( 'wp_enqueue_scripts', 'wpb_adding_scripts' );  



//Remove admin bar from front-end

show_admin_bar( false );

//Page slug body class
function add_slug_body_class( $classes ) {
    global $post;
    if ( isset( $post ) ) {
        $classes[] = $post->post_type . '-' . $post->post_name;
    }
    return $classes;
}
add_filter( 'body_class', 'add_slug_body_class' );

//Remove wp version param from any enqueued scripts
function _remove_script_version( $src ){
    $parts = explode( '?ver', $src );
    return $parts[0];
}
add_filter( 'script_loader_src', '_remove_script_version', 15, 1 );
add_filter( 'style_loader_src', '_remove_script_version', 15, 1 );


//Remove wordpress emoji code
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );


//Remove default google fonts
function wpse_dequeue_google_fonts() {
    wp_dequeue_style( 'twentyseventeen-fonts' );
}
add_action( 'wp_enqueue_scripts', 'wpse_dequeue_google_fonts', 20 );

// Product Filter
register_sidebar(array(
    'name' => __('Product Filter'),
    'id' => 'product-filter',
    'description' => __( 'Product Filter', 'twentyseventeen' ),
    //'before_widget' => '<div class="footer-address">',
    //'after_widget' => "</div>",
    //'before_title' => '<h3 class="widget-title">',
    //'after_title' => '</h3>',
));


/*

 * Function creates post duplicate as a draft and redirects then to the edit post screen

 */

function rd_duplicate_post_as_draft(){

	global $wpdb;

	if (! ( isset( $_GET['post']) || isset( $_POST['post'])  || ( isset($_REQUEST['action']) && 'rd_duplicate_post_as_draft' == $_REQUEST['action'] ) ) ) {

		wp_die('No post to duplicate has been supplied!');

	}

 

	/*

	 * get the original post id

	 */

	$post_id = (isset($_GET['post']) ? absint( $_GET['post'] ) : absint( $_POST['post'] ) );

	/*

	 * and all the original post data then

	 */

	$post = get_post( $post_id );

 

	/*

	 * if you don't want current user to be the new post author,

	 * then change next couple of lines to this: $new_post_author = $post->post_author;

	 */

	$current_user = wp_get_current_user();

	$new_post_author = $current_user->ID;

 

	/*

	 * if post data exists, create the post duplicate

	 */

	if (isset( $post ) && $post != null) {

 

		/*

		 * new post data array

		 */

		$args = array(

			'comment_status' => $post->comment_status,

			'ping_status'    => $post->ping_status,

			'post_author'    => $new_post_author,

			'post_content'   => $post->post_content,

			'post_excerpt'   => $post->post_excerpt,

			'post_name'      => $post->post_name,

			'post_parent'    => $post->post_parent,

			'post_password'  => $post->post_password,

			'post_status'    => 'draft',

			'post_title'     => $post->post_title,

			'post_type'      => $post->post_type,

			'to_ping'        => $post->to_ping,

			'menu_order'     => $post->menu_order

		);

 

		/*

		 * insert the post by wp_insert_post() function

		 */

		$new_post_id = wp_insert_post( $args );

 

		/*

		 * get all current post terms ad set them to the new post draft

		 */

		$taxonomies = get_object_taxonomies($post->post_type); // returns array of taxonomy names for post type, ex array("category", "post_tag");

		foreach ($taxonomies as $taxonomy) {

			$post_terms = wp_get_object_terms($post_id, $taxonomy, array('fields' => 'slugs'));

			wp_set_object_terms($new_post_id, $post_terms, $taxonomy, false);

		}

 

		/*

		 * duplicate all post meta just in two SQL queries

		 */

		$post_meta_infos = $wpdb->get_results("SELECT meta_key, meta_value FROM $wpdb->postmeta WHERE post_id=$post_id");

		if (count($post_meta_infos)!=0) {

			$sql_query = "INSERT INTO $wpdb->postmeta (post_id, meta_key, meta_value) ";

			foreach ($post_meta_infos as $meta_info) {

				$meta_key = $meta_info->meta_key;

				$meta_value = addslashes($meta_info->meta_value);

				$sql_query_sel[]= "SELECT $new_post_id, '$meta_key', '$meta_value'";

			}

			$sql_query.= implode(" UNION ALL ", $sql_query_sel);

			$wpdb->query($sql_query);

		}

 

 

		/*

		 * finally, redirect to the edit post screen for the new draft

		 */

		wp_redirect( admin_url( 'post.php?action=edit&post=' . $new_post_id ) );

		exit;

	} else {

		wp_die('Post creation failed, could not find original post: ' . $post_id);

	}

}

add_action( 'admin_action_rd_duplicate_post_as_draft', 'rd_duplicate_post_as_draft' );

 

/*

 * Add the duplicate link to action list for post_row_actions

 */

function rd_duplicate_post_link( $actions, $post ) {

	if (current_user_can('edit_posts')) {

		$actions['duplicate'] = '<a href="admin.php?action=rd_duplicate_post_as_draft&amp;post=' . $post->ID . '" title="Duplicate this item" rel="permalink">Duplicate</a>';

	}

	return $actions;

}

 

add_filter( 'post_row_actions', 'rd_duplicate_post_link', 10, 2 );

add_filter('page_row_actions', 'rd_duplicate_post_link', 10, 2);



//Header Top Right Info

if ( function_exists('register_sidebar') )

register_sidebar(array(
    'name' => __('Footer Logo'),
    'id' => 'footer-logo',
    'description' => __( 'Footer logo'),
    'before_widget' => '<div class="footer-logo">',
    'after_widget' => "</div>",
    'before_title' => '',
    'after_title' => '',
));

register_sidebar(array(
    'name' => __('Footer Social Icons'),
    'id' => 'footer-spcial-icon',
    'description' => __( 'Footer Social Icons'),
    'before_widget' => '<div class="footer-spcial-icon">',
    'after_widget' => "</div>",
    'before_title' => '',
    'after_title' => '',
));


// Tournaments 
 
add_action( 'init', 'tournaments_register' );

function tournaments_register() {
  $labels = array(
    'name' => _x('Tournaments', 'post type general name'),
    'singular_name' => _x('Tournament', 'post type singular name'),
    'add_new' => _x('Add New', 'l item'),
    'add_new_item' => __('Add New Tournament'),
    'edit_item' => __('Edit Tournament'),
    'new_item' => __('New Tournament'),
    'view_item' => __('View Tournament'),
    'search_items' => __('Search Tournament'),
    'not_found' =>  __('Nothing found'),
    'not_found_in_trash' => __('Nothing found in Trash'),
    'parent_item_colon' => ''
  );
 
  $args = array(
    'labels' => $labels,
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true,
    'query_var' => true,
    //'menu_icon' => get_stylesheet_directory_uri() . '/article16.png',
    'rewrite' => true,
    'capability_type' => 'post',
    'hierarchical' => false,
    'menu_position' => null,
    'supports' => array('title','editor','thumbnail')
    ); 
 
  register_post_type( 'tournaments' , $args );
}

register_taxonomy("wa_rankings_category", array("tournaments"), array("hierarchical" => true, "label" => "Tournament Category", "singular_label" => "Tournament Category", "rewrite" => true));

add_action("admin_init", "admin_init");
function admin_init(){
  add_meta_box("credits_meta", "Tournaments", "credits_meta", "tournaments", "normal", "low");
}
function credits_meta() {
  global $post;
  $custom = get_post_custom($post->ID);
  ?>
  <?php
}

add_action('save_post', 'save_details');
function save_details(){
  global $post;
 
  update_post_meta($post->ID, "rankings", $_POST["rankings"]);
}

add_action("manage_posts_custom_column",  "warankings_custom_columns");
add_filter("manage_edit-location_columns", "warankings_edit_columns");
 
function warankings_edit_columns($columns){
  $columns = array(
    "cb" => "<input type='checkbox' />",
    "title" => "Tournament Name",
    "description" => "Tournament Description",
    "wa-rankings-category" => "Tournament Category",
  );
 
  return $columns;
}
function warankings_custom_columns($column){
  global $post;
 
  switch ($column) {
    case "description":
      the_excerpt();
      break;
    case "wa-rankings-category":
      echo get_the_term_list($post->ID, 'Rankings Category', '', ', ','');
      break;
  }
}
add_theme_support('post-thumbnails');

//Display Tournaments by shortcode
add_shortcode( 'shortcode_tournaments_slider', 'tournaments_slider' );
function tournaments_slider( $atts ){
global $post;
$default = array(
//'type' => 'post',
'post_type' => 'tournaments',
'limit' => -1,
'status' => 'publish',
'order' => 'ASC',
);
$r = shortcode_atts( $default, $atts );
extract( $r );

if( empty($post_type) )
$post_type = $type;

$post_type_ob = get_post_type_object( $post_type );
if( !$post_type_ob )
return '<div class="projects_slider_notfound"><p>No such post type' . $post_type . ' found.</p></div>';

//$return = '<h3>' . $post_type_ob->name . '</h3>';

$args = array(
'post_type' => $post_type,
'numberposts' => $limit,
'post_status' => $status,
'order' => $order
);

$posts = get_posts( $args );
if( count($posts) ):
// $return .= '<div class="owl-carousel home-tour owl-theme tournament_slider">';
$return .= '<div class="home-tour tournament_slider">';
foreach( $posts as $post ): setup_postdata( $post );
//$backgroundImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );
$turnamentType = get_field( "turnament_type" );
$turnamentDate = get_field( "tournament_date" );
//$showdate = date_format($turnamentDate,"D, F Y");
$turnamentTime = get_field( "tournament_time" );
$turnamentDayLeft = get_field( "tournament_in_date" );
$turnamentPrice = get_field( "tournament_amount" );
$turnamentLink = get_field( "tournament_link" );
$description = get_the_content();
//$categories = get_cat_name( $post->ID );
$category = get_the_category( $post->ID );
//$catName = $category[0]->cat_name;
$return .= '<div class="item">';

$return .= '<div class="tournament-inner">';
	$return .= '<a href="'.$turnamentLink.'" target="_blank"><div class="tournament-hover">';
	$return .= '<div class="tournament-hover-image"></div><p>Join tournament</p>';
	$return .= '</div></a>';
	$return .= '<div class="turnament-image">';
	$return .= '<span class="category-name">'.$turnamentType.'</span>';
	$return .= '<span class="turnament-price"><span class="price-icon"></span><span class="price-text">'.$turnamentPrice.'</span></span>';
	$return .= '<img src="'.get_the_post_thumbnail_url().'">';
	$return .= '</div>';
	$return .= '<div class="turnament-data">';
		$return .= '<span class="turnament-name">'.get_the_title().'</span>';
		$return .= '<div class="turnament-description">';
			$return .= $description;
		$return .= '</div>';
		$return .= '<span class="turnament-date">'.$turnamentDate.'</span>';
		$return .= '<span class="turnament-time">'.$turnamentTime.'</span>';
		$return .= '<span class="turnament-inDay">In '.$turnamentDayLeft.' Days</span>';
		//$return .= '<span class="turnament-Link"><a href="'.$turnamentLink.'" target="_blank">Read More</a></span>';
	$return .= '</div>';
$return .= '</div>';

$return .= '</div>';
endforeach; wp_reset_postdata();

$return .= '</div>';
else :
$return .= '<p>No slider found.</p>';
endif;

return $return;
}

//Display Tournaments by shortcode
add_shortcode( 'shortcode_featured_slider', 'featured_slider' );
function featured_slider( $atts ){
global $post;
$default = array(
//'type' => 'post',
'post_type' => 'tournaments',
'limit' => -1,
'status' => 'publish',
'order' => 'ASC',
'taxonomy' => 'wa_rankings_category',
'field' => 'slug',
'terms' => 'featured'
);
$r = shortcode_atts( $default, $atts );
extract( $r );

if( empty($post_type) )
$post_type = $type;

$post_type_ob = get_post_type_object( $post_type );
if( !$post_type_ob )
return '<div class="projects_slider_notfound"><p>No such post type' . $post_type . ' found.</p></div>';

//$return = '<h3>' . $post_type_ob->name . '</h3>';

$args = array(
'post_type' => $post_type,
'numberposts' => $limit,
'post_status' => $status,
'order' => $order
);

$posts = get_posts( $args );
if( count($posts) ):
$return .= '<div class="swiper mySwiper">';
$return .= '<div class="swiper-wrapper home-tourtournament_slider">';
foreach( $posts as $post ): setup_postdata( $post );
//$backgroundImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );
$turnamentType = get_field( "turnament_type" );
$turnamentDate = get_field( "tournament_date" );
//$showdate = date_format($turnamentDate,"D, F Y");
$turnamentTime = get_field( "tournament_time" );
$turnamentDayLeft = get_field( "tournament_in_date" );
$turnamentPrice = get_field( "tournament_amount" );
$turnamentLink = get_field( "tournament_link" );
$description = get_the_content();
//$categories = get_cat_name( $post->ID );
$category = get_the_category( $post->ID );
//$catName = $category[0]->cat_name;
$return .= '<div class="swiper-slide item">';

$return .= '<div class="tournament-inner">';
	$return .= '<a href="'.$turnamentLink.'" target="_blank"><div class="tournament-hover">';
	$return .= '<div class="tournament-hover-image"></div><p>Join tournament</p>';
	$return .= '</div></a>';
	$return .= '<div class="turnament-image">';
	$return .= '<span class="category-name">'.$turnamentType.'</span>';
	$return .= '<span class="turnament-price"><span class="price-icon"></span><span class="price-text">'.$turnamentPrice.'</span></span>';
	$return .= '<img src="'.get_the_post_thumbnail_url().'">';
	$return .= '</div>';
	$return .= '<div class="turnament-data">';
		$return .= '<span class="turnament-name">'.get_the_title().'</span>';
		$return .= '<div class="turnament-description">';
			$return .= $description;
		$return .= '</div>';
		$return .= '<span class="turnament-date">'.$turnamentDate.'</span>';
		$return .= '<span class="turnament-time">'.$turnamentTime.'</span>';
		$return .= '<span class="turnament-inDay">In '.$turnamentDayLeft.' Days</span>';
		//$return .= '<span class="turnament-Link"><a href="'.$turnamentLink.'" target="_blank">Read More</a></span>';
	$return .= '</div>';
$return .= '</div>';

$return .= '</div>';
endforeach; wp_reset_postdata();
	
$return .= '</div>';
// $return .= '<div class="swiper-button-nex">sa</div>';
// $return .= '<div class="swiper-button-pre">ty</div>';
$return .= '</div>';
else :
$return .= '<p>No slider found.</p>';
endif;

return $return;
}


//Display Tournaments by shortcode 2
add_shortcode( 'shortcode_tournaments', 'tournaments_list' );
function tournaments_list( $atts ){
global $post;
$default = array(
//'type' => 'post',
'post_type' => 'tournaments',
'limit' => -1,
'status' => 'publish',
'order' => 'ASC',
'taxonomy' => '',
'field' => '',
'terms' => ''
);
$r = shortcode_atts( $default, $atts );
extract( $r );

if( empty($post_type) )
$post_type = $type;

$post_type_ob = get_post_type_object( $post_type );
if( !$post_type_ob )
return '<div class="projects_slider_notfound"><p>No such post type' . $post_type . ' found.</p></div>';

//$return = '<h3>' . $post_type_ob->name . '</h3>';

$args = array(
'post_type' => $post_type,
'numberposts' => $limit,
'post_status' => $status,
'order' => $order,
'tax_query' => array(
	array(
	  'taxonomy' => $taxonomy,
	   'field' => $field,
	   'terms' => $terms
		)
	)
);

$posts = get_posts( $args );
if( count($posts) ):
$return .= '<div class="tournaments_list">';
foreach( $posts as $post ): setup_postdata( $post );
//$backgroundImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );
$turnamentType = get_field( "turnament_type" );
$turnamentDate = get_field( "tournament_date" );
//$showdate = date_format($turnamentDate,"D, F Y");
$turnamentTime = get_field( "tournament_time" );
$turnamentDayLeft = get_field( "tournament_in_date" );
$turnamentPrice = get_field( "tournament_amount" );
$turnamentLink = get_field( "tournament_link" );
$description = get_the_content();
//$categories = get_cat_name( $post->ID );
$category = get_the_category( $post->ID );
//$catName = $category[0]->cat_name;
$return .= '<div class="item">';

$return .= '<div class="tournament-inner">';
	$return .= '<a href="'.$turnamentLink.'" target="_blank"><div class="tournament-hover">';
	$return .= '<div class="tournament-hover-image"></div><p>Join tournament</p>';
	$return .= '</div></a>';
	$return .= '<div class="turnament-image">';
	$return .= '<span class="category-name">'.$turnamentType.'</span>';
	$return .= '<span class="turnament-price"><span class="price-icon"></span><span class="price-text">'.$turnamentPrice.'</span></span>';
	$return .= '<img src="'.get_the_post_thumbnail_url().'">';
	$return .= '</div>';
	$return .= '<div class="turnament-data">';
		$return .= '<span class="turnament-name">'.get_the_title().'</span>';
		$return .= '<div class="turnament-description">';
			$return .= $description;
		$return .= '</div>';
		$return .= '<span class="turnament-date">'.$turnamentDate.'</span>';
		$return .= '<span class="turnament-time">'.$turnamentTime.'</span>';
		$return .= '<span class="turnament-inDay">In '.$turnamentDayLeft.' Days</span>';
		//$return .= '<span class="turnament-Link"><a href="'.$turnamentLink.'" target="_blank">Read More</a></span>';
	$return .= '</div>';
$return .= '</div>';

$return .= '</div>';
endforeach; wp_reset_postdata();

$return .= '</div>';
else :
$return .= '<p>No turnament found.</p>';
endif;

return $return;
}

//Display Tournaments by shortcode 3
add_shortcode( 'filter_tournaments', 'tournaments_filter' );
function tournaments_filter( $atts ){
global $post;
$default = array(
//'type' => 'post',
'post_type' => 'tournaments',
'limit' => -1,
'status' => 'publish',
'order' => 'ASC',
);
$r = shortcode_atts( $default, $atts );
extract( $r );

if( empty($post_type) )
$post_type = $type;

$post_type_ob = get_post_type_object( $post_type );
if( !$post_type_ob )
return '<div class="projects_slider_notfound"><p>No such post type' . $post_type . ' found.</p></div>';

//$return = '<h3>' . $post_type_ob->name . '</h3>';

$args = array(
'post_type' => $post_type,
'numberposts' => $limit,
'post_status' => $status,
'order' => $order
);

$posts = get_posts( $args );
if( count($posts) ):
//$return .= '<div class="owl-carousel tournaments_filter_list owl-theme">';
$return .= '<div class=" tournaments_filter_list">';
foreach( $posts as $post ): setup_postdata( $post );
//$backgroundImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );
$turnamentType = get_field( "turnament_type" );
$turnamentDate = get_field( "tournament_date" );
//$showdate = date_format($turnamentDate,"D, F Y");
$turnamentTime = get_field( "tournament_time" );
$turnamentDayLeft = get_field( "tournament_in_date" );
$turnamentPrice = get_field( "tournament_amount" );
$turnamentLink = get_field( "tournament_link" );
$description = get_the_content();
	//$categories = get_cat_name( $post->ID );
$category = get_the_category( $post->ID );
//$catName = $category[0]->cat_name;
// filter
$projectgame = get_field('game_filter');
$projectgenere = get_field('genere');
$projectsize = get_field('team_size');
// $tournament_filter_times = get_field('tournament_filter_time');

$return .='<div class="tor-item" data-custom-type="'.implode( ' ', $projectgame ).'" data-genere-type="'.implode( ' ', $projectgenere ).'" data-size-type="'.implode( ' ', $projectsize ).'" data-date-type="'.$turnamentDate.'">';


$return .= '<div class="tournament-inners">';
	$return .='<a href="'.$turnamentLink.'" target="_blank">' ;
	$return .= '<img src="'.get_the_post_thumbnail_url().'"/>';
	$return .= '<h4 class="tur-name">'.get_the_title().'</h4>';
	$return .='</a>' ;
$return .= '</div>';

$return .= '</div>';
endforeach; wp_reset_postdata();

$return .= '</div>';
else :
$return .= '<p>No turnament found.</p>';
endif;

return $return;
}
//Display Tournaments by shortcode 4
add_shortcode( 'shortcode_tournaments_slider_ult', 'tournaments_sliders' );
function tournaments_sliders( $atts ){
global $post;
$default = array(
//'type' => 'post',
'post_type' => 'tournaments',
'limit' => -1,
'status' => 'publish',
'order' => 'ASC',
);
$r = shortcode_atts( $default, $atts );
extract( $r );

if( empty($post_type) )
$post_type = $type;

$post_type_ob = get_post_type_object( $post_type );
if( !$post_type_ob )
return '<div class="projects_slider_notfound"><p>No such post type' . $post_type . ' found.</p></div>';

//$return = '<h3>' . $post_type_ob->name . '</h3>';

$args = array(
'post_type' => $post_type,
'numberposts' => $limit,
'post_status' => $status,
'order' => $order
);

$posts = get_posts( $args );
if( count($posts) ):
$return .= '<div class="owl-carousel ult-tour owl-theme tournament_slider">';
foreach( $posts as $post ): setup_postdata( $post );
//$backgroundImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );
$turnamentType = get_field( "turnament_type" );
$turnamentDate = get_field( "tournament_date" );
//$showdate = date_format($turnamentDate,"D, F Y");
$turnamentTime = get_field( "tournament_time" );
$turnamentDayLeft = get_field( "tournament_in_date" );
$turnamentPrice = get_field( "tournament_amount" );
$turnamentLink = get_field( "tournament_link" );
$description = get_the_content();
//$categories = get_cat_name( $post->ID );
$category = get_the_category( $post->ID );
//$catName = $category[0]->cat_name;
$return .= '<div class="item">';

$return .= '<div class="tournament-inner">';
	$return .= '<a href="'.$turnamentLink.'" target="_blank"><div class="tournament-hover">';
	$return .= '<div class="tournament-hover-image"></div><p>Join tournament</p>';
	$return .= '</div></a>';
	$return .= '<div class="turnament-image">';
	$return .= '<span class="category-name">'.$turnamentType.'</span>';
	$return .= '<span class="turnament-price"><span class="price-icon"></span><span class="price-text">'.$turnamentPrice.'</span></span>';
	$return .= '<img src="'.get_the_post_thumbnail_url().'">';
	$return .= '</div>';
	$return .= '<div class="turnament-data">';
		$return .= '<span class="turnament-name">'.get_the_title().'</span>';
		$return .= '<div class="turnament-description">';
			$return .= $description;
		$return .= '</div>';
		$return .= '<span class="turnament-date">'.$turnamentDate.'</span>';
		$return .= '<span class="turnament-time">'.$turnamentTime.'</span>';
		$return .= '<span class="turnament-inDay">In '.$turnamentDayLeft.' Days</span>';
		//$return .= '<span class="turnament-Link"><a href="'.$turnamentLink.'" target="_blank">Read More</a></span>';
	$return .= '</div>';
$return .= '</div>';

$return .= '</div>';
endforeach; wp_reset_postdata();

$return .= '</div>';
else :
$return .= '<p>No slider found.</p>';
endif;

return $return;
}

// News-Stories shortcode
function technology_articles($atts){
    $q = new WP_Query(
        array( 'orderby' => 'date', 'order' => 'ASC', 'category_name' => 'Stories', 'posts_per_page' => 8)
    );

    $list = '<ul class="story-ul">';
    while($q->have_posts()) : $q->the_post();
        //$categories = get_the_category($post->ID);
        $authorName = get_the_author();
        $authorDate = get_the_date();
        $bgImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );
	    $shortTitle = get_field('sub_title');

        $list .= '<li class="story-wrapper">';
	   $list .='<a href="'.get_permalink( $post ).'">' ;
			$list .= '<div class="story-holder" style="background-image: url('. $bgImg[0] .')">';
                $list .= '<div class="content-wrap">';
	             $list .= '<div class="skew-wrap">';
	              $list .= '<p>News</p>';
	              $list .= '</div>';
				$list .= '</div>';
	            $list .= '<div class="content-bot">';
	              $list .= '<p class="story-title">' .get_the_title(). '</p>';
	              $list .= '<p class="story-subtit">' . $shortTitle. '</p>';
				$list .= '</div>';



			$list .= '</div>';
	$list .='</a>' ;

  
        $list .= '</li>';
    endwhile;
  $list .= '</ul>';
    wp_reset_query();
   return $list . '';
}
add_shortcode('news-list', 'technology_articles');
// News-Latest-Bottom shortcode
function latest_articles($atts){
    $q = new WP_Query(
        array( 'orderby' => 'date', 'order' => 'DSC', 'category_name' => 'Latest News', 'posts_per_page' => 8)
    );

    $list = '<ul class="story-ul">';
    while($q->have_posts()) : $q->the_post();
        //$categories = get_the_category($post->ID);
        $authorName = get_the_author();
        $authorDate = get_the_date();
        $bgImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );
	    $shortTitle = get_field('sub_title');

        $list .= '<li class="story-wrapper ">';
	   $list .='<a href="'.get_permalink( $post ).'">' ;
			$list .= '<div class="story-holder latest" style="background-image: url('. $bgImg[0] .')">';
               $list .= '<div class="content-wrap">';
	             $list .= '<div class="skew-wrap">';
	              $list .= '<p>News</p>';
	              $list .= '</div>';
				$list .= '</div>';
	            $list .= '<div class="content-bot">';
	              $list .= '<p class="story-title">' .get_the_title(). '</p>';
	              $list .= '<p class="story-subtit">' . $shortTitle. '</p>';
				$list .= '</div>';

			$list .= '</div>';
	$list .='</a>' ;
  
        $list .= '</li>';
    endwhile;
  $list .= '</ul>';
    wp_reset_query();
   return $list . '';
}
add_shortcode('latest-list', 'latest_articles');

// Filter-news-middle
function my_recent_posts_shortcode2( $atts ) {
    extract( shortcode_atts( array( 'limit' => 6,'orderby' => 'date', 'category' => '',), $atts ) );

    global $paged;
    $q = new WP_Query(  array ( 
        'posts_per_page' => $limit, 
      
		'category_name'  => $category
    ) );

     $list = '<ul class="story-article">';
    while($q->have_posts()) : $q->the_post();
        //$categories = get_the_category($post->ID);
        $authorName = get_the_author();
        $authorDate = get_the_date('d/m/Y');
        $bgImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' );
	    $shortTitle = get_field('sub_title');
	    $content = get_the_content();
        $content = preg_replace("/\[(\/*)?vc_(.*?)\]/", "", $content);
        $content = wp_strip_all_tags($content);
        $content = wp_trim_words( $content, 20 );

        $list .= '<li class="news-list">';
	    $list .= '<div class="grid-li">';
	   $list .='<a href="'.get_permalink( $post ).'">' ;
        $list .= '<div class="left">';
        $list .= '<div class="blog_img">'. get_the_post_thumbnail() .'</div>';
	         $list .= '<div class="content-wrap">';
	             $list .= '<div class="skew-wrap">';
	              $list .= '<p>News</p>';
	              $list .= '</div>';
				$list .= '</div>';
        $list .= '</div>';
		$list .='</a>' ;
        $list .= '<div class="right">';
            $list .= '<div class="inner-cont">';
            //$list .= '<h5>' . $categories[0]->name . '</h5>';
            $list .='<a href="'.get_permalink( $post ).'">' ;
            $list .= '<h4 class="po-title"> '. get_the_title() . '</h4>';
		    $list .='</a>' ;
            $list .= '<p class="po-conten">';
            $list .= $content;
            $list .= '</p>';
	 $list .= '<div class="author-det">';
//             $list .= '<span><a class="" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">'. $authorName . '</a></span>';
	 $list .= '<span class="aut-name">'. $authorName . '</span>';
            $list .= '<span class="po-date">'. $authorDate . '</span>';
            $list .= '</div>';
           
            $list .= '</div>';
        $list .= '</div>';
        $list .= '</div>';
        $list .= '</li>';
    endwhile;
  $list .= '</ul>';
    wp_reset_query();
   return $list . '';
}
add_shortcode( 'recent-events', 'my_recent_posts_shortcode2' );


/* Add Show All Products to Woocommerce Shortcode */
function woocommerce_shortcode_display_all_products($args)
{
 if(strtolower(@$args['post__in'][0])=='all')
 {
  global $wpdb;
  $args['post__in'] = array();
  $products = $wpdb->get_results("SELECT ID FROM ".$wpdb->posts." WHERE `post_type`='product'",ARRAY_A);
  foreach($products as $k => $v) { $args['post__in'][] = $products[$k]['ID']; }
 }
 return $args;
}
add_filter('woocommerce_shortcode_products_query', 'woocommerce_shortcode_display_all_products');

// Custom-Field to add icon before image
add_action( 'woocommerce_before_shop_loop_item_title', 'shoptimizer_custom_author_field', 15 );
  
function shoptimizer_custom_author_field() { ?>
 
<?php if(get_field('category_icons')) { ?>
	<div class="cat-icon"><img src="<?php the_field('category_icons'); ?>"/></div>
<?php }
}

// ADD CRYPTO CURRENCY
add_filter( 'woocommerce_get_price_html', 'cw_change_product_price_display' );
add_filter( 'woocommerce_cart_item_price', 'cw_change_product_price_display' );
function cw_change_product_price_display( $price ) {
    // Your additional text in a translatable string
     $text = get_field('crypto_currency', $post->ID);
//     $text = __('TEXT');

    // returning the text before the price
    return $price . ' ' . '<span class="pre-price"><span>'. $text . '</span></span> ';
}

// RATINGS POSITION CHANGE
remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5 );

add_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 15 );

add_filter( 'woocommerce_output_related_products_args', 'bbloomer_change_number_related_products', 9999 );

// RELATED-PRODUCT-Change
function bbloomer_change_number_related_products( $args ) {
 $args['posts_per_page'] = 6; // # of related products
 $args['columns'] = 3; // # of columns per row
 return $args;
}

// Category Meta Position Change
remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40);
add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 2);


/*
 * Shortcode for WooCommerce Cart Icon for Menu Item
 */
add_shortcode ('woocommerce_cart_icon', 'woo_cart_icon' );
function woo_cart_icon() {
    ob_start();
 
        $cart_count = WC()->cart->cart_contents_count; // Set variable for cart item count
        $cart_url = wc_get_cart_url();  // Set variable for Cart URL
  
        echo '<div><a class="menu-item cart-contents" href="'.$cart_url.'" title="Cart">';
        
        if ( $cart_count > 0 ) {
        
            echo '<span class="cart-contents-count">'.$cart_count.'</span>';
       
        }
        
        echo '</a></div>';
        
            
    return ob_get_clean();
 
}

/*
 * Filter with AJAX When Cart Contents Update
 */
add_filter( 'woocommerce_add_to_cart_fragments', 'woo_cart_icon_count' );
function woo_cart_icon_count( $fragments ) {
 
    ob_start();
    
    $cart_count = WC()->cart->cart_contents_count;
    $cart_url = wc_get_cart_url();
    
    
    echo '<a class="cart-contents menu-item" href="'.$cart_url.'" title="View Cart">';
    
    if ( $cart_count > 0 ) {
        
        echo '<span class="cart-contents-count">'.$cart_count.'</span>';
                    
    }
    echo '</a>';
 
    $fragments['a.cart-contents'] = ob_get_clean();
     
    return $fragments;
}

// Count Text AJAX update
add_filter( 'woocommerce_add_to_cart_fragments', 'refresh_cart_count', 50, 1 );
function refresh_cart_count( $fragments ){
    ob_start();
    ?>
    <span class="counter" id="cart-count"><?php
    $cart_count = WC()->cart->get_cart_contents_count();
    echo sprintf ( _n( '%d', '%d', $cart_count ), $cart_count );
    ?></span>
    <?php
     $fragments['#cart-count'] = ob_get_clean();

    return $fragments;
}

/* Create Buy Now Button dynamically after Add To Cart button */
    function add_content_after_addtocart() {
    
        // get the current post/product ID
        $current_product_id = get_the_ID();
    
        // get the product based on the ID
        $product = wc_get_product( $current_product_id );
    
        // get the "Checkout Page" URL
        $checkout_url = WC()->cart->get_checkout_url();
    
        // run only on simple products
        if( $product->is_type( 'simple' ) ){
            echo '<a href="'.$checkout_url.'?add-to-cart='.$current_product_id.'" class="buy-now button">BUY NOW</a>';
            //echo '<a href="'.$checkout_url.'" class="buy-now button">BUY NOW</a>';
        }
    }
    add_action( 'woocommerce_after_add_to_cart_quantity', 'add_content_after_addtocart' );
/* Create Buy Now Button dynamically after Add To Cart button end */

//Menu location
function register_mobile_menu() {
    register_nav_menu('mobile-menu',__( 'Mobile' ));
}
add_action( 'init', 'register_mobile_menu' );
//Menu location end


//Icon ADD location

add_action( 'woocommerce_after_quantity_input_field', 'ts_quantity_plus_sign' );
function ts_quantity_plus_sign() {
   echo '<button type="button" class="p-bt plus" ><svg xmlns="http://www.w3.org/2000/svg" width="10.45" height="10.449"><path d="m4.763.603 4.963 4.53-4.963 4.963" fill="none" stroke="#fff"/></svg></svg></button>';
}
 
add_action( 'woocommerce_before_quantity_input_field', 'ts_quantity_minus_sign' );
function ts_quantity_minus_sign() {
   echo '<button type="button" class="p-bt minus" ><svg xmlns="http://www.w3.org/2000/svg" width="10.45" height="10.449"><path data-name="Path 13617" d="M5.687 9.847.724 5.317 5.687.354" fill="none" stroke="#fff"/></svg></button>';
}
//Icon ADD location  end

/**
 * Add Quantity Text
 */
 add_action( 'woocommerce_before_add_to_cart_quantity', 'wp_echo_qty_front_add_cart' );
 
function wp_echo_qty_front_add_cart() {
 echo '<div class="qtys">Quantity</div>'; 
}
/**
 * Remove product data tabs
 */
add_filter( 'woocommerce_product_tabs', 'woo_remove_product_tabs', 98 );

function woo_remove_product_tabs( $tabs ) {

    unset( $tabs['additional_information'] );  	// Remove the additional information tab

    return $tabs;
}
/**
 * Remove default shp url 
 */
// add_filter( 'woocommerce_return_to_shop_redirect', 'st_woocommerce_shop_url' ); 
// function st_woocommerce_shop_url(){    
// return site_url() . '/store/';  
// }

// Specification tab only for hardware category products

add_filter( 'woocommerce_product_tabs', 'woo_custom_product_tabs' );

    function woo_custom_product_tabs( $tabs ) {

      global $post;
     if ( is_product() && has_term( 'Hardware', 'product_cat' )) 
     { 
      $tabs['custom_specification'] = array( 'title' => __( 'Specification', 'woocommerce' ), 'priority' => 10, 'callback' => 'woo_custom_specification_content' );
      }
      return $tabs;
    }

function woo_custom_specification_content() {
    // The other products tab content
    echo '<h2>Specification</h2>';
	echo get_field( 'specification' );
}

// Remove wp version meta
remove_action( 'wp_head', 'wp_generator' );



/**
 * Save product attributes to post metadata when a product is saved.
 *
 * @param int $post_id The post ID.
 * @param post $post The post object.
 * @param bool $update Whether this is an existing post being updated or not.
 *  
 * Refrence: https://codex.wordpress.org/Plugin_API/Action_Reference/save_post
 */
function wh_save_product_custom_meta($post_id, $post, $update) {
    $post_type = get_post_type($post_id);
    // If this isn't a 'product' post, don't update it.
    if ($post_type != 'product')
        return;

    if (!empty($_POST['attribute_names']) && !empty($_POST['attribute_values'])) {
        $attribute_names = $_POST['attribute_names'];
        $attribute_values = $_POST['attribute_values'];
        foreach ($attribute_names as $key => $attribute_name) {
            switch ($attribute_name) {
                //for color (string)
                case 'pa_color':
                    //it may have multiple color (eg. black, brown, maroon, white) but we'll take only the first color.
                    if (!empty($attribute_values[$key][0])) {
                        update_post_meta($post_id, 'pa_color', $attribute_values[$key][0]);
                    }
                    break;
                //for lenght (int)
                case 'pa_length':
                    if (!empty($attribute_values[$key][0])) {
                        update_post_meta($post_id, 'pa_length', $attribute_values[$key][0]);
                    }
                    break;
                default:
                    break;
            }
        }
    }
}

add_action( 'save_post', 'wh_save_product_custom_meta', 10, 3);


/** 
 *  Main ordering logic for orderby attribute
 *  Refrence: https://docs.woocommerce.com/document/custom-sorting-options-ascdesc/
 */
add_filter('woocommerce_get_catalog_ordering_args', 'wh_catalog_ordering_args');

function wh_catalog_ordering_args($args) {
    global $wp_query;
    if (isset($_GET['orderby'])) {
        switch ($_GET['orderby']) {
            //for attribute/taxonomy=pa_color
            case 'pa-color-asc' :
                $args['order'] = 'ASC';
                $args['meta_key'] = 'pa_color';
                $args['orderby'] = 'meta_value';
                break;
            case 'pa-color-desc' :
                $args['order'] = 'DESC';
                $args['meta_key'] = 'pa_color';
                $args['orderby'] = 'meta_value';
                break;
            //for attribute/taxonomy=pa_length
            case 'pa-length-asc' :
                $args['order'] = 'ASC';
                $args['meta_key'] = 'pa_length';
                $args['orderby'] = 'meta_value_num';
                break;
            case 'pa-length-desc' :
                $args['order'] = 'DESC';
                $args['meta_key'] = 'pa_length';
                $args['orderby'] = 'meta_value_num';
                break;
        }
    }
    return $args;
}

/**
 *  Lets add the created sorting order to the dropdown list.
 *  Refrence: http://hookr.io/filters/woocommerce_catalog_orderby/
 */
//To under Default Product Sorting in Dashboard > WooCommerce > Settings > Products > Display.
add_filter( 'woocommerce_default_catalog_orderby_options', 'wh_catalog_orderby' );
add_filter('woocommerce_catalog_orderby', 'wh_catalog_orderby');

function wh_catalog_orderby($sortby) {
    $sortby['pa-color-asc'] = 'Sort by Color: A - Z';
    $sortby['pa-color-desc'] = 'Sort by Color: Z - A';
    $sortby['pa-length-asc'] = 'Sort by Length: Small - Large';
    $sortby['pa-length-desc'] = 'Sort by Length: Large - Small';
    return $sortby;
}

