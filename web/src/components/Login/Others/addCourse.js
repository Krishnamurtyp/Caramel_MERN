import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import './dashboard.css';

class AddCourse extends Component{
    constructor(props)
    {
        super(props)
    }



    render() {
        const user={
            name:"john",
            email:'a@a.c',
        }
      return (
        <div className="admin-dashboard">
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <Link className="navbar-brand" to="/lms/">
            <img src="../../Caramellogo.png" alt="logo" style={{width: '240px', height: '65px', margin: '0px 0px 0px 0px'}} />
          </Link>
          <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
          <ul class="navbar-nav ">
          <li class="nav-item">
        <a class="nav-link" href="/lms/admin/admin_login" style={{fontSize:'2.5em'}}>Logout</a>
      </li>
      </ul>
      </div>
        </nav>
       
        <div className="" style={{fontSize:'2.1em', marginLeft: 100,marginRight:100,marginTop:50, paddingBottom:75}}>
        {/* <a href="#" className="btn btn-dark">Back</a> */}
        <Link to="dashboard"  className="btn btn-dark" params={{user:user}}>Back</Link>
        <form style={{backgroundColor:'white',padding:15}}>
            <div>
                <div class="form-group">
                <label for="title">Course Title*</label>
                <input type="text" className="form-control" id="title" name="title" placeholder="Course Title" required />
                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div class="form-group">
                <label for="desc">Description</label>
                <textarea type="textarea" className="form-control" name="description" id="desc" placeholder="Description" required />
            </div>
            <div class="form-group">
                <label for="modules">Number of Modules</label>
                <input type="text" className="form-control" name="modules" id="modules" placeholder="No of Modules" required />              
            </div>
            <div class="form-group">
                <label for="category">Select Category</label>
                <select  className="form-control" name="category" id="category" placeholder="Select Category" required />
            </div>
            <div class="form-group">
                <label for="subcategory">Select Sub Category</label>
                <select  className="form-control" name="subcategory" id="subcategory" placeholder="Select Category" required />
            </div>
            {/* <button className="btn btn-info form-control" onClick={this.next}>Next</button> */}
            <div class="form-group">
                <label for="exampleFormControlFile1">Upload Image for Course title</label>
                <input type="file" className="form-control-file" id="exampleFormControlFile1" required />
            </div>
            <div class="form-group">
                <label for="exampleFormControlFile1">Upload table of content</label>
                <input type="file" className="form-control-file" id="exampleFormControlFile1" required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="reset" className="btn btn-secondary" style={{marginLeft:10}}>Reset</button>
            </div>
           
            </form>
        </div>
        </div>
      )
    }
}
  export default AddCourse;