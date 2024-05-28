import axios from "axios";
import React from "react";
class GetApi extends React.Component{
    
    state ={
        listdata: []
    }

    async componentDidMount() {
        let res = await axios.get("https://reqres.in/api/users?page=2")
        console.log(res.data.data)
        this.setState({
            listdata: res && res.data && res.data.data ? res.data.data : []
        })
    }
    render() {
       console.log(this.state.listdata)
        return (
            <>
            <div >
                list data lấy từ api : https://reqres.in/api/users?page=2
            </div>
            <div>
                    {this.state.listdata && this.state.listdata.length > 0 && this.state.listdata.map((item, index) => {
                        return (
                            <>
                                <div key={item.id}>
                                    {index+1}- {item.email} -{item.first_name}- {item.first_name} 
                                </div>
                            </>
                        )
                    })
                    }        
            </div>
            </>
        )
    }
}
export default GetApi;