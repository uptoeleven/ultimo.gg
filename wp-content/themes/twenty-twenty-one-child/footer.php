<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

?>
			</main><!-- #main -->
		</div><!-- #primary -->
	</div><!-- #content -->

	<?php get_template_part( 'template-parts/footer/footer-widgets' ); ?>
	<!-- <div class="newsletter-section">
		<div class="container">
			<div class="row">
				<div class="col-md-6 col-sm-12 newsletter-text">
					<h3>Subscribe to <span>Our</span> <span class="blue">Newsletter</span></h3>
				</div>
				<div class="col-md-6 col-sm-12">
					<?php //echo do_shortcode('[contact-form-7 id="277" title="Newsletter"]'); ?>
				</div>
			</div>
		</div>
	</div> -->
	<footer id="colophon" class="site-footer" role="contentinfo">

		<?php if ( has_nav_menu( 'footer' ) ) : ?>
			<nav aria-label="<?php esc_attr_e( 'Secondary menu', 'twentytwentyone' ); ?>" class="footer-navigation">
				<ul class="footer-navigation-wrapper">
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'footer',
							'items_wrap'     => '%3$s',
							'container'      => false,
							'depth'          => 1,
							'link_before'    => '<span>',
							'link_after'     => '</span>',
							'fallback_cb'    => false,
						)
					);
					?>
				</ul><!-- .footer-navigation-wrapper -->
			</nav><!-- .footer-navigation -->
		<?php endif; ?>
		<div class="site-info" style="display: none;">
			<div class="site-name">
				<?php if ( has_custom_logo() ) : ?>
					<div class="site-logo"><?php the_custom_logo(); ?></div>
				<?php else : ?>
					<?php if ( get_bloginfo( 'name' ) && get_theme_mod( 'display_title_and_tagline', true ) ) : ?>
						<?php if ( is_front_page() && ! is_paged() ) : ?>
							<?php bloginfo( 'name' ); ?>
						<?php else : ?>
							<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php bloginfo( 'name' ); ?></a>
						<?php endif; ?>
					<?php endif; ?>
				<?php endif; ?>
			</div><!-- .site-name -->
			<div class="powered-by">
				<?php
				printf(
					/* translators: %s: WordPress. */
					esc_html__( 'Proudly powered by %s.', 'twentytwentyone' ),
					'<a href="' . esc_url( __( 'https://wordpress.org/', 'twentytwentyone' ) ) . '">WordPress</a>'
				);
				?>
			</div><!-- .powered-by -->

		</div><!-- .site-info -->
	</footer><!-- #colophon -->
<div class="copyright-areas">
	<div class="copyright-area">
		<div class="copy-inner">
			<div class="copy-left">
				<?php if ( is_active_sidebar( 'footer-logo' ) ) : //check the sidebar if used.
					dynamic_sidebar( 'footer-logo' );  // show the sidebar.
					endif;
				?>
				<p>&copy; <?php echo date("Y"); ?>, EU - Ultimo GG. All Rights Reserved.</p>
			</div>
			<div class="copy-right">
				<?php if ( is_active_sidebar( 'footer-spcial-icon' ) ) : //check the sidebar if used.
				dynamic_sidebar( 'footer-spcial-icon' );  // show the sidebar.
				endif;
				?>
			</div>
		</div>
	</div>
</div> 
</div> <!-- .container -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
