import Button from "./Button"
import Cards from "./Cards"
import './App.css'
import Table from "./Table"
import UseState from "./UseState"
import Shop from "./Pages/Shop"
import Reducer from "./Reducer"
import { useDispatch, useSelector } from "react-redux"
import { formDisplay, textCountDisplay } from "./slice/slice"
import { BrowserRouter } from "react-router-dom"



const App = ()=>{
  const btnValues = ["Click","Delete","Update","Login"]

  const students = {
    name:"ccdss",
    age:20,
    sec:"HSC",
    location:"CBE"
  }

  const pricing =  [
      {
        plan_title : "Basic",
        plan_info : "for Basic Users",
        plan_amount : 0,
        plan_btn : "Get Started",
        plan_features : ["free for one user",'14 days free trial','10 request per day']
      },
      {
        plan_title : "Premium",
        plan_info : "for Premium Users",
        plan_amount : 49,
        plan_btn : "Best Deal",
        plan_features : ["free for 10 user",'Limited features','100 request per day']
      },
      {
        plan_title : "Business",
        plan_info : "for Busines Users",
        plan_amount : 99,
        plan_btn : "Let's talk",
        plan_features : ["free for 20 user",'Unlimited features','500 request per day']
      },
    ]

    const userText = useSelector((state)=> state.slicestore.inputvalue);
    const textCount = useSelector((state)=>state.slicestore.textCount);
    const dispatch = useDispatch();
    const textChange = (e)=>{
      const output = e.target.value;
      dispatch(formDisplay(output));
      dispatch(textCountDisplay(output.length));
    }
  
  return (
    <BrowserRouter>
    <div className="App">
      {btnValues.map((item)=>(
      <Button value = {item}/>))}
      
      <Button name = {students.name} age = {students.age}/>

      <div className="pricing-detail-main">
        <h1 className="pricing-detail-label">Choose Your Plan</h1>
        <p className="pricing-detail-desc">We've a lot of plans that perfect for you..</p>
        <div className="subscription-card">
          {pricing.map((x)=>(
            <Cards 
              plan_title = {x.plan_title} 
              plan_info = {x.plan_info}
              plan_amount = {x.plan_amount}
              plan_btn = {x.plan_btn}
              plan_features_list = {x.plan_features} />
              ))}
        </div>
      </div>

      <UseState /> 

      <Table />

      <Shop />

      <div className="ReducerMethod">
        <Reducer />
      </div>

      <div className="ReduxMethod">
        <input type="text" onChange={textChange}></input>
        <p>{userText}</p>
        <p>Text Count is: {textCount}</p>
      </div>
      

      
    </div>
    </BrowserRouter>
  )
}
export default App

// rafce