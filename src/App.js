import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import MainPage from "./MainPage";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import MyIncomeExpenses from "./pages/me/MyIncomeExpenses";
import MySkills from "./pages/me/my-skills/MySkills";
import MyHabits from "./pages/me/my-habits/MyHabits";
import IncomeExpenses from "./pages/me/inventory/income-expenses/IncomeExpenses";
import MyMissions from "./pages/me/missions/my-missions/MyMissions";
import Missions from "./pages/me/missions/Missions";
import Books from "./pages/me/missions/books/Books";
import Diy from "./pages/me/missions/d-i-y/Diy";
import Finance from "./pages/me/missions/finance/Finance";
import FoodCooking from "./pages/me/missions/food-cooking/FoodCooking";
import Fun from "./pages/me/missions/fun/Fun";
import Habits from "./pages/me/missions/habits/Habits";
import Health from "./pages/me/missions/health/Health";
import HouseHold from "./pages/me/missions/household/HouseHold";
import Humanity from "./pages/me/missions/humanity/Humanity";
import Outdoor from "./pages/me/missions/outdoor/Outdoor";
import Personal from "./pages/me/missions/personal/Personal";
import Social from "./pages/me/missions/social/Social";
import WillPower from "./pages/me/missions/will-power/WillPower";

import Felsefe from "./pages/me/missions/books/categories/felsefe/Felsefe";
import Tarih from "./pages/me/missions/books/categories/tarih/Tarih";
import Sanat from "./pages/me/missions/books/categories/sanat/Sanat";
import Bilim from "./pages/me/missions/books/categories/bilim/Bilim";
import Yonetım from "./pages/me/missions/books/categories/yonetim/Yonetım";
import KisiselGelisim from "./pages/me/missions/books/categories/kisisel-gelisim/KisiselGelisim";

import Roman from "./pages/me/missions/books/categories/roman/Roman";

import Navbar from "./components/navbar/Navbar";
import Musics from "./pages/me/missions/musics/Musics";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <button className="logo">UPPER HUMAN</button>
        <Navbar />

        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/login" element={<Login />} />

          <Route path="/me/my-income-expenses" element={<MyIncomeExpenses />} />
          <Route path="/me/my-skills" element={<MySkills />} />
          <Route path="/me/my-habits" element={<MyHabits />} />
          <Route path="me/my-missions" element={<MyMissions />} />

          <Route path="/income-expenses" element={<IncomeExpenses />} />

          <Route path="/missions" element={<Missions />} />

          <Route path="/missions/books" element={<Books />} />
          <Route path="/missions/books/felsefe" element={<Felsefe />} />
          <Route path="/missions/books/tarih" element={<Tarih />} />
          <Route path="/missions/books/sanat" element={<Sanat />} />
          <Route path="/missions/books/bilim" element={<Bilim />} />
          <Route path="/missions/books/yonetim" element={<Yonetım />} />
          <Route
            path="/missions/books/kisisel-gelisim"
            element={<KisiselGelisim />}
          />
          <Route path="/missions/books/roman" element={<Roman />} />
          <Route path="/missions/diy" element={<Diy />} />
          <Route path="/missions/musics" element={<Musics />} />
          <Route path="/missions/finance" element={<Finance />} />
          <Route path="/missions/food-cooking" element={<FoodCooking />} />
          <Route path="/missions/fun" element={<Fun />} />
          <Route path="/missions/habits" element={<Habits />} />
          <Route path="/missions/health" element={<Health />} />
          <Route path="/missions/household" element={<HouseHold />} />
          <Route path="/missions/humanity" element={<Humanity />} />
          <Route path="/missions/outdoor" element={<Outdoor />} />
          <Route path="/missions/personal" element={<Personal />} />
          <Route path="/missions/social" element={<Social />} />
          <Route path="/missions/willpower" element={<WillPower />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
