<?php

namespace Trteeb\AdminPage;

class AdminPageUI {
	public function __construct() {
	}

	public function load_trteeb_table_admin_page_header() {
		?>
		<!DOCTYPE html>
		<html <?php language_attributes(); ?>>
		<head>
			<meta name="viewport" content="width=device-width"/>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
			<title><?php esc_html_e( 'Trteeb data table', 'trteeb' ); ?></title>
			<?php do_action( 'admin_print_styles' ); ?>
			<?php do_action( 'admin_print_scripts' ); ?>
			<?php do_action( 'admin_head' ); ?>
			<style type="text/css">
				.trteeb-date-table {
					margin: 0;
					padding: 0;
				}
				.trteeb-date-table-header {
					text-align: center;
					border-top: 4px solid #342781;
				}
				.trteeb-date-table-header h1 {
					margin-bottom: 0;
					margin-top: 100px;
				}
				.trteeb-shortcode-container {
					width: 850px;
					margin: 0 auto;
				}
				.trteeb-shortcode-container h2 {
					text-align: center;
				}
				.trteeb-shortcode-container table {
					width: 100%;
					text-align: left;
				}
				.trteeb-back-to-dashboard {
					position: fixed;
					top: 8px;
					left: 8px;
					text-decoration: none;
					color: #342780;
				}
			</style>
		</head>
		<body class="trteeb-date-table">
			<header class="trteeb-date-table-header">
				<h1>
					<?php esc_html_e( 'Trteeb data table', 'trteeb' ); ?>
				</h1>
				<div class="trteeb-date-table-logo">
					<img src="<?php echo plugins_url( 'assets/admin/images/trteeb-logo.jpg', TRTEEB__PLUGIN_MAIN_FILE ); ?>" alt="<?php esc_attr_e( 'Trteeb data table', 'trteeb' ); ?>">
				</div>
			</header>
			<a href="<?php echo admin_url('/'); ?>" class="trteeb-back-to-dashboard"><?php esc_html_e( 'Back to WP Dashboard', 'trteeb' ); ?></a>
		<?php
	}

	public function load_trteeb_table_admin_page_content( $title, $columns, $rows ) {
		?>
		<div class="trteeb-shortcode-container">
			<h2><?php echo esc_attr( $title ); ?></h2>
			<table>
				<thead>
					<tr>
						<?php
							foreach ( $columns as $column ) {
								echo '<th>' . esc_attr( $column ) . '</th>';
							}
						?>
					</tr>
				</thead>
				<tbody>
					<?php
						foreach ( $rows as $row ) {
							echo '<tr>';
							foreach ( $row as $cell ) {
								echo '<td>' . esc_attr( $cell ) . '</td>';
							}
							echo '</tr>';
						}
					?>
				</tbody>
			</table>
		</div>
		<?php
	}

	public function load_trteeb_table_admin_page_content_error() {
		?>
		<p class="trteeb-error"><?php _e('Unexpected error happend, please contact the website admin.', 'trteeb'); ?></p>
		<?php
	}

	public function load_trteeb_table_admin_page_footer() {
		?>
		</body>
		</html>
		<?php
	}
}