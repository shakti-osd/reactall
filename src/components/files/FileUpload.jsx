import React, { Component } from 'react'


class FileUpload extends Component {
    constructor(props){
        super(props)

        this.state = {
            selectedFile: null
        }
    }

    changeHandler = (event) => {
        console.log(event.target.files[0])
        this.setState({selectedFile:event.target.files[0]})
    }

    uploadHandler = () => {

    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.changeHandler} />
                <button onClick={this.uploadHandler}>Upload</button>
            </div>
        )
    }
}

export default FileUpload
