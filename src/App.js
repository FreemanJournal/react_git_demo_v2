import {GlobalProvider} from "./component/MiniExpenseTracker/context/GlobalContext"
import ExpenseTracker from "./component/MiniExpenseTracker/ExpenseTracker"

function App() {
  return (
    <div>
      <GlobalProvider>
        <ExpenseTracker/>
      </GlobalProvider>
    </div>
  );
}

export default App;
