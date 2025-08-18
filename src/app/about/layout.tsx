import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PexelXus, our mission, values, and how we’re redefining gifting and social connection.",
};

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout