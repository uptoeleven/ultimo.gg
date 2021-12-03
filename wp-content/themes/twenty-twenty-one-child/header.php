<?php
/**
 * The header.
 *
 * This is the template that displays all of the <head> section and everything up until main.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

?>
<!doctype html>
<html <?php language_attributes(); ?> <?php twentytwentyone_the_html_classes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5RNTVM8');</script>
<!-- End Google Tag Manager -->
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
	<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5RNTVM8"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<div id="page" class="site">
    <div class="">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'twentytwentyone' ); ?></a>
	<div class="header-container">
		<div class="nav-toggle-button">
			<div id="header-logo">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
				   <img src="<?php echo esc_url( home_url( '/' ) ); ?>/wp-content/uploads/2021/10/ultimo-mobile.png" alt="Logo" width="HERE" height="HERE" />
					
				</a>
			</div>
			<div class="mobile-cart">
				<?php echo do_shortcode('[woocommerce_cart_icon]'); ?>
			</div>
			
			<div class="to-icon">
<!-- 				<div class="open-icon">
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/toggle-open.png">
				</div> -->
				<div class="open-icon">
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/svg/menu-sv.svg"/>
				</div>
<!-- 				<div class="close-icon">
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/toggle-close.png">
				</div> -->
				<div class="close-icon">
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/images/svg/cross-svg.svg">
				</div>
		   </div>
			<div class="mobile-menu">
			<?php wp_nav_menu( array( 'theme_location' => 'mobile-menu' ) ); ?>
				<div class="cart-container-mobile">
			<?php echo do_shortcode('[woocommerce_cart_icon]'); ?>
			<div class="bas-count">
				 BASKET <span class="counter" id="cart-count"><?php
        $cart_count = WC()->cart->get_cart_contents_count();
        echo sprintf ( _n( '%d', '%d', $cart_count ), $cart_count );
        ?></span>
			</div>
		</div>
			</div>
		</div>
		
		<?php get_template_part( 'template-parts/header/site-header' ); ?>
		<div class="cart-container">
			<?php echo do_shortcode('[woocommerce_cart_icon]'); ?>
			<div class="bas-count">
				 BASKET <span class="counter" id="cart-count"><?php
        $cart_count = WC()->cart->get_cart_contents_count();
        echo sprintf ( _n( '%d', '%d', $cart_count ), $cart_count );
        ?></span>
			</div>
		</div>
		
		
	</div>

	<div id="content" class="site-content">
		<div id="primary" class="content-area">
			<main id="main" class="site-main1" role="main">
