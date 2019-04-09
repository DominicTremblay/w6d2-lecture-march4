# Lecture W6D2

- clone this current repo for the client
- clone this repo for the backend:
  - [backend repo](https://github.com/DominicTremblay/w3d4-lecture-march4)
- you have to run both client and backend

  - `npm install` in the current folder for the client
  - `npm install` in the backend-server folder for the backend
  - run `npm start` in 2 different terminals for both servers.
  - client runs on port 3000 and server runs on port 8000.
  - backend runs with a connection to mongoDB, so you need to create `movieQuotes` db in mongo.

## Topics Covered

- React Boilerplate vs create react app
- React Component State & Props
- Data Flow React
- Component Lifecycle Methods
- Handling User Action Events

## React Boiler Plate

- [React Simple Boilerplate](https://github.com/lighthouse-labs/react-simple-boilerplate)
- [Create React App](https://github.com/facebook/create-react-app)

## React Component State & Props

### Things to keep in mind for the state

#### setState is Async

setState might not immediately update the state. It needs to go over these steps:

1. React will merge the object you passed to setState with the current state
2. React will do a comparison of the old state and the new state
3. Figure out what did change
4. Update the DOM

setState can have a callback function:

```
  this.setState({foo: bar}, ()=> {console.log(this.state)})
```

#### Batching

Multiple setState will be batched by React for performance reason.

When doing this:

```
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
```

1. To increase the performance React will merge the objects together and will perform one state update.
2. When merging objects, entries with the same keys are overwritten

The counter will increased only by 1, instead of 3

Usually, you pass an object to setState to update the state. But you can pass it a function instead:

```
    this.setState(state => ({ counter: state.counter + 1 }));
    this.setState(state => ({ counter: state.counter + 1 }));
    this.setState(state => ({ counter: state.counter + 1 }));
```

### React Constructor

- You don't need to explicitly have a constructor. Babel will transpile your code and add a constructor for you.

### Class vs Stateless Components

- If your component doesn't need to maintain any state, you should use a stateless component. It's cleaner and you don't need to mess around with `this`.
- Do use a class whenever your component needs to manage the state.

## Dataflow in React

** Data down, actions up **

- Data flow in React is unidirectional
- Data is passed down from a parent component to a child component
- When the state is manage in the parent component this.setState needs to be executed in the parent
- A child component can execute a function in the parent through props

### Function Binding in ReactJS

We have few ways to bind functions in ReactJS. The most usual ones are these 2:

1. Bind functions in the constructor
2. Use Arrow functions as class properties

#### Binding functions in the constructor

```
class someClass extends Component {
  constructor(props) {
    super(props);
    this.someFunction = this.someFunction.bind(this);
  }

  someFunction() {

  }
}
```

#### Arrow Functions

- Arrow functions do not rebind `this`. The arrow function inherits the `this` binding of the class instance
- It is easier and cleaner to use. However, we must be aware of a few differences

```
  class someClass extends Component {
    constructor(props) {
      super(props);
    }

    someFunction = () => {

    }
  }
```

## Key Differences Between Bound and Arrow Functions

- Arrow functions won't be added to the prototype (no inheritance, cannot call super)
- Arrow functions are not as performant as bound functions. However, this is not noticeable in most app
- Arrow functions has a impact on memory. You should care about this only if you're creating multiple instances.

## Component Methods LifeCycle

Each React component has a lifecycle when:

- It's first created
- The UI needs to be rendered
- The UI needs to be updated
- It's done

We can control what happens at each of these lifecycle events:

### Component Creation

1. Constructor
2. ComponentWillMount() (\*Deprecated)
3. ComponentDidMount()

- [Component Creation](./component_creation.png)

### Component Re-rendering Because of an Update

1. ComponentWillReceiveProps (\* Replace with getDerivedStateFromProps)
2. ShouldComponentUpdate()
3. ComponentWillUpdate() (\* Deprecated)
4. ComponentDidUpdate()

- [Updated Lifecycle](./react-component-lifecycle-methods-diagram.png)

### Cleanup

- ComponentWillUnmount()

### Updated LifeCycle

- [Lifecycle Events Updated](./lifecycle.jpeg)

** Ajax calls should generally be placed in ComponentDidMount() **

[Play with the Lifecycle Simulator](https://reactarmory.com/guides/lifecycle-simulators)

## References

1.[React Components – Props and States in ReactJS with Examples](https://www.edureka.co/blog/react-components/)

2.[Beware: React setState is asynchronous!](https://medium.com/@wereHamster/beware-react-setstate-is-asynchronous-ce87ef1a9cf3)

3.[Functional setState is the future of React](https://medium.freecodecamp.org/functional-setstate-is-the-future-of-react-374f30401b6b)

4.[Understanding React — React 16.3 + Component life-cycle](https://medium.com/@baphemot/understanding-react-react-16-3-component-life-cycle-23129bc7a705)

5.[Understanding React — Component life-cycle](Understanding React — Component life-cycle)

6.[React Component Lifecycle Methods from v16.3 with example](https://grokonez.com/frontend/react/react-component-lifecycle-methods-from-v16-3-react-lifecycle-example#static_getDerivedStateFromProps)
