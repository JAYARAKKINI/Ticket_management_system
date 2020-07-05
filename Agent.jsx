import React from "react";

const Agent = (props) => {
    const[agentlist, setAgentlist] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:4040/agents')
            .then((res) => res.json())
            .then((data) =>{
                setAgentlist(data);
            })
            .catch((err) => {
                console.log(err);
    });
},[]);

    return (
        <div>
            <table style={{width:"100%",textAlign: "center"}}>
                <tr>
                <th>FIRST_NAME</th>
                    <th>LAST_NAME</th>
                    <th>MOBILE_NO</th>
                    <th>EMAIL_ID</th>
                </tr>
                {agentlist.map((agent, index) => (
                    <tr key={index}>
                        <td>{agent.name.first}</td> 
                        <td>{agent.name.last}</td> 
                        <td>{agent.mobile}</td> 
                        <td>{agent.email}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default Agent;
