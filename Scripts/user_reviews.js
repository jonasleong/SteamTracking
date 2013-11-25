
function UserReview_Rate( recommendationID, bRateUp, baseURL, callback )
{
	new Ajax.Request( baseURL + '/userreviews/rate/' + recommendationID,
		{
			method: 'POST',
			parameters: {
				'rateup' : bRateUp,
				'sessionid' : g_sessionID
			},
			onSuccess: function( transport )
			{
				var results = transport.responseJSON;
				if ( results.success == 1 )
				{
					callback( results );
				}
				else
				{
					ShowAlertDialog( 'Error', 'There was an error trying to process your request: ' + results.success );
				}
			}
		} );
}

function UserReview_Report( recommendationID, baseURL, callback )
{
	var dialog = ShowPromptWithTextAreaDialog( 'Report Review', '', null, null, 1000 );
	var explanation = $J('<div/>', { 'class': 'user_review_report_dialog_explanation' } );
	explanation.html( 'Please enter the reason why you are reporting this review for violating the Steam Terms of Service or Online Conduct Rules. This cannot be undone.' );

	var textArea = dialog.m_$Content.find( 'textarea' );
	textArea.addClass( "user_review_report_dialog_text_area" );
	textArea.parent().before( explanation );

	dialog.done( function( note ) {
		if ( !note )
		{
			return;
		}
		note = v_trim( note );
		if ( note.length < 1 )
		{
			return;
		}
		new Ajax.Request( baseURL + '/userreviews/report/' + recommendationID,
			{
				method: 'POST',
				parameters: {
					'reportnote' : note,
					'sessionid' : g_sessionID
				},
				onSuccess: function( transport )
				{
					var results = transport.responseJSON;
					if ( results.success == 1 )
					{
						callback( results );
					}
					else
					{
						ShowAlertDialog( 'Error', 'There was an error trying to process your request: ' + results.success );
					}
				}
			} );
	} );
}

function UserReview_ShowUpdateReviewDialog( recommendationID, existingText, baseURL )
{
	var dialog = ShowPromptWithTextAreaDialog( 'Update Your Review', existingText, null, null, 4096 );

	dialog.done( function( note ) {
		if ( !note )
		{
			return;
		}
		note = v_trim( note );
		if ( note.length < 1 )
		{
			return;
		}
		UserReview_Update_Text( recommendationID, note, baseURL, function( results ) { top.location.reload(); } );
	} );
}

function UserReview_Update( recommendationID, params, baseURL, callback )
{
	params['sessionid'] = g_sessionID;
	new Ajax.Request( baseURL + '/userreviews/update/' + recommendationID,
		{
			method: 'POST',
			parameters: params,
			onSuccess: function( transport )
			{
				var results = transport.responseJSON;
				if ( results.success == 1 )
				{
					if ( callback )
					{
						callback( results );
					}
				}
				else
				{
					ShowAlertDialog( 'Error', 'There was an error trying to process your request: ' + results.success );
				}
			}
		} );
}

function UserReview_Update_Visibility( recommendationID, is_public, baseURL, callback )
{
	UserReview_Update( recommendationID, { 'is_public' : is_public }, baseURL, callback );
}

function UserReview_Update_Language( recommendationID, language, baseURL, callback )
{
	UserReview_Update( recommendationID, { 'language' : language }, baseURL, callback );
}

function UserReview_Moderate( recommendationID, params, baseURL, callback )
{
	params['sessionid'] = g_sessionID;
	new Ajax.Request( baseURL + '/userreviews/moderate/' + recommendationID,
		{
			method: 'POST',
			parameters: params,
			onSuccess: function( transport )
			{
				var results = transport.responseJSON;
				if ( results.success == 1 )
				{
					if ( callback )
					{
						callback( results );
					}
				}
				else
				{
					ShowAlertDialog( 'Error', 'There was an error trying to process your request: ' + results.success );
				}
			}
		} );
}

function UserReview_ShowClearReportsDialog( recommendationID, baseURL, callback )
{
	var dialog = ShowConfirmDialog( 'Clear Reports',  'Are you sure you want to clear all reports? This cannot be undone!' );
	dialog.done( function() {
		UserReview_Moderate( recommendationID, { 'clear_reports' : 1 }, baseURL, callback);
	});
}

function UserReview_Moderate_SetBanStatus( recommendationID, force_hidden, baseURL, callback )
{
	UserReview_Moderate( recommendationID, { 'force_hidden' : force_hidden }, baseURL, callback );
}

function UserReview_Moderate_SetDeveloperFlag( recommendationID, flagged_by_developer, baseURL, callback )
{
	UserReview_Moderate( recommendationID, { 'flagged_by_developer' : flagged_by_developer }, baseURL, callback );
}