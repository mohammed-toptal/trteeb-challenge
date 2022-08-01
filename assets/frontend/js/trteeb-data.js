jQuery(document).ready(function ($) {
	var data = {
		'action': 'trteeb_data'
	};
	$.post(
		ajax_object.ajax_url,
		data,
		function( response ) {
			if ( response.success ) {
				let data = JSON.parse( response.data );
				let title = $('<h2></h2>');
				title.text( data.title );
				let table = $('<table></table>');
				let thead = $('<thead></thead>');
				let tbody = $('<tbody></tbody>');
				let tr = $('<tr></tr>');
				$.each( data.data.headers, function ( header_index, header_text ) {
					let th = $('<th></th>');
					th.text( header_text );
					tr.append( th );
				} );
				thead.append( tr );
				table.append( thead );
				$.each( data.data.rows, function ( row_index, row ) {
					let tr = $('<tr></tr>');
					$.each( row, function ( cell_index, cell_text ) {
						let td = $('<td></td>');
						td.text( cell_text );
						tr.append( td );
					} );
					tbody.append( tr );
				} );
				table.append( tbody );
				$.each( $('.trteeb-block-container'), function ( table_container_index, table_container ) {
					let columns_control = $( table_container ).data('columns-control');
					console.log( columns_control );
					table_clone = table.clone();
					for ( let index = columns_control.length - 1; index >= 0; index-- ) {
						if ( columns_control[ index ] == 0 ) {
							$('th:nth-child(' + ( index + 1 ) + '), td:nth-child(' + ( index + 1 ) + ')', table_clone).remove();
						}
					}
					$( table_container ).append( title.clone() );
					$( table_container ).append( table_clone );
				} );
			} else {
				let message = $('<p></h2>');
				message.addClass('trteeb-error');
				message.text( response.data.message );
				$.each( $('.trteeb-block-container'), function ( table_container_index, table_container ) {
					$( table_container ).append( message );
				} );
			}
		}
	);
});

function load_trteeb_table( trteeb_table_id ) {
	console.log( trteeb_table_id );
}