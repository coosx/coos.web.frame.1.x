(function() {
	co.resource.load = new Object();
	co.resource.load.loaded = {};
	co.resource.load.js = function(path, callback) {
		var paths = [ path ];
		if (co.isArray(path)) {
			paths = path;
		}
		var allLoad = true;
		$(paths).each(function(index, path) {
			if (co.resource.load.loaded[path]) {
			} else {
				allLoad = false;
			}
		})
		if (allLoad) {
			if (callback) {
				callback();
			}
			return;
		}
		function load(index) {
			if (index >= (paths.length)) {
				if (callback) {
					callback();
				}
				return;
			}
			var path = paths[index];
			var url = co.url.format(path);
			if (co.resource.load.loaded[path]) {
				load(index + 1);
				return;
			}
			var head = document.getElementsByTagName('head')[0], script = document.createElement('script');
			head.appendChild(script);
			script.src = url;
			script.charset = 'utf-8';
			script.onload = script.onreadystatechange = function() {
				if (!this.readyState || this.readyState === 'loaded') {
					script.onload = script.onreadystatechange = null;
					if ($('[src="' + url + '"]').length > 1) {
						head.removeChild(script);
					}
					co.resource.load.loaded[path] = true;
					load(index + 1);
				}
			};
		}
		load(0);
	};
	co.resource.load.css = function(path, callback) {
		var paths = [ path ];
		if (coos.isArray(path)) {
			paths = path;
		}
		var allLoad = true;
		$(paths).each(function(index, path) {
			if (co.resource.load.loaded[path]) {
			} else {
				allLoad = false;
			}
		})
		if (allLoad) {
			if (callback) {
				callback();
			}
			return;
		}
		var length = 0;
		$(paths).each(function(index, path) {
			co.resource.load.loaded[path] = true;
			var url = co.url.format(path);
			$('[coos-main]').before("<link href='" + url + "' rel='stylesheet' type='text/css'>");
			length++;
			if (length == paths.length) {
				if (callback) {
					callback();
				}
			}
		});
	};
	
})();