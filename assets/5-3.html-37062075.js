import{_ as n,W as s,X as a,Z as e}from"./framework-ca8d4a1d.js";const t={},p=e(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>变量作用域指的是变量的作用范围（变量在哪里可用，在哪里不可用）。<br> 主要分为两类：局部变量和全局变量</p></div><h4 id="_1-局部变量" tabindex="-1"><a class="header-anchor" href="#_1-局部变量" aria-hidden="true">#</a> 1. 局部变量</h4><p>所谓局部变量是定义在函数体内部的变量，即只在函数体内部生效。<br> 作用：在函数体内部，临时保存数据，即当函数调用完成后，则销毁局部变量</p><p>如下：在函数外使用函数内定义的变量，就会报错。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    num <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>


test<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>  <span class="token comment"># NameError: name &#39;num&#39; is not defined. Did you mean: &#39;sum&#39;?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-全局变量" tabindex="-1"><a class="header-anchor" href="#_2-全局变量" aria-hidden="true">#</a> 2. 全局变量</h4><p>所谓全局变量，指的是在函数体内、外都能生效的变量。<br> 变量定义在全局作用域（函数外面），就是全局变量。</p><p>如下：全局变量在函数内外都可以访问到</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>num <span class="token operator">=</span> <span class="token number">1</span>


<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>


test<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>  <span class="token comment"># 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-覆盖全局变量" tabindex="-1"><a class="header-anchor" href="#_3-覆盖全局变量" aria-hidden="true">#</a> 3. 覆盖全局变量</h4><p>函数内部可以对全局变量重新赋值</p><ul><li>赋值后再该函数作用域内会覆盖全局变量</li><li>在该函数作用域外，变量依然是覆盖前的值</li></ul><p>如下：函数内部对全局变量进行了覆盖</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>num <span class="token operator">=</span> <span class="token number">1</span>


<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    num <span class="token operator">=</span> <span class="token number">100</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>


test<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 100</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>  <span class="token comment"># 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-global" tabindex="-1"><a class="header-anchor" href="#_4-global" aria-hidden="true">#</a> 4. global</h4><p>函数内部对全局变量的覆盖，仅在函数内生效，如果需要全局生效，就需要global关键字，将函数内部的变量提升为全局变量。<br> 使用global关键字还可以直接在函数内声明全局变量（不建议）。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>num <span class="token operator">=</span> <span class="token number">1</span>


<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> num
    <span class="token keyword">global</span> name
    name <span class="token operator">=</span> <span class="token string">&quot;victor&quot;</span>  <span class="token comment"># 直接声明全局变量</span>
    num <span class="token operator">=</span> <span class="token number">100</span>  <span class="token comment"># 覆盖了全局变量</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> 
    <span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> 


test<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 100 Victor</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>  <span class="token comment"># 100</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token comment"># victor 访问到了函数内声明的全局变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),i=[p];function c(l,o){return s(),a("div",null,i)}const d=n(t,[["render",c],["__file","5-3.html.vue"]]);export{d as default};
