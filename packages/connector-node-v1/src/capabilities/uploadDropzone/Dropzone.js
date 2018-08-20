import React, { Component } from 'react';
import { Glyphicon, Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import './Dropzone.css';

export default class DropZone extends Component {
    onDrop(acceptedFiles, rejectedFiles) {
      this.props.getFiles(acceptedFiles, rejectedFiles);
    }
    handHide() {
      this.props.onHide();
    }
    render() {
      var dropzonestyle= {
        width: 300,
        //height: 300,
        borderWidth: 3,
        borderColor: '#5bc0de',
        borderStyle: 'dashed',
        borderRadius: 5,
        margin: "auto"
      };
      return (
        <div className="oc-fm--dialog2">
        <div className="oc-fm--dialog__content2">
          <Dropzone 
            onDrop={this.onDrop.bind(this)}
            multiple
            style={dropzonestyle}
          >
            <div style={{margin: "auto", textAlign: "center"}}>
              <Glyphicon glyph='cloud-upload' style={{color: "#5bc0de", fontSize:"40px", marginTop: "40px"}}/>
                <p style={{marginTop: "20px", fontSize: "20px", color: "#5bc0de"}}>Drag and drop Files </p>
                <Button bsStyle="info" style={{ margin: "5px", fontSize: "20px"}}> or select files </Button>
              </div>
          </Dropzone>

          {/*
          <Button bsStyle="success" style={{alignSelf: 'flex-end', marginTop: '20px'}} onClick={this.handHide.bind(this)}>
            <Glyphicon glyph='remove'/>
          </Button>
          */}

          <div className="oc-fm--dialog__horizontal-group oc-fm--dialog__horizontal-group--to-right">
            <button type="button" className="oc-fm--dialog__button oc-fm--dialog__button--default" onClick={this.handHide.bind(this)}>
              Cancel
            </button>
            <button
              type="button"
              className={`oc-fm--dialog__button oc-fm--dialog__button--primary`}
            >
              Submit
            </button>
          </div>
        </div>
        </div>
      );
    }
  }
  
