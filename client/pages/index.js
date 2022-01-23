
import GetRequest  from '../services/get.service'
import PostRequest,{NeedHeader} from '../services/post.service'


export default function Home() {
  const onButtonClickGet = ()=>{
      GetRequest()
      .then(response=>{
        console.log(response.data);
      })
      .catch(err=>{
        console.log(err);
      })
  }
  const onButtonClickPost = ()=>{
    NeedHeader()
    .then(response=>{
      console.log(response.data);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  return (
    <>
    <button onClick={onButtonClickPost}>CLICK ON ME POST</button>
    <button onClick={onButtonClickGet}>CLICK ON ME GET</button>
    </>
  )
}

