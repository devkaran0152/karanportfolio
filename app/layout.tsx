import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karan Kandu | Java Backend Developer",
  description:
    "Portfolio of Karan Kandu, Java Backend Developer specializing in Java, Spring Boot, REST APIs, microservices, Kafka, Redis and SQL.",
  keywords: ["Karan Kandu", "Java Developer", "Backend Developer", "Spring Boot", "Microservices"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
