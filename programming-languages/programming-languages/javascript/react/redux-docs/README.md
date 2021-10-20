# Redux Docs



## Installation

### Redux Toolkit[\#](https://redux.js.org/introduction/installation#redux-toolkit)

Redux Toolkit includes the Redux core, as well as other key packages we feel are essential for building Redux applications \(such as Redux Thunk and Reselect\).

It's available as a package on NPM for use with a module bundler or in a Node application:

```text
# NPMnpm install @reduxjs/toolkit
# Yarnyarn add @reduxjs/toolkit
```

Copy

It's also available as a UMD build, which can be loaded from [the `dist` folder on unpkg](https://unpkg.com/@reduxjs/toolkit/dist/). The UMD builds make Redux Toolkit available as a `window.RTK` global variable.

### Redux Core[\#](https://redux.js.org/introduction/installation#redux-core)

To install the stable version:

```text
# NPMnpm install redux
# Yarnyarn add redux
```

Copy

If you're not, you can [access these files on unpkg](https://unpkg.com/redux/), download them, or point your package manager to them.

Most commonly, people consume Redux as a collection of [CommonJS](http://www.commonjs.org/) modules. These modules are what you get when you import `redux` in a [Webpack](https://webpack.js.org/), [Browserify](http://browserify.org/), or a Node environment. If you like to live on the edge and use [Rollup](https://rollupjs.org/), we support that as well.

If you don't use a module bundler, it's also fine. The `redux` npm package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/redux/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. For example, you can drop a UMD build as a [`<script>` tag](https://unpkg.com/redux/dist/redux.js) on the page, or [tell Bower to install it](https://github.com/reduxjs/redux/pull/1181#issuecomment-167361975). The UMD builds make Redux available as a `window.Redux` global variable.

The Redux source code is written in ES2015 but we precompile both CommonJS and UMD builds to ES5 so they work in [any modern browser](https://caniuse.com/#feat=es5). You don't need to use Babel or a module bundler to [get started with Redux](https://redux.js.org/introduction/examples#counter-vanilla).

### Complementary Packages[\#](https://redux.js.org/introduction/installation#complementary-packages)

Most likely, you'll also need [the React bindings](https://github.com/reduxjs/react-redux) and [the developer tools](https://github.com/reduxjs/redux-devtools).

```text
npm install react-reduxnpm install --save-dev redux-devtools
```

Copy

Note that unlike Redux itself, many packages in the Redux ecosystem don't provide UMD builds, so we recommend using CommonJS module bundlers like [Webpack](https://webpack.js.org/) and [Browserify](http://browserify.org/) for the most comfortable development experience.

### Create a React Redux App[\#](https://redux.js.org/introduction/installation#create-a-react-redux-app)

The recommended way to start new apps with React and Redux is by using the [official Redux+JS template](https://github.com/reduxjs/cra-template-redux) or [Redux+TS template](https://github.com/reduxjs/cra-template-redux-typescript) for [Create React App](https://github.com/facebook/create-react-app), which takes advantage of [**Redux Toolkit**](https://redux-toolkit.js.org/) and React Redux's integration with React components.

```text
# Redux + Plain JS templatenpx create-react-app my-app --template redux
# Redux + TypeScript templatenpx create-react-app my-app --template redux-typescript
```

## Core Concepts

Imagine your app’s state is described as a plain object. For example, the state of a todo app might look like this:

```text
{  todos: [{    text: 'Eat food',    completed: true  }, {    text: 'Exercise',    completed: false  }],  visibilityFilter: 'SHOW_COMPLETED'}
```

Copy

This object is like a “model” except that there are no setters. This is so that different parts of the code can’t change the state arbitrarily, causing hard-to-reproduce bugs.

To change something in the state, you need to dispatch an action. An action is a plain JavaScript object \(notice how we don’t introduce any magic?\) that describes what happened. Here are a few example actions:

```text
{ type: 'ADD_TODO', text: 'Go to swimming pool' }{ type: 'TOGGLE_TODO', index: 1 }{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```

Copy

Enforcing that every change is described as an action lets us have a clear understanding of what’s going on in the app. If something changed, we know why it changed. Actions are like breadcrumbs of what has happened. Finally, to tie state and actions together, we write a function called a reducer. Again, nothing magical about it—it’s just a function that takes state and action as arguments, and returns the next state of the app. It would be hard to write such a function for a big app, so we write smaller functions managing parts of the state:

```text
function visibilityFilter(state = 'SHOW_ALL', action) {  if (action.type === 'SET_VISIBILITY_FILTER') {    return action.filter  } else {    return state  }}
function todos(state = [], action) {  switch (action.type) {    case 'ADD_TODO':      return state.concat([{ text: action.text, completed: false }])    case 'TOGGLE_TODO':      return state.map((todo, index) =>        action.index === index          ? { text: todo.text, completed: !todo.completed }          : todo      )    default:      return state  }}
```

Copy

And we write another reducer that manages the complete state of our app by calling those two reducers for the corresponding state keys:

```text
function todoApp(state = {}, action) {  return {    todos: todos(state.todos, action),    visibilityFilter: visibilityFilter(state.visibilityFilter, action)  }}
```

Copy

This is basically the whole idea of Redux. Note that we haven’t used any Redux APIs. It comes with a few utilities to facilitate this pattern, but the main idea is that you describe how your state is updated over time in response to action objects, and 90% of the code you write is just plain JavaScript, with no use of Redux itself, its APIs, or any magic.



## Ecosystem

Redux is a tiny library, but its contracts and APIs are carefully chosen to spawn an ecosystem of tools and extensions, and the community has created a wide variety of helpful addons, libraries, and tools. You don't need to use any of these addons to use Redux, but they can help make it easier to implement features and solve problems in your application.

For an extensive catalog of libraries, addons, and tools related to Redux, check out the [Redux Ecosystem Links](https://github.com/markerikson/redux-ecosystem-links) list. Also, the [React/Redux Links](https://github.com/markerikson/react-redux-links) list contains tutorials and other useful resources for anyone learning React or Redux.

This page lists some of the Redux-related addons that the Redux maintainers have vetted personally, or that have shown widespread adoption in the community. Don't let this discourage you from trying the rest of them! The ecosystem is growing too fast, and we have a limited time to look at everything. Consider these the “staff picks”, and don't hesitate to submit a PR if you've built something wonderful with Redux.

### Table of Contents[\#](https://redux.js.org/introduction/ecosystem#table-of-contents)

* [Ecosystem](https://redux.js.org/introduction/ecosystem#ecosystem)
  * [Table of Contents](https://redux.js.org/introduction/ecosystem#table-of-contents)
  * [Library Integration and Bindings](https://redux.js.org/introduction/ecosystem#library-integration-and-bindings)
  * [Reducers](https://redux.js.org/introduction/ecosystem#reducers)
    * [Reducer Combination](https://redux.js.org/introduction/ecosystem#reducer-combination)
    * [Reducer Composition](https://redux.js.org/introduction/ecosystem#reducer-composition)
    * [Higher-Order Reducers](https://redux.js.org/introduction/ecosystem#higher-order-reducers)
  * [Actions](https://redux.js.org/introduction/ecosystem#actions)
  * [Utilities](https://redux.js.org/introduction/ecosystem#utilities)
  * [Store](https://redux.js.org/introduction/ecosystem#store)
    * [Change Subscriptions](https://redux.js.org/introduction/ecosystem#change-subscriptions)
    * [Batching](https://redux.js.org/introduction/ecosystem#batching)
    * [Persistence](https://redux.js.org/introduction/ecosystem#persistence)
  * [Immutable Data](https://redux.js.org/introduction/ecosystem#immutable-data)
    * [Data Structures](https://redux.js.org/introduction/ecosystem#data-structures)
    * [Immutable Update Utilities](https://redux.js.org/introduction/ecosystem#immutable-update-utilities)
    * [Immutable/Redux Interop](https://redux.js.org/introduction/ecosystem#immutableredux-interop)
  * [Side Effects](https://redux.js.org/introduction/ecosystem#side-effects)
    * [Widely Used](https://redux.js.org/introduction/ecosystem#widely-used)
    * [Promises](https://redux.js.org/introduction/ecosystem#promises)
  * [Middleware](https://redux.js.org/introduction/ecosystem#middleware)
    * [Networks and Sockets](https://redux.js.org/introduction/ecosystem#networks-and-sockets)
    * [Async Behavior](https://redux.js.org/introduction/ecosystem#async-behavior)
    * [Analytics](https://redux.js.org/introduction/ecosystem#analytics)
  * [Entities and Collections](https://redux.js.org/introduction/ecosystem#entities-and-collections)
  * [Component State and Encapsulation](https://redux.js.org/introduction/ecosystem#component-state-and-encapsulation)
  * [Dev Tools](https://redux.js.org/introduction/ecosystem#dev-tools)
    * [Debuggers and Viewers](https://redux.js.org/introduction/ecosystem#debuggers-and-viewers)
    * [DevTools Monitors](https://redux.js.org/introduction/ecosystem#devtools-monitors)
    * [Logging](https://redux.js.org/introduction/ecosystem#logging)
    * [Mutation Detection](https://redux.js.org/introduction/ecosystem#mutation-detection)
  * [Testing](https://redux.js.org/introduction/ecosystem#testing)
  * [Routing](https://redux.js.org/introduction/ecosystem#routing)
  * [Forms](https://redux.js.org/introduction/ecosystem#forms)
  * [Higher-Level Abstractions](https://redux.js.org/introduction/ecosystem#higher-level-abstractions)
  * [Community Conventions](https://redux.js.org/introduction/ecosystem#community-conventions)

### Library Integration and Bindings[\#](https://redux.js.org/introduction/ecosystem#library-integration-and-bindings)

[**reduxjs/react-redux**](https://github.com/reduxjs/react-redux)  
The official React bindings for Redux, maintained by the Redux team

[**angular-redux/ng-redux**](https://github.com/angular-redux/ng-redux)  
Angular 1 bindings for Redux

[**ember-redux/ember-redux**](https://github.com/ember-redux/ember-redux)  
Ember bindings for Redux

[**glimmer-redux/glimmer-redux**](https://github.com/glimmer-redux/glimmer-redux)  
Redux bindings for Ember's Glimmer component engine

[**tur-nr/polymer-redux**](https://github.com/tur-nr/polymer-redux)  
Redux bindings for Polymer

[**lastmjs/redux-store-element**](https://github.com/lastmjs/redux-store-element) Redux bindings for custom elements

### Reducers[\#](https://redux.js.org/introduction/ecosystem#reducers)

**Reducer Combination\#**

[**ryo33/combineSectionReducers**](https://gitlab.com/ryo33/combine-section-reducers)  
An expanded version of `combineReducers`, which allows passing `state` as a third argument to all slice reducers.

[**KodersLab/topologically-combine-reducers**](https://github.com/KodersLab/topologically-combine-reducers)  
A `combineReducers` variation that allows defining cross-slice dependencies for ordering and data passing

```text
var masterReducer = topologicallyCombineReducers(  { auth, users, todos },  // define the dependency tree  { auth: ['users'], todos: ['auth'] })
```

Copy

**Reducer Composition\#**

[**acdlite/reduce-reducers**](https://github.com/acdlite/reduce-reducers)  
Provides sequential composition of reducers at the same level

```text
const combinedReducer = combineReducers({ users, posts, comments })const rootReducer = reduceReducers(combinedReducer, otherTopLevelFeatureReducer)
```

Copy

[**mhelmer/redux-xforms**](https://github.com/mhelmer/redux-xforms)  
A collection of composable reducer transformers

```text
const createByFilter = (predicate, mapActionToKey) =>  compose(    withInitialState({}), // inject initial state as {}    withFilter(predicate), // let through if action has filterName    updateSlice(mapActionToKey), // update a single key in the state    isolateSlice(mapActionToKey) // run the reducer on a single state slice  )
```

Copy

[**adrienjt/redux-data-structures**](https://github.com/adrienjt/redux-data-structures)  
Reducer factory functions for common data structures: counters, maps, lists \(queues, stacks\), sets

```text
const myCounter = counter({  incrementActionTypes: ['INCREMENT'],  decrementActionTypes: ['DECREMENT']})
```

Copy

**Higher-Order Reducers\#**

[**omnidan/redux-undo**](https://github.com/omnidan/redux-undo)  
Effortless undo/redo and action history for your reducers

[**omnidan/redux-ignore**](https://github.com/omnidan/redux-ignore)  
Ignore redux actions by array or filter function

[**omnidan/redux-recycle**](https://github.com/omnidan/redux-recycle)  
Reset the redux state on certain actions

[**ForbesLindesay/redux-optimist**](https://github.com/ForbesLindesay/redux-optimist)  
A reducer enhancer to enable type-agnostic optimistic updates

### Actions[\#](https://redux.js.org/introduction/ecosystem#actions)

[**reduxactions/redux-actions**](https://github.com/reduxactions/redux-actions)  
Flux Standard Action utilities for Redux

```text
const increment = createAction('INCREMENT')const reducer = handleActions({ [increment]: (state, action) => state + 1 }, 0)const store = createStore(reducer)store.dispatch(increment())
```

Copy

[**BerkeleyTrue/redux-create-types**](https://github.com/BerkeleyTrue/redux-create-types)  
Creates standard and async action types based on namespaces

```text
export const types = createTypes(  ['openModal', createAsyncTypes('fetch')],  'app')// { openModal : "app.openModal", fetch : { start : "app.fetch.start", complete: 'app.fetch.complete' } }
```

Copy

[**maxhallinan/kreighter**](https://github.com/maxhallinan/kreighter)  
Generates action creators based on types and expected fields

```text
const formatTitle = (id, title) => ({  id,  title: toTitleCase(title)})const updateBazTitle = fromType('UPDATE_BAZ_TITLE', formatTitle)updateBazTitle(1, 'foo bar baz')// -> { type: 'UPDATE_BAZ_TITLE', id: 1, title: 'Foo Bar Baz', }
```

Copy

### Utilities[\#](https://redux.js.org/introduction/ecosystem#utilities)

[**reduxjs/reselect**](https://github.com/reduxjs/reselect)  
Creates composable memoized selector functions for efficiently deriving data from the store state

```text
const taxSelector = createSelector(  [subtotalSelector, taxPercentSelector],  (subtotal, taxPercent) => subtotal * (taxPercent / 100))
```

Copy

[**paularmstrong/normalizr**](https://github.com/paularmstrong/normalizr)  
Normalizes nested JSON according to a schema

```text
const user = new schema.Entity('users')const comment = new schema.Entity('comments', { commenter: user })const article = new schema.Entity('articles', {  author: user,  comments: [comment]})const normalizedData = normalize(originalData, article)
```

Copy

[**planttheidea/selectorator**](https://github.com/planttheidea/selectorator)  
Abstractions over Reselect for common selector use cases

```text
const getBarBaz = createSelector(  ['foo.bar', 'baz'],  (bar, baz) => `${bar} ${baz}`)getBarBaz({ foo: { bar: 'a' }, baz: 'b' }) // "a b"
```

Copy

### Store[\#](https://redux.js.org/introduction/ecosystem#store)

**Change Subscriptions\#**

[**jprichardson/redux-watch**](https://github.com/jprichardson/redux-watch)  
Watch for state changes based on key paths or selectors

```text
let w = watch(() => mySelector(store.getState()))store.subscribe(  w((newVal, oldVal) => {    console.log(newval, oldVal)  }))
```

Copy

[**ashaffer/redux-subscribe**](https://github.com/ashaffer/redux-subscribe)  
Centralized subscriptions to state changes based on paths

```text
store.dispatch( subscribe("users.byId.abcd", "subscription1", () => {} );
```

Copy

**Batching\#**

[**tappleby/redux-batched-subscribe**](https://github.com/tappleby/redux-batched-subscribe)  
Store enhancer that can debounce subscription notifications

```text
const debounceNotify = _.debounce(notify => notify())const store = createStore(  reducer,  initialState,  batchedSubscribe(debounceNotify))
```

Copy

[**manaflair/redux-batch**](https://github.com/manaflair/redux-batch)  
Store enhancer that allows dispatching arrays of actions

```text
const store = createStore(reducer, reduxBatch)store.dispatch([{ type: 'INCREMENT' }, { type: 'INCREMENT' }])
```

Copy

[**laysent/redux-batch-actions-enhancer**](https://github.com/laysent/redux-batch-actions-enhancer)  
Store enhancer that accepts batched actions

```text
const store = createStore(reducer, initialState, batch().enhancer)store.dispatch(createAction({ type: 'INCREMENT' }, { type: 'INCREMENT' }))
```

Copy

[**tshelburne/redux-batched-actions**](https://github.com/tshelburne/redux-batched-actions)  
Higher-order reducer that handles batched actions

```text
const store = createStore(enableBatching(reducer), initialState)store.dispatch(batchActions([{ type: 'INCREMENT' }, { type: 'INCREMENT' }]))
```

Copy

**Persistence\#**

[**rt2zz/redux-persist**](https://github.com/rt2zz/redux-persist)  
Persist and rehydrate a Redux store, with many extensible options

```text
const store = createStore(reducer, autoRehydrate())persistStore(store)
```

Copy

[**react-stack/redux-storage**](https://github.com/react-stack/redux-storage)  
Persistence layer for Redux with flexible backends

```text
const reducer = storage.reducer(combineReducers(reducers))const engine = createEngineLocalStorage('my-save-key')const storageMiddleware = storage.createMiddleware(engine)const store = createStore(reducer, applyMiddleware(storageMiddleware))
```

Copy

[**redux-offline/redux-offline**](https://github.com/redux-offline/redux-offline)  
Persistent store for Offline-First apps, with support for optimistic UIs

```text
const store = createStore(reducer, offline(offlineConfig))store.dispatch({  type: 'FOLLOW_USER_REQUEST',  meta: { offline: { effect: {}, commit: {}, rollback: {} } }})
```

Copy

### Immutable Data[\#](https://redux.js.org/introduction/ecosystem#immutable-data)

[**ImmerJS/immer**](https://github.com/immerjs/immer)  
Immutable updates with normal mutative code, using Proxies

```text
const nextState = produce(baseState, draftState => {  draftState.push({ todo: 'Tweet about it' })  draftState[1].done = true})
```

Copy

### Side Effects[\#](https://redux.js.org/introduction/ecosystem#side-effects)

**Widely Used\#**

[**gaearon/redux-thunk**](https://github.com/gaearon/redux-thunk)  
Dispatch functions, which are called and given `dispatch` and `getState` as parameters. This acts as a loophole for AJAX calls and other async behavior.

**Best for**: getting started, simple async and complex synchronous logic.

```text
function fetchData(someValue) {    return (dispatch, getState) => {        dispatch({type : "REQUEST_STARTED"});
        myAjaxLib.post("/someEndpoint", {data : someValue})            .then(response => dispatch({type : "REQUEST_SUCCEEDED", payload : response})            .catch(error => dispatch({type : "REQUEST_FAILED", error : error});    };}
function addTodosIfAllowed(todoText) {    return (dispatch, getState) => {        const state = getState();
        if(state.todos.length < MAX_TODOS) {            dispatch({type : "ADD_TODO", text : todoText});        }    }}
```

Copy

[**redux-saga/redux-saga**](https://github.com/redux-saga/redux-saga)  
Handle async logic using synchronous-looking generator functions. Sagas return descriptions of effects, which are executed by the saga middleware, and act like "background threads" for JS applications.

**Best for**: complex async logic, decoupled workflows

```text
function* fetchData(action) {  const { someValue } = action  try {    const response = yield call(myAjaxLib.post, '/someEndpoint', {      data: someValue    })    yield put({ type: 'REQUEST_SUCCEEDED', payload: response })  } catch (error) {    yield put({ type: 'REQUEST_FAILED', error: error })  }}
function* addTodosIfAllowed(action) {  const { todoText } = action  const todos = yield select(state => state.todos)
  if (todos.length < MAX_TODOS) {    yield put({ type: 'ADD_TODO', text: todoText })  }}
```

Copy

[**redux-observable/redux-observable**](https://github.com/redux-observable/redux-observable)

Handle async logic using RxJS observable chains called "epics". Compose and cancel async actions to create side effects and more.

**Best for**: complex async logic, decoupled workflows

```text
const loginRequestEpic = action$ =>  action$    .ofType(LOGIN_REQUEST)    .mergeMap(({ payload: { username, password } }) =>      Observable.from(postLogin(username, password))        .map(loginSuccess)        .catch(loginFailure)    )
const loginSuccessfulEpic = action$ =>  action$    .ofType(LOGIN_SUCCESS)    .delay(2000)    .mergeMap(({ payload: { msg } }) => showMessage(msg))
const rootEpic = combineEpics(loginRequestEpic, loginSuccessfulEpic)
```

Copy

[**redux-loop/redux-loop**](https://github.com/redux-loop/redux-loop)

A port of the Elm Architecture to Redux that allows you to sequence your effects naturally and purely by returning them from your reducers. Reducers now return both a state value and a side effect description.

**Best for**: trying to be as much like Elm as possible in Redux+JS

```text
export const reducer = (state = {}, action) => {  switch (action.type) {    case ActionType.LOGIN_REQUEST:      const { username, password } = action.payload      return loop(        { pending: true },        Effect.promise(loginPromise, username, password)      )    case ActionType.LOGIN_SUCCESS:      const { user, msg } = action.payload      return loop(        { pending: false, user },        Effect.promise(delayMessagePromise, msg, 2000)      )    case ActionType.LOGIN_FAILURE:      return { pending: false, err: action.payload }    default:      return state  }}
```

Copy

[**jeffbski/redux-logic**](https://github.com/jeffbski/redux-logic)

Side effects lib built with observables, but allows use of callbacks, promises, async/await, or observables. Provides declarative processing of actions.

**Best for**: very decoupled async logic

```text
const loginLogic = createLogic({  type: Actions.LOGIN_REQUEST,
  process({ getState, action }, dispatch, done) {    const { username, password } = action.payload
    postLogin(username, password)      .then(        ({ user, msg }) => {          dispatch(loginSucceeded(user))
          setTimeout(() => dispatch(showMessage(msg)), 2000)        },        err => dispatch(loginFailure(err))      )      .then(done)  }})
```

Copy

**Promises\#**

[**acdlite/redux-promise**](https://github.com/acdlite/redux-promise)  
Dispatch promises as action payloads, and have FSA-compliant actions dispatched as the promise resolves or rejects.

```text
dispatch({ type: 'FETCH_DATA', payload: myAjaxLib.get('/data') })// will dispatch either {type : "FETCH_DATA", payload : response} if resolved,// or dispatch {type : "FETCH_DATA", payload : error, error : true} if rejected
```

Copy

[**lelandrichardson/redux-pack**](https://github.com/lelandrichardson/redux-pack)  
Sensible, declarative, convention-based promise handling that guides users in a good direction without exposing the full power of dispatch.

```text
dispatch({type : "FETCH_DATA", payload : myAjaxLib.get("/data") });
// in a reducer:        case "FETCH_DATA": =            return handle(state, action, {                start: prevState => ({                  ...prevState,                  isLoading: true,                  fooError: null                }),                finish: prevState => ({ ...prevState, isLoading: false }),                failure: prevState => ({ ...prevState, fooError: payload }),                success: prevState => ({ ...prevState, foo: payload }),            });
```

Copy

### Middleware[\#](https://redux.js.org/introduction/ecosystem#middleware)

**Networks and Sockets\#**

[**svrcekmichal/redux-axios-middleware**](https://github.com/svrcekmichal/redux-axios-middleware)  
Fetches data with Axios and dispatches start/success/fail actions

```text
export const loadCategories() => ({ type: 'LOAD', payload: { request : { url: '/categories'} } });
```

Copy

[**agraboso/redux-api-middleware**](https://github.com/agraboso/redux-api-middleware)  
Reads API call actions, fetches, and dispatches FSAs

```text
const fetchUsers = () => ({  [CALL_API]: {    endpoint: 'http://www.example.com/api/users',    method: 'GET',    types: ['REQUEST', 'SUCCESS', 'FAILURE']  }})
```

Copy

[**itaylor/redux-socket.io**](https://github.com/itaylor/redux-socket.io)  
An opinionated connector between socket.io and redux.

```text
const store = createStore(reducer, applyMiddleware(socketIoMiddleware))store.dispatch({ type: 'server/hello', data: 'Hello!' })
```

Copy

[**tiberiuc/redux-react-firebase**](https://github.com/tiberiuc/redux-react-firebase)  
Integration between Firebase, React, and Redux

**Async Behavior\#**

[**rt2zz/redux-action-buffer**](https://github.com/rt2zz/redux-action-buffer)  
Buffers all actions into a queue until a breaker condition is met, at which point the queue is released

[**wyze/redux-debounce**](https://github.com/wyze/redux-debounce)  
FSA-compliant middleware for Redux to debounce actions.

[**mathieudutour/redux-queue-offline**](https://github.com/mathieudutour/redux-queue-offline)  
Queue actions when offline and dispatch them when getting back online.

**Analytics\#**

[**rangle/redux-beacon**](https://github.com/rangle/redux-beacon)  
Integrates with any analytics services, can track while offline, and decouples analytics logic from app logic

[**markdalgleish/redux-analytics**](https://github.com/markdalgleish/redux-analytics)  
Watches for Flux Standard Actions with meta analytics values and processes them

### Entities and Collections[\#](https://redux.js.org/introduction/ecosystem#entities-and-collections)

[**tommikaikkonen/redux-orm**](https://github.com/tommikaikkonen/redux-orm)  
A simple immutable ORM to manage relational data in your Redux store.

[**Versent/redux-crud**](https://github.com/Versent/redux-crud)  
Convention-based actions and reducers for CRUD logic

[**kwelch/entities-reducer**](https://github.com/kwelch/entities-reducer)  
A higher-order reducer that handles data from Normalizr

[**amplitude/redux-query**](https://github.com/amplitude/redux-query)  
Declare colocated data dependencies with your components, run queries when components mount, perform optimistic updates, and trigger server changes with Redux actions.

[**cantierecreativo/redux-bees**](https://github.com/cantierecreativo/redux-bees)  
Declarative JSON-API interaction that normalizes data, with a React HOC that can run queries

[**GetAmbassador/redux-clerk**](https://github.com/GetAmbassador/redux-clerk)  
Async CRUD handling with normalization, optimistic updates, sync/async action creators, selectors, and an extendable reducer.

[**shoutem/redux-io**](https://github.com/shoutem/redux-io)  
JSON-API abstraction with async CRUD, normalization, optimistic updates, caching, data status, and error handling.

[**jmeas/redux-resource**](https://github.com/jmeas/redux-resource)  
A tiny but powerful system for managing 'resources': data that is persisted to remote servers.

### Component State and Encapsulation[\#](https://redux.js.org/introduction/ecosystem#component-state-and-encapsulation)

[**threepointone/redux-react-local**](https://github.com/threepointone/redux-react-local)  
Local component state in Redux, with handling for component actions

```text
@local({  ident: 'counter', initial: 0, reducer : (state, action) => action.me ? state + 1 : state }})class Counter extends React.Component {
```

Copy

[**epeli/lean-redux**](https://github.com/epeli/lean-redux)  
Makes component state in Redux as easy as setState

```text
const DynamicCounters = connectLean(    scope: "dynamicCounters",    getInitialState() => ({counterCount : 1}),    addCounter, removeCounter)(CounterList);
```

Copy

[**DataDog/redux-doghouse**](https://github.com/DataDog/redux-doghouse)  
Aims to make reusable components easier to build with Redux by scoping actions and reducers to a particular instance of a component.

```text
const scopeableActions = new ScopedActionFactory(actionCreators)const actionCreatorsScopedToA = scopeableActions.scope('a')actionCreatorsScopedToA.foo('bar') //{ type: SET_FOO, value: 'bar', scopeID: 'a' }
const boundScopeableActions = bindScopedActionFactories(  scopeableActions,  store.dispatch)const scopedReducers = scopeReducers(reducers)
```

Copy

### Dev Tools[\#](https://redux.js.org/introduction/ecosystem#dev-tools)

**Debuggers and Viewers\#**

[**reduxjs/redux-devtools**](https://github.com/reduxjs/redux-devtools)

Dan Abramov's original Redux DevTools implementation, built for in-app display of state and time-travel debugging

[**zalmoxisus/redux-devtools-extension**](https://github.com/zalmoxisus/redux-devtools-extension)

Mihail Diordiev's browser extension, which bundles multiple state monitor views and adds integration with the browser's own dev tools

[**infinitered/reactotron**](https://github.com/infinitered/reactotron)

A cross-platform Electron app for inspecting React and React Native apps, including app state, API requests, perf, errors, sagas, and action dispatching.

**DevTools Monitors\#**

[**Log Monitor**](https://github.com/reduxjs/redux-devtools/tree/master/packages/redux-devtools-log-monitor)  
The default monitor for Redux DevTools with a tree view

[**Dock Monitor**](https://github.com/reduxjs/redux-devtools/tree/master/packages/redux-devtools-dock-monitor)  
A resizable and movable dock for Redux DevTools monitors

[**Slider Monitor**](https://github.com/calesce/redux-slider-monitor)  
A custom monitor for Redux DevTools to replay recorded Redux actions

[**Diff Monitor**](https://github.com/whetstone/redux-devtools-diff-monitor)  
A monitor for Redux DevTools that diffs the Redux store mutations between actions

[**Filterable Log Monitor**](https://github.com/bvaughn/redux-devtools-filterable-log-monitor/)  
Filterable tree view monitor for Redux DevTools

[**Filter Actions**](https://github.com/zalmoxisus/redux-devtools-filter-actions)  
Redux DevTools composable monitor with the ability to filter actions

**Logging\#**

[**evgenyrodionov/redux-logger**](https://github.com/evgenyrodionov/redux-logger)  
Logging middleware that shows actions, states, and diffs

[**inakianduaga/redux-state-history**](https://github.com/inakianduaga/redux-state-history)  
Enhancer that provides time-travel and efficient action recording capabilities, including import/export of action logs and action playback.

[**joshwcomeau/redux-vcr**](https://github.com/joshwcomeau/redux-vcr)  
Record and replay user sessions in real-time

[**socialtables/redux-unhandled-action**](https://github.com/socialtables/redux-unhandled-action)  
Warns about actions that produced no state changes in development

**Mutation Detection\#**

[**leoasis/redux-immutable-state-invariant**](https://github.com/leoasis/redux-immutable-state-invariant)  
Middleware that throws an error when you try to mutate your state either inside a dispatch or between dispatches.

[**flexport/mutation-sentinel**](https://github.com/flexport/mutation-sentinel)  
Helps you deeply detect mutations at runtime and enforce immutability in your codebase.

[**mmahalwy/redux-pure-connect**](https://github.com/mmahalwy/redux-pure-connect)  
Check and log whether react-redux's connect method is passed `mapState` functions that create impure props.

### Testing[\#](https://redux.js.org/introduction/ecosystem#testing)

[**arnaudbenard/redux-mock-store**](https://github.com/arnaudbenard/redux-mock-store)  
A mock store that saves dispatched actions in an array for assertions

[**Workable/redux-test-belt**](https://github.com/Workable/redux-test-belt)  
Extends the store API to make it easier assert, isolate, and manipulate the store

[**conorhastings/redux-test-recorder**](https://github.com/conorhastings/redux-test-recorder)  
Middleware to automatically generate reducers tests based on actions in the app

[**wix/redux-testkit**](https://github.com/wix/redux-testkit)  
Complete and opinionated testkit for testing Redux projects \(reducers, selectors, actions, thunks\)

[**jfairbank/redux-saga-test-plan**](https://github.com/jfairbank/redux-saga-test-plan)  
Makes integration and unit testing of sagas a breeze

### Routing[\#](https://redux.js.org/introduction/ecosystem#routing)

[**supasate/connected-react-router**](https://github.com/supasate/connected-react-router) Synchronize React Router 4 state with your Redux store.

[**faceyspacey/redux-first-router**](https://github.com/faceyspacey/redux-first-router)  
Seamless Redux-first routing. Think of your app in states, not routes, not components, while keeping the address bar in sync. Everything is state. Connect your components and just dispatch flux standard actions.

### Forms[\#](https://redux.js.org/introduction/ecosystem#forms)

[**erikras/redux-form**](https://github.com/erikras/redux-form)  
A full-featured library to enable a React HTML form to store its state in Redux.

[**davidkpiano/react-redux-form**](https://github.com/davidkpiano/react-redux-form)  
React Redux Form is a collection of reducer creators and action creators that make implementing even the most complex and custom forms with React and Redux simple and performant.

### Higher-Level Abstractions[\#](https://redux.js.org/introduction/ecosystem#higher-level-abstractions)

[**keajs/kea**](https://github.com/keajs/kea)  
An abstraction over Redux, Redux-Saga and Reselect. Provides a framework for your app’s actions, reducers, selectors and sagas. It empowers Redux, making it as simple to use as setState. It reduces boilerplate and redundancy, while retaining composability.

[**TheComfyChair/redux-scc**](https://github.com/TheComfyChair/redux-scc)  
Takes a defined structure and uses 'behaviors' to create a set of actions, reducer responses and selectors.

[**Bloomca/redux-tiles**](https://github.com/Bloomca/redux-tiles)  
Provides minimal abstraction on top of Redux, to allow easy composability, easy async requests, and sane testability.

### Community Conventions[\#](https://redux.js.org/introduction/ecosystem#community-conventions)

[**Flux Standard Action**](https://github.com/acdlite/flux-standard-action)  
A human-friendly standard for Flux action objects

[**Canonical Reducer Composition**](https://github.com/gajus/canonical-reducer-composition)  
An opinionated standard for nested reducer composition

[**Ducks: Redux Reducer Bundles**](https://github.com/erikras/ducks-modular-redux)  
A proposal for bundling reducers, action types and actions



## Examples

Redux is distributed with a few examples in its [source code](https://github.com/reduxjs/redux/tree/master/examples). Most of these examples are also on [CodeSandbox](https://codesandbox.io/), an online editor that lets you play with the examples online.

### Counter Vanilla[\#](https://redux.js.org/introduction/examples#counter-vanilla)

Run the [Counter Vanilla](https://github.com/reduxjs/redux/tree/master/examples/counter-vanilla) example:

```text
git clone https://github.com/reduxjs/redux.git
cd redux/examples/counter-vanillaopen index.html
```

Copy

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter-vanilla):

It does not require a build system or a view framework and exists to show the raw Redux API used with ES5.

### Counter[\#](https://redux.js.org/introduction/examples#counter)

Run the [Counter](https://github.com/reduxjs/redux/tree/master/examples/counter) example:

```text
git clone https://github.com/reduxjs/redux.git
cd redux/examples/counternpm installnpm start
```

Copy

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter):

This is the most basic example of using Redux together with React. For simplicity, it re-renders the React component manually when the store changes. In real projects, you will likely want to use the highly performant [React Redux](https://github.com/reduxjs/react-redux) bindings instead.

This example includes tests.

### Todos[\#](https://redux.js.org/introduction/examples#todos)

Run the [Todos](https://github.com/reduxjs/redux/tree/master/examples/todos) example:

```text
git clone https://github.com/reduxjs/redux.git
cd redux/examples/todosnpm installnpm start
```

Copy

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos):

This is the best example to get a deeper understanding of how the state updates work together with components in Redux. It shows how reducers can delegate handling actions to other reducers, and how you can use [React Redux](https://github.com/reduxjs/react-redux) to generate container components from your presentational components.

This example includes tests.

### Todos with Undo[\#](https://redux.js.org/introduction/examples#todos-with-undo)

Run the [Todos with Undo](https://github.com/reduxjs/redux/tree/master/examples/todos-with-undo) example:

```text
git clone https://github.com/reduxjs/redux.git
cd redux/examples/todos-with-undonpm installnpm start
```

Copy

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos-with-undo):

{% embed url="https://codesandbox.io/s/adoring-cherry-qyvkw" %}



This is a variation on the previous example. It is almost identical, but additionally shows how wrapping your reducer with [Redux Undo](https://github.com/omnidan/redux-undo) lets you add a Undo/Redo functionality to your app with a few lines of code.

### TodoMVC[\#](https://redux.js.org/introduction/examples#todomvc)

Run the [TodoMVC](https://github.com/reduxjs/redux/tree/master/examples/todomvc) example:

```text
git clone https://github.com/reduxjs/redux.git
cd redux/examples/todomvcnpm installnpm start
```

Copy

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todomvc):

{% embed url="https://codesandbox.io/s/gallant-sun-wx9oc" %}



This is the classical [TodoMVC](http://todomvc.com/) example. It's here for the sake of comparison, but it covers the same points as the Todos example.

This example includes tests.

### Shopping Cart[\#](https://redux.js.org/introduction/examples#shopping-cart)

Run the [Shopping Cart](https://github.com/reduxjs/redux/tree/master/examples/shopping-cart) example:

```text
git clone https://github.com/reduxjs/redux.git
cd redux/examples/shopping-cartnpm installnpm start
```

Copy

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/shopping-cart):

{% embed url="https://codesandbox.io/s/nervous-glitter-4dm0n" %}



This example shows important idiomatic Redux patterns that become important as your app grows. In particular, it shows how to store entities in a normalized way by their IDs, how to compose reducers on several levels, and how to define selectors alongside the reducers so the knowledge about the state shape is encapsulated. It also demonstrates logging with [Redux Logger](https://github.com/fcomb/redux-logger) and conditional dispatching of actions with [Redux Thunk](https://github.com/gaearon/redux-thunk) middleware.

### Tree View[\#](https://redux.js.org/introduction/examples#tree-view)

Run the [Tree View](https://github.com/reduxjs/redux/tree/master/examples/tree-view) example:

```text
git clone https://github.com/reduxjs/redux.git
cd redux/examples/tree-viewnpm installnpm start
```

Copy

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/tree-view):

{% embed url="https://codesandbox.io/s/eloquent-babbage-pd1uu" %}



This example demonstrates rendering a deeply nested tree view and representing its state in a normalized form so it is easy to update from reducers. Good rendering performance is achieved by the container components granularly subscribing only to the tree nodes that they render.

This example includes tests.

### Async[\#](https://redux.js.org/introduction/examples#async)

Run the [Async](https://github.com/reduxjs/redux/tree/master/examples/async) example:

```text
git clone https://github.com/reduxjs/redux.git
cd redux/examples/asyncnpm installnpm start
```

Copy

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/async):



{% embed url="https://codesandbox.io/s/boring-panini-klj2m" %}



This example includes reading from an asynchronous API, fetching data in response to user input, showing loading indicators, caching the response, and invalidating the cache. It uses [Redux Thunk](https://github.com/gaearon/redux-thunk) middleware to encapsulate asynchronous side effects.

### Universal[\#](https://redux.js.org/introduction/examples#universal)

Run the [Universal](https://github.com/reduxjs/redux/tree/master/examples/universal) example:

```text
git clone https://github.com/reduxjs/redux.git
cd redux/examples/universalnpm installnpm start
```

Copy

This is a basic demonstration of [server rendering](https://redux.js.org/usage/server-rendering) with Redux and React. It shows how to prepare the initial store state on the server, and pass it down to the client so the client store can boot up from an existing state.

### Real World[\#](https://redux.js.org/introduction/examples#real-world)

Run the [Real World](https://github.com/reduxjs/redux/tree/master/examples/real-world) example:

```text
git clone https://github.com/reduxjs/redux.git
cd redux/examples/real-worldnpm installnpm start
```

Copy

Or check out the [sandbox](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/real-world):

{% embed url="https://codesandbox.io/s/distracted-mcclintock-fsoqr" %}



This is the most advanced example. It is dense by design. It covers keeping fetched entities in a normalized cache, implementing a custom middleware for API calls, rendering partially loaded data, pagination, caching responses, displaying error messages, and routing. Additionally, it includes Redux DevTools.















































































{% embed url="https://gist.github.com/bgoonz/de925aba1354e27f221a5d55fa08feb2" %}



