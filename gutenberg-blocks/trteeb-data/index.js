import classnames from 'classnames';
import block_icons from '../icons/index';
import './editor.scss';

const { registerBlockType }         =   wp.blocks;
const { __ }                        =   wp.i18n;
const { InspectorControls, 
		BlockControls,
		AlignmentToolbar,
		BlockAlignmentToolbar}      =   wp.editor;
const { PanelBody,
		PanelRow, 
		TextControl,
		SelectControl,
		ToggleControl }				=   wp.components;    

registerBlockType( 'trteeb/trteeb-data', {
	title:                              __( 'Trteeb Data', 'trteeb' ),
	description:                        __(
		'Display Trteeb data using Gutenberg block',
		'trteeb'
	),
	// common, formatting, layout, widgets, embed
	category:                           'common',
	icon:                               block_icons.trteeb_data,
	keywords: [
		__( 'Trteeb', 'trteeb' ),
		__( 'Data', 'trteeb' ),
		__( 'MiUsage', 'trteeb' )
	],
	attributes: {
		trteeb_id: {
			type:                       'text',
			default:                    ''
		},
		id_column: {
			type:                       'boolean',
			default:                    true
		},
		fname_column: {
			type:                       'boolean',
			default:                    true
		},
		lname_column: {
			type:                       'boolean',
			default:                    true
		},
		email_column: {
			type:                       'boolean',
			default:                    true
		},
		date_column: {
			type:                       'boolean',
			default:                    true
		},
	},
	edit: ( props ) => {
		const { className,
				attributes } = props;
		const { trteeb_id,
				id_column,
				fname_column,
				lname_column,
				email_column,
				date_column } = attributes;
		if ( trteeb_id.length <= 0 ) {
			var new_trteeb_id = Math.floor((Math.random() * 100000) + 1);
			props.setAttributes({ trteeb_id: `trteeb-table-${new_trteeb_id}` });
		}
		let columns_control = [];
		if ( id_column ) {
			columns_control.push(1);
		} else {
			columns_control.push(0);
		}
		if ( fname_column ) {
			columns_control.push(1);
		} else {
			columns_control.push(0);
		}
		if ( lname_column ) {
			columns_control.push(1);
		} else {
			columns_control.push(0);
		}
		if ( email_column ) {
			columns_control.push(1);
		} else {
			columns_control.push(0);
		}
		if ( date_column ) {
			columns_control.push(1);
		} else {
			columns_control.push(0);
		}
		return [
			<InspectorControls>
				<PanelBody title={ __( 'Columns', 'trteeb' ) }>
					<ToggleControl
						label={ __( "ID", "zestylemon" ) }
						checked={ id_column }
						onChange={ ( new_val ) => {
							props.setAttributes({ id_column: !id_column })
						}} />
					<ToggleControl
						label={ __( "First name", "zestylemon" ) }
						checked={ fname_column }
						onChange={ ( new_val ) => {
							props.setAttributes({ fname_column: !fname_column })
						}} />
					<ToggleControl
						label={ __( "Last name", "zestylemon" ) }
						checked={ lname_column }
						onChange={ ( new_val ) => {
							props.setAttributes({ lname_column: !lname_column })
						}} />
					<ToggleControl
						label={ __( "Email", "zestylemon" ) }
						checked={ email_column }
						onChange={ ( new_val ) => {
							props.setAttributes({ email_column: !email_column })
						}} />
					<ToggleControl
						label={ __( "Date", "zestylemon" ) }
						checked={ date_column }
						onChange={ ( new_val ) => {
							props.setAttributes({ date_column: !date_column })
						}} />
				</PanelBody>
			</InspectorControls>,
			<div className={ classnames(
				className,
				"trteeb-block-container",
				"trteeb-block-editor",
				) }
				id={ trteeb_id }
				data-columns-control={columns_control}>
					Trteeb data table will be loaded on frontend.
			</div>
		];
	},
	save: ( { attributes } ) => {
		const { trteeb_id,
				id_column,
				fname_column,
				lname_column,
				email_column,
				date_column } = attributes;
		let columns_control = [];
		if ( id_column ) {
			columns_control.push(1);
		} else {
			columns_control.push(0);
		}
		if ( fname_column ) {
			columns_control.push(1);
		} else {
			columns_control.push(0);
		}
		if ( lname_column ) {
			columns_control.push(1);
		} else {
			columns_control.push(0);
		}
		if ( email_column ) {
			columns_control.push(1);
		} else {
			columns_control.push(0);
		}
		if ( date_column ) {
			columns_control.push(1);
		} else {
			columns_control.push(0);
		}
		columns_control = JSON.stringify(columns_control);
		return (
			<div className="trteeb-block-container"
				id={trteeb_id}
				data-columns-control={columns_control}>
			</div>
		)
	}
});