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
    this._getMovies();
  }
  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      console.log(movie)
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id}/>
    })
    
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi = () => {
    //promise 해당행이 실행되어 결과가 나오지 않으면 다음으로 넘어가지않음
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=like_count')
    .then(tomato => tomato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
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
