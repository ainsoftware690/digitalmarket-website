// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Get user from localStorage
//     const storedUser = localStorage.getItem("user");
//     if (!storedUser) {
//       alert("No user found. Please register first.");
//       router.push("/dashboard/register");
//       return;
//     }

//     const { email: savedEmail, password: savedPassword } = JSON.parse(storedUser);

//     if (email === savedEmail && password === savedPassword) {
//       localStorage.setItem("isLoggedIn", "true");
//       router.push("/dashboard"); // go to dashboard
//     } else {
//       alert("Invalid credentials!");
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-6">Login</h1>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full border rounded-lg px-4 py-2"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full border rounded-lg px-4 py-2"
//           />
//           <button
//             type="submit"
//             className="w-full px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


const DashboardPlaceholder = () => null;
export default DashboardPlaceholder;
