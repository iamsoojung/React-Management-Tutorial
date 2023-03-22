import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '조혜원',
  'birthday': '961222',
  'gender': '남자',
  'job': '건물주'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/any',
  'name': '이예지',
  'birthday': '000601',
  'gender': '여자',
  'job': '현모양처'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/any',
  'name': '김수정',
  'birthday': '011211',
  'gender': '여자',
  'job': '대학생'
}
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
          <Customer
            key={c.id}  
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
          );
        })
      }
    </div>
  );
}

export default App;
