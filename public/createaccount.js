function CreateAccount(){
  const [show, setShow]             = React.useState(true);
  const [name, setName]             = React.useState('');
  const [email, setEmail]           = React.useState('');
  const [password, setPassword]     = React.useState('');
  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    if (name && email && password) {
      setIsDisabled(false);
    }
  }, [name, email, password]);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function handleCreate(){
    console.log(name,email,password);
    if (!name) return alert('Please enter name');
    if (!validateEmail(email)) return alert('Please enter a valid email');
    if (password.length < 8) return alert('Your password must contain at least 8 characters');
    const url = `/account/create/${name}/${email}/${password}`;
    (async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    })();
    props.setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setIsDisabled(true);
    setShow(true);
  }

  return (
    <Card
      txtcolor="black"
      header="Create Account"
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-info" onClick={handleCreate} disabled={isDisabled}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-info" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}