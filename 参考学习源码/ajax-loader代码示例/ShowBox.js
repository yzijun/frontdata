(function(window, $) {
	var ShowBox = {
		$loadingBox : null,
		$loadingInfo : null,
		createLoadingBox : function() {
			this.$loadingBox = $('<div id="loadingBox"></div>');
			this.$loadingBox.css({
				'position' : 'absolute',
				'top' : 0,
				'left' : 0,
				'zIndex' : 99998,
				'width' : '100%',
				'height' : document.documentElement.scrollHeight,
				'backgroundColor' : '#CCCCCC',
				'opacity' : '0.4',
				'display' : 'none'
			});
			$(document.body).append(this.$loadingBox);
		},
		createLoadingInfo : function() {
			this.$loadingInfo = $('<div id="loadingInfo"></div>');
			this.$loadingInfo.css({
				'position' : 'absolute',
				'left' : '50%',
				'top' : '40%',
				'zIndex' : 99999,
				'display' : 'none',
				'filter' : 'Alpha(Opacity=40)'
			});

			var imgHTML = '<img src="../images/ajax-loader.gif" onerror="javascript:this.src=\'./images/ajax-loader.gif\'" width="31" height="31">', textHTML = '';
			this.$loadingInfo.append(imgHTML).append(textHTML);
			$(document.body).append(this.$loadingInfo);
		},
		show : function() {
			if (!$('#loadingBox')[0])
				this.createLoadingBox();
			if (!$('#loadingInfo')[0])
				this.createLoadingInfo();
			this.$loadingBox.show();
			this.$loadingInfo.show();
		},
		hide : function() {
			if (this.$loadingBox)
				this.$loadingBox.remove();
			if (this.$loadingInfo)
				this.$loadingInfo.remove();
		}
	};
	window.ShowBox = ShowBox;
})(window, jQuery);