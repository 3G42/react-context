import { UsuarioContext } from 'common/contexts/Usuario';
import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Router() {
  const [name, setName] = useState("");
  const [saldo, setSaldo] = useState(0);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <UsuarioContext.Provider value={{ name, setName, saldo, setSaldo }}>
            <Login />
          </UsuarioContext.Provider>
        </Route>
        <Route path="/feira">
          <Feira name={name} setName={setName} saldo={saldo} setSaldo={setSaldo} />
        </Route>
        <Route path="/carrinho">
          <Carrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;