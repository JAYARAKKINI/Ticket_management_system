import React from "react";

const Contact = (props) => {
    const[contactlist, setContactlist] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:4040/contacts')
            .then((res) => res.json())
            .then((data) =>{
                setContactlist(data);
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
                {contactlist.map((contact, index) => (
                    <tr key={index}>
                        <td>{contact.name.first}</td>
                        <td>{contact.name.last}</td> <td>{contact.mobile}</td> <td>{contact.email}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default Contact;
