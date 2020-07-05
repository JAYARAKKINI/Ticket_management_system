import React from 'react';

class Ticket extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ticketlist: [],
      contactlist: [],
      agentlist: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:4040/tickets')
      .then(res => res.json())
      .then(data => {
        this.setState({ ticketlist: data })
        return fetch('http://localhost:4040/contacts')
      })
      .then(res => res.json())
      .then(data => {
        this.setState({ contactlist: data })
        return fetch('http://localhost:4040/agents')
      })
      .then(res => res.json())
      .then(data => {
        this.setState({ agentlist: data })
      })
      .catch(err => {
        console.log(err)
      })
  }
  getName = (arr, id) => {
    let name = arr.find(data => data.id === id)
    console.log(arr, id, name)
    if (name === undefined) return ''
    return name.name.first + ' ' + name.name.last
  }

  render () {
    return (
      <div>
        <table style={{ width: '100%', textAlign: 'center' }}>
          <tr>
            <th>ID</th>
            <th>SUBJECT</th>
            <th>DESCRIPTION</th>
            <th>CONTACT</th>
            <th>AGENT</th>
          </tr>
          {this.state.ticketlist.map((ticket, index) => (
            <tr key={index}>
              <td>{ticket.id}</td>
              <td>{ticket.subject} </td>
              <td>{ticket.description} </td>
              <td>{this.getName(this.state.contactlist, ticket.contactid)}</td>
              <td>{this.getName(this.state.agentlist, ticket.agentId)}</td>
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

export default Ticket
