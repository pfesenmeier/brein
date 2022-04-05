# [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

Steps:

0. Start with a Mock (and Data Model)
1. Break The UI Into A Component Hierarchy
  a. Draw boxes around components, give them names
  b. Ideally, mapping your data model (JSON / User input) to the UI (components). One data piece to each component
  c. Arrange the hierarchy -> inner components should be children
2. Build A Static Version in React (all props, no state)
  a. top-down for simple examples, bottom-up for large examples, testing
  b. static components only have the render function
3. Identify The Minimal (but complete) Representation Of UI State
  a. Is it passed in from a parent via props? If so, it probably isn’t state.
  b. Does it remain unchanged over time? If so, it probably isn’t state.
  c. Can you compute it based on any other state or props in your component? If so, it isn’t state.
4. Identify Where Your State Should Live
  a. Identify every component that renders something based on that state.
  b. Find a common owner component (a single component above all the components that need the state in the hierarchy).
  c. Either the common owner or another component higher up in the hierarchy should own the state.
  d. If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.

  a. Then, add in state into chosen component's constructor
  b. pass in this state as props to children
  c. update render functions (in children probably, where needed)
  d. pass callbacks (handleClick, etc..) from stateful Component down to the <input />
      - callback wraps a call to setState

## More notes on React:
JSX attribute names are camelCase, not 1:1 to HTML attributes
JSX is XSS safe
a JSX expression is an element / object
components are made of elments

for calls to setState that rely on previous state, use a function

## BIND
event handlers call bind in constructor...
"generally, if you refer to method without "()" after, you should bind that method
2 work-arounds
  - public field syntax(handClick = ..., not handleClick() {})
  - use arrow function(() => this.handleClick(), not this.handleClick
  (class fields are recommended, due to performance)

## CONDITIONAL render
let / if / else
ternary
&& operator

return null if don't want to render
  - lifecycle methods not effected

keys only make sense in context of React Components, not html elements
rule of thumb => elements inside map call needs keys
only local uniqueness required

## Controlled Components
useful for forms
- set "value" on HTML to value={this.state.whatever}
- set "onChange" on HTML to onChange=()=> this.handleChange(e)
- have handlerChange call setState
- check out Formik for handling form submissions
