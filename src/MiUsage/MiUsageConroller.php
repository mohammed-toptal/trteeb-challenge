<?php

namespace Trteeb\MiUsage;

class MiUsageConroller {
	private $api_link = 'https://miusage.com/v1/challenge/1/';

	public function __construct() {
	}

	public function get_data() {
		$response = wp_remote_get( $this->api_link );
		if ( is_array( $response ) && ! is_wp_error( $response ) ) {
			$body = $response['body'];
			return $body;
		}
		return false;
	}
}