import HomeComponent from "./components/HomeComponent";
import { redirect } from "next/navigation";
import ipinfo from "ipinfo";
import { headers, cookies } from "next/headers";

export default async function Home() {
  return <HomeComponent />;
}
