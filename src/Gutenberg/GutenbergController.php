<?php

namespace Trteeb\Gutenberg;

class GutenbergController {
	public function __construct() {
	}

	public function enqueue_block_editor_assets() {
		wp_enqueue_script(
			'trteeb-block-editor-script',
			plugins_url( 'assets/admin/trteeb-editor-blocks.js', TRTEEB__PLUGIN_MAIN_FILE ),
			[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor', 'wp-api' ],
			TRTEEB__PLUGIN_VER );
		wp_localize_script(
			'trteeb-block-editor-script',
			'ajax_object',
			array(
				'ajax_url' => admin_url( 'admin-ajax.php' )
			)
		);
	}

	public function enqueue_block_assets() {
		// wp_enqueue_style(
		//     'trteeb-block-editor-style',
		//     plugins_url( 'assets/admin/trteeb-editor-blocks.css', TRTEEB__PLUGIN_MAIN_FILE ) );
	}

	public function register_trteeb_block() {
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}
		wp_register_script(
			'trteeb-data-block-script',
			plugins_url( 'assets/frontend/js/trteeb-data.js', TRTEEB__PLUGIN_MAIN_FILE ),
			array( 'jquery' ),
			TRTEEB__PLUGIN_VER,
			true
		);
		wp_register_style(
			'trteeb-data-block-style',
			plugins_url( 'assets/frontend/css/trteeb-data.css', TRTEEB__PLUGIN_MAIN_FILE ),
			array(),
			TRTEEB__PLUGIN_VER,
			'screen,projection'
		);
		wp_localize_script(
			'trteeb-data-block-script',
			'ajax_object',
			array(
				'ajax_url' => admin_url( 'admin-ajax.php' )
			)
		);
		if ( ! is_admin() ) {
			register_block_type( 'trteeb/trteeb-data', array(
				'script' => 'trteeb-data-block-script',
				'style'  => 'trteeb-data-block-style',
			) );
		}
	}
}
