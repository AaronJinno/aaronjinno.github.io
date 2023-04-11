import{_ as t,W as h,X as o,Y as e,$ as a,a0 as n,Z as r,C as d}from"./framework-ca8d4a1d.js";const s="/img/python/base/002.webp",c="/img/python/base/003.webp",p="/img/python/base/004.png",l="/img/python/base/005.png",_="/img/python/base/006.png",u="/img/python/base/007.png",m={},y=r('<h2 id="i-安装ide-pycharm" tabindex="-1"><a class="header-anchor" href="#i-安装ide-pycharm" aria-hidden="true">#</a> Ⅰ. 安装IDE：PyCharm</h2><h4 id="_1-ide" tabindex="-1"><a class="header-anchor" href="#_1-ide" aria-hidden="true">#</a> 1. IDE</h4><p>实战开发Python时，需要使用专业的IDE。<br> 最著名的Python IDE工具是：PyCharm</p><h4 id="_2-安装pycharm" tabindex="-1"><a class="header-anchor" href="#_2-安装pycharm" aria-hidden="true">#</a> 2. 安装PyCharm</h4>',4),g=e("br",null,null,-1),f={href:"https://www.jetbrains.com/pycharm/download/#section=windows",target:"_blank",rel:"noopener noreferrer"},b=r('<h4 id="_3-破解pycharm" tabindex="-1"><a class="header-anchor" href="#_3-破解pycharm" aria-hidden="true">#</a> 3. 破解PyCharm</h4><p>专业版需要进行破解才能绕过付费，破解步骤如下：</p><h5 id="_3-1-安装pycharm" tabindex="-1"><a class="header-anchor" href="#_3-1-安装pycharm" aria-hidden="true">#</a> 3.1 安装PyCharm</h5><p>下载安装PyCharm 2023.1 Professional版。<br> 下载完成后运行PyCharm，启动后点击Exit 退出</p><h5 id="_3-2-下载激活脚本" tabindex="-1"><a class="header-anchor" href="#_3-2-下载激活脚本" aria-hidden="true">#</a> 3.2 下载激活脚本</h5><p><a href="/files/pycharm2022.zip" download>点击下载脚本</a><br> 注意激活脚本和PyCharm都不能有带中文的路径</p><h5 id="_3-3-运行激活脚本" tabindex="-1"><a class="header-anchor" href="#_3-3-运行激活脚本" aria-hidden="true">#</a> 3.3 运行激活脚本</h5><p>脚本位置，/pycharm2022/jihuo-tool/script: install-current-user.vbs， 双击运行，出现弹出框，点击确定，等待一会，出现 一个内容为Done的弹出框，然后点击确定，就OK了</p><figure><img src="'+s+'" alt="002" tabindex="0" loading="lazy"><figcaption>002</figcaption></figure><h5 id="_3-4-输入激活码激活" tabindex="-1"><a class="header-anchor" href="#_3-4-输入激活码激活" aria-hidden="true">#</a> 3.4 输入激活码激活</h5><p>激活码位置：/pycharm2020/pycharm激活码.txt<br> 启动PyCharm，选择Activate填入激活码<br><img src="'+c+'" alt="003" loading="lazy"></p><h5 id="_3-5-debug" tabindex="-1"><a class="header-anchor" href="#_3-5-debug" aria-hidden="true">#</a> 3.5 debug</h5><p>如果激活时显示：Key is Invalid，就重启电脑，重新来一遍。</p><h2 id="ii-pycharm创建工程" tabindex="-1"><a class="header-anchor" href="#ii-pycharm创建工程" aria-hidden="true">#</a> Ⅱ. PyCharm创建工程</h2><h4 id="_1-new-project" tabindex="-1"><a class="header-anchor" href="#_1-new-project" aria-hidden="true">#</a> 1. New Project</h4><p>Python是以工程为单位写代码的。<br> 打开PyCharm(激活后)，点击New Project 创建一个新工程</p><h4 id="_2-新工程配置" tabindex="-1"><a class="header-anchor" href="#_2-新工程配置" aria-hidden="true">#</a> 2. 新工程配置</h4><p>如下，配置工程的相关信息：</p><ul><li>Location：工程的物理储存地址</li><li>Python Interpreter：Python解析器的选择</li><li>Create a mina. py welcome script：创建一个欢迎界面(可选)</li></ul><figure><img src="'+p+'" alt="004" tabindex="0" loading="lazy"><figcaption>004</figcaption></figure><h4 id="_3-python解析器的选择" tabindex="-1"><a class="header-anchor" href="#_3-python解析器的选择" aria-hidden="true">#</a> 3. Python解析器的选择</h4><ul><li>New environment using：使用PyCharm内置的Python</li><li>Previously Configured Interpreter：使用自己安装的解析器（选它）</li></ul><p>点击 Add Interpreter，如图选择之前安装的Python.exe（会自动寻找）</p><figure><img src="'+l+'" alt="005" tabindex="0" loading="lazy"><figcaption>005</figcaption></figure><h4 id="_4-工程结构" tabindex="-1"><a class="header-anchor" href="#_4-工程结构" aria-hidden="true">#</a> 4. 工程结构</h4><figure><img src="'+_+'" alt="006" tabindex="0" loading="lazy"><figcaption>006</figcaption></figure><h4 id="_5-小试牛刀" tabindex="-1"><a class="header-anchor" href="#_5-小试牛刀" aria-hidden="true">#</a> 5. 小试牛刀</h4>',27),x={href:"http://test.py",target:"_blank",rel:"noopener noreferrer"},P=r(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello Pycharm&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_5-1-运行代码" tabindex="-1"><a class="header-anchor" href="#_5-1-运行代码" aria-hidden="true">#</a> 5.1 运行代码</h5><p>运行方式：</p><ul><li>方式1：选中代码，右键Run &quot;test&quot;</li><li>方式2：点击菜单栏的 Run</li></ul><h5 id="_5-2-运行结果" tabindex="-1"><a class="header-anchor" href="#_5-2-运行结果" aria-hidden="true">#</a> 5.2 运行结果</h5><figure><img src="`+u+'" alt="007" tabindex="0" loading="lazy"><figcaption>007</figcaption></figure>',6);function C(w,v){const i=d("ExternalLinkIcon");return h(),o("div",null,[y,e("p",null,[a("PyCharm是jetbrains公司开发的，该软件社区版是免费的，建议下载专业(Professional)版。"),g,e("a",f,[a("官方下载网址"),n(i)])]),b,e("p",null,[a("在工程目录下创建一个python文件 "),e("a",x,[a("test.py"),n(i)]),a("，文件内代码如下：")]),P])}const I=t(m,[["render",C],["__file","1-4.html.vue"]]);export{I as default};