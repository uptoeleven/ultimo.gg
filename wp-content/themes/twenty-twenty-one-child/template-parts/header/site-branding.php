<?php
/**
 * Displays header site branding
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

$blog_info    = get_bloginfo( 'name' );
$description  = get_bloginfo( 'description', 'display' );
$show_title   = ( true === get_theme_mod( 'display_title_and_tagline', true ) );
$header_class = $show_title ? 'site-title' : 'screen-reader-text';

?>

<?php if ( has_custom_logo() && $show_title ) : ?>
<div class="header-logo-icons">
	<div class="container">
		<div class="site-social-icons">
			<?php dynamic_sidebar( 'header-top-right-sm' ); ?>				
		</div>
	</div>
</div>
<?php endif; ?>
