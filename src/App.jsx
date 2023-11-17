import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function App() {
  const [checkboxValue, setCheckboxValue] = useState([
    { id: 1, value: true },
    { id: 2, value: false },
    { id: 3, value: true },
    { id: 4, value: false },
  ]);

  const toggleCheckbox = (id) => {
    const updatedData = checkboxValue.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          value: !item.value,
        };
      }
      return item;
    });
    setCheckboxValue(updatedData);
  };

  const handleDelete = () => {
    const updatedData = checkboxValue.filter((item) => !item.value);
    setCheckboxValue(updatedData);
  };

  return (
    <>
      <div className='app'>
        <h2>checkbox</h2>
        {checkboxValue.map((checkbox) => (
          <div key={checkbox.id}>
            <input
              type='checkbox'
              checked={checkbox.value}
              onChange={() => toggleCheckbox(checkbox.id)}
            />
            <label>{` Checkbox ${checkbox.id}: ${checkbox.value ? 'Checked' : 'Unchecked'}`}</label>
          </div>
        ))}
        <button onClick={handleDelete}>Delete Checked</button>
      </div>
    </>
  );
}

export default App;
