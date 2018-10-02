import React, { Component } from 'react'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-6 ">
              <h3 className="text-center">Your Details</h3>
              <div className="card" style={{width: '80%', margin: '0 auto'}}>
                <img className="card-img-top" style={{height: '400px'}} src="https://lh3.googleusercontent.com/cAHdTxrS4HoSuwKt0hzn8L6xbz-ZW9t7tOtsYztvuC4Z00kUVNo6y83smCcaPtgPV8WYkcGOJOamN5kbu5H3sYQ0LOm_MNvubfUmCXrObmWD0Q2sdNtYCn1NdpuJU9lZ2xyT4l5uYAbFEz-zEId6tt_23zkS5Ak-ojtVIAapAhq_kfaa4RWhU0zwTohk6fOM0EsbxNk9vXwCAW1q6384V0gMa1IZ_FeFHW1D6FdD6gvqmGIOf19pmFnfL2tP2g73R3tVvuxa4d-ImyqIb1PWFQ5uxmbdOYnl-uo6MKD0VcuGWxOXLwsKtvrAbLDb3vRzcW4cccifJxumbdjQiMy0CzvOTTMjg8zNykDmki_KGd9_K5LTD3puUulDe2WQBoeRmaH0PHXQAavd-XHPa9X0me60nx8fUN_Fl5vc3O4f2Is3Ecc67hknE5Tma06rZdBdxSXYEfJyBfUv1FholcY14RMgoiYlij6s7oSKN6-zTfn8G1tKeHtw73WP_dBZvqTtWy8crU9NJGlkfx-W3Q0ziIt_hmU0lMzggS-900Evbv-njc4n147KkyiWavHB5qIODNwp26_fy3ObRPacG4NxWQyq-j2beW2yfdpFqWcrDLJ4Zfi67SAawvTVpSLgHhE=w493-h657-no" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Shiv Shankar Sharma</h5>
                  <p className="card-text"><strong>Class:</strong> BCA Ist</p>
                  <p className="card-text"><strong>Enroll No:</strong> 123456789</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="text-center">Your Documents</h3>
              <div className="table">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Sl.No</th>
                      <th>Doc Name</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Semister Doc</td>
                      <td><a href="#">Download</a></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Scollorship</td>
                      <td><a href="#">Download</a></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Result</td>
                      <td><a href="#">Download</a></td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
