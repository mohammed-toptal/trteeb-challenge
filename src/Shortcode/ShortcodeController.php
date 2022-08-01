<?php

namespace Trteeb\Shortcode;

use Trteeb\Transient\TransientController;
use Trteeb\Shortcode\ShortcodeUI;

class ShortcodeController {
	public function __construct() {
	}

	public function shortcode( $atts ) {
		$shortcode_ui = new ShortcodeUI();
		$transient_controller = new TransientController();
		$data_json    = $transient_controller->get();
		$html         = '';
		if ( ! empty( $data_json ) ) {
			$data         = json_decode( $data_json, true );
			$title        = isset( $data['title'] ) ? esc_attr( $data['title'] ) : '';
			$columns      = isset( $data['data']['headers'] ) ? array_map( 'esc_attr', $data['data']['headers'] ) : array();
			$rows         = isset( $data['data']['rows'] ) ? $data['data']['rows'] : array();
			foreach ( $rows as $row_id => $row ) {
				$rows[ $row_id ] = array_map( 'esc_attr', $row );
			}
			$html = $shortcode_ui->render( $title, $columns, $rows );
		} else {
			$html = $shortcode_ui->render_error();
		}
		return $html;
	}
}
