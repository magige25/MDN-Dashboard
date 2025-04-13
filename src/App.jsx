import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop.jsx";
import HomePageOne from "./pages/HomePageOne.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import OtpPage from "./pages/OtpPage.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import EmailPage from "./pages/EmailPage.jsx";
import TableBasicPage from "./pages/TableBasicPage.jsx";
import TableDataPage from "./pages/TableDataPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import TestimonialsPage from "./pages/TestimonialsPage.jsx";
import MaintenancePage from "./pages/MaintenancePage.jsx";
import TermsConditionPage from "./pages/TermsConditionPage.jsx";
import ComingSoonPage from "./pages/ComingSoonPage.jsx";
import BlankPagePage from "./pages/BlankPagePage";
import AccessDeniedPage from "./pages/AccessDeniedPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import AddBlogPage from "./pages/AddBlogPage";
import PricingPage from "./pages/PricingPage";
import FormPage from "./pages/FormPage";
import FormLayoutPage from "./pages/FormLayoutPage";
import FormValidationPage from "./pages/FormValidationPage";
import WizardPage from "./pages/WizardPage";
import ColorsPage from "./pages/ColorsPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import AlertPage from "./pages/AlertPage";
import AvatarPage from "./pages/AvatarPage";
import ProgressPage from "./pages/ProgressPage";
import TabsPage from "./pages/TabsPage";
import CalendarMainPage from "./pages/CalendarMainPage";
import ImageUploadPage from "./pages/ImageUploadPage";
import SwitchPage from "./pages/SwitchPage";
import StarRatingPage from "./pages/StarRatingPage";
import TagsPage from "./pages/TagsPage";
import ListPage from "./pages/ListPage";
import TooltipPage from "./pages/TooltipPage";
import PaginationPage from "./pages/PaginationPage";
import BadgesPage from "./pages/BadgesPage";
import CompanyPage from "./pages/CompanyPage";
import NotificationAlertPage from "./pages/NotificationAlertPage";
import ThemePage from "./pages/ThemePage";
import CurrenciesPage from "./pages/CurrenciesPage";
import LanguagePage from "./pages/LanguagePage";
import UsersPage from "./pages/UsersPage";
import AddUserPage from "./pages/AddUserPage";
import RolesPage from "./pages/RolesPage";
import ViewProfilePage from "./pages/ViewProfilePage";
import UsersGridPage from "./pages/UsersGridPage";
import LineChartPage from "./pages/LineChartPage";
import ColumnChartPage from "./pages/ColumnChartPage";
import PieChartPage from "./pages/PieChartPage";
import InvoicePage from "./pages/InvoicePage";
import AddInvoicePage from "./pages/AddInvoicePage";
import InvoicePreviewPage from "./pages/InvoicePreviewPage";
import ChatMessagePage from "./pages/ChatMessagePage";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop smooth />
      <Routes>
        <Route path="/" element={<HomePageOne />} />
        <Route path="/dashboard" element={<HomePageOne />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/email" element={<EmailPage />} />
        <Route path="/table-basic" element={<TableBasicPage />} />
        <Route path="/table-data" element={<TableDataPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/maintenance" element={<MaintenancePage />} />
        <Route path="/terms-condition" element={<TermsConditionPage />} />
        <Route path="/access-denied" element={<AccessDeniedPage />} />
        <Route path="/coming-soon" element={<ComingSoonPage />} />
        <Route path="/blank-page" element={<BlankPagePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-details" element={<BlogDetailsPage />} />
        <Route path="/add-blog" element={<AddBlogPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/form-layout" element={<FormLayoutPage />} />
        <Route path="/form-validation" element={<FormValidationPage />} />
        <Route path="/wizard" element={<WizardPage />} />
        <Route path='/colors' element={<ColorsPage />} />
        <Route path='/button' element={<ButtonPage />} />
        <Route path='/dropdown' element={<DropdownPage />} />
        <Route path='/alert' element={<AlertPage />} />
        <Route path='/avatar' element={<AvatarPage />} />
        <Route path='/progress' element={<ProgressPage />} />
        <Route path='/tabs' element={<TabsPage />} />
        <Route path='/calendar-main' element={<CalendarMainPage />} />
        <Route path='/calendar' element={<CalendarMainPage />} />
        <Route path='/image-upload' element={<ImageUploadPage />} />
        <Route path='/switch' element={<SwitchPage />} />
        <Route path='/star-rating' element={<StarRatingPage />} />
        <Route path='/tags' element={<TagsPage />} />
        <Route path='/list' element={<ListPage />} />
        <Route path='/tooltip' element={<TooltipPage />} />
        <Route path='/pagination' element={<PaginationPage />} />
        <Route path='/badges' element={<BadgesPage />} />
        <Route path='/company' element={<CompanyPage />} />
        <Route path='/notification-alert' element={<NotificationAlertPage />} />
        <Route path='/theme' element={<ThemePage />} />
        <Route path='/currencies' element={<CurrenciesPage />} />
        <Route path='/language' element={<LanguagePage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='users/add-user' element={<AddUserPage />} />
        <Route path='roles' element={<RolesPage />} />
        <Route path='/view-profile' element={<ViewProfilePage />} />
        <Route path='/users-grid' element={<UsersGridPage />} />
        <Route path='/line-chart' element={<LineChartPage />} />
        <Route path='/column-chart' element={<ColumnChartPage />} />
        <Route path='/pie-chart' element={<PieChartPage />} />
        <Route path='/invoice' element={<InvoicePage />} />
        <Route path='/invoice/add-invoice' element={<AddInvoicePage />} />
        <Route path='/invoice/invoice-preview' element={<InvoicePreviewPage />} />
        <Route path='/chat' element={<ChatMessagePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;