import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AuthService from "@/api/authHandler";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export default function Component() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginUserType, setLoginUserType] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupUserType, setSignupUserType] = useState("");
  // const [signupCourseType, setSignupCourseType] = useState("");
  const [isSubmitButtonClicked, setIsSubmitButtonClicked] = useState(false);
  const [isSignupButtonClicked, setIsSignupButtonClicked] = useState(false);

  const { toast } = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitButtonClicked(true);
    try {
      const res = await AuthService.login({
        email: loginEmail,
        password: loginPassword,
        userType: loginUserType,
      });

      if (res) {
        setLoginEmail("");
        setLoginPassword("");
        setLoginUserType("");
      }

      toast({
        title: "Login successful",
        description: "You have successfully logged in.",
      });
    } catch (error) {
      toast({
        title: "Login failed",
        description: error?.data || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsSubmitButtonClicked(false);
      setOpen(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsSignupButtonClicked(true);
    try {
      const res = await AuthService.signup({
        name: signupName,
        email: signupEmail,
        password: signupPassword,
        userType: signupUserType,
      });

      if (res) {
        setSignupEmail("");
        setSignupName("");
        setSignupPassword("");
        setSignupUserType("");
      }

      toast({
        title: "Signup successful",
        description: "You have successfully signed up.",
      });
    } catch (error) {
      toast({
        title: "Signup failed",
        description: error?.data || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsSignupButtonClicked(false);
      setOpen(false);
    }
  };

  const openDialog = (tab) => {
    setActiveTab(tab);
    setOpen(true);
  };

  return (
    <div className="flex space-x-4">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            onClick={() => openDialog("login")}
            className="bg-[#FF006B] text-white hidden md:block py-2 rounded-md w-[150px] hover:border-none"
          >
            Login
          </Button>
        </DialogTrigger>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            onClick={() => openDialog("signup")}
            className="text-[#FF006B] border border-[#FF006B] hidden md:block font-semibold px-4 py-2 rounded-md w-[150px]"
          >
            Sign Up
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Student/Faculty Portal</DialogTitle>
            <DialogDescription>
              Login or create a new account to access the portal.
            </DialogDescription>
          </DialogHeader>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="loginEmail" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="loginEmail"
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="loginPassword" className="text-right">
                    Password
                  </Label>
                  <Input
                    id="loginPassword"
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="loginUserType" className="text-right">
                    User Type
                  </Label>
                  <Select
                    value={loginUserType}
                    onValueChange={(value) => setLoginUserType(value)}
                    required
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select user type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="faculty">Faculty</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="submit"
                  className="ml-auto bg-[#FF006B] text-white w-full"
                  diabled={isSubmitButtonClicked}
                >
                  {isSubmitButtonClicked ? (
                    <div className="flex flex-row items-center justify-center">
                      <Loader2 className="animate-spin mr-2" size={20} />{" "}
                      Logging In...
                    </div>
                  ) : (
                    "Login"
                  )}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="signupName" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="signupName"
                    type="text"
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="signupEmail" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="signupEmail"
                    type="email"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="signupPassword" className="text-right">
                    Password
                  </Label>
                  <Input
                    id="signupPassword"
                    type="password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    className="col-span-3"
                    required
                  />
                </div>
                {/* <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="signupUserType" className="text-right">
                    Course
                  </Label>
                  <Select
                    value={signupCourseType}
                    onValueChange={(value) => setSignupCourseType(value)}
                    required
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select Course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="course_1">Course 1</SelectItem>
                      <SelectItem value="course_2">Course 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div> */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="signupUserType" className="text-right">
                    User Type
                  </Label>
                  <Select
                    value={signupUserType}
                    onValueChange={(value) => setSignupUserType(value)}
                    required
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select user type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="faculty">Faculty</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="submit"
                  className="ml-auto bg-[#FF006B] text-white w-full"
                  disabled={isSignupButtonClicked}
                >
                  {isSignupButtonClicked ? (
                    <div className="flex flex-row items-center justify-center">
                      <Loader2 className="animate-spin mr-2" size={20} />{" "}
                      Signing Up...
                    </div>
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
}
