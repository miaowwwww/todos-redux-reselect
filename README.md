npm install<br/>
npm start<br/>
<div class="cnblogs_code">
<pre>import { createSelector } <span style="color: #0000ff;">from</span> <span style="color: #800000;">'</span><span style="color: #800000;">reselect</span><span style="color: #800000;">'</span><span style="color: #000000;">;

</span><span style="color: #0000ff;">const</span> getVisibilityFilter = (state) =&gt;<span style="color: #000000;"> state.visibilityFilter;
</span><span style="color: #0000ff;">const</span> getTodos = (state) =&gt;<span style="color: #000000;"> state.todos;

export </span><span style="color: #0000ff;">const</span> getVisibleTodos =<span style="color: #000000;"> createSelector(
    [ getVisibilityFilter, getTodos ],
    (visibilityFilter, todos) </span>=&gt;<span style="color: #000000;"> {
        console.log(</span><span style="color: #800000;">'</span><span style="color: #800000;">dododod</span><span style="color: #800000;">'</span><span style="color: #000000;">)
        </span><span style="color: #0000ff;">switch</span><span style="color: #000000;">(visibilityFilter) {
            </span><span style="color: #0000ff;">case</span> <span style="color: #800000;">'</span><span style="color: #800000;">SHOW_ALL</span><span style="color: #800000;">'</span><span style="color: #000000;">:
                </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> todos;
            </span><span style="color: #0000ff;">case</span> <span style="color: #800000;">'</span><span style="color: #800000;">SHOW_COMPLETED</span><span style="color: #800000;">'</span><span style="color: #000000;">:
                </span><span style="color: #0000ff;">return</span> todos.filter(t =&gt;<span style="color: #000000;"> t.completed);
            </span><span style="color: #0000ff;">case</span> <span style="color: #800000;">'</span><span style="color: #800000;">SHOW_ACTIVE</span><span style="color: #800000;">'</span><span style="color: #000000;">:
                </span><span style="color: #0000ff;">return</span> todos.filter( t =&gt; !<span style="color: #000000;">t.completed);
            </span><span style="color: #0000ff;">default</span><span style="color: #000000;">:
                </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> todos;
        }
    }
)

</span><span style="color: #008000;">//</span><span style="color: #008000;"> 多组件更像selector的办法
</span><span style="color: #008000;">//</span><span style="color: #008000;"> 上面的方法是创建一个selector，export一个selector出去大家一起使用，
</span><span style="color: #008000;">//</span><span style="color: #008000;"> 下面的是export函数，调用后会返回一个新创建的selector</span>
export <span style="color: #0000ff;">const</span> makeMapStateToProps = () =&gt;<span style="color: #000000;"> {
    </span><span style="color: #0000ff;">const</span> getVisibleTodos =<span style="color: #000000;"> createSelector(
        [ getVisibilityFilter, getTodos ],
        (visibilityFilter, todos) </span>=&gt;<span style="color: #000000;"> {
            console.log(</span><span style="color: #800000;">'</span><span style="color: #800000;">dododod</span><span style="color: #800000;">'</span><span style="color: #000000;">)
            </span><span style="color: #0000ff;">switch</span><span style="color: #000000;">(visibilityFilter) {
                </span><span style="color: #0000ff;">case</span> <span style="color: #800000;">'</span><span style="color: #800000;">SHOW_ALL</span><span style="color: #800000;">'</span><span style="color: #000000;">:
                    </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> todos;
                </span><span style="color: #0000ff;">case</span> <span style="color: #800000;">'</span><span style="color: #800000;">SHOW_COMPLETED</span><span style="color: #800000;">'</span><span style="color: #000000;">:
                    </span><span style="color: #0000ff;">return</span> todos.filter(t =&gt;<span style="color: #000000;"> t.completed);
                </span><span style="color: #0000ff;">case</span> <span style="color: #800000;">'</span><span style="color: #800000;">SHOW_ACTIVE</span><span style="color: #800000;">'</span><span style="color: #000000;">:
                    </span><span style="color: #0000ff;">return</span> todos.filter( t =&gt; !<span style="color: #000000;">t.completed);
                </span><span style="color: #0000ff;">default</span><span style="color: #000000;">:
                    </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> todos;
            }
        }
    )
    </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> getVisibleTodos;
}

</span><span style="color: #0000ff;">const</span> makeMapStateToProps = () =&gt;<span style="color: #000000;"> {
  </span><span style="color: #0000ff;">const</span> getVisibleTodos =<span style="color: #000000;"> makeGetVisibleTodos()
  </span><span style="color: #0000ff;">const</span> mapStateToProps = (state, props) =&gt;<span style="color: #000000;"> {
    </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> {
      todos: getVisibleTodos(state, props)
    }
  }
  </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> mapStateToProps
}


</span><span style="color: #008000;">//</span><span style="color: #008000;">  Reselect 库可以创建可记忆的(Memoized)、可组合的 selector 函数。
</span><span style="color: #008000;">//</span><span style="color: #008000;">     一份selector只能有一份记忆，因此有多组件共享一个selector.js时为每一个组件创建一份记忆，就要为每一个组件createSelector。</span></pre>
</div>
<p>&nbsp;</p>