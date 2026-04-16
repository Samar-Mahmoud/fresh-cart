import ForgotPasswordView from "@/components/forgot-password/View";
import ShieldIcon from "@/components/icons/ShieldIcon";
import { Card } from "@/components/ui/card";

export default function ForgotPassword() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-2xl lg:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="hidden lg:flex flex-col items-stretch justify-center gap-6">
          <div className="h-96 bg-linear-to-br from-primary-50 via-green-50 to-emerald-50 rounded-2xl shadow-lg flex relative overflow-hidden">
            <div className="absolute top-8 left-8 size-24 rounded-full bg-primary-100/50" />
            <div className="absolute bottom-12 right-10 size-32 rounded-full bg-green-100/50" />
            <div className="absolute top-20 right-20 size-16 rounded-full bg-emerald-100/50" />

            <div className="m-auto relative flex flex-col items-center gap-5.25 z-10">
              <div className="size-28 rounded-3xl bg-white shadow-xl flex rotate-3">
                <div className="m-auto size-20 rounded-2xl bg-primary-100 flex">
                  <svg
                    className="m-auto -rotate-3"
                    width="47"
                    height="40"
                    viewBox="0 0 47 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5104 8.76501L19.2749 13.259L28.2629 13.73L28.4984 9.23605C28.6283 6.75735 26.7186 4.63646 24.2399 4.50656C21.7612 4.37666 19.6403 6.28631 19.5104 8.76501ZM14.7809 13.0235L15.0165 8.52949C15.2766 3.56506 19.511 -0.247587 24.4754 0.0125877C29.4399 0.272763 33.2525 4.50714 32.9924 9.47157L32.7568 13.9655C35.2355 14.0954 37.1452 16.2163 37.0153 18.695L36.191 34.4239C36.0611 36.9026 33.9402 38.8123 31.4615 38.6824L13.4856 37.7403C11.0069 37.6104 9.09723 35.4895 9.22713 33.0108L10.0515 17.2819C10.1814 14.8032 12.3022 12.8936 14.7809 13.0235Z"
                      fill="#16A34A"
                    />
                  </svg>
                </div>
              </div>

              <div className="absolute -left-16 top-4 size-14 rounded-xl bg-white shadow-lg flex -rotate-12">
                <svg
                  className="m-auto size-6"
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.0625 1.75C2.33789 1.75 1.75 2.33789 1.75 3.0625C1.75 3.47539 1.94414 3.86367 2.275 4.1125L7.9625 8.37812C8.43008 8.72812 9.06992 8.72812 9.5375 8.37812L15.225 4.1125C15.5559 3.86367 15.75 3.47539 15.75 3.0625C15.75 2.33789 15.1621 1.75 14.4375 1.75H3.0625ZM1.75 5.35938V10.5C1.75 11.4652 2.53477 12.25 3.5 12.25H14C14.9652 12.25 15.75 11.4652 15.75 10.5V5.35938L10.325 9.42812C9.39258 10.1281 8.10742 10.1281 7.175 9.42812L1.75 5.35938Z"
                    fill="#22C55E"
                  />
                </svg>
              </div>

              <div className="absolute -right-16 top-8 size-14 rounded-xl bg-white shadow-lg flex rotate-12">
                <ShieldIcon className="m-auto size-6 text-primary-600" />
              </div>

              <div className="flex gap-3">
                <div className="w-3 h-3 rounded-full bg-primary-400 animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-primary-500 animate-pulse [animation-delay:150ms]" />
                <div className="w-3 h-3 rounded-full bg-primary-600 animate-pulse [animation-delay:300ms]" />
              </div>
            </div>
          </div>

          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Reset Your Password
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Don&apos;t worry, it happens to the best of us. We&apos;ll help
              you get back into your account in no time.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm font-medium text-gray-500">
              <span className="flex items-center gap-2">
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.0625 1.75C2.33789 1.75 1.75 2.33789 1.75 3.0625C1.75 3.47539 1.94414 3.86367 2.275 4.1125L7.9625 8.37812C8.43008 8.72812 9.06992 8.72812 9.5375 8.37812L15.225 4.1125C15.5559 3.86367 15.75 3.47539 15.75 3.0625C15.75 2.33789 15.1621 1.75 14.4375 1.75H3.0625ZM1.75 5.35938V10.5C1.75 11.4652 2.53477 12.25 3.5 12.25H14C14.9652 12.25 15.75 11.4652 15.75 10.5V5.35938L10.325 9.42812C9.39258 10.1281 8.10742 10.1281 7.175 9.42812L1.75 5.35938Z"
                    fill="#16A34A"
                  />
                </svg>
                Email Verification
              </span>

              <span className="flex items-center gap-2">
                <ShieldIcon className="size-4 text-primary-main" />
                Secure Reset
              </span>

              <span className="flex items-center gap-2">
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 3.5V5.25H10.5V3.5C10.5 2.53477 9.71523 1.75 8.75 1.75C7.78477 1.75 7 2.53477 7 3.5ZM5.25 5.25V3.5C5.25 1.5668 6.8168 0 8.75 0C10.6832 0 12.25 1.5668 12.25 3.5V5.25C13.2152 5.25 14 6.03477 14 7V13.125C14 14.0902 13.2152 14.875 12.25 14.875H5.25C4.28477 14.875 3.5 14.0902 3.5 13.125V7C3.5 6.03477 4.28477 5.25 5.25 5.25Z"
                    fill="#16A34A"
                  />
                </svg>
                Encrypted
              </span>
            </div>
          </div>
        </div>

        <Card className="p-8 lg:p-12 gap-0 rounded-2xl">
          <div className="text-3xl font-semibold text-gray-700 mb-4 text-center">
            Fresh<span className="text-primary-main">Cart</span>
          </div>

          <ForgotPasswordView />
        </Card>
      </div>
    </main>
  );
}
