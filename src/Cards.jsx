const Cards = ({plan_title,plan_info,plan_amount,plan_btn,plan_features_list}) =>{
    return (
        <div className="subscription-cards">
            <h1 className="plan-heading">{plan_title}</h1>
            <p className="plan-desc">{plan_info}</p>
            <h2 className="plan-amount">{plan_amount}<span className="symbol">$</span></h2>
            <button className="plan-btn">{plan_btn}</button>
            <ul>
                {plan_features_list.map((feature)=>(
                    <li>{feature}</li>
                ))}
                
            </ul>
        </div>
    )
}

export default Cards;