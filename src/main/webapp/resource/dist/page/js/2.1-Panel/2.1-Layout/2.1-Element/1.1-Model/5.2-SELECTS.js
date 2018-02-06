(function(window, jQuery, coos) {
	function ThisElement(config) {
		coos.page.panel.layout.element.Element.call(this, config);
	}
	(function() {
		var Super = function() {
		};
		Super.prototype = coos.page.panel.layout.element.Element.prototype;
		ThisElement.prototype = new Super();
	})();

	ThisElement.prototype.textUseSelectData = function() {
		return true;
	};

	ThisElement.prototype.initContent = function() {
		this.$input.addClass('inputtype-select');
		this.$input.attr('ischeckbox', 'true');
	};

	var ThisElementConfig = {
		name : "多选下拉框",
		columns : []
	};
	coos.page.panel.layout.element.model.defind("SELECTS", ThisElementConfig, ThisElement);
})(window, jQuery, coos);