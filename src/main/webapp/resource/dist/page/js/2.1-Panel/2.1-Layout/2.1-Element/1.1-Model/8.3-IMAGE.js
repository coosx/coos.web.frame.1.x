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

	ThisElement.prototype.initContent = function() {
		this.$input.addClass('inputtype-file');
		this.$input.attr('file-count', '5');
	};

	ThisElement.prototype.appendTdValue = function(value) {
		this.$input.empty();
		var $img = $("<img class='element-rule-image' style=\"width: 40px;\" />");
		var urls = co.url.formatImageUrls(value);
		$img.attr('path', urls[0]);
		this.$input.append($img);
		this.$input.css('line-height', 0);
	};

	var ThisElementConfig = {
		name : "图片",
		columns : []
	};
	co.page.panel.layout.element.model.defind("IMAGE", ThisElementConfig, ThisElement);
})(window, jQuery);