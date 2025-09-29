// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function DashboardHome() {
//   const router = useRouter();

//   useEffect(() => {
//     const loggedIn = localStorage.getItem("isLoggedIn");
//     if (loggedIn !== "true") {
//       router.push("/dashboard/login"); // redirect if not logged in
//     }
//   }, [router]);

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <h1 className="text-3xl font-bold">Welcome to your Dashboard 🎉</h1>
//     </div>
//   );
// }


const DashboardPlaceholder = () => null;
export default DashboardPlaceholder;
