import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo, {  } from "./components/create-todo.component";
import EditTodo, {  } from "./components/edit-todo.component";
import TodosList, {  } from "./components/todos-list.component";
import logo from './logo.svg';
import './App.css';
import Utang from './Utang'; // import file Utang.js
// import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="container">
          {/* <ProductPhoto /> */}
          {/* <ProductInfo category="Lebaran" name="Adidas" isDisc="yes" /> */}
          {/* munculkan komponen utang disini */}
          <Utang />
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="localhost:3000" target="">
              <img src={logo} width="30" alt="andijaya" />
            </a>
            <Link to="/" className="navbar-brand"></Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          halo apa kabar?
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <p>created & developed by andijaya</p>
        </div>
      </Router>
    );
  }
}
// function CheckDisc(props) {
//   const {isDisc, discount} = props
//   if (isDisc === "yes") {
//   return <p>Discount {discount}% Off</p>;
//   } else if (isDisc === "coming") {
//   return <p>akan ada discount</p>;
//   } else {
//   return <p>Belom ada discount</p>;
//   }
// }
// function ProductPhoto() {
//   return (
//     <div className="Photo">
//       <img src="sepatu.jpg" alt="sepatu" />
//     </div>
//   )
// }
// function ProductInfo(props) {
//   const {category, name, isDisc} = props
//   const benefit = ['tidak kusut kena air', 'bahan lebih halus', 'tidak gerah']
//   const listBenefits = benefit.map((itemBenefit) => 
//     <li key={itemBenefit}>{itemBenefit}</li>
//   )
//   const price = 120000
//   return (
//     <div>
//       <div className="Desc">
//         <p className="Cate">{category}</p>
//         <h1 className="Title">{name}</h1>
//         <p className="Price">{price}</p>
//         <CheckDisc isDisc={isDisc} discount={50} />
//         <p className="Info">description</p>
//         <ul>{listBenefits}</ul>
//         <a onClick={(e) => CartAdd(name, e)} href="localhost:3000">
//           Add to Cart
//         </a>
//       </div>
//     </div>
//   );
// }
// function CartAdd(e) {
//   console.log('beli '+e)
// }
// CheckDisc.PropTypes = {
//   discount: PropTypes.string.isRequired
// }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
