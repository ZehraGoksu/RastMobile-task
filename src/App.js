import 'devextreme/dist/css/dx.light.css';
import 'devextreme/dist/css/dx.light.css'; 
import Layout from './Layout'
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Layout> 
       {/* Layout içerisinde eklenecek içerik sayfaları belirtilir. */} 
        <Content/>
      </Layout>
    </div>
  );
}

export default App;
