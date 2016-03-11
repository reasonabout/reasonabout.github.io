function isFormTag(tagName) 
{
	tagName = tagName.toUpperCase();
	
	if (
		tagName == "INPUT" ||
		tagName == "TEXTAREA" ||
		tagName == "SELECT" ||
		tagName == "OPTION" ||
		tagName == "BUTTON") {
		return true;
	}
	return false;
}

function checkKey(e) 
{
	e = e || event || window.event;
	target = e.target || e.srcElement;
	
	if (!isFormTag(target.tagName) && !e.altKey)
	{
		if (e.keyCode == '37' && left != '') {
			document.location = left;
		}
		else if (e.keyCode == '39' && right != '') {
			document.location = right;
		}
		else if ((e.keyCode == '27' || e.keyCode == '96') && esc != '') {
			document.location = esc;
		}
	}
}