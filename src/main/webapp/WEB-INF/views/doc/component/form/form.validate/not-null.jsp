<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<h2 class="doc-part-header" id="doc-input-validate-not-null">验证为空</h2>
<div class="doc-view">
	<div id="doc-input-validate-not-null-view" class=" coos-row mgb-10">
<input label="输入框" name="name" class="input-rule-group parameter" need-addon="true" placeholder="不能为空" 
	cannull="0" />
	</div>
	<a class="coos-btn coos-green coos-bd-green validateInputBtn">验证</a>
</div>
<pre class="doc-code " id="doc-input-validate-not-null-code">
</pre>
<script type="text/javascript">
	(function() {
		var code = $('#doc-input-validate-not-null-view').html();
		$("#doc-input-validate-not-null-code").text(code);
		$("#doc-input-validate-not-null-code").snippet('html', codeConfig);
	})();
</script>
