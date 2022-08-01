<?php
/*
Plugin Name: Trteeb challenge
Plugin URI: #
Description: Trteeb challenge
Version: 1.0.0
Author: Mohammed Al-Madhoun
Author URI: #
Text Domain: trteeb
*/

if( ! defined('ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

define( 'TRTEEB__PLUGIN_MAIN_FILE', __FILE__ );
define( 'TRTEEB__PLUGIN_DIR', plugin_dir_path( TRTEEB__PLUGIN_MAIN_FILE ) );

require_once( TRTEEB__PLUGIN_DIR . 'vendor/autoload.php' );

use Trteeb\Shortcode\ShortcodeController;
use Trteeb\AJAX\AJAXController;
use Trteeb\Gutenberg\GutenbergController;
use Trteeb\AdminPage\AdminPageController;

/* -----------------
 *      CLASS
 * ----------------- */
class TrteebChallenge {
    /**
    * Plugin variables
    */
    // A reference to an instance of this class.
    private static $instance;

    /**
    * Plugin functions
    */

	/**
	* Returns an instance of this class. 
    *
    * @since   1.0
    * @access  protected
    *
    * @return TrteebChallenge object     an instance of this class.
	*/
	public static function get_instance() {
		if ( null == self::$instance ) {
			self::$instance = new TrteebChallenge();
		} 
		return self::$instance;
	} 

    /**
    * Get plugin version.
    *
    * @since   1.0
    * @access  protected
    *
    * @return float     plugin version.
    */
    public function get_version() {
        $data = get_file_data( __FILE__ , array( 'Version' => 'Version' ) );
        if ( ! empty( $data['Version'] ) ) {
            return $data['Version'];
        }
        if ( ! function_exists('get_plugin_data') ) {
            require_once( ABSPATH . 'wp-admin/includes/plugin.php' );
        }
        $plugin_data = get_plugin_data( __FILE__ );
        if ( ! empty( $plugin_data['Version'] ) ) {
            return $plugin_data['Version'];
        }
        return false;
    }

	/**
	* Initializes the plugin by setting filters and administration functions.
    *
    * @since   1.0
    * @access  protected
	*/
	private function __construct() {
        define( 'TRTEEB__PLUGIN_VER', $this->get_version() );
        $shortcode_controller  = new ShortcodeController();
        $ajax_controller       = new AJAXController();
        $gutenberg_controller  = new GutenbergController();
        $admin_page_controller = new AdminPageController();
        // register_activation_hook( __FILE__,   array( __CLASS__, 'activator' ) );
        // register_deactivation_hook( __FILE__, array( __CLASS__, 'deactivator' ) );
        // register_uninstall_hook( __FILE__,    array( __CLASS__, 'uninstaller' ) );
        // add_action( 'admin_enqueue_scripts',  array( $this, 'enqueue_admin_styles' ) );
        // add_action( 'admin_enqueue_scripts',  array( $this, 'enqueue_admin_script' ) );

        add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_styles' ) );
        add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
        add_action( 'plugins_loaded', array( $this, 'load_textdomain' ) );
        add_action( 'cli_init', array( $this, 'wp_cli_register_commands' ) );
        add_shortcode( 'trteeb_data', array($shortcode_controller, 'shortcode') );
        add_action( 'wp_ajax_trteeb_data', array($ajax_controller, 'ajax_handler') );
        add_action( 'wp_ajax_nopriv_trteeb_data', array($ajax_controller, 'ajax_handler') );

        add_action( 'enqueue_block_editor_assets', array( $gutenberg_controller, 'enqueue_block_editor_assets' ) );
        add_action( 'enqueue_block_assets', array( $gutenberg_controller, 'enqueue_block_assets' ) );
        add_action( 'init', array( $gutenberg_controller, 'register_trteeb_block' ) );

        add_action( 'admin_menu', array( $admin_page_controller, 'add_trteeb_table_admin_menu_page' ) );
        add_action( 'admin_init', array( $admin_page_controller, 'load_trteeb_table_admin_page' ) );
    }

    /**
    * Add plugin stylesheets to frontend.
    *
    * @since   1.0
    * @access  protected
    */
    public function enqueue_styles() {
        wp_enqueue_style( 'trteeb-frontend-style', plugins_url( 'assets/frontend/css/style.css', __FILE__ ), array(), $this->get_version(), 'screen,projection' );
    }

    /**
    * Add plugin javascripts to frontend.
    *
    * @since   1.0
    * @access  protected
    */
    public function enqueue_scripts() {
        wp_enqueue_script( 'trteeb-frontend-script', plugins_url( 'assets/frontend/js/scripts.js', __FILE__ ), array( 'jquery' ), $this->get_version(), true );
    }

	/**
	* Loading Text Domain
	*
	* @since   1.0
	* @access  protected
	*/
	public function load_textdomain() {
		load_plugin_textdomain( 'trteeb', FALSE, basename( dirname( __FILE__ ) ) . '/languages/' );
	}

    public function wp_cli_register_commands() {
        WP_CLI::add_command( 'trteeb', '\\Trteeb\WPCLI\WPCLI' );
    }
}

$TrteebChallenge = TrteebChallenge::get_instance();