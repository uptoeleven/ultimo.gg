<?php
/**
 * The Template for displaying product archives, including the main shop page which is a post type archive
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/archive-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.4.0
 */

defined( 'ABSPATH' ) || exit;

get_header( 'shop' );

/**
 * Hook: woocommerce_before_main_content.
 *
 * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
 * @hooked woocommerce_breadcrumb - 20
 * @hooked WC_Structured_Data::generate_website_data() - 30
 */

do_action( 'woocommerce_before_main_content' );

?>
<?php $thumb = wp_get_attachment_image_src( get_post_thumbnail_id( wc_get_page_id( 'shop' ) ), 'full' );?>

    <div style="background-image: url('<?php echo $thumb['0']; ?>')" class="headerWrap innerBanner ar">
        <div class="entry-header container">
            <div class="entry-title mainHeader">
                <?php woocommerce_page_title(); ?>
            </div>
        </div>
	 </div>	
<header class="woocommerce-products-header">
	<?php if ( apply_filters( 'woocommerce_show_page_title', true ) ) : ?>
		<h1 class="woocommerce-products-header__title page-title"><?php woocommerce_page_title(); ?></h1>
	<?php endif; ?>
	
	

	<?php
	/**
	 * Hook: woocommerce_archive_description.
	 *
	 * @hooked woocommerce_taxonomy_archive_description - 10
	 * @hooked woocommerce_product_archive_description - 10
	 */
	do_action( 'woocommerce_archive_description' );
	?>
</header>

<div class="tr-wrap pl-40  containers">
    <div class="tr-wraps pl-40">
    <div class="tornament-filter-container product-fil-con store-li">
        <div class="search-filter pr-fl"> 
			<div class="tabs-nav product-tab">
<ul>
 	<li class="all"><a  href="https://dev.ultimo.gg/shop/">All Products</a></li>
 	<li class="cl"><a  href="https://dev.ultimo.gg/product-category/clothing/">Clothing</a></li>
 	<li  class="ha"><a href="https://dev.ultimo.gg/product-category/hardware/">Hardware</a></li>
</ul>
</div>
		</div>
	
    </div>
     </div>
    </div>
<div class="pl-80 mt-80">
<?php

if ( woocommerce_product_loop() ) {

	/**
	 * Hook: woocommerce_before_shop_loop.
	 *
	 * @hooked woocommerce_output_all_notices - 10
	 * @hooked woocommerce_result_count - 20
	 * @hooked woocommerce_catalog_ordering - 30
	 */
	do_action( 'woocommerce_before_shop_loop' );

	woocommerce_product_loop_start();

	if ( wc_get_loop_prop( 'total' ) ) {
		while ( have_posts() ) {
			the_post();

			/**
			 * Hook: woocommerce_shop_loop.
			 */
			do_action( 'woocommerce_shop_loop' );

			wc_get_template_part( 'content', 'product' );
		}
	}

	woocommerce_product_loop_end();

	/**
	 * Hook: woocommerce_after_shop_loop.
	 *
	 * @hooked woocommerce_pagination - 10
	 */
	do_action( 'woocommerce_after_shop_loop' );
} else {
	/**
	 * Hook: woocommerce_no_products_found.
	 *
	 * @hooked wc_no_products_found - 10
	 */
	do_action( 'woocommerce_no_products_found' );
}

/**
 * Hook: woocommerce_after_main_content.
 *
 * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
 */
do_action( 'woocommerce_after_main_content' );

/**
 * Hook: woocommerce_sidebar.
 *
 * @hooked woocommerce_get_sidebar - 10
 */
do_action( 'woocommerce_sidebar' );
?>
</div>

	  <div class="bottom-banner mt-80">
          
	
			    <?php 
		global $post; 
		$post_id = wc_get_page_id( 'shop' );
		$image = get_field('shop_banner', $post_id );
		if( !empty($image) ): ?>
		<div class="tournament-hero ar" style="background-image: url(<?php echo $image['url']; ?>);">
		</div>
     	<?php endif; ?>
			
		</div>
		
<?php
get_footer( 'shop' );
?>