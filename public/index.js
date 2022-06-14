function Spa() {
  return (
    <BrowserRouter>
      <NavBar/>
      <UserContext.Provider>
        <div className="container" style={{padding: "20px"}}>
          
          <Route path="/" exact component={Home} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/deposit" component={Deposit} />
          <Route path="/withdraw" component={Withdraw} />
          <Route path="/alldata" component={AllData} />
        </div>
      </UserContext.Provider>      
    </BrowserRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
