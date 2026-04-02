import { Mail, Phone, User, UserPlus } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="hidden lg:block border-b border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center h-10 text-sm">
        <div className="flex items-center gap-6 text-gray-500">
          {/* Free Shipping */}
          <span className="flex items-center gap-2">
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 2.25C0.75 1.42266 1.42266 0.75 2.25 0.75H9C9.82734 0.75 10.5 1.42266 10.5 2.25V3H11.6883C12.0867 3 12.4688 3.15703 12.75 3.43828L13.8117 4.5C14.093 4.78125 14.25 5.16328 14.25 5.56172V9C14.25 9.82734 13.5773 10.5 12.75 10.5H12.6727C12.4289 11.3648 11.632 12 10.6875 12C9.74297 12 8.94844 11.3648 8.70234 10.5H6.29766C6.05391 11.3648 5.25703 12 4.3125 12C3.36797 12 2.57344 11.3648 2.32734 10.5H2.25C1.42266 10.5 0.75 9.82734 0.75 9V2.25ZM12.75 6.75V5.56172L11.6883 4.5H10.5V6.75H12.75ZM5.25 9.9375C5.25 9.68886 5.15123 9.4504 4.97541 9.27459C4.7996 9.09877 4.56114 9 4.3125 9C4.06386 9 3.8254 9.09877 3.64959 9.27459C3.47377 9.4504 3.375 9.68886 3.375 9.9375C3.375 10.1861 3.47377 10.4246 3.64959 10.6004C3.8254 10.7762 4.06386 10.875 4.3125 10.875C4.56114 10.875 4.7996 10.7762 4.97541 10.6004C5.15123 10.4246 5.25 10.1861 5.25 9.9375ZM10.6875 10.875C10.9361 10.875 11.1746 10.7762 11.3504 10.6004C11.5262 10.4246 11.625 10.1861 11.625 9.9375C11.625 9.68886 11.5262 9.4504 11.3504 9.27459C11.1746 9.09877 10.9361 9 10.6875 9C10.4389 9 10.2004 9.09877 10.0246 9.27459C9.84877 9.4504 9.75 9.68886 9.75 9.9375C9.75 10.1861 9.84877 10.4246 10.0246 10.6004C10.2004 10.7762 10.4389 10.875 10.6875 10.875Z"
                fill="#16A34A"
              />
            </svg>

            <span className="font-medium">Free Shipping on Orders 500 EGP</span>
          </span>

          {/* New Arrivals */}
          <span className="flex items-center gap-2">
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.03516 1.6125C9.21328 1.31016 9.53672 1.125 9.88594 1.125H9.9375C10.4555 1.125 10.875 1.54453 10.875 2.0625C10.875 2.58047 10.4555 3 9.9375 3H8.21953L9.03516 1.6125ZM5.96484 1.6125L6.78047 3H5.0625C4.54453 3 4.125 2.58047 4.125 2.0625C4.125 1.54453 4.54453 1.125 5.0625 1.125H5.11406C5.46328 1.125 5.78906 1.31016 5.96484 1.6125ZM8.06484 1.04297L7.5 2.00391L6.93516 1.04297C6.55547 0.396094 5.86172 0 5.11406 0H5.0625C3.92344 0 3 0.923438 3 2.0625C3 2.4 3.08203 2.71875 3.225 3H2.25C1.83516 3 1.5 3.33516 1.5 3.75V4.5C1.5 4.91484 1.83516 5.25 2.25 5.25H12.75C13.1648 5.25 13.5 4.91484 13.5 4.5V3.75C13.5 3.33516 13.1648 3 12.75 3H11.775C11.918 2.71875 12 2.4 12 2.0625C12 0.923438 11.0766 0 9.9375 0H9.88594C9.13828 0 8.44453 0.396094 8.06484 1.04063V1.04297ZM12.75 6.375H8.0625V11.25H11.25C12.0773 11.25 12.75 10.5773 12.75 9.75V6.375ZM6.9375 6.375H2.25V9.75C2.25 10.5773 2.92266 11.25 3.75 11.25H6.9375V6.375Z"
                fill="#16A34A"
              />
            </svg>

            <span className="font-medium">New Arrivals Daily</span>
          </span>
        </div>

        <div className="flex items-center gap-6">
          {/* Contact */}
          <div className="flex items-center gap-4 text-gray-500">
            {/* Phone */}
            <a
              href="tel:+18001234567"
              className="flex items-center gap-1.5 hover:text-primary-600 transition-colors"
            >
              <Phone className="fill-current" width="15" height="12" />
              <span className="font-medium">+1 (800) 123-4567</span>
            </a>
            {/* Mail */}
            <a
              href="mailto:support@freshcart.com"
              className="flex items-center gap-1.5 hover:text-primary-600 transition-colors"
            >
              <Mail width="15" height="12" />
              <span className="font-medium">support@freshcart.com</span>
            </a>
          </div>

          {/* Separator */}
          <span className="w-px h-4 bg-gray-200"></span>

          {/* Auth */}
          <div className="flex items-center gap-4">
            {/* Login */}
            <Link
              className="flex items-center gap-1.5 hover:text-primary-600 transition-colors"
              href="/login"
            >
              <User width="15" height="12" />
              <span className="font-medium">Sign In</span>
            </Link>

            {/* Register */}
            <Link
              className="flex items-center gap-1.5 hover:text-primary-600 transition-colors"
              href="/register"
            >
              <UserPlus width="15" height="12" />
              <span className="font-medium">Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
