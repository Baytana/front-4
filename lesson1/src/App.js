import './App.css';
import Component from './components/component/Component';
import Component2 from "./components/component2/Component2";
import Button from "./components/button/Button";
import Exemple from "./components/Exemple"
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {

    const navbar=['Главная','О нас','Контакты']

  return (
    <div>
        <Header navbar={navbar}/>
        <h1>hello world</h1>
        <Component text={"Component"}/>
        <Component2 text={'Component'}/>
        <Button text={'Delete'}/>
        <Button text={'Add'}/>
        <Button text={'Update'}/>
        <Exemple>
            <p style={{
                color: "green",
                fontSize: "20px"
            }}>
               Aiperi
            </p>
        </Exemple>
        <Footer link={'online.geeks.kg'}/>
    </div>
  );
}

export default App;
