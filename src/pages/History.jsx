function History (){
    const history = JSON.prase(localStorage.getItem("history")) || [];
    return(
        <div className="history-container">

            <h1>Booking History</h1>
            {
                history.map((item,index) =>(
                    <div key={index} className="history-card">
                        <h3>{item.movie.name}</h3>
                        <p>Name: {item.name}</p>
                        <p>Date: {item.date}</p>
                        <p>Tickets: {item.tickets}</p>
                        <p>Total: {item.total}</p>

                    </div>
                ))
            }
        </div>
    )
}
export default History;