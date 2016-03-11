
mw.hook('wikipage.content').add(function($content){'use strict';if(facebookTagsOnPage()){$.loadFacebookSDK().done(renderFacebookTags);}
function facebookTagsOnPage(){var numOfFacebookTags=$content.find('[data-type="xfbml-tag"], [class^="fb-"]').length;return numOfFacebookTags>0;}
function renderFacebookTags(){FB.XFBML.parse($content[0]);}});;