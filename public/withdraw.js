const useEffect = React.useEffect;

function Withdraw(){
  const [show, setShow]             = React.useState(true);
  const [withdraw, setWithdraw]     = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(true);
  const ctx = React.useContext(UserContext); 
  
  React.useEffect(() => {
    if (withdraw) {
      setIsDisabled(false);
    }
  }, [withdraw]);

  function handleWithdraw() {
    if (isNaN(+withdraw)) return alert('Please enter numerical values only');
    if (+withdraw < 0) return alert('Please enter a positive number');
    if (+withdraw > ctx.users[0].balance) return alert('Transaction failed');
    ctx.users[0].balance -= +withdraw;
    setShow(false);
  }

  function clearForm() {
    setWithdraw('');
    setIsDisabled(false);
    setShow(true);
  }

  return (
    <Card 
    bgcolor="info"
    header="Withdraw"
    body={show ? (
      <>
        <p>Balance: {ctx.users[0].balance}</p>
        <p>Withdraw amount:</p>
        <input type="text" className="form-control" id="withdraw" placeholder="Enter withdraw amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
        <button type="submit" className="btn btn-light" onClick={handleWithdraw} disabled={isDisabled}>Submit</button>
      </>
    ) : (
      <>
        <h5>Amount withdrawn</h5>
        <p>Balance: {ctx.users[0].balance}</p>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Withdraw more money</button>
      </>
    )}
    />
  )
}
