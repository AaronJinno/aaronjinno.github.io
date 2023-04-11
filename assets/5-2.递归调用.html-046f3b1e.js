import{_ as n,W as a,X as s,Z as e}from"./framework-ca8d4a1d.js";const t={},i=e(`<h2 id="i-函数嵌套调用" tabindex="-1"><a class="header-anchor" href="#i-函数嵌套调用" aria-hidden="true">#</a> Ⅰ. 函数嵌套调用</h2><p>所谓函数嵌套调用指的是一个函数里面又调用了另外一个函数。</p><h4 id="_1-执行流程" tabindex="-1"><a class="header-anchor" href="#_1-执行流程" aria-hidden="true">#</a> 1. 执行流程</h4><p>如果函数A中，调用了另外一个函数B，那么先把函数B中的任务都执行完毕之后才会回到上次 函数A执行的位置</p><h4 id="_2-示例" tabindex="-1"><a class="header-anchor" href="#_2-示例" aria-hidden="true">#</a> 2. 示例</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">func_b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;func: b&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">func_a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;-----1-----&quot;</span><span class="token punctuation">)</span>
    func_b<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;-----2-----&quot;</span><span class="token punctuation">)</span>


func_a<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-----1-----
func: b
-----2-----
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ii-递归" tabindex="-1"><a class="header-anchor" href="#ii-递归" aria-hidden="true">#</a> Ⅱ. 递归</h2><div class="hint-container danger"><p class="hint-container-title">警告</p><p>暂略</p></div>`,10),c=[i];function p(d,l){return a(),s("div",null,c)}const u=n(t,[["render",p],["__file","5-2.递归调用.html.vue"]]);export{u as default};
