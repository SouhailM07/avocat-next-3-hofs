import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const baseUrl = "https://www.ayoub-ouldrouis-avocat.com";

  const translations = {
    fr: {
      title: "Avocat à Chéraga - Ayoub Ouldrouis",
      description:
        "Cabinet d'avocat à Chéraga en Algérie. Services juridiques professionnels.",
    },
    ar: {
      title: "محامي في الشراقة - أيوب أولدرويس",
      description: "محامي في الشراقة، الجزائر. خدمات قانونية احترافية.",
    },
  };

  const current =
    translations[locale as keyof typeof translations] || translations.fr;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: current.title,
      template: `%s | ${current.title}`,
    },
    description: current.description,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        fr: `${baseUrl}/fr`,
        ar: `${baseUrl}/ar`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: current.title,
      description: current.description,
      url: `${baseUrl}/${locale}`,
      siteName: "Maître Ayoub Ouldrouis",
      locale: locale === "ar" ? "ar_DZ" : "fr_FR",
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-text">
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
        <NextIntlClientProvider messages={messages}>
          {children}
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
