import { Component, type FormEvent } from "react";
import axios from "axios";

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {} as { [k: string]: string },
    index: "",
  };

  componentDidMount(): void {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await axios.get("/api/values/current");
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get("/api/values/all");
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  }

  handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await axios.post("/api/values", { index: this.state.index });
    this.setState({ index: "" });
  };

  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(", ");
  }

  renderValues() {
    return Object.entries(this.state.values).map(([k, v]) => (
      <div key={k}>
        for index of <strong>{k}</strong> calculated <strong>{v}</strong>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="stack">
            <div className="input-field">
              <label htmlFor="indexInput">Enter your index</label>
              <input
                id="indexInput"
                type="text"
                value={this.state.index}
                onChange={(e) => this.setState({ index: e.target.value })}
              />
            </div>
            <button disabled={!this.state.index}>submit</button>
          </div>
        </form>
        <h3>indexes I have seen:</h3>
        {this.renderSeenIndexes()}
        <h3>calculated values:</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export default Fib;
