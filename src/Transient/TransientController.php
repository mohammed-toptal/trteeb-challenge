<?php

namespace Trteeb\Transient;

use Trteeb\MiUsage\MiUsageConroller;

class TransientController {
	private $transient_key = 'trteeb_challenge_data';
	private $miusage;

	public function __construct() {
		$this->miusage = new MiUsageConroller();
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
		$data = $this->miusage->get_data();
		if ( ! empty( $data ) ) {
			$this->set( $data );
		}
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

	public function delete() {
		delete_transient( $this->transient_key );
	}
}