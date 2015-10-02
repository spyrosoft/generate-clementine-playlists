var app_client_id = '00a584eac19a89b7591e31afc8b5e2df';

$( document ).ready(
	function()
	{
		$(document).foundation();
		$( '#user-search' ).select();
		$( '#user-search' ).click( get_user_tracks );
		
		SC.initialize({
			client_id: app_client_id
		});
	}
);

function get_user_tracks()
{
	var user_id = lookup_user_id();
}

function lookup_user_id()
{
	var user_search = $( 'user-search' ).val();
	
	SC.get(
		'/resolve',
		{
			url: 'https://soundcloud.com/' + user_search
		},
		look_up_tracks
	);
}

function look_up_tracks( soundcloud_user )
{
	if ( ! soundcloud_user.id )
	{
		alert( 'Lookup failed.' );
		return;
	}
	
	console.log( soundcloud_user );
}