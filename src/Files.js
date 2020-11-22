import React, { Component } from 'react';
const axios = require('axios').default;


class File extends Component {

    state = {
        files : [],
    }

    componentDidMount = async() =>{
        const res = await axios.get('http://localhost:3012/allfiles');
        const newFiles = res.data;
        console.log(typeof(newFiles));
        console.log(newFiles);
        this.setState({files : newFiles });
        console.log(this.state.files);
    }

    bytesToSize(bytes) {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
        if (bytes === 0) return 'n/a'
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
        if (i === 0) return `${bytes} ${sizes[i]})`
        return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
      }


    render(){
        const { files } = this.state ;

        return(
            <div style={{display:"flex" , flexWrap :'wrap'}}>
                {files.map((item , key) => {

                    return(

                        <div  
                            style={{height:"200px" ,margin : '25px' , border: "2px solid black" , borderRadius:'20px' , backgroundColor : "bisque"}}>
                            <div >
                                <h5>{key + 1}. Name of File : {item.fileNameOriginal} </h5>
                                <p> Mime Type Of File :-{item.mimeType} </p>
                                <p> Size of File :-{this.bytesToSize(item.fileSize)} </p>
                            </div>
                        </div>
                    )
                }

                )}

            </div>
        )
    }
}

export default File;