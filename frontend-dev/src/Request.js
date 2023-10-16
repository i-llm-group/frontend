import * as React from 'react';
import {Component} from "react";

export class FetchUpload extends Component {
    // TODO: build a generic handler
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }

    upload = () => {
        const data = new FormData();
        data.append('op', '\x00')
        data.append('ts', '\x00\x00\x00')
        data.append('payload', this.fileInput.current.files[0]);
        let res = '';
        let ft = async () => {
            const response = await fetch('http://127.0.0.1:825/file/upload', {
                method: 'POST',
                body: data
            });
            const response_data = await response.text();
            console.log(response_data);
            return response_data;
        };
        return ft();
    };

    render() {
        return (
            <div>
                <input type="file" name='file' ref={this.fileInput}/>
                <input type="button" value="Upload" onClick={this.upload}/>
            </div>
        )
    }
}