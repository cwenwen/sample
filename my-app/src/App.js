import logo from './logo.svg';
import './App.css';

import useForm from './hooks/useForm';

function App() {
  const { handleChange, handleSubmit, values, errors } = useForm({
    initialValues: { account: '', password: '', rememberMe: false },
    validation: values => {
      const errors = {};
      if (!values.account) {
        errors.account = '請輸入帳號';
      } else if (!values.password) {
        errors.password = '請輸入密碼';
      }
      return errors;
    },
    onSubmit: values => console.table(values),
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <input
          name="account"
          onChange={handleChange}
          value={values.account}
          placeholder="Account"
        />
        {errors.account && <div>{errors.account}</div>}
        <input
          name="password"
          onChange={handleChange}
          value={values.password}
          placeholder="password"
        />
        {errors.password && <div>{errors.password}</div>}
        <label>
          <input
            type="checkbox"
            name="rememberMe"
            onChange={handleChange}
            checked={values.rememberMe}
          />
          Remember Me
        </label>
        <button onClick={handleSubmit}>Login</button>
      </header>
    </div>
  );
}

export default App;
