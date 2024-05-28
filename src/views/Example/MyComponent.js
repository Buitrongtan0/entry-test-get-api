import React from "react";

class MyComponet extends React.Component{

    state = {
        name: 'tan',
        channel: 'tanbeli',
    }
    // handleOnchangeName = (event) => {
    //     this.setState({
    //         name : event.taget.value
    //     })
    // }
    handleClickButton=()=>{
        alert(`alo `)
    }
    render() {
        return (
            <>
                <div className=" lastname">
                    {/* <input value={this.state.name} type="text" onChange={(event) => this.handleOnchangeName(event)} /> */}
                    my name is {this.state.name}
                </div>
                <div className="second">
                my channel is {this.state.channel}
                </div> 
                <div className=" third">
                     <button onClick={()=> this.handleClickButton()}>on click</button>
                </div>
            </>
        )
    }
}
export default MyComponet;
