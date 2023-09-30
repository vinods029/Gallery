import { Route,Routes} from 'react-router-dom'
import './App.css'
import PhotoDetails from './Components/PhotoDetails/PhotoDetails';
import PhotoList from './Components/PhotosList/PhotoList';

function App() {


  return (
    <Routes>
    <Route path='/' element={ <PhotoList/>}/>
    <Route path='/photos/:id' element={<PhotoDetails/>}/>
    <Route path="*" element={<img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1696086346~exp=1696086946~hmac=908a5d65f683e3819394ca7437d0761f7ffeec613bf7ca6731183d1cf42b07d5"/>}/>
    </Routes>
    

    

  )
}

export default App;
