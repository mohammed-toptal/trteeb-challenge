<?php

namespace Trteeb\AdminPage;

use Trteeb\Transient\TransientController;
use Trteeb\AdminPage\AdminPageUI;

class AdminPageController {
	public function __construct() {
	}

    public function add_trteeb_table_admin_menu_page() {
        add_menu_page( 
            __( 'Trteeb data table', 'trteeb' ),
            __( 'Trteeb data table', 'trteeb' ),
            'manage_options',
            'trteeb-table-admin-page',
            array( $this, 'load_trteeb_table_admin_page' ),
            plugins_url( 'myplugin/images/icon.png' ),
            6
        ); 
    }

    public function load_trteeb_table_admin_page() {
        if ( ! ( isset( $_GET['page'] ) && 'trteeb-table-admin-page' === $_GET['page'] ) ) {
            return;
        }
		$admin_page_ui = new AdminPageUI();
		$transient_controller = new TransientController();
		$data_json = $transient_controller->get();
		$admin_page_ui->load_trteeb_table_admin_page_header();
		if ( ! empty( $data_json ) ) {
			$data         = json_decode( $data_json, true );
			$title        = isset( $data['title'] ) ? esc_attr( $data['title'] ) : '';
			$columns      = isset( $data['data']['headers'] ) ? array_map( 'esc_attr', $data['data']['headers'] ) : array();
			$rows         = isset( $data['data']['rows'] ) ? $data['data']['rows'] : array();
			foreach ( $rows as $row_id => $row ) {
				$rows[ $row_id ] = array_map( 'esc_attr', $row );
			}
			$admin_page_ui->load_trteeb_table_admin_page_content( $title, $columns, $rows );
		} else {
			$admin_page_ui->load_trteeb_table_admin_page_content_error();
		}
		$admin_page_ui->load_trteeb_table_admin_page_footer();
        exit;
    }
}