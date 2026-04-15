import UserDataForm from "@/components/settings/UserDataForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ChangePasswordForm from "@/components/settings/ChangePasswordForm";
import { getUserId } from "@/services/auth";

export default async function Settings() {
  const { id } = await getUserId();

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-gray-900 text-xl font-bold">Account Settings</h2>
        <p className="text-gray-500 font-medium tect-sm">
          Update your profile information and change your password
        </p>
      </div>

      <Card className="p-0 rounded-3xl gap-6">
        <CardHeader className="px-6 pt-6 lg:px-8 lg:pt-8">
          <div className="flex items-center gap-4 ">
            <div className="shrink-0 size-14 bg-primary-200 text-primary-main flex rounded-2xl">
              <svg
                className="m-auto"
                width="38"
                height="30"
                viewBox="0 0 38 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.75 14.5312C19.6734 14.5312 20.5877 14.3494 21.4407 13.996C22.2938 13.6427 23.0689 13.1248 23.7218 12.4718C24.3748 11.8189 24.8927 11.0438 25.246 10.1907C25.5994 9.33767 25.7812 8.42336 25.7812 7.5C25.7812 6.57664 25.5994 5.66233 25.246 4.80926C24.8927 3.95619 24.3748 3.18107 23.7218 2.52816C23.0689 1.87524 22.2938 1.35733 21.4407 1.00397C20.5877 0.650619 19.6734 0.46875 18.75 0.46875C17.8266 0.46875 16.9123 0.650619 16.0593 1.00397C15.2062 1.35733 14.4311 1.87524 13.7782 2.52816C13.1252 3.18107 12.6073 3.95619 12.254 4.80926C11.9006 5.66233 11.7188 6.57664 11.7188 7.5C11.7188 8.42336 11.9006 9.33767 12.254 10.1907C12.6073 11.0438 13.1252 11.8189 13.7782 12.4718C14.4311 13.1248 15.2062 13.6427 16.0593 13.996C16.9123 14.3494 17.8266 14.5312 18.75 14.5312ZM17.0098 17.8125C11.2383 17.8125 6.5625 22.4883 6.5625 28.2598C6.5625 29.2207 7.3418 30 8.30273 30H29.1973C30.1582 30 30.9375 29.2207 30.9375 28.2598C30.9375 22.4883 26.2617 17.8125 20.4902 17.8125H17.0098Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="space-y-0.5">
              <CardTitle className="flex gap-4">
                <h2 className="text-base font-bold text-gray-900">
                  Profile Information
                </h2>
              </CardTitle>
              <CardDescription className="text-sm text-medium text-gray-500">
                Update your personal details
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="px-6 lg:px-8">
          <UserDataForm />
        </CardContent>

        <CardFooter className="p-6 lg:p-8 bg-gray-50 flex-col items-stretch">
          <h3 className="font-bold text-gray-900 mb-4 text-base">
            Account Information
          </h3>

          <div className="flex items-center justify-between mb-3 text-sm font-medium">
            <span className="text-gray-500">User ID</span>
            <span className="font-mono text-gray-700">{id ?? "__"}</span>
          </div>

          <div className="flex items-center justify-between text-sm font-medium">
            <span className="text-gray-500 ">Role</span>
            <span className="px-3 py-1 rounded-lg bg-primary-100 text-primary-700 capitalize">
              user
            </span>
          </div>
        </CardFooter>
      </Card>

      <Card className="p-0 rounded-3xl gap-6">
        <CardHeader className="px-6 pt-6 lg:px-8 lg:pt-8">
          <div className="flex items-center gap-4 ">
            <div className="shrink-0 size-14 bg-amber-200 text-amber-600 flex rounded-2xl">
              <svg
                className="m-auto"
                width="30"
                height="26"
                viewBox="0 0 30 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6V9H18V6C18 4.34531 16.6547 3 15 3C13.3453 3 12 4.34531 12 6ZM9 9V6C9 2.68594 11.6859 0 15 0C18.3141 0 21 2.68594 21 6V9C22.6547 9 24 10.3453 24 12V22.5C24 24.1547 22.6547 25.5 21 25.5H9C7.34531 25.5 6 24.1547 6 22.5V12C6 10.3453 7.34531 9 9 9Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="space-y-0.5">
              <CardTitle className="flex gap-4">
                <h2 className="text-base font-bold text-gray-900">
                  Change Password
                </h2>
              </CardTitle>
              <CardDescription className="text-sm text-medium text-gray-500">
                Update your account password
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="px-6 pb-6 lg:px-8 lg:pb-8">
          <ChangePasswordForm />
        </CardContent>
      </Card>
    </div>
  );
}
