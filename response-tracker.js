
//jQuery.noConflict();

function setCommentStatus(commentid, status)
{
    var data = { action: 'tracker_comment_status', id: commentid, status: status };
    jQuery.post(ajaxurl, data,
        function(response)
        {
            if( response != "OK" )
            {
                alert(response);
                return(false);
            }

            jQuery('#comment-'+commentid).find('.comment').
                find('.trackercurrentselected').removeClass('trackercurrentselected');
            jQuery('#comment-'+commentid).find('.comment').
                find('.trackeraction'+status).addClass('trackercurrentselected');

            colourComment(commentid, status);
        }
    );

    return(false);
}

function colourComment(commentid, status)
{
    jQuery('#comment-'+commentid).find('.comment').removeClass('trackercommentresponded');
    jQuery('#comment-'+commentid).find('.comment').removeClass('trackercommenttodo');
    jQuery('#comment-'+commentid).find('.comment').removeClass('trackercommentignore');
    jQuery('#comment-'+commentid).find('.comment').removeClass('trackercommentreplied');

    jQuery('#comment-'+commentid).find('.comment').addClass('trackercomment' + status);
}

