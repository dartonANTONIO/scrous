import React, { Component } from 'react'
import { Editor as Creator, EditorState } from 'draft-js'

class Editor extends Component {
  constructor(props){
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
    }
    this.onChange = editorState => this.setState({editorState})
  }
  render(){
    return(
      <div className='editor-wrapper'>
        <div className='editor-header'>editor header</div>
        <div className='editor'>
          <Creator editorState={this.state.editorState} onChange={this.onChange}/> 
        </div>
      </div>
    )
  }
}

export default Editor