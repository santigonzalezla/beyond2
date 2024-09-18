
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./Pages/UserProfile";
import UserBilling from "./Pages/UserBilling";
import UserBillingAddress from "./Pages/UserBillingAddress";
import UserSecurity from "./Pages/UserSecurity";
import UserPayment from "./Pages/UserPayment";
import LandingPricing from "./Pages/LandingPricing";

const App = () =>
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<UserProfile />} />
                    <Route path="billing">
                        <Route index element={<UserBilling />} />
                        <Route path="editaddress" element={<UserBillingAddress />} />
                        <Route path="editpayment" element={<UserPayment />} />
                    </Route>
                    <Route path="security" element={<UserSecurity />} />
                    <Route path="landing" element={<LandingPricing />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;