const useEffect = React.useEffect;

function Deposit(){
  const [show, setShow]             = React.useState(true);
  const [deposit, setDeposit]       = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(true);
  const ctx = React.useContext(UserContext); 

  React.useEffect(() => {
    if (deposit) {
      setIsDisabled(false);
    }
  }, [deposit]);
    
  function handleDeposit() {
      if (isNaN(+deposit)) return alert('Please enter numerical values only');
      if (+deposit < 0) return alert('Please enter a positive number');
      ctx.users[0].balance += +deposit;
      setShow(false);
  }

  function clearForm() {
    setDeposit('');
    setIsDisabled(true);
    setShow(true);
  }

  return (
    <Card 
    bgcolor="info"
    header="Deposit"
    body={show ? (
      <>
        <p>Balance: {ctx.users[0].balance}</p>
        <p>Deposit amount:</p>
        <input type="text" className="form-control" id="deposit" placeholder="Enter deposit amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
        <button type="submit" className="btn btn-light" onClick={handleDeposit} disabled={isDisabled}>Submit</button>
      </>
    ) : (
      <>
        <h5>Amount deposited</h5>
        <p>Balance: {ctx.users[0].balance}</p>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Deposit more money</button>
      </>
    )
    }
    />
  )
}
