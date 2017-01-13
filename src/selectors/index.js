import { createSelector } from 'reselect';

const getVisibilityFilter = (state) => state.visibilityFilter;
const getTodos = (state) => state.todos;

export const getVisibleTodos = createSelector(
	[ getVisibilityFilter, getTodos ],
	(visibilityFilter, todos) => {
		console.log('dododod')
		switch(visibilityFilter) {
			case 'SHOW_ALL':
				return todos;
			case 'SHOW_COMPLETED':
				return todos.filter(t => t.completed);
			case 'SHOW_ACTIVE':
				return todos.filter( t => !t.completed);
			default:
				return todos;
		}
	}
)

// 多组件更像selector的办法
// 上面的方法是创建一个selector，export一个selector出去大家一起使用，
// 下面的是export函数，调用后会返回一个新创建的selector
// export const makeMapStateToProps = () => {
// 	const getVisibleTodos = createSelector(
// 		[ getVisibilityFilter, getTodos ],
// 		(visibilityFilter, todos) => {
// 			console.log('dododod')
// 			switch(visibilityFilter) {
// 				case 'SHOW_ALL':
// 					return todos;
// 				case 'SHOW_COMPLETED':
// 					return todos.filter(t => t.completed);
// 				case 'SHOW_ACTIVE':
// 					return todos.filter( t => !t.completed);
// 				default:
// 					return todos;
// 			}
// 		}
// 	)
// 	return getVisibleTodos;
// }

// const makeMapStateToProps = () => {
//   const getVisibleTodos = makeGetVisibleTodos()
//   const mapStateToProps = (state, props) => {
//     return {
//       todos: getVisibleTodos(state, props)
//     }
//   }
//   return mapStateToProps
// }

/*
 * Reselect 库可以创建可记忆的(Memoized)、可组合的 selector 函数。
 *	一份selector只能有一份记忆，因此有多组件共享一个selector.js时为每一个组件创建一份记忆，就要为每一个组件createSelector。
*/

