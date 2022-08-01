<?php

namespace Trteeb\Shortcode;

class ShortcodeUI {
	public function __construct() {
	}

	public function render( $title, $columns, $rows ) {
		ob_start();
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
		$html = ob_get_clean();
		return $html;
	}

	public function render_error() {
		ob_start();
		?>
		<p class="trteeb-error"><?php _e('Unexpected error happend, please contact the website admin.', 'trteeb'); ?></p>
		<?php
		$html = ob_get_clean();
		return $html;
	}
}