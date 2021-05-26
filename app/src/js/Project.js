import React, { Component } from 'react';
import '../css/Project.css';


// Renders Project Cards with Collapse Functionality
// Takes name, languages, description, and link as prop arguments
class Project extends Component {

    collapseLink = '#' + this.props.name.replace(/\s/g , "-").toLowerCase();
    collapseId = this.collapseLink.substring(1);

    collapsed = true;
    
    constructor(props) {
        super(props);

            this.state = {collapsed: true};
            this.updateArrow = this.updateArrow.bind(this);
      }

    linkFunction() {
        if (this.props.link != '-1') {
            return <a href={this.props.link} target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-outline-dark">{this.props.link}</button></a>
        }
        else {
            return (null);
        }
    }

    linkPadding() {
        if (this.props.link != '-1') {
            return "card card-body";
        }
        else {
            return "card card-body pb-0";
        }
    }

    updateArrow() {
        this.setState(prevState => ({
            collapsed: !prevState.collapsed
        }));
    }

    render() {
        return(
            <div class="row mt-2 m-2">
                <div class="card bg-light">
                    <div class="card-body row">
                        <div class="row"  data-bs-toggle="collapse" onClick={this.updateArrow} href={this.collapseLink} aria-expanded="true">
                            <div class="col-11 col-sm-10 col-md-11 col-lg-11">
                                <p>
                                    <a class="align-items-center text-dark text-decoration-none">
                                        <span class="fs-4">{this.props.name}</span><p>- {this.props.languages}</p>
                                    </a>
                                </p>
                            </div>
                            <div class="col-1 align-self-center" data-bs-toggle="collapse" href={this.collapseLink} aria-expanded="true">
                                {this.state.collapsed && (<i class="bi bi-caret-down fs-1"></i>)}
                                {!this.state.collapsed && (<i class="bi bi-caret-up fs-1"></i>)}
                            </div>
                        </div>
                        
                        <div class="collapse" id={this.collapseId}>
                            <div class={this.linkPadding()}>
                                <p>
                                    {this.props.description}
                                </p>
                                {this.linkFunction()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;