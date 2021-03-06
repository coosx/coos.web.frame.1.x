<%@ page trimDirectiveWhitespaces="true"%><%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ page import="java.util.*"%><%@ include file="/WEB-INF/views/base/base.jsp"%>
<div class="coos-column-12 coos-page" style="margin: 10px auto;width: 1024px;">
	<div class="coos-page-header  ">
		<h1 class="coos-page-title pdb-5">框架使用说明</h1>
		<small class="coos-subtitle ">
			框架起步，依赖库、初始化等介绍
			<br />
			先生成最新CSS：
			<a class=" coos-button-link mg-5" href="${basePath }/resource/coos/merge/lessToCSS"> 生成最新CSS </a>
			<br />
			核心库：
			<a class=" coos-button-link mg-5" href="${basePath }/resource/coos/css/coos.css"> coos.css </a>
			|
			<a class="coos-button-link mg-5" href="${basePath }/resource/coos/js/coos.js"> coos.js </a>
			<br />
			框架主题库：
			<a class=" coos-button-link mg-5" href="${basePath }/resource/coos/css/coos.frame.css"> coos.frame.css </a>
			|
			<a class="coos-button-link mg-5" href="${basePath }/resource/coos/js/coos.frame.js""> coos.frame.js </a>
			<br />
			打包下载：
			<a class=" coos-button-link mg-5" href="${basePath }/resource/coos/merge/resource.zip"> resource.zip </a>
			<div class="coos-panel-menu"></div>
		</small>
	</div>
	<div class="coos-page-content">

		<div class="coos-panel  coos-panel-bd-left coos-panel-light">
			<div class="coos-panel-header no-title">
				<h3 class="coos-panel-title"></h3>
				<div class="coos-panel-menu">
					<div class="coos-menu  baseMinimizeBtn">
						<i class="fa fa-minus"></i>
					</div>
					<div class="coos-menu  removePanelBtn">
						<div>
							<i class="fa fa-remove"></i>
						</div>
					</div>
				</div>

			</div>
			<div class="coos-panel-body">
				<h2 class="pdb-10">引入</h2>
				<pre style="white-space: pre;">
&lt;-- <span class="coos-red">依赖fontawesome字体库</span> --&gt;
&lt;link type="text/css" href="resource/plugins/fontawesome/css/font-awesome.css" rel="stylesheet" &gt;&lt;/link&gt;
&lt;-- <span class="coos-red">依赖JQuery库</span> --&gt;
&lt;script type="text/javascript" src="resource/plugins/jquery/jquery.js" &gt;&lt;/script&gt;
&lt;-- <span class="coos-red">框架基础CSS库</span> --&gt;
&lt;link type="text/css" href="resource/coos/css/coos.css" rel="stylesheet" &gt;&lt;/link&gt;
&lt;-- <span class="coos-red">框架核心JS库</span> --&gt;
&lt;script type="text/javascript" src="resource/coos/js/coos.js" &gt;&lt;/script&gt;
&lt;-- <span class="coos-red">框架初始化JS 此文件需要自行创建</span> --&gt;
&lt;script type="text/javascript" src="resource/app/js/main.js" &gt;&lt;/script&gt;
				</pre>
			</div>
		</div>
		<div class="coos-panel  coos-panel-bd-left coos-panel-light">
			<div class="coos-panel-header no-title">
				<h3 class="coos-panel-title"></h3>
				<div class="coos-panel-menu">
					<div class="coos-menu  baseMinimizeBtn">
						<i class="fa fa-minus"></i>
					</div>
					<div class="coos-menu  removePanelBtn">
						<div>
							<i class="fa fa-remove"></i>
						</div>
					</div>
				</div>
			</div>
			<div class="coos-panel-body">
				<h2 class="pdb-10">框架初始化JS (main.js)</h2>
				<pre style="white-space: pre;">
&lt;script type="text/javascript" &gt;
(function() {
	"use strict";
	var config =
	{
		page : {
			single : true
		},
		action :
		{
			toIndex : "index/toIndex.do",
			toLogin : "login/toLogin.do",
			doLogin : "login/doLogin.do",
			doUpload : "file/doUpload.do"
			error :
			{
				404 : "error/to404.do",
				500 : "error/to500.do",
				toNoAccess : "error/toNoAccess.do",
				toNotOnline : "error/toNotOnline.do"
			}
		},
		resourcePath : "",
		server :
		{
			fileServerUrl : "http://..../file/path/"
		},
		images :
		{
			loading : basePath + "/resource/coos/images/image/loading.gif",
			noimg : basePath + "/resource/coos/images/image/noimage.png",
			notfindimg : basePath + "/resource/coos/images/image/notfindimage.png",
			clickupload : basePath + "/resource/coos/images/image/clickupload.png"
		},
		plugins : {
		}
	};
	coos.init(config);
})();
&lt;/script&gt;
				</pre>
			</div>
		</div>
		<div class="coos-panel  coos-panel-bd-left coos-panel-light">
			<div class="coos-panel-header no-title">
				<h3 class="coos-panel-title">框架主题使用</h3>
				<div class="coos-panel-menu">
					<div class="coos-menu  baseMinimizeBtn">
						<i class="fa fa-minus"></i>
					</div>
					<div class="coos-menu  removePanelBtn">
						<div>
							<i class="fa fa-remove"></i>
						</div>
					</div>
				</div>

			</div>
			<div class="coos-panel-body">
				<h2 class="pdb-10">引入</h2>
				<pre style="white-space: pre;">
&lt;-- <span class="coos-red">框架主题CSS库</span> --&gt;
&lt;link type="text/css" href="resource/coos/css/coos.frame.css" rel="stylesheet" &gt;&lt;/link&gt;
&lt;-- <span class="coos-red">框架主题JS库</span> --&gt;
&lt;script type="text/javascript" src="resource/coos/js/frame.js" &gt;&lt;/script&gt;
				</pre>
				<h2 class="pdb-10">COOS框架容器HTML</h2>
				<pre style="white-space: pre;">
&lt;div class="coos-frame coos-full-page"&gt;
	&lt;div class="coos-header"&gt;
		&lt;div class="coos-header-content"&gt;
			&lt;div class="coos-header-left "&gt;&lt;/div&gt;
			&lt;div class="coos-header-center"&gt;&lt;/div&gt;
			&lt;div class="coos-header-right"&gt;&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	&lt;div class="coos-body"&gt;
		&lt;div class="coos-body-content"&gt;
			&lt;div class="coos-body-left"&gt;&lt;/div&gt;
			&lt;div class="coos-body-center"&gt;
				&lt;div id="page-body-content-old"&gt;&lt;/div&gt;
				&lt;div class="coos-body-center-content" id="page-body-content"&gt;
					&lt;jsp:include page="嵌入页面地址" flush="false" /&gt;
				&lt;/div&gt;
			&lt;/div&gt;
			&lt;div class="coos-body-right"&gt;&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	&lt;div class="coos-footer"&gt;&lt;/div&gt;
	&lt;a href="javascript:;" class="coos-back-top "&gt;
		&lt;i class="fa fa-angle-up"&gt; &lt;/i&gt;
	&lt;/a&gt;
&lt;/div&gt;
				</pre>

			</div>

		</div>
		<div class="coos-panel  coos-panel-bd-left coos-panel-light">
			<div class="coos-panel-header no-title">
				<h3 class="coos-panel-title"></h3>
				<div class="coos-panel-menu">
					<div class="coos-menu  baseMinimizeBtn">
						<i class="fa fa-minus"></i>
					</div>
					<div class="coos-menu  removePanelBtn">
						<div>
							<i class="fa fa-remove"></i>
						</div>
					</div>
				</div>
			</div>
			<div class="coos-panel-body">
				<h2 class="pdb-10">框架主题初始化JS (main.js)</h2>
				<pre style="white-space: pre;">
&lt;script type="text/javascript" &gt;
(function() {
	"use strict";

	var menus = [];

	var menu = {};
	menu.menuid = 11;
	menu.name = "基础";
	menu.parentid = 1;
	menus[menus.length] = menu;

	var menu = {};
	menu.menuid = 111;
	menu.name = "使用";
	menu.parentid = 11;
	menu.servletpath = "/core/web/frame/index/toIndex.do";
	menus[menus.length] = menu;

	var thisTheme = coos.frame.theme.getDefaultTheme();
	thisTheme.themeid = co.getNumber();
	coos.frame.init(
	{
		project :
		{
			title : "这是标题",
			themes : [ thisTheme ]
		},
		menus : menus
	});

})();
&lt;/script&gt;
				</pre>
			</div>
		</div>
	</div>
</div>