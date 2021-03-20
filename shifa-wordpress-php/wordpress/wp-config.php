<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
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
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ':B~zQ$}zV.H6*AeF^/bC:5Mql~t+=-{R9o/}8i(;iy=q)*d1l)Q9W/.CEv(r&^c9' );
define( 'SECURE_AUTH_KEY',  'I8<i.8=_p@6$~1 [iL;,oCoJqj,m,h]Yr[4X{tf{~hWv;npP_4yU-pxpnzQUsH-q' );
define( 'LOGGED_IN_KEY',    '*P,M2%6cb?q#EnOV#783aS:>k~ouhMl/b; =zb.H:x#dfx/hM*kkhZL$f(o&$q.l' );
define( 'NONCE_KEY',        'RVz=,M^UPqO5rw$-VQx_|Qz;nTIdJ<X^N&lZ!>0eC?p0*-wlj8Q-5QMP3Big1rE@' );
define( 'AUTH_SALT',        ')=C)?5rA:=tpZf9?1H-(0 y:QthYFVaMi7#4Vm2.-?$CH[r$QD_SUgXmH<ht.*c:' );
define( 'SECURE_AUTH_SALT', 'U*Y@RxpI.#myH[hXM*5`u@[9Aty&`]VV2VHskfdR/CX8d2xgS}YDSd^J*t@6Y-yE' );
define( 'LOGGED_IN_SALT',   'P@LI_mO.^q;y=>L<_;kImt }pd+MQ`7C~g4k2< ]{jx88WV*d%{EJ/T*CB1;U}ao' );
define( 'NONCE_SALT',       'jkF4w2?cf0Au0~Peha:w-x4.X=t`A+cxpaLIlgl;/QrA;Ug?.N-qq<xzX5pAupRu' );

/**#@-*/

/**
 * WordPress Database Table prefix.
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

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
