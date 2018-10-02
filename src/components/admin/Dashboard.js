import React, { Component } from 'react'

export default class Dashboard extends Component {
  styles = {
    studentRow : {
      border: '1px solid #cccccc'
    }
  }

  render() {
    return (
      <div>
        <div className="container pt-3">
          <div className="row">
            <div className="col-md-6 text-center">
              <h3>Student List</h3>
              <div className="table-responsive mt-5">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>shiv shankar</td>
                      <td><a href="#">view</a></td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Vishal Sharma</td>
                      <td><a href="#">view</a></td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Rahul Kumar</td>
                      <td><a href="#">view</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className="btn btn-danger mt-5" data-toggle="modal" data-target="#myModal">Add Student</button>
            </div>
            <div className="col-md-6 text-center">
              <h3>Student Detail</h3>
              <div className="row mt-5">
                <div className="col-md-6">
                <img className="img img-responsive img-thumbnail" src="https://lh3.googleusercontent.com/cAHdTxrS4HoSuwKt0hzn8L6xbz-ZW9t7tOtsYztvuC4Z00kUVNo6y83smCcaPtgPV8WYkcGOJOamN5kbu5H3sYQ0LOm_MNvubfUmCXrObmWD0Q2sdNtYCn1NdpuJU9lZ2xyT4l5uYAbFEz-zEId6tt_23zkS5Ak-ojtVIAapAhq_kfaa4RWhU0zwTohk6fOM0EsbxNk9vXwCAW1q6384V0gMa1IZ_FeFHW1D6FdD6gvqmGIOf19pmFnfL2tP2g73R3tVvuxa4d-ImyqIb1PWFQ5uxmbdOYnl-uo6MKD0VcuGWxOXLwsKtvrAbLDb3vRzcW4cccifJxumbdjQiMy0CzvOTTMjg8zNykDmki_KGd9_K5LTD3puUulDe2WQBoeRmaH0PHXQAavd-XHPa9X0me60nx8fUN_Fl5vc3O4f2Is3Ecc67hknE5Tma06rZdBdxSXYEfJyBfUv1FholcY14RMgoiYlij6s7oSKN6-zTfn8G1tKeHtw73WP_dBZvqTtWy8crU9NJGlkfx-W3Q0ziIt_hmU0lMzggS-900Evbv-njc4n147KkyiWavHB5qIODNwp26_fy3ObRPacG4NxWQyq-j2beW2yfdpFqWcrDLJ4Zfi67SAawvTVpSLgHhE=w493-h657-no" height="200px"></img>
                </div>
                <div className="col-md-6 text-left">
                  <p><strong>Name:</strong> Shiv Shankar Sharma</p>
                  <p><strong>Class:</strong> BCA Ist</p>
                  <p><strong>Enroll No:</strong> 123456789</p>
                  <p><strong>Docs Issued:</strong> True</p>
                  <p className="mt-5"><button class="btn btn-info">Upload Document</button></p>
                </div>
              </div>
              
              
              
            </div>
          </div>
        </div>

        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add Student</h4>
              </div>
              <div className="modal-body">
                <div className="container">
                <form>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                              placeholder="Name" />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputPassword1">Class</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Class" />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputPassword1">Enroll Number</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enroll Number" />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputPassword1">Image</label>
                        <br />
                        <input type="file" />
                    </div>
                </form>
                </div>
                
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-info">Save</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
