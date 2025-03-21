const Button = ({value,name,age,sec,location})=>{
    return(
        <div className="btn">
            <button>{value}</button>
            <h1>{name}</h1>     
            <h1>{age}</h1>   
            <h1>{sec}</h1>   
            <h1>{location}</h1>    
    </div>
    )
}
export default Button