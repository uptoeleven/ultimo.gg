<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

get_header();?>
	<?php 
    //$innerImage = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );
    $authorName = get_the_author();
    $shortTitle = get_field('sub_title');
    //echo($innerImage);
?>
		<div class="page-inner page-wrap">
			<div class="blog-details">
				<div class="contaner-wrp containers">
					<main class="inner-page details-page">
						<section class="head-section">
							<div class="content-wrasp">
							  <div class="skew-p">
								<p>News</p>
							  </div>
							</div>
							<h2 class="blog-title"><?php the_title(); ?></h2>
							<h2 class="blog-sub-title"><?php echo $shortTitle ?></h2>
							<div class="author-det sing-author">
							
								<?php
                        // Start the loop.
                        while ( have_posts() ) : the_post();?> 
								<span class="ulti-blog"> </span> 
								<span class="aut-name"> <?php echo get_the_author(); ?> </span> 
								<span class="po-date"> <?php echo get_the_date(); ?> </span>
									<?php endwhile;
                        ?>
								
							</div>
						</section>
					<section class="loop-section">
						<?php while ( have_posts() ) : the_post(); ?>
							<?php the_content(); ?>
								<?php endwhile; // end of the loop. ?>
						</section>
						 <section class="latest-blog">
                   <span class="tournament-head tr-headb">Latest News</span>
                   <?php echo do_shortcode( '[latest-list]' );?>
                        </section>
					</main>
				</div>
			</div>
		</div>
<?php get_footer(); ?>