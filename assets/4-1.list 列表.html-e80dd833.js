import{_ as n,W as s,X as a,Z as t}from"./framework-ca8d4a1d.js";const p={},e=t(`<h2 id="i-列表的定义" tabindex="-1"><a class="header-anchor" href="#i-列表的定义" aria-hidden="true">#</a> Ⅰ. 列表的定义</h2><h4 id="_1-基本语法" tabindex="-1"><a class="header-anchor" href="#_1-基本语法" aria-hidden="true">#</a> 1. 基本语法</h4><p>和其他语言的Array定义差不多，以 [] 作为标识，列表内每一个元素之间用 <code>,</code> 逗号隔开。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>变量名 <span class="token operator">=</span> <span class="token punctuation">[</span>元素<span class="token number">1</span><span class="token punctuation">,</span> 元素<span class="token number">2</span><span class="token punctuation">,</span> 元素<span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-特性" tabindex="-1"><a class="header-anchor" href="#_2-特性" aria-hidden="true">#</a> 2. 特性</h4><ul><li>列表可以一次储存多个值，值可以<strong>重复</strong></li><li>列表中的值可以为任意<strong>不同数据类型</strong>（和Java不同）</li><li>支持嵌套（值的类型也可以是列表）</li></ul><h4 id="_3-定义空列表" tabindex="-1"><a class="header-anchor" href="#_3-定义空列表" aria-hidden="true">#</a> 3. 定义空列表</h4><p>有连工作概念方式，可以直接定义空列表。<br> 空列表就是先创建一个列表，然后再操作他。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>变量名称 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
变量名称 <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-示例" tabindex="-1"><a class="header-anchor" href="#_4-示例" aria-hidden="true">#</a> 4. 示例</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>list1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Jinno&#39;</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">18.1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span>  <span class="token comment"># [&#39;Jinno&#39;, True, 23, 18.1]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># &lt;class &#39;list&#39;&gt;</span>

list2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
list3 <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
list4 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ii-列表的索引" tabindex="-1"><a class="header-anchor" href="#ii-列表的索引" aria-hidden="true">#</a> Ⅱ. 列表的索引</h2><p>和数组的索引类似，可以通过索引获取list的元素。</p><h4 id="_1-根据索引取值" tabindex="-1"><a class="header-anchor" href="#_1-根据索引取值" aria-hidden="true">#</a> 1. 根据索引取值</h4><p>列表中的每一个元素，都有其位置下标索引，从前向后的方向，从0开始，依次递增。<br> 只需要按照下标索引，通过中括号，即可取得对应位置的元素。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>list1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Jinno&#39;</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">18.1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># Jinno</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 23</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 18.1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># IndexError: list index out of range</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>下标越界</strong> 如果取值的下标超过了元素的最大下标就会报错：<br> IndexError: list index out of range</p><h4 id="_2-反向索引" tabindex="-1"><a class="header-anchor" href="#_2-反向索引" aria-hidden="true">#</a> 2. 反向索引</h4><p>可以反向索引，也就是从后向前：从-1开始，依次递减（-1、-2、-3......）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>list1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Jinno&#39;</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">18.1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-嵌套索引" tabindex="-1"><a class="header-anchor" href="#_3-嵌套索引" aria-hidden="true">#</a> 3. 嵌套索引</h4><p>对于嵌套列表，可以使用多个中括号取内层列表的元素。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>list1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># b</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iii-列表常用操作" tabindex="-1"><a class="header-anchor" href="#iii-列表常用操作" aria-hidden="true">#</a> Ⅲ. 列表常用操作</h2><p>列表对象有很多内置方法，以对列表进行基本的操作。 PS：方法是OOP中的概念，可以暂时理解为内置的函数。</p><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">作用</th></tr></thead><tbody><tr><td style="text-align:left;">列表.append(元素)</td><td style="text-align:left;">向列表中追加一个元素</td></tr><tr><td style="text-align:left;">列表.extend(容器)</td><td style="text-align:left;">将数据容器的内容依次取出，追加到列表尾部</td></tr><tr><td style="text-align:left;">列表.insert(下标, 元素)</td><td style="text-align:left;">在指定下标处，插入指定的元素</td></tr><tr><td style="text-align:left;">del 列表[下标]</td><td style="text-align:left;">删除列表指定下标元素</td></tr><tr><td style="text-align:left;">列表.pop(下标)</td><td style="text-align:left;">删除列表指定下标元素</td></tr><tr><td style="text-align:left;">列表.remove(元素)</td><td style="text-align:left;">从前向后，删除此元素第一个匹配项</td></tr><tr><td style="text-align:left;">列表.clear()</td><td style="text-align:left;">清空列表</td></tr><tr><td style="text-align:left;">列表.count(元素)</td><td style="text-align:left;">统计此元素在列表中出现的次数</td></tr><tr><td style="text-align:left;">列表.index(元素)</td><td style="text-align:left;">查找指定元素在列表的下标</td></tr><tr><td style="text-align:left;">len(列表)</td><td style="text-align:left;">统计容器内有多少元素</td></tr></tbody></table><h4 id="_1-插入元素" tabindex="-1"><a class="header-anchor" href="#_1-插入元素" aria-hidden="true">#</a> 1. 插入元素</h4><ul><li>insert(index,value)：向列表的指定下标位置，插入指定元素 <ul><li>不要跳着插入，比如下标5没有值，就直接插入下标6</li><li>插入到指定位置后，该位置原有元素和后面的元素下标会顺延</li></ul></li><li>append(value)：向列表尾部，追加插入指定的元素</li><li>extend(其他容器)：将其他数据容器的数据取出，并依次追加到列表尾部</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># insert(index,value)</span>
list1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Jinno&#39;</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">18.1</span><span class="token punctuation">]</span>
list1<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span>  <span class="token comment"># [&#39;Jinno&#39;, True, &#39;hello&#39;, 23, 18.1]</span>


<span class="token comment"># append(value)</span>
list1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Jinno&#39;</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">18.1</span><span class="token punctuation">]</span>
list1<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span>  <span class="token comment"># [&#39;Jinno&#39;, True, 23, 18.1, &#39;hello&#39;]</span>


<span class="token comment"># extend(其他容器)</span>
list1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Jinno&#39;</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">18.1</span><span class="token punctuation">]</span>
list1<span class="token punctuation">.</span>extend<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;ass&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span>  <span class="token comment"># [&#39;Jinno&#39;, True, 23, 18.1, &#39;ass&#39;, [&#39;1&#39;, &#39;a&#39;]]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-删除元素" tabindex="-1"><a class="header-anchor" href="#_2-删除元素" aria-hidden="true">#</a> 2. 删除元素</h4><ul><li>del：使用del语句删除指定下标的元素 <ul><li>del是用来删除字面量的</li></ul></li><li>pop(index)：删除指定下标的元素 <ul><li>pop是弹出的意思，不指定下标会弹出最后一个元素</li></ul></li><li>remove(value)： 删除某元素在列表中的第一个匹配项</li><li>clear()：清空列表，删除所有元素</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># del</span>
list1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Jinno&#39;</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">18.1</span><span class="token punctuation">]</span>
<span class="token comment"># del list1 直接删除整个列表</span>
<span class="token keyword">del</span> list1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span>  <span class="token comment"># [&#39;Jinno&#39;, 23, 18.1]</span>


<span class="token comment"># pop(index)</span>
list1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Jinno&#39;</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">18.1</span><span class="token punctuation">]</span>
list1<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span>  <span class="token comment"># [&#39;Jinno&#39;, True, 23]</span>
list1<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span>  <span class="token comment"># [&#39;Jinno&#39;, 23]</span>


<span class="token comment"># remove(value)</span>
list2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
list2<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list2<span class="token punctuation">)</span>  <span class="token comment"># [1, 1, 3, 2]</span>


<span class="token comment"># clear()</span>
list2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
list2<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list2<span class="token punctuation">)</span>   <span class="token comment"># []</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-修改元素" tabindex="-1"><a class="header-anchor" href="#_3-修改元素" aria-hidden="true">#</a> 3. 修改元素</h4><p>通过下标获取元素，然后重新赋值，就可以修改元素。<br> PS：直接修改的源数组，而非返回一个新数组 语法：列表[index] = 新值</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>list1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Jinno&#39;</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">18.1</span><span class="token punctuation">]</span>

list1<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">28</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">)</span>  <span class="token comment"># [&#39;Jinno&#39;, True, 28, 18.1]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-查询统计" tabindex="-1"><a class="header-anchor" href="#_4-查询统计" aria-hidden="true">#</a> 4. 查询统计</h4><ul><li>index(value): 通过原始的值查找某元素的索引，如果找不到就报错</li><li>count(value): 统计某元素在列表内的数量</li><li>len(list): 统计列表中，有多少元素</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># index(value)</span>
list1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Jinno&#39;</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token number">18.1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list1<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&quot;boy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># ValueError: &#39;boy&#39; is not in list</span>


<span class="token comment"># count(value)</span>
list2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>list2<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 2</span>


<span class="token comment"># len(list)</span>
list2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>list2<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-遍历列表" tabindex="-1"><a class="header-anchor" href="#_5-遍历列表" aria-hidden="true">#</a> 5.遍历列表</h4><div class="hint-container tip"><p class="hint-container-title">提示</p><p>既然数据容器可以存储多个元素，那么，就会有需求从容器内依次取出元素进行操作。<br> 将容器内的元素依次取出进行处理的行为，称之为：遍历、迭代。</p></div><h5 id="_5-1-while循环遍历" tabindex="-1"><a class="header-anchor" href="#_5-1-while循环遍历" aria-hidden="true">#</a> 5.1. while循环遍历</h5><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>index <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># 定义遍历的初始下标</span>
<span class="token keyword">while</span> index <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>列表<span class="token punctuation">)</span><span class="token punctuation">:</span> 
    元素value <span class="token operator">=</span> 列表<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
    <span class="token comment"># 对元素进行处理</span>
    index <span class="token operator">+=</span> <span class="token number">1</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-2-for循环遍历" tabindex="-1"><a class="header-anchor" href="#_5-2-for循环遍历" aria-hidden="true">#</a> 5.2. for循环遍历</h5><p>for循环更适合对数据容器进行遍历，从容器内，依次取出元素并赋值到临时变量上。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> 临时变量 <span class="token keyword">in</span> 数据容器<span class="token punctuation">:</span>
    对临时变量进行处理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,45),o=[e];function l(c,i){return s(),a("div",null,o)}const r=n(p,[["render",l],["__file","4-1.list 列表.html.vue"]]);export{r as default};
