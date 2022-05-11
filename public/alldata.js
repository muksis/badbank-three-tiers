function AllData(){
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    // fetch all accounts from API
    fetch("/account/all")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);
  console.log(data)

  return (
    <>
      <div className="container d-flex justify-content-center mt-50 mb-50">
        <div className="card w-100">
          <div className="card-header header-elements-inline">
            <h5 className="card-title">All Data in Store</h5>
            <div className="header-elements">
                <div className="list-icons text-muted font-weight-light"> <a className="list-icons-item" data-action="collapse" data-abc="true"><i className="fa fa-minus font-weight-light"></i></a> <a className="list-icons-item" data-action="reload" data-abc="true"><i className="fa fa-refresh"></i></a> <a className="list-icons-item" data-action="remove" data-abc="true"><i className="fa fa-close"></i></a> </div>
            </div>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Balance</th>
            </tr>
            </thead>
            <tbody>
              {data.map((user, index) => {
                return (  
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.balance}</td>
                </tr>)
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
   );
 }
