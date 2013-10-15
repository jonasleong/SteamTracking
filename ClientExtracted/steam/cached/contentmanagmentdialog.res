"steam/cached/contentmanagmentdialog.res"
{
	"contentmanagmentdialog"
	{
		"ControlName"		"CContentManagmentDialog"
		"fieldName"		"ContentManagmentDialog"
		"xpos"		"794"
		"ypos"		"447"
		"wide"		"512"
		"tall"		"200"
		"AutoResize"		"0"
		"PinCorner"		"0"
		"visible"		"1"
		"enabled"		"1"
		"tabPosition"		"0"
		"paintbackground"		"1"
		"settitlebarvisible"		"1"
		"title"		"#SteamUI_ContentMgr_Title"
	}
	"Label1"
	{
		"ControlName"		"Label"
		"fieldName"		"Label1"
		"xpos"		"10"
		"ypos"		"36"
		"wide"		"645"
		"tall"		"30"
		"autoResize"		"0"
		"pinCorner"		"0"
		"visible"		"1"
		"enabled"		"1"
		"tabPosition"		"0"
		"paintbackground"		"1"
		"labelText"		"#SteamUI_ContentMgr_Text"
		"textAlignment"		"north-west"
		"dulltext"		"0"
		"brighttext"		"0"
		"wrap"		"1"
	}
	"InstallFoldersList"
	{
		"ControlName"		"ListPanel"
		"fieldName"		"InstallFoldersList"
		"xpos"		"10"
		"ypos"		"64"
		"wide"		"492"
		"tall"		"120"
		"AutoResize"		"3"
		"PinCorner"		"0"
		"visible"		"1"
		"enabled"		"1"
		"tabPosition"		"0"
		"paintbackground"		"1"
	}
	
	"AddFolderButton"
	{
		"ControlName"		"Button"
		"fieldName"		"AddFolderButton"
		"labelText"		"#SteamUI_ContentMgr_AddInstallFolder"
		"xpos"		"10"
		"ypos"		"200"
		"wide"		"160"
		"tall"		"24"
		"AutoResize"		"0"
		"PinCorner"		"2"
		"visible"		"1"
		"enabled"		"1"
		"tabPosition"		"0"
		"paintbackground"		"1"
		"textAlignment"		"west"
		"wrap"		"0"
		"Default"		"0"
		"command" "AddInstallFolder"
	}
	
	"RemoveFolderButton"
	{
		"ControlName"		"Button"
		"fieldName"		"RemoveFolderButton"
		"labelText"		"#SteamUI_ContentMgr_RemoveInstallFolder"
		"xpos"		"180"
		"ypos"		"200"
		"wide"		"160"
		"tall"		"24"
		"AutoResize"		"0"
		"PinCorner"		"2"
		"visible"		"1"
		"enabled"		"1"
		"tabPosition"		"0"
		"paintbackground"		"1"
		"textAlignment"		"west"
		"wrap"		"0"
		"Default"		"0"
		"command" "RemoveInstallFolder"
	}
	
	
	"CloseButton"
	{
		"ControlName"		"Button"
		"fieldName"		"CloseButton"
		"xpos"		"408"
		"ypos"		"200"
		"wide"		"92"
		"tall"		"24"
		"AutoResize"		"0"
		"PinCorner"		"3"
		"visible"		"1"
		"enabled"		"1"
		"tabPosition"		"0"
		"paintbackground"		"1"
		"labelText"		"#vgui_close"
		"textAlignment"		"west"
		"wrap"		"0"
		"Command"		"Close"
		"Default"		"0"
	}
}
