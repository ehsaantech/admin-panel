import AdminPanel from "@/components/Dashboard";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ehsaantech Admin Panel",
  description: "This is an Admin panel for Ehsaantech"
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <AdminPanel />
      </DefaultLayout>
    </>
  );
}
