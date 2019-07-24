import React, {Component } from 'react';
import './App.css';
import Movie from './Movie';


//컴포넌트는 많은 functions를 가지고 있고 그것들이 순서대로 자동으로 작동한다.
class App extends Component {

  //Render의 경우 : componentWillMount -- > render -- > componentDidMount
  //컴포넌트가 존재함과 동시에 3위 3가지 요소가 연속적으로 실행된다.

  //Update componentWillReceiveProps -- > shouldComponentUpdate (기존것과 비교연산하여 다름이 있으면 return true) -- > componentWillUpdate -- > render -- > componentDidUpdate
  

  componentWillMount(){
    //사이클이 시작되었음을 알 수 있는 부분
    console.log('will mount');
  }

  componentDidMount(){
    //성공적으로 리액트 세계에 컴포넌트가 자리잡았음을 알게됨
    console.log('did mount');
  }

  state = {}

  componentDidMount(){
    console.log(fetch('https://yts.lt/api/v2/list_movies.json?sort_bu=rating'));
  }
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies
  }

  render() {
    //컴포넌트가 리액트 세계에 존재하게 되었음을 알게됨
    console.log('did render');
    return (
      <div className="App">
         {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}
export default App;
