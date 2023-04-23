import Header from "./Header";
import FoodList from "./FoodList";
import AlertMessage from "./AlertMessage";
function App() {
  return (
    <div>
     <Header/>
     <FoodList/>
     <AlertMessage type="failure" message="Your order is $12" />

    </div>
  );
}

export default App;
