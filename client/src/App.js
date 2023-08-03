import { react, useState } from 'react';

function App() {
  const [form, setform] = useState({
    amount: '',
    description: '',
    date: '',
  });
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/transaction', {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json", 
      },
    });
    const data = await res.json();
    console.log(data);
  };
  function handleInput(e) {
    setform({ ...form, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='number' value={form.amount} name='amount' onChange={handleInput} placeholder='Enter the amount' />
        <input type='text' value={form.description} name='description' onChange={handleInput} placeholder='Enter the desciption' />
        <input type='date' value={form.date} name='date' onChange={handleInput} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
