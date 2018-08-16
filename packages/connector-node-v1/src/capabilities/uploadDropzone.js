import React, { Component } from 'react';
import { Glyphicon, Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';

export default class DropZone extends Component {
    onDrop(acceptedFiles, rejectedFiles) {
      this.props.getFiles(acceptedFiles, rejectedFiles);
    }
    render() {
      var dropzonestyle= {
        width: 600,
        height: 300,
        borderWidth: 3,
        borderColor: '#5bc0de',
        borderStyle: 'dashed',
        borderRadius: 5,
        margin: "auto"
      }
      return (
        <section>
          <div>
            <Dropzone 
              onDrop={this.onDrop.bind(this)}
              multiple
              style={dropzonestyle}
            >
              <div style={{margin: "auto", textAlign: "center"}}>
                <Glyphicon glyph='cloud-upload' style={{color: "#5bc0de", fontSize:"40px", marginTop: "60px"}}/>
                  <p style={{marginTop: "20px", fontSize: "20px"}}>Drag and drop Files to Upload </p>
                  <Button bsStyle="info" style={{ marginTop: "5px", fontSize: "20px"}}> or select files to upload </Button>
                </div>
            </Dropzone>
          </div>
        </section>
      );
    }
  }
  
