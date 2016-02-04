/**
 * Generated from the config editor is samples
 */
CKEDITOR.editorConfig = function( config ) {
	config.toolbar = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] , items: [ 'Source' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] , items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
		{ name: 'editing', groups: [ 'Find', 'Replace', 'selection', 'spellchecker' ] , items: [ 'Scayt' ] },
		{ name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
		{ name: 'insert', items: [ 'Image', 'Table', 'HorizontalRule', 'SpecialChar' ] },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] , items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
		{ name: 'align', items: [ 'JustifyLeft', 'JustifyCenter', 'JustifyBlock', 'JustifyRight' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] , items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote' ] },
		'/',
		{ name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize', 'TextColor', 'BGColor' ] },
		{ name: 'tools', items: [ 'Maximize' ] },
		{ name: 'others', items: [ '-' ] },
		{ name: 'about', items: [ 'About' ] }
	];
};

