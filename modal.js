(function(){
	var modal = {};
	window.modal = modal;
	modal.getHtml = function() {
		var html = "";
		html = '<div class="j-modal-body">'+
			'<div class="j-modal-header">'+
				'<a class="j-modal-close" href="#" onclick="modal.close()">X</a>'+
			'</div>'+
			'<div class="j-modal-content">'+
				'模态框内容'+
			'</div>'+
			'<div class="j-modal-footer">'+
				'<button class="j-modal-btn" onclick="modal.close()">close</button>'+
			'</div>'+
		'</div>';
		return html;
	}
	modal.init = function() {
		var html = modal.getHtml();
		var $modal = document.createElement('div');
		$modal.classList.add('j-modal');
		$modal.innerHTML = html;
		document.body.appendChild($modal);
	}

	modal.close = function(){
		var $modal = document.querySelector('.j-modal');
		document.body.removeChild($modal);
	}
 
})()