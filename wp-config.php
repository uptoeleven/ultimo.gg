<?php
define( 'WP_CACHE', false /* Modified by NitroPack */ );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wadcoaj3_ultimoggg' );

/** MySQL database username */
define( 'DB_USER', 'wadcoaj3_ultimoggg' );

/** MySQL database password */
define( 'DB_PASSWORD', 'ZQSCxAsx1R$1' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'm;Lmtct!wZX0?2w5;)hjhdeL,[z%Ze|0j?fKrS8y ~T4ynJQ2>(iA>OBa!$,3 Q`' );
define( 'SECURE_AUTH_KEY',  ',fW4b`S1pi*~)_q_95&*e-i=!/l~eS]_<AQvY/.rqcdh_^WlM>v,9_7%+h3d5Oyk' );
define( 'LOGGED_IN_KEY',    'P(5OYs;w&[`i-:@6F-S#0GE(+pt&t+X^2?WLJ?,i_d<>I*Hwbc=>og._w?ZjC52J' );
define( 'NONCE_KEY',        '|*&lyb;+iE.eL~A=vQ*>z^[0oDyfvh2YXm-$q/(D.-xZ?JSx]*0]aj|#ao75ZJ6z' );
define( 'AUTH_SALT',        '4*DkLbcDm_RJ^Wji8CksLWW=/a+9vC8tJ!q,oy;*19F3RT)c>je*:&hzZqNWKlp#' );
define( 'SECURE_AUTH_SALT', '&]Jrr 6#;LPMF{EjAxJtEIY~`+nV$r416dxXDB&^XQLO?v3~V4SBstJKp6xywIr-' );
define( 'LOGGED_IN_SALT',   'yl67b*qK;0qD$-fEXy*?)`Vg3MXm/xb>C! /g@*|nDC~6coNRn67!xni^QY%lH!G' );
define( 'NONCE_SALT',       'M~[Etw)&^yiESv/G3y]v;#{J``|9;v)ph<CWt7hcp{EDnLv<1RTpo+Q-GGSmw?{!' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
