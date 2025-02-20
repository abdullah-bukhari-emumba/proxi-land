import { ReactNode } from "react";
import Head from "next/head";

interface PageWrapperProps {
  title?: string;
  children: ReactNode;
}

export const PageWrapper = ({
  title = "Proximality",
  children,
}: PageWrapperProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <main className="flex-grow container mx-auto p-4">{children}</main>
      </div>
    </>
  );
};
