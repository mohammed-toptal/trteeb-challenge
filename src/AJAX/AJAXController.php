<?php

namespace Trteeb\AJAX;

use Trteeb\Transient\TransientController;

class AJAXController {
	public function __construct() {
	}

	public function ajax_handler() {
		$transient_controller = new TransientController();
		$data_json = $transient_controller->get();
		if ( ! empty( $data_json ) ) {
			wp_send_json_success( $data_json );
		} else {
			$error_message = array(
				'message' => __('Unexpected error happend, please contact the website admin.', 'trteeb')
			);
			wp_send_json_error( $error_message );
		}
	}
}