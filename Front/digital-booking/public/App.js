import React, { Component } from 'react'
export default class AxiosComponent extends Component {
constructor() {

1

super();
this.state = {
data: null,
loading: true,
error: null
}};
componentDidMount() {
fetch('http://localhost:8080/api/')
.then((response) => response.json())
.then((data) => console.log("Fetch Data:",data))
.catch((error) => {
this.setState({error:error})
})
.finally(() => this.setState({loading: false}))

}
render() {
if(this.state.error) return "Error!";
return this.state.loading ? <p>Loading...</p> : <p>fetch</p>
}
}