import { Container } from 'unstated';

interface CounterState {
    amount: number,
    count: number
};

// Simple Counter Container for inc/dec count
// export default class CounterContainer extends Container<CounterState> {
//     state = { count: 0 }

//     // Create methods to be used by Subscribers
//     increment = async () => {
//         await this.setState({ count: this.state.count + 1});
//         console.log("Increment state = " + this.state.count);
//     };

//     decrement = async () => {
//         await this.setState({ count: this.state.count - 1});
//         console.log("Decrement state = " + this.state.count);
//     }
// }

// Passing options into the container use Provider injector
/*
export default class CounterContainer extends Container<CounterState> {
    constructor(props = {}) {
      super();
      this.state = {
        amount: props.initialAmount || 1,
        count: 0
      };
    }
  
    increment = () => {
      this.setState({ count: this.state.count + this.state.amount });
    };
  }
  
  let counter = new CounterContainer({
    initialAmount: 5
  });
  
  render(
    <Provider inject={[counter]}>
      <Counter />
    </Provider>
  );
  */