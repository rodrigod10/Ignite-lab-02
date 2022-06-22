import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
    query {
      lessons {
        id
        title
      }
    }
  `
interface Lessons {
  id: string,
  title: string,
}
function App() {
const { data } = useQuery<{lessons: Lessons[]}>(GET_LESSONS_QUERY) 
console.log(data)

  return (
   <ul>
    { data?.lessons.map(lessons => {
      
      return <li key={lessons.id}>{lessons.title}</li>
    })
    }
   </ul>
  )
}

export default App
