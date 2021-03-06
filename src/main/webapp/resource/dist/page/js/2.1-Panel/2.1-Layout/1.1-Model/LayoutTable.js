(function(window, jQuery) {
	var html = '<div class="coos-col-12 table-responsive"><table class="coos-table"><thead><tr></tr></thead><tbody></tbody></table></div>';

	function ThisLayout(config) {
		co.page.panel.layout.Layout.call(this, config);
	}
	(function() {
		var Super = function() {
		};
		Super.prototype = co.page.panel.layout.Layout.prototype;
		ThisLayout.prototype = new Super();
	})();

	ThisLayout.prototype.initData = function() {
		initDataDefaultTrue(this.layout.config, "haspagesize");
		initDataDefaultFalse(this.layout.config, "isformtable");
		initDataDefaultFalse(this.layout.config, "isdatatable");
		initDataDefaultTrue(this.layout.config, "displayserialnumber");
		initDataDefaultTrue(this.layout.config, "displaybutton");
	};

	ThisLayout.prototype.getElementPlace = function(elementObject) {
		return "TABLE-TD";
	};

	ThisLayout.prototype.getOneView = function(config) {
		var $view = $("<tr></tr>");
		$view.data('data', config.data);
		if (this.layout.config.displayserialnumber) {
			$view.append('<td class="coos-table-index text-center">' + (config.index + 1) + '</td>');
		}
		if (this.layout.config.needradio || this.layout.config.needcheckbox) {
			var $td = $view.find('td:first');
			if ($td.length == 0) {
				$td = $('<td class="coos-table-index text-center"></td>');
				$view.append($td);
			}
			if (this.layout.config.needradio) {
				var radioname = this.radioname || "radio_" + coos.getNumber();
				this.radioname = radioname;
				$td.append('<input type="radio" name="' + radioname + '" class="coos-radio">');
			}
			if (this.layout.config.needcheckbox) {
				var checkboxname = this.checkboxname || "checkbox_" + coos.getNumber();
				this.checkboxname = checkboxname;
				$td.append('<input type="checkbox" name="' + checkboxname + '" class="coos-checkbox">');

			}
			$td.click(function(e) {
				if (e.target.tagName != 'INPUT') {
					$td.find('input').click();
				}
			});
			$td.addClass('coos-pointer');
		}
		return $view;
	};
	ThisLayout.prototype.getButtonContainer = function($container, button) {
		if (!this.layout.config.displaybutton) {
			return $('<div></div>');
		}
		var $buttoncontainer = $container.find('.coos-button-container');
		if ($buttoncontainer.length > 0) {
			return $buttoncontainer;
		}
		var $buttoncontainer = $('<td><div class="coos-button-container coos-td-button-container"></div></td>');
		$container.append($buttoncontainer);
		return $buttoncontainer.find('.coos-button-container');
	};

	ThisLayout.prototype.getOneContainerView = function(config) {
		var $view = $(html);
		if (this.layout.config.displaytitle) {
			var $title = $('<div class="pdtb-5 font-md">' + this.layout.title + '</div>')
			$view.find('table').before($title);
		}
		var $tbody = $view.find('tbody');
		if (this.layout.config.haspagesize) {
			var $ul = co.component.getPaginationUl({}, function() {
			});
			$ul.addClass('mgb-0');
			$view.append($ul);
		}
		this.rowsize = 0;

		if (this.layout.config.isdatatable) {
			$view.find('table').addClass('element-rule-data-tables');
		}
		if (this.layout.config.displayserialnumber) {
			$view.find('thead tr').append('<th width="80px" class="text-center">序号</th>');
			this.rowsize++;
		}
		for (var i = 0; i < this.elementObjects.length; i++) {
			var elementObject = this.elementObjects[i];
			$view.find('thead tr').append(elementObject.getView("TABLE-TH", config));
		}
		if (this.layout.config.displaybutton) {
			$view.find('thead tr').append('<th>操作</th>');
			this.rowsize++;
		}
		this.rowsize = this.rowsize + this.layout.elements.length;
		if (!this.design) {
			$tbody.empty().append('<tr><td colspan="' + this.rowsize + '" class="text-center">数据加载中...</td></tr>');
		} else {
		}
		this.$content.append($view);
		return $tbody;
	};
	ThisLayout.prototype.initNoDataView = function() {

		this.$view.find('tbody').empty().append('<tr><td colspan="' + this.rowsize + '" class="text-center">暂无数据</td></tr>');

	};

	ThisLayout.prototype.removeRow = function($row) {
		$row.remove();
		if (this.$view.find('tbody tr').length == 0) {
			this.initNoDataView();
		}
	};
	ThisLayout.prototype.initContent = function() {

	};
	ThisLayout.prototype.initViewSuccess = function(element) {
		// this.$view.find('.coos-one-button').addClass('mgr-5');
		// this.$tr = this.$content.find('tr:last').clone();
		// this.$theadtr = this.$content.find('thead tr');
	};
	ThisLayout.prototype.getExecuteData = function() {

	};
	ThisLayout.prototype.getData = function(dataConfig) {
		var result = {};
		var isformtable = this.layout.config.isformtable;
		if (this.layout.config.needradio) {
			var name = this.radioname;
			var $input = this.$view.find('[name="' + name + '"]');
			var radio_data = {};
			$($input).each(function(index, input) {
				if (input.checked) {
					radio_data = $(input).closest('tr').data("data");
					if (isformtable) {
						var data = co.form.validate($(input).closest('tr'));
						if (data) {
							for ( var n in data) {
								radio_data[n] = data[n];
							}
						}
					}
				}
			});
			result.radio_data = radio_data;
		}
		if (this.layout.config.needcheckbox) {
			var name = this.checkboxname;
			var $input = this.$view.find('[name="' + name + '"]');
			var checkbox_datas = [];
			$($input).each(function(index, input) {
				if (input.checked) {
					var checkbox_data = $(input).closest('tr').data("data");

					if (isformtable) {
						var data = co.form.validate($(input).closest('tr'));
						if (data) {
							for ( var n in data) {
								checkbox_data[n] = data[n];
							}
						}
					}
					checkbox_datas.push(checkbox_data);
				}
			});

			result.checkbox_datas = checkbox_datas;
		}
		var rowData = {};
		var formData = {};
		if (dataConfig && dataConfig.data) {
			rowData = dataConfig.data;
			formData = dataConfig.data;
		}
		if (this.layout.config.isformtable && dataConfig.$row) {

			var data = co.form.validate(dataConfig.$row);
			if (data) {
				for ( var n in data) {
					formData[n] = data[n];
				}
			}
		} else {
		}
		result.rowData = rowData;
		result.formData = formData;
		return result;
	};

	ThisLayout.prototype.appendDataBefore = function(config) {
		config = config || {};
		var result = config.result;
		if (this.layout.config.haspagesize) {
			result = result || {};
			var this_ = this;
			var $ul = co.component.getPaginationUl(result, function(currentpage) {
				var data = {};
				data.currentpage = currentpage;
				var jumppage = true;
				if (this_.$view.find('ul.pagination').closest('.coos-box-window').length > 0) {
					jumppage = false;
				}

				this_.reloadResult({
					jumppage : jumppage,
					data : data
				});
			});
			$ul.addClass('mgb-0');
			var $oldul = this.$view.find('ul.pagination');
			$oldul.before($ul);
			$oldul.remove();
		}
	};

	var ThisLayoutConfig = {
		name : "表格",
		hasElement : true,
		hasButton : true,
		columns : [ {
			text : "显示标题",
			name : "displaytitle",
			inputtype : "switch"
		}, {
			text : "分页",
			name : "haspagesize",
			inputtype : "switch"
		}, {
			text : "拖动排序",
			name : "hassortable",
			inputtype : "switch"
		}, {
			text : "数据表格",
			name : "isdatatable",
			inputtype : "switch"
		}, {
			text : "是表单表格",
			name : "isformtable",
			inputtype : "switch"
		}, {
			text : "显示序号",
			name : "displayserialnumber",
			inputtype : "switch"
		}, {
			text : "显示按钮",
			name : "displaybutton",
			inputtype : "switch"
		}, {
			text : "需要单选框",
			name : "needradio",
			inputtype : "switch"
		}, {
			text : "需要多选框",
			name : "needcheckbox",
			inputtype : "switch"
		} ],
		getElementModelList : function() {
			var models = co.page.panel.layout.element.model.list();
			$(models).each(function(index, model) {
				co.page.panel.layout.element.model.appendBaseColumns(model.config);
			});
			return models;
		}

	};
	co.page.panel.layout.model.defind("TABLE", ThisLayoutConfig, ThisLayout);
})(window, jQuery);