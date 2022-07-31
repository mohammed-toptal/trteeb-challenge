<?php

namespace Trteeb\Transient;

class TransientController {
	private $transient_key = 'trteeb_challenge_data';

	public function __construct() {
	}

	private function is_transient_valid() {
		$transient = get_transient( $this->transient_key );
		if ( ! empty( $transient ) ) {
			return true;
		}
		return false;
	}

	private function refresh_transient() {
		// call the API and set the transient value
		$this->set( 'Sample data' );
	}

	public function get() {
		if ( ! $this->is_transient_valid() ) {
			$this->refresh_transient();
		}
		return get_transient( $this->transient_key );
	}

	public function set( $data ) {
		set_transient( $this->transient_key, $data, HOUR_IN_SECONDS );
	}
}