import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mail, MapPin, CalendarDays } from "lucide-react";
import { UserData } from "@/Types/UserTypes";


const UserCard = ({user}:{user:UserData}) => {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md overflow-hidden rounded-2xl border-0 shadow-lg">

        <CardHeader className="-mt-12">

          <CardTitle className="mt-3 text-2xl font-bold text-slate-900">
            {user.name}
          </CardTitle>

          <CardDescription>
            User Profile
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
            <Mail className="h-5 w-5 text-blue-600" />
            <div className="min-w-0">
              <p className="text-xs text-slate-500">Email Address</p>
              <p className="break-all text-sm font-medium text-slate-800">
                {user.email}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
            <CalendarDays className="h-5 w-5 text-blue-600" />
            <div>
              <p className="text-xs text-slate-500">Age</p>
              <p className="text-sm font-medium text-slate-800">
                {user.age} years old
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
            <MapPin className="h-5 w-5 text-blue-600" />
            <div>
              <p className="text-xs text-slate-500">Location</p>
              <p className="text-sm font-medium text-slate-800">
                {user.city}
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full rounded-lg">
            View Profile
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default UserCard;