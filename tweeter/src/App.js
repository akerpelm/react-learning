import { useState } from 'react';
import './App.css';
import Nav from './Nav';
import ItemPage from './ItemPage';
import { items } from './static-data';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    console.log('tab change', index);
    setActiveTab(index);
  };
  const renderContent = () => {
    switch (activeTab) {
      default:
      case 0:
        return <ItemPage items={items} />;
      case 1:
        return <span>Cart</span>;
    }
  };

  return (
    <div className="app">
      <Nav activeTab={activeTab} onTabChange={handleTabChange} />
      <main className="app-content">{renderContent()}</main>
    </div>
  );
};

export default App;
