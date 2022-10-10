import React from "react";


interface Props {
    text: string
}

interface State {
    text: string
    counter: number
}

const countries = [
    'Italy',
    'Spain',
    'France',
]
  
class HelloCountry extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = {
        text: this.props.text,
        counter: 0,
      };
    }
  
    componentDidMount() {
        console.log(`Hello ${this.state.text}`)
    }
    
    componentDidUpdate() {
        console.log(`Hello again ${this.state.text}`)
    }

    componentWillUnmount(): void {
        console.log(`Goodbye ${this.state.text}`)
    }

    private onClick = () => {
        const maxCountries = countries.length - 1
        const cc = this.state.counter > maxCountries - 1 ? 0 : this.state.counter + 1;
        this.setState({text: countries[cc], counter: cc})
    }

  
    render() {
      return (
        <div>
          <p>Hello {this.state.text}</p>
          <button onClick={this.onClick}>
            Click me
          </button>
        </div>
      );
    }
  }

  export default HelloCountry