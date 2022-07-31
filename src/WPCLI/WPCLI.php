<?php

namespace Trteeb\WPCLI;

use WP_CLI;
use Trteeb\Transient\TransientController;

class WPCLI {
	public function force_refresh() {
		$transient_controller = new TransientController();
		$transient_controller->delete();
		WP_CLI::line( __('API data forced to refresh in the next API request.', 'trteeb') );
	}
}
