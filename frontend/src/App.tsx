import 'normalize.css';
import './styles/App.scss';
import Layout from "./components /layout/Layout";
import DashBoard from "./modules/DashBoard/DashBoard";

function App() {

    return (
        <div className="App">
            <Layout>
                <DashBoard/>
            </Layout>
        </div>
    );
}

export default App;
