import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";

const API_KEY = "d3ab033003c2e546e131f5b45402e3e9";

class App extends Component {
  state = {
    recipes: []
  };
  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=5`
    );
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        {this.state.recipes.map(recipe => {
          return <p key={recipe.recipe_id}> {recipe.title} </p>;
        })}
      </div>
    );
  }
}

export default App;
