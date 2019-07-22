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

  state = {
    greeting: 'Hello',
    movies: [
      {
        title: "Matrix",
        poster: "https://t1.daumcdn.net/movie/e49c2e4eb419a9813228b5ab6bc5b039362236ea"
      },
      {
        title: "SpinderMan",
        poster: "http://www.globalnewsagency.kr/news/photo/201707/74799_65143_4158.jpg"
      },
      {
        title: "Full Metal Jacket",
        poster: "https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
      },
      {
        title: "Oldboy",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
      },
      {
        title: "Star wars",
        poster: "https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200"
      }
    ]
  }

  componentDidMount(){
    //setTimeout(() =>{
      this.setState({
        greeting: 'something'
      })
    //},5000)
    setTimeout(() => {
      this.setState({
        movies: [
          //this.state.movies,가 없으면 하위에 있는 1개의 영화가 state전체를 대체한다.
          //응용해서 무한 스크롤 기능을 만들수있다.
          
          {
            title:"인피니터워",
            poster:"https://w.namu.la/s/c1d766b55e72adfc2c2cad9c5637dc20b64bb32812b69163670a15b505741b5332bf93bcdaa4525871870941c956ea2fb876b8dcd57e2ed99a813cf1f4c631f07258bbd70bc70baca86cbfdeb7569a00d269ce39b50d58cf29b6ec65e3684eca"
          },
          ...this.state.movies
        ]
      })
    }, 5000)
  }

  render() {
    //컴포넌트가 리액트 세계에 존재하게 되었음을 알게됨
    console.log('did render');
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}></Movie>
        })}
      </div>
    );
  }
}
export default App;
