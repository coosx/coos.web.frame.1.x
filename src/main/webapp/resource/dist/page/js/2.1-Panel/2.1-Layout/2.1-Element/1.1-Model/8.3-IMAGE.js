(function(window, jQuery) {
	function ThisElement(config) {
		co.page.panel.layout.element.Element.call(this, config);
	}
	(function() {
		var Super = function() {
		};
		Super.prototype = co.page.panel.layout.element.Element.prototype;
		ThisElement.prototype = new Super();
	})();

	ThisElement.prototype.initInput = function($input) {
		if ($input[0].tagName == 'INPUT') {
			$input.addClass('input-rule-file-image');
			$input.attr('file-count', '1');
		}
	};

	ThisElement.prototype.appendTdValue = function(value) {
		this.$td.empty();
		var $img = $("<img class='element-rule-image' style=\"width: 40px;\" />");
		var urls = co.url.formatImageUrls(value);
		$img.attr('path', urls[0]);
		this.$td.append($img);
		this.$td.css('line-height', 0);
	};

	var ThisElementConfig = {
		name : "图片",
		forInput : true,
		columns : []
	};
	co.page.panel.layout.element.model.defind("IMAGE", ThisElementConfig, ThisElement);
})(window, jQuery);